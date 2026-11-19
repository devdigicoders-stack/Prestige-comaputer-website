'use client'

import { useState } from 'react'

export default function ProfileAddressesTab() {
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

  const handleOpenEdit = (addr) => {
    setEditingAddr(addr)
    setFormData({
      type: addr.type,
      address: addr.address,
      phone: addr.phone,
      isDefault: addr.isDefault,
    })
    setIsModalOpen(true)
  }

  const handleSetDefault = (id) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    )
  }

  const handleRemove = (id) => {
    if (addresses.length <= 1) {
      alert('At least one address must be kept in your profile.')
      return
    }
    setAddresses((prev) => prev.filter((a) => a.id !== id))
  }

  const handleSaveModal = (e) => {
    e.preventDefault()
    if (!formData.address.trim() || !formData.phone.trim()) {
      alert('Please fill all required fields.')
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
      const newObj = {
        id: `addr-${Date.now()}`,
        ...formData,
      }
      setAddresses((prev) =>
        formData.isDefault
          ? [...prev.map((a) => ({ ...a, isDefault: false })), newObj]
          : [...prev, newObj]
      )
    }
    setIsModalOpen(false)
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all border ${
              addr.isDefault
                ? 'bg-[#fef2f2]/40 border-[#dc1414] shadow-xs'
                : 'bg-white border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[14.5px] font-bold text-[#111827]">{addr.type}</span>
                  {addr.isDefault && (
                    <span className="text-[10.5px] font-bold text-[#dc1414] bg-[#fee2e2] px-2 py-0.5 rounded-md">
                      Default
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[13px] text-[#4b5563] leading-relaxed mb-2">
                {addr.address}
              </p>
              <p className="text-[12.5px] font-semibold text-[#111827]">
                Phone: {addr.phone}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#f3f4f6]">
              {!addr.isDefault ? (
                <button
                  type="button"
                  onClick={() => handleSetDefault(addr.id)}
                  className="text-[12px] font-semibold text-[#6b7280] hover:text-[#dc1414] cursor-pointer"
                >
                  Set as Default
                </button>
              ) : (
                <span className="text-[12px] font-medium text-[#16a34a]">
                  ✓ Default Address
                </span>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(addr)}
                  className="text-[12.5px] font-semibold text-[#374151] hover:text-[#dc1414] cursor-pointer"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(addr.id)}
                  className="text-[12.5px] font-semibold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <h3 className="text-[17px] font-bold text-[#111827] mb-4">
              {editingAddr ? 'Edit Address' : 'Add New Address'}
            </h3>

            <form onSubmit={handleSaveModal} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">Address Type</label>
                <div className="flex gap-2">
                  {['Home', 'Office', 'Other'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: t })}
                      className={`px-4 py-1.5 rounded-lg text-[12.5px] font-semibold border cursor-pointer ${
                        formData.type === t ? 'border-[#dc1414] bg-[#fef2f2] text-[#dc1414]' : 'border-[#d1d5db] text-[#4b5563]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">Complete Address</label>
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
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">Phone Number</label>
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
