'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { forgotPasswordApi, resetPasswordApi } from '../../services/authApi'

export default function ResetPasswordClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { openLoginModal } = useStore()

  const queryEmail = searchParams.get('email') || ''
  const queryCode = searchParams.get('code') || ''

  const [step, setStep] = useState(queryEmail ? 2 : 1)
  const [email, setEmail] = useState(queryEmail)
  const [code, setCode] = useState(queryCode)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [devCode, setDevCode] = useState('')
  const [isDone, setIsDone] = useState(false)

  // Countdown timer for resend
  useEffect(() => {
    if (resendCooldown <= 0) return
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [resendCooldown])

  // Step 1: Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault()
    const cleanEmail = email.trim().toLowerCase()
    if (!cleanEmail) {
      setError('Please enter your registered email address.')
      return
    }

    setIsLoading(true)
    setError('')
    setSuccessMsg('')

    try {
      const res = await forgotPasswordApi(cleanEmail)
      if (res?.resetCode) {
        setDevCode(res.resetCode)
        setCode(res.resetCode)
      }
      setSuccessMsg('A 6-digit verification code has been sent to your email!')
      setResendCooldown(45)
      setTimeout(() => {
        setStep(2)
        setSuccessMsg('')
      }, 1000)
    } catch (err) {
      setError(err?.message || 'Could not send verification code. Please check your email.')
    } finally {
      setIsLoading(false)
    }
  }

  // Resend code in Step 2
  const handleResend = async () => {
    if (resendCooldown > 0 || resendLoading) return
    setResendLoading(true)
    setError('')
    try {
      const res = await forgotPasswordApi(email.trim().toLowerCase())
      if (res?.resetCode) {
        setDevCode(res.resetCode)
        setCode(res.resetCode)
      }
      setResendCooldown(45)
      setSuccessMsg('New 6-digit verification code sent to your email.')
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (err) {
      setError(err?.message || 'Failed to resend code.')
    } finally {
      setResendLoading(false)
    }
  }

  // Step 2: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault()
    const cleanCode = code.trim()

    if (!cleanCode || cleanCode.length !== 6) {
      setError('Please enter the 6-digit verification code.')
      return
    }

    if (!newPassword || newPassword.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match. Please verify.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      await resetPasswordApi({
        email: email.trim().toLowerCase(),
        code: cleanCode,
        newPassword,
      })
      setIsDone(true)
    } catch (err) {
      setError(err?.message || 'Failed to reset password. Please check your verification code.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          {/* Logo / Header */}
          <div className="text-center mb-6">
            <Link href="/" className="inline-block mb-3">
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                PRESTIGE <span className="text-[#dc1414]">COMPUTERS</span>
              </span>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {isDone
                ? 'Password Reset Complete!'
                : step === 1
                ? 'Reset Your Password'
                : 'Set New Password'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              {isDone
                ? 'Your password has been changed successfully. You can now log in.'
                : step === 1
                ? 'Enter your registered email address to receive a 6-digit code.'
                : `Enter the 6-digit code sent to ${email}`}
            </p>
          </div>

          {/* Success Banner */}
          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Developer test code */}
          {devCode && !isDone && (
            <div className="mb-4 p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-700 shrink-0" aria-hidden="true">
                  <path d="m21 2-2 2m-1.5 1.5L14 9l-1.5-1.5L11 9l-1.5-1.5L8 9l-1.5-1.5L2 12l5 5 10-10Z" />
                  <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
                </svg>
                <span className="font-bold">OTP Code:</span>
                <span className="font-mono font-bold tracking-widest text-sm bg-white px-2 py-0.5 rounded border border-blue-300">
                  {devCode}
                </span>
              </div>
              <span className="text-[11px] text-blue-600">(Auto-filled)</span>
            </div>
          )}

          {/* DONE STATE */}
          {isDone ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-600" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                You can now sign in using your new credentials to access your account, orders, and rentals.
              </p>
              <button
                type="button"
                onClick={() => {
                  router.push('/')
                  setTimeout(() => openLoginModal(), 300)
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dc1414] to-[#b91c1c] text-white font-bold text-sm shadow-md hover:from-red-700 hover:to-red-800 transition-all cursor-pointer"
              >
                Sign In Now
              </button>
            </div>
          ) : step === 1 ? (
            /* STEP 1: Enter Email */
            <form onSubmit={handleRequestOtp} className="space-y-4">
              <div>
                <label htmlFor="standalone-email" className="block text-xs font-semibold text-gray-700 mb-1">
                  Registered Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <input
                    id="standalone-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    placeholder="e.g. name@example.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dc1414] to-[#b91c1c] hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <span>Send 6-Digit Code</span>
                )}
              </button>

              <div className="text-center pt-2">
                <Link href="/" className="text-xs text-gray-500 hover:text-red-600 font-medium">
                  ← Back to Home
                </Link>
              </div>
            </form>
          ) : (
            /* STEP 2: Enter OTP & New Password */
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="standalone-code" className="text-xs font-semibold text-gray-700">
                    6-Digit Verification Code <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendCooldown > 0 || resendLoading}
                    className="text-xs text-red-600 font-medium hover:underline disabled:text-gray-400 disabled:no-underline cursor-pointer"
                  >
                    {resendLoading
                      ? 'Sending...'
                      : resendCooldown > 0
                      ? `Resend in ${resendCooldown}s`
                      : 'Resend Code'}
                  </button>
                </div>
                <input
                  id="standalone-code"
                  type="text"
                  maxLength={6}
                  required
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value.replace(/\D/g, '').slice(0, 6))
                    if (error) setError('')
                  }}
                  placeholder="123456"
                  className="w-full text-center tracking-[0.4em] font-mono text-lg font-bold py-2 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="standalone-newpass" className="block text-xs font-semibold text-gray-700 mb-1">
                  New Password (min 6 characters) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="standalone-newpass"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value)
                      if (error) setError('')
                    }}
                    placeholder="Create new password"
                    className="w-full pl-3 pr-9 py-2.5 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="standalone-confirmpass" className="block text-xs font-semibold text-gray-700 mb-1">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="standalone-confirmpass"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (error) setError('')
                  }}
                  placeholder="Re-enter new password"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dc1414] to-[#b91c1c] hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <span>Reset &amp; Save Password</span>
                )}
              </button>

              <div className="flex items-center justify-between pt-2 text-xs">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-red-600 font-medium"
                >
                  ← Change Email
                </button>
                <Link href="/" className="text-gray-500 hover:text-red-600 font-medium">
                  Cancel
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
