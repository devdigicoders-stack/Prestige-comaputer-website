'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'

const HERO_SLIDES = [
  {
    id: 1,
    image: '/banner/1.png',
    titleLine1: 'Gaming',
    titleLine1Ar: 'أجهزة',
    titleLine2: 'Collection',
    titleLine2Ar: 'الألعاب',
    subtitle: 'Performance, power, and immersive play.',
    subtitleAr: 'أداء استثنائي، قوة خارقة وتجربة ألعاب غامرة.',
    ctaText: 'View Flyer',
    ctaTextAr: 'تصفح النشرة',
    ctaLink: '/products?category=gaming',
  },
  {
    id: 2,
    image: '/banner/2.png',
    titleLine1: 'Business',
    titleLine1Ar: 'حلول',
    titleLine2: 'Collection',
    titleLine2Ar: 'الشركات',
    subtitle: 'Engineered for enterprise power, productivity, and security.',
    subtitleAr: 'حلول مؤسسية متكاملة، موثوقية عالية وضمان رسمي بالدوحة.',
    ctaText: 'View Flyer',
    ctaTextAr: 'تصفح النشرة',
    ctaLink: '/products?category=business',
  },
  {
    id: 3,
    image: '/banner/3.png',
    titleLine1: 'Pre-Owned',
    titleLine1Ar: 'أجهزة',
    titleLine2: 'Collection',
    titleLine2Ar: 'المستعملة',
    subtitle: 'Certified Grade A+, 1-Year store warranty, save up to 60%.',
    subtitleAr: 'فحص فني شامل، جودة معتمدة Grade A+ وضمان لمدة سنة كاملة.',
    ctaText: 'View Flyer',
    ctaTextAr: 'تصفح النشرة',
    ctaLink: '/products?category=pre-owned',
  },
]

export default function HeroBanner() {
  const { isArabic, isRtl } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play slider every 6 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const slide = HERO_SLIDES[currentSlide]

  return (
    <section className="bg-white py-3 sm:py-5 border-b border-gray-200">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* Full-bleed Hero Card matching reference screenshot */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '440px',
            height: 'clamp(400px, 46vw, 530px)',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#0a0a0c',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.45)',
          }}
          className="select-none group"
        >
          {/* Background Images for all slides with smooth cross-fade */}
          {HERO_SLIDES.map((s, idx) => {
            const isActive = idx === currentSlide
            return (
              <div
                key={s.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 2 : 1,
                  transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <img
                  src={s.image}
                  alt={`${s.titleLine1} ${s.titleLine2}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}

          {/* Deep dark gradient scrim for crystal clear readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: isRtl
                ? 'linear-gradient(to left, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.12) 85%, transparent 100%)'
                : 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.12) 85%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 45%, rgba(0,0,0,0.35) 100%)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />

          {/* Top-Left: Small Brand Logo */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: isRtl ? 'auto' : 'clamp(24px, 4vw, 44px)',
              right: isRtl ? 'clamp(24px, 4vw, 44px)' : 'auto',
              zIndex: 25,
            }}
          >
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <img
                src="/logo-white.png"
                alt="Prestige Computers — A Tiny City Full of Amazing Computers"
                style={{
                  height: 'clamp(32px, 3.5vw, 44px)',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.7))',
                }}
                width={150}
                height={44}
              />
            </Link>
          </div>

          {/* Left Column: Big Bold Typography & Subtitle (Pushed safely past the left arrow) */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: isRtl ? 'auto' : 'clamp(72px, 8vw, 110px)',
              right: isRtl ? 'clamp(72px, 8vw, 110px)' : 'auto',
              maxWidth: 'min(580px, 78%)',
              zIndex: 25,
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'none',
            }}
          >
            {/* Line 1: White */}
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(38px, 5.4vw, 76px)',
                fontWeight: 900,
                lineHeight: 0.96,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                textTransform: 'capitalize',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.85), 0 2px 8px rgba(0,0,0,0.9)',
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {isArabic ? slide.titleLine1Ar : slide.titleLine1}
            </span>

            {/* Line 2: Vibrant Prestige Red */}
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(38px, 5.4vw, 76px)',
                fontWeight: 900,
                lineHeight: 0.96,
                letterSpacing: '-0.025em',
                color: '#e11212',
                textTransform: 'capitalize',
                marginTop: '4px',
                textShadow:
                  '0 4px 28px rgba(225, 18, 18, 0.65), 0 2px 10px rgba(0, 0, 0, 0.8)',
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {isArabic ? slide.titleLine2Ar : slide.titleLine2}
            </span>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 500,
                lineHeight: 1.4,
                color: 'rgba(243, 244, 246, 0.92)',
                marginTop: '16px',
                maxWidth: '460px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              {isArabic ? slide.subtitleAr : slide.subtitle}
            </p>
          </div>

          {/* Bottom-Right: Red 'View Flyer' Button */}
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(20px, 3.5vw, 36px)',
              right: isRtl ? 'auto' : 'clamp(20px, 4vw, 44px)',
              left: isRtl ? 'clamp(20px, 4vw, 44px)' : 'auto',
              zIndex: 30,
            }}
          >
            <Link
              href={slide.ctaLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: 'clamp(10px, 1.4vw, 14px) clamp(22px, 2.5vw, 32px)',
                backgroundColor: '#dc1414',
                color: '#ffffff',
                fontSize: 'clamp(13px, 1.2vw, 15px)',
                fontWeight: 800,
                letterSpacing: '0.01em',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(220, 20, 20, 0.55)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              className="hover:scale-105 active:scale-95 group/btn hover:bg-[#b91010]"
            >
              <span>{isArabic ? slide.ctaTextAr : slide.ctaText}</span>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '18px',
                  lineHeight: 1,
                  transform: isRtl ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                }}
                className="group-hover/btn:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Left Arrow Navigation Circle */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '16px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer',
              zIndex: 35,
              transition: 'all 0.2s ease',
            }}
            className="hover:scale-110 active:scale-95 hover:bg-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                width: '18px',
                height: '18px',
                color: '#111827',
                transform: isRtl ? 'rotate(180deg)' : 'none',
              }}
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Navigation Circle */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '16px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer',
              zIndex: 35,
              transition: 'all 0.2s ease',
            }}
            className="hover:scale-110 active:scale-95 hover:bg-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                width: '18px',
                height: '18px',
                color: '#111827',
                transform: isRtl ? 'rotate(180deg)' : 'none',
              }}
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Bottom Center Slide Dots Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 35,
            }}
          >
            {HERO_SLIDES.map((s, idx) => {
              const isActive = currentSlide === idx
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  style={{
                    height: '8px',
                    width: isActive ? '30px' : '8px',
                    borderRadius: '9999px',
                    backgroundColor: isActive ? '#dc1414' : 'rgba(255, 255, 255, 0.55)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 2px 8px rgba(220, 20, 20, 0.6)' : 'none',
                    padding: 0,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

