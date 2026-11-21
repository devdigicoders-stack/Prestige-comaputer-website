'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ProductsHeroBanner from './ProductsHeroBanner'
import CategoryFilterBar from './CategoryFilterBar'
import ProductFilterSidebar from './ProductFilterSidebar'
import ProductGridItem from './ProductGridItem'
import { getProducts } from '../../services/productApi'
import { useLanguage } from '../../context/LanguageContext'

export default function AllProductsView() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isArabic, isRtl } = useLanguage()

  const urlSearch = searchParams?.get('search') || searchParams?.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(urlSearch)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState([1000, 250000])
  const [selectedProcessors, setSelectedProcessors] = useState([])
  const [selectedRam, setSelectedRam] = useState([])
  const [sortBy, setSortBy] = useState('popularity')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [compareSelected, setCompareSelected] = useState(false)

  // Sync searchQuery when URL query param changes
  useEffect(() => {
    setSearchQuery(urlSearch)
  }, [urlSearch])

  // Fetch live products from backend (with search query or full catalog)
  useEffect(() => {
    let isMounted = true
    setLoading(true)
    const fetchParams = { limit: 100 }
    if (urlSearch.trim()) {
      fetchParams.search = urlSearch.trim()
    }
    getProducts(fetchParams)
      .then((res) => {
        if (isMounted && res?.products) {
          setProducts(res.products)
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch live products:', err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [urlSearch])

  // Toggle helpers
  const handleToggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    )
  }

  const handleToggleProcessor = (proc) => {
    setSelectedProcessors((prev) =>
      prev.includes(proc) ? prev.filter((p) => p !== proc) : [...prev, proc],
    )
  }

  const handleToggleRam = (ram) => {
    setSelectedRam((prev) =>
      prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram],
    )
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    const params = new URLSearchParams(searchParams?.toString() || '')
    params.delete('search')
    params.delete('q')
    const qs = params.toString()
    router.push(qs ? `/products?${qs}` : '/products')
  }

  const handleClearAll = () => {
    setSelectedCategory('all')
    setSelectedBrands([])
    setPriceRange([1000, 250000])
    setSelectedProcessors([])
    setSelectedRam([])
    setCurrentPage(1)
    if (urlSearch || searchQuery) {
      handleClearSearch()
    }
  }

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Search query filter (instant client-side filtering)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim()
          const matchName = (p.name || p.title || '').toLowerCase().includes(q)
          const matchBrand = (p.brand || '').toLowerCase().includes(q)
          const matchCat = (
            p.categoryName ||
            p.categorySlug ||
            (p.category && (p.category.name || p.category.slug)) ||
            ''
          ).toLowerCase().includes(q)
          const matchDesc = (p.description || '').toLowerCase().includes(q)
          const matchCpu = (p.specs?.cpu || p.specs?.processor || '').toLowerCase().includes(q)
          const matchSku = (p.sku || '').toLowerCase().includes(q)
          if (!matchName && !matchBrand && !matchCat && !matchDesc && !matchCpu && !matchSku) {
            return false
          }
        }

        // Category filter
        if (selectedCategory !== 'all') {
          const matchCat =
            p.categorySlug === selectedCategory ||
            (p.categoryName && p.categoryName.toLowerCase() === selectedCategory.toLowerCase()) ||
            (p.category && (p.category.slug === selectedCategory || p.category.name === selectedCategory))
          if (!matchCat) return false
        }

        // Brand filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
          return false
        }

        // Price filter
        const price = Number(p.price) || 0
        if (price < priceRange[0] || price > priceRange[1]) {
          return false
        }

        // Processor filter
        if (selectedProcessors.length > 0) {
          const cpu = (p.specs?.cpu || p.specs?.processor || '').toLowerCase()
          const matchesCpu = selectedProcessors.some((proc) =>
            cpu.includes(proc.toLowerCase()),
          )
          if (!matchesCpu) return false
        }

        // RAM filter
        if (selectedRam.length > 0) {
          const ram = (p.specs?.ram || '').toLowerCase()
          const matchesRam = selectedRam.some((r) =>
            ram.includes(r.toLowerCase()),
          )
          if (!matchesRam) return false
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0)
        if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0)
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0)
        return (a.sortOrder || 0) - (b.sortOrder || 0) // popularity default
      })
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedBrands,
    priceRange,
    selectedProcessors,
    selectedRam,
    sortBy,
  ])

  const PRODUCTS_PER_PAGE = 8
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  const safePage = Math.min(Math.max(1, currentPage), totalPages)

  // Reset to first page when any filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [
    searchQuery,
    selectedCategory,
    selectedBrands,
    priceRange,
    selectedProcessors,
    selectedRam,
    sortBy,
  ])

  // Slice products for active page
  const paginatedProducts = useMemo(() => {
    const start = (safePage - 1) * PRODUCTS_PER_PAGE
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
  }, [filteredProducts, safePage])

  return (
    <div className={`w-full bg-[#f8fafc]/60 min-h-screen pb-14 ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* 1. Hero Banner with product.png */}
      <ProductsHeroBanner />

      {/* 2. Category Filter Carousel Bar */}
      <CategoryFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId)
          setCurrentPage(1)
        }}
      />

      {/* 3. Main Catalog Section (Filters Sidebar + Products Grid) */}
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 mt-3 sm:mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: Filter Sidebar (col-span-3) */}
          <div className="lg:col-span-3">
            <ProductFilterSidebar
              products={products}
              selectedCategory={selectedCategory}
              onSelectCategory={(catId) => {
                setSelectedCategory(catId)
                setCurrentPage(1)
              }}
              selectedBrands={selectedBrands}
              onToggleBrand={handleToggleBrand}
              priceRange={priceRange}
              onChangePriceRange={setPriceRange}
              selectedProcessors={selectedProcessors}
              onToggleProcessor={handleToggleProcessor}
              selectedRam={selectedRam}
              onToggleRam={handleToggleRam}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Right Column: Catalog Grid (col-span-9) */}
          <div className="lg:col-span-9 flex flex-col gap-4">
            {/* Header Control Row: Title + Sort + View Mode */}
            <div className="bg-white rounded-xl border border-[#e5e7eb] px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              {/* Left Title + Count + Search Chip */}
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
                  {isArabic ? 'جميع المنتجات' : 'All Products'}{' '}
                  <span className="text-[13px] font-normal text-[#6b7280]">
                    ({filteredProducts.length} {isArabic ? 'عنصر' : 'Items'})
                  </span>
                </h2>

                {searchQuery.trim() && (
                  <div className="inline-flex items-center gap-1.5 bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] px-2.5 py-1 rounded-full text-[12px] font-medium shadow-2xs">
                    <span>
                      {isArabic ? 'البحث عن:' : 'Search:'}{' '}
                      <strong className="text-[#dc1414] font-semibold">"{searchQuery}"</strong>
                    </span>
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      aria-label="Clear search"
                      className="w-4 h-4 rounded-full hover:bg-[#fee2e2] flex items-center justify-center transition-colors cursor-pointer text-[#dc1414]"
                      title={isArabic ? 'إزالة البحث' : 'Clear search'}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Right Sort & View Controls */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2 text-[12.5px] text-[#4b5563]">
                  <span className="whitespace-nowrap font-medium">{isArabic ? 'الترتيب حسب:' : 'Sort By:'}</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-[#d1d5db] rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#dc1414] cursor-pointer"
                  >
                    <option value="popularity">{isArabic ? 'الأكثر شيوعاً' : 'Popularity'}</option>
                    <option value="price-low">{isArabic ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                    <option value="price-high">{isArabic ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                    <option value="rating">{isArabic ? 'تقييم العملاء' : 'Customer Rating'}</option>
                  </select>
                </div>

                {/* View Mode Toggle: Grid & List */}
                <div className="flex items-center gap-1 bg-[#f3f4f6] p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-[#dc1414] text-white shadow-xs'
                        : 'text-[#6b7280] hover:text-[#111827]'
                    }`}
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <rect x="2" y="2" width="7" height="7" rx="1.5" />
                      <rect x="11" y="2" width="7" height="7" rx="1.5" />
                      <rect x="2" y="11" width="7" height="7" rx="1.5" />
                      <rect x="11" y="11" width="7" height="7" rx="1.5" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                    className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                      viewMode === 'list'
                        ? 'bg-[#dc1414] text-white shadow-xs'
                        : 'text-[#6b7280] hover:text-[#111827]'
                    }`}
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards Grid */}
            {loading ? (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center">
                <div className="inline-flex items-center gap-2 text-[14px] text-[#6b7280]">
                  <div className="w-5 h-5 border-2 border-[#dc1414] border-t-transparent rounded-full animate-spin" />
                  <span>{isArabic ? 'جاري تحميل المنتجات...' : 'Loading catalog products...'}</span>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center shadow-xs">
                <div className="w-14 h-14 mx-auto mb-3.5 rounded-full bg-red-50 text-[#dc1414] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <p className="text-[16px] font-bold text-[#111827]">
                  {searchQuery.trim()
                    ? (isArabic ? `لا توجد منتجات تطابق "${searchQuery}"` : `No products found matching "${searchQuery}"`)
                    : (isArabic ? 'لا توجد منتجات تطابق الفلاتر المحددة.' : 'No products found matching your filters.')}
                </p>
                <p className="mt-1 text-[13px] text-[#6b7280] max-w-md mx-auto">
                  {searchQuery.trim()
                    ? (isArabic ? 'تحقق من الأخطاء الإملائية أو جرب كلمات بحث بديلة مثل HP، Dell، Gaming، أو RTX.' : 'Check for typos or try searching with alternative keywords like HP, Dell, Gaming, or RTX.')
                    : (isArabic ? 'جرب ضبط نطاق السعر أو إعادة تعيين الفلاتر المحددة.' : 'Try adjusting the price range or resetting selected filters.')}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  {searchQuery.trim() && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="px-4 py-2 bg-[#dc1414] text-white text-[13px] font-semibold rounded-lg hover:bg-[#b91c1c] transition-colors cursor-pointer shadow-xs"
                    >
                      {isArabic ? 'مسح البحث وعرض الكل' : 'Clear Search & View All'}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="px-4 py-2 bg-gray-100 text-[#374151] hover:bg-gray-200 text-[13px] font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    {isArabic ? 'إعادة تعيين جميع الفلاتر' : 'Reset All Filters'}
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'flex flex-col gap-3'
                }
              >
                {paginatedProducts.map((product) => {
                  const pid = product.slug || product._id || product.id
                  return <ProductGridItem key={pid} product={product} />
                })}
              </div>
            )}

            {/* Bottom Row: Item Count & Dynamic Pagination */}
            <div className="mt-4 bg-white rounded-xl border border-[#e5e7eb] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              {/* Left: Product count & Compare */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={compareSelected}
                    onChange={(e) => setCompareSelected(e.target.checked)}
                    className="w-4 h-4 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] cursor-pointer accent-[#dc1414]"
                  >
                  </input>
                  <span>{isArabic ? 'مقارنة المحددة (0)' : 'Compare Selected (0)'}</span>
                </label>
                <span className="text-[12.5px] text-[#6b7280]">
                  {filteredProducts.length > 0
                    ? isArabic
                      ? `عرض ${(safePage - 1) * PRODUCTS_PER_PAGE + 1} إلى ${Math.min(
                          safePage * PRODUCTS_PER_PAGE,
                          filteredProducts.length,
                        )} من أصل ${filteredProducts.length} منتج`
                      : `Showing ${(safePage - 1) * PRODUCTS_PER_PAGE + 1} to ${Math.min(
                          safePage * PRODUCTS_PER_PAGE,
                          filteredProducts.length,
                        )} of ${filteredProducts.length} items`
                    : isArabic
                    ? 'عرض 0 منتج'
                    : 'Showing 0 items'}
                </span>
              </div>

              {/* Right: Dynamic Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1 sm:gap-1.5 text-[12.5px]">
                  {/* Previous */}
                  <button
                    type="button"
                    disabled={safePage <= 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="px-2.5 py-1 text-[#9ca3af] hover:text-[#111827] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 transition-colors"
                  >
                    <span>{isArabic ? 'السابق >' : '< Previous'}</span>
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const isActive = safePage === page
                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`w-7 h-7 rounded-full text-[12px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#dc1414] text-white shadow-xs'
                            : 'text-[#4b5563] hover:bg-[#f3f4f6]'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  })}

                  {/* Next */}
                  <button
                    type="button"
                    disabled={safePage >= totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="px-2.5 py-1 font-medium text-[#111827] hover:text-[#dc1414] cursor-pointer flex items-center gap-1 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span>{isArabic ? '< التالي' : 'Next >'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
