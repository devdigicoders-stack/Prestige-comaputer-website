'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'

const HERO_SLIDES = [
  {
    id: 1,
    image: '/banner/1.png',
    eyebrow: 'NEXT-GEN COMPUTING SOLUTIONS',
    eyebrowAr: 'حلول الحوسبة المتطورة من الجيل الجديد',
    line1: 'Buy or Rent',
    line1Ar: 'شراء أو استئجار',
    line2: 'Computers for',
    line2Ar: 'أجهزة الكمبيوتر لـ',
    highlight: 'Work, Study & Gaming',
    highlightAr: 'العمل والدراسة والألعاب',
    description:
      'Latest Laptops, Desktops, Gaming PCs and Accessories with Flexible Buying & Rental Plans.',
    descriptionAr:
      'أحدث أجهزة الكمبيوتر المحمولة والمكتبية وتجميعات الألعاب وملحقاتها مع خطط شراء وإيجار مرنة في قطر.',
  },
  {
    id: 2,
    image: '/banner/2.png',
    eyebrow: 'HIGH-PERFORMANCE GAMING RIGS',
    eyebrowAr: 'تجميعات ألعاب احترافية فائقة الأداء',
    line1: 'Custom RTX PCs',
    line1Ar: 'تجميعات RTX مخصصة',
    line2: '& Laptops for',
    line2Ar: 'ولابتوبات قوية لـ',
    highlight: 'Pro Creators & Gamers',
    highlightAr: 'المحترفين وصناع المحتوى',
    description:
      'Experience peak FPS and workstation power backed by official warranty and easy upgrade plans.',
    descriptionAr:
      'أداء استثنائي ومحطات عمل احترافية مدعومة بضمان الشركة المصنعة الرسمي وإمكانية الترقية السهلة.',
  },
  {
    id: 3,
    image: '/banner/3.png',
    eyebrow: 'SMART FLEXIBLE RENTALS',
    eyebrowAr: 'خدمات الإيجار الذكية والمرنة',
    line1: 'Upgrade Anytime',
    line1Ar: 'قم بالترقية في أي وقت',
    line2: 'With Affordable',
    line2Ar: 'بأسعار مناسبة مع',
    highlight: 'Daily & Monthly Plans',
    highlightAr: 'خطط يومية وشهرية',
    description:
      'Rent top-tier business laptops, gaming desktops and accessories with fast doorstep delivery.',
    descriptionAr:
      'استأجر أفضل أجهزة الكمبيوتر للشركات والمؤسسات والطلاب مع توصيل سريع وضمان استبدال فوري.',
  },
]

const HERO_HIGHLIGHTS = [
  {
    id: 'buy-rent',
    title: 'Buy & Rent',
    titleAr: 'شراء واستئجار',
    subtitle: 'Flexible Options',
    subtitleAr: 'خيارات مرنة ومريحة',
    icon: 'laptop',
  },
  {
    id: 'plans',
    title: 'Daily, Weekly &',
    titleAr: 'خطط يومية وأسبوعية',
    subtitle: 'Monthly Plans',
    subtitleAr: 'وخطط شهرية متجددة',
    icon: 'calendar',
  },
  {
    id: 'warranty',
    title: 'Genuine Products',
    titleAr: 'منتجات أصلية 100%',
    subtitle: 'With Official Warranty',
    subtitleAr: 'مع الضمان المعتمد',
    icon: 'shield',
  },
  {
    id: 'support',
    title: '24/7 Expert Support',
    titleAr: 'دعم فني متخصص',
    subtitle: 'Always Here to Help',
    subtitleAr: 'متواجدون لمساعدتك',
    icon: 'headset',
  },
]

function CartIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
      <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CalendarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.3" />
      <path d="M3.5 9.8h17" />
      <path d="M8 3.2v3.2" />
      <path d="M16 3.2v3.2" />
      <circle cx="8.2" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8.2" cy="17" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function ChevronLeftIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 6-6 6 6 6" />
    </svg>
  )
}

function ChevronRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

