'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function RentalsTrustStrip() {
  const { isRtl } = useLanguage()

  const trustItems = [
    {
      id: 'delivery',
      title: isRtl ? 'إعداد سريع' : 'Quick Setup',
      subtitle: isRtl ? 'وتوصيل في قطر' : '& Delivery',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: 'tested',
      title: isRtl ? 'أجهزة مفحوصة' : 'Fully Tested',
      subtitle: isRtl ? 'وموثوقة 100%' : '& Reliable Devices',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: isRtl ? 'دعم فني واستبدال' : 'Technical Support',
      subtitle: isRtl ? 'مشمول بالكامل' : 'Included',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: 'upgrade',
      title: isRtl ? 'ترقية وتمديد' : 'Upgrade or Extend',
      subtitle: isRtl ? 'في أي وقت' : 'Anytime',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      id: 'duration',
      title: isRtl ? 'تأجير مرن' : 'Rent for Short',
      subtitle: isRtl ? 'قصير أو طويل الأجل' : 'or Long Term',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 8h10M7 11.5h6.5M13.5 8a3.5 3.5 0 0 1-3.5 3.5H7l7 6" />
        </svg>
      ),
    },
  ]

  return (
    <section aria-label="Rental Trust Highlights" className="mb-12">
      <div className="bg-[#fff5f5] border border-[#fecaca] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3 items-center divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#fee2e2]/80">
          {trustItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 ${
                idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-3 rtl:sm:pr-4 rtl:lg:pr-3' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#fecaca] flex items-center justify-center shadow-xs shrink-0">
                {item.icon}
              </div>
              <div className="leading-tight">
                <h3 className="text-[12.5px] sm:text-[13px] font-bold text-[#111827]">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-[11.5px] text-[#6b7280] mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
