'use client'

import { useState } from 'react'

export default function ProfileSecurityTab() {
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  })
  const [twoFactor, setTwoFactor] = useState(true)
  const [toastMessage, setToastMessage] = useState('')

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    if (passwords.newPass !== passwords.confirm) {
      alert('New password and confirm password do not match!')
      return
    }
    setToastMessage('Password updated successfully!')
    setPasswords({ current: '', newPass: '', confirm: '' })
    setTimeout(() => setToastMessage(''), 3000)
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      <div className="pb-4 border-b border-[#f3f4f6]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Security & Login
        </h2>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          Manage your account password, 2-factor authentication and active login sessions.
        </p>
      </div>

      {/* Change Password Form */}
      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
        <h3 className="text-[14.5px] font-bold text-[#111827]">
          Change Password
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label className="block text-[12px] font-semibold text-[#374151] mb-1">
              Current Password
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
              New Password
            </label>
            <input
              type="password"
              required
              value={passwords.newPass}
              onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
              placeholder="••••••••"
              className="w-full text-[13px] border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#374151] mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              placeholder="••••••••"
              className="w-full text-[13px] border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] rounded-xl px-3.5 py-2.5 outline-none"
            />
          </div>
        </div>

        {toastMessage && (
          <div className="bg-[#16a34a] text-white text-[12.5px] font-semibold px-4 py-2 rounded-xl text-center shadow-xs">
            ✓ {toastMessage}
          </div>
        )}

        <div className="flex justify-start">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[13px] font-bold shadow-xs transition-colors cursor-pointer"
          >
            Update Password
          </button>
        </div>
      </form>

      <div className="h-[1px] bg-[#f3f4f6]" />

      {/* Two-Factor Authentication */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[14.5px] font-bold text-[#111827]">
            Two-Factor Authentication (2FA)
          </h3>
          <p className="text-[12.5px] text-[#6b7280] mt-0.5">
            Add an extra layer of security. We will send an OTP to your registered mobile number when logging in.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setTwoFactor((prev) => !prev)}
          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
            twoFactor ? 'bg-[#16a34a]' : 'bg-[#d1d5db]'
          }`}
          aria-label="Toggle 2FA"
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${
              twoFactor ? 'right-0.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>

      <div className="h-[1px] bg-[#f3f4f6]" />

      {/* Active Login Sessions */}
      <div>
        <h3 className="text-[14.5px] font-bold text-[#111827] mb-3">
          Active Login Sessions
        </h3>
        <div className="flex flex-col gap-2.5">
          <div className="rounded-xl border border-[#e5e7eb] p-3.5 flex items-center justify-between gap-3 bg-[#f8fafc]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#e5e7eb] flex items-center justify-center text-[#111827]">
                💻
              </div>
              <div>
                <span className="text-[13px] font-bold text-[#111827] block">
                  Windows 11 • Chrome Browser <span className="text-[#16a34a] text-[11px] font-medium ml-1">● Current Device</span>
                </span>
                <span className="text-[11.5px] text-[#6b7280]">
                  Kanpur, Uttar Pradesh, India • IP 103.212.x.x
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#e5e7eb] p-3.5 flex items-center justify-between gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#e5e7eb] flex items-center justify-center text-[#111827]">
                📱
              </div>
              <div>
                <span className="text-[13px] font-bold text-[#111827] block">
                  Android 14 • Chrome Mobile
                </span>
                <span className="text-[11.5px] text-[#6b7280]">
                  Kanpur, India • Active 2 days ago
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => alert('Session logged out.')}
              className="text-[11.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
            >
              Revoke
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
