'use client'

import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  WishlistLaptopVisual,
  WishlistDesktopVisual,
  WishlistHeadsetVisual,
} from '../wishlist/WishlistVisuals'

/* Micro Spec Icons */
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

function TrashIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
}

function HeartNavIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function HeartSolidIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="#e11414" stroke="#e11414" strokeWidth="1" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export const CART_PRODUCTS_DATA = {
  'dell-inspiron-15': {
    id: 'dell-inspiron-15',
    title: 'Dell Inspiron 15 (2025)',
    tag: 'Bestseller',
    tagColor: 'bg-[#ff7a00] text-white',
    price: 52999,
    originalPrice: 59999,
    discount: '12% OFF',
    visual: WishlistLaptopVisual,
    specs: [
      { icon: CpuIcon, label: 'Intel Core i5' },
      { icon: RamIcon, label: '16GB RAM' },
      { icon: SsdIcon, label: '512GB SSD' },
      { icon: DisplayIcon, label: '15.6" FHD' },
    ],
  },
  'pcs-gaming-desktop-pro': {
    id: 'pcs-gaming-desktop-pro',
    title: 'PCS Gaming Desktop Pro',
    tag: 'Gaming',
    tagColor: 'bg-[#7c3aed] text-white',
    price: 129999,
    originalPrice: 149999,
    discount: '13% OFF',
    visual: WishlistDesktopVisual,
    specs: [
      { icon: CpuIcon, label: 'Intel Core i7' },
      { icon: RamIcon, label: '32GB RAM' },
      { icon: SsdIcon, label: '1TB SSD' },
      { icon: GpuIcon, label: 'RTX 4060' },
    ],
  },
  'hyperx-cloud-iii': {
    id: 'hyperx-cloud-iii',
    title: 'HyperX Cloud III Gaming Headset',
    tag: 'New Arrival',
    tagColor: 'bg-[#16a34a] text-white',
    price: 7999,
    originalPrice: 9499,
    discount: '16% OFF',
    visual: WishlistHeadsetVisual,
    specs: [
      { icon: SoundIcon, label: '7.1 Surround' },
      { icon: MicIcon, label: 'Noise Cancelling' },
      { icon: CableIcon, label: 'Wired/USB' },
    ],
  },
}

/**
 * Robust Dynamic Normalizer for Any Cart Item (Database, API, or Custom Variant)
 */
