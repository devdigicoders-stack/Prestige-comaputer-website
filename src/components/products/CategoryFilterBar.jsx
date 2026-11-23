'use client'

import { useEffect, useRef, useState } from 'react'
import { getActiveCategories, getCategoryImageUrl } from '../../services/categoryApi'
import { useLanguage } from '../../context/LanguageContext'

const CATEGORY_TRANSLATIONS = {
  all: 'جميع المنتجات',
  gaming: 'قسم الألعاب',
  'gaming-pcs': 'قسم الألعاب',
  business: 'أجهزة الأعمال',
  'pre-owned': 'مستعمل مضمون',
  'genuine-pre-owned': 'مستعمل مضمون',
}

function AllProductsIcon() {
  return (
    <div className="w-7 h-7 rounded-md flex items-center justify-center">
      <div className="grid grid-cols-2 gap-1 w-5 h-5">
        <span className="rounded-[2px] bg-[#dc1414]" />
        <span className="rounded-[2px] bg-[#dc1414]" />
        <span className="rounded-[2px] bg-[#dc1414]" />
        <span className="rounded-[2px] bg-[#dc1414]" />
      </div>
    </div>
  )
}

export default function CategoryFilterBar({
  selectedCategory = 'all',
  onSelectCategory,
}) {
  const { isRtl } = useLanguage()
  const scrollRef = useRef(null)
  const [categories, setCategories] = useState([
    {
      id: 'all',
      label: 'All Products',
      count: 12,
    },
    {
      id: 'gaming',
      label: 'Gaming',
      count: 4,
    },
    {
      id: 'business',
      label: 'Business',
      count: 4,
    },
    {
      id: 'pre-owned',
      label: 'Genuine Pre-Owned',
      count: 4,
    },
  ])

  useEffect(() => {
    let isMounted = true
    getActiveCategories().then((liveData) => {
      if (isMounted && Array.isArray(liveData) && liveData.length > 0) {
        const totalCount = liveData.reduce((acc, c) => acc + (c.productCount || 0), 0)
        const mapped = [
          {
            id: 'all',
            label: 'All Products',
            image: getCategoryImageUrl('/uploads/category-all-products.svg'),
            count: totalCount || 0,
          },
          ...liveData.map((c) => ({
            id: c.slug,
            label: c.name,
            image: c.image ? getCategoryImageUrl(c.image) : '',
            count: c.productCount || 0,
          })),
        ]
        setCategories(mapped)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  const handleScroll = (direction) => {
    if (!scrollRef.current) return
    const offset = direction === 'left' ? -280 : 280
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <div className="w-full py-4 relative" aria-label="Category Navigation">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 relative flex items-center gap-2 sm:gap-3">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handleScroll('left')}
          aria-label="Previous categories"
          className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#e5e7eb] hover:border-[#dc1414] hover:text-[#dc1414] text-[#4b5563] shadow-sm flex items-center justify-center transition-all cursor-pointer z-10 active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4" aria-hidden="true">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Scrollable Categories Strip */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id
            const displayLabel = isRtl ? (CATEGORY_TRANSLATIONS[cat.id] || cat.label) : cat.label
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={[
                  'shrink-0 h-[68px] sm:h-[72px] min-w-[100px] sm:min-w-[110px] px-3.5 py-2 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border text-center select-none',
                  isActive
                    ? 'bg-[#fff1f2] border-[#dc1414] shadow-[0_2px_10px_rgba(220,20,20,0.14)] text-[#dc1414]'
                    : 'bg-white border-[#e5e7eb] hover:border-[#d1d5db] hover:shadow-xs text-[#374151]',
                ].join(' ')}
              >
                <div className="h-7 flex items-center justify-center">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={displayLabel}
                      className="max-h-7 max-w-[36px] object-contain drop-shadow-xs"
                    />
                  ) : (
                    <AllProductsIcon />
                  )}
                </div>
                <span className={`text-[12px] sm:text-[12.5px] font-semibold leading-tight truncate max-w-full ${isActive ? 'text-[#dc1414]' : 'text-[#1f2937]'}`}>
                  {displayLabel}
                </span>
              </button>
            )
          })}
        </div>

        {/* Right Arrow Button (Solid Red Circle as in screenshot) */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          aria-label="Next categories"
          className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#dc1414] hover:bg-[#b91c1c] text-white shadow-md flex items-center justify-center transition-all cursor-pointer z-10 active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4" aria-hidden="true">
            <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
