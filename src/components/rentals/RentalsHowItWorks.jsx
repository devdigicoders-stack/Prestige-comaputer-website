'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function RentalsHowItWorks() {
  const { isRtl } = useLanguage()

  const steps = [
    {
      id: 'step-1',
      title: isRtl ? 'اختر الجهاز المناسب' : 'Choose a Device',
      desc: isRtl
        ? 'اختر اللابتوب أو الكمبيوتر أو محطة العمل المناسبة لاحتياجاتك.'
        : 'Select the right laptop, desktop or workstation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      id: 'step-2',
      title: isRtl ? 'حدد خطة الإيجار' : 'Select Rental Plan',
      desc: isRtl
        ? 'اختر مدة مرنة مناسبة (أسبوعي، شهري أو سنوي).'
        : 'Pick a flexible duration (daily, weekly or monthly).',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: 'step-3',
      title: isRtl ? 'التوصيل والإعداد' : 'Get it Delivered',
      desc: isRtl
        ? 'نقوم بالتوصيل والإعداد الفوري في موقعك داخل دولة قطر.'
        : 'We deliver and set it up at your location.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: 'step-4',
      title: isRtl ? 'استخدم أو مدد براحة' : 'Use & Return',
      desc: isRtl
        ? 'استخدم الجهاز بأمان تام مع إمكانية التمديد أو الترقية بسهولة.'
        : 'Use without worry and return or extend easily.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      ),
    },
  ]

  return (
    <section aria-label="How Rent On Works" className="mb-14 sm:mb-16">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111827] flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
          <span>
            {isRtl ? (
              <>
                كيف تعمل خدمة <span className="text-[#dc1414]">التأجير؟</span>
              </>
            ) : (
              <>
                How <span className="text-[#dc1414]">Rent On</span> Works?
              </>
            )}
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
        </h2>
      </div>

      {/* 4 Steps Row with Connecting Arrows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((st, idx) => (
          <div key={st.id} className="relative flex flex-col items-center text-center px-4">
            {/* Step Icon Badge */}
            <div className="w-16 h-16 rounded-full bg-[#fff1f2] border-2 border-[#fecdd3] flex items-center justify-center shadow-xs mb-3.5 transition-transform duration-200 hover:scale-105">
              {st.icon}
            </div>

            {/* Title */}
            <h3 className="text-[15px] sm:text-[16px] font-bold text-[#111827] leading-snug">
              {st.title}
            </h3>

            {/* Description */}
            <p className="mt-1 text-[12.5px] sm:text-[13px] text-[#6b7280] leading-relaxed max-w-[210px]">
              {st.desc}
            </p>

            {/* Connecting Arrow for larger screens */}
            {idx < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden lg:flex absolute top-7 -right-3 rtl:-left-3 rtl:right-auto text-[#dc1414] font-bold z-10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