export function normalizeCartItem(item) {
  if (!item) return null

  // If item matches static dictionary
  const rawId = item.id || item._id || item.slug || ''
  const matchedKey = Object.keys(CART_PRODUCTS_DATA).find(
    (k) => rawId === k || (typeof rawId === 'string' && rawId.startsWith(k))
  )
  const staticInfo = matchedKey ? CART_PRODUCTS_DATA[matchedKey] : {}

  const id = rawId || `item-${Date.now()}`
  const title = item.name || item.title || staticInfo.title || 'Prestige Hardware System'
  const price = Number(item.price || staticInfo.price || 0)
  const originalPrice = Number(
    item.originalPrice ||
    item.comparePrice ||
    staticInfo.originalPrice ||
    (price > 0 ? Math.round(price * 1.15) : 0)
  )
  const discount =
    item.discount ||
    staticInfo.discount ||
    (originalPrice > price
      ? `${Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF`
      : '')
  const tag = item.badge || item.tag || staticInfo.tag || (item.isFeatured ? 'Featured' : 'Hardware')
  const tagColor = item.tagColor || staticInfo.tagColor || 'bg-[#dc1414] text-white'

  // Image resolution: handles both local /uploads/ and remote URLs
  let image = item.image || (Array.isArray(item.images) && item.images[0]) || staticInfo.image || ''
  if (image && !image.startsWith('http') && !image.startsWith('/')) {
    image = `/${image}`
  }

  // Specs resolution
  let specs = []
  if (Array.isArray(item.specs)) {
    specs = item.specs.map((s) =>
      typeof s === 'string'
        ? { icon: CpuIcon, label: s }
        : { icon: s.icon || CpuIcon, label: s.label || String(s) }
    )
  } else if (item.specs && typeof item.specs === 'object') {
    if (item.specs.cpu || item.specs.processor) {
      specs.push({ icon: CpuIcon, label: item.specs.cpu || item.specs.processor })
    }
    if (item.specs.ram) {
      specs.push({ icon: RamIcon, label: item.specs.ram })
    }
    if (item.specs.storage) {
      specs.push({ icon: SsdIcon, label: item.specs.storage })
    }
    if (item.specs.display) {
      specs.push({ icon: DisplayIcon, label: item.specs.display })
    }
    if (item.specs.graphics) {
      specs.push({ icon: GpuIcon, label: item.specs.graphics })
    }
  } else if (typeof item.specs === 'string' && item.specs.trim()) {
    specs = item.specs
      .split('|')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => ({ icon: CpuIcon, label: s }))
  }

  if (specs.length === 0) {
    specs = staticInfo.specs || [
      { icon: CpuIcon, label: 'High Performance' },
      { icon: SsdIcon, label: 'Fast NVMe SSD' },
    ]
  }

  const Visual = staticInfo.visual || null
  const isFreeDelivery = item.isFreeDelivery !== false && Number(item.deliveryCharge || 0) === 0
  const deliveryCharge = isFreeDelivery ? 0 : Number(item.deliveryCharge || 0)

  return {
    ...item,
    id,
    title,
    name: title,
    price,
    originalPrice,
    discount,
    tag,
    tagColor,
    image,
    visual: Visual,
    specs,
    quantity: Math.max(1, Number(item.quantity || 1)),
    selected: item.selected !== false,
    isFreeDelivery,
    deliveryCharge,
  }
}

