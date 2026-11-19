import Link from 'next/link'

function CalendarSmallIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function RupeeSmallIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7 8h10M7 11.5h6.5M13.5 8a3.5 3.5 0 0 1-3.5 3.5H7l7 6" />
    </svg>
  )
}

function LoopSmallIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function RentalsHeroBanner() {
  return (
    <section
      aria-label="Rent On Hero Banner"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#090204] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] mb-8 sm:mb-10 min-h-[290px] sm:min-h-[340px] lg:min-h-[380px] flex items-stretch"
    >
      {/* Background Hero Banner Image rent.png */}
      <img
        src="/banner/rent.png"
        alt="Rent On — High-Performance Computers on Flexible Rental Plans"
        className="absolute inset-0 w-full h-full object-cover object-right sm:object-center pointer-events-none"
      />

      {/* Dark Gradient Overlay for Crisp Text Readability on Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070103]/95 via-[#070103]/80 sm:via-[#070103]/50 to-transparent pointer-events-none" />

      {/* Left Content */}
      <div className="relative z-10 w-full sm:w-[62%] lg:w-[50%] flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-5 sm:w-6 h-[2px] bg-[#dc1414]" />
          <span className="text-[11px] sm:text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.14em]">
            Computer &amp; Laptop Rental
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold italic tracking-[-0.03em] leading-[1.08] text-white">
          Rent <span className="text-[#e11414] drop-shadow-[0_2px_14px_rgba(225,20,20,0.45)]">On</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-3.5 text-[13.5px] sm:text-[15px] lg:text-[16px] text-[#e5e7eb] font-normal leading-relaxed max-w-[430px]">
          High-Performance Laptops, Desktops &amp; Workstations on Flexible Rental Plans.
        </p>

        {/* 3 Pills Row */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-[11.5px] sm:text-[12px] text-white">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/15">
            <CalendarSmallIcon />
            <span className="font-medium">Flexible Tenure</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/15">
            <RupeeSmallIcon />
            <span className="font-medium">Cost Effective</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/15">
            <LoopSmallIcon />
            <span className="font-medium">Hassle-Free</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-7">
          <a
            href="#plans"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13.5px] font-semibold shadow-[0_6px_20px_rgba(220,16,16,0.45)] transition-all cursor-pointer"
          >
            <span>Explore Rental Plans</span>
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
