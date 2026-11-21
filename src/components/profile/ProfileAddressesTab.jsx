'use client'

import { useEffect, useState } from 'react'
import {
  getUserAddresses,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from '../../services/authApi'

export default function ProfileAddressesTab() {
  const [addresses, setAddresses] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAddr, setEditingAddr] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState('')

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

  const loadAddresses = async () => {
    setLoading(true)
    try {
      const data = await getUserAddresses()
      if (Array.isArray(data)) {
        setAddresses(data)
      }
    } catch (err) {
      console.warn('Failed to fetch addresses:', err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAddresses()
  }, [])

  const handleOpenAdd = () => {
    setEditingAddr(null)
    setFormData({
      name: '',
      phone: '',
      street: '',
      city: 'Doha',
      state: 'Doha',
      postalCode: '',
      country: 'Qatar',
      type: 'Home',
      isDefault: addresses.length === 0,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (addr) => {
    setEditingAddr(addr)
    setFormData({
      name: addr.name || '',
      phone: addr.phone || '',
      street: addr.street || addr.address || '',
      city: addr.city || 'Doha',
      state: addr.state || 'Doha',
      postalCode: addr.postalCode || '',
      country: addr.country || 'Qatar',
      type: addr.type || 'Home',
      isDefault: !!addr.isDefault,
    })
    setIsModalOpen(true)
  }

  const handleSetDefault = async (addr) => {
    try {
      const updated = await updateUserAddress(addr._id || addr.id, {
        ...addr,
        isDefault: true,
      })
      if (Array.isArray(updated)) {
        setAddresses(updated)
      } else {
        loadAddresses()
      }
    } catch (err) {
      alert(err.message || 'Failed to set default address')
    }
  }

  const handleRemove = async (id) => {
    if (!confirm('Are you sure you want to remove this delivery address?')) return
    try {
      const remaining = await deleteUserAddress(id)
      if (Array.isArray(remaining)) {
        setAddresses(remaining)
      } else {
        setAddresses((prev) => prev.filter((a) => (a._id || a.id) !== id))
      }
      setFeedback('Address removed successfully.')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to delete address')
    }
  }

  const handleSaveModal = async (e) => {
    e.preventDefault()
    if (!formData.street.trim() || !formData.phone.trim()) {
      alert('Please fill all required street and phone details.')
      return
    }

    setIsSubmitting(true)
    try {
      if (editingAddr) {
        const id = editingAddr._id || editingAddr.id
        const res = await updateUserAddress(id, formData)
        if (Array.isArray(res)) setAddresses(res)
        else loadAddresses()
      } else {
        const res = await addUserAddress(formData)
        if (Array.isArray(res)) setAddresses(res)
        else loadAddresses()
      }
      setIsModalOpen(false)
      setFeedback('Address saved successfully in database!')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to save address')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f3f4f6] mb-5">
        <div>
          <h2 className="text-[18px] font-bold text-[#111827]">
            Saved Delivery Addresses
          </h2>
          <p className="text-[12.5px] text-[#6b7280]">
            Manage delivery locations for orders and rental equipment.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12.5px] font-bold transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          <span>Add New Address</span>
        </button>
      </div>

      {feedback && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12.5px] font-medium">
          {feedback}
        </div>
      )}

      {loading ? (
        <div className="py-12 text-center text-[#6b7280] animate-pulse">
          Loading saved addresses from database...
        </div>
      ) : addresses.length === 0 ? (
        <div className="py-10 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <p className="text-[14px] font-bold text-[#111827]">No saved addresses found</p>
          <p className="text-[12px] text-[#6b7280] mt-0.5">Add an address to make your checkout faster.</p>
          <button
            type="button"
            onClick={handleOpenAdd}
            className="mt-3 px-4 py-2 rounded-xl bg-[#dc1414] text-white text-[12px] font-bold hover:bg-[#b91c1c]"
          >
            + Add First Address
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((addr) => {
            const id = addr._id || addr.id
            const fullAddress = [addr.street || addr.address, addr.city, addr.state, addr.postalCode].filter(Boolean).join(', ')

            return (
              <div
                key={id}
                className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all border ${
                  addr.isDefault
                    ? 'bg-[#fef2f2]/40 border-[#dc1414] shadow-xs'
                    : 'bg-white border-[#e5e7eb] hover:border-[#9ca3af]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold text-[#111827]">{addr.type || 'Home'}</span>
                      {addr.isDefault && (
                        <span className="text-[10.5px] font-bold text-[#dc1414] bg-[#fee2e2] px-2 py-0.5 rounded-md">
                          Default
                        </span>
                      )}
                    </div>
                  </div>

                  {addr.name && (
                    <p className="text-[13px] font-semibold text-[#111827]">{addr.name}</p>
                  )}

                  <p className="text-[12.5px] text-[#4b5563] leading-relaxed my-1">
                    {fullAddress}
                  </p>

                  {addr.phone && (
                    <p className="text-[12px] text-[#6b7280]">Mobile: <strong className="text-[#111827] font-semibold">{addr.phone}</strong></p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#f3f4f6] mt-3">
                  {!addr.isDefault ? (
                    <button
                      type="button"
                      onClick={() => handleSetDefault(addr)}
                      className="text-[12px] font-medium text-[#6b7280] hover:text-[#dc1414] cursor-pointer"
                    >
                      Set as Default
                    </button>
                  ) : (
                    <span className="text-[11.5px] font-semibold text-[#dc1414]">Primary Address</span>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(addr)}
                      className="text-[12px] font-bold text-[#374151] hover:text-[#dc1414] cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(id)}
                      className="text-[12px] font-bold text-[#dc2626] hover:underline cursor-pointer"
                    >
                      Remove
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl w-full max-w-lg p-5 sm:p-6 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#f3f4f6] mb-4">
              <h3 className="text-[16px] font-bold text-[#111827]">
                {editingAddr ? 'Edit Delivery Address' : 'Add New Delivery Address'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="flex flex-col gap-3.5 text-[13px]">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recipient Full Name"
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  Street Address / Flat / Building *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  placeholder="House/Flat No., Apartment Name, Street, Landmark"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414] resize-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {['Home', 'Office', 'Other'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: t })}
                      className={`px-3 py-1 rounded-lg text-[12px] font-semibold border ${
                        formData.type === t
                          ? 'border-[#dc1414] bg-[#fef2f2] text-[#dc1414]'
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <label className="flex items-center gap-2 text-[12.5px] cursor-pointer text-[#374151]">
                  <input
                    type="checkbox"
                    checked={formData.isDefault}
                    onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                    className="accent-[#dc1414]"
                  />
                  <span>Make Default</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#f3f4f6]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold disabled:opacity-60"
                >
                  {isSubmitting ? 'Saving...' : 'Save Address'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
