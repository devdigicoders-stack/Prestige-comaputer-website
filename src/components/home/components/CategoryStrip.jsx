'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getActiveCategories, getCategoryImageUrl } from '../../../services/categoryApi'
import { useLanguage } from '../../../context/LanguageContext'

const CATEGORY_TRANSLATIONS = {
  all: 'جميع المعروضات',
  gaming: 'قسم الألعاب (جيمنج)',
  'gaming-pcs': 'قسم الألعاب (جيمنج)',
  business: 'أجهزة الأعمال والشركات',
  'pre-owned': 'مستعمل مضمون (فحص كامل)',
  'genuine-pre-owned': 'مستعمل مضمون (فحص كامل)',
}

function LaptopIllustration() {
  return (
    <svg viewBox="0 0 92 64" className="w-[76px] h-[54px]" aria-hidden="true">
      <defs>
        <linearGradient id="catLaptopScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#450406" />
          <stop offset="55%" stopColor="#b90c10" />
          <stop offset="100%" stopColor="#ef1d22" />
        </linearGradient>
        <linearGradient id="catLaptopBase" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="50%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
      </defs>
      <ellipse cx="46" cy="57" rx="34" ry="3.5" fill="#000000" fillOpacity="0.12" />
      <path d="M24 10 L74 8 L69 42 L20 43 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <path d="M26.5 12.5 L71.2 10.8 L67 39.8 L22.8 40.6 Z" fill="url(#catLaptopScreen)" />
      <path d="M24 38 C36 22, 52 28, 70 13 L67 39.8 L22.8 40.6 Z" fill="#ff3b30" fillOpacity="0.48" />
      <path d="M30 40 C42 29, 55 31, 69 21 L67 39.8 Z" fill="#7f070a" fillOpacity="0.65" />
      <path d="M20 43 L69 42 L80 51.5 L12 53 Z" fill="url(#catLaptopBase)" />
      <path d="M23 44.8 L66.5 44 L73 48.8 L18.5 49.6 Z" fill="#27272a" />
      <path d="M38 50.1 L53 49.8 L55 51.4 L36.5 51.8 Z" fill="#9ca3af" />
      <path d="M12 53 L80 51.5 L79 54 L13 55.2 Z" fill="#6b7280" />
    </svg>
  )
}

function DesktopIllustration() {
  return (
    <svg viewBox="0 0 84 68" className="w-[68px] h-[56px]" aria-hidden="true">
      <defs>
        <linearGradient id="deskFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
        <linearGradient id="deskSide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="50%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
      </defs>
      <ellipse cx="42" cy="61" rx="26" ry="3.5" fill="#000000" fillOpacity="0.14" />
      <path d="M18 14 L43 7 L43 59 L18 53 Z" fill="url(#deskSide)" stroke="#52525b" strokeWidth="0.8" />
      <path d="M22 18 L39 13.5 L39 43 L22 40 Z" fill="#111216" stroke="#3f3f46" strokeWidth="0.7" />
      <rect x="26" y="21" width="9" height="8" rx="1" fill="#27272a" />
      <circle cx="30.5" cy="25" r="2.2" fill="#dc2626" fillOpacity="0.75" />
      <rect x="25" y="32" width="11" height="2.2" rx="0.8" fill="#52525b" />
      <path d="M43 7 L62 11 L62 57 L43 59 Z" fill="url(#deskFront)" stroke="#3f3f46" strokeWidth="0.8" />
      <path d="M51 11 L51 56" stroke="#3f3f46" strokeWidth="1" />
      <path d="M54 12 L54 55" stroke="#27272a" strokeWidth="1" />
      <circle cx="52.5" cy="31" r="1.4" fill="#ef4444" />
      <rect x="46" y="12" width="3" height="1.2" rx="0.4" fill="#71717a" />
      <rect x="46" y="15" width="3" height="1.2" rx="0.4" fill="#71717a" />
      <rect x="21" y="54" width="6" height="3" rx="0.8" fill="#09090b" />
      <rect x="52" y="57" width="7" height="3" rx="0.8" fill="#09090b" />
    </svg>
  )
}

function GamingPcIllustration() {
  return (
    <svg viewBox="0 0 84 68" className="w-[68px] h-[56px]" aria-hidden="true">
      <defs>
        <linearGradient id="rgbFan1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="rgbFan2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="rgbInterior" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <ellipse cx="42" cy="61" rx="26" ry="3.5" fill="#000000" fillOpacity="0.16" />
      <path d="M16 14 L45 7 L45 59 L16 54 Z" fill="#111216" stroke="#3f3f46" strokeWidth="1" />
      <path d="M20 17.5 L42 12 L42 52 L20 48.5 Z" fill="url(#rgbInterior)" />
      <circle cx="26" cy="24" r="4.5" fill="#09090b" stroke="#22d3ee" strokeWidth="1.7" />
      <circle cx="35.5" cy="24" r="3.6" fill="#09090b" stroke="#a855f7" strokeWidth="1.6" />
      <path d="M22 36 L40 34.5 L40 38.5 L22 39.5 Z" fill="#18181b" stroke="#ec4899" strokeWidth="0.9" />
      <path d="M22 44 L40 43.5 L40 46.5 L22 46.5 Z" fill="#18181b" stroke="#ef4444" strokeWidth="0.8" />
      <path d="M45 7 L66 11 L66 56.5 L45 59 Z" fill="#141419" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="55.5" cy="21" r="6.2" fill="#09090b" stroke="url(#rgbFan1)" strokeWidth="2.6" />
      <circle cx="55.5" cy="21" r="1.8" fill="#22d3ee" />
      <circle cx="55.5" cy="34.5" r="6.2" fill="#09090b" stroke="url(#rgbFan2)" strokeWidth="2.6" />
      <circle cx="55.5" cy="34.5" r="1.8" fill="#f97316" />
      <circle cx="55.5" cy="48" r="6.2" fill="#09090b" stroke="url(#rgbFan1)" strokeWidth="2.6" />
      <circle cx="55.5" cy="48" r="1.8" fill="#ec4899" />
    </svg>
  )
}

function MonitorIllustration() {
  return (
    <svg viewBox="0 0 92 64" className="w-[76px] h-[54px]" aria-hidden="true">
      <defs>
        <linearGradient id="monScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="35%" stopColor="#374151" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
      </defs>
      <ellipse cx="46" cy="57.5" rx="22" ry="2.8" fill="#000000" fillOpacity="0.12" />
      <rect x="13" y="8" width="66" height="40" rx="2.5" fill="#18181b" />
      <rect x="15.5" y="10.5" width="61" height="34.5" rx="1" fill="url(#monScreen)" />
      <path d="M15.5 10.5 L48 10.5 L26 45 L15.5 45 Z" fill="#ffffff" fillOpacity="0.14" />
      <path d="M42 48 L50 48 L51.5 55 L40.5 55 Z" fill="#27272a" />
      <rect x="30" y="54.5" width="32" height="3" rx="1.4" fill="#18181b" />
    </svg>
  )
}

function AccessoriesIllustration() {
  return (
    <svg viewBox="0 0 96 64" className="w-[82px] h-[54px]" aria-hidden="true">
      <ellipse cx="48" cy="54" rx="38" ry="3.2" fill="#000000" fillOpacity="0.1" />
      <rect x="6" y="16" width="62" height="34" rx="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      {[20, 26.5, 33, 39.5].map((y, rowIdx) => (
        <g key={y} fill="#3f3f46">
          {[10, 16, 22, 28, 34, 40, 46, 52, 58].map((x, colIdx) => {
            if (rowIdx === 3 && colIdx >= 2 && colIdx <= 5) return null
            return (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width="4.6"
                height="4.6"
                rx="0.8"
                fill={rowIdx === 0 && colIdx === 8 ? '#dc2626' : '#52525b'}
              />
            )
          })}
        </g>
      ))}
      <rect x="22" y="39.5" width="22.6" height="4.6" rx="0.9" fill="#52525b" />
      <rect x="8" y="48.5" width="58" height="1.2" rx="0.6" fill="#dc2626" fillOpacity="0.6" />
      <rect x="74" y="19" width="16" height="30" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <path d="M82 19 L82 31" stroke="#3f3f46" strokeWidth="1" />
      <path d="M74.5 31 L89.5 31" stroke="#27272a" strokeWidth="1" />
      <rect x="80.6" y="23" width="2.8" height="5.5" rx="1.4" fill="#ef4444" />
      <path d="M78 42 Q82 45 86 42" fill="none" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ComponentsIllustration() {
  return (
    <svg viewBox="0 0 96 64" className="w-[82px] h-[54px]" aria-hidden="true">
      <ellipse cx="48" cy="56" rx="34" ry="3.2" fill="#000000" fillOpacity="0.12" />
      <g transform="rotate(-11 48 32)">
        <rect x="22" y="44" width="36" height="4" rx="0.8" fill="#ca8a04" />
        <path d="M26 44 v4 M30 44 v4 M34 44 v4 M42 44 v4 M46 44 v4 M50 44 v4" stroke="#713f12" strokeWidth="1" />
        <path d="M12 16 L16 16 L16 49 L12 49 Z" fill="#9ca3af" />
        <rect x="16" y="16" width="68" height="29" rx="3" fill="#18181b" stroke="#52525b" strokeWidth="1.1" />
        <rect x="19" y="18.5" width="62" height="24" rx="2" fill="#27272a" />
        {[29.5, 50, 70.5].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="30.5" r="8.8" fill="#09090b" stroke="#52525b" strokeWidth="1" />
            <path
              d={`M${cx} 23.5 L${cx + 2} 30.5 L${cx} 37.5 M${cx - 6} 27 L${cx} 30.5 L${cx + 6} 34 M${cx - 6} 34 L${cx} 30.5 L${cx + 6} 27`}
              stroke="#3f3f46"
              strokeWidth="1.3"
            />
            <circle cx={cx} cy="30.5" r="2.6" fill="#dc2626" />
            <circle cx={cx} cy="30.5" r="1" fill="#18181b" />
          </g>
        ))}
      </g>
    </svg>
  )
}

