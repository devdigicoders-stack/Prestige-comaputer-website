'use client'

import { useEffect, useState } from 'react'
import {
  getUserAddresses,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from '../../services/authApi'
import { useLanguage } from '../../context/LanguageContext'

const QATAR_MUNICIPALITIES = [
  'Doha',
  'Al Rayyan',
  'Al Wakrah',
  'Lusail',
  'Al Khor',
  'Al Daayen',
  'Umm Salal',
  'Al Shamal',
  'Al Shahaniya',
]

export default function DeliveryAddressSection({
  currentUser,
  selectedAddress,
  onSelectAddress,
}) {
  const { isArabic } = useLanguage()
  const [addresses, setAddresses] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAddr, setEditingAddr] = useState(null)
  const [saving, setSaving] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    street: '',
    city: 'Doha',
    state: 'Doha',
    postalCode: '',
    country: 'Qatar',
    type: 'Home',
    isDefault: false,
  })

  // Load addresses directly from database via API
  useEffect(() => {
    let ignore = false
    const loadAddresses = async () => {
      if (!currentUser) {
        setAddresses([])
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const liveAddresses = await getUserAddresses()
        if (ignore) return

        if (Array.isArray(liveAddresses) && liveAddresses.length > 0) {
          setAddresses(liveAddresses)
          const def = liveAddresses.find((a) => a.isDefault) || liveAddresses[0]
          if (
            def &&
            (!selectedAddress ||
              !liveAddresses.some(
                (p) => (p._id || p.id) === (selectedAddress._id || selectedAddress.id)
              ))
          ) {
            onSelectAddress(def)
          }
        } else {
          setAddresses([])
        }
      } catch (err) {
        if (!ignore) {
          console.warn('Failed to fetch addresses from API:', err.message)
        }
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    loadAddresses()
    return () => {
      ignore = true
    }
  }, [currentUser])

  const handleOpenAdd = () => {
    setEditingAddr(null)
    setErrorMsg('')
    setFormData({
      name: currentUser?.name || '',
      phone: currentUser?.phone || currentUser?.mobile || '+974 ',
      street: '',
      city: currentUser?.city || 'Doha',
      state: 'Doha',
      postalCode: '',
      country: 'Qatar',
      type: 'Home',
      isDefault: addresses.length === 0,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (addr, e) => {
    e.stopPropagation()
    setEditingAddr(addr)
    setErrorMsg('')
    setFormData({
      name: addr.name || currentUser?.name || '',
      phone: addr.phone || '',
      street: addr.street || addr.address?.split(',')[0] || '',
      city: addr.city || 'Doha',
      state: addr.state || 'Doha',
      postalCode: addr.postalCode || '',
      country: addr.country || 'Qatar',
      type: addr.type || 'Home',
      isDefault: !!addr.isDefault,
    })
    setIsModalOpen(true)
  }

  const handleRemove = async (addrId, e) => {
    e.stopPropagation()
    if (!confirm(isArabic ? 'هل تريد حذف هذا العنوان؟' : 'Are you sure you want to remove this address?')) return
    try {
      const updatedList = await deleteUserAddress(addrId)
      const list = Array.isArray(updatedList) ? updatedList : addresses.filter((a) => (a._id || a.id) !== addrId)
      setAddresses(list)

      if ((selectedAddress?._id || selectedAddress?.id) === addrId) {
        const remaining = list[0] || null
        onSelectAddress(remaining)
      }
    } catch (err) {
      alert(err.message || 'Failed to remove address')
    }
  }

  const handleSaveModal = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.name.trim() || !formData.phone.trim() || !formData.street.trim() || !formData.city.trim()) {
      setErrorMsg(isArabic ? 'يرجى ملء جميع الحقول المطلوبة (الاسم، الهاتف، الشارع، والمدينة).' : 'Please fill in all required fields (Name, Phone, Street, and City).')
      return
    }

    setSaving(true)
    try {
      const payload = {
        ...formData,
        country: 'Qatar',
        postalCode: formData.postalCode?.trim() || 'Doha',
      }

      if (editingAddr) {
        const res = await updateUserAddress(editingAddr._id || editingAddr.id, payload)
        const updatedList = res?.addresses || addresses.map((a) => (a._id === editingAddr._id ? { ...a, ...payload } : a))
        setAddresses(updatedList)
        const savedItem = res?.address || updatedList.find((a) => (a._id || a.id) === (editingAddr._id || editingAddr.id))
        if (savedItem && (selectedAddress?._id || selectedAddress?.id) === (editingAddr._id || editingAddr.id)) {
          onSelectAddress(savedItem)
        }
      } else {
        const res = await addUserAddress(payload)
        const updatedList = res?.addresses || [...addresses, res?.address]
        setAddresses(updatedList)
        const newAddress = res?.address || updatedList[updatedList.length - 1]
        if (newAddress) {
          onSelectAddress(newAddress)
        }
      }
      setIsModalOpen(false)
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save address to database')
    } finally {
      setSaving(false)
    }
  }

  const formatAddressString = (addr) => {
    if (addr.address) return addr.address
    const parts = [addr.street, addr.city, addr.state !== addr.city ? addr.state : null, addr.country || 'Qatar'].filter(Boolean)
    return parts.join(', ')
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-[#dc1414] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
            1
          </span>
          <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
            {isArabic ? 'عنوان التوصيل' : 'Delivery Address'}
          </h2>
        </div>
        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          <span>{isArabic ? 'إضافة عنوان جديد' : 'Add New Address'}</span>
        </button>
      </div>

      {/* Address Cards List */}
      {loading ? (
        <div className="py-8 text-center text-gray-500 text-[13px]">
          {isArabic ? 'جاري تحميل العناوين المحفوظة...' : 'Loading saved addresses from database...'}
        </div>
      ) : addresses.length === 0 ? (
        <div className="border border-dashed border-[#d1d5db] rounded-2xl p-6 text-center bg-[#fafafa]">
          <p className="text-[13.5px] font-semibold text-[#4b5563]">
            {isArabic ? 'لم تتم إضافة عنوان توصيل بعد.' : 'No delivery address added in your account yet.'}
          </p>
          <p className="text-[12px] text-[#6b7280] mt-1">
            {isArabic ? 'يرجى إضافة عنوانك في قطر لإتمام عملية التوصيل.' : 'Please add your Qatar shipping address to proceed with order delivery.'}
          </p>
          <button
            type="button"
            onClick={handleOpenAdd}
            className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] text-white text-[12.5px] font-bold hover:bg-[#b91c1c] transition-colors cursor-pointer"
          >
            + {isArabic ? 'إضافة عنوان التوصيل' : 'Add Delivery Address'}
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {addresses.map((addr) => {
            const addrKey = addr._id || addr.id
            const isSelected = (selectedAddress?._id || selectedAddress?.id) === addrKey

            return (
              <div
                key={addrKey}
                onClick={() => onSelectAddress(addr)}
                className={`rounded-2xl p-4 sm:p-4.5 transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                    : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  {/* Left: Radio + Icon + Info */}
                  <div className="flex items-start gap-3">
                    {/* Radio Indicator */}
                    <div className="mt-1">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-[#dc1414] bg-white'
                            : 'border-[#d1d5db] bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                        )}
                      </div>
                    </div>

                    {/* Address Type Icon */}
                    <div className="mt-0.5 text-[#374151]">
                      {addr.type === 'Office' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      )}
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-[14.5px] font-bold text-[#111827]">
                          {addr.name || currentUser?.name || 'Customer'}
                        </span>
                        <span className="text-[11px] font-semibold text-[#4b5563] bg-[#f3f4f6] px-2 py-0.5 rounded-md">
                          {addr.type || 'Home'}
                        </span>
                        {addr.isDefault && (
                          <span className="text-[10.5px] font-bold text-[#dc1414] bg-[#fee2e2] px-2 py-0.5 rounded-md">
                            {isArabic ? 'افتراضي' : 'Default'}
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-[13px] text-[#4b5563] leading-snug max-w-xl">
                        {formatAddressString(addr)}
                      </p>

                      <p className="mt-1 text-[12.5px] font-semibold text-[#111827] dir-ltr inline-block">
                        {isArabic ? 'الهاتف:' : 'Mobile:'} {addr.phone}
                      </p>
                    </div>
                  </div>

                  {/* Right Actions: Edit & Remove */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleOpenEdit(addr, e)}
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#4b5563] hover:text-[#dc1414] transition-colors cursor-pointer"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                      </svg>
                      <span>{isArabic ? 'تعديل' : 'Edit'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleRemove(addrKey, e)}
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#dc1414] hover:text-[#b91c1c] transition-colors cursor-pointer"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                      </svg>
                      <span>{isArabic ? 'حذف' : 'Remove'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Add / Edit Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-scale-up">
            <h3 className="text-[17px] font-bold text-[#111827] mb-4">
              {editingAddr
                ? isArabic
                  ? 'تعديل عنوان التوصيل'
                  : 'Edit Delivery Address'
                : isArabic
                ? 'إضافة عنوان توصيل جديد (قطر)'
                : 'Add Delivery Address (Qatar)'}
            </h3>

            {errorMsg && (
              <div className="mb-3 p-2.5 bg-red-50 border border-red-200 rounded-lg text-[12px] text-red-600 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSaveModal} className="flex flex-col gap-3.5">
              {/* Recipient Full Name */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isArabic ? 'مثال: أحمد الكواري' : 'e.g. Ahmed Al-Kuwari'}
                  className="w-full text-[13px] border border-[#d1d5db] rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                />
              </div>

              {/* Contact Phone Number */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'رقم الهاتف المحمول (قطر) *' : 'Contact Mobile Number (Qatar) *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+974 6691 9155"
                  className="w-full text-[13px] border border-[#d1d5db] rounded-xl px-3 py-2 outline-none focus:border-[#dc1414] dir-ltr"
                />
              </div>

              {/* Building/Street/Zone */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic
                    ? 'رقم المبنى والشارع والمنطقة *'
                    : 'Building No, Street No, Zone No (Qatar Address) *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  placeholder={
                    isArabic
                      ? 'مثال: مبنى 201، شارع 840، منطقة 39 (المرقاب)'
                      : 'e.g. Bldg 201, St 840, Zone 39 (Al Mirqab Mall)'
                  }
                  className="w-full text-[13px] border border-[#d1d5db] rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                />
              </div>

              {/* Municipality / City Selector & District */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    {isArabic ? 'البلدية / المدينة *' : 'Municipality / City *'}
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value, state: e.target.value })}
                    className="w-full text-[13px] border border-[#d1d5db] rounded-xl px-3 py-2 outline-none focus:border-[#dc1414] bg-white cursor-pointer"
                  >
                    {QATAR_MUNICIPALITIES.map((mun) => (
                      <option key={mun} value={mun}>
                        {mun}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    {isArabic ? 'المنطقة / الحي' : 'District / Area (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder={isArabic ? 'مثال: السد، الخليج الغربي' : 'e.g. Al Sadd, West Bay'}
                    className="w-full text-[13px] border border-[#d1d5db] rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                  />
                </div>
              </div>

              {/* Address Type Buttons */}
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'نوع العنوان' : 'Address Type'}
                </label>
                <div className="flex gap-2">
                  {['Home', 'Office', 'Other'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: t })}
                      className={`px-4 py-1.5 rounded-lg text-[12.5px] font-semibold border cursor-pointer transition-colors ${
                        formData.type === t
                          ? 'border-[#dc1414] bg-[#fef2f2] text-[#dc1414]'
                          : 'border-[#d1d5db] text-[#4b5563] hover:bg-gray-50'
                      }`}
                    >
                      {t === 'Home' ? (isArabic ? 'المنزل' : 'Home') : t === 'Office' ? (isArabic ? 'العمل' : 'Office') : (isArabic ? 'آخر' : 'Other')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Default checkbox */}
              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="accent-[#dc1414] w-4 h-4"
                />
                <span className="text-[12.5px] font-medium text-[#374151]">
                  {isArabic ? 'تعيين كعنوان توصيل افتراضي' : 'Set as default delivery address'}
                </span>
              </label>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#f3f4f6]">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-[13px] font-semibold text-[#6b7280] hover:text-[#111827] cursor-pointer"
                >
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-[13px] font-bold bg-[#dc1414] text-white rounded-xl hover:bg-[#b91c1c] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {saving
                    ? isArabic
                      ? 'جاري الحفظ...'
                      : 'Saving...'
                    : isArabic
                    ? 'حفظ العنوان'
                    : 'Save Address'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
