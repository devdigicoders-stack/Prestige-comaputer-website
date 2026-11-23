'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'
import { getWeeklyFlyers, getFlyerImageUrl, FALLBACK_FLYERS, isFlyerExpired } from '../../../services/flyerApi'

export default function WeeklyFlyersSection() {
  const { isArabic, isRtl } = useLanguage()
  const [flyers, setFlyers] = useState(FALLBACK_FLYERS)
  const [loading, setLoading] = useState(true)
  const [activeModalFlyer, setActiveModalFlyer] = useState(null)

  useEffect(() => {
    let isMounted = true
    getWeeklyFlyers()
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setFlyers(data)
        }
      })
      .catch((err) => {
        console.warn('Could not fetch dynamic flyers, using defaults:', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="py-7 sm:py-10 bg-[#f8fafc] text-gray-900 border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc1414] text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dc1414] animate-ping" />
              <span>{isArabic ? 'النشرات الترويجية الأسبوعية' : 'Digital Weekly Fliers'}</span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-black text-[#111827] tracking-tight">
              {isArabic ? 'تصفح عروض البروشورات الأسبوعية' : 'Explore Weekly Promotional Fliers'}
            </h2>
            <p className="mt-1 text-[13px] text-gray-600">
              {isArabic
                ? 'تحميل وتصفح بروشورات العروض الأسبوعية للأجهزة الجديدة والمستعملة وتجميعات الألعاب.'
                : 'Browse current weekly product catalogs for Gaming, Business & Genuine Pre-Owned systems.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/97466919155?text=Hello%20Prestige%20Computers%2C%20please%20send%20me%20this%20week's%20latest%20PDF%20fliers"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366', color: '#ffffff' }}
              className="px-3.5 py-1.5 rounded-lg text-white text-[12px] font-bold inline-flex items-center gap-1.5 transition-all shadow-xs hover:opacity-90 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{isArabic ? 'طلب البروشور عبر واتساب' : 'Get Fliers on WhatsApp'}</span>
            </a>
          </div>
        </div>

        {/* Dynamic Flyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {flyers.map((flier) => {
            const flyerId = flier._id || flier.id
            const coverSrc = getFlyerImageUrl(flier.coverImage)
            const isExpired = isFlyerExpired(flier)
            const accent = isExpired ? '#991b1b' : (flier.accentColor || '#dc1414')

            return (
              <div
                key={flyerId}
                className={`rounded-2xl p-5 sm:p-6 bg-white border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isExpired
                    ? 'border-red-200 hover:border-red-300'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div>
                  {/* Header tags */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10.5px] font-black uppercase tracking-wider text-white shadow-xs"
                        style={{ backgroundColor: accent }}
                      >
                        {isExpired
                          ? (isArabic ? 'منتهي الصلاحية' : 'EXPIRED')
                          : (isArabic ? (flier.dateBadgeAr || flier.dateBadge) : flier.dateBadge)}
                      </span>
                      {isExpired && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 border border-red-200">
                          {isArabic ? 'انتهى العرض' : 'Ended'}
                        </span>
                      )}
                    </div>
                    <span className="text-[11.5px] text-gray-500 font-bold">
                      {isArabic ? (flier.productCountAr || flier.productCount) : flier.productCount}
                    </span>
                  </div>

                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-gray-500">
                    {isArabic ? (flier.categoryAr || flier.category) : flier.category}
                  </p>

                  <h3 className="mt-1 text-[19px] sm:text-[21px] font-black text-gray-900 group-hover:text-[#dc1414] transition-colors leading-snug">
                    {isArabic ? (flier.titleAr || flier.title) : flier.title}
                  </h3>

                  {/* Flier Cover Mockup Preview (Clickable to open interactive catalogue modal) */}
                  <div
                    onClick={() => setActiveModalFlyer(flier)}
                    className="my-4 relative h-40 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                    <img
                      src={coverSrc}
                      alt={flier.title}
                      className={`w-full h-full object-contain p-2 group-hover:scale-105 transition-transform ${
                        isExpired ? 'grayscale-40 opacity-75' : ''
                      }`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/banner/product.png'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold text-white px-2.5 py-1 rounded-md border backdrop-blur-xs ${
                        isExpired
                          ? 'bg-red-950/80 border-red-500/40 text-red-100'
                          : 'bg-black/60 border-white/20'
                      }`}>
                        {isExpired ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span>{isArabic ? 'انتهى العرض — انقر للتفاصيل' : 'Offer Expired — Click Details'}</span>
                          </>
                        ) : (
                          <>
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#ef4444]">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            <span>{isArabic ? 'معاينة العروض' : 'Interactive Catalogue'}</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-2 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href={flier.link || `/products?category=${flier.categorySlug || 'gaming'}`}
                    className="flex-1 py-2 px-3 rounded-lg text-center text-[12px] font-bold text-white transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-95"
                    style={{ backgroundColor: accent }}
                  >
                    <span>
                      {isArabic
                        ? (isExpired ? 'تصفح منتجات القسم' : 'تصفح منتجات النشرة')
                        : (isExpired ? 'Browse Catalog Products' : 'Browse Flyer Products')}
                    </span>
                    <span className="rtl:rotate-180">→</span>
                  </Link>

                  <a
                    href={`https://wa.me/97466919155?text=${encodeURIComponent(
                      isExpired
                        ? `Hi Prestige Computers, I saw flyer '${flier.title}' which has expired. Can you please share the current updated prices or upcoming issue?`
                        : (flier.whatsappMessage || `Hi Prestige Computers, I want to inquire about ${flier.title}`)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={isExpired ? 'Inquire about current stock' : 'Inquire on WhatsApp'}
                    style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                    className="p-2 rounded-lg text-white transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-xs hover:opacity-90"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-white" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Interactive Catalogue Modal */}
      {activeModalFlyer && (() => {
        const isModalExpired = isFlyerExpired(activeModalFlyer)
        const modalAccent = isModalExpired ? '#991b1b' : (activeModalFlyer.accentColor || '#dc1414')

        return (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black/75 p-3 sm:p-4 backdrop-blur-xs flex items-center justify-center animate-in fade-in duration-200"
            onClick={() => setActiveModalFlyer(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full shadow-2xl relative border border-gray-200 flex flex-col max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2.5rem)] overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header (Fixed, Never Clipped) */}
              <div className="p-3.5 sm:p-4 border-b border-gray-100 flex items-start justify-between gap-3 bg-white shrink-0">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-black uppercase text-white tracking-wider shadow-xs"
                      style={{ backgroundColor: modalAccent, color: '#ffffff' }}
                    >
                      {isModalExpired
                        ? (isArabic ? 'منتهي الصلاحية' : 'EXPIRED OFFER')
                        : (isArabic ? (activeModalFlyer.dateBadgeAr || activeModalFlyer.dateBadge) : activeModalFlyer.dateBadge)}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold bg-gray-100 text-gray-700">
                      {isArabic ? (activeModalFlyer.categoryAr || activeModalFlyer.category) : activeModalFlyer.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {isArabic ? (activeModalFlyer.productCountAr || activeModalFlyer.productCount) : activeModalFlyer.productCount}
                    </span>
                    {isModalExpired && activeModalFlyer.validUntil && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold bg-red-50 text-red-700 border border-red-200">
                        {isArabic ? `انتهى: ${new Date(activeModalFlyer.validUntil).toLocaleDateString('ar-QA')}` : `Ended: ${new Date(activeModalFlyer.validUntil).toLocaleDateString()}`}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#111827] tracking-tight leading-snug truncate">
                    {isArabic ? (activeModalFlyer.titleAr || activeModalFlyer.title) : activeModalFlyer.title}
                  </h3>
                  {activeModalFlyer.titleAr && !isArabic && (
                    <p className="text-[11px] sm:text-xs text-gray-500 font-arabic mt-0.5" dir="rtl">
                      {activeModalFlyer.titleAr}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalFlyer(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors shrink-0 font-bold text-sm"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body (Scrollable, Guaranteed min-h-0 flex-1) */}
              <div className="p-3.5 sm:p-4 overflow-y-auto flex-1 min-h-0 space-y-3 bg-[#fbfcfd]">
                {/* Expired Alert Banner */}
                {isModalExpired && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2.5">
                    <span className="text-lg leading-none text-red-600 mt-0.5">⚠️</span>
                    <div>
                      <p className="text-[12px] font-black text-red-900">
                        {isArabic ? 'هذا البروشور الترويجي منتهي الصلاحية' : 'This Weekly Promotional Flyer Has Expired'}
                      </p>
                      <p className="text-[11px] text-red-700 mt-0.5 leading-relaxed">
                        {isArabic
                          ? `انتهت صلاحية عروض هذا البروشور${activeModalFlyer.validUntil ? ` بتاريخ ${new Date(activeModalFlyer.validUntil).toLocaleDateString('ar-QA')}` : ''}. يمكنك تصفح المنتجات الحالية أو مراسلتنا عبر واتساب للاستفسار عن توفر الأجهزة والأسعار الحالية فوراً.`
                          : `Promotional deals for this issue ended${activeModalFlyer.validUntil ? ` on ${new Date(activeModalFlyer.validUntil).toLocaleDateString()}` : ''}. You can browse current in-stock catalog products or message our showroom on WhatsApp to check current availability & upcoming flyer issues.`}
                      </p>
                    </div>
                  </div>
                )}

                {/* Cover Image Showcase */}
                <div className="relative rounded-xl overflow-hidden bg-white border border-gray-200 flex items-center justify-center p-2 shadow-xs h-44 sm:h-52">
                  <img
                    src={getFlyerImageUrl(activeModalFlyer.coverImage)}
                    alt={activeModalFlyer.title}
                    className={`max-h-full max-w-full object-contain drop-shadow-sm rounded-lg ${
                      isModalExpired ? 'grayscale-30 opacity-80' : ''
                    }`}
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/banner/product.png'
                    }}
                  />
                  {isModalExpired && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold shadow-sm uppercase tracking-wider">
                      {isArabic ? 'عرض منتهي' : 'Expired Issue'}
                    </div>
                  )}
                </div>

                {/* Showroom & Service Highlights */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white border border-gray-200/90 rounded-lg p-2 text-center shadow-xs">
                    <p className="text-[11px] font-bold text-gray-900">📍 Al Mirqab Mall</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Doha Showroom</p>
                  </div>
                  <div className="bg-white border border-gray-200/90 rounded-lg p-2 text-center shadow-xs">
                    <p className="text-[11px] font-bold text-gray-900">⚡ Fast Delivery</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Across Qatar</p>
                  </div>
                  <div className="bg-white border border-gray-200/90 rounded-lg p-2 text-center shadow-xs">
                    <p className="text-[11px] font-bold text-gray-900">🛡️ 1-Yr Warranty</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Official Invoice</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-lg p-2.5 flex items-start gap-2">
                  <span className="text-sm leading-none mt-0.5">📢</span>
                  <p className="text-[11.5px] text-gray-600 leading-relaxed">
                    {isArabic
                      ? 'تصفح جميع المنتجات المتوفرة في النشرة بأسعار العروض الترويجية، أو تواصل مع فريق المبيعات عبر واتساب لمعرفة الأسعار المحدثة فوراً.'
                      : 'Browse products featured in this issue, or connect with our showroom sales specialists on WhatsApp to verify current real-time prices.'}
                  </p>
                </div>
              </div>

              {/* Modal Footer Controls (Fixed, Never Clipped) */}
              <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex flex-col gap-2 shrink-0">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href={activeModalFlyer.link || `/products?category=${activeModalFlyer.categorySlug || 'gaming'}`}
                    onClick={() => setActiveModalFlyer(null)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs sm:text-[13px] font-black text-white shadow-xs flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                    style={{ backgroundColor: modalAccent, color: '#ffffff' }}
                  >
                    <span>
                      {isArabic
                        ? (isModalExpired ? 'تصفح منتجات القسم' : 'عرض كل عروض النشرة')
                        : (isModalExpired ? 'Browse Category Products' : 'Shop All Products from this Flyer')}
                    </span>
                    <span className="rtl:rotate-180">→</span>
                  </Link>

                  <a
                    href={`https://wa.me/97466919155?text=${encodeURIComponent(
                      isModalExpired
                        ? `Hi Prestige Computers, I saw flyer "${activeModalFlyer.title}" which has expired. Can you please share the current updated prices or upcoming weekly flyer?`
                        : (activeModalFlyer.whatsappMessage || `Hi Prestige Computers, please send me full PDF for ${activeModalFlyer.title}`)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                    className="py-2.5 px-4 rounded-xl text-white text-xs sm:text-[13px] font-black flex items-center justify-center gap-2 shadow-xs hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shrink-0"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-white" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>
                      {isArabic
                        ? (isModalExpired ? 'استفسار عن العروض الجديدة' : 'طلب PDF واتساب')
                        : (isModalExpired ? 'Inquire for Next Weekly Issue' : 'Request PDF on WhatsApp')}
                    </span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2.5 text-[10.5px] text-gray-500 pt-0.5">
                  <span>Showroom:</span>
                  <a href="tel:+97441453868" className="font-bold text-gray-800 hover:text-[#dc1414] transition-colors">
                    +974 4145 3868
                  </a>
                  <span>•</span>
                  <a href="tel:+97466919155" className="font-bold text-gray-800 hover:text-[#25D366] transition-colors">
                    +974 6691 9155
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}
