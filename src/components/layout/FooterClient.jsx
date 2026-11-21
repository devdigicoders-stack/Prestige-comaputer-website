'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    titleAr: 'المتجر والتصنيفات',
    links: [],
  },
  {
    title: 'Services',
    titleAr: 'الخدمات والحلول',
    links: [
      { label: 'Rent a Computer', labelAr: 'استئجار أجهزة الكمبيوتر', href: '/rentals' },
      { label: 'Business Solutions', labelAr: 'حلول الشركات والأعمال', href: '/about' },
      { label: 'Education Solutions', labelAr: 'حلول التعليم والجامعات', href: '/about' },
      { label: 'Deals & Offers', labelAr: 'أقوى العروض والتخفيضات', href: '/products' },
      { label: 'Bulk Orders', labelAr: 'طلبات الجملة والتوريد', href: '/contact' },
      { label: 'Track Order', labelAr: 'تتبع حالة طلبك', href: '/track-order' },
    ],
  },
  {
    title: 'Support',
    titleAr: 'الدعم والمساعدة',
    links: [
      { label: 'Official Store Policies', labelAr: 'وثيقة سياسات المتجر الرسمية', href: '/policies' },
      { label: 'Returns & Refunds', labelAr: 'الإرجاع واسترداد الأموال', href: '/refund-policy' },
      { label: 'Warranty Information', labelAr: 'معلومات وشروط الضمان', href: '/warranty' },
      { label: 'Shipping & Delivery', labelAr: 'الشحن والتوصيل في قطر', href: '/shipping-policy' },
      { label: 'Help Center & FAQ', labelAr: 'مركز المساعدة والأسئلة الشائعة', href: '/faq' },
      { label: 'Contact Us', labelAr: 'اتصل بنا', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    titleAr: 'عن بريستيج',
    links: [
      { label: 'About Us', labelAr: 'نبذة عن الشركة', href: '/about' },
      { label: 'Our Stores', labelAr: 'صالة العرض والمتاجر', href: '/store-locator' },
      { label: 'Tech Guides & Blog', labelAr: 'المدونة التقنية والأدلة', href: '/blog' },
      { label: 'Categories', labelAr: 'جميع تصنيفات المنتجات', href: '/categories' },
      { label: 'Terms & Conditions', labelAr: 'الشروط والأحكام', href: '/terms' },
      { label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', href: '/privacy' },
    ],
  },
]

function FooterSocials() {
  return (
    <div className="mt-4 flex items-center gap-2.5">
      {/* WhatsApp */}
      <a
        href="https://wa.me/97466919155"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="Chat on WhatsApp (+974 6691 9155)"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/prestigecomputers.qa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Follow @prestigecomputers.qa on Instagram"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/pcsdoha/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Prestige Computer Services on Facebook"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.6v3h2.6V21h3.3Z" />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@prestigecomputers.qa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        title="Follow @prestigecomputers.qa on TikTok"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#000000] text-white flex items-center justify-center transition-colors border border-white/10"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 9.3 5.56 6.27 6.27 0 0 0 3.38-5.59V8.71a8.28 8.28 0 0 0 4.88 1.58V6.84a4.85 4.85 0 0 1-1.11-.15Z" />
        </svg>
      </a>

      {/* Google Maps Showroom */}
      <a
        href="https://www.google.com/maps/place/?q=place_id:ChIJE2au-QvRRT4R5xkwxaUf4bo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps"
        title="Find Prestige Computers on Google Maps (Al-Mirqab Mall, Doha)"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#dc1414] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </a>
    </div>
  )
}

function PaymentBadges() {
  return (
    <div className="mt-5">
      <p className="text-[11px] uppercase tracking-wider text-[#9ca3af] font-semibold mb-2">
        Accepted Payment Methods
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-bold text-white">
          VISA
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-bold text-white">
          Mastercard
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-bold text-white">
          QNB / Bank Transfer
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-bold text-white">
          POS Terminal
        </span>
        <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-bold text-white">
          Cash on Delivery
        </span>
      </div>
    </div>
  )
}

export default function FooterClient({ initialCategories = [] }) {
  const { isRtl, t } = useLanguage()

  const defaultShopLinks = [
    { label: 'All Products', labelAr: 'جميع المنتجات', href: '/products' },
    { label: 'Categories', labelAr: 'التصنيفات', href: '/categories' },
    { label: 'Rent a Computer', labelAr: 'استئجار أجهزة الكمبيوتر', href: '/rentals' },
  ]

  const liveShopLinks =
    initialCategories && initialCategories.length > 0
      ? initialCategories.slice(0, 6).map((c) => ({
          label: c.name,
          labelAr: c.name,
          href: `/products?category=${c.slug}`,
        }))
      : defaultShopLinks

  const columns = FOOTER_COLUMNS.map((col) =>
    col.title === 'Shop' ? { ...col, links: liveShopLinks } : col
  )

  return (
    <footer className="relative w-full bg-[#0a0a0c] text-white">
      {/* SVG filter so /logo.png dark ink renders crisp white on dark bg */}
      <svg
        className="absolute w-0 h-0 pointer-events-none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="footer-logo-dark-bg" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                -1 0 0 0 1
                0 -1 0 0 1
                0 0 -1 0 1
                0 0 0 1 0
              "
              result="inverted"
            />
            <feColorMatrix
              type="matrix"
              values="
                1.4 0 0 0 0
                0 1.4 0 0 0
                0 0 1.4 0 0
                0 0 0 1 0
              "
              in="inverted"
              result="boosted"
            />
            <feComponentTransfer in="boosted" result="clipped">
              <feFuncR type="linear" slope="1.1" />
              <feFuncG type="linear" slope="1.1" />
              <feFuncB type="linear" slope="1.1" />
            </feComponentTransfer>
            <feMerge result="combined">
              <feMergeNode in="clipped" />
            </feMerge>
            <feColorMatrix
              type="matrix"
              values="
                0.98 0 0 0 0
                0 0.98 0 0 0
                0 0 1.0 0 0
                0 0 0 1 0
              "
              in="combined"
              result="combined"
            />
            <feComposite in="combined" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Main Footer Columns */}
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-11 pb-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.55fr_0.85fr_1fr_1.05fr_0.95fr_1.45fr] gap-y-8 gap-x-6">
          {/* Column 1: Brand Logo + About + Socials */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Prestige Computers — A Tiny City Full of Amazing Computers"
                className="h-[54px] sm:h-[62px] w-auto object-contain"
                style={{ filter: 'url(#footer-logo-dark-bg)' }}
              />
            </Link>

            <p className="mt-3.5 text-[12.5px] leading-[1.6] text-[#c7cbd1] max-w-[265px]">
              {t('footerAbout')}
            </p>

            <FooterSocials />
          </div>

          {/* Columns 2-5: Shop, Service, Support, Company */}
          {columns.map((col) => {
            const colTitle = isRtl && col.titleAr ? col.titleAr : col.title
            return (
              <div key={col.title}>
                <h3 className="text-[14px] font-bold text-white tracking-[-0.01em] mb-3.5">
                  {colTitle}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => {
                    const linkLabel = isRtl && link.labelAr ? link.labelAr : link.label
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[12.5px] text-[#c7cbd1] hover:text-white transition-colors"
                        >
                          {linkLabel}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}

          {/* Column 6: Contact Us + Payment Badges */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-[14px] font-bold text-white tracking-[-0.01em] mb-3.5">
              {t('contactUs')}
            </h3>

            <ul className="space-y-2.5 text-[12px] text-[#c7cbd1]">
              <li>
                <a
                  href="tel:+97441453868"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414] shrink-0" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span><bdi dir="ltr">+974 4145 3868</bdi></span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/97466919155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#25D366] shrink-0" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>{t('whatsapp')}: <bdi dir="ltr">+974 6691 9155</bdi></span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@pcsdoha.net"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414] shrink-0" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@pcsdoha.net</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:b2bsales@pcsdoha.net"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414] shrink-0" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>B2B: b2bsales@pcsdoha.net</span>
                </a>
              </li>

              <li className="flex items-start gap-2 pt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414] shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-snug">
                  {t('showroomLocation')}
                </span>
              </li>

              <li className="flex items-start gap-2 pt-0.5 text-[11px] text-[#9ca3af]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414] shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="leading-snug">
                  {t('workingHours')}
                </span>
              </li>
            </ul>

            <PaymentBadges />
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-white/12">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#9ca3af]">
          <p>&copy; {new Date().getFullYear()} Prestige Computers (PCS Doha). {t('allRightsReserved')}</p>

          <div className="flex items-center gap-3">
            <Link href="/terms" className="hover:text-white transition-colors">
              {isRtl ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <Link href="/policies" className="hover:text-white transition-colors">
              {isRtl ? 'السياسات الرسمية' : 'Official Policies'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
