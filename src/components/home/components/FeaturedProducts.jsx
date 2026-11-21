'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import ProductCard from '../../product/ProductCard'
import { useStore } from '../../../context/StoreContext'
import { useLanguage } from '../../../context/LanguageContext'
import { getProducts } from '../../../services/productApi'

const FEATURED_TABS = [
  { id: 'All Products', labelEn: 'All Products', labelAr: 'جميع المنتجات' },
  { id: 'Best Sellers', labelEn: 'Best Sellers', labelAr: 'الأكثر مبيعاً' },
  { id: 'New Arrivals', labelEn: 'New Arrivals', labelAr: 'وصل حديثاً' },
  { id: 'Top Deals', labelEn: 'Top Deals', labelAr: 'أقوى العروض' },
  { id: 'Rentals', labelEn: 'Rentals', labelAr: 'أجهزة للإيجار' },
]

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
  const { isRtl, t } = useLanguage()
  const activeWishlist = wishlistIds ?? store.wishlistIds
  const handleToggleWishlist = onToggleWishlist ?? store.toggleWishlist
  const handleAddToCart = onAddToCart ?? store.addToCart

  const [activeTab, setActiveTab] = useState('All Products')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    getProducts({ limit: 12, sort: 'popularity' })
      .then((res) => {
        if (isMounted && res?.products) {
          setProducts(res.products)
        }
      })
      .catch((err) => {
        console.warn('Could not load featured products:', err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  const displayedProducts = useMemo(() => {
    if (activeTab === 'All Products') return products
    if (activeTab === 'Rentals') {
      return products.filter(
        (item) =>
          item.type === 'Buy & Rent' ||
          item.type === 'Rent Only' ||
          (item.tags && item.tags.includes('Rentals')),
      )
    }
    return products.filter((item) => item.tags && item.tags.includes(activeTab))
  }, [products, activeTab])

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
                {t('featuredProducts')}
              </h2>
            </div>

            {/* Filter Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5"
              role="tablist"
              aria-label="Filter featured products"
            >
              {FEATURED_TABS.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={[
                      'px-4 py-1.5 rounded-lg text-[12.5px] font-medium whitespace-nowrap transition-all cursor-pointer',
                      isActive
                        ? 'bg-gradient-to-b from-[#e11414] to-[#bd0909] text-white shadow-[0_4px_12px_rgba(220,16,16,0.3)]'
                        : 'bg-[#f4f5f7] text-[#374151] hover:bg-[#e8eaef] hover:text-[#111827]',
                    ].join(' ')}
                  >
                    {isRtl ? tab.labelAr : tab.labelEn}
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
            <span>{t('viewAllProducts')}</span>
            <ArrowRightIcon className={`w-3.5 h-3.5 ${isRtl ? '-scale-x-100 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'} transition-transform`} />
          </Link>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 py-8 text-center text-[#6b7280]">
            <div className="col-span-full py-12 flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-[#dc1414] border-t-transparent rounded-full animate-spin" />
              <span className="text-[13px] font-medium">Loading featured products...</span>
            </div>
          </div>
        ) : displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {displayedProducts.map((product) => {
              const prodId = product.slug || product.id || product._id
              return (
                <ProductCard
                  key={prodId}
                  product={product}
                  isWishlisted={activeWishlist?.includes(prodId)}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={handleAddToCart}
                />
              )
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-[13px] text-[#6b7280]">
            No products found under this section.
          </div>
        )}
      </div>
    </section>
  )
}