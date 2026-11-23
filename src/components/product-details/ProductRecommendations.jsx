'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { getProductImageUrl, getProducts } from '../../services/productApi'
import { formatCurrency } from '../../utils/formatCurrency'

export default function ProductRecommendations({ relatedProducts = [] }) {
  const { isArabic } = useLanguage()
  const { wishlistIds, toggleWishlist } = useStore()
  const [fallbackProducts, setFallbackProducts] = useState([])

  useEffect(() => {
    let isMounted = true
    if (!relatedProducts || relatedProducts.length === 0) {
      getProducts({ limit: 4, sort: 'popularity' })
        .then((res) => {
          if (isMounted && res?.products && Array.isArray(res.products)) {
            setFallbackProducts(res.products)
          }
        })
        .catch((err) => {
          console.warn('⚠️ Could not load related recommendations:', err.message)
        })
    }
    return () => {
      isMounted = false
    }
  }, [relatedProducts])

  const sourceList = useMemo(() => {
    if (relatedProducts && relatedProducts.length > 0) return relatedProducts
    return fallbackProducts
  }, [relatedProducts, fallbackProducts])

  const items = useMemo(() => {
    return sourceList.map((p) => {
      const rawImg =
        p.image ||
        (typeof p.images?.[0] === 'string' ? p.images[0] : p.images?.[0]?.url) ||
        ''
      const imgUrl = getProductImageUrl(rawImg)
      const targetId = p.slug || p._id || p.id
      const price = Number(p.price) || 0
      const originalPrice =
        Number(p.originalPrice) ||
        Number(p.comparePrice) ||
        (p.discount ? Math.round(price * 1.15) : null)

      let discount = p.discount || ''
      if (!discount && originalPrice && originalPrice > price) {
        const pct = Math.round(((originalPrice - price) / originalPrice) * 100)
        if (pct > 0) discount = `${pct}% OFF`
      }

      return {
        id: targetId,
        name: p.name || p.title || 'Product',
        price,
        originalPrice,
        discount,
        imgUrl,
        href: `/products/${targetId}`,
      }
    })
  }, [sourceList])

  if (items.length === 0) return null

  return (
    <section className="mt-8">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111827]">
          {isArabic ? 'قد يعجبك أيضاً' : 'You Might Also Like'}
        </h2>
        <Link
          href="/products"
          className="text-[13px] font-semibold text-[#dc1414] hover:text-[#b91c1c] flex items-center gap-1 transition-colors"
        >
          <span>{isArabic ? 'عرض المزيد' : 'View More'}</span>
          <span className="rtl:rotate-180 inline-block">&rarr;</span>
        </Link>
      </div>

      {/* Cards Row with Navigation */}
      <div className="relative flex items-center">
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
                  {prod.imgUrl ? (
                    <img
                      src={prod.imgUrl}
                      alt={prod.name}
                      className="w-full h-24 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-24 flex items-center justify-center text-gray-300">
                      <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
                        <path d="M7 20h10M12 16v4" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
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
                      {formatCurrency(prod.price, isArabic)}
                    </span>
                    {prod.originalPrice && prod.originalPrice > prod.price && (
                      <span className="text-[11.5px] text-[#9ca3af] line-through">
                        {formatCurrency(prod.originalPrice, isArabic)}
                      </span>
                    )}
                    {prod.discount && (
                      <span className="text-[10.5px] font-bold text-[#dc1414] bg-[#fee2e2]/70 px-1.5 py-0.5 rounded-sm">
                        {prod.discount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
