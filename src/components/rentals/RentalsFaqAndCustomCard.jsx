'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RentalsFaqAndCustomCard() {
  const [openFaq, setOpenFaq] = useState(0) // Default first question expanded

  const faqs = [
    {
      q: 'What is Rent On?',
      a: 'Rent On is our computer rental service where you can rent laptops, desktops, workstations and accessories for short or long duration.',
    },
    {
      q: 'What is the minimum rental period?',
      a: 'The minimum rental period starts from just 1 day for daily events up to 1 month, 6 months, or multi-year enterprise subscriptions for corporate teams.',
    },
    {
      q: 'Do you provide delivery and setup?',
      a: 'Yes, we provide doorstep delivery and professional hardware setup at your home or business premises at your preferred delivery slot.',
    },
    {
      q: 'Can I extend my rental plan later?',
      a: 'Yes, you can easily extend or upgrade your rental tenure anytime with a single call or through your account dashboard with zero interruption.',
    },
  ]

  return (
    <section aria-label="Frequently Asked Questions and Custom Rental" className="mb-14 sm:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: FAQs Accordion (col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#dc1414]" />
              <span>Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#fecaca] bg-white shadow-xs'
                      : 'border-[#e5e7eb] bg-white hover:border-[#dc1414]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-3 text-[13.5px] sm:text-[14px] font-bold cursor-pointer transition-colors ${
                      isOpen
                        ? 'bg-[#fff1f2] text-[#111827]'
                        : 'text-[#1f2937] hover:text-[#dc1414]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#dc1414] font-extrabold text-[15px]">›</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-[#dc1414] text-[18px] font-bold leading-none shrink-0 w-5 text-center">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 py-3 text-[13px] text-[#4b5563] leading-relaxed border-t border-[#fee2e2] bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Custom Solution Crimson Card (col-span-5) */}
        <div className="lg:col-span-5 flex">
          <div className="w-full rounded-2xl bg-gradient-to-br from-[#120204] via-[#220508] to-[#0a0103] border border-white/10 p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
            {/* Ambient Radial Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#dc1414]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Content Top */}
            <div className="relative z-10 max-w-[260px]">
              <h3 className="text-[22px] sm:text-[24px] font-bold leading-tight">
                Need a <span className="text-[#e11414]">Custom</span>
                <br />
                Rental Solution?
              </h3>
              <p className="mt-2 text-[12.5px] text-[#d1d5db] leading-relaxed">
                Get a personalized rental plan for your business, team or event.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#111827] hover:bg-[#f3f4f6] text-[12.5px] font-bold transition-all shadow-sm active:scale-95"
                >
                  <span>Get a Quote</span>
                  <span className="text-[#dc1414] font-bold">→</span>
                </Link>
              </div>
            </div>

            {/* Laptop Vector Visual Bottom Right */}
            <div className="relative z-10 mt-6 sm:mt-8 self-end w-full max-w-[220px]">
              <svg viewBox="0 0 200 120" className="w-full h-auto drop-shadow-[0_8px_20px_rgba(220,16,16,0.25)]" aria-hidden="true">
                <defs>
                  <linearGradient id="glowCustomLap" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                {/* Screen */}
                <polygon points="30,12 170,12 165,85 35,85" fill="#0b0f19" stroke="#334155" strokeWidth="1.2" />
                <polygon points="34,16 166,16 161,81 39,81" fill="url(#glowCustomLap)" />
                <path d="M39 55 Q100 25 161 65 L161 81 L39 81 Z" fill="#60a5fa" fillOpacity="0.5" />
                {/* Deck */}
                <polygon points="35,85 165,85 188,102 12,102" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                <polygon points="12,102 188,102 184,106 16,106" fill="#09090b" />
                <rect x="85" y="90" width="30" height="8" rx="1" fill="#3f3f46" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
