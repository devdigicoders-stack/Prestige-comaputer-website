'use client'

import { useEffect, useMemo, useState } from 'react'
import { getActiveCategories } from '../../services/categoryApi'
import { useLanguage } from '../../context/LanguageContext'

const CATEGORY_TRANSLATIONS = {
  'all': 'جميع المنتجات',
  'laptops': 'أجهزة لابتوب',
  'laptop': 'أجهزة لابتوب',
  'desktops': 'أجهزة مكتبية',
  'desktop': 'أجهزة مكتبية',
  'workstations': 'محطات عمل',
  'workstation': 'محطات عمل',
  'gaming-pcs': 'تجميعات ألعاب',
  'gaming': 'تجميعات ألعاب',
  'components': 'قطع غيار',
  'monitors': 'شاشات عرض',
  'monitor': 'شاشات عرض',
  'accessories': 'ملحقات وإكسسوارات',
  'networking': 'أجهزة شبكات',
  'software': 'برمجيات',
  'all-in-one': 'الكل في واحد',
}

function ChevronIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className={`w-4 h-4 text-[#6b7280] transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProductFilterSidebar({
  products = [],
  selectedCategory,
  onSelectCategory,
  selectedBrands = [],
  onToggleBrand,
  priceRange = [10000, 200000],
  onChangePriceRange,
  selectedProcessors = [],
  onToggleProcessor,
  selectedRam = [],
  onToggleRam,
  onClearAll,
}) {
  const { isRtl } = useLanguage()
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    brand: true,
    processor: false,
    ram: false,
    storage: false,
    screen: false,
    os: false,
  })

  const [showMoreCategories, setShowMoreCategories] = useState(false)
  const [liveCategories, setLiveCategories] = useState(null)

  useEffect(() => {
    let isMounted = true
    getActiveCategories().then((data) => {
      if (isMounted && Array.isArray(data) && data.length > 0) {
        setLiveCategories(data)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const CATEGORY_FILTERS = liveCategories
    ? liveCategories.map((c) => ({
        id: c.slug,
        label: c.name,
        count: c.productCount || 0,
      }))
    : []

  const brandCounts = useMemo(() => {
    const counts = {}
    if (Array.isArray(products)) {
      products.forEach((p) => {
        if (p.brand) {
          counts[p.brand] = (counts[p.brand] || 0) + 1
        }
      })
    }
    return counts
  }, [products])

  const BRAND_FILTERS = [
    { id: 'Dell', label: 'Dell', count: brandCounts['Dell'] || 0 },
    { id: 'HP', label: 'HP', count: brandCounts['HP'] || 0 },
    { id: 'ASUS', label: 'ASUS', count: brandCounts['ASUS'] || 0 },
    { id: 'Lenovo', label: 'Lenovo', count: brandCounts['Lenovo'] || 0 },
    { id: 'Apple', label: 'Apple', count: brandCounts['Apple'] || 0 },
    { id: 'PCS Custom', label: 'PCS Custom', count: brandCounts['PCS Custom'] || 0 },
  ]

  const PROCESSOR_FILTERS = [
    { id: 'Core i3', label: 'Intel Core i3' },
    { id: 'Core i5', label: 'Intel Core i5' },
    { id: 'Core i7', label: 'Intel Core i7' },
    { id: 'Core i9', label: 'Intel Core i9' },
    { id: 'Ryzen 7', label: 'AMD Ryzen 7' },
    { id: 'Apple M2', label: 'Apple M-Series' },
  ]

  const RAM_FILTERS = ['8 GB', '16 GB', '32 GB', '64 GB']

  const visibleCategories = showMoreCategories
    ? CATEGORY_FILTERS
    : CATEGORY_FILTERS.slice(0, 5)

  return (
    <aside
      className="w-full bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
      aria-label="Filter products"
    >
      {/* Header: Funnel + Title + Clear All */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#f3f4f6]">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="w-4 h-4 text-[#dc1414]"
            aria-hidden="true"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <h2 className="text-[16px] font-bold text-[#111827]">{isRtl ? 'تصفية النتائج' : 'Filters'}</h2>
        </div>

        <button
          type="button"
          onClick={onClearAll}
          className="text-[12.5px] font-semibold text-[#dc1414] hover:text-[#b91c1c] hover:underline cursor-pointer transition-colors"
        >
          {isRtl ? 'مسح الكل' : 'Clear All'}
        </button>
      </div>

      <div className="divide-y divide-[#f3f4f6]">
        {/* SECTION 1: Category */}
        <div className="py-3.5">
          <button
            type="button"
            onClick={() => toggleSection('category')}
            className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
          >
            <span className="text-[13.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors">
              {isRtl ? 'التصنيف' : 'Category'}
            </span>
            <ChevronIcon isOpen={openSections.category} />
          </button>

          {openSections.category && (
            <div className="mt-3 space-y-2">
              {visibleCategories.map((cat) => {
                const isChecked = selectedCategory === cat.id
                const catLabel = isRtl ? (CATEGORY_TRANSLATIONS[cat.id] || cat.label) : cat.label
                return (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between text-[12.5px] text-[#374151] hover:text-[#111827] cursor-pointer group select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          onSelectCategory(isChecked ? 'all' : cat.id)
                        }
                        className="w-4 h-4 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] cursor-pointer accent-[#dc1414]"
                      />
                      <span>{catLabel}</span>
                    </div>
                    <span className="text-[#9ca3af] text-[11.5px]">
                      ({cat.count})
                    </span>
                  </label>
                )
              })}

              {CATEGORY_FILTERS.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowMoreCategories((prev) => !prev)}
                  className="mt-1.5 text-[12px] font-semibold text-[#dc1414] hover:underline cursor-pointer block"
                >
                  {showMoreCategories ? (isRtl ? '- عرض أقل' : '- Show Less') : (isRtl ? '+ عرض المزيد' : '+ Show More')}
                </button>
              )}
            </div>
          )}
        </div>

        {/* SECTION 2: Price Range */}
        <div className="py-3.5">
          <button
            type="button"
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
          >
            <span className="text-[13.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors">
              {isRtl ? 'نطاق السعر' : 'Price Range'}
            </span>
            <ChevronIcon isOpen={openSections.price} />
          </button>

          {openSections.price && (
            <div className="mt-3">
              {/* Range Track Graphic */}
              <div className="relative w-full h-1.5 bg-[#e5e7eb] rounded-full my-4">
                <div
                  className="absolute top-0 bottom-0 bg-[#dc1414] rounded-full"
                  style={{
                    left: `${Math.max(0, ((priceRange[0] - 10000) / 190000) * 100)}%`,
                    right: `${Math.max(0, ((200000 - priceRange[1]) / 190000) * 100)}%`,
                  }}
                />
                {/* Left Dot */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#dc1414] border-2 border-white shadow-sm -ml-2 cursor-pointer"
                  style={{
                    left: `${Math.max(0, ((priceRange[0] - 10000) / 190000) * 100)}%`,
                  }}
                />
                {/* Right Dot */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#dc1414] border-2 border-white shadow-sm -ml-2 cursor-pointer"
                  style={{
                    left: `${100 - Math.max(0, ((200000 - priceRange[1]) / 190000) * 100)}%`,
                  }}
                />
              </div>

              {/* Price Input Boxes Row */}
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-[#111827] flex items-center">
                  <span>₹</span>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      onChangePriceRange([Number(e.target.value) || 0, priceRange[1]])
                    }
                    className="w-full bg-transparent pl-1 focus:outline-none text-[12px]"
                  />
                </div>

                <span className="text-[#9ca3af] text-[12px]">—</span>

                <div className="flex-1 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-[#111827] flex items-center">
                  <span>₹</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      onChangePriceRange([priceRange[0], Number(e.target.value) || 200000])
                    }
                    className="w-full bg-transparent pl-1 focus:outline-none text-[12px]"
                  />
                </div>

                <button
                  type="button"
                  aria-label="Apply price filter"
                  className="w-7 h-7 rounded-lg bg-[#f3f4f6] hover:bg-[#dc1414] hover:text-white text-[#4b5563] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 3: Brand */}
        <div className="py-3.5">
          <button
            type="button"
            onClick={() => toggleSection('brand')}
            className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
          >
            <span className="text-[13.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors">
              {isRtl ? 'الماركة' : 'Brand'}
            </span>
            <ChevronIcon isOpen={openSections.brand} />
          </button>

          {openSections.brand && (
            <div className="mt-3 space-y-2">
              {BRAND_FILTERS.map((brand) => {
                const isChecked = selectedBrands.includes(brand.id)
                return (
                  <label
                    key={brand.id}
                    className="flex items-center justify-between text-[12.5px] text-[#374151] hover:text-[#111827] cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleBrand(brand.id)}
                        className="w-4 h-4 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] cursor-pointer accent-[#dc1414]"
                      />
                      <span>{brand.label}</span>
                    </div>
                    <span className="text-[#9ca3af] text-[11.5px]">
                      ({brand.count})
                    </span>
                  </label>
                )
              })}
            </div>
          )}
        </div>

        {/* SECTION 4: Processor */}
        <div className="py-3.5">
          <button
            type="button"
            onClick={() => toggleSection('processor')}
            className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
          >
            <span className="text-[13.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors">
              {isRtl ? 'المعالج' : 'Processor'}
            </span>
            <ChevronIcon isOpen={openSections.processor} />
          </button>

          {openSections.processor && (
            <div className="mt-3 space-y-2">
              {PROCESSOR_FILTERS.map((proc) => {
                const isChecked = selectedProcessors.includes(proc.id)
                return (
                  <label
                    key={proc.id}
                    className="flex items-center gap-2.5 text-[12.5px] text-[#374151] hover:text-[#111827] cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleProcessor(proc.id)}
                      className="w-4 h-4 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] cursor-pointer accent-[#dc1414]"
                    />
                    <span>{proc.label}</span>
                  </label>
                )
              })}
            </div>
          )}
        </div>

        {/* SECTION 5: RAM */}
        <div className="py-3.5">
          <button
            type="button"
            onClick={() => toggleSection('ram')}
            className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
          >
            <span className="text-[13.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors">
              {isRtl ? 'الذاكرة العشوائية (RAM)' : 'RAM'}
            </span>
            <ChevronIcon isOpen={openSections.ram} />
          </button>

          {openSections.ram && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {RAM_FILTERS.map((ram) => {
                const isChecked = selectedRam.includes(ram)
                return (
                  <label
                    key={ram}
                    className="flex items-center gap-2 text-[12px] text-[#374151] hover:text-[#111827] cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleRam(ram)}
                      className="w-3.5 h-3.5 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] cursor-pointer accent-[#dc1414]"
                    />
                    <span>{ram}</span>
                  </label>
                )
              })}
            </div>
          )}
        </div>

        {/* Collapsible Sections for Storage Type, Screen Size, Operating System */}
        {[
          { key: 'storage', title: 'Storage Type', titleAr: 'سعة ونوع التخزين' },
          { key: 'screen', title: 'Screen Size', titleAr: 'حجم ونوع الشاشة' },
          { key: 'os', title: 'Operating System', titleAr: 'نظام التشغيل' },
        ].map(({ key, title, titleAr }) => {
          return (
            <div key={key} className="py-3.5">
              <button
                type="button"
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between text-left rtl:text-right cursor-pointer group"
              >
                <span className="text-[13.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors">
                  {isRtl ? titleAr : title}
                </span>
                <ChevronIcon isOpen={openSections[key]} />
              </button>

              {openSections[key] && (
                <div className="mt-2.5 text-[12px] text-[#6b7280]">
                  {key === 'storage' && (
                    <div className="space-y-1.5">
                      <div>• 512 GB SSD</div>
                      <div>• 1 TB SSD</div>
                      <div>• 2 TB SSD</div>
                    </div>
                  )}
                  {key === 'screen' && (
                    <div className="space-y-1.5">
                      <div>• 13.6&quot; Liquid Retina</div>
                      <div>• 14.0&quot; Full HD</div>
                      <div>• 15.6&quot; IPS Display</div>
                      <div>• 16.0&quot; QHD+ 165Hz</div>
                    </div>
                  )}
                  {key === 'os' && (
                    <div className="space-y-1.5">
                      <div>• Windows 11 Home / Pro</div>
                      <div>• macOS Sonoma</div>
                      <div>• Ubuntu / Linux Certified</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