export default function CartItemsList() {
  const { isArabic } = useLanguage()
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
    toggleCartItemSelection,
    wishlistIds,
    toggleWishlist,
  } = useStore()

  // Match items dynamically from cartItems
  const items = (Array.isArray(cartItems) ? cartItems : [])
    .map(normalizeCartItem)
    .filter(Boolean)

  return (
    <section className="flex-1 min-w-0" aria-label="Cart Items">
      {/* Top Bar: "Cart Items (X)" + "Clear Cart" */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-150 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          {isArabic ? 'عناصر السلة' : 'Cart Items'}{' '}
          <span className="text-[#dc1414] font-semibold text-lg sm:text-xl">
            ({items.length})
          </span>
        </h2>

        {items.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc1414] hover:text-[#b91c1c] hover:bg-red-50/80 px-2.5 py-1.5 rounded-lg border border-red-200 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-4 h-4 shrink-0" />
            <span>{isArabic ? 'مسح السلة' : 'Clear Cart'}</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-gray-250 p-8 sm:p-12 text-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#dc1414] flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.7 2.822-7.1H5.106m2.394 7.1L5.106 5.272M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            {isArabic ? 'سلة التسوق فارغة' : 'Your shopping cart is empty'}
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            {isArabic
              ? 'يبدو أنك لم تضف أي منتج إلى سلتك حتى الآن. استعرض أحدث أجهزة الكمبيوتر والمعدات وابدأ التسوق!'
              : 'Looks like you haven\'t added anything to your cart yet. Browse our top computing catalog to start shopping!'}
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-xs transition-colors"
            >
              {isArabic ? 'استكشف المنتجات' : 'Explore Products'}
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3.5">
          {items.map((item) => {
            const Visual = item.visual
            const isWishlisted = wishlistIds.includes(item.id)

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Side: Checkbox + Thumbnail + Product Info */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {/* Red Square Checkbox */}
                  <button
                    type="button"
                    onClick={() => toggleCartItemSelection(item.id)}
                    aria-label={`Select ${item.title}`}
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors cursor-pointer border ${
                      item.selected
                        ? 'bg-[#dc1414] border-[#dc1414] text-white'
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {item.selected && (
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.8" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5l3 3 6-7" />
                      </svg>
                    )}
                  </button>

                  {/* Thumbnail */}
                  <Link
                    href={`/products/${item.slug || item.id}`}
                    className="w-24 h-20 sm:w-28 sm:h-24 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-center p-2 shrink-0 hover:border-[#dc1414]/40 transition-colors overflow-hidden relative"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallbackNode = e.currentTarget.parentElement?.querySelector('.visual-fallback')
                          if (fallbackNode) fallbackNode.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div
                      className={`visual-fallback w-full h-full items-center justify-center ${item.image ? 'hidden' : 'flex'}`}
                    >
                      {Visual ? (
                        <Visual className="w-full h-full max-h-[80px] object-contain" />
                      ) : (
                        <WishlistLaptopVisual className="w-full h-full max-h-[80px] object-contain" />
                      )}
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="min-w-0">
                    {/* Badge */}
                    <span
                      className={`inline-block text-[10.5px] font-semibold px-2 py-0.5 rounded-full mb-1 ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>

                    {/* Title */}
                    <Link href={`/products/${item.slug || item.id}`} className="block">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 truncate hover:text-[#dc1414] transition-colors">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Specs */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] sm:text-[12px] text-gray-600 font-medium">
                      {item.specs.map((spec, sIdx) => {
                        const SpecIcon = spec.icon || CpuIcon
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

                {/* Right Side: Price + Quantity Stepper + Heart / Trash Actions */}
                <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  {/* Pricing */}
                  <div className="text-left md:text-right">
                    <div className="text-lg sm:text-xl font-black text-[#dc1414] leading-tight">
                      {formatCurrency(item.price, isArabic)}
                    </div>
                    {item.originalPrice > item.price && (
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11.5px] text-gray-400 line-through">
                          {formatCurrency(item.originalPrice, isArabic)}
                        </span>
                        {item.discount && (
                          <span className="text-[10px] font-bold text-[#dc1414] bg-red-50 border border-red-100 px-1.5 py-0.2 rounded">
                            {item.discount}
                          </span>
                        )}
                      </div>
                    )}
                    <span className="text-[11px] font-semibold text-emerald-600 block mt-0.5">
                      {item.isFreeDelivery
                        ? (isArabic ? '✓ توصيل مجاني' : '✓ Free Delivery')
                        : isArabic
                        ? `+ ${(item.deliveryCharge * (item.quantity || 1)).toLocaleString('en-IN')} ر.ق توصيل`
                        : `+ ${formatCurrency(item.deliveryCharge * (item.quantity || 1), isArabic)} Delivery`}
                    </span>
                  </div>

                  {/* Quantity Stepper: [-] Qty [+] */}
                  <div className="flex items-center border border-gray-250 rounded-xl bg-gray-50/60 overflow-hidden shadow-xs">
                    <button
                      type="button"
                      onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                      aria-label={isArabic ? 'تقليل الكمية' : 'Decrease quantity'}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors font-bold text-sm cursor-pointer"
                    >
                      &minus;
                    </button>
                    <span className="w-8 text-center text-xs sm:text-sm font-bold text-gray-900 select-none">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      aria-label={isArabic ? 'زيادة الكمية' : 'Increase quantity'}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors font-bold text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Wishlist Heart Icon Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item.id)}
                    aria-label={`Save ${item.title} to wishlist`}
                    title={isArabic ? 'إضافة إلى المفضلة' : 'Save to wishlist'}
                    className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:text-[#dc1414] hover:bg-red-50/50 transition-colors cursor-pointer"
                  >
                    {isWishlisted ? (
                      <HeartSolidIcon className="w-4 h-4 text-[#dc1414]" />
                    ) : (
                      <HeartNavIcon className="w-4 h-4" />
                    )}
                  </button>

                  {/* Trash Icon Button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.title} from cart`}
                    title={isArabic ? 'حذف من السلة' : 'Remove from cart'}
                    className="p-2 rounded-xl border border-red-200 text-[#dc1414] hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <TrashIcon className="w-4 h-4" />
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
