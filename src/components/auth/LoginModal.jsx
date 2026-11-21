'use client'

import { useEffect, useState } from 'react'
import { useStore } from '../../context/StoreContext'
import {
  loginUser,
  forgotPasswordApi,
  verifyResetCodeApi,
  resetPasswordApi,
} from '../../services/authApi'

export default function LoginModal() {
  const {
    isLoginOpen,
    closeLoginModal,
    openRegisterModal,
    setCurrentUser,
    authPromptMessage,
  } = useStore()

  // Modal view: 'login' | 'forgot_request' | 'forgot_reset'
  const [modalView, setModalView] = useState('login')

  // Login form state
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: true,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Forgot Password state
  const [forgotEmail, setForgotEmail] = useState('')
  const [isForgotLoading, setIsForgotLoading] = useState(false)
  const [forgotError, setForgotError] = useState('')
  const [forgotSuccess, setForgotSuccess] = useState('')

  // Reset Password state
  const [resetCode, setResetCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [isResetLoading, setIsResetLoading] = useState(false)
  const [resetError, setResetError] = useState('')
  const [devOtpCode, setDevOtpCode] = useState('')
  const [resetSuccessBanner, setResetSuccessBanner] = useState('')
  const [resendCooldown, setResendCooldown] = useState(0)
  const [resendLoading, setResendLoading] = useState(false)

  // Close on Escape key & reset views
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLoginOpen) {
        handleModalClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLoginOpen])

  // Countdown timer for OTP resend
  useEffect(() => {
    if (resendCooldown <= 0) return
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [resendCooldown])

  if (!isLoginOpen) return null

  const handleModalClose = () => {
    closeLoginModal()
    // Reset view after closing
    setTimeout(() => {
      setModalView('login')
      setError('')
      setForgotError('')
      setForgotSuccess('')
      setResetError('')
      setResetCode('')
      setNewPassword('')
      setConfirmPassword('')
      setDevOtpCode('')
    }, 200)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (error) setError('')
  }

  // Handle Login submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.identifier.trim()) {
      setError('Please enter your email or mobile number.')
      return
    }
    if (!formData.password) {
      setError('Please enter your password.')
      return
    }

    setIsSubmitting(true)
    setError('')
    try {
      const res = await loginUser({
        identifier: formData.identifier.trim(),
        password: formData.password,
      })
      setCurrentUser(res.user)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        handleModalClose()
      }, 1000)
    } catch (err) {
      setError(err?.message || 'Login failed. Please check your credentials.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Open Forgot Password Request View
  const handleOpenForgotPassword = (e) => {
    e.preventDefault()
    // If identifier looks like an email, pre-fill it
    if (formData.identifier && formData.identifier.includes('@')) {
      setForgotEmail(formData.identifier.trim())
    }
    setForgotError('')
    setForgotSuccess('')
    setModalView('forgot_request')
  }

  // Submit Forgot Password request (send OTP)
  const handleSendResetCode = async (e) => {
    e.preventDefault()
    const emailToUse = forgotEmail.trim().toLowerCase()
    if (!emailToUse) {
      setForgotError('Please enter your registered email address.')
      return
    }

    setIsForgotLoading(true)
    setForgotError('')
    setForgotSuccess('')

    try {
      const res = await forgotPasswordApi(emailToUse)
      const codeReceived = res?.resetCode || ''
      if (codeReceived) {
        setDevOtpCode(codeReceived)
        setResetCode(codeReceived) // auto-fill for dev convenience
      }
      setForgotSuccess(
        'A 6-digit verification code has been sent to your registered email.'
      )
      setResendCooldown(45)

      // Transition to reset view
      setTimeout(() => {
        setModalView('forgot_reset')
        setForgotSuccess('')
      }, 1000)
    } catch (err) {
      setForgotError(
        err?.message || 'Could not send verification code. Please check your email.'
      )
    } finally {
      setIsForgotLoading(false)
    }
  }

  // Resend OTP code from reset view
  const handleResendCode = async () => {
    if (resendCooldown > 0 || resendLoading) return
    setResendLoading(true)
    setResetError('')
    try {
      const res = await forgotPasswordApi(forgotEmail.trim().toLowerCase())
      if (res?.resetCode) {
        setDevOtpCode(res.resetCode)
        setResetCode(res.resetCode)
      }
      setResendCooldown(45)
    } catch (err) {
      setResetError(err?.message || 'Failed to resend code. Please try again.')
    } finally {
      setResendLoading(false)
    }
  }

  // Submit Password Reset (verify OTP & update password)
  const handleResetPassword = async (e) => {
    e.preventDefault()

    const code = resetCode.trim()
    if (!code || code.length !== 6) {
      setResetError('Please enter the valid 6-digit verification code.')
      return
    }

    if (!newPassword || newPassword.length < 6) {
      setResetError('Password must be at least 6 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setResetError('Passwords do not match. Please re-enter.')
      return
    }

    setIsResetLoading(true)
    setResetError('')

    try {
      await resetPasswordApi({
        email: forgotEmail.trim().toLowerCase(),
        code,
        newPassword,
      })

      setResetSuccessBanner(
        'Password reset successfully! You can now log in with your new password.'
      )
      setFormData((prev) => ({
        ...prev,
        identifier: forgotEmail.trim().toLowerCase(),
        password: '',
      }))
      setModalView('login')
      setResetCode('')
      setNewPassword('')
      setConfirmPassword('')
      setDevOtpCode('')

      // Auto clear banner after 6s
      setTimeout(() => setResetSuccessBanner(''), 6000)
    } catch (err) {
      setResetError(
        err?.message || 'Failed to reset password. Please check your code.'
      )
    } finally {
      setIsResetLoading(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={handleModalClose}
    >
      {/* Main Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[840px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row my-auto border border-white/10 animate-fade-in max-h-[96vh]"
      >
        {/* ================= LEFT SIDE: Crimson / Dark Banner ================= */}
        <div className="relative w-full lg:w-[38%] bg-[#0a0204] text-white p-4 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden shrink-0">
          {/* Background image */}
          <img
            src="/banner/reg.png"
            alt="Login Banner"
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090204]/95 via-[#120306]/85 to-[#080103]/65 pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10">
            {/* Top Logo */}
            <div className="mb-3 sm:mb-3.5 flex items-center">
              <img
                src="/logo-white.png"
                alt="Prestige Computers"
                className="h-[30px] sm:h-[34px] w-auto object-contain"
                width={120}
                height={34}
              />
            </div>

            {/* Dynamic Heading based on modalView */}
            {modalView === 'login' ? (
              <>
                <h2 className="text-[20px] sm:text-[23px] font-bold text-white leading-tight tracking-tight">
                  Welcome <span className="text-[#e11414] italic">Back!</span>
                </h2>
                <p className="mt-1 text-[11px] sm:text-[11.5px] text-[#d1d5db] leading-snug">
                  Sign in to your account and continue your shopping, rentals and services with Prestige Computers.
                </p>
              </>
            ) : modalView === 'forgot_request' ? (
              <>
                <h2 className="text-[20px] sm:text-[23px] font-bold text-white leading-tight tracking-tight">
                  Forgot <span className="text-[#e11414] italic">Password?</span>
                </h2>
                <p className="mt-1 text-[11px] sm:text-[11.5px] text-[#d1d5db] leading-snug">
                  Don't worry! Enter your registered email address and we'll send a 6-digit verification code to reset it.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-[20px] sm:text-[23px] font-bold text-white leading-tight tracking-tight">
                  Secure <span className="text-[#e11414] italic">Reset!</span>
                </h2>
                <p className="mt-1 text-[11px] sm:text-[11.5px] text-[#d1d5db] leading-snug">
                  Enter your 6-digit verification code and set a strong new password for your account.
                </p>
              </>
            )}

            {/* Feature Points */}
            <div className="mt-3.5 sm:mt-4 space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Safe &amp; Encrypted</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">End-to-end protected credentials</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Quick 6-Digit OTP</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">Instant delivery to your email</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Keep Your Orders Safe</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">Access your cart and order history</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative w-full lg:w-[62%] bg-white p-4 sm:p-5 lg:px-6 lg:py-5 flex flex-col justify-between overflow-y-auto max-h-[96vh]">
          {/* Top Close Button */}
          <button
            type="button"
            onClick={handleModalClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#6b7280] hover:text-[#111827] flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div>
            {/* ================= VIEW 1: SIGN IN FORM ================= */}
            {modalView === 'login' && (
              <div>
                {/* Header */}
                <div className="mb-3 pr-8">
                  <h2 id="login-modal-title" className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-tight">
                    Login to Your <span className="text-[#dc1414]">Account</span>
                  </h2>
                  <p className="mt-0.5 text-[11px] sm:text-[11.5px] text-[#6b7280]">
                    Access your orders, rentals, wishlist and more.
                  </p>
                </div>

                {/* Password reset success notification */}
                {resetSuccessBanner && (
                  <div className="mb-2.5 p-2.5 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[12px] font-semibold flex items-center gap-2 animate-fade-in shadow-xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>{resetSuccessBanner}</span>
                  </div>
                )}

                {/* Auth Required Prompt Banner */}
                {authPromptMessage && (
                  <div className="mb-2.5 p-2.5 rounded-xl bg-[#fffbeb] border border-[#fde68a] text-[#92400e] text-[12px] font-medium flex items-center gap-2 animate-fade-in shadow-xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{authPromptMessage}</span>
                  </div>
                )}

                {/* Error Alert */}
                {error && (
                  <div className="mb-2.5 p-2 rounded-lg bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-[11.5px] font-medium flex items-center gap-2 animate-fade-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-red-600 shrink-0" aria-hidden="true">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                {/* Success Alert */}
                {success && (
                  <div className="mb-2.5 p-2.5 rounded-lg bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[12px] font-bold flex items-center gap-2 animate-fade-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Logged in successfully! Welcome back.</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Identifier */}
                  <div>
                    <label htmlFor="loginIdentifier" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                      Email Address / Mobile Number <span className="text-[#dc1414]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9ca3af]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <input
                        id="loginIdentifier"
                        name="identifier"
                        type="text"
                        required
                        value={formData.identifier}
                        onChange={handleChange}
                        placeholder="Enter your email or mobile number"
                        className="w-full pl-8.5 pr-3 py-2 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12.5px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="loginPassword" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                      Password <span className="text-[#dc1414]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9ca3af]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <input
                        id="loginPassword"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full pl-8.5 pr-8 py-2 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12.5px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#9ca3af] hover:text-[#4b5563] cursor-pointer"
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Row: Remember me + Forgot Password */}
                  <div className="flex items-center justify-between pt-0.5 text-[11.5px]">
                    <label className="flex items-center gap-1.5 text-[#4b5563] cursor-pointer select-none">
                      <input
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-3.5 h-3.5 rounded text-[#dc1414] focus:ring-[#dc1414] accent-[#dc1414] cursor-pointer"
                      />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleOpenForgotPassword}
                      className="text-[#dc1414] font-semibold hover:underline cursor-pointer bg-transparent border-0 p-0"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] active:scale-[0.99] text-white text-[13px] font-bold shadow-[0_4px_14px_rgba(220,16,16,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                      <polyline points="10 17 15 12 10 7" />
                      <line x1="15" y1="12" x2="3" y2="12" />
                    </svg>
                    <span>{isSubmitting ? 'Logging In...' : 'Login Now'}</span>
                  </button>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center py-0.5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#e5e7eb]" />
                    </div>
                    <div className="relative bg-white px-2.5 text-[10.5px] text-[#9ca3af]">
                      or continue with
                    </div>
                  </div>

                  {/* Social Login Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => alert('Google authentication service ready')}
                      className="w-full py-2 px-3.5 rounded-xl border border-[#e5e7eb] hover:bg-[#f9fafb] text-[12px] font-semibold text-[#374151] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span>Continue with Google</span>
                    </button>
                  </div>

                  {/* Bottom Register Link */}
                  <div className="pt-1">
                    <div className="bg-[#fff5f5] border border-[#fecaca] rounded-xl py-2 px-3 text-center text-[11.5px] text-[#4b5563]">
                      New to Prestige Computers?{' '}
                      <button
                        type="button"
                        onClick={openRegisterModal}
                        className="text-[#dc1414] font-bold underline hover:text-[#b80808] cursor-pointer ml-1"
                      >
                        Create an Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* ================= VIEW 2: FORGOT PASSWORD REQUEST ================= */}
            {modalView === 'forgot_request' && (
              <div className="animate-fade-in">
                {/* Header */}
                <div className="mb-3 pr-8">
                  <div className="flex items-center gap-2 mb-1">
                    <button
                      type="button"
                      onClick={() => setModalView('login')}
                      className="p-1 rounded-md text-[#6b7280] hover:text-[#111827] hover:bg-gray-100 transition-colors"
                      title="Back to login"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <span className="text-[11px] font-medium text-[#dc1414] uppercase tracking-wider">Account Recovery</span>
                  </div>
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-tight">
                    Reset Your <span className="text-[#dc1414]">Password</span>
                  </h2>
                  <p className="mt-1 text-[11.5px] text-[#6b7280]">
                    Enter your registered email address and we'll send you a 6-digit OTP code.
                  </p>
                </div>

                {/* Error Banner */}
                {forgotError && (
                  <div className="mb-3 p-2.5 rounded-xl bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-[11.5px] font-medium flex items-center gap-2 animate-fade-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-red-600 shrink-0" aria-hidden="true">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>{forgotError}</span>
                  </div>
                )}

                {/* Success Banner */}
                {forgotSuccess && (
                  <div className="mb-3 p-2.5 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[12px] font-semibold flex items-center gap-2 animate-fade-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{forgotSuccess}</span>
                  </div>
                )}

                <form onSubmit={handleSendResetCode} className="space-y-3.5">
                  <div>
                    <label htmlFor="forgotEmail" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                      Registered Email Address <span className="text-[#dc1414]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9ca3af]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <input
                        id="forgotEmail"
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => {
                          setForgotEmail(e.target.value)
                          if (forgotError) setForgotError('')
                        }}
                        placeholder="e.g. name@example.com"
                        className="w-full pl-8.5 pr-3 py-2 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12.5px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isForgotLoading}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] text-white text-[13px] font-bold shadow-[0_4px_14px_rgba(220,16,16,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isForgotLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Verification Code...</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        <span>Send 6-Digit Code</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={() => setModalView('login')}
                      className="text-[12px] text-[#6b7280] hover:text-[#dc1414] font-medium transition-colors cursor-pointer"
                    >
                      ← Back to Sign In
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ================= VIEW 3: RESET PASSWORD FORM ================= */}
            {modalView === 'forgot_reset' && (
              <div className="animate-fade-in">
                {/* Header */}
                <div className="mb-3 pr-8">
                  <div className="flex items-center gap-2 mb-1">
                    <button
                      type="button"
                      onClick={() => setModalView('forgot_request')}
                      className="p-1 rounded-md text-[#6b7280] hover:text-[#111827] hover:bg-gray-100 transition-colors"
                      title="Back to email request"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <span className="text-[11px] font-medium text-[#059669] uppercase tracking-wider">Step 2: Verification</span>
                  </div>
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-tight">
                    Set New <span className="text-[#dc1414]">Password</span>
                  </h2>
                  <p className="mt-0.5 text-[11px] sm:text-[11.5px] text-[#6b7280]">
                    Verification code sent to <strong className="text-gray-900">{forgotEmail}</strong>
                  </p>
                </div>

                {/* Developer / Quick test hint banner */}
                {devOtpCode && (
                  <div className="mb-2.5 p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-[11.5px] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-700 shrink-0" aria-hidden="true">
                        <path d="m21 2-2 2m-1.5 1.5L14 9l-1.5-1.5L11 9l-1.5-1.5L8 9l-1.5-1.5L2 12l5 5 10-10Z" />
                        <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
                      </svg>
                      <span className="font-bold">OTP Code:</span>
                      <span className="font-mono font-bold tracking-widest text-[13px] bg-white px-2 py-0.5 rounded border border-blue-300">{devOtpCode}</span>
                    </div>
                    <span className="text-[10px] text-blue-600">(Auto-filled)</span>
                  </div>
                )}

                {/* Error Banner */}
                {resetError && (
                  <div className="mb-2.5 p-2 rounded-lg bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-[11.5px] font-medium flex items-center gap-2 animate-fade-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-red-600 shrink-0" aria-hidden="true">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>{resetError}</span>
                  </div>
                )}

                <form onSubmit={handleResetPassword} className="space-y-2.5">
                  {/* OTP Code */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="resetCode" className="text-[11.5px] font-semibold text-[#374151]">
                        6-Digit Verification Code <span className="text-[#dc1414]">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={resendCooldown > 0 || resendLoading}
                        className="text-[11px] text-[#dc1414] font-medium hover:underline disabled:text-[#9ca3af] disabled:no-underline cursor-pointer"
                      >
                        {resendLoading
                          ? 'Sending...'
                          : resendCooldown > 0
                          ? `Resend in ${resendCooldown}s`
                          : 'Resend Code'}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        id="resetCode"
                        type="text"
                        maxLength={6}
                        required
                        value={resetCode}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 6)
                          setResetCode(val)
                          if (resetError) setResetError('')
                        }}
                        placeholder="123456"
                        className="w-full text-center tracking-[0.4em] font-mono text-[16px] font-bold py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[#111827] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label htmlFor="newPassword" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                      New Password (min 6 characters) <span className="text-[#dc1414]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="newPassword"
                        type={showNewPassword ? 'text' : 'password'}
                        required
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value)
                          if (resetError) setResetError('')
                        }}
                        placeholder="Create strong password"
                        className="w-full pl-3 pr-8 py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12px] text-[#111827] outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#9ca3af] hover:text-[#4b5563] cursor-pointer"
                      >
                        {showNewPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                      Confirm New Password <span className="text-[#dc1414]">*</span>
                    </label>
                    <input
                      id="confirmPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        if (resetError) setResetError('')
                      }}
                      placeholder="Re-enter new password"
                      className="w-full px-3 py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12px] text-[#111827] outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isResetLoading}
                    className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] text-white text-[13px] font-bold shadow-[0_4px_14px_rgba(220,16,16,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isResetLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Updating Password...</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Reset &amp; Save Password</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={() => setModalView('login')}
                      className="text-[12px] text-[#6b7280] hover:text-[#dc1414] font-medium transition-colors cursor-pointer"
                    >
                      Cancel &amp; Back to Sign In
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
