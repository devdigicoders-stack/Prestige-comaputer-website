'use client'

import { useState } from 'react'

export default function NewsletterBanner() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section
      className="relative w-full overflow-hidden mt-4"
      aria-label="Newsletter Subscription"
    >
      {/* Rich Crimson Red Gradient + Subtle Diagonal Geometric Accents */}
      <div
        className="relative w-full py-7 sm:py-8"
        style={{
          background:
            'linear-gradient(90deg, #680205 0%, #870408 32%, #a8080c 68%, #c40e12 88%, #8f0509 100%)',
        }}
      >
        {/* Subtle geometric studio light planes matching reference banner */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute -top-12 left-[48%] w-[360px] h-[240px] -skew-x-[24deg] opacity-25"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,80,80,0.35) 0%, rgba(160,10,15,0) 75%)',
            }}
          />
          <div
            className="absolute -bottom-10 right-[12%] w-[260px] h-[220px] skew-x-[20deg] opacity-30"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,40,40,0.4) 0%, rgba(120,0,5,0) 70%)',
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-[1px] bg-white/15"
          />
        </div>

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
            {/* Left Side: Paper Plane Icon + Heading & Subtitle */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              {/* Crisp Outline Paper Plane Icon */}
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  aria-hidden="true"
                >
                  <path d="M42 8L6 21.5L21 27L42 8Z" />
                  <path d="M42 8L29.5 40L21 27" />
                  <path d="M21 27L21 37.5L26.5 31.5" />
                </svg>
              </div>

              {/* Copy */}
              <div className="min-w-0">
                <h2 className="text-[19px] sm:text-[22px] xl:text-[24px] font-bold text-white tracking-[-0.015em] leading-[1.2]">
                  Stay Updated with Prestige Computers
                </h2>
                <p className="mt-1 text-[12.5px] sm:text-[13.5px] text-white/90 font-normal leading-snug">
                  Get the latest deals, new arrivals, rental offers and tech tips
                  straight to your inbox.
                </p>
              </div>
            </div>

            {/* Right Side: Email Input + Subscribe Button */}
            <div className="w-full lg:w-[460px] xl:w-[500px] shrink-0">
              {subscribed ? (
                <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between gap-3 shadow-[0_6px_22px_rgba(0,0,0,0.22)]">
                  <div className="flex items-center gap-2.5 text-[13.5px] font-semibold text-[#15803d]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.81a.75.75 0 0 0-1.22-.87l-3.24 4.53-1.62-1.62a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.09l3.75-5.26Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>You&apos;re subscribed! Watch your inbox for deals.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="text-[12px] font-semibold text-[#dc1414] hover:underline shrink-0 cursor-pointer"
                  >
                    Change
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-xl p-1 flex items-center shadow-[0_6px_22px_rgba(0,0,0,0.22)] focus-within:ring-2 focus-within:ring-white/60 transition-shadow"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    placeholder="Enter your email address"
                    className="flex-1 min-w-0 bg-transparent px-3.5 sm:px-4 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#dc1414] to-[#a9080b] hover:from-[#e61919] hover:to-[#bd0e12] active:scale-[0.99] text-white text-[13.5px] font-semibold px-5 sm:px-6 py-2.5 rounded-lg shadow-[0_2px_8px_rgba(169,8,11,0.35)] transition-all shrink-0 cursor-pointer group"
                  >
                    <span>Subscribe</span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              )}

              {error && (
                <p className="mt-1.5 text-[12px] text-[#fecaca] font-medium pl-1">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
