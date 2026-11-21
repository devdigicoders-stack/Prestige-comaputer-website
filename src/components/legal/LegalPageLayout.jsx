'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../../context/LanguageContext'

const LEGAL_LINKS = [
  { label: 'Official PCS Policies (New Document)', labelAr: 'وثيقة سياسات بريستيج الرسمية', href: '/policies' },
  { label: 'Warranty & Guarantee', labelAr: 'الضمان والخدمات المعتمدة', href: '/warranty' },
  { label: 'Refund & Returns', labelAr: 'سياسة الإرجاع واسترداد الأموال', href: '/refund-policy' },
  { label: 'Terms & Conditions', labelAr: 'الشروط والأحكام العامة', href: '/terms' },
  { label: 'Privacy Policy', labelAr: 'سياسة حماية البيانات والخصوصية', href: '/privacy' },
  { label: 'Shipping & Delivery', labelAr: 'الشحن والتوصيل في قطر', href: '/shipping-policy' },
]

export default function LegalPageLayout({
  title,
  titleAr,
  subtitle,
  subtitleAr,
  lastUpdated = 'Updated November 2026',
  badge = 'Official Store Policy',
  badgeAr = 'وثيقة معتمدة رسمياً',
  children,
}) {
  const pathname = usePathname()
  const { language, setLanguage, isRtl } = useLanguage()

  const currentTitle = isRtl && titleAr ? titleAr : title
  const currentSubtitle = isRtl && subtitleAr ? subtitleAr : subtitle
  const currentBadge = isRtl && badgeAr ? badgeAr : badge

  return (
    <div className={`w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827] ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                {isRtl ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-[#6b7280]">{isRtl ? 'السياسات والوثائق القانونية' : 'Legal & Policies'}</span>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">{currentTitle}</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fee2e2] text-[#dc1414]">
                {currentBadge}
              </span>
              <span className="text-xs text-[#6b7280] font-medium">
                {isRtl ? 'آخر تحديث: نوفمبر 2026' : lastUpdated}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ISO Certified • Qatar
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
              {currentTitle}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#4b5563] max-w-2xl leading-relaxed">
              {currentSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Language Switcher Pill */}
            <div className="inline-flex items-center rounded-xl bg-[#f1f5f9] p-1 border border-[#e2e8f0] shadow-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-[#dc1414] shadow-xs'
                    : 'text-[#4b5563] hover:text-[#111827]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-arabic ${
                  language === 'ar'
                    ? 'bg-[#dc1414] text-white shadow-xs'
                    : 'text-[#4b5563] hover:text-[#111827]'
                }`}
              >
                العربية
              </button>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 border border-[#d1d5db] hover:bg-[#f3f4f6] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#374151]" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              <span>{isRtl ? 'طباعة الوثيقة' : 'Print Policy'}</span>
            </button>

            <Link
              href="/contact"
              className="px-4 py-2 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
            >
              <span>{isRtl ? 'المكتب القانوني' : 'Legal Desk'}</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Policy Navigation Sidebar (lg:col-span-3) */}
          <aside className="lg:col-span-3 space-y-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] px-3 mb-2">
                {isRtl ? 'جميع وثائق السياسات المعتمدة' : 'All Legal Documents'}
              </h3>
              <nav className="space-y-1">
                {LEGAL_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  const label = isRtl && link.labelAr ? link.labelAr : link.label
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]'
                          : 'text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#111827]'
                      }`}
                    >
                      {label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-2xl p-5 text-white shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white" aria-hidden="true">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </div>
              <h4 className="text-sm font-bold mt-1.5">{isRtl ? 'مراقبة الجودة والشكاوى' : 'Quality Control & Claims'}</h4>
              <p className="text-[11px] text-[#cbd5e1] mt-1 leading-snug">
                {isRtl
                  ? 'لمطالبات الضمان وعمليات الاستبدال، يرجى التواصل مع قسم مراقبة الجودة من الأحد إلى الخميس، 10:00 صباحاً حتى 5:00 مساءً.'
                  : 'For warranty claims, inspection, and return enquiries, contact our Quality Control & Claims desk.'}
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs space-y-1">
                <p>QC Claims: <a href="mailto:qc@pcsdoha.net" className="text-[#fca5a5] hover:underline font-bold">qc@pcsdoha.net</a></p>
                <p>General: <a href="mailto:info@pcsdoha.net" className="text-[#fca5a5] hover:underline">info@pcsdoha.net</a></p>
                <p>Phone: <a href="tel:+97441453868" className="text-[#fca5a5] hover:underline">+974 4145 3868</a></p>
                <p>WhatsApp: <a href="https://wa.me/97466919155" target="_blank" rel="noopener noreferrer" className="text-[#fca5a5] hover:underline">+974 6691 9155</a></p>
              </div>
            </div>
          </aside>

          {/* Right Column: Policy Document Prose (lg:col-span-9) */}
          <main className="lg:col-span-9 bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm">
            <div className={`prose prose-sm sm:prose-base max-w-none text-[#374151] leading-relaxed [&>h2]:text-lg sm:[&>h2]:text-xl [&>h2]:font-extrabold [&>h2]:text-[#111827] [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-[#f3f4f6] [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-[#111827] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:mb-4 ${isRtl ? 'text-right' : ''}`}>
              {children}
            </div>

            {/* Bottom Acknowledgement Box */}
            <div className="mt-10 pt-6 border-t border-[#f3f4f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
              <p>Prestige Computer Services (PCS Doha) • ISO-Certified • Incorporated 2020 • Doha, Qatar</p>
              <div className="flex gap-4">
                <Link href="/policies" className="hover:text-[#dc1414] hover:underline">Policies</Link>
                <Link href="/warranty" className="hover:text-[#dc1414] hover:underline">Warranty</Link>
                <Link href="/refund-policy" className="hover:text-[#dc1414] hover:underline">Refunds</Link>
                <Link href="/terms" className="hover:text-[#dc1414] hover:underline">Terms</Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
