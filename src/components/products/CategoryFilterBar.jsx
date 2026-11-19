'use client'

import { useRef } from 'react'
import { PRODUCT_CATEGORIES } from '../../data/allProducts'

function CategoryIcon({ type = 'grid' }) {
  if (type === 'laptop') {
    return (
      <svg viewBox="0 0 36 26" className="w-9 h-7 object-contain" aria-hidden="true">
        <polygon points="6,4 30,4 28,19 8,19" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <polygon points="8,6 28,6 26,17 10,17" fill="#38bdf8" />
        <polygon points="4,19 32,19 34,22 2,22" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />
      </svg>
    )
  }
  if (type === 'desktop') {
    return (
      <svg viewBox="0 0 28 32" className="w-7 h-8 object-contain" aria-hidden="true">
        <rect x="3" y="2" width="22" height="28" rx="2.5" fill="#09090b" stroke="#3f3f46" strokeWidth="1.2" />
        <rect x="6" y="5" width="16" height="22" rx="1.5" fill="#18181b" />
        <circle cx="14" cy="11" r="3.5" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="14" cy="21" r="3.5" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
      </svg>
    )
  }
  if (type === 'all-in-one') {
    return (
      <svg viewBox="0 0 34 30" className="w-8 h-7 object-contain" aria-hidden="true">
        <rect x="2" y="2" width="30" height="20" rx="2" fill="#09090b" stroke="#334155" strokeWidth="1.2" />
        <rect x="4" y="4" width="26" height="16" rx="1" fill="#6366f1" fillOpacity="0.85" />
        <rect x="15" y="22" width="4" height="4" fill="#475569" />
        <polygon points="10,26 24,26 26,28 8,28" fill="#1e293b" />
      </svg>
    )
  }
  if (type === 'workstation') {
    return (
      <svg viewBox="0 0 26 32" className="w-6 h-8 object-contain" aria-hidden="true">
        <rect x="2" y="2" width="22" height="28" rx="2" fill="#18181b" stroke="#52525b" strokeWidth="1.2" />
        <line x1="6" y1="8" x2="20" y2="8" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="6" y1="12" x2="20" y2="12" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="13" cy="22" r="4.5" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      </svg>
    )
  }
  if (type === 'monitor') {
    return (
      <svg viewBox="0 0 34 30" className="w-8 h-7 object-contain" aria-hidden="true">
        <rect x="2" y="3" width="30" height="19" rx="2" fill="#09090b" stroke="#3f3f46" strokeWidth="1.2" />
        <rect x="4" y="5" width="26" height="15" fill="#3b82f6" />
        <rect x="15" y="22" width="4" height="4" fill="#64748b" />
        <polygon points="9,26 25,26 26,28 8,28" fill="#334155" />
      </svg>
    )
  }
  if (type === 'accessories') {
    return (
      <svg viewBox="0 0 36 24" className="w-9 h-6 object-contain" aria-hidden="true">
        <rect x="2" y="5" width="24" height="14" rx="2" fill="#09090b" stroke="#334155" strokeWidth="1" />
        <line x1="5" y1="9" x2="23" y2="9" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 2" />
        <line x1="5" y1="14" x2="23" y2="14" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 2" />
        <ellipse cx="31" cy="12" rx="3.5" ry="6.5" fill="#09090b" stroke="#dc1414" strokeWidth="1" />
      </svg>
    )
  }
  if (type === 'components') {
    return (
      <svg viewBox="0 0 36 24" className="w-9 h-6 object-contain" aria-hidden="true">
        <rect x="2" y="4" width="32" height="16" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="9" cy="12" r="3.8" fill="none" stroke="#22d3ee" strokeWidth="1.3" />
        <circle cx="18" cy="12" r="3.8" fill="none" stroke="#22d3ee" strokeWidth="1.3" />
        <circle cx="27" cy="12" r="3.8" fill="none" stroke="#22d3ee" strokeWidth="1.3" />
      </svg>
    )
  }
  if (type === 'networking') {
    return (
      <svg viewBox="0 0 34 28" className="w-8 h-7 object-contain" aria-hidden="true">
        <rect x="4" y="16" width="26" height="10" rx="2" fill="#09090b" stroke="#334155" strokeWidth="1.2" />
        <line x1="8" y1="6" x2="8" y2="16" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="4" x2="17" y2="16" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="6" x2="26" y2="16" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="21" r="1.2" fill="#22c55e" />
        <circle cx="14" cy="21" r="1.2" fill="#22c55e" />
        <circle cx="18" cy="21" r="1.2" fill="#22c55e" />
      </svg>
    )
  }
  if (type === 'printer') {
    return (
      <svg viewBox="0 0 34 28" className="w-8 h-7 object-contain" aria-hidden="true">
        <rect x="4" y="10" width="26" height="14" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1.2" />
        <polygon points="9,2 25,2 25,10 9,10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <polygon points="10,18 24,18 24,26 10,26" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" />
        <rect x="23" y="13" width="4" height="2" fill="#22c55e" />
      </svg>
    )
  }
  if (type === 'software') {
    return (
      <svg viewBox="0 0 28 32" className="w-7 h-8 object-contain" aria-hidden="true">
        <polygon points="4,4 20,2 24,8 8,10" fill="#0284c7" />
        <polygon points="8,10 24,8 24,28 8,30" fill="#0369a1" />
        <polygon points="4,4 8,10 8,30 4,24" fill="#075985" />
        <rect x="12" y="14" width="7" height="7" fill="#ffffff" fillOpacity="0.85" />
      </svg>
    )
  }

  // Default: Grid icon for All Products
  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center">
      <div className="grid grid-cols-2 gap-1 w-6 h-6">
        <span className="rounded-[3px] bg-[#dc1414]" />
        <span className="rounded-[3px] bg-[#dc1414]" />
        <span className="rounded-[3px] bg-[#dc1414]" />
        <span className="rounded-[3px] bg-[#dc1414]" />
      </div>
    </div>
  )
}

export default function CategoryFilterBar({
  selectedCategory = 'all',
  onSelectCategory,
}) {
  const scrollRef = useRef(null)

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
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id
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
                  <CategoryIcon type={cat.icon} />
                </div>
                <span className={`text-[12px] sm:text-[12.5px] font-semibold leading-tight truncate max-w-full ${isActive ? 'text-[#dc1414]' : 'text-[#1f2937]'}`}>
                  {cat.label}
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
