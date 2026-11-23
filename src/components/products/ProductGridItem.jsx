'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { getProductImageUrl } from '../../services/productApi'
import { formatCurrency } from '../../utils/formatCurrency'
import { getWhatsAppInquiryUrl } from '../../utils/whatsapp'

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" aria-hidden="true">
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

export default function ProductGridItem({ product }) {
  const { wishlistIds, toggleWishlist, addToCart } = useStore()
  const { isArabic, isRtl, t } = useLanguage()
  const productId = product.slug || product.id || product._id
  const isWishlisted = wishlistIds.includes(productId)

  const rawImage =
    product.image ||
    (typeof product.images?.[0] === 'string'
      ? product.images[0]
      : product.images?.[0]?.url) ||
    ''
  const resolvedImageUrl = getProductImageUrl(rawImage)
  const productName = product.name || product.title || 'Computer System'

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

  const handleBuyNow = () => {
    if (isOutOfStock) return
    const success = addToCart(product)
    if (success) {
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2200)
    }
  }

  const cpuSpec = product.specs?.cpu || product.specs?.processor || ''
  const ramSpec = product.specs?.ram || ''
  const storageSpec = product.specs?.storage || ''
  const gpuSpec = product.specs?.gpu || product.specs?.graphics || ''

  const whatsappUrl = getWhatsAppInquiryUrl(product)

  return (
    <article className="group bg-white rounded-2xl border border-[#e5e7eb] p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:border-[#dc1414]/35 relative">
      <div>
        {/* Top Badges & Wishlist */}
        <div className="flex items-center justify-between gap-1.5 z-10 min-h-[24px]">
          <div className="flex items-center gap-1.5 flex-wrap">
            {isOutOfStock ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#1f2937] text-white text-[10.5px] font-bold shadow-xs">
                {isArabic ? 'غير متوفر' : 'Out of Stock'}
              </span>
            ) : isPreOwned ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#047857] text-white text-[10.5px] font-bold shadow-xs">
                {isArabic ? 'مستعمل مضمون' : 'Genuine Pre-Owned'}
              </span>
            ) : isGaming ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#7c3aed] text-white text-[10.5px] font-bold shadow-xs">
                {isArabic ? 'جيمنج' : 'Gaming Rig'}
              </span>
            ) : product.discount ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#dc1414] text-white text-[10.5px] font-bold shadow-xs">
                {product.discount}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => toggleWishlist(productId)}
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
          href={`/products/${productId}`}
          className="my-2.5 py-1 flex items-center justify-center min-h-[130px] max-h-[130px] transition-transform duration-300 group-hover:scale-102 cursor-pointer overflow-hidden"
        >
          {resolvedImageUrl ? (
            <img
              src={resolvedImageUrl}
              alt={productName}
              className="max-h-[130px] max-w-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[120px] rounded-lg bg-[#f8fafc] border border-[#eef0f4] flex flex-col items-center justify-center text-[#9ca3af]">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#cbd5e1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span className="text-[11px] mt-1 font-medium text-[#9ca3af]">Product Photo</span>
            </div>
          )}
        </Link>

        {/* Brand & Title */}
        <div>
          <p className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider">
            {product.brand || 'PRESTIGE'}
          </p>

          <Link href={`/products/${productId}`} className="block">
            <h3 className="mt-0.5 text-[13.5px] font-bold text-[#111827] line-clamp-2 leading-[1.3] group-hover:text-[#dc1414] transition-colors min-h-[36px]">
              {productName}
            </h3>
          </Link>

          {/* iConnect Style Key Spec Badges */}
          {(cpuSpec || ramSpec || storageSpec || gpuSpec) && (
            <div className="mt-2 flex flex-wrap gap-1">
              {cpuSpec && (
                <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] text-[#374151] text-[10.5px] font-medium truncate max-w-[110px]">
                  {cpuSpec}
                </span>
              )}
              {ramSpec && (
                <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] text-[#374151] text-[10.5px] font-medium">
                  {ramSpec}
                </span>
              )}
              {storageSpec && (
                <span className="px-1.5 py-0.5 rounded bg-[#f3f4f6] text-[#374151] text-[10.5px] font-medium">
                  {storageSpec}
                </span>
              )}
              {gpuSpec && (
                <span className="px-1.5 py-0.5 rounded bg-[#fef2f2] text-[#dc1414] text-[10.5px] font-semibold truncate max-w-[120px]">
                  {gpuSpec}
                </span>
              )}
            </div>
          )}

          {/* Rating & Stock */}
          <div className="mt-2 flex items-center justify-between text-[11.5px] text-[#6b7280]">
            <div className="flex items-center gap-1">
              <StarIcon />
              <span className="font-semibold text-[#111827]">{product.rating || 4.8}</span>
              <span>({product.reviewCount || product.numReviews || 120})</span>
            </div>
            {!isOutOfStock && (
              <span className="text-[10.5px] font-medium text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {isArabic ? 'متوفر بالمعرض' : 'In Stock'}
              </span>
            )}
          </div>

          {/* Pricing Row in QAR */}
          <div className="mt-2.5 pt-2 border-t border-[#f3f4f6] flex items-baseline justify-between gap-1 flex-wrap">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[17px] font-extrabold text-[#dc1414]">
                {formatCurrency(product.price, isArabic)}
              </span>
              {(product.originalPrice || product.oldPrice) && (
                <span className="text-[11.5px] text-[#9ca3af] line-through font-normal">
                  {formatCurrency(product.originalPrice || product.oldPrice, isArabic)}
                </span>
              )}
            </div>
            <span className="text-[10.5px] font-semibold text-emerald-600">
              {isArabic ? 'توصيل سريع بالدوحة' : 'Fast Doha Delivery'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Add to Cart + WhatsApp Inquire */}
      <div className="mt-3.5 pt-1 flex items-center gap-2">
        {/* Buy Now Button */}
        <button
          type="button"
          disabled={isOutOfStock}
          onClick={handleBuyNow}
          className={`flex-1 text-[12px] font-bold py-2 px-2.5 rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
                <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
                <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
              </svg>
              <span>{isOutOfStock ? (isArabic ? 'نفد المخزون' : 'Out of Stock') : (isArabic ? 'أضف للسلة' : 'Add to Cart')}</span>
            </>
          )}
        </button>

        {/* WhatsApp Inquiry Button */}
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
