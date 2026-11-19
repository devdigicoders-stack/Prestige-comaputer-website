'use client'

import { useState } from 'react'
import { useStore } from '../../context/StoreContext'

export default function ProfilePersonalTab() {
  const { currentUser, setCurrentUser } = useStore()

  const [formData, setFormData] = useState({
    firstName: currentUser?.name ? currentUser.name.split(' ')[0] : 'Rahul',
    lastName: currentUser?.name ? currentUser.name.split(' ').slice(1).join(' ') : 'Sharma',
    email: currentUser?.email || 'rahul.sharma@prestigecomputers.in',
    phone: currentUser?.phone || '+91 98765 43210',
    gender: 'Male',
    dob: '1996-08-15',
    userType: 'Individual', // Individual | Business | Institution
    companyName: 'Prestige IT Solutions',
    gstin: '09AAACP1234A1Z5',
  })

  const [isSaving, setIsSaving] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleSave = (e) => {
    e.preventDefault()
    setIsSaving(true)

    setTimeout(() => {
      setIsSaving(false)
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()
      setCurrentUser({
        ...(currentUser || {}),
        name: fullName,
        email: formData.email,
        phone: formData.phone,
      })
      setToastMessage('Profile details updated successfully!')
      setTimeout(() => setToastMessage(''), 3000)
    }, 500)
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#f3f4f6] mb-6">
        <div>
          <h2 className="text-[18px] sm:text-[19px] font-bold text-[#111827]">
            Personal Information
          </h2>
          <p className="text-[12.5px] text-[#6b7280] mt-0.5">
            Manage your personal details, contact information and account type.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-5">
        {/* User Type Switcher (Individual / Business / Institution) */}
        <div>
          <label className="block text-[12.5px] font-semibold text-[#374151] mb-2">
            Account Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'Individual', label: 'Individual', desc: 'For personal shopping' },
              { id: 'Business', label: 'Business', desc: 'For company & GST invoice' },
              { id: 'Institution', label: 'Institution', desc: 'For school / college' },
            ].map((type) => {
              const active = formData.userType === type.id
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: type.id })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'border-[#dc1414] bg-[#fef2f2]/60 shadow-2xs'
                      : 'border-[#e5e7eb] hover:border-[#9ca3af] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        active ? 'border-[#dc1414]' : 'border-[#d1d5db]'
                      }`}
                    >
                      {active && <div className="w-2 h-2 rounded-full bg-[#dc1414]" />}
                    </div>
                    <span className="text-[13px] font-bold text-[#111827]">{type.label}</span>
                  </div>
                  <p className="text-[11px] text-[#6b7280] mt-1 ml-6">{type.desc}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
              First Name *
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[12.5px] font-semibold text-[#374151]">
                Email Address *
              </label>
              <span className="text-[11px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                ✓ Verified
              </span>
            </div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[12.5px] font-semibold text-[#374151]">
                Mobile Number *
              </label>
              <span className="text-[11px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                ✓ Verified
              </span>
            </div>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Gender & Date of Birth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
              Gender
            </label>
            <div className="flex items-center gap-3 pt-1">
              {['Male', 'Female', 'Other'].map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer text-[13px] text-[#374151]">
                  <input
                    type="radio"
                    name="gender"
                    checked={formData.gender === g}
                    onChange={() => setFormData({ ...formData, gender: g })}
                    className="accent-[#dc1414] cursor-pointer"
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Business details if Business selected */}
        {formData.userType === 'Business' && (
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
            <div>
              <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                Company / Organization Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full text-[13px] bg-white border border-[#d1d5db] rounded-lg px-3 py-2 outline-none focus:border-[#dc1414]"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                GSTIN Number (For Input Tax Credit)
              </label>
              <input
                type="text"
                value={formData.gstin}
                onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
                className="w-full text-[13px] bg-white border border-[#d1d5db] rounded-lg px-3 py-2 outline-none focus:border-[#dc1414]"
              />
            </div>
          </div>
        )}

        {/* Toast Feedback */}
        {toastMessage && (
          <div className="bg-[#16a34a] text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl text-center shadow-md animate-fade-in">
            ✓ {toastMessage}
          </div>
        )}

        {/* Bottom CTA Row */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#f3f4f6]">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-3 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-[13.5px] font-bold shadow-xs transition-all cursor-pointer disabled:opacity-60"
          >
            {isSaving ? 'Saving Changes...' : 'Save Profile Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}
