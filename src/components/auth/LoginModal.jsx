'use client'

import { useEffect, useState } from 'react'
import { useStore } from '../../context/StoreContext'

export default function LoginModal() {
  const {
    isLoginOpen,
    closeLoginModal,
    openRegisterModal,
    setCurrentUser,
  } = useStore()

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: true,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLoginOpen) {
        closeLoginModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLoginOpen, closeLoginModal])

  if (!isLoginOpen) return null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (error) setError('')
  }

  const handleSubmit = (e) => {
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
    setTimeout(() => {
      setIsSubmitting(false)
      const isEmail = formData.identifier.includes('@')
      const user = {
        name: isEmail
          ? formData.identifier.split('@')[0]
          : `User ${formData.identifier.slice(-4)}`,
        email: isEmail ? formData.identifier : `${formData.identifier}@prestigecomputers.in`,
        mobile: isEmail ? '+91 98765 43210' : formData.identifier,
        userType: 'individual',
      }
      setCurrentUser(user)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        closeLoginModal()
      }, 1200)
    }, 700)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={closeLoginModal}
    >
      {/* Main Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[840px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row my-auto border border-white/10 animate-fade-in max-h-[96vh]"
      >
        {/* ================= LEFT SIDE: Crimson / Dark Banner ================= */}
        <div className="relative w-full lg:w-[38%] bg-[#0a0204] text-white p-4 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden shrink-0">
          {/* Background image reg.png */}
          <img
            src="/banner/reg.png"
            alt="Login Banner"
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />

          {/* Gradient overlay for text contrast */}
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

            {/* Heading & Subtitle */}
            <h2 className="text-[20px] sm:text-[23px] font-bold text-white leading-tight tracking-tight">
              Welcome <span className="text-[#e11414] italic">Back!</span>
            </h2>
            <p className="mt-1 text-[11px] sm:text-[11.5px] text-[#d1d5db] leading-snug">
              Sign in to your account and continue your shopping, rentals and services with Prestige Computers.
            </p>

            {/* 4 Feature Points */}
            <div className="mt-3.5 sm:mt-4 space-y-2.5 sm:space-y-3">
              {/* Feature 1: Continue Shopping */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Continue Shopping</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">Access your cart, wishlist and orders</p>
                </div>
              </div>

              {/* Feature 2: Track Orders & Rentals */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <polyline points="21 8 21 21 3 21 3 8" />
                    <rect x="1" y="3" width="22" height="5" />
                    <line x1="10" y1="12" x2="14" y2="12" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Track Orders &amp; Rentals</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">Get real-time updates anytime</p>
                </div>
              </div>

              {/* Feature 3: Exclusive Member Offers */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Exclusive Member Offers</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">Special deals only for registered users</p>
                </div>
              </div>

              {/* Feature 4: Secure & Fast Login */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[12px] font-bold text-white">Secure &amp; Fast Login</h3>
                  <p className="text-[10.5px] text-[#9ca3af]">Your data is safe with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: White Login Form ================= */}
        <div className="relative w-full lg:w-[62%] bg-white p-4 sm:p-5 lg:px-6 lg:py-5 flex flex-col justify-between overflow-y-auto max-h-[96vh]">
          {/* Top Close Button */}
          <button
            type="button"
            onClick={closeLoginModal}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#6b7280] hover:text-[#111827] flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

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

            {/* Error Alert */}
            {error && (
              <div className="mb-2.5 p-2 rounded-lg bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-[11.5px] font-medium flex items-center gap-2 animate-fade-in">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Success Alert */}
            {success && (
              <div className="mb-2.5 p-2.5 rounded-lg bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[12px] font-bold flex items-center gap-2 animate-fade-in">
                <span>✓</span>
                <span>Logged in successfully! Welcome back.</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Field 1: Email Address / Mobile Number */}
              <div>
                <label htmlFor="loginIdentifier" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                  Email Address / Mobile Number <span className="text-[#dc1414]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9ca3af]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
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

              {/* Field 2: Password */}
              <div>
                <label htmlFor="loginPassword" className="block text-[11.5px] font-semibold text-[#374151] mb-1">
                  Password <span className="text-[#dc1414]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9ca3af]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
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
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Password reset link sent to your registered email.')
                  }}
                  className="text-[#dc1414] font-semibold hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] active:scale-[0.99] text-white text-[13px] font-bold shadow-[0_4px_14px_rgba(220,16,16,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
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

              {/* Social Login Button (Google Only) */}
              <div>
                <button
                  type="button"
                  onClick={() => alert('Google authentication service ready')}
                  className="w-full py-2 px-3.5 rounded-xl border border-[#e5e7eb] hover:bg-[#f9fafb] text-[12px] font-semibold text-[#374151] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Bottom Card: New to Prestige Computers? Create an Account */}
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
        </div>
      </div>
    </div>
  )
}
