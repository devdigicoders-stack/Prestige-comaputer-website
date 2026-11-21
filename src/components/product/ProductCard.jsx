'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getProductImageUrl } from '../../services/productApi'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'

function formatPrice(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return '₹0'
  return `₹${Number(amount).toLocaleString('en-IN')}`
}

function ProductPlaceholder() {
  return (
    <div className="w-full max-w-[186px] h-[112px] mx-auto rounded-lg bg-[#f8f9fb] border border-[#e5e7eb] flex flex-col items-center justify-center text-[#9ca3af] gap-1 select-none">
      <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
        <path d="M7 20h10M12 16v4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="text-[10px] font-medium text-[#9ca3af]">No image available</span>
    </div>
  )
}

function HeartIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[18px] h-[18px]"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20.4s-7.5-4.8-9.3-9.3C1.4 7.8 3.6 4.5 7.1 4.5c2 0 3.7 1.1 4.9 2.7 1.2-1.6 2.9-2.7 4.9-2.7 3.5 0 5.7 3.3 4.4 6.6-1.8 4.5-9.3 9.3-9.3 9.3Z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-[#f59e0b] fill-current shrink-0" aria-hidden="true">
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
    </svg>
  )
}

function MiniCartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
      <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MiniCalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.3" />
      <path d="M3.5 9.8h17" />
      <path d="M8 3.2v3.2" />
      <path d="M16 3.2v3.2" />
    </svg>
  )
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) {
  const { t, isRtl } = useLanguage()
  const prodId = product.slug || product.id || product._id
  const prodName = product.name || product.title || 'Product'
  const rawImage =
    product.image ||
    (typeof product.images?.[0] === 'string'
      ? product.images[0]
      : product.images?.[0]?.url) ||
    ''
  const resolvedImageUrl = getProductImageUrl(rawImage)

  const specsText =
    typeof product.specs === 'string'
      ? product.specs
      : [product.specs?.cpu || product.specs?.processor, product.specs?.ram]
          .filter(Boolean)
          .join(' • ') || product.subtitle || ''

  const store = useStore()

  // Dynamic Rental Rate configured in Admin or database
  const rentAmount =
    product.rentPerMonth ||
    (product.rentPrice ? String(product.rentPrice).replace(/[^\d.]/g, '') : 0)
  const isRentalAvailable = product.type !== 'Buy Only' && Number(rentAmount) > 0
  const isBuyAvailable = product.type !== 'Rent Only'

  const stock = typeof product.stock === 'number' ? product.stock : 15
  const lowStockThreshold = typeof product.lowStockThreshold === 'number' ? product.lowStockThreshold : 5
  const outOfStockThreshold = typeof product.outOfStockThreshold === 'number' ? product.outOfStockThreshold : 0
  const isOutOfStock =
    stock <= outOfStockThreshold ||
    product.inStock === false ||
    product.status === 'Out of Stock'
  const isLowStock = !isOutOfStock && stock <= lowStockThreshold

  const [isAdded, setIsAdded] = useState(false)

  const handleBuyNow = () => {
    if (isOutOfStock) return
    const res = onAddToCart?.(product)
    if (res !== false) {
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2400)
    }
  }

  const handleOpenRental = () => {
    if (isOutOfStock) return
    store?.openRentalModal?.(product)
  }

  return (
    <article className="bg-white rounded-xl border border-[#e7eaf0] shadow-[0_2px_10px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_24px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/30 transition-all duration-200 p-3.5 flex flex-col justify-between group">
      <div>
        {/* Top Row: Discount Pill & Wishlist Heart */}
        <div className="flex items-center justify-between min-h-[24px]">
          <div className="flex items-center gap-1.5 flex-wrap">
            {isOutOfStock ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#1f2937] text-white text-[10px] font-bold shadow-xs">
                {t('outOfStock')}
              </span>
            ) : isLowStock ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#b45309] border border-[#fde68a] text-[10px] font-bold shadow-xs">
                {isRtl ? `${t('leftInStock')} ${stock}` : `${stock} ${t('leftInStock')}`}
              </span>
            ) : product.discount ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#dc1414] text-white text-[11px] font-semibold leading-snug">
                {product.discount}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => onToggleWishlist?.(prodId)}
            aria-label={
              isWishlisted
                ? `Remove ${prodName} from wishlist`
                : `Add ${prodName} to wishlist`
            }
            className={[
              'p-1 rounded-full transition-colors cursor-pointer',
              isWishlisted
                ? 'text-[#dc1414]'
                : 'text-[#374151] hover:text-[#dc1414]',
            ].join(' ')}
          >
            <HeartIcon filled={isWishlisted} />
          </button>
        </div>

        {/* Dynamic Studio Photo */}
        <Link
          href={`/products/${prodId}`}
          className="block py-1.5 group-hover:scale-[1.03] transition-transform duration-300 cursor-pointer min-h-[112px] flex items-center justify-center"
        >
          {resolvedImageUrl ? (
            <img
              src={resolvedImageUrl}
              alt={prodName}
              className="max-h-[112px] max-w-[186px] object-contain drop-shadow-[0_6px_10px_rgba(15,23,42,0.12)]"
            />
          ) : (
            <ProductPlaceholder />
          )}
        </Link>

        {/* Product Info */}
        <div className="mt-2">
          <Link
            href={`/products/${prodId}`}
            className="block"
          >
            <h3 className="text-[13.5px] font-bold text-[#111827] leading-snug truncate group-hover:text-[#dc1414] transition-colors">
              {prodName}
            </h3>
          </Link>
          <p className="mt-0.5 text-[11.5px] text-[#6b7280] truncate">
            {specsText}
          </p>

          {/* Rating */}
          <div className="mt-1.5 flex items-center gap-1 text-[12px]">
            <StarIcon />
            <span className="font-semibold text-[#d97706]">
              {product.rating || 4.8}
            </span>
            <span className="text-[#6b7280]">({product.reviews || product.reviewCount || 120})</span>
          </div>

          {/* Price & Delivery */}
          <div className="mt-2 flex items-baseline justify-between gap-1 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="text-[16px] font-bold text-[#111827] tracking-[-0.01em]">
                {formatPrice(product.price)}
              </span>
              {(product.oldPrice || product.originalPrice) && (
                <span className="text-[11.5px] text-[#9ca3af] line-through">
                  {formatPrice(product.oldPrice || product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10.5px] font-semibold text-emerald-600">
              {product.isFreeDelivery !== false && Number(product.deliveryCharge || 0) === 0 ? t('freeDelivery') : (isRtl ? `+₹${product.deliveryCharge} توصيل` : `+₹${product.deliveryCharge} Del.`)}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex items-center gap-1.5">
        {isBuyAvailable && (
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleBuyNow}
            className={`${
              isRentalAvailable ? 'shrink-0' : 'w-full'
            } rounded-lg py-2 px-2.5 text-[11px] font-semibold inline-flex items-center justify-center gap-1 transition-all whitespace-nowrap ${
              isOutOfStock
                ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed shadow-none'
                : isAdded
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-gradient-to-b from-[#e11414] to-[#bd0909] hover:from-[#ed1a1a] hover:to-[#a50707] active:scale-[0.98] text-white shadow-xs cursor-pointer'
            }`}
          >
            {isAdded ? (
              <>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('added')}</span>
              </>
            ) : (
              <>
                <MiniCartIcon />
                <span>{isOutOfStock ? t('outOfStock') : t('buyNow')}</span>
              </>
            )}
          </button>
        )}

        {isRentalAvailable && (
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleOpenRental}
            title={isRtl ? `استئجار هذا المنتج بسعر ₹${Number(rentAmount).toLocaleString('en-IN')}/شهرياً` : `Rent this product at ₹${Number(rentAmount).toLocaleString('en-IN')}/month`}
            className={`${
              isBuyAvailable ? 'flex-1 min-w-0' : 'w-full'
            } rounded-lg py-2 px-1.5 text-[10.5px] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-1 transition-all whitespace-nowrap ${
              isOutOfStock
                ? 'bg-gray-50 text-gray-300 border border-gray-200 cursor-not-allowed opacity-60'
                : 'border border-[#dc1414]/65 bg-white hover:bg-[#fef2f2] active:scale-[0.98] text-[#c81010] cursor-pointer'
            }`}
          >
            <MiniCalendarIcon />
            <span className="truncate">
              {isRtl ? `${t('rentFrom')} ₹${Number(rentAmount).toLocaleString('en-IN')}${t('perMonth')}` : `Rent from ₹${Number(rentAmount).toLocaleString('en-IN')}/mo`}
            </span>
          </button>
        )}
      </div>
    </article>
  )
}
