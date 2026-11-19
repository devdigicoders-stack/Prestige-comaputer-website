import Link from 'next/link'

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function SleekLaptopIllustration() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full max-w-[240px] sm:max-w-[280px] h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ctaScreenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="50%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="ctaWave" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Screen Frame */}
      <rect x="30" y="8" width="180" height="110" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
      {/* Screen Display */}
      <rect x="36" y="14" width="168" height="98" rx="2" fill="url(#ctaScreenGrad)" />
      {/* Abstract Wallpaper Wave */}
      <path
        d="M36 78 C70 42, 110 50, 204 22 L204 112 L36 112 Z"
        fill="url(#ctaWave)"
        fillOpacity="0.85"
      />
      {/* Webcam */}
      <circle cx="120" cy="11" r="1.5" fill="#52525b" />
      {/* Base / Keyboard Deck */}
      <path d="M10 120 L230 120 L240 128 L0 128 Z" fill="#71717a" />
      <path d="M0 128 L240 128 L238 132 L2 132 Z" fill="#3f3f46" />
      {/* Trackpad notch */}
      <rect x="100" y="121" width="40" height="3" rx="1" fill="#27272a" />
    </svg>
  )
}

export default function AboutBottomCta() {
  return (
    <section aria-label="Build Your Next Tech Setup" className="mb-6 sm:mb-10">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#070103] via-[#1a0307] to-[#5a050b] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.3)] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-white">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute right-1/4 -bottom-10 w-96 h-96 rounded-full bg-[#dc1414]/20 blur-3xl pointer-events-none" />

        {/* Left Text */}
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold tracking-[-0.02em] leading-tight">
            <span>Let's Build Your </span>
            <span className="block sm:inline text-[#ff3838] drop-shadow-[0_2px_12px_rgba(255,56,56,0.35)]">
              Next Tech Setup Together!
            </span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[14.5px] text-[#d1d5db]">
            Buy, Rent or Get Expert Advice — We're Here to Help.
          </p>
        </div>

        {/* Right Content: Laptop + White Pill Button */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-7 shrink-0">
          <SleekLaptopIllustration />

          <Link
            href="/contact"
            className="px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-[#f3f4f6] active:scale-[0.98] text-[#111827] font-bold text-[13.5px] shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRightIcon className="w-4 h-4 text-[#111827]" />
          </Link>
        </div>
      </div>
    </section>
  )
}
