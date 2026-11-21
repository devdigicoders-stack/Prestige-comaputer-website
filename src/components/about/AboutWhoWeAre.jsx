'use client'

import Link from 'next/link'
import companyInfo from '../../data/companyInfo'
import { useLanguage } from '../../context/LanguageContext'

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function AboutWhoWeAre() {
  const { isRtl } = useLanguage()

  return (
    <section aria-label="Who We Are" className="mb-14 sm:mb-18">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 h-[2px] bg-[#dc1414]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold text-[#dc1414] uppercase tracking-[0.14em]">
              {isRtl ? `من نحن • تأسست عام ${companyInfo.established}` : `Who We Are • Established ${companyInfo.established}`}
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111827] tracking-[-0.02em] leading-tight">
            {isRtl ? (
              <>
                بريستيج للكمبيوتر <span className="text-[#dc1414]">(خدمات بريستيج للكمبيوتر ش.ذ.م.م)</span>
              </>
            ) : (
              <>
                Prestige Computers <span className="text-[#dc1414]">({companyInfo.publicName})</span>
              </>
            )}
          </h2>

          <div className="mt-4 sm:mt-5 space-y-3.5 text-[13.5px] sm:text-[14.5px] text-[#4b5563] leading-relaxed">
            {isRtl ? (
              <>
                <p>
                  شركة Prestige Computer Services (PCS) هي شركة حاصلة على شهادة ISO، تأسست محليًا في دولة قطر منذ عام 2020، وتُعد من أبرز موزعي منتجات تكنولوجيا المعلومات الجديدة والمستعملة المعتمدة.
                </p>
                <p>
                  نتعامل مع كبرى العلامات التجارية العالمية، بما في ذلك Dell و HP و Lenovo و MSI و Acer و ASUS و Apple. ومع مخزون جاهز يضم أكثر من 1,200 جهاز كمبيوتر، تُعد PCS وجهتك المثالية للتسوق بأفضل قيمة في قطر لشراء واستئجار أجهزة الكمبيوتر المحمولة والمكتبية ومحطات العمل والملحقات.
                </p>
                <p>
                  تخضع جميع أجهزتنا لاختبارات فحص دقيقة في مركز الجودة التابع لنا في مول المرقاب بالدوحة، وجميعها مدعومة بنسبة 100% بضمان Prestige المعتمد، مع دعم فني متكامل وخدمة عملاء استثنائية.
                </p>
              </>
            ) : (
              <>
                <p>{companyInfo.about.paragraph1}</p>
                <p>{companyInfo.about.paragraph2}</p>
                <p>{companyInfo.about.paragraph3}</p>
              </>
            )}
          </div>

          {/* Quick Info Badges */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px]">
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[#dc1414] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{isRtl ? 'معتمدة بشهادة ISO في قطر' : 'ISO-Certified in Qatar'}</p>
                <p className="text-gray-600 text-[11.5px]">{isRtl ? 'تأسست محلياً منذ عام 2020' : 'Locally Incorporated Since 2020'}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{isRtl ? '+1,200 جهاز كمبيوتر جاهز' : '1,200+ Computers Ready'}</p>
                <p className="text-gray-600 text-[11.5px]">{isRtl ? 'جديدة ومستعملة معتمدة' : 'Brand-New & Certified Pre-Owned'}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[#dc1414] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{isRtl ? 'صالة العرض ومركز الجودة' : 'Showroom & QC Centre'}</p>
                <p className="text-gray-600 text-[11.5px]">{isRtl ? 'مول المرقاب، شارع النصر، الدوحة' : companyInfo.location.shortAddress}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{isRtl ? 'واتساب مباشر' : 'Direct WhatsApp'}</p>
                <a
                  href={companyInfo.phones.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 text-[11.5px] font-medium"
                >
                  <bdi dir="ltr">{companyInfo.phones.whatsapp}</bdi>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13.5px] font-semibold shadow-[0_6px_20px_rgba(220,16,16,0.35)] transition-all cursor-pointer"
            >
              <span>{isRtl ? 'استكشف صالة العرض' : 'Explore Our Showroom'}</span>
              <ArrowRightIcon className="rtl:rotate-180" />
            </Link>
            <a
              href={companyInfo.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-300 hover:border-red-500 hover:text-red-600 text-gray-700 text-[13.5px] font-semibold transition-all shadow-xs cursor-pointer"
            >
              <span>{isRtl ? 'عرض على خرائط Google' : 'View On Google Maps'}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#dc1414]" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Storefront Exterior Image */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e5e7eb] shadow-[0_10px_30px_rgba(16,24,40,0.08)] group bg-[#111827]">
            <img
              src="/banner/storefront.png"
              alt="Prestige Computers Showroom Al-Mirqab Mall Doha"
              className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold">{isRtl ? 'صالة العرض الرئيسية' : 'Flagship Showroom'}</p>
                <p className="text-gray-300 text-[11px]">{isRtl ? 'البرج 1، الطابق الثاني، مكتب 201، مول المرقاب، شارع المرقاب الجديد، الدوحة، قطر' : companyInfo.location.fullAddress}</p>
              </div>
              <span className="px-2.5 py-1 bg-red-600 rounded-md text-[10.5px] font-bold shrink-0">{isRtl ? 'مفتوح يومياً' : 'Open Daily'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
