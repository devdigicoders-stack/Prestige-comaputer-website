'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function RentalsBottomCta() {
  const { isRtl } = useLanguage()

  return (
    <section
      aria-label="Rental Bottom Call to Action"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d0204] via-[#200508] to-[#0c0204] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] p-6 sm:p-8 lg:p-10 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-[#dc1414]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#dc1414]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div className="max-w-xl text-center md:text-left rtl:md:text-right">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-tight tracking-tight">
            {isRtl ? (
              <>
                هل أنت جاهز <span className="text-[#e11414] italic">لاستئجار</span> جهازك القادم؟
              </>
            ) : (
              <>
                Ready to <span className="text-[#e11414] italic">Rent</span> Your Next Device?
              </>
            )}
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14.5px] text-[#e5e7eb] font-normal leading-relaxed">
            {isRtl
              ? 'احصل على أجهزة كمبيوتر ولابتوب عالية الأداء بخطط تأجير مرنة وبأسعار تنافسية في قطر اليوم.'
              : 'Get high-performance computers on flexible and affordable rental plans today.'}
          </p>
        </div>

        {/* Visual */}
        <div className="hidden sm:flex items-center justify-center shrink-0 w-[180px] lg:w-[220px]">
          <svg viewBox="0 0 220 110" className="w-full h-auto drop-shadow-[0_6px_16px_rgba(220,16,16,0.3)]" aria-hidden="true">
            <defs>
              <linearGradient id="ctaLapScreen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {/* Laptop */}
            <polygon points="18,22 135,22 130,80 23,80" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <polygon points="21,25 132,25 127,77 26,77" fill="url(#ctaLapScreen)" />
            <polygon points="23,80 130,80 148,94 5,94" fill="#1e293b" />
            <polygon points="5,94 148,94 145,97 8,97" fill="#0f172a" />

            {/* Desktop Tower with RGB Fans */}
            <rect x="142" y="16" width="46" height="78" rx="3" fill="#0b0f19" stroke="#334155" strokeWidth="1.2" />
            <circle cx="165" cy="34" r="8" fill="none" stroke="#22d3ee" strokeWidth="2" />
            <circle cx="165" cy="55" r="8" fill="none" stroke="#ec4899" strokeWidth="2" />
            <circle cx="165" cy="76" r="8" fill="none" stroke="#eab308" strokeWidth="2" />
          </svg>
        </div>

        {/* Right CTA Button */}
        <div className="shrink-0">
          <Link
            href="#plans"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#111827] hover:bg-[#f3f4f6] text-[13.5px] font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>{isRtl ? 'استأجر الآن' : 'Rent Now'}</span>
            <span className="text-[#dc1414] font-bold text-base rtl:rotate-180">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
