export default function ContactBottomCta() {
  return (
    <section
      aria-label="Quick Assistance Call to Action"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d0204] via-[#200508] to-[#0c0204] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] p-6 sm:p-8 lg:p-10 text-white"
    >
      {/* Background Radial Glows */}
      <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-[#dc1414]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#dc1414]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Heading & Subtitle */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-tight tracking-tight">
            Need <span className="text-[#e11414] italic">Quick</span> Assistance?
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14.5px] text-[#e5e7eb] font-normal leading-relaxed">
            Chat with our team or call us directly for instant support.
          </p>
        </div>

        {/* Center Visual (Laptop + Headphones) */}
        <div className="hidden sm:flex items-center justify-center shrink-0 w-[170px] lg:w-[210px]">
          <svg viewBox="0 0 200 110" className="w-full h-auto drop-shadow-[0_6px_16px_rgba(220,16,16,0.3)]" aria-hidden="true">
            <defs>
              <linearGradient id="ctaLapScreen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            {/* Laptop Screen */}
            <polygon points="18,18 135,18 130,76 23,76" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <polygon points="21,21 132,21 127,73 26,73" fill="url(#ctaLapScreen)" />
            <polygon points="23,76 130,76 148,92 5,92" fill="#1e293b" />
            <polygon points="5,92 148,92 145,95 8,95" fill="#0f172a" />

            {/* Headphones next to laptop */}
            <path d="M152 45 A 18 18 0 0 1 184 45" fill="none" stroke="#dc1414" strokeWidth="3" strokeLinecap="round" />
            <rect x="146" y="44" width="8" height="18" rx="3" fill="#1e293b" stroke="#dc1414" strokeWidth="1" />
            <rect x="182" y="44" width="8" height="18" rx="3" fill="#1e293b" stroke="#dc1414" strokeWidth="1" />
          </svg>
        </div>

        {/* Right Action Button */}
        <div className="shrink-0">
          <a
            href="tel:+97441453868"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-[#111827] hover:bg-[#f3f4f6] text-[13.5px] font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M4 13a8 8 0 0 1 16 0" />
              <rect x="3" y="13" width="3.2" height="5.5" rx="1.4" />
              <rect x="17.8" y="13" width="3.2" height="5.5" rx="1.4" />
              <path d="M19.4 18.5A3 3 0 0 1 16.5 21H13" />
            </svg>
            <span>Talk to Our Team (+974 4145 3868)</span>
            <span className="text-[#dc1414] font-bold text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
