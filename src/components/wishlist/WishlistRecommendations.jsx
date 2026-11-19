'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import {
  WishlistLaptopVisual,
  WishlistKeyboardVisual,
  WishlistMouseVisual,
  WishlistSSDVisual,
} from './WishlistVisuals'

function HeartToggleIcon({ active = false, className = 'w-4 h-4' }) {
  if (active) {
    return (
      <svg viewBox="0 0 24 24" fill="#e11414" stroke="#e11414" strokeWidth="1" className={className}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function ChevronLeftIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  )
}

function ChevronRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

const RECOMMENDATIONS = [
  {
    id: 'hp-victus-15',
    title: 'HP Victus 15 Gaming Laptop',
    price: '₹64,999',
    originalPrice: '₹74,999',
    discount: '13% OFF',
    visual: WishlistLaptopVisual,
  },
  {
    id: 'logitech-g213',
    title: 'Logitech G213 Keyboard',
    price: '₹4,499',
    originalPrice: '₹5,499',
    discount: '18% OFF',
    visual: WishlistKeyboardVisual,
  },
  {
    id: 'logitech-g502-hero',
    title: 'Logitech G502 Hero Mouse',
    price: '₹5,999',
    originalPrice: '₹7,499',
    discount: '20% OFF',
    visual: WishlistMouseVisual,
  },
  {
    id: 'samsung-t7-1tb',
    title: 'Samsung T7 1TB SSD',
    price: '₹10,999',
    originalPrice: '₹13,999',
    discount: '21% OFF',
    visual: WishlistSSDVisual,
  },
]

export default function WishlistRecommendations() {
  const scrollContainerRef = useRef(null)
  const { wishlistIds, toggleWishlist } = useStore()

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="mt-10 sm:mt-12" aria-label="Recommended Products">
      {/* Heading Row */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-black italic tracking-tight text-gray-900">
          You Might <span className="text-[#dc1414]">Also Like</span>
        </h2>

        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#dc1414] hover:text-[#b91c1c] transition-colors"
        >
          <span>View More</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Cards Slider with Side Arrow Controls */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
          className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-all cursor-pointer hidden md:flex"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        {/* Product Cards Row */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5"
        >
          {RECOMMENDATIONS.map((item) => {
            const Visual = item.visual
            const isWishlisted = wishlistIds.includes(item.id)

            return (
              <div
                key={item.id}
                className="w-[240px] sm:w-[260px] md:w-[275px] shrink-0 bg-white rounded-2xl border border-gray-150 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Visual + Wishlist Button */}
                <div className="relative w-full h-32 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-center p-3">
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item.id)}
                    aria-label={`Toggle wishlist for ${item.title}`}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-400 hover:text-[#dc1414] shadow-xs hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <HeartToggleIcon active={isWishlisted} className="w-4 h-4" />
                  </button>
                  <Visual className="w-full h-full max-h-[85px] object-contain" />
                </div>

                {/* Details */}
                <div className="mt-3.5">
                  <h3 className="text-[13.5px] font-bold text-gray-900 truncate">
                    {item.title}
                  </h3>

                  {/* Pricing */}
                  <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                    <span className="text-[16px] font-black text-[#dc1414]">
                      {item.price}
                    </span>
                    <span className="text-[12px] text-gray-400 line-through">
                      {item.originalPrice}
                    </span>
                    <span className="text-[10px] font-bold text-[#dc1414] bg-red-50 border border-red-100 px-1.5 py-0.2 rounded">
                      {item.discount}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
          className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-all cursor-pointer hidden md:flex"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
