'use client'

import companyInfo from '../../data/companyInfo'
import { useLanguage } from '../../context/LanguageContext'

export default function ContactInfoCard() {
  const { isRtl } = useLanguage()

  const channels = [
    {
      id: 'address',
      title: isRtl ? 'المعرض والمركز الرئيسي' : 'Our Showroom & Office',
      detail: isRtl
        ? 'البرج 1، الطابق الثاني، مكتب 201، مول المرقاب، شارع المرقاب الجديد، الدوحة، دولة قطر'
        : companyInfo.location.fullAddress,
      btnText: isRtl ? 'الاتجاهات عبر الخريطة' : 'Get Directions',
      btnHref: companyInfo.location.googleMapsUrl,
      btnExternal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      btnIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      ),
    },
    {
      id: 'call',
      title: isRtl ? 'اتصل بنا مباشرة' : 'Call Us Directly',
      detail: (
        <bdi dir="ltr">{companyInfo.phones.primary} (Showroom &amp; B2B)</bdi>
      ),
      btnText: isRtl ? 'اتصل الآن' : 'Call Now',
      btnHref: companyInfo.phones.callUrl,
      btnExternal: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      btnIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 'email',
      title: isRtl ? 'راسلنا عبر البريد الإلكتروني' : 'Email Us',
      detail: `${companyInfo.emails.general} / ${companyInfo.emails.b2b}`,
      btnText: isRtl ? 'إرسال بريد' : 'Send Email',
      btnHref: `mailto:${companyInfo.emails.general}`,
      btnExternal: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      btnIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      title: isRtl ? 'المحادثة الفورية عبر الواتساب' : 'Official WhatsApp',
      detail: <bdi dir="ltr">{companyInfo.phones.whatsapp}</bdi>,
      btnText: isRtl ? 'محادثة واتساب' : 'Chat on WhatsApp',
      btnHref: companyInfo.phones.whatsappUrl,
      btnExternal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      btnIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e5e7eb] p-6 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-tight">
            {isRtl ? (
              <>
                معلومات <span className="text-[#dc1414]">الاتصال</span>
              </>
            ) : (
              <>
                Contact <span className="text-[#dc1414]">Information</span>
              </>
            )}
          </h2>
          <p className="mt-1 text-[12.5px] sm:text-[13px] text-[#6b7280]">
            {isRtl
              ? 'تواصل معنا مباشرة عبر أي من القنوات الرسمية التالية.'
              : 'Reach out to us through any of the following channels.'}
          </p>
        </div>
      </div>

      {/* 4 Channels Stack */}
      <div className="divide-y divide-[#f1f3f7]">
        {channels.map((ch) => (
          <div
            key={ch.id}
            className="py-4 first:pt-2 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            {/* Left Icon + Text */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#fff1f2] border border-[#fecdd3] flex items-center justify-center shrink-0 shadow-xs">
                {ch.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#111827] leading-snug">
                  {ch.title}
                </h3>
                <div className="mt-0.5 text-[12px] sm:text-[12.5px] text-[#4b5563] leading-relaxed max-w-[280px]">
                  {ch.detail}
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 self-start sm:self-center pl-13 sm:pl-0 rtl:pr-13 rtl:sm:pr-0">
              <a
                href={ch.btnHref}
                target={ch.btnExternal ? '_blank' : undefined}
                rel={ch.btnExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#fecaca] bg-[#fff5f5] hover:bg-[#dc1414] text-[#dc1414] hover:text-white text-[11.5px] font-bold transition-all shadow-xs cursor-pointer"
              >
                {ch.btnIcon}
                <span>{ch.btnText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
