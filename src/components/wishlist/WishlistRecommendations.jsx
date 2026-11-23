'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { getProductImageUrl, getProducts } from '../../services/productApi'

function HeartToggleIcon({ active = false, className = 'w-4 h-4' }) {
  if (active) {
    return (
      <svg viewBox="0 0 24 24" fill="#dc1414" stroke="#dc1414" strokeWidth="1" className={className}>
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

function CartPlusIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
      <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function WishlistRecommendations() {
  const scrollContainerRef = useRef(null)
  const { isArabic } = useLanguage()
  const { wishlistIds, toggleWishlist, addToCart } = useStore()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    getProducts({ limit: 12, sort: 'popularity' })
      .then((res) => {
        if (isMounted && res?.products && Array.isArray(res.products)) {
          setProducts(res.products)
        }
      })
      .catch((err) => {
        console.warn('⚠️ Could not load wishlist recommendations:', err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Exclude products already saved in wishlist
  const recommendations = useMemo(() => {
    if (!products || products.length === 0) return []
    const wishlistSet = new Set((wishlistIds || []).map(String))

    const filtered = products.filter((p) => {
      const pid = String(p._id || p.id || p.slug)
      const pslug = String(p.slug || '')
      return !wishlistSet.has(pid) && (!pslug || !wishlistSet.has(pslug))
    })

    return filtered.length > 0 ? filtered : products
  }, [products, wishlistIds])

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  if (!loading && recommendations.length === 0) {
    return null
  }

  return (
    <section className="mt-10 sm:mt-12" aria-label="Recommended Products">
      {/* Heading Row */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-black italic tracking-tight text-gray-900">
          {isArabic ? (
            <>
              قد يعجبك <span className="text-[#dc1414]">أيضاً</span>
            </>
          ) : (
            <>
              You Might <span className="text-[#dc1414]">Also Like</span>
            </>
          )}
        </h2>

        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#dc1414] hover:text-[#b91c1c] transition-colors"
        >
          <span>{isArabic ? 'عرض المزيد' : 'View More'}</span>
          <span aria-hidden="true" className="rtl:rotate-180 inline-block">&rarr;</span>
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
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={`skel-${idx}`}
                className="w-[240px] sm:w-[260px] md:w-[275px] shrink-0 bg-white rounded-2xl border border-gray-150 p-4 shadow-xs animate-pulse flex flex-col justify-between"
              >
                <div className="w-full h-32 bg-gray-100 rounded-xl mb-3" />
                <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-100 rounded w-1/2 mb-3" />
                <div className="h-8 bg-gray-100 rounded-lg w-full mt-2" />
              </div>
            ))
          ) : (
            recommendations.map((item) => {
              const prodId = item.slug || item._id || item.id
              const title = item.name || item.title || 'Product'
              const price = Number(item.price) || 0
              const originalPrice =
                Number(item.originalPrice) ||
                Number(item.comparePrice) ||
                (item.discount ? Math.round(price * 1.15) : null)

              let discountText = item.discount || ''
              if (!discountText && originalPrice && originalPrice > price) {
                const pct = Math.round(((originalPrice - price) / originalPrice) * 100)
                if (pct > 0) discountText = `${pct}% OFF`
              }

              const rawImg =
                item.image ||
                (typeof item.images?.[0] === 'string'
                  ? item.images[0]
                  : item.images?.[0]?.url) ||
                ''
              const imgUrl = getProductImageUrl(rawImg)
              const isWishlisted = wishlistIds.includes(prodId)

              return (
                <div
                  key={prodId}
                  className="w-[240px] sm:w-[260px] md:w-[275px] shrink-0 bg-white rounded-2xl border border-gray-150 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Visual + Wishlist Button */}
                  <div className="relative w-full h-32 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-center p-3 overflow-hidden">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleWishlist(prodId)
                      }}
                      aria-label={`Toggle wishlist for ${title}`}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-400 hover:text-[#dc1414] shadow-xs hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
                    >
                      <HeartToggleIcon active={isWishlisted} className="w-4 h-4" />
                    </button>

                    <Link
                      href={`/products/${prodId}`}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {imgUrl ? (
                        <img
                          src={imgUrl}
                          alt={title}
                          className="w-full h-full max-h-[90px] object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                          <svg
                            className="w-8 h-8 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
                            <path d="M7 20h10M12 16v4" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                    </Link>
                  </div>

                  {/* Details */}
                  <div className="mt-3 flex flex-col flex-1 justify-between">
                    <div>
                      <Link href={`/products/${prodId}`}>
                        <h3
                          className="text-[13.5px] font-bold text-gray-900 group-hover:text-[#dc1414] transition-colors line-clamp-1"
                          title={title}
                        >
                          {title}
                        </h3>
                      </Link>

                      {/* Pricing */}
                      <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                        <span className="text-[16px] font-black text-[#dc1414]">
                          {formatCurrency(price, isArabic)}
                        </span>
                        {originalPrice && originalPrice > price && (
                          <span className="text-[12px] text-gray-400 line-through">
                            {formatCurrency(originalPrice, isArabic)}
                          </span>
                        )}
                        {discountText && (
                          <span className="text-[10px] font-bold text-[#dc1414] bg-red-50 border border-red-100 px-1.5 py-0.2 rounded">
                            {discountText}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quick Add To Cart Button */}
                    <div className="mt-3 pt-2.5 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => {
                          addToCart({
                            id: prodId,
                            _id: item._id,
                            name: title,
                            price: price,
                            image: rawImg,
                            specs: item.specs,
                            quantity: 1,
                          })
                        }}
                        className="w-full py-1.5 px-3 rounded-lg bg-gray-50 hover:bg-[#dc1414] text-gray-700 hover:text-white border border-gray-200 hover:border-[#dc1414] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-98"
                      >
                        <CartPlusIcon className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'أضف إلى السلة' : 'Add to Cart'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
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
