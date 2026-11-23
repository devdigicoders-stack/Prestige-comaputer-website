'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { getProducts, getProductImageUrl } from '../../services/productApi'

/* Micro Icons */
function SearchIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function HistoryClockIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function TrendingFlameIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.87 2.22a1 1 0 0 0-1.25.13C9.8 4.2 6.5 8.1 6.5 12.5a5.5 5.5 0 0 0 11 0c0-2.8-1.5-5.3-2.9-7.1-.6-.8-1.2-1.6-1.73-2.42v-.01a1 1 0 0 0-.5-.75ZM12 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
    </svg>
  )
}

function CloseXIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function TrashMiniIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
    </svg>
  )
}

function ArrowUpRightIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}

function SpinnerIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  )
}

const STORAGE_KEY = 'pcs_recent_searches'

const TRENDING_SEARCHES = [
  { en: 'Gaming Laptops', ar: 'أجهزة لابتوب للألعاب', query: 'gaming laptop' },
  { en: 'RTX 4060 PC', ar: 'تجميعة RTX 4060', query: 'RTX 4060' },
  { en: 'Dell Inspiron 15', ar: 'ديل انسبيرون 15', query: 'Dell Inspiron 15' },
  { en: 'MacBook Pro', ar: 'ماك بوك برو', query: 'MacBook' },
  { en: 'Computer Rentals', ar: 'تأجير الحواسيب', query: 'rent' },
  { en: 'Workstations', ar: 'محطات عمل', query: 'workstation' },
  { en: 'Gaming Monitors', ar: 'شاشات ألعاب', query: 'monitor' },
  { en: 'Mechanical Keyboards', ar: 'لوحات مفاتيح', query: 'keyboard' },
]

