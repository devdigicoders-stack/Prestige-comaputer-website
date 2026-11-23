'use client'

import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'

const PILLARS = [
  {
    id: 'gaming',
    title: 'Gaming Division',
    titleAr: 'قسم أجهزة الألعاب',
    subtitle: 'Extreme RTX Rigs, 240Hz+ Displays & Custom Builds in Doha',
    subtitleAr: 'تجميعات RTX احترافية، لابتوبات قوية وشاشات 240Hz بالدوحة',
    badge: 'PEAK FPS',
    badgeAr: 'أقصى أداء',
    link: '/products?category=gaming',
    borderColor: '#fca5a5',
    hoverBorderColor: '#dc1414',
    accentColor: '#dc1414',
    lightBg: '#fef2f2',
    iconBg: '#fee2e2',
    systemCount: '4 Systems in Doha',
    systemCountAr: '4 أجهزة بالدوحة',
    features: [
      'ASUS ROG Strix i9 & RTX 4070',
      'PCS Custom Liquid-Cooled 4070 Ti Super',
      'Lenovo Legion Pro 5 Gen 8',
      'LG UltraGear 27" 180Hz Nano IPS',
    ],
    featuresAr: [
      'أسوس روج ستريكس i9 مع RTX 4070',
      'تجميعة مائية احترافية RTX 4070 Ti Super',
      'لينوفو ليجن برو 5 الجيل الثامن',
      'شاشة إل جي التراجير 27 بوصة 180Hz',
    ],
  },
  {
    id: 'business',
    title: 'Business & Enterprise',
    titleAr: 'قطاع الأعمال والشركات',
    subtitle: 'Dell OptiPlex, ThinkPad, HP EliteBook & Corporate Workstations',
    subtitleAr: 'أجهزة مكتبية، محطات عمل ولابتوبات موثوقة للشركات والمؤسسات',
    badge: 'ISO CERTIFIED',
    badgeAr: 'معتمد رسمياً',
    link: '/products?category=business',
    borderColor: '#bfdbfe',
    hoverBorderColor: '#2563eb',
    accentColor: '#2563eb',
    lightBg: '#eff6ff',
    iconBg: '#dbeafe',
    systemCount: '4 Systems in Doha',
    systemCountAr: '4 أجهزة بالدوحة',
    features: [
      'Dell Inspiron 15 (2025) Core i5',
      'Apple MacBook Air M2 Liquid Retina',
      'HP EliteBook 840 G10 Core i7 vPro',
      'Dell OptiPlex 7410 All-in-One 24"',
    ],
    featuresAr: [
      'ديل انسبيرون 15 معالج Core i5',
      'أبل ماك بوك إير M2 شاشة ريتنا',
      'إتش بي إليت بوك 840 G10 معالج i7 vPro',
      'ديل اوبتيبلكس الكل في واحد 24 بوصة',
    ],
  },
  {
    id: 'pre-owned',
    title: 'Genuine Pre-Owned',
    titleAr: 'أجهزة مستعملة مضمونة',
    subtitle: 'Grade A+ Certified Off-Lease Devices with 1-Year Store Warranty',
    subtitleAr: 'فحص فني شامل، جودة أصلية Grade A+ وضمان معتمد لمدة سنة كاملة',
    badge: 'SAVE UP TO 60%',
    badgeAr: 'وفر حتى 60%',
    link: '/products?category=pre-owned',
    borderColor: '#a7f3d0',
    hoverBorderColor: '#059669',
    accentColor: '#059669',
    lightBg: '#ecfdf5',
    iconBg: '#d1fae5',
    systemCount: '4 Systems in Doha',
    systemCountAr: '4 أجهزة بالدوحة',
    features: [
      'Dell Latitude 7420 Core i7 (Grade A+)',
      'Lenovo ThinkPad T14 Gen 2 Ryzen 5 Pro',
      'Apple MacBook Pro 13" M1 Retina',
      'HP EliteDesk 800 G5 Mini PC',
    ],
    featuresAr: [
      'ديل لاتيتيود 7420 كور i7 فئة A+',
      'لينوفو ثينك باد T14 معالج رايزن 5 برو',
      'أبل ماك بوك برو 13 بوصة شريحة M1',
      'ميني كمبيوتر إتش بي إيليت ديسك 800 G5',
    ],
  },
]

export default function CorePillarsShowcase() {
  const { isArabic, isRtl } = useLanguage()

  return (
    <section className="py-7 sm:py-9 bg-white border-y border-[#f1f5f9]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#dc1414] text-[11px] font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dc1414] animate-pulse" />
              <span>{isArabic ? 'أقسام برستيج للكمبيوتر' : 'Prestige Core Divisions'}</span>
            </div>
            <h2 className="text-[20px] sm:text-[24px] font-extrabold text-[#111827] tracking-tight">
              {isArabic ? 'استكشف الفئات الرئيسية الثلاث' : 'Shop by Category Pillar'}
            </h2>
          </div>
          <p className="text-[12.5px] sm:text-[13px] text-[#6b7280] max-w-md">
            {isArabic
              ? 'أجهزة ألعاب احترافية، حلول مؤسسية متكاملة، وأجهزة مستعملة مضمونة بأفضل الأسعار في قطر.'
              : 'Authorized partner for Dell, HP & Lenovo. Showroom located at Al Mirqab Mall, Doha.'}
          </p>
        </div>

        {/* 3 Pillars Grid (Light Theme with 100% High-Contrast Text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.link}
              style={{
                backgroundColor: '#ffffff',
                borderColor: pillar.borderColor,
              }}
              className="group relative rounded-2xl p-6 bg-white text-[#111827] border shadow-[0_4px_18px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1"
            >
              {/* Background ambient radial glow (subtle top-right tint) */}
              <div
                className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none"
                style={{ backgroundColor: pillar.accentColor }}
              />

              <div className="relative z-10">
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-[10.5px] font-black uppercase tracking-wider shadow-xs"
                    style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                  >
                    {isArabic ? pillar.badgeAr : pillar.badge}
                  </span>
                  <span className="text-[11px] font-bold text-[#475569] bg-[#f1f5f9] px-2.5 py-0.5 rounded-full">
                    {isArabic ? pillar.systemCountAr : pillar.systemCount}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[20px] sm:text-[22px] font-black text-[#111827] transition-colors leading-tight tracking-tight">
                  {isArabic ? pillar.titleAr : pillar.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] text-[#4b5563] font-medium leading-snug">
                  {isArabic ? pillar.subtitleAr : pillar.subtitle}
                </p>

                {/* Bullet Points - 100% Dark Visible Text */}
                <ul className="mt-4 space-y-2.5 border-t border-gray-100 pt-3.5">
                  {(isArabic ? pillar.featuresAr : pillar.features).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-[12.5px] text-[#1f2937] font-semibold">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: pillar.iconBg, color: pillar.accentColor }}
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Bar */}
              <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[13px] font-bold relative z-10">
                <span className="text-[#111827] group-hover:underline transition-colors flex items-center gap-1.5">
                  <span>{isArabic ? 'تصفح جميع المعروضات' : 'Explore All Systems'}</span>
                  <span className="rtl:rotate-180 inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                  style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:rotate-180">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
