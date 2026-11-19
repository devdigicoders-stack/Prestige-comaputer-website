import Link from 'next/link'

const RENTAL_BULLETS = [
  'Short & Long Term Plans',
  'Ideal for Businesses & Events',
  'Latest Configurations',
]

function CheckIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5 6.3 11.8 13 4.8" />
    </svg>
  )
}

function ArrowRightIcon({ className = 'w-3.5 h-3.5' }) {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function BoltIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 2 4.5 13.5h6.5L9.8 22l9.7-11.5h-6.6L13.5 2Z" />
    </svg>
  )
}

export default function PromoOffers() {
  return (
    <section
      className="w-full bg-white py-5 sm:py-6"
      aria-label="Promotional Offers"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* LEFT CARD: Rent a Computer (uses public/banner/offer2.png) */}
          <div className="relative overflow-hidden rounded-2xl bg-[#180406] min-h-[225px] sm:min-h-[245px] xl:min-h-[258px] flex items-center shadow-[0_6px_22px_rgba(16,24,40,0.08)] group">
            <img
              src="/banner/offer2.png"
              alt="Rent a Computer — Laptop on red glowing stage"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-[1.03] transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#5c0408]/90 via-[#380306]/55 sm:via-[#380306]/35 to-transparent pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-8 py-6 max-w-[330px]">
              <h2 className="text-[24px] sm:text-[28px] xl:text-[31px] font-bold italic text-white leading-tight tracking-[-0.02em]">
                Rent a Computer
              </h2>
              <p className="mt-1 text-[13px] sm:text-[14px] font-medium text-white/95">
                Flexible, Affordable &amp; Hassle-Free
              </p>

              <ul className="mt-3.5 space-y-1.5 text-[12.5px] sm:text-[13px] text-white/95">
                {RENTAL_BULLETS.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/rentals"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-[#f3f4f6] active:scale-[0.98] text-[#111827] text-[13px] font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.28)] transition-all cursor-pointer"
              >
                <span>Explore Rental Plans</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD: Limited Time Offer — 25% Off (uses public/banner/offer1.png) */}
          <div className="relative overflow-hidden rounded-2xl bg-[#f3f4f6] border border-[#e8eaef] min-h-[225px] sm:min-h-[245px] xl:min-h-[258px] flex items-center shadow-[0_6px_22px_rgba(16,24,40,0.06)] group">
            <img
              src="/banner/offer1.png"
              alt="Limited Time Offer — Save up to 25% off on laptops and desktops"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-[1.03] transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 sm:via-white/35 to-transparent pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-8 py-6 max-w-[320px]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#f5d0d0] shadow-xs text-[12px] font-semibold text-[#dc1414]">
                <BoltIcon className="w-3.5 h-3.5 text-[#dc1414]" />
                <span>Limited Time Offer</span>
              </span>

              <p className="mt-2.5 text-[17px] sm:text-[19px] font-bold text-[#111827] leading-tight">
                Save Up to
              </p>

              <h2 className="text-[32px] sm:text-[38px] xl:text-[42px] font-bold italic text-[#c90b0b] leading-[1.06] tracking-[-0.02em]">
                25% Off
              </h2>

              <p className="mt-1 text-[13px] sm:text-[13.5px] font-medium text-[#374151]">
                on Selected Laptops &amp; Desktops
              </p>

              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13px] font-semibold shadow-[0_6px_16px_rgba(220,16,16,0.38)] transition-all cursor-pointer"
              >
                <span>Shop the Deal</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
