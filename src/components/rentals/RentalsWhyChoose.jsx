'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function RentalsWhyChoose() {
  const { isRtl } = useLanguage()

  const cards = [
    {
      id: 'cost',
      title: isRtl ? 'تكلفة أقل' : 'Lower Cost',
      subtitle: isRtl ? 'بكثير من الشراء' : 'than Buying',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      id: 'duration',
      title: isRtl ? 'مدة إيجار' : 'Flexible',
      subtitle: isRtl ? 'مرنة وقابلة للتجديد' : 'Rental Duration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      ),
    },
    {
      id: 'devices',
      title: isRtl ? 'أحدث الأجهزة' : 'Latest &',
      subtitle: isRtl ? 'من كبرى الماركات' : 'Branded Devices',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: isRtl ? 'دعم فني وصيانة' : 'Setup &',
      subtitle: isRtl ? 'متواصلة وشاملة' : 'Maintenance Support',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: 'secure',
      title: isRtl ? 'تأجير موثوق' : 'Reliable &',
      subtitle: isRtl ? 'وآمن بنسبة 100%' : 'Secure Rental',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <section aria-label="Why Rent from Prestige Computers" className="mb-14 sm:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Intro (col-span-4) */}
        <div className="lg:col-span-4">
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#111827] leading-tight">
            {isRtl ? (
              <>
                لماذا تستأجر من <span className="text-[#dc1414]">بريستيج للكمبيوتر؟</span>
              </>
            ) : (
              <>
                Why Rent from <span className="text-[#dc1414]">Prestige Computers?</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-[13.5px] sm:text-[14px] text-[#4b5563] leading-relaxed">
            {isRtl
              ? 'طريقة ذكية واقتصادية ومرنة للحصول على أحدث التقنيات دون تكاليف شراء أولية باهظة في دولة قطر.'
              : 'A smart, affordable and flexible way to get the latest technology without a heavy upfront investment.'}
          </p>
        </div>

        {/* Right 5 Blush Pink Cards (col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#fff5f5] border border-[#fecdd3] rounded-2xl p-4 flex flex-col items-center text-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#fecdd3] flex items-center justify-center mb-2.5 shadow-xs">
                {card.icon}
              </div>
              <h3 className="text-[12.5px] font-bold text-[#111827] leading-snug">
                {card.title}
              </h3>
              <p className="text-[11.5px] font-semibold text-[#4b5563] leading-snug">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
