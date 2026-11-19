'use client'

import { useMemo, useState } from 'react'
import ProductsHeroBanner from './ProductsHeroBanner'
import CategoryFilterBar from './CategoryFilterBar'
import ProductFilterSidebar from './ProductFilterSidebar'
import ProductGridItem from './ProductGridItem'
import { ALL_PRODUCTS_DATA } from '../../data/allProducts'

export default function AllProductsView() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState([10000, 200000])
  const [selectedProcessors, setSelectedProcessors] = useState([])
  const [selectedRam, setSelectedRam] = useState([])
  const [sortBy, setSortBy] = useState('popularity')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [compareSelected, setCompareSelected] = useState(false)

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

  const handleClearAll = () => {
    setSelectedCategory('all')
    setSelectedBrands([])
    setPriceRange([10000, 200000])
    setSelectedProcessors([])
    setSelectedRam([])
    setCurrentPage(1)
  }

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS_DATA.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false
      }

      // Price filter
      if (p.price < priceRange[0] || p.price > priceRange[1]) {
        return false
      }

      // Processor filter
      if (
        selectedProcessors.length > 0 &&
        !selectedProcessors.some((proc) => p.specs.cpu.includes(proc))
      ) {
        return false
      }

      // RAM filter
      if (selectedRam.length > 0 && !selectedRam.includes(p.specs.ram)) {
        return false
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0 // popularity default
    })
  }, [
    selectedCategory,
    selectedBrands,
    priceRange,
    selectedProcessors,
    selectedRam,
    sortBy,
  ])

  return (
    <div className="w-full bg-[#f8fafc]/60 min-h-screen pb-14">
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
              {/* Left Title + Count */}
              <div>
                <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
                  All Products{' '}
                  <span className="text-[13px] font-normal text-[#6b7280]">
                    ({filteredProducts.length === ALL_PRODUCTS_DATA.length ? '482' : filteredProducts.length} Items)
                  </span>
                </h2>
              </div>

              {/* Right Sort & View Controls */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2 text-[12.5px] text-[#4b5563]">
                  <span className="whitespace-nowrap font-medium">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-[#d1d5db] rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#dc1414] cursor-pointer"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
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

            {/* Product Cards Grid (4 Columns) */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center">
                <p className="text-[15px] font-bold text-[#111827]">
                  No products found matching your filters.
                </p>
                <p className="mt-1 text-[13px] text-[#6b7280]">
                  Try adjusting the price range or resetting selected filters.
                </p>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="mt-4 px-4 py-2 bg-[#dc1414] text-white text-[13px] font-semibold rounded-lg hover:bg-[#b91c1c] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductGridItem key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Bottom Row: Compare Checkbox + Pagination */}
            <div className="mt-4 bg-white rounded-xl border border-[#e5e7eb] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              {/* Left: Compare Selected Checkbox */}
              <label className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={compareSelected}
                  onChange={(e) => setCompareSelected(e.target.checked)}
                  className="w-4 h-4 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] cursor-pointer accent-[#dc1414]"
                />
                <span>Compare Selected (0)</span>
              </label>

              {/* Right: Pagination Controls */}
              <div className="flex items-center gap-1 sm:gap-1.5 text-[12.5px]">
                {/* Previous */}
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-2.5 py-1 text-[#9ca3af] hover:text-[#111827] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>&lt; Previous</span>
                </button>

                {/* Page 1 (Active) */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`w-7 h-7 rounded-full text-[12px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === 1
                      ? 'bg-[#dc1414] text-white shadow-xs'
                      : 'text-[#4b5563] hover:bg-[#f3f4f6]'
                  }`}
                >
                  1
                </button>

                {/* Page 2 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(2)}
                  className={`w-7 h-7 rounded-full text-[12px] font-medium flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === 2
                      ? 'bg-[#dc1414] text-white shadow-xs'
                      : 'text-[#4b5563] hover:bg-[#f3f4f6]'
                  }`}
                >
                  2
                </button>

                {/* Page 3 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(3)}
                  className={`w-7 h-7 rounded-full text-[12px] font-medium flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === 3
                      ? 'bg-[#dc1414] text-white shadow-xs'
                      : 'text-[#4b5563] hover:bg-[#f3f4f6]'
                  }`}
                >
                  3
                </button>

                {/* Page 4 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(4)}
                  className="hidden sm:flex w-7 h-7 rounded-full text-[12px] font-medium items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] cursor-pointer"
                >
                  4
                </button>

                {/* Page 5 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(5)}
                  className="hidden sm:flex w-7 h-7 rounded-full text-[12px] font-medium items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] cursor-pointer"
                >
                  5
                </button>

                {/* Ellipsis */}
                <span className="px-1 text-[#9ca3af]">...</span>

                {/* Page 24 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage(24)}
                  className="w-7 h-7 rounded-full text-[12px] font-medium flex items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] cursor-pointer"
                >
                  24
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(24, p + 1))}
                  className="px-2.5 py-1 font-medium text-[#111827] hover:text-[#dc1414] cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <span>Next &gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
