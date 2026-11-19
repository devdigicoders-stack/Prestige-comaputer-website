'use client'

import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import {
  WishlistLaptopVisual,
  WishlistDesktopVisual,
  WishlistMonitorVisual,
  WishlistHeadsetVisual,
} from '../wishlist/WishlistVisuals'

function formatINR(val) {
  return `₹${Number(val).toLocaleString('en-IN')}`
}

export default function ProductRecommendations() {
  const { wishlistIds, toggleWishlist } = useStore()

  const items = [
    {
      id: 'hp-victus-15',
      name: 'HP Victus 15 Gaming Laptop',
      price: 64999,
      originalPrice: 74999,
      discount: '13% OFF',
      visual: <WishlistLaptopVisual className="w-full h-24 object-contain" />,
      href: '/products/hp-victus-15',
    },
    {
      id: 'pcs-gaming-desktop-pro',
      name: 'PCS Gaming Desktop Pro',
      price: 129999,
      originalPrice: 149999,
      discount: '13% OFF',
      visual: <WishlistDesktopVisual className="w-full h-24 object-contain" />,
      href: '/products/pcs-gaming-desktop-pro',
    },
    {
      id: 'lg-ultragear-27-monitor',
      name: 'LG UltraGear 27" Monitor',
      price: 28999,
      originalPrice: 34999,
      discount: '17% OFF',
      visual: <WishlistMonitorVisual className="w-full h-24 object-contain" />,
      href: '/products/lg-ultragear-27-monitor',
    },
    {
      id: 'hyperx-cloud-iii-headset',
      name: 'HyperX Cloud III Headset',
      price: 7999,
      originalPrice: 9499,
      discount: '16% OFF',
      visual: <WishlistHeadsetVisual className="w-full h-24 object-contain" />,
      href: '/products/hyperx-cloud-iii-headset',
    },
  ]

  return (
    <section className="mt-8">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111827]">
          You Might Also Like
        </h2>
        <Link
          href="/products"
          className="text-[13px] font-semibold text-[#dc1414] hover:text-[#b91c1c] flex items-center gap-1 transition-colors"
        >
          <span>View More</span>
          <span>&rarr;</span>
        </Link>
      </div>

      {/* Cards Row with Navigation Arrows */}
      <div className="relative flex items-center">
        {/* Left Nav Arrow */}
        <button
          type="button"
          aria-label="Previous suggestions"
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#e5e7eb] hover:border-[#dc1414] hover:text-[#dc1414] text-[#4b5563] shadow-md items-center justify-center transition-all cursor-pointer z-10"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((prod) => {
            const isWishlisted = wishlistIds.includes(prod.id)
            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-[#e5e7eb] p-4 flex flex-col justify-between hover:border-[#dc1414]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all relative group"
              >
                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(prod.id)}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  className="absolute right-3.5 top-3.5 w-7 h-7 rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#dc1414] transition-colors cursor-pointer z-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={isWishlisted ? '#dc1414' : 'none'}
                    stroke={isWishlisted ? '#dc1414' : 'currentColor'}
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>

                {/* Product Visual */}
                <Link
                  href={prod.href}
                  className="w-full flex items-center justify-center py-3 min-h-[110px] group-hover:scale-103 transition-transform"
                >
                  {prod.visual}
                </Link>

                {/* Info */}
                <div className="pt-2">
                  <Link href={prod.href}>
                    <h3 className="text-[13px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors line-clamp-1">
                      {prod.name}
                    </h3>
                  </Link>

                  {/* Pricing */}
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-[15.5px] font-extrabold text-[#dc1414]">
                      {formatINR(prod.price)}
                    </span>
                    <span className="text-[11.5px] text-[#9ca3af] line-through">
                      {formatINR(prod.originalPrice)}
                    </span>
                    <span className="text-[10.5px] font-bold text-[#dc1414] bg-[#fee2e2]/70 px-1.5 py-0.5 rounded-sm">
                      {prod.discount}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Nav Arrow */}
        <button
          type="button"
          aria-label="Next suggestions"
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#e5e7eb] hover:border-[#dc1414] hover:text-[#dc1414] text-[#4b5563] shadow-md items-center justify-center transition-all cursor-pointer z-10"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  )
}
