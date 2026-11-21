'use client'

import { useLanguage } from '../../context/LanguageContext'

function TargetIcon({ className = 'w-7 h-7' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function EyeIcon({ className = 'w-7 h-7' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default function AboutMissionVision() {
  const { isRtl } = useLanguage()

  return (
    <section aria-label="Our Mission and Vision" className="mb-14 sm:mb-18">
      {/* Centered Heading with Red Lines */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 text-center">
        <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]" />
        <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#111827] tracking-[-0.02em]">
          {isRtl ? (
            <>
              رسالتنا <span className="text-[#dc1414]">ورؤيتنا</span>
            </>
          ) : (
            <>
              Our <span className="text-[#dc1414]">Mission</span> &amp; Vision
            </>
          )}
        </h2>
        <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: Our Mission */}
        <div className="relative overflow-hidden bg-white rounded-3xl border border-[#eceff4] p-7 sm:p-9 shadow-[0_4px_20px_rgba(16,24,40,0.04)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.08)] transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] border border-[#fee2e2] flex items-center justify-center mb-5">
              <TargetIcon className="w-7 h-7 text-[#dc1414]" />
            </div>

            <h3 className="text-[20px] sm:text-[23px] font-bold text-[#111827] leading-tight">
              {isRtl ? (
                <>
                  رسالتنا <span className="text-[#dc1414]">الأساسية</span>
                </>
              ) : (
                <>
                  Our <span className="text-[#dc1414]">Mission</span>
                </>
              )}
            </h3>

            <p className="mt-3 text-[14px] sm:text-[15px] text-[#4b5563] leading-relaxed">
              {isRtl
                ? 'إتاحة أحدث تقنيات الكمبيوتر وأكثرها موثوقية للجميع بأفضل قيمة، مع التوجيه المهني والدعم الفني المتميز والضمان الحقيقي.'
                : 'To make the latest and most reliable computing technology accessible to everyone with the best value, guidance and support.'}
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#e11414] to-[#990a0d]" />
          </div>
        </div>

        {/* Card 2: Our Vision */}
        <div className="relative overflow-hidden bg-white rounded-3xl border border-[#eceff4] p-7 sm:p-9 shadow-[0_4px_20px_rgba(16,24,40,0.04)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.08)] transition-all flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] border border-[#fee2e2] flex items-center justify-center mb-5">
              <EyeIcon className="w-7 h-7 text-[#dc1414]" />
            </div>

            <h3 className="text-[20px] sm:text-[23px] font-bold text-[#111827] leading-tight">
              {isRtl ? (
                <>
                  رؤيتنا <span className="text-[#dc1414]">المستقبلية</span>
                </>
              ) : (
                <>
                  Our <span className="text-[#dc1414]">Vision</span>
                </>
              )}
            </h3>

            <p className="mt-3 text-[14px] sm:text-[15px] text-[#4b5563] leading-relaxed">
              {isRtl
                ? 'أن نكون الوجهة الرائدة والأكثر ثقة لبيع وتأجير أجهزة تكنولوجيا المعلومات في قطر، والمعروفة بجودتها الفائقة وخدماتها الاحترافية ورضا العملاء التام.'
                : 'To be a leading and most trusted IT retailer and rental partner, known for quality, service and customer satisfaction.'}
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#e11414] to-[#990a0d]" />
          </div>
        </div>
      </div>
    </section>
  )
}
