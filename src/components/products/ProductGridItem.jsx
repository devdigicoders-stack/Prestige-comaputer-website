'use client'

import Link from 'next/link'
import ProductVisual from './ProductVisual'
import { useStore } from '../../context/StoreContext'

function formatINR(val) {
  return `₹${Number(val).toLocaleString('en-IN')}`
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" aria-hidden="true">
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
    </svg>
  )
}

function BadgePill({ badge, badgeType }) {
  if (badgeType === 'new-arrival') {
    return (
      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true">
          <path d="M8.5 1.5 3 9h4.5l-1 5.5 6.5-8H8.5l1-5Z" />
        </svg>
        <span>{badge}</span>
      </span>
    )
  }

  if (badgeType === 'hot-deal') {
    return (
      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true">
          <path d="M8 1a5 5 0 0 0-5 5c0 2.4 1.7 4.4 3.9 4.9C6.4 10.3 6 9.2 6 8a4 4 0 0 1 6-3.4 5 5 0 0 0-4-3.6ZM8 6.5a2.5 2.5 0 0 1 2.5 2.5c0 1.2-.8 2.2-2 2.4-.2-1-.8-1.8-1.6-2.3.6-1.5 1.1-2.6 1.1-2.6Z" />
        </svg>
        <span>{badge}</span>
      </span>
    )
  }

  if (badgeType === 'office') {
    return (
      <span className="inline-flex items-center gap-1 bg-[#2563eb] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true">
          <path d="M5.5 2A1.5 1.5 0 0 0 4 3.5V4H2.5A1.5 1.5 0 0 0 1 5.5v7A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 4H12v-.5A1.5 1.5 0 0 0 10.5 2h-5ZM5.5 3.5h5V4h-5v-.5Z" />
        </svg>
        <span>{badge}</span>
      </span>
    )
  }

  // Default: Bestseller (Red)
  return (
    <span className="inline-flex items-center gap-1 bg-[#dc1414] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true">
        <path d="M8 1a5 5 0 0 0-5 5c0 2.4 1.7 4.4 3.9 4.9C6.4 10.3 6 9.2 6 8a4 4 0 0 1 6-3.4 5 5 0 0 0-4-3.6Z" />
      </svg>
      <span>{badge}</span>
    </span>
  )
}

export default function ProductGridItem({ product }) {
  const { wishlistIds, toggleWishlist, addToCart } = useStore()
  const isWishlisted = wishlistIds.includes(product.id)

  return (
    <article className="group bg-white rounded-2xl border border-[#e5e7eb] p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:border-[#dc1414]/30 relative">
      {/* Top Row: Badge + Wishlist */}
      <div className="flex items-center justify-between gap-2 z-10">
        <BadgePill badge={product.badge} badgeType={product.badgeType} />

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            isWishlisted
              ? 'text-[#dc1414] scale-110'
              : 'text-[#9ca3af] hover:text-[#dc1414] hover:scale-105'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isWishlisted ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            className="w-[18px] h-[18px]"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Product Image Area */}
      <Link
        href={`/products/${product.id}`}
        className="my-2.5 py-1 flex items-center justify-center min-h-[130px] transition-transform duration-300 group-hover:scale-102 cursor-pointer"
      >
        <ProductVisual variant={product.imageVariant} />
      </Link>

      {/* Brand & Title */}
      <div>
        <p className="text-[11.5px] font-semibold text-[#6b7280] tracking-wide">
          {product.brand}
        </p>

        <Link href={`/products/${product.id}`} className="block">
          <h3 className="mt-0.5 text-[13.5px] font-bold text-[#111827] line-clamp-2 leading-[1.3] group-hover:text-[#dc1414] transition-colors min-h-[36px]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-[#4b5563]">
          <StarIcon />
          <span className="font-semibold text-[#111827]">{product.rating}</span>
          <span className="text-[#6b7280]">({product.reviewCount} Reviews)</span>
        </div>

        {/* Pricing Row */}
        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="text-[17px] font-extrabold text-[#dc1414]">
            {formatINR(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[12px] text-[#9ca3af] line-through font-normal">
              {formatINR(product.originalPrice)}
            </span>
          )}
          {product.discount && (
            <span className="text-[11px] font-semibold text-[#dc1414] bg-[#fee2e2]/60 px-1.5 py-0.5 rounded-sm">
              {product.discount}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons Row: Buy Now & Rent Now */}
      <div className="mt-3.5 pt-1 flex items-center gap-2">
        {/* Buy Now Button */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="flex-1 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.98] text-white text-[12.5px] font-semibold py-2 px-2.5 rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
            <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <span>Buy Now</span>
        </button>

        {/* Rent Now Button */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="flex-1 bg-white hover:bg-[#fef2f2] text-[#dc1414] border border-[#dc1414] active:scale-[0.98] text-[12.5px] font-semibold py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="9" x2="21" y2="9" />
          </svg>
          <span>Rent Now</span>
        </button>
      </div>

      {/* Bottom Specs Bar */}
      <div className="mt-3.5 pt-2.5 border-t border-[#f3f4f6] grid grid-cols-4 gap-1 text-center">
        {/* CPU */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 text-[#6b7280]" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
          </svg>
          <span className="mt-0.5 text-[10.5px] font-medium text-[#4b5563] truncate max-w-full">
            {product.specs.cpu}
          </span>
        </div>

        {/* RAM */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 text-[#6b7280]" aria-hidden="true">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 10v4M10 10v4M14 10v4M18 10v4" />
          </svg>
          <span className="mt-0.5 text-[10.5px] font-medium text-[#4b5563] truncate max-w-full">
            {product.specs.ram}
          </span>
        </div>

        {/* Storage */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 text-[#6b7280]" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="7.5" cy="12" r="1.5" />
            <path d="M12 12h6" />
          </svg>
          <span className="mt-0.5 text-[10.5px] font-medium text-[#4b5563] truncate max-w-full">
            {product.specs.storage}
          </span>
        </div>

        {/* Display / GPU */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 text-[#6b7280]" aria-hidden="true">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          <span className="mt-0.5 text-[10.5px] font-medium text-[#4b5563] truncate max-w-full">
            {product.specs.display}
          </span>
        </div>
      </div>
    </article>
  )
}
