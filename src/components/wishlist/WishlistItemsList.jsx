'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { getProducts, getProductImageUrl } from '../../services/productApi'

/* ── Icons ── */
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

function HeartSolidIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="#e11414" stroke="#e11414" strokeWidth="1" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

function formatINR(val) {
  if (!val && val !== 0) return ''
  return `₹${Number(val).toLocaleString('en-IN')}`
}

/* Build spec chips from product.specs */
function buildSpecChips(specs = {}) {
  const chips = []
  if (specs.cpu || specs.processor) chips.push(specs.cpu || specs.processor)
  if (specs.ram) chips.push(specs.ram)
  if (specs.storage) chips.push(specs.storage)
  if (specs.display) chips.push(specs.display)
  if (specs.graphics) chips.push(specs.graphics)
  return chips.filter(Boolean).slice(0, 4)
}

/* Skeleton card */
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 shadow-xs animate-pulse flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex items-center gap-3.5 flex-1">
        <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0" />
        <div className="w-24 h-20 sm:w-28 sm:h-24 bg-gray-100 rounded-xl shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-100 rounded w-16" />
          <div className="h-4 bg-gray-100 rounded w-3/4" />
          <div className="h-3 bg-gray-100 rounded w-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-20 h-8 bg-gray-100 rounded-lg" />
        <div className="w-24 h-9 bg-gray-100 rounded-xl" />
      </div>
    </div>
  )
}

