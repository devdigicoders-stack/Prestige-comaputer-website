'use client'

import Link from 'next/link'

export default function WishlistHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0c]">
      {/* Background Banner with Fallback Gradient */}
      <div
        className="relative w-full min-h-[190px] sm:min-h-[220px] md:min-h-[250px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.65) 45%, rgba(10,10,12,0.2) 100%), url('/banner/wish.png')",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400 font-bold text-xs" aria-hidden="true">
              &gt;
            </span>
            <span className="text-gray-300">My Account</span>
            <span className="text-gray-400 font-bold text-xs" aria-hidden="true">
              &gt;
            </span>
            <span className="text-white font-semibold" aria-current="page">
              Wishlist
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight text-white mt-3">
            My <span className="text-[#e11414]">Wishlist</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-200 mt-2 font-normal">
            Your saved products, all in one place.
          </p>
        </div>
      </div>
    </section>
  )
}
