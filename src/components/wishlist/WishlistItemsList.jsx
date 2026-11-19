'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import {
  WishlistLaptopVisual,
  WishlistDesktopVisual,
  WishlistMonitorVisual,
  WishlistHeadsetVisual,
} from './WishlistVisuals'

/* Spec Micro Icons */
function CpuIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  )
}

function RamIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10v4M10 10v4M14 10v4M18 10v4M6 18v2M10 18v2M14 18v2M18 18v2" />
    </svg>
  )
}

function SsdIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="7" cy="8" r="1" fill="currentColor" />
      <circle cx="7" cy="12" r="1" fill="currentColor" />
      <path d="M12 8h5M12 12h5M7 16h10" />
    </svg>
  )
}

function DisplayIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function GpuIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <circle cx="8" cy="12" r="2.5" />
      <circle cx="16" cy="12" r="2.5" />
    </svg>
  )
}

function RefreshIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

function SpeedIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function PanelIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function SoundIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  )
}

function MicIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
    </svg>
  )
}

function CableIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
      <circle cx="5" cy="19" r="1" fill="currentColor" />
    </svg>
  )
}

function FoamIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TrashIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
}

function CartIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.7 2.822-7.1H5.106m2.394 7.1L5.106 5.272M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  )
}

function MoreDotsIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19" cy="12" r="1.8" />
    </svg>
  )
}

function HeartSolidIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="#e11414" stroke="#e11414" strokeWidth="1" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export const WISHLIST_CATALOG = [
  {
    id: 'dell-inspiron-15',
    title: 'Dell Inspiron 15 (2025)',
    tag: 'Bestseller',
    tagColor: 'bg-[#ff7a00] text-white',
    price: '₹52,999',
    originalPrice: '₹59,999',
    discount: '12% OFF',
    visual: WishlistLaptopVisual,
    specs: [
      { icon: CpuIcon, label: 'Intel Core i5' },
      { icon: RamIcon, label: '16GB RAM' },
      { icon: SsdIcon, label: '512GB SSD' },
      { icon: DisplayIcon, label: '15.6" FHD' },
    ],
  },
  {
    id: 'pcs-gaming-desktop-pro',
    title: 'PCS Gaming Desktop Pro',
    tag: 'Gaming',
    tagColor: 'bg-[#7c3aed] text-white',
    price: '₹1,29,999',
    originalPrice: '₹1,49,999',
    discount: '13% OFF',
    visual: WishlistDesktopVisual,
    specs: [
      { icon: CpuIcon, label: 'Intel Core i7' },
      { icon: RamIcon, label: '32GB RAM' },
      { icon: SsdIcon, label: '1TB SSD' },
      { icon: GpuIcon, label: 'RTX 4060' },
    ],
  },
  {
    id: 'lg-ultragear-27',
    title: 'LG UltraGear 27" Gaming Monitor',
    tag: 'Popular',
    tagColor: 'bg-[#ea580c] text-white',
    price: '₹28,999',
    originalPrice: '₹34,999',
    discount: '17% OFF',
    visual: WishlistMonitorVisual,
    specs: [
      { icon: DisplayIcon, label: '27" QHD' },
      { icon: RefreshIcon, label: '165Hz' },
      { icon: SpeedIcon, label: '1ms' },
      { icon: PanelIcon, label: 'IPS Panel' },
    ],
  },
  {
    id: 'hyperx-cloud-iii',
    title: 'HyperX Cloud III Gaming Headset',
    tag: 'New Arrival',
    tagColor: 'bg-[#16a34a] text-white',
    price: '₹7,999',
    originalPrice: '₹9,499',
    discount: '16% OFF',
    visual: WishlistHeadsetVisual,
    specs: [
      { icon: SoundIcon, label: '7.1 Surround' },
      { icon: MicIcon, label: 'Noise Cancelling' },
      { icon: CableIcon, label: 'Wired/USB' },
      { icon: FoamIcon, label: 'Memory Foam' },
    ],
  },
]

