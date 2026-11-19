'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import ProductCard from '../../product/ProductCard'
import { FEATURED_PRODUCTS, FEATURED_TABS } from '../../../data/products'
import { useStore } from '../../../context/StoreContext'

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

export default function FeaturedProducts({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) {
  const store = useStore()
  const activeWishlist = wishlistIds ?? store.wishlistIds
  const handleToggleWishlist = onToggleWishlist ?? store.toggleWishlist
  const handleAddToCart = onAddToCart ?? store.addToCart

  const [activeTab, setActiveTab] = useState('All Products')

  const displayedProducts = useMemo(() => {
    if (activeTab === 'All Products') return FEATURED_PRODUCTS
    return FEATURED_PRODUCTS.filter((item) => item.tags.includes(activeTab))
  }, [activeTab])

  return (
    <section
      id="shop"
      className="w-full bg-white py-6 sm:py-8"
      aria-label="Featured Products"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 space-y-5">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            {/* Title with Red Left Accent Bar */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-1 h-6 rounded-full bg-[#dc1414] shrink-0"
                aria-hidden="true"
              />
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] tracking-[-0.02em] leading-tight">
                Featured Products
              </h2>
            </div>

            {/* Filter Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5"
              role="tablist"
              aria-label="Filter featured products"
            >
              {FEATURED_TABS.map((tab) => {
                const isActive = activeTab === tab
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab)}
                    className={[
                      'px-4 py-1.5 rounded-lg text-[12.5px] font-medium whitespace-nowrap transition-all cursor-pointer',
                      isActive
                        ? 'bg-gradient-to-b from-[#e11414] to-[#bd0909] text-white shadow-[0_4px_12px_rgba(220,16,16,0.3)]'
                        : 'bg-[#f4f5f7] text-[#374151] hover:bg-[#e8eaef] hover:text-[#111827]',
                    ].join(' ')}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right View All Link */}
          <Link
            href="/products"
            className="self-start lg:self-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc1414] hover:text-[#a80b0b] transition-colors whitespace-nowrap group cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 5-Column Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={activeWishlist.includes(product.id)}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