export default function HeaderSearchBar({ onSearchSubmit }) {
  const router = useRouter()
  const { isArabic, isRtl, t } = useLanguage()

  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])
  const [liveProducts, setLiveProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const debounceTimerRef = useRef(null)

  // 1. Load recent searches from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed.filter(Boolean).slice(0, 8))
        }
      } else {
        // Starter defaults for first-time users
        setRecentSearches(['Dell Inspiron 15', 'RTX 4060', 'Laptop Rentals'])
      }
    } catch {
      setRecentSearches(['Dell Inspiron 15', 'RTX 4060', 'Laptop Rentals'])
    }
  }, [])

  // 2. Save a term to recent searches
  const saveRecentSearch = useCallback((term) => {
    const clean = (term || '').trim()
    if (!clean) return
    setRecentSearches((prev) => {
      const updated = [clean, ...prev.filter((item) => item.toLowerCase() !== clean.toLowerCase())].slice(0, 8)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch {}
      return updated
    })
  }, [])

  // 3. Remove single recent search item
  const handleRemoveRecent = (termToRemove, e) => {
    e.stopPropagation()
    e.preventDefault()
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item !== termToRemove)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      } catch {}
      return updated
    })
  }

  // 4. Clear all recent searches
  const handleClearAllRecent = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setRecentSearches([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }

  // 5. Click outside listener
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  // 6. Live product fetch with 180ms debounce
  useEffect(() => {
    const trimmed = query.trim()
    if (trimmed.length < 1) {
      setLiveProducts([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = setTimeout(async () => {
      try {
        const res = await getProducts({ search: trimmed, limit: 6 })
        setLiveProducts(res?.products || [])
      } catch (err) {
        console.warn('Live search error:', err.message)
        setLiveProducts([])
      } finally {
        setIsLoading(false)
      }
    }, 180)

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [query])

  // 7. Navigation handler on select
  const executeSearch = (searchTerm) => {
    const term = (searchTerm !== undefined ? searchTerm : query).trim()
    if (!term) return
    saveRecentSearch(term)
    setIsOpen(false)
    setSelectedIndex(-1)
    onSearchSubmit?.(term)
    router.push(`/products?search=${encodeURIComponent(term)}`)
  }

  const handleProductClick = (product) => {
    const term = product?.name || product?.title || query
    saveRecentSearch(term)
    setIsOpen(false)
    setSelectedIndex(-1)
    const target = product?.slug || product?._id || product?.id
    router.push(`/products/${target}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    executeSearch()
  }

  // 8. Keyboard navigation: Arrow Down, Arrow Up, Enter, Escape
  const totalItems = query.trim().length >= 1 ? liveProducts.length : recentSearches.length

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true)
      }
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1 >= totalItems ? 0 : prev + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev <= 0 ? totalItems - 1 : prev - 1))
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < totalItems) {
        e.preventDefault()
        if (query.trim().length >= 1) {
          handleProductClick(liveProducts[selectedIndex])
        } else {
          executeSearch(recentSearches[selectedIndex])
        }
      } else {
        handleSubmit(e)
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setSelectedIndex(-1)
      inputRef.current?.blur()
    }
  }

  // Filter recent searches matching user typing if length is 1
  const filteredRecent = query.trim()
    ? recentSearches.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase().trim()),
      )
    : recentSearches

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Pill Search Input Form */}
      <form onSubmit={handleSubmit} className="relative w-full">
        <div
          className={`flex items-center bg-white rounded-full p-1 pl-3.5 sm:pl-4 rtl:pl-1 rtl:pr-3.5 sm:rtl:pr-4 border-2 transition-all ${
            isOpen
              ? 'border-[#dc1414] ring-4 ring-[#dc1414]/15 shadow-[0_4px_20px_rgba(220,20,20,0.18)]'
              : 'border-gray-300 hover:border-gray-400 focus-within:border-[#dc1414] focus-within:ring-4 focus-within:ring-[#dc1414]/15 shadow-xs hover:shadow-sm'
          }`}
        >
          {/* Leading Search Icon for clean affordance */}
          <SearchIcon className="w-4 h-4 text-gray-400 shrink-0 mr-2 rtl:mr-0 rtl:ml-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              if (!isOpen) setIsOpen(true)
              setSelectedIndex(-1)
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={
              isArabic
                ? 'ابحث عن أجهزة لابتوب، تجميعات PC، شاشات، ملحقات...'
                : 'Search 10,000+ laptops, gaming PCs, rentals, components...'
            }
            className="w-full bg-transparent text-[13px] sm:text-[13.5px] font-medium text-[#111827] placeholder:text-gray-400 focus:outline-none"
            aria-autocomplete="list"
            aria-expanded={isOpen}
          />

          {/* Quick Clear 'X' Button when query is not empty */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setLiveProducts([])
                setSelectedIndex(-1)
                inputRef.current?.focus()
              }}
              aria-label="Clear search"
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors mr-1 rtl:mr-0 rtl:ml-1 cursor-pointer shrink-0"
            >
              <CloseXIcon className="w-4 h-4" />
            </button>
          )}

          {/* Red Search Submit Button */}
          <button
            type="submit"
            aria-label={t ? t('searchButton') : 'Search'}
            className="h-[36px] sm:h-[38px] w-[50px] sm:w-[56px] rounded-full bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#eb1818] hover:to-[#a50707] active:scale-[0.98] text-white flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-xs"
          >
            {isLoading ? (
              <SpinnerIcon className="w-[18px] h-[18px]" />
            ) : (
              <SearchIcon className="w-[18px] h-[18px]" />
            )}
          </button>
        </div>
      </form>

      {/* FLIPKART-STYLE AUTO-SUGGEST DROPDOWN */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 w-full bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.35)] border border-gray-150 overflow-hidden z-50 text-gray-900 animate-in fade-in slide-in-from-top-1 duration-150 text-left rtl:text-right">
          {/* STATE 1: Typing Query >= 1 char => Live Products and Search Options */}
          {query.trim().length >= 1 ? (
            <div className="divide-y divide-gray-100">
              {/* Top Quick Action: "Search for '{query}'" */}
              <div
                onClick={() => executeSearch()}
                className="px-4 py-3 bg-red-50/50 hover:bg-red-50 text-[#dc1414] flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <SearchIcon className="w-4 h-4 shrink-0 text-[#dc1414]" />
                  <span className="text-[13px] font-bold truncate">
                    {isArabic ? 'البحث عن ' : 'Search for '}
                    <span className="text-gray-900 font-extrabold">&ldquo;{query}&rdquo;</span>
                    {isArabic ? ' في جميع المنتجات' : ' in All Products'}
                  </span>
                </div>
                <ArrowUpRightIcon className="w-4 h-4 shrink-0 rtl:rotate-90 text-[#dc1414]" />
              </div>

              {/* Live Matching Products List */}
              <div className="p-2">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center justify-between">
                  <span>{isArabic ? 'المنتجات المتوفرة' : 'Matching Products'}</span>
                  {isLoading && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-normal text-gray-400">
                      <SpinnerIcon className="w-3 h-3 text-[#dc1414]" />
                      {isArabic ? 'جاري البحث...' : 'Searching...'}
                    </span>
                  )}
                </div>

                {isLoading && liveProducts.length === 0 ? (
                  // Loading Skeletons
                  <div className="space-y-1.5 p-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex items-center gap-3 p-2 rounded-xl animate-pulse bg-gray-50">
                        <div className="w-10 h-10 rounded-lg bg-gray-200 shrink-0" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-3.5 bg-gray-200 rounded w-3/4" />
                          <div className="h-3 bg-gray-200 rounded w-1/3" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : liveProducts.length > 0 ? (
                  <div className="space-y-1 mt-1">
                    {liveProducts.map((prod, idx) => {
                      const isHighlighted = selectedIndex === idx
                      const rawImg = prod.image || prod.images?.[0] || ''
                      const imgUrl = getProductImageUrl(rawImg)
                      const title = prod.name || prod.title || 'Product'
                      const price = Number(prod.price) || 0
                      const originalPrice = Number(prod.originalPrice) || Number(prod.comparePrice) || null
                      const category = prod.categoryName || prod.categorySlug || prod.brand || 'Computer'

                      return (
                        <div
                          key={prod._id || prod.slug || idx}
                          onClick={() => handleProductClick(prod)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-center justify-between gap-3 p-2.5 rounded-xl cursor-pointer transition-all ${
                            isHighlighted
                              ? 'bg-red-50/70 border border-red-200 shadow-2xs'
                              : 'hover:bg-gray-50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Product Thumbnail */}
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-150 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                              {imgUrl ? (
                                <img
                                  src={imgUrl}
                                  alt={title}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                  }}
                                />
                              ) : (
                                <SearchIcon className="w-5 h-5 text-gray-300" />
                              )}
                            </div>

                            {/* Title & Category */}
                            <div className="min-w-0 leading-tight">
                              <h4 className="text-[13px] font-bold text-gray-900 truncate">
                                {title}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="inline-block text-[10.5px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                                  {category}
                                </span>
                                {prod.brand && (
                                  <span className="text-[11px] text-gray-500 font-medium">
                                    {prod.brand}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Price & Action */}
                          <div className="text-right rtl:text-left shrink-0 pl-2 rtl:pl-0 rtl:pr-2">
                            <span className="text-[13.5px] font-extrabold text-[#dc1414] block">
                              {formatCurrency(price, isArabic)}
                            </span>
                            {originalPrice && originalPrice > price && (
                              <span className="text-[11px] text-gray-400 line-through block">
                                {formatCurrency(originalPrice, isArabic)}
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // No live products found
                  <div className="p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-2">
                      <SearchIcon className="w-5 h-5" />
                    </div>
                    <p className="text-[13px] font-bold text-gray-800">
                      {isArabic ? 'لم يتم العثور على منتجات مطابقة' : 'No products found'}
                    </p>
                    <p className="text-[11.5px] text-gray-500 mt-0.5">
                      {isArabic
                        ? `لا توجد نتائج لـ "${query}". جرّب البحث بكلمة عامة مثل Dell أو Laptop.`
                        : `No direct matches for "${query}". Try searching with broader terms.`}
                    </p>
                    <button
                      type="button"
                      onClick={() => executeSearch()}
                      className="mt-3 px-4 py-1.5 rounded-lg bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12px] font-bold transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                    >
                      <SearchIcon className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'عرض جميع النتائج في المتجر' : 'Search all in catalog'}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom "See all results" bar */}
              <div
                onClick={() => executeSearch()}
                className="px-4 py-2.5 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-xs font-semibold text-gray-700 cursor-pointer transition-colors"
              >
                <span>
                  {isArabic
                    ? `عرض جميع النتائج لـ "${query}"`
                    : `See all search results for "${query}"`}
                </span>
                <span className="text-[#dc1414] flex items-center gap-1 font-bold">
                  <span>{isArabic ? 'انتقال' : 'View all'}</span>
                  <span className="rtl:rotate-180">&rarr;</span>
                </span>
              </div>
            </div>
          ) : (
            /* STATE 2: Empty Query => Flipkart Recent Searches + Trending */
            <div className="divide-y divide-gray-100 max-h-[460px] overflow-y-auto no-scrollbar">
              {/* SECTION A: RECENT SEARCHES */}
              {filteredRecent.length > 0 && (
                <div className="p-3">
                  <div className="flex items-center justify-between px-2 pb-2">
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                      <HistoryClockIcon className="w-3.5 h-3.5 text-[#dc1414]" />
                      <span>{isArabic ? 'عمليات البحث الأخيرة' : 'Recent Searches'}</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleClearAllRecent}
                      className="text-[11.5px] font-bold text-[#dc1414] hover:text-[#a80707] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <TrashMiniIcon className="w-3 h-3" />
                      <span>{isArabic ? 'مسح السجل' : 'Clear History'}</span>
                    </button>
                  </div>

                  <div className="space-y-0.5">
                    {filteredRecent.map((term, idx) => {
                      const isHighlighted = selectedIndex === idx
                      return (
                        <div
                          key={term}
                          onClick={() => executeSearch(term)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-colors cursor-pointer group ${
                            isHighlighted ? 'bg-red-50 text-[#dc1414]' : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <HistoryClockIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#dc1414] shrink-0 transition-colors" />
                            <span className="truncate group-hover:text-gray-900">{term}</span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => handleRemoveRecent(term, e)}
                            aria-label={`Remove ${term}`}
                            title={isArabic ? 'حذف من السجل' : 'Remove from history'}
                            className="w-6 h-6 rounded-md flex items-center justify-center text-gray-300 hover:text-[#dc1414] hover:bg-red-100/50 transition-colors cursor-pointer opacity-70 group-hover:opacity-100 shrink-0"
                          >
                            <CloseXIcon className="w-3 h-3" />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* SECTION B: TRENDING / POPULAR SEARCHES */}
              <div className="p-3 bg-gray-50/60">
                <div className="flex items-center gap-1.5 px-2 pb-2.5">
                  <TrendingFlameIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-gray-600">
                    {isArabic ? 'عمليات البحث الشائعة' : 'Trending Searches'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 px-1">
                  {TRENDING_SEARCHES.map((item) => {
                    const label = isArabic ? item.ar : item.en
                    return (
                      <button
                        key={item.query}
                        type="button"
                        onClick={() => executeSearch(item.query)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 hover:border-[#dc1414] hover:text-[#dc1414] text-gray-700 text-[12px] font-medium shadow-2xs transition-all cursor-pointer hover:shadow-xs active:scale-97"
                      >
                        <SearchIcon className="w-3 h-3 text-gray-400 shrink-0" />
                        <span>{label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* SECTION C: POPULAR HARDWARE CATEGORIES */}
              <div className="p-3">
                <div className="flex items-center justify-between px-2 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    {isArabic ? 'أبرز الأقسام' : 'Explore Top Categories'}
                  </span>
                  <Link
                    href="/categories"
                    onClick={() => setIsOpen(false)}
                    className="text-[11px] font-bold text-[#dc1414] hover:underline"
                  >
                    {isArabic ? 'عرض الكل' : 'View all'}
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-1">
                  {[
                    { label: isArabic ? 'أجهزة لابتوب' : 'Laptops', slug: 'laptops' },
                    { label: isArabic ? 'تجميعات ألعاب' : 'Gaming PCs', slug: 'gaming' },
                    { label: isArabic ? 'تأجير الحواسيب' : 'Rentals', href: '/rentals' },
                    { label: isArabic ? 'شاشات العرض' : 'Monitors', slug: 'monitors' },
                  ].map((cat, i) => (
                    <Link
                      key={i}
                      href={cat.href || `/products?cat=${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="px-2.5 py-2 rounded-xl bg-gray-50 hover:bg-red-50/70 border border-gray-200/70 hover:border-red-200 text-center text-[12px] font-semibold text-gray-800 hover:text-[#dc1414] transition-all"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