export default function WishlistItemsList() {
  const { wishlistIds, removeFromWishlist, clearWishlist, addToCart, toggleWishlist } = useStore()
  const [addedItem, setAddedItem] = useState(null)

  // Filter products by wishlistIds
  const items = WISHLIST_CATALOG.filter((item) => wishlistIds.includes(item.id))

  const handleAddToCart = (item) => {
    addToCart()
    setAddedItem(item.id)
    setTimeout(() => {
      setAddedItem(null)
    }, 2000)
  }

  const handleRestoreDefault = () => {
    WISHLIST_CATALOG.forEach((item) => {
      if (!wishlistIds.includes(item.id)) {
        toggleWishlist(item.id)
      }
    })
  }

  return (
    <section className="flex-1 min-w-0" aria-label="Wishlist Products">
      {/* Header bar: "My Wishlist (4 Items)" + "Clear Wishlist" */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-150 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          My Wishlist{' '}
          <span className="text-[#dc1414] font-semibold text-lg sm:text-xl">
            ({items.length} {items.length === 1 ? 'Item' : 'Items'})
          </span>
        </h2>

        {items.length > 0 && (
          <button
            type="button"
            onClick={clearWishlist}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc1414] hover:text-[#b91c1c] hover:bg-red-50/80 px-2.5 py-1.5 rounded-lg border border-red-200 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-4 h-4 shrink-0" />
            <span>Clear Wishlist</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-gray-250 p-8 sm:p-12 text-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#dc1414] flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">Your wishlist is empty</h3>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            You haven't saved any items yet. Explore our huge collection of high-performance laptops, gaming desktops, monitors and accessories.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-xs transition-colors"
            >
              Explore Products
            </Link>
            <button
              type="button"
              onClick={handleRestoreDefault}
              className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors cursor-pointer"
            >
              Restore 4 Sample Items
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3.5">
          {items.map((item) => {
            const Visual = item.visual
            const isAdded = addedItem === item.id

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Side: Heart + Thumbnail + Info */}
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  {/* Remove Heart Button */}
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(item.id)}
                    aria-label={`Remove ${item.title} from wishlist`}
                    title="Remove from wishlist"
                    className="p-1 rounded-full hover:scale-110 active:scale-95 transition-transform shrink-0 cursor-pointer"
                  >
                    <HeartSolidIcon className="w-5 h-5 text-[#e11414]" />
                  </button>

                  {/* Thumbnail Container */}
                  <Link
                    href={`/products/${item.id}`}
                    className="w-24 h-20 sm:w-28 sm:h-24 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-center p-2 shrink-0 hover:border-[#dc1414]/40 transition-colors"
                  >
                    <Visual className="w-full h-full max-h-[80px] object-contain" />
                  </Link>

                  {/* Product Details */}
                  <div className="min-w-0">
                    {/* Tag / Badge */}
                    <span
                      className={`inline-block text-[10.5px] font-semibold px-2 py-0.5 rounded-full mb-1 ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>

                    {/* Title */}
                    <Link href={`/products/${item.id}`} className="block">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 truncate hover:text-[#dc1414] transition-colors">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Micro Specs */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] sm:text-[12px] text-gray-600 font-medium">
                      {item.specs.map((spec, sIdx) => {
                        const SpecIcon = spec.icon
                        return (
                          <div key={sIdx} className="inline-flex items-center gap-1 shrink-0">
                            <SpecIcon className="w-3.5 h-3.5 text-gray-500" />
                            <span>{spec.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Side: Price + Actions */}
                <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  {/* Pricing Column */}
                  <div className="text-left md:text-right">
                    <div className="text-lg sm:text-xl font-black text-[#dc1414] leading-tight">
                      {item.price}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11.5px] text-gray-400 line-through">
                        {item.originalPrice}
                      </span>
                      <span className="text-[10px] font-bold text-[#dc1414] bg-red-50 border border-red-100 px-1.5 py-0.2 rounded">
                        {item.discount}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-xs transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600'
                        : 'bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.98]'
                    }`}
                  >
                    <CartIcon className="w-4 h-4 shrink-0" />
                    <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
                  </button>

                  {/* Options Menu Button */}
                  <button
                    type="button"
                    aria-label="More options"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors shrink-0 cursor-pointer"
                  >
                    <MoreDotsIcon className="w-4 h-4" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
