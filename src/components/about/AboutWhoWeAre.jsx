import Link from 'next/link'

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

export default function AboutWhoWeAre() {
  return (
    <section aria-label="Who We Are" className="mb-14 sm:mb-18">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 h-[2px] bg-[#dc1414]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold text-[#dc1414] uppercase tracking-[0.14em]">
              Who We Are
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111827] tracking-[-0.02em] leading-tight">
            Prestige Computers <span className="text-[#dc1414]">(PCS)</span>
          </h2>

          <div className="mt-4 sm:mt-5 space-y-3.5 text-[13.5px] sm:text-[14.5px] text-[#4b5563] leading-relaxed">
            <p>
              Prestige Computers (PCS) is a complete IT solutions provider offering a wide range of laptops, desktops, workstations, accessories, components and rental solutions for individuals, businesses and institutions.
            </p>
            <p>
              We are committed to delivering genuine products, expert guidance, reliable after-sales support and a seamless buying &amp; rental experience both online and offline.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13.5px] font-semibold shadow-[0_6px_20px_rgba(220,16,16,0.35)] transition-all cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        {/* Right Column: Storefront Exterior Image */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e5e7eb] shadow-[0_10px_30px_rgba(16,24,40,0.08)] group bg-[#111827]">
            <img
              src="/banner/storefront.png"
              alt="Prestige Computers Flagship Storefront"
              className="w-full h-[280px] sm:h-[350px] lg:h-[390px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
