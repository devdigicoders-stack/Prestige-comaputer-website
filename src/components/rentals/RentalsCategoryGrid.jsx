'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getActiveCategories, getCategoryImageUrl } from '../../services/categoryApi'
import { useLanguage } from '../../context/LanguageContext'
import {
  RentalLaptopVisual,
  RentalDesktopVisual,
  RentalWorkstationVisual,
  RentalMonitorVisual,
  RentalAccessoriesVisual,
} from './RentalsCategoryVisuals'

const CATEGORY_TRANSLATIONS = {
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

const VISUAL_MAP = {
  laptops: <RentalLaptopVisual />,
  laptop: <RentalLaptopVisual />,
  desktops: <RentalDesktopVisual />,
  desktop: <RentalDesktopVisual />,
  workstations: <RentalWorkstationVisual />,
  monitors: <RentalMonitorVisual />,
  accessories: <RentalAccessoriesVisual />,
}

export default function RentalsCategoryGrid() {
  const { isRtl } = useLanguage()
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    getActiveCategories()
      .then((liveData) => {
        if (isMounted && Array.isArray(liveData)) {
          // Filter categories suitable for rental
          const rentalCats = liveData.filter(
            (c) => c.type === 'Buy & Rent' || c.type === 'Rent Only' || !c.type
          )
          const mapped = rentalCats.slice(0, 5).map((c) => ({
            id: c.slug || c._id,
            title: c.name.toLowerCase().includes('rent') ? c.name : `${c.name} on Rent`,
            desc: c.description || (c.rentPrice ? `Starts from ${c.rentPrice}` : 'Flexible Plans'),
            href: `/products?category=${c.slug}`,
            image: c.image ? getCategoryImageUrl(c.image) : '',
            visual: VISUAL_MAP[c.iconType || c.slug] || <RentalLaptopVisual />,
          }))
          setCategories(mapped)
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="categories" aria-label="Explore Rental Categories" className="mb-14 sm:mb-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111827] flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
          <span>
            {isRtl ? (
              <>
                استكشف <span className="text-[#dc1414]">تصنيفات التأجير</span>
              </>
            ) : (
              <>
                Explore <span className="text-[#dc1414]">Rental Categories</span>
              </>
            )}
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
        </h2>
      </div>

      {/* 5 Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-2xl border border-[#e5e7eb] p-4 flex flex-col justify-between min-h-[220px]"
            >
              <div className="h-[120px] bg-gray-100 rounded-xl mb-3.5" />
              <div className="space-y-2 mt-auto">
                <div className="h-4 bg-gray-200/70 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            </div>
          ))
        ) : categories.length > 0 ? (
          categories.map((cat) => {
            const catTitle = isRtl ? (CATEGORY_TRANSLATIONS[cat.id] ? `${CATEGORY_TRANSLATIONS[cat.id]} للإيجار` : cat.title) : cat.title
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group bg-white rounded-2xl border border-[#e5e7eb] p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.07)] hover:border-[#dc1414]/40"
              >
                {/* Visual Box */}
                <div className="h-[120px] bg-[#f8fafc] rounded-xl flex items-center justify-center p-2 mb-3.5 transition-transform duration-200 group-hover:scale-103">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={catTitle}
                      className="max-h-[96px] max-w-[120px] object-contain drop-shadow-sm"
                    />
                  ) : (
                    cat.visual
                  )}
                </div>

                {/* Content & Arrow Row */}
                <div className="flex items-end justify-between gap-2 mt-auto">
                  <div>
                    <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors leading-snug">
                      {catTitle}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] text-[#6b7280] leading-snug line-clamp-1">
                      {isRtl ? 'خطط إيجار مرنة' : cat.desc}
                    </p>
                  </div>

                  {/* Circle Arrow Action Button */}
                  <div className="w-8 h-8 rounded-full border border-[#fecaca] bg-[#fff5f5] text-[#dc1414] group-hover:bg-[#dc1414] group-hover:text-white transition-all duration-200 flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })
        ) : null}
      </div>
    </section>
  )
}