function SoftwareIllustration() {
  return (
    <svg viewBox="0 0 76 68" className="w-[64px] h-[56px]" aria-hidden="true">
      <defs>
        <linearGradient id="swFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="55%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="swSpine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
      </defs>
      <ellipse cx="39" cy="60" rx="20" ry="3.2" fill="#000000" fillOpacity="0.12" />
      <path d="M19 13 L27 9 L27 57 L19 53 Z" fill="url(#swSpine)" />
      <path d="M27 9 L57 12.5 L57 54.5 L27 57 Z" fill="url(#swFront)" />
      <path d="M27 9 L57 12.5 L57 25 L27 29 Z" fill="#ffffff" fillOpacity="0.14" />
      <g fill="#ffffff">
        <rect x="36" y="24" width="6.5" height="6.5" rx="0.6" />
        <rect x="44" y="24.4" width="6.5" height="6.5" rx="0.6" />
        <rect x="36" y="32" width="6.5" height="6.5" rx="0.6" />
        <rect x="44" y="32.4" width="6.5" height="6.5" rx="0.6" />
      </g>
      <rect x="36" y="42.5" width="14.5" height="2" rx="1" fill="#ffffff" fillOpacity="0.75" />
    </svg>
  )
}

function BusinessIllustration() {
  return (
    <svg viewBox="0 0 80 64" className="w-[68px] h-[54px]" aria-hidden="true">
      <defs>
        <linearGradient id="briefBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="50%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
      </defs>
      <ellipse cx="40" cy="57" rx="24" ry="3" fill="#000000" fillOpacity="0.12" />
      <path
        d="M31 19 V14.5 C31 12 33 10.5 35.5 10.5 H44.5 C47 10.5 49 12 49 14.5 V19"
        fill="none"
        stroke="#18181b"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="14" y="18" width="52" height="36" rx="5.5" fill="url(#briefBody)" />
      <path d="M14 23.5 C14 20.5 16.5 18 19.5 18 H60.5 C63.5 18 66 20.5 66 23.5 V31 C66 34 62 36 40 36 C18 36 14 34 14 31 Z" fill="#27272a" />
      <rect x="35.5" y="31.5" width="9" height="8.5" rx="2.2" fill="#e5e7eb" />
      <rect x="37.8" y="33.8" width="4.4" height="4" rx="1" fill="#27272a" />
    </svg>
  )
}