function HighlightIcon({ type }) {
  if (type === 'laptop') {
    return (
      <svg className="w-7 h-7 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="1.8" />
        <path d="M2 18.5h20" />
      </svg>
    )
  }
  if (type === 'calendar') {
    return <CalendarIcon className="w-7 h-7 text-white shrink-0" />
  }
  if (type === 'shield') {
    return (
      <svg className="w-7 h-7 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 5 6v6c0 4.5 3 8.2 7 9.5 4-1.3 7-5 7-9.5V6l-7-3Z" />
        <path d="m9 12.2 2 2 4-4.2" />
      </svg>
    )
  }
  return (
    <svg className="w-7 h-7 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="3.2" height="5.5" rx="1.4" />
      <rect x="17.8" y="13" width="3.2" height="5.5" rx="1.4" />
      <path d="M19.4 18.5A3 3 0 0 1 16.5 21H13" />
    </svg>
  )
}

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { isRtl, t } = useLanguage()

  useEffect(() => {
    if (isPaused) return undefined
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [isPaused])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const currentSlide = HERO_SLIDES[activeIndex]
  const eyebrow = isRtl && currentSlide.eyebrowAr ? currentSlide.eyebrowAr : currentSlide.eyebrow
  const line1 = isRtl && currentSlide.line1Ar ? currentSlide.line1Ar : currentSlide.line1
  const line2 = isRtl && currentSlide.line2Ar ? currentSlide.line2Ar : currentSlide.line2
  const highlight = isRtl && currentSlide.highlightAr ? currentSlide.highlightAr : currentSlide.highlight
  const description = isRtl && currentSlide.descriptionAr ? currentSlide.descriptionAr : currentSlide.description

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#060608] text-white overflow-hidden select-none"
      aria-label="Featured Computing Solutions"
    >
      {/* Background Banner Slides (public/banner/1.png, 2.png, 3.png) */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.highlight}
            className={[
              'absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out pointer-events-none',
              idx === activeIndex ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        ))}

        {/* Readability Overlays (keeps left headline & right cards crisp while center PC/Laptop glows brightly) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/30 lg:from-black/80 lg:via-black/20 lg:to-black/55 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
      </div>

      {/* Left Carousel Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous banner slide"
        className="hidden sm:flex absolute left-3 xl:left-5 rtl:left-auto rtl:right-3 xl:rtl:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white/95 hover:bg-white text-[#111827] shadow-[0_4px_14px_rgba(0,0,0,0.45)] items-center justify-center transition-all hover:scale-105 cursor-pointer"
      >
        <ChevronLeftIcon className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
      </button>

      {/* Right Carousel Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next banner slide"
        className="hidden sm:flex absolute right-3 xl:right-5 rtl:right-auto rtl:left-3 xl:rtl:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white/95 hover:bg-white text-[#111827] shadow-[0_4px_14px_rgba(0,0,0,0.45)] items-center justify-center transition-all hover:scale-105 cursor-pointer"
      >
        <ChevronRightIcon className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-14 lg:px-16 py-9 sm:py-11 lg:py-0 lg:min-h-[430px] xl:min-h-[470px] flex flex-col lg:flex-row lg:items-center justify-between gap-7 lg:gap-6">
        {/* LEFT COLUMN: Headline, Subtitle, CTAs & Dots */}
        <div className="max-w-[470px] lg:max-w-[440px] xl:max-w-[480px] lg:py-8 text-left rtl:text-right">
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e5e7eb]">
            {eyebrow}
          </p>

          <h1 className="mt-2.5 text-[28px] sm:text-[36px] xl:text-[42px] font-bold italic leading-[1.12] tracking-[-0.02em] text-white">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
            <span className="block text-[#f01919] drop-shadow-[0_2px_12px_rgba(240,25,25,0.3)]">
              {highlight}
            </span>
          </h1>

          <p className="mt-3.5 text-[13px] sm:text-[14px] font-normal text-[#d1d5db] leading-relaxed max-w-[390px]">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13.5px] font-medium shadow-[0_6px_18px_rgba(220,16,16,0.45)] transition-all cursor-pointer"
            >
              <CartIcon className="w-[17px] h-[17px]" />
              <span>{t('shopNow')}</span>
              <ArrowRightIcon className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              href="/rentals"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-white hover:bg-[#f3f4f6] active:scale-[0.98] text-[#111827] text-[13.5px] font-medium shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-all cursor-pointer"
            >
              <CalendarIcon className="w-[17px] h-[17px] text-[#111827]" />
              <span>{t('rentNow')}</span>
              <ArrowRightIcon className={`w-4 h-4 text-[#111827] ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          {/* Slide Dots + Mobile Arrows */}
          <div className="mt-6 flex items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Banner slides">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={[
                      'h-2.5 rounded-full transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'w-2.5 bg-[#e11212] ring-2 ring-[#e11212]/40'
                        : 'w-2.5 bg-white/85 hover:bg-white',
                    ].join(' ')}
                  />
                )
              })}
            </div>

            {/* Compact Arrows on Mobile */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-full bg-white/90 text-[#111827] flex items-center justify-center cursor-pointer"
              >
                <ChevronLeftIcon className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-7 h-7 rounded-full bg-white/90 text-[#111827] flex items-center justify-center cursor-pointer"
              >
                <ChevronRightIcon className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 4 Glassmorphic Crimson Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 w-full lg:w-[228px] xl:w-[244px] shrink-0 lg:py-6">
          {HERO_HIGHLIGHTS.map((card) => {
            const cardTitle = isRtl && card.titleAr ? card.titleAr : card.title
            const cardSubtitle = isRtl && card.subtitleAr ? card.subtitleAr : card.subtitle
            return (
              <div
                key={card.id}
                className="rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-[#6b090c]/75 via-[#430608]/72 to-[#1f0406]/72 backdrop-blur-md border border-[#ef2323]/30 hover:border-[#ef2323]/60 shadow-[0_6px_18px_rgba(0,0,0,0.35)] flex items-center gap-3 transition-all text-left rtl:text-right"
              >
                <HighlightIcon type={card.icon} />
                <div className="min-w-0 leading-tight">
                  <p className="text-[12.5px] sm:text-[13px] font-semibold text-white truncate">
                    {cardTitle}
                  </p>
                  <p className="text-[11px] sm:text-[11.5px] text-[#e5e7eb]/85 mt-0.5 truncate">
                    {cardSubtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
