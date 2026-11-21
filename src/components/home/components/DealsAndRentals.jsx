'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getRentalPlans } from '../../../services/rentalApi'
import { useLanguage } from '../../../context/LanguageContext'

function getIconVariant(months) {
  if (months <= 1) return 'daily'
  if (months <= 3) return 'weekly'
  return 'monthly'
}

const RENTAL_PERKS = [
  { en: 'No Long-Term Commitment', ar: 'بدون التزامات طويلة الأجل' },
  { en: 'Upgrade Anytime', ar: 'إمكانية الترقية في أي وقت' },
  { en: 'Ideal for Business & Students', ar: 'مثالي للشركات والطلاب' },
]

// Initial countdown matching 02 Days : 14 Hours : 36 Mins : 20 Secs
const INITIAL_SECONDS = 2 * 86400 + 14 * 3600 + 36 * 60 + 20

function BoltIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 2 4.5 13.5h6.5L9.8 22l9.7-11.5h-6.6L13.5 2Z" />
    </svg>
  )
}

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

function CheckIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5 6.3 11.8 13 4.8" />
    </svg>
  )
}

function PlanCalendarIcon({ variant, active }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`w-8 h-8 ${active ? 'text-white' : 'text-[#dc1414]'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4.5" y="6.5" width="23" height="20.5" rx="3" />
      <path d="M4.5 12.5h23" />
      <path d="M10.5 4v4.5" />
      <path d="M21.5 4v4.5" />
      {variant === 'daily' && (
        <path d="M16 16.5v6m-1.8-4.5 1.8-1.5" strokeWidth="2.1" />
      )}
      {variant === 'weekly' && (
        <>
          <circle cx="11" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="21" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
          <path d="M10.5 22h11" strokeWidth="1.9" />
        </>
      )}
      {variant === 'monthly' && (
        <>
          <circle cx="11" cy="17.2" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="17.2" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="21" cy="17.2" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="11" cy="22" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="22" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="21" cy="22" r="1.2" fill="currentColor" stroke="none" />
        </>
      )}
    </svg>
  )
}

function RentalLaptopIllustration() {
  return (
    <svg
      viewBox="0 0 210 124"
      className="w-full max-w-[190px] h-auto drop-shadow-[0_8px_12px_rgba(15,23,42,0.14)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rentLapBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b0305" />
          <stop offset="55%" stopColor="#83070c" />
          <stop offset="100%" stopColor="#260306" />
        </linearGradient>
        <linearGradient id="rentLapWave" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef1919" />
          <stop offset="55%" stopColor="#ff453a" />
          <stop offset="100%" stopColor="#990a0d" />
        </linearGradient>
        <linearGradient id="rentLapSilver" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="25%" stopColor="#e5e7eb" />
          <stop offset="50%" stopColor="#f3f4f6" />
          <stop offset="75%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>
      <ellipse cx="105" cy="116" rx="86" ry="5" fill="#0f172a" fillOpacity="0.14" />
      <rect x="33" y="8" width="144" height="90" rx="5" fill="#18181b" stroke="#52525b" strokeWidth="1.2" />
      <clipPath id="rentLapClip">
        <rect x="37.5" y="12.5" width="135" height="80" rx="1.8" />
      </clipPath>
      <g clipPath="url(#rentLapClip)">
        <rect x="37.5" y="12.5" width="135" height="80" fill="url(#rentLapBg)" />
        <path
          d="M35 92 C66 52, 102 64, 174 14 L174 52 C126 68, 92 78, 52 94 Z"
          fill="url(#rentLapWave)"
          fillOpacity="0.9"
        />
        <path
          d="M44 94 C84 68, 128 72, 174 42 L174 94 Z"
          fill="#5e0508"
          fillOpacity="0.72"
        />
        <path d="M37.5 12.5 L98 12.5 L62 92.5 L37.5 92.5 Z" fill="#ffffff" fillOpacity="0.06" />
      </g>
      <circle cx="105" cy="10.2" r="1.1" fill="#52525b" />
      <path d="M33 98 L177 98 L195 109.5 L15 109.5 Z" fill="url(#rentLapSilver)" />
      <path d="M39 99.5 L171 99.5 L179 105 L31 105 Z" fill="#18181b" fillOpacity="0.86" />
      <path d="M15 109.5 L195 109.5 C194 112.2 191 113.5 187 113.5 L23 113.5 C19 113.5 16 112.2 15 109.5 Z" fill="#9ca3af" />
      <rect x="93" y="109.5" width="24" height="2" rx="1" fill="#6b7280" />
    </svg>
  )
}

export default function DealsAndRentals() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [remainingSeconds, setRemainingSeconds] = useState(INITIAL_SECONDS)
  const [rentalPlans, setRentalPlans] = useState([])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : INITIAL_SECONDS))
    }, 1000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    let cancelled = false
    getRentalPlans()
      .then((plans) => {
        if (cancelled) return
        const active = plans
          .filter((p) => p.isActive !== false)
          .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
          .slice(0, 3)
        setRentalPlans(active)
        // Auto-select popular plan, or first
        const popular = active.find((p) => p.isPopular)
        setSelectedPlan((popular || active[0])?._id || null)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  const { isRtl, t } = useLanguage()

  const days = Math.floor(remainingSeconds / 86400)
  const hours = Math.floor((remainingSeconds % 86400) / 3600)
  const mins = Math.floor((remainingSeconds % 3600) / 60)
  const secs = remainingSeconds % 60

  const countdownUnits = [
    { label: t('days'), value: String(days).padStart(2, '0') },
    { label: t('hours'), value: String(hours).padStart(2, '0') },
    { label: t('mins'), value: String(mins).padStart(2, '0') },
    { label: t('secs'), value: String(secs).padStart(2, '0') },
  ]

  return (
    <section
      id="rental-plans"
      className="w-full bg-white py-5 sm:py-6"
      aria-label="Deals of the Week and Popular Rental Plans"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* LEFT PANEL: Deals of the Week (uses public/banner/1.png) */}
          <div
            id="deals"
            className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-[#0b0406] min-h-[255px] sm:min-h-[268px] flex items-center shadow-[0_8px_24px_rgba(16,24,40,0.12)] group"
          >
            <img
              src="/banner/1.png"
              alt="Deals of the Week — Gaming PC and Laptop"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-[1.03] transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0305]/95 via-[#180407]/75 sm:via-[#180407]/55 to-transparent pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-7 py-6 w-full max-w-[310px] text-left rtl:text-right">
              <h2 className="inline-flex items-center gap-1.5 text-[22px] sm:text-[25px] font-bold text-white leading-tight tracking-[-0.02em]">
                <BoltIcon className="w-5 h-5 text-[#ef1a1a] shrink-0" />
                <span>{t('dealsOfTheWeek')}</span>
              </h2>
              <p className="mt-1 text-[13px] font-medium text-[#e5e7eb]">
                {t('exclusiveOffers')}
              </p>

              <p className="mt-3.5 text-[12px] font-medium text-[#d1d5db]">
                {t('offerEndsIn')}
              </p>

              {/* Live Countdown Tiles */}
              <div className="mt-2 grid grid-cols-4 gap-2 max-w-[248px]">
                {countdownUnits.map((unit) => (
                  <div
                    key={unit.label}
                    className="rounded-lg bg-gradient-to-b from-[#d91414] to-[#990707] border border-[#ff5c5c]/25 py-2 px-1 text-center shadow-[0_4px_12px_rgba(220,16,16,0.35)]"
                  >
                    <p className="text-[17px] sm:text-[18px] font-bold text-white leading-none tabular-nums">
                      {unit.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-white/90 leading-none">
                      {unit.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13px] font-semibold shadow-[0_6px_16px_rgba(220,16,16,0.4)] transition-all cursor-pointer"
              >
                <span>{t('shopDeals')}</span>
                <ArrowRightIcon className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* RIGHT PANEL: Popular Rental Plans */}
          <div className="lg:col-span-7 rounded-2xl bg-[#f9fafb] border border-[#eceff4] px-5 sm:px-6 py-5 shadow-[0_2px_12px_rgba(16,24,40,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-5 text-left rtl:text-right">
            {/* Heading + 3 Plan Cards */}
            <div className="flex-1 min-w-0">
              <h2 className="text-[19px] sm:text-[21px] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
                {isRtl ? 'خطط الإيجار الأكثر طلباً' : 'Popular Rental Plans'}
              </h2>
              <p className="mt-0.5 text-[12.5px] text-[#525866]">
                {isRtl ? 'اختر الخطة المناسبة لاحتياجاتك' : 'Choose a plan that fits your needs'}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
                {rentalPlans.length === 0 ? (
                  // Skeleton while loading
                  [0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl px-2.5 py-4 flex flex-col items-center justify-center border border-[#e5e7eb] bg-[#f3f4f6] animate-pulse"
                    >
                      <div className="w-8 h-8 bg-[#d1d5db] rounded-full mb-2" />
                      <div className="h-3 w-16 bg-[#d1d5db] rounded mb-1.5" />
                      <div className="h-2.5 w-10 bg-[#e5e7eb] rounded" />
                    </div>
                  ))
                ) : (
                  rentalPlans.map((plan) => {
                    const isActive = selectedPlan === plan._id
                    const iconVariant = getIconVariant(plan.months)
                    const priceLabel = plan.discount > 0
                      ? `-${plan.discount}% ${isRtl ? 'خصم' : 'OFF'}`
                      : (isRtl ? 'السعر الأساسي' : plan.tag || 'Base Rate')
                    const monthsLabel = isRtl
                      ? (plan.months === 1 ? 'شهر واحد' : `${plan.months} أشهر`)
                      : (plan.months === 1 ? '1 Month' : `${plan.months} Months`)
                    return (
                      <Link
                        key={plan._id}
                        href="/rentals"
                        onClick={() => setSelectedPlan(plan._id)}
                        className={[
                          'rounded-xl px-2.5 sm:px-3.5 py-4 text-center flex flex-col items-center justify-center transition-all duration-200 cursor-pointer border no-underline',
                          isActive
                            ? 'bg-gradient-to-b from-[#e31414] to-[#b50808] text-white border-[#c80c0c] shadow-[0_10px_22px_-4px_rgba(220,16,16,0.48)] -translate-y-0.5'
                            : 'bg-white text-[#111827] border-[#e5e7eb] hover:border-[#dc1414]/45 shadow-[0_2px_8px_rgba(16,24,40,0.04)]',
                        ].join(' ')}
                      >
                        <PlanCalendarIcon variant={iconVariant} active={isActive} />
                        <p
                          className={`mt-2.5 text-[12.5px] sm:text-[13.5px] font-bold leading-tight ${
                            isActive ? 'text-white' : 'text-[#111827]'
                          }`}
                        >
                          {plan.label || monthsLabel}
                        </p>
                        <p
                          className={`mt-1 text-[10.5px] font-medium ${
                            isActive ? 'text-white/80' : 'text-[#6b7280]'
                          }`}
                        >
                          {priceLabel}
                        </p>
                        <p
                          className={`mt-0.5 leading-tight ${
                            isActive ? 'text-white' : 'text-[#c90b0b]'
                          }`}
                        >
                          <span className="text-[14px] sm:text-[15px] font-bold">
                            {monthsLabel}
                          </span>
                        </p>
                      </Link>
                    )
                  })
                )}
              </div>
            </div>

            {/* Laptop Visual + 3 Perks */}
            <div className="md:w-[195px] xl:w-[215px] shrink-0 flex flex-col items-center md:items-start justify-center pt-1 md:pt-0 border-t md:border-t-0 border-[#e5e7eb]">
              <RentalLaptopIllustration />
              <ul className="mt-3.5 space-y-1.5 text-[12px] font-medium text-[#1f2937]">
                {RENTAL_PERKS.map((perk) => (
                  <li key={perk.en} className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-[#dc1414] shrink-0" />
                    <span>{isRtl ? perk.ar : perk.en}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/rentals"
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#dc1414] hover:underline"
              >
                <span>{isRtl ? 'عرض جميع الخطط' : 'View All Plans'}</span>
                <ArrowRightIcon className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
