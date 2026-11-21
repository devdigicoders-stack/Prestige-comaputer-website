'use client'

import { useEffect, useState } from 'react'
import { useStore } from '../../context/StoreContext'
import { updateUserProfile } from '../../services/authApi'

export default function ProfilePersonalTab() {
  const { currentUser, setCurrentUser } = useStore()

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'Male',
    dob: '',
    userType: 'Individual',
    companyName: '',
    gstin: '',
  })

  useEffect(() => {
    if (currentUser) {
      const nameParts = (currentUser.name || '').trim().split(' ')
      setFormData({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        email: currentUser.email || '',
        phone: currentUser.phone || currentUser.mobile || '',
        gender: currentUser.gender || 'Male',
        dob: currentUser.dob ? currentUser.dob.split('T')[0] : '',
        userType: currentUser.userType || 'Individual',
        companyName: currentUser.companyName || '',
        gstin: currentUser.gstin || '',
      })
      setIsLoading(false)
    }
  }, [currentUser])

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs">
        <div className="flex items-center justify-center py-12">
          <div className="w-6 h-6 border-2 border-[#dc1414] border-t-transparent rounded-full animate-spin" />
          <span className="ml-3 text-[13px] text-[#6b7280] font-medium">Loading your profile...</span>
        </div>
      </div>
    )
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    setToastMessage('')
    setErrorMessage('')

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()
      const updatedUser = await updateUserProfile({
        name: fullName,
        phone: formData.phone,
        gender: formData.gender,
        dob: formData.dob,
        userType: formData.userType,
        companyName: formData.companyName,
        gstin: formData.gstin,
      })

      setCurrentUser(updatedUser)
      setToastMessage('Profile details updated successfully in database!')
      setTimeout(() => setToastMessage(''), 3000)
    } catch (err) {
      setErrorMessage(err.message || 'Failed to update profile details.')
    } finally {
      setIsSaving(false)
    }
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

      {toastMessage && (
        <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[13px] font-medium flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-600 shrink-0">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[13px] font-medium flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-600 shrink-0">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

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
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Verified
              </span>
            </div>
            <input
              type="email"
              disabled
              value={formData.email}
              className="w-full text-[13px] bg-gray-50 border border-gray-200 text-gray-500 rounded-xl px-3.5 py-2.5 cursor-not-allowed"
            />
            <p className="text-[11px] text-[#9ca3af] mt-1">
              Email is linked to your login credentials and verified.
            </p>
          </div>

          <div>
            <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Gender & DOB */}
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
                    value={g}
                    checked={formData.gender === g}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="accent-[#dc1414]"
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
              className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Business Fields (Shown if Business or Institution selected) */}
        {formData.userType !== 'Individual' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#f3f4f6]">
            <div>
              <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
                Company / Organization Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="e.g. Acme Tech Solutions Pvt Ltd"
                className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none"
              />
            </div>
            <div>
              <label className="block text-[12.5px] font-semibold text-[#374151] mb-1.5">
                GSTIN Number (Optional)
              </label>
              <input
                type="text"
                value={formData.gstin}
                onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
                placeholder="22AAAAA0000A1Z5"
                className="w-full text-[13px] bg-white border border-[#d1d5db] focus:border-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none uppercase"
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#f3f4f6]">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-[13.5px] font-bold shadow-xs transition-all disabled:opacity-60 cursor-pointer flex items-center gap-2"
          >
            {isSaving && (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            <span>{isSaving ? 'Saving Changes...' : 'Save Profile Changes'}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
