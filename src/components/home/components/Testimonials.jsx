'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getTestimonials } from '../../../services/reviewApi'
import { useLanguage } from '../../../context/LanguageContext'

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-[#f59e0b] fill-current shrink-0" aria-hidden="true">
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
    </svg>
  )
}

function VerifiedBadgeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#16a34a] shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M8 1.2a6.8 6.8 0 1 0 0 13.6A6.8 6.8 0 0 0 8 1.2Zm3.1 5.4-3.7 3.8a.75.75 0 0 1-1.08 0L4.85 8.9a.75.75 0 1 1 1.06-1.06l.95.95 3.18-3.25a.75.75 0 1 1 1.06 1.06Z" />
    </svg>
  )
}

const AVATAR_COLORS = [
  ['#fee2e2', '#dc2626'], ['#dbeafe', '#1d4ed8'], ['#dcfce7', '#16a34a'],
  ['#fef3c7', '#d97706'], ['#f3e8ff', '#7c3aed'], ['#fce7f3', '#be185d'],
  ['#e0f2fe', '#0369a1'], ['#ecfdf5', '#059669'],
]

function ReviewerAvatar({ name }) {
  const initials = (name || 'U').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('')
  const idx = (name || 'U').charCodeAt(0) % AVATAR_COLORS.length
  const [bg, fg] = AVATAR_COLORS[idx]
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px] ring-2 ring-white shadow-sm"
      style={{ background: bg, color: fg }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function FeaturedCustomerVisual() {
  return (
    <div className="relative w-full sm:w-[215px] lg:w-[205px] xl:w-[228px] h-[168px] rounded-2xl overflow-hidden bg-[#120406] shadow-[0_10px_24px_rgba(16,24,40,0.16)] shrink-0 select-none">
      <svg viewBox="0 0 240 180" className="w-full h-full block" role="img" aria-label="Happy customer wearing headphones working on laptop">
        <defs>
          <radialGradient id="studioRedGlow2" cx="62%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#dc1414" stopOpacity="0.82" />
            <stop offset="48%" stopColor="#6b060a" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0c0406" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="hoodieGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#26262b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="skinTone2" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#f6cdb0" />
            <stop offset="100%" stopColor="#dca07c" />
          </linearGradient>
          <linearGradient id="laptopShell2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d4d4d8" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>
        </defs>
        <rect width="240" height="180" fill="url(#studioRedGlow2)" />
        <rect x="0" y="0" width="54" height="180" fill="#140709" fillOpacity="0.65" />
        <rect x="14" y="42" width="38" height="4" rx="2" fill="#3f1419" />
        <rect x="14" y="96" width="38" height="4" rx="2" fill="#3f1419" />
        <path d="M52 12 L52 168" stroke="#ef1a1a" strokeWidth="2.2" strokeOpacity="0.7" />
        <path d="M188 10 C196 42, 180 70, 198 104" fill="none" stroke="#ff2a2a" strokeWidth="3.5" strokeOpacity="0.65" strokeLinecap="round" />
        <path d="M28 118 C24 142, 26 164, 30 180 H64 L54 118 Z" fill="#18181b" />
        <path d="M42 180 C44 134, 62 110, 96 105 L128 105 C154 110, 170 132, 178 168 L182 180 Z" fill="url(#hoodieGrad2)" />
        <path d="M84 108 C94 128, 124 132, 136 112" fill="none" stroke="#3f3f46" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M148 112 C164 122, 174 142, 179 166" fill="none" stroke="#ef1a1a" strokeWidth="1.5" strokeOpacity="0.45" />
        <path d="M98 92 L98 114 C108 122, 120 120, 125 112 L123 90 Z" fill="#d99a74" />
        <path d="M84 62 C82 26, 108 14, 132 22 C146 27, 152 40, 150 56" fill="none" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />
        <path d="M86 58 C85 28, 108 18, 130 24" fill="none" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M92 48 C92 32, 110 24, 128 28 C144 32, 152 46, 150 66 C148 86, 138 102, 122 103 C106 104, 92 90, 92 68 Z" fill="url(#skinTone2)" />
        <path d="M90 56 C88 30, 108 16, 134 20 C148 22, 154 32, 150 42 C142 36, 130 35, 118 39 C106 43, 99 52, 96 62 Z" fill="#181515" />
        <path d="M97 72 C98 92, 112 105, 126 104 C139 103, 148 92, 149 76 C144 82, 138 84, 131 82 C123 80, 116 82, 110 78 C104 74, 101 70, 97 72 Z" fill="#231c1a" />
        <path d="M123 84 Q134 90 142 84 Q135 94 123 89 Z" fill="#ffffff" />
        <g stroke="#18181b" strokeWidth="2.2" fill="#ffffff" fillOpacity="0.14">
          <rect x="114" y="54" width="16" height="12" rx="3.5" />
          <rect x="134" y="54" width="14" height="12" rx="3.5" />
          <path d="M130 59h4" />
          <path d="M96 58 L114 58" strokeWidth="2" />
        </g>
        <circle cx="123" cy="60" r="1.5" fill="#181515" />
        <circle cx="141" cy="60" r="1.5" fill="#181515" />
        <rect x="82" y="54" width="14" height="26" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1.4" />
        <rect x="85" y="59" width="5" height="16" rx="2.5" fill="#27272a" />
        <circle cx="88" cy="67" r="2.2" fill="#dc1414" />
        <path d="M124 166 C134 158, 152 156, 166 164 L164 180 H122 Z" fill="#e8b494" />
        <path d="M168 160 C178 154, 190 156, 198 166 L194 180 H164 Z" fill="#dca07c" />
        <path d="M196 178 L216 106 L236 106 L216 178 Z" fill="url(#laptopShell2)" />
        <path d="M216 106 L219 106 L199 178 L196 178 Z" fill="#f4f4f5" />
        <path d="M150 176 L216 176 L216 180 L146 180 Z" fill="#a1a1aa" />
      </svg>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#e7eaf0] p-4 sm:p-5 min-h-[168px] animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full bg-gray-100 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 bg-gray-100 rounded-full w-28" />
          <div className="h-3 bg-gray-100 rounded-full w-20" />
        </div>
      </div>
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => <div key={i} className="w-3.5 h-3.5 bg-gray-100 rounded" />)}
      </div>
      <div className="space-y-1.5">
        <div className="h-3 bg-gray-100 rounded-full w-full" />
        <div className="h-3 bg-gray-100 rounded-full w-4/5" />
        <div className="h-3 bg-gray-100 rounded-full w-3/5" />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { isRtl } = useLanguage()
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getTestimonials(6)
      .then((data) => {
        if (!cancelled) setReviews(Array.isArray(data) ? data.slice(0, 3) : [])
      })
      .catch(() => { if (!cancelled) setReviews([]) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  // Don't render section if no featured reviews and not loading
  if (!loading && reviews.length === 0) return null

  return (
    <section className="w-full bg-white py-6 sm:py-8" aria-label="What Our Customers Say">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">

          {/* LEFT: Visual + Heading */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row items-center gap-5">
            <FeaturedCustomerVisual />
            <div className="text-center sm:text-left rtl:sm:text-right min-w-0">
              <h2 className="text-[21px] xl:text-[23px] font-bold text-[#111827] leading-[1.2] tracking-[-0.02em]">
                {isRtl ? (
                  <>آراء عملائنا<br className="hidden sm:block" /> الكرام</>
                ) : (
                  <>What Our<br className="hidden sm:block" /> Customers Say</>
                )}
              </h2>
              <p className="mt-2.5 text-[12.5px] xl:text-[13px] text-[#4b5563] leading-relaxed max-w-[230px] mx-auto sm:mx-0">
                {isRtl
                  ? 'ثقة آلاف المحترفين والشركات والطلاب في دولة قطر.'
                  : 'Trusted by thousands of professionals, students and businesses.'}
              </p>
              <Link
                href="/products"
                className="mt-3 inline-block text-[12px] font-semibold text-[#dc1414] hover:underline"
              >
                {isRtl ? 'عرض جميع المنتجات ←' : 'View all products →'}
              </Link>
            </div>
          </div>

          {/* RIGHT: Review Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {loading ? (
              [0, 1, 2].map((i) => <SkeletonCard key={i} />)
            ) : (
              reviews.map((review) => (
                <article
                  key={review._id}
                  className="bg-white rounded-2xl border border-[#e7eaf0] shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_24px_rgba(16,24,40,0.08)] hover:border-[#dc1414]/25 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between min-h-[168px]"
                >
                  <div>
                    {/* Reviewer Header */}
                    <div className="flex items-center gap-3">
                      <ReviewerAvatar name={review.userName} />
                      <div className="min-w-0 leading-tight">
                        <h3 className="text-[14px] font-bold text-[#111827] truncate">{review.userName}</h3>
                        <p className="mt-1 inline-flex items-center gap-1 text-[11.5px] font-medium text-[#15803d]">
                          <VerifiedBadgeIcon />
                          <span>
                            {review.isVerifiedBuyer
                              ? (isRtl ? 'مشتري معتمد' : 'Verified Buyer')
                              : (isRtl ? 'عميل موثوق' : 'Reviewer')}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="mt-3 flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: review.rating || 5 }).map((_, idx) => (
                        <StarIcon key={idx} />
                      ))}
                    </div>

                    {/* Product name */}
                    {review.productName && (
                      <p className="mt-1.5 text-[10.5px] text-[#9ca3af]">
                        {isRtl ? `على ${review.productName}` : `on ${review.productName}`}
                      </p>
                    )}

                    {/* Quote */}
                    <p className="mt-2 text-[12.5px] xl:text-[13px] text-[#374151] leading-relaxed line-clamp-4">
                      &ldquo;{review.body}&rdquo;
                    </p>
                  </div>
                </article>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