function EducationIllustration() {
  return (
    <svg viewBox="0 0 88 64" className="w-[74px] h-[54px]" aria-hidden="true">
      <defs>
        <linearGradient id="capTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="100%" stopColor="#111215" />
        </linearGradient>
      </defs>
      <ellipse cx="44" cy="56" rx="22" ry="3" fill="#000000" fillOpacity="0.12" />
      <path d="M26 30 V43 C26 48.5 34 52 44 52 C54 52 62 48.5 62 43 V30 Z" fill="#18181b" />
      <path d="M26 35 C34 39.5 54 39.5 62 35" fill="none" stroke="#3f3f46" strokeWidth="1" />
      <path d="M44 12 L78 26 L44 39.5 L10 26 Z" fill="url(#capTop)" stroke="#52525b" strokeWidth="0.8" />
      <circle cx="44" cy="25" r="2.2" fill="#52525b" />
      <path d="M44 25 L20 31.5 L19 46" fill="none" stroke="#92623a" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.8 45.5 L21.2 45.5 L22 52.5 L16 52.5 Z" fill="#b47a44" />
    </svg>
  )
}

function GridFourIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#d91616]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="2.5" />
      <rect x="18" y="4" width="10" height="10" rx="2.5" />
      <rect x="4" y="18" width="10" height="10" rx="2.5" />
      <rect x="18" y="18" width="10" height="10" rx="2.5" />
    </svg>
  )
}

