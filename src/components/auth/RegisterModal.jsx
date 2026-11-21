'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { registerUser } from '../../services/authApi'

export default function RegisterModal() {
  const {
    isRegisterOpen,
    closeRegisterModal,
    openLoginModal,
    setCurrentUser,
  } = useStore()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    userType: 'individual', // 'individual' | 'business' | 'institution'
    agreeTerms: true,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isRegisterOpen) {
        closeRegisterModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isRegisterOpen, closeRegisterModal])

  if (!isRegisterOpen) return null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (error) setError('')
  }

  const handleUserTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, userType: type }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }
    if (!formData.password || formData.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!formData.agreeTerms) {
      setError('You must agree to the Terms & Conditions and Privacy Policy.')
      return
    }

    setIsSubmitting(true)
    setError('')
    try {
      const res = await registerUser({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        password: formData.password,
        userType: formData.userType,
      })
      setCurrentUser(res.user)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        closeRegisterModal()
      }, 1200)
    } catch (err) {
      setError(err?.message || 'Registration failed. Please check your details.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={closeRegisterModal}
    >
      {/* Main Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[880px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row my-auto border border-white/10 animate-fade-in max-h-[96vh]"
      >
        {/* ================= LEFT SIDE: Crimson / Dark Banner ================= */}
        <div className="relative w-full lg:w-[38%] bg-[#0a0204] text-white p-4 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden shrink-0">
          {/* Background image reg.png */}
          <img
            src="/banner/reg.png"
            alt="Register Banner"
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
            <h2 className="text-[19px] sm:text-[22px] font-bold text-white leading-tight tracking-tight">
              Create Your Account
            </h2>
            <p className="mt-1 text-[11px] sm:text-[11.5px] text-[#d1d5db] leading-snug">
              Join Prestige Computers and get a faster, smarter &amp; more personalized shopping experience.
            </p>

            {/* 4 Feature Points */}
            <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <rect x="1" y="3" width="15" height="13" rx="1" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[11.5px] font-bold text-white">Faster Checkout</h3>
                  <p className="text-[10px] text-[#9ca3af]">Save your details for quick orders</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[11.5px] font-bold text-white">Wishlist &amp; Alerts</h3>
                  <p className="text-[10px] text-[#9ca3af]">Save products &amp; get price updates</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <polyline points="21 8 21 21 3 21 3 8" />
                    <rect x="1" y="3" width="22" height="5" />
                    <line x1="10" y1="12" x2="14" y2="12" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[11.5px] font-bold text-white">Track Your Orders</h3>
                  <p className="text-[10px] text-[#9ca3af]">Real-time order &amp; rental tracking</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-2.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <h3 className="text-[11.5px] font-bold text-white">Exclusive Offers</h3>
                  <p className="text-[10px] text-[#9ca3af]">Member-only deals &amp; rental plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: White Registration Form ================= */}
        <div className="relative w-full lg:w-[62%] bg-white p-4 sm:p-5 lg:px-6 lg:py-4 flex flex-col justify-between overflow-y-auto max-h-[96vh]">
          {/* Top Close Button */}
          <button
            type="button"
            onClick={closeRegisterModal}
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
            <div className="mb-2 sm:mb-2.5 pr-8">
              <h2 id="register-modal-title" className="text-[19px] sm:text-[21px] font-bold text-[#111827] leading-tight">
                Register <span className="text-[#dc1414]">Now</span>
              </h2>
              <p className="mt-0.5 text-[11px] sm:text-[11.5px] text-[#6b7280]">
                Create your account in just a few steps.
              </p>
            </div>

            {/* Error Message */}
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

            {/* Success Message */}
            {success && (
              <div className="mb-2.5 p-2.5 rounded-lg bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[12px] font-bold flex items-center gap-2 animate-fade-in">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Account created successfully! Welcome to Prestige Computers.</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="regFullName" className="block text-[11px] font-semibold text-[#374151] mb-0.5">
                    Full Name <span className="text-[#dc1414]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#9ca3af]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      id="regFullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-7.5 pr-2.5 py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="regEmail" className="block text-[11px] font-semibold text-[#374151] mb-0.5">
                    Email Address <span className="text-[#dc1414]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#9ca3af]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      id="regEmail"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full pl-7.5 pr-2.5 py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Mobile Number & Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="regMobile" className="block text-[11px] font-semibold text-[#374151] mb-0.5">
                    Mobile Number <span className="text-[#dc1414]">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl border border-[#d1d5db] focus-within:border-[#dc1414] focus-within:ring-1 focus-within:ring-[#dc1414] overflow-hidden transition-all">
                    {/* Country Code Pill */}
                    <div className="flex items-center gap-1 pl-2 pr-1.5 py-1.5 bg-[#f9fafb] border-r border-[#e5e7eb] text-[11.5px] text-[#374151] shrink-0 select-none">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="font-semibold">+91</span>
                      <svg viewBox="0 0 20 20" fill="#9ca3af" className="w-3 h-3" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="regMobile"
                      name="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter 10-digit number"
                      maxLength={10}
                      className="w-full px-2 py-1.5 text-[12px] text-[#111827] placeholder-[#9ca3af] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="regPassword" className="block text-[11px] font-semibold text-[#374151] mb-0.5">
                    Password <span className="text-[#dc1414]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#9ca3af]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <input
                      id="regPassword"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className="w-full pl-7.5 pr-7 py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-0 pr-2 flex items-center text-[#9ca3af] hover:text-[#4b5563] cursor-pointer"
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
              </div>

              {/* Row 3: Confirm Password */}
              <div>
                <label htmlFor="regConfirmPassword" className="block text-[11px] font-semibold text-[#374151] mb-0.5">
                  Confirm Password <span className="text-[#dc1414]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#9ca3af]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input
                    id="regConfirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="w-full pl-7.5 pr-7 py-1.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-2 flex items-center text-[#9ca3af] hover:text-[#4b5563] cursor-pointer"
                  >
                    {showConfirmPassword ? (
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

              {/* Row 4: User Type Selection */}
              <div>
                <label className="block text-[11px] font-semibold text-[#374151] mb-1">
                  User Type <span className="text-[#dc1414]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {/* Card 1: Individual */}
                  <div
                    onClick={() => handleUserTypeSelect('individual')}
                    className={`rounded-xl p-2 sm:p-2.5 border flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all ${
                      formData.userType === 'individual'
                        ? 'border-[#dc1414] bg-[#fff5f5] shadow-xs'
                        : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 border-[#dc1414]">
                      {formData.userType === 'individual' && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#dc1414]" />
                      )}
                    </div>
                    <div className="text-[#dc1414] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div className="leading-tight overflow-hidden">
                      <div className="text-[11.5px] font-bold text-[#111827] truncate">Individual</div>
                      <div className="text-[9px] text-[#6b7280] truncate">For personal use</div>
                    </div>
                  </div>

                  {/* Card 2: Business */}
                  <div
                    onClick={() => handleUserTypeSelect('business')}
                    className={`rounded-xl p-2 sm:p-2.5 border flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all ${
                      formData.userType === 'business'
                        ? 'border-[#dc1414] bg-[#fff5f5] shadow-xs'
                        : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                      formData.userType === 'business' ? 'border-[#dc1414]' : 'border-[#d1d5db]'
                    }`}>
                      {formData.userType === 'business' && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#dc1414]" />
                      )}
                    </div>
                    <div className="text-[#6b7280] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <line x1="9" y1="6" x2="15" y2="6" />
                        <line x1="9" y1="10" x2="15" y2="10" />
                        <line x1="9" y1="14" x2="15" y2="14" />
                      </svg>
                    </div>
                    <div className="leading-tight overflow-hidden">
                      <div className="text-[11.5px] font-bold text-[#111827] truncate">Business</div>
                      <div className="text-[9px] text-[#6b7280] truncate">For company / office</div>
                    </div>
                  </div>

                  {/* Card 3: Institution */}
                  <div
                    onClick={() => handleUserTypeSelect('institution')}
                    className={`rounded-xl p-2 sm:p-2.5 border flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all ${
                      formData.userType === 'institution'
                        ? 'border-[#dc1414] bg-[#fff5f5] shadow-xs'
                        : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                      formData.userType === 'institution' ? 'border-[#dc1414]' : 'border-[#d1d5db]'
                    }`}>
                      {formData.userType === 'institution' && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#dc1414]" />
                      )}
                    </div>
                    <div className="text-[#6b7280] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div className="leading-tight overflow-hidden">
                      <div className="text-[11.5px] font-bold text-[#111827] truncate">Institution</div>
                      <div className="text-[9px] text-[#6b7280] truncate">For school / college</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Terms Checkbox */}
              <div className="flex items-center gap-2 pt-0.5">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-3.5 h-3.5 rounded text-[#dc1414] focus:ring-[#dc1414] accent-[#dc1414] cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-[11px] text-[#4b5563] select-none">
                  I agree to the{' '}
                  <Link href="/terms" onClick={closeRegisterModal} className="text-[#dc1414] font-semibold underline hover:text-[#b80808]">
                    Terms &amp; Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" onClick={closeRegisterModal} className="text-[#dc1414] font-semibold underline hover:text-[#b80808]">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Row 6: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] active:scale-[0.99] text-white text-[12.5px] font-bold shadow-[0_4px_14px_rgba(220,16,16,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
              </button>

              {/* Row 7: Divider */}
              <div className="relative flex items-center justify-center py-0.5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e5e7eb]" />
                </div>
                <div className="relative bg-white px-2.5 text-[10.5px] text-[#9ca3af]">
                  or register with
                </div>
              </div>

              {/* Row 8: Social Button (Google Only) */}
              <div>
                <button
                  type="button"
                  onClick={() => alert('Google authentication service ready')}
                  className="w-full py-2 px-3.5 rounded-xl border border-[#e5e7eb] hover:bg-[#f9fafb] text-[12px] font-semibold text-[#374151] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Row 9: Bottom Sign In Link */}
              <div className="pt-1 text-center text-[11.5px] text-[#4b5563]">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="text-[#dc1414] font-bold underline hover:text-[#b80808] cursor-pointer ml-1"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
