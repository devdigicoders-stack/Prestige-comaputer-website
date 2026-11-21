'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function ContactHeroBanner() {
  const { isRtl } = useLanguage()

  return (
    <section
      aria-label="Contact Us Hero Banner"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#090204] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] mb-8 sm:mb-10 min-h-[260px] sm:min-h-[300px] lg:min-h-[330px] flex items-stretch"
    >
      {/* Background Hero Banner Image contct.png */}
      <img
        src="/banner/contct.png"
        alt="Contact Us — Prestige Computers Support & Inquiries"
        className="absolute inset-0 w-full h-full object-cover object-right sm:object-center pointer-events-none"
      />

      {/* Dark Gradient Overlay for Crisp Text Readability */}
      <div className={`absolute inset-0 ${isRtl ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#070103]/95 via-[#070103]/80 sm:via-[#070103]/50 to-transparent pointer-events-none`} />

      {/* Content */}
      <div className="relative z-10 w-full sm:w-[60%] lg:w-[48%] flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-5 sm:w-6 h-[2.5px] bg-[#dc1414]" />
          <span className="text-[11px] sm:text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.14em]">
            {isRtl ? 'ابقَ على تواصل' : 'Get In Touch'}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-bold italic tracking-[-0.03em] leading-[1.08] text-white">
          {isRtl ? (
            <>
              تواصل <span className="text-[#e11414] drop-shadow-[0_2px_14px_rgba(225,20,20,0.45)]">معنا</span>
            </>
          ) : (
            <>
              Contact <span className="text-[#e11414] drop-shadow-[0_2px_14px_rgba(225,20,20,0.45)]">Us</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-3.5 text-[13.5px] sm:text-[15px] lg:text-[15.5px] text-[#e5e7eb] font-normal leading-relaxed max-w-[420px]">
          {isRtl
            ? 'هل لديك أي استفسار، ترغب في عرض أسعار، أو استئجار جهاز في قطر؟ نحن هنا لمساعدتك دائماً!'
            : "Have questions, need a quote, or want to rent a device? We're here to help you!"}
        </p>
      </div>
    </section>
  )
}
