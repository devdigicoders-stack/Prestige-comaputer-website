'use client'

import { useState } from 'react'

export default function DeliveryAddressSection({
  selectedAddressId,
  onSelectAddress,
}) {
  const [addresses, setAddresses] = useState([
    {
      id: 'addr-1',
      type: 'Home',
      isDefault: true,
      address: 'D-104, Sharda Apartment, Kakadeo, Kanpur - 208025, Uttar Pradesh',
      phone: '+91 98765 43210',
    },
    {
      id: 'addr-2',
      type: 'Office',
      isDefault: false,
      address: 'A-201, IT Park, Civil Lines, Kanpur - 208001, Uttar Pradesh',
      phone: '+91 91234 56789',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAddr, setEditingAddr] = useState(null)
  const [formData, setFormData] = useState({
    type: 'Home',
    address: '',
    phone: '',
    isDefault: false,
  })

  const handleOpenAdd = () => {
    setEditingAddr(null)
    setFormData({
      type: 'Home',
      address: '',
      phone: '+91 ',
      isDefault: false,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (addr, e) => {
    e.stopPropagation()
    setEditingAddr(addr)
    setFormData({
      type: addr.type,
      address: addr.address,
      phone: addr.phone,
      isDefault: addr.isDefault,
    })
    setIsModalOpen(true)
  }

  const handleRemove = (addrId, e) => {
    e.stopPropagation()
    if (addresses.length <= 1) {
      alert('At least one delivery address is required.')
      return
    }
    setAddresses((prev) => prev.filter((a) => a.id !== addrId))
    if (selectedAddressId === addrId) {
      const remaining = addresses.find((a) => a.id !== addrId)
      if (remaining) onSelectAddress(remaining.id)
    }
  }

  const handleSaveModal = (e) => {
    e.preventDefault()
    if (!formData.address.trim() || !formData.phone.trim()) {
      alert('Please fill in both address and phone number.')
      return
    }

    if (editingAddr) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editingAddr.id
            ? { ...a, ...formData }
            : formData.isDefault
            ? { ...a, isDefault: false }
            : a
        )
      )
    } else {
      const newId = `addr-${Date.now()}`
      const newObj = {
        id: newId,
        ...formData,
      }
      setAddresses((prev) =>
        formData.isDefault
          ? [...prev.map((a) => ({ ...a, isDefault: false })), newObj]
          : [...prev, newObj]
      )
      onSelectAddress(newId)
    }
    setIsModalOpen(false)
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-6 h-6 rounded-full bg-[#dc1414] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
          1
        </span>
        <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
          Delivery Address
        </h2>
      </div>

      {/* Address Cards List */}
      <div className="flex flex-col gap-3">
        {addresses.map((addr) => {
          const isSelected = selectedAddressId === addr.id

          return (
            <div
              key={addr.id}
              onClick={() => onSelectAddress(addr.id)}
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
                        {addr.type}
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10.5px] font-bold text-[#dc1414] bg-[#fee2e2] px-2 py-0.5 rounded-md">
                          Default
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-[13px] text-[#4b5563] leading-snug max-w-xl">
                      {addr.address}
                    </p>

                    <p className="mt-1 text-[13px] font-semibold text-[#111827]">
                      {addr.phone}
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
                    <span>Edit</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleRemove(addr.id, e)}
                    className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#dc1414] hover:text-[#b91c1c] transition-colors cursor-pointer"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                    </svg>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        {/* Add New Address Button */}
        <button
          type="button"
          onClick={handleOpenAdd}
          className="w-full border border-dashed border-[#d1d5db] hover:border-[#dc1414] bg-white rounded-xl py-3 px-4 text-[#374151] hover:text-[#dc1414] font-semibold text-[13.5px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          <span>Add New Address</span>
        </button>
      </div>

      {/* Add / Edit Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <h3 className="text-[17px] font-bold text-[#111827] mb-4">
              {editingAddr ? 'Edit Delivery Address' : 'Add New Delivery Address'}
            </h3>

            <form onSubmit={handleSaveModal} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  Address Type
                </label>
                <div className="flex gap-2">
                  {['Home', 'Office', 'Other'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: t })}
                      className={`px-4 py-1.5 rounded-lg text-[12.5px] font-semibold border cursor-pointer ${
                        formData.type === t
                          ? 'border-[#dc1414] bg-[#fef2f2] text-[#dc1414]'
                          : 'border-[#d1d5db] text-[#4b5563]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  Complete Address
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Flat/House No, Building, Street, Area, City, State, Pincode"
                  className="w-full text-[13px] border border-[#d1d5db] rounded-xl p-2.5 outline-none focus:border-[#dc1414]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full text-[13px] border border-[#d1d5db] rounded-xl p-2.5 outline-none focus:border-[#dc1414]"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="accent-[#dc1414]"
                />
                <span className="text-[12.5px] text-[#374151]">Set as default address</span>
              </label>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#f3f4f6]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-[13px] font-semibold text-[#6b7280] hover:text-[#111827] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-[13px] font-bold bg-[#dc1414] text-white rounded-xl hover:bg-[#b91c1c] cursor-pointer"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