export default function WishlistItemsList() {
  const { wishlistIds, removeFromWishlist, clearWishlist, addToCart } = useStore()
  const { isArabic } = useLanguage()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [addedItem, setAddedItem] = useState(null)

  /* Fetch all products and filter by wishlistIds (supports _id, slug, or legacy string IDs) */
  const fetchWishlistProducts = useCallback(async () => {
    if (!wishlistIds || wishlistIds.length === 0) {
      setProducts([])
      return
    }

    setLoading(true)
    try {
      // Fetch enough products to find all wishlist items
      const result = await getProducts({ limit: 200, sort: 'newest' })
      const allProducts = result?.products || []

      const wishlistSet = new Set(wishlistIds.map(String))

      const matched = allProducts.filter((p) => {
        const id = String(p._id || '')
        const slug = String(p.slug || '')
        return wishlistSet.has(id) || wishlistSet.has(slug)
      })

      setProducts(matched)
    } catch (err) {
      console.warn('⚠️ Could not load wishlist products:', err.message)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [wishlistIds])

  useEffect(() => {
    fetchWishlistProducts()
  }, [fetchWishlistProducts])

  const handleAddToCart = (product) => {
    const id = product.slug || product._id
    addToCart({
      id,
      _id: product._id,
      name: product.name || product.title,
      price: product.price,
      image: product.image || product.images?.[0] || '',
      specs: product.specs,
      quantity: 1,
    })
    setAddedItem(id)
    setTimeout(() => setAddedItem(null), 2000)
  }

  return (
    <section className="flex-1 min-w-0" aria-label="Wishlist Products">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-150 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          {isArabic ? 'قائمة الرغبات' : 'My Wishlist'}{' '}
          <span className="text-[#dc1414] font-semibold text-lg sm:text-xl">
            ({wishlistIds.length} {isArabic ? 'عنصر' : wishlistIds.length === 1 ? 'Item' : 'Items'})
          </span>
        </h2>

        {wishlistIds.length > 0 && (
          <button
            type="button"
            onClick={clearWishlist}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc1414] hover:text-[#b91c1c] hover:bg-red-50/80 px-2.5 py-1.5 rounded-lg border border-red-200 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-4 h-4 shrink-0" />
            <span>{isArabic ? 'مسح القائمة' : 'Clear Wishlist'}</span>
          </button>
        )}
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="space-y-3.5">
          {Array.from({ length: Math.min(wishlistIds.length, 3) }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && wishlistIds.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-gray-250 p-8 sm:p-12 text-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#dc1414] flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            {isArabic ? 'قائمة الرغبات فارغة' : 'Your wishlist is empty'}
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            {isArabic
              ? 'لم تقم بحفظ أي عناصر بعد. استكشف مجموعتنا الكبيرة من الحواسيب المحمولة وأجهزة الألعاب والشاشات والملحقات.'
              : 'You haven\'t saved any items yet. Explore our huge collection of high-performance laptops, gaming desktops, monitors and accessories.'}
          </p>
          <div className="mt-5">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-xs transition-colors inline-block"
            >
              {isArabic ? 'استكشف المنتجات' : 'Explore Products'}
            </Link>
          </div>
        </div>
      )}

      {/* Wishlist Items */}
      {!loading && products.length > 0 && (
        <div className="space-y-3.5">
          {products.map((product) => {
            const prodId = product.slug || String(product._id)
            const title = product.name || product.title || 'Product'
            const price = Number(product.price) || 0
            const originalPrice = Number(product.originalPrice) || Number(product.comparePrice) || null
            const discount = product.discount || (
              originalPrice && originalPrice > price
                ? `${Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF`
                : ''
            )
            const rawImg = product.image || product.images?.[0] || ''
            const imgUrl = getProductImageUrl(rawImg)
            const specChips = buildSpecChips(product.specs || {})
            const isAdded = addedItem === prodId

            // Badge color based on badge/tag
            const badge = product.badge || product.tags?.[0] || ''
            const badgeColorMap = {
              Bestseller: 'bg-[#ff7a00] text-white',
              'Hot Deal': 'bg-[#dc1414] text-white',
              'New Arrival': 'bg-[#16a34a] text-white',
              Gaming: 'bg-[#7c3aed] text-white',
              Popular: 'bg-[#ea580c] text-white',
              Featured: 'bg-[#0284c7] text-white',
            }
            const badgeColor = badgeColorMap[badge] || 'bg-gray-600 text-white'

            return (
              <article
                key={prodId}
                className="bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left: Heart + Image + Info */}
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  {/* Remove from wishlist - try both slug and _id */}
                  <button
                    type="button"
                    onClick={() => {
                      removeFromWishlist(product.slug || String(product._id))
                      removeFromWishlist(String(product._id))
                    }}
                    aria-label={`Remove ${title} from wishlist`}
                    title="Remove from wishlist"
                    className="p-1 rounded-full hover:scale-110 active:scale-95 transition-transform shrink-0 cursor-pointer"
                  >
                    <HeartSolidIcon className="w-5 h-5" />
                  </button>

                  {/* Product Image */}
                  <Link
                    href={`/products/${prodId}`}
                    className="w-24 h-20 sm:w-28 sm:h-24 bg-gray-50/80 rounded-xl border border-gray-100 flex items-center justify-center p-2 shrink-0 hover:border-[#dc1414]/40 transition-colors overflow-hidden"
                  >
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
                        <path d="M7 20h10M12 16v4" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </Link>

                  {/* Product Details */}
                  <div className="min-w-0">
                    {badge && (
                      <span className={`inline-block text-[10.5px] font-semibold px-2 py-0.5 rounded-full mb-1 ${badgeColor}`}>
                        {badge}
                      </span>
                    )}

                    <Link href={`/products/${prodId}`} className="block">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 truncate hover:text-[#dc1414] transition-colors">
                        {title}
                      </h3>
                    </Link>

                    {/* Spec chips */}
                    {specChips.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-gray-600 font-medium">
                        {specChips.map((chip, i) => (
                          <span key={i} className="inline-flex items-center gap-1 shrink-0">
                            <span className="w-1 h-1 rounded-full bg-gray-400 inline-block" />
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Brand */}
                    {product.brand && (
                      <p className="mt-1 text-[11px] text-gray-400 font-medium">{product.brand}</p>
                    )}
                  </div>
                </div>

                {/* Right: Price + Actions */}
                <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  {/* Pricing */}
                  <div className="text-left md:text-right">
                    <div className="text-lg sm:text-xl font-black text-[#dc1414] leading-tight">
                      {formatINR(price)}
                    </div>
                    {originalPrice && originalPrice > price && (
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11.5px] text-gray-400 line-through">
                          {formatINR(originalPrice)}
                        </span>
                        {discount && (
                          <span className="text-[10px] font-bold text-[#dc1414] bg-red-50 border border-red-100 px-1.5 rounded">
                            {discount}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-xs transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600'
                        : 'bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.98]'
                    }`}
                  >
                    <CartIcon className="w-4 h-4 shrink-0" />
                    <span>
                      {isAdded
                        ? isArabic
                          ? 'تمت الإضافة!'
                          : 'Added!'
                        : isArabic
                        ? 'أضف إلى السلة'
                        : 'Add to Cart'}
                    </span>
                  </button>

                  {/* More options */}
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

      {/* Wishlist IDs exist but no products matched (IDs may be stale/invalid) */}
      {!loading && wishlistIds.length > 0 && products.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-8 text-center">
          <p className="text-gray-500 text-sm">
            {isArabic
              ? 'تعذر تحميل المنتجات المحفوظة، قد تكون غير متوفرة حالياً في المتجر.'
              : 'Could not load your saved items. They may have been removed from our store.'}
          </p>
          <button
            type="button"
            onClick={clearWishlist}
            className="mt-4 px-4 py-2 rounded-lg border border-red-200 text-[#dc1414] text-sm font-semibold hover:bg-red-50 transition-colors cursor-pointer"
          >
            {isArabic ? 'مسح القائمة' : 'Clear Wishlist'}
          </button>
        </div>
      )}
    </section>
  )
}
