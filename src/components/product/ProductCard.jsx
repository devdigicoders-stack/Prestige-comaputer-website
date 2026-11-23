'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getProductImageUrl } from '../../services/productApi'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { getWhatsAppInquiryUrl } from '../../utils/whatsapp'

function ProductPlaceholder() {
  return (
    <div className="w-full max-w-[186px] h-[120px] mx-auto rounded-lg bg-[#f8f9fb] border border-[#e5e7eb] flex flex-col items-center justify-center text-[#9ca3af] gap-1 select-none">
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

function WhatsAppIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function MiniCartIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
      <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) {
  const { isArabic, isRtl, t } = useLanguage()
  const store = useStore()

  const prodId = product.slug || product.id || product._id
  const prodName = product.name || product.title || 'Computer System'

  const rawImage =
    product.image ||
    (typeof product.images?.[0] === 'string'
      ? product.images[0]
      : product.images?.[0]?.url) ||
    ''
  const resolvedImageUrl = getProductImageUrl(rawImage)

  // Specs
  const cpu = product.specs?.cpu || product.specs?.processor || ''
  const ram = product.specs?.ram || ''
  const storage = product.specs?.storage || ''
  const gpu = product.specs?.gpu || product.specs?.graphics || ''

  // Stock
  const stock = typeof product.stock === 'number' ? product.stock : 15
  const isOutOfStock =
    stock <= 0 ||
    product.inStock === false ||
    product.status === 'Out of Stock'

  // Is Pre-Owned?
  const isPreOwned =
    product.condition === 'Pre-Owned' ||
    (product.tags && product.tags.includes('Pre-Owned')) ||
    (product.name && product.name.toLowerCase().includes('pre-owned')) ||
    (product.brand && product.brand.toLowerCase().includes('pre-owned'))

  // Is Gaming?
  const isGaming =
    (product.categoryName && product.categoryName.toLowerCase().includes('gaming')) ||
    (product.tags && product.tags.includes('Gaming')) ||
    (product.name && product.name.toLowerCase().includes('gaming'))

  const [isAdded, setIsAdded] = useState(false)

  const handleBuy = () => {
    if (isOutOfStock) return
    const res = onAddToCart ? onAddToCart(product) : store?.addToCart?.(product)
    if (res !== false) {
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2200)
    }
  }

  const whatsappUrl = getWhatsAppInquiryUrl(product)

  return (
    <article className="group bg-white rounded-xl border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-[#dc1414]/35 transition-all duration-200 p-3.5 flex flex-col justify-between relative">
      <div>
        {/* Top Badges & Wishlist */}
        <div className="flex items-center justify-between min-h-[24px] gap-1.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {isOutOfStock ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#1f2937] text-white text-[10px] font-bold shadow-xs">
                {isArabic ? 'غير متوفر' : 'Out of Stock'}
              </span>
            ) : isPreOwned ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#047857] text-white text-[10.5px] font-bold shadow-xs">
                {isArabic ? 'مستعمل مضمون' : 'Genuine Pre-Owned'}
              </span>
            ) : isGaming ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#7c3aed] text-white text-[10.5px] font-bold shadow-xs">
                {isArabic ? 'جيمنج احترافي' : 'Gaming Rig'}
              </span>
            ) : product.discount ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#dc1414] text-white text-[11px] font-bold leading-snug">
                {product.discount}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => onToggleWishlist?.(prodId) || store?.toggleWishlist?.(prodId)}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`p-1 rounded-full transition-all cursor-pointer ${
              isWishlisted
                ? 'text-[#dc1414] scale-110'
                : 'text-[#9ca3af] hover:text-[#dc1414] hover:scale-105'
            }`}
          >
            <HeartIcon filled={isWishlisted} />
          </button>
        </div>

        {/* Product Photo */}
        <Link
          href={`/products/${prodId}`}
          className="block py-2 group-hover:scale-[1.03] transition-transform duration-300 cursor-pointer min-h-[120px] max-h-[120px] flex items-center justify-center overflow-hidden"
        >
          {resolvedImageUrl ? (
            <img
              src={resolvedImageUrl}
              alt={prodName}
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/uploads/dell-inspiron-15.jpg'
              }}
              className="max-h-[120px] max-w-[185px] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
              loading="lazy"
            />
          ) : (
            <ProductPlaceholder />
          )}
        </Link>

        {/* Brand & Title */}
        <div className="mt-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
            {product.brand || 'PRESTIGE'}
          </p>

          <Link href={`/products/${prodId}`} className="block mt-0.5">
            <h3 className="text-[13.5px] font-bold text-[#111827] line-clamp-2 leading-[1.3] group-hover:text-[#dc1414] transition-colors min-h-[35px]">
              {prodName}
            </h3>
          </Link>

          {/* iConnect Style Key Spec Pills */}
          {(cpu || ram || storage || gpu) && (
            <div className="mt-2 flex flex-wrap gap-1">
              {cpu && (
                <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] text-[#374151] text-[10.5px] font-medium truncate max-w-[110px]">
                  {cpu}
                </span>
              )}
              {ram && (
                <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] text-[#374151] text-[10.5px] font-medium">
                  {ram}
                </span>
              )}
              {storage && (
                <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] text-[#374151] text-[10.5px] font-medium">
                  {storage}
                </span>
              )}
              {gpu && (
                <span className="px-1.5 py-0.5 rounded bg-[#fef2f2] text-[#dc1414] text-[10.5px] font-semibold truncate max-w-[120px]">
                  {gpu}
                </span>
              )}
            </div>
          )}

          {/* Rating & Stock row */}
          <div className="mt-2 flex items-center justify-between text-[11.5px] text-[#6b7280]">
            <div className="flex items-center gap-1">
              <StarIcon />
              <span className="font-semibold text-[#111827]">{product.rating || 4.8}</span>
              <span>({product.reviewCount || product.reviews || 84})</span>
            </div>
            {!isOutOfStock && (
              <span className="text-[10.5px] font-medium text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {isArabic ? 'متوفر بالمعرض' : 'In Stock (Mall)'}
              </span>
            )}
          </div>

          {/* Price Row (QAR Currency) */}
          <div className="mt-2.5 pt-2 border-t border-[#f3f4f6] flex items-baseline justify-between gap-1 flex-wrap">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[17px] font-extrabold text-[#dc1414]">
                {formatCurrency(product.price, isArabic)}
              </span>
              {(product.oldPrice || product.originalPrice) && (
                <span className="text-[11.5px] text-[#9ca3af] line-through font-normal">
                  {formatCurrency(product.oldPrice || product.originalPrice, isArabic)}
                </span>
              )}
            </div>
            <span className="text-[10px] font-semibold text-emerald-600">
              {isArabic ? 'توصيل سريع' : 'Fast Doha Delivery'}
            </span>
          </div>
        </div>
      </div>

      {/* Dual CTA Actions: Add to Cart + WhatsApp Inquire */}
      <div className="mt-3 flex items-center gap-1.5 pt-1">
        {/* Primary Cart / Buy Button */}
        <button
          type="button"
          disabled={isOutOfStock}
          onClick={handleBuy}
          className={`flex-1 rounded-lg py-2 px-2 text-[11.5px] font-bold inline-flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
            isOutOfStock
              ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed shadow-none'
              : isAdded
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.98] text-white'
          }`}
        >
          {isAdded ? (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{isArabic ? 'تمت الإضافة' : 'Added'}</span>
            </>
          ) : (
            <>
              <MiniCartIcon />
              <span>{isOutOfStock ? (isArabic ? 'نفد المخزون' : 'Out of Stock') : (isArabic ? 'أضف للسلة' : 'Add to Cart')}</span>
            </>
          )}
        </button>

        {/* WhatsApp Inquiry Button (iConnect & pcsdoha signature) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={isArabic ? 'استفسر عبر واتساب' : 'Inquire on WhatsApp'}
          aria-label="Inquire on WhatsApp"
          className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center justify-center shrink-0 cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4" />
        </a>
      </div>
    </article>
  )
}
