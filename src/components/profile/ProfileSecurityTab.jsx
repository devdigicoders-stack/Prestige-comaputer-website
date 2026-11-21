'use client'

import { useState } from 'react'
import { changePassword } from '../../services/authApi'
import { useStore } from '../../context/StoreContext'

export default function ProfileSecurityTab() {
  const { currentUser } = useStore()
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    setToastMessage('')
    setErrorMessage('')

    if (passwords.newPass !== passwords.confirm) {
      setErrorMessage('New password and confirm password do not match!')
      return
    }

    if (passwords.newPass.length < 6) {
      setErrorMessage('New password must be at least 6 characters long.')
      return
    }

    setIsUpdating(true)
    try {
      await changePassword({
        currentPassword: passwords.current,
        newPassword: passwords.newPass,
      })
      setToastMessage('Password updated successfully in database!')
      setPasswords({ current: '', newPass: '', confirm: '' })
      setTimeout(() => setToastMessage(''), 4000)
    } catch (err) {
      setErrorMessage(err.message || 'Failed to update password. Please check your current password.')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      <div className="pb-4 border-b border-[#f3f4f6]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Security &amp; Login Credentials
        </h2>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          Manage your account password and security protection.
        </p>
      </div>

      {toastMessage && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12.5px] font-medium flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-600 shrink-0">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[12.5px] font-medium flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-600 shrink-0">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Account Security Snapshot */}
      <div className="rounded-xl bg-[#f8fafc] border border-[#e5e7eb] p-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="text-[11px] font-bold uppercase text-[#6b7280] tracking-wider block">
            Account Email
          </span>
          <span className="text-[13.5px] font-bold text-[#111827]">
            {currentUser?.email || 'N/A'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
            ● Password Protected
          </span>
          <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
            ● JWT Encrypted
          </span>
        </div>
      </div>

      {/* Change Password Form */}
      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
        <h3 className="text-[14.5px] font-bold text-[#111827]">
          Change Account Password
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label className="block text-[12px] font-semibold text-[#374151] mb-1">
              Current Password *
            </label>
            <input
              type="password"
              required
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              placeholder="••••••••"
              className="w-full text-[13px] border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#374151] mb-1">
              New Password *
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={passwords.newPass}
              onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
              placeholder="At least 6 chars"
              className="w-full text-[13px] border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#374151] mb-1">
              Confirm New Password *
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              placeholder="Repeat new password"
              className="w-full text-[13px] border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end pt-2">
          <button
            type="submit"
            disabled={isUpdating}
            className="px-6 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-[13px] font-bold shadow-xs transition-all disabled:opacity-60 cursor-pointer"
          >
            {isUpdating ? 'Updating Password...' : 'Save New Password'}
          </button>
        </div>
      </form>
    </div>
  )
}
