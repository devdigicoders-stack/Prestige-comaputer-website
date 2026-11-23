'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function FooterClient() {
  const { isArabic } = useLanguage()

  return (
    <footer className="w-full bg-white text-[#1f2937] border-t border-gray-200">
      {/* Responsive CSS Grid ensuring generous spacing, balanced columns and clear typography */}
      <style>{`
        .pcs-footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 44px;
        }
        @media (min-width: 640px) {
          .pcs-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
        }
        @media (min-width: 1024px) {
          .pcs-footer-grid {
            grid-template-columns: 1.55fr 0.95fr 0.95fr 1.15fr 1.4fr;
            gap: clamp(28px, 3.2vw, 56px);
            align-items: start;
          }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-14">
        {/* 5-Column Grid with Spacious Breathing Room */}
        <div className="pcs-footer-grid">
          
          {/* COLUMN 1: Large Brand Logo + Bio + Socials */}
          <div className="min-w-0">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <img
                src="/logo.png"
                alt="Prestige Computers — A Tiny City Full of Amazing Computers"
                className="h-20 sm:h-24 lg:h-26 w-auto object-contain"
                width={300}
                height={134}
              />
            </Link>

            <p className="mt-5 text-[14px] sm:text-[14.5px] leading-[1.75] text-[#4b5563] font-normal max-w-[330px]">
              {isArabic
                ? 'وجهتك الموثوقة في الدوحة لأجهزة الكمبيوتر الأصلية، أجهزة اللابتوب، وعروض النشرات الأسبوعية مع الدعم الفني الحقيقي.'
                : 'Your trusted destination in Doha for genuine computers, laptops, and weekly flyer-based offers with real support.'}
            </p>

            {/* Social Icons with Clean Rounded Boxes */}
            <div className="mt-6 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/pcsdoha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-10.5 h-10.5 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-200 text-[#1877F2] flex items-center justify-center transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.6v3h2.6V21h3.3Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pcsdoha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10.5 h-10.5 rounded-xl border border-gray-200 bg-white hover:bg-pink-50 hover:border-pink-200 text-[#E1306C] flex items-center justify-center transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@prestigecomputers.qa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="w-10.5 h-10.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 hover:border-gray-300 text-gray-900 flex items-center justify-center transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 9.3 5.56 6.27 6.27 0 0 0 3.38-5.59V8.71a8.28 8.28 0 0 0 4.88 1.58V6.84a4.85 4.85 0 0 1-1.11-.15Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="min-w-0">
            <h4 className="text-[14px] sm:text-[15px] font-black tracking-wider text-[#dc1414] uppercase mb-5">
              {isArabic ? 'روابط سريعة' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-3.5 sm:space-y-4 text-[14.5px] font-medium text-[#374151]">
              <li>
                <Link href="/" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'المتجر' : 'Shop'}
                </Link>
              </li>
              <li>
                <Link href="/products?category=business" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'أجهزة الشركات (Business)' : 'Business'}
                </Link>
              </li>
              <li>
                <Link href="/products?category=gaming" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'أجهزة الألعاب (Gaming)' : 'Gaming'}
                </Link>
              </li>
              <li>
                <Link href="/products?category=pre-owned" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'أجهزة مستعملة مضمونة' : 'Pre-Owned'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'من نحن والسياسات' : 'About & Policies'}
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: POLICIES */}
          <div className="min-w-0">
            <h4 className="text-[14px] sm:text-[15px] font-black tracking-wider text-[#dc1414] uppercase mb-5">
              {isArabic ? 'السياسات الرسمية' : 'POLICIES'}
            </h4>
            <ul className="space-y-3.5 sm:space-y-4 text-[14.5px] font-medium text-[#374151]">
              <li>
                <Link href="/about" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'عن برستيج PCS' : 'About PCS'}
                </Link>
              </li>
              <li>
                <Link href="/products?category=business" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'الأجهزة الجديدة كلياً' : 'Brand-New Devices'}
                </Link>
              </li>
              <li>
                <Link href="/products?category=pre-owned" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'الأجهزة المستعملة المعتمدة' : 'Pre-Owned Devices'}
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'الشروط والضمان المهمة' : 'Important Conditions'}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#dc1414] transition-all inline-block hover:translate-x-1.5 rtl:hover:-translate-x-1.5 duration-150">
                  {isArabic ? 'دعم السياسات والإرجاع' : 'Policy Support'}
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: FLYER UPDATES */}
          <div className="min-w-0">
            <h4 className="text-[14px] sm:text-[15px] font-black tracking-wider text-[#dc1414] uppercase mb-5">
              {isArabic ? 'نشرات العروض' : 'FLYER UPDATES'}
            </h4>
            <p className="text-[14px] sm:text-[14.5px] leading-[1.7] text-[#4b5563] font-normal mb-6">
              {isArabic
                ? 'احصل على تحديثات النشرات الأسبوعية والعروض الحصرية مباشرة عبر الواتساب.'
                : 'Get weekly flyer updates and offers directly through WhatsApp.'}
            </p>

            {/* Subscribe Action: Crisp, Rectangular & Proportioned matching reference */}
            <a
              href="https://wa.me/97466919155?text=Hello%20Prestige%20Computers,%20please%20subscribe%20me%20to%20weekly%20flyer%20updates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[195px] h-[44px] px-6 rounded-lg bg-[#dc1414] hover:bg-[#b91010] active:scale-95 text-white font-bold text-[14.5px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
              </svg>
              <span className="whitespace-nowrap tracking-wide">{isArabic ? 'اشتراك في النشرة' : 'Subscribe'}</span>
            </a>
          </div>

          {/* COLUMN 5: CONTACT US */}
          <div className="min-w-0">
            <h4 className="text-[14px] sm:text-[15px] font-black tracking-wider text-[#dc1414] uppercase mb-5">
              {isArabic ? 'اتصل بنا' : 'CONTACT US'}
            </h4>
            <ul className="space-y-4 sm:space-y-4.5 text-[14px] sm:text-[14.5px] text-[#111827]">
              {/* Phone 1 */}
              <li className="flex items-center gap-3">
                <span className="w-8.5 h-8.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-[#111827] shadow-2xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+97466919155" className="hover:text-[#dc1414] transition-colors font-bold text-[#111827]">
                  <bdi dir="ltr">+974 6691 9155</bdi>
                </a>
              </li>

              {/* Phone 2 */}
              <li className="flex items-center gap-3">
                <span className="w-8.5 h-8.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-[#111827] shadow-2xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+97441453868" className="hover:text-[#dc1414] transition-colors font-bold text-[#111827]">
                  <bdi dir="ltr">+974 4145-3868</bdi>
                </a>
              </li>

              {/* Chat on WhatsApp */}
              <li className="flex items-center gap-3">
                <span className="w-8.5 h-8.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-[#16a34a] shadow-2xs">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-[#16a34a]" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/97466919155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#16a34a] hover:text-[#15803d] transition-colors"
                >
                  {isArabic ? 'محادثة عبر الواتساب' : 'Chat on WhatsApp'}
                </a>
              </li>

              {/* Showroom Address */}
              <li className="flex items-start gap-3 pt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#4b5563] font-normal">
                <span className="w-8.5 h-8.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-[#4b5563] mt-0.5 shadow-2xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  Tower 1, 2nd Floor, Office No 201, Al-Mirqab Mall, Al Mirqab Al Jadeed St, Doha, Qatar
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Symmetrical, Balanced Padding (Equal Top & Bottom) */}
      <div className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 text-[13.5px] text-[#4b5563] font-medium flex-wrap justify-center lg:justify-start">
            <span>&copy; 2026 Prestige Computers (PCS Doha). All rights reserved.</span>
            <span className="text-gray-300 select-none hidden sm:inline">•</span>
            <span>
              {isArabic ? 'تصميم بواسطة' : 'Designed by'}{' '}
              <a
                href="https://www.worknestconnect.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#dc1414] hover:text-[#b91010] hover:underline transition-colors inline-block"
              >
                Worknest Connect
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[13px] font-semibold text-[#6b7280]">
            <Link href="/terms" className="hover:text-[#dc1414] transition-colors whitespace-nowrap">
              {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
            <span className="text-gray-300 select-none hidden sm:inline">•</span>
            <Link href="/privacy" className="hover:text-[#dc1414] transition-colors whitespace-nowrap">
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <span className="text-gray-300 select-none hidden sm:inline">•</span>
            <Link href="/policies" className="hover:text-[#dc1414] transition-colors whitespace-nowrap">
              {isArabic ? 'السياسات الرسمية' : 'Official Policies'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
