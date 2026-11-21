'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function ProductsHeroBanner() {
  const { isRtl } = useLanguage()

  return (
    <section className="w-full pt-4 pb-2" aria-label="Products Catalog Banner">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] flex items-center shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
          style={{
            backgroundImage: "url('/banner/product.png')",
            backgroundSize: 'cover',
            backgroundPosition: isRtl ? 'center left' : 'center right',
          }}
        >
          {/* Subtle dark gradient overlay on left for readable contrast */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isRtl
                ? 'linear-gradient(270deg, rgba(8,8,11,0.92) 0%, rgba(15,8,12,0.85) 35%, rgba(130,10,18,0.4) 65%, rgba(0,0,0,0.15) 100%)'
                : 'linear-gradient(90deg, rgba(8,8,11,0.92) 0%, rgba(15,8,12,0.85) 35%, rgba(130,10,18,0.4) 65%, rgba(0,0,0,0.15) 100%)',
            }}
          />

          {/* Text & Badges Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-7 sm:py-8 max-w-[680px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-[0.16em] uppercase">
                {isRtl ? 'استكشف تشكيلتنا الكاملة' : 'EXPLORE OUR COMPLETE RANGE'}
              </span>
              <span className="h-[2px] w-7 bg-[#dc1414] rounded-full" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h1 className="mt-2 text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white tracking-[-0.025em] leading-[1.08]">
              {isRtl ? (
                <>جميع <span className="text-[#e61919]">المنتجات</span></>
              ) : (
                <>All <span className="text-[#e61919]">Products</span></>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-[13px] sm:text-[14px] text-[#e2e8f0] font-normal leading-relaxed max-w-[500px]">
              {isRtl
                ? 'أجهزة لابتوب، كمبيوترات مكتبية، محطات عمل، ملحقات وقطع غيار بضمان بريستيج.'
                : 'Laptops, Desktops, Workstations, Accessories, Components and More.'}
            </p>

            {/* 4 Guarantee Badges */}
            <div className="mt-4 sm:mt-5 flex items-center flex-wrap gap-2 sm:gap-2.5">
              {/* 1. Wide Range */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] text-white font-medium shadow-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#ff4d4d]" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span>{isRtl ? 'تشكيلة واسعة من المنتجات' : 'Wide Range of Products'}</span>
              </div>

              {/* 2. 100% Genuine */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] text-white font-medium shadow-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#22c55e]" aria-hidden="true">
                  <path d="M12 3 5 6v6c0 4.5 3 8 7 9.3 4-1.3 7-4.8 7-9.3V6l-7-3Z" />
                  <path d="m9 12.2 2 2 4-4.2" />
                </svg>
                <span>{isRtl ? 'منتجات أصلية 100%' : '100% Genuine Products'}</span>
              </div>

              {/* 3. Fast & Safe Delivery */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] text-white font-medium shadow-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#38bdf8]" aria-hidden="true">
                  <path d="M2 7h11v9H2z" />
                  <path d="M13 10h4.5l3 3.2V16H13v-6Z" />
                  <circle cx="6.5" cy="17.5" r="2" />
                  <circle cx="17" cy="17.5" r="2" />
                </svg>
                <span>{isRtl ? 'توصيل سريع وآمن في قطر' : 'Fast & Safe Delivery'}</span>
              </div>

              {/* 4. Expert Support */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] text-white font-medium shadow-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#fbbf24]" aria-hidden="true">
                  <path d="M4 13a8 8 0 0 1 16 0" />
                  <rect x="3" y="13" width="3.2" height="5.5" rx="1.4" />
                  <rect x="17.8" y="13" width="3.2" height="5.5" rx="1.4" />
                  <path d="M19.4 18.5A3 3 0 0 1 16.5 21H13" />
                </svg>
                <span>{isRtl ? 'دعم فني واستشارات متخصصة' : 'Expert Support'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