const ILLUSTRATION_MAP = {
  laptop: LaptopIllustration,
  laptops: LaptopIllustration,
  desktop: DesktopIllustration,
  desktops: DesktopIllustration,
  gaming: GamingPcIllustration,
  'gaming-pcs': GamingPcIllustration,
  'gaming-laptops': GamingPcIllustration,
  monitor: MonitorIllustration,
  monitors: MonitorIllustration,
  accessories: AccessoriesIllustration,
  components: ComponentsIllustration,
  software: SoftwareIllustration,
  business: BusinessIllustration,
  education: EducationIllustration,
}

export default function CategoryStrip() {
  const { isRtl } = useLanguage()
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch dynamic categories from backend API
  useEffect(() => {
    let isMounted = true

    getActiveCategories()
      .then((data) => {
        if (isMounted && data && Array.isArray(data)) {
          // Take top 9 active categories for the strip
          setCategories(data.slice(0, 9))
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
    <section
      className="w-full bg-white border-b border-[#eceff3] py-4 sm:py-5"
      aria-label="Shop by Category"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {isLoading ? (
            Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-[#f9fafb] rounded-xl border border-[#eceff4] p-3 flex flex-col items-center justify-between min-h-[108px]"
              >
                <div className="w-12 h-10 bg-gray-200/60 rounded-lg mt-1" />
                <div className="w-16 h-3 bg-gray-200/60 rounded-full mb-1" />
              </div>
            ))
          ) : (
            categories.map((cat) => {
              const id = cat.slug || cat._id
              const label = isRtl ? (CATEGORY_TRANSLATIONS[cat.slug] || cat.nameAr || cat.name || cat.label) : (cat.name || cat.label)
              const iconKey = (cat.iconType || cat.slug || 'laptop').toLowerCase()
              const Illustration = ILLUSTRATION_MAP[iconKey] || LaptopIllustration
              const imageUrl = cat.image ? getCategoryImageUrl(cat.image) : ''

              return (
                <Link
                  key={id}
                  href={`/products?category=${id}`}
                  className="group bg-white rounded-xl border border-[#eceff4] shadow-[0_2px_10px_rgba(16,24,40,0.04)] hover:shadow-[0_8px_18px_rgba(16,24,40,0.08)] hover:border-[#dc1414]/35 hover:-translate-y-0.5 transition-all duration-200 px-2 py-3 flex flex-col items-center justify-between text-center min-h-[108px] cursor-pointer"
                >
                  <div className="h-[58px] w-full flex items-center justify-center group-hover:scale-[1.06] transition-transform duration-200">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={label}
                        className="max-h-[52px] max-w-[70px] object-contain drop-shadow-xs"
                      />
                    ) : (
                      <Illustration />
                    )}
                  </div>
                  <span className="mt-1.5 text-[11.5px] xl:text-[12px] font-semibold text-[#1f2937] group-hover:text-[#dc1414] leading-tight transition-colors line-clamp-1">
                    {label}
                  </span>
                </Link>
              )
            })
          )}

          {/* 10th Card: View All Categories */}
          <Link
            href="/categories"
            className="group bg-[#fdecec] hover:bg-[#fbdada] rounded-xl border border-[#f8d0d0] shadow-[0_2px_10px_rgba(220,20,20,0.06)] hover:shadow-[0_8px_18px_rgba(220,20,20,0.12)] hover:-translate-y-0.5 transition-all duration-200 px-2 py-3 flex flex-col items-center justify-center text-center min-h-[108px] cursor-pointer"
          >
            <div className="group-hover:scale-105 transition-transform duration-200">
              <GridFourIcon />
            </div>
            <span className="mt-2 text-[11.5px] xl:text-[12px] font-semibold text-[#c81010] leading-snug">
              {isRtl ? (
                <>
                  عرض جميع
                  <br />
                  <span className="inline-flex items-center gap-1">
                    التصنيفات
                    <svg
                      viewBox="0 0 16 16"
                      className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10" />
                      <path d="m9 4 4 4-4 4" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  View All
                  <br />
                  <span className="inline-flex items-center gap-1">
                    Categories
                    <svg
                      viewBox="0 0 16 16"
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10" />
                      <path d="m9 4 4 4-4 4" />
                    </svg>
                  </span>
                </>
              )}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
