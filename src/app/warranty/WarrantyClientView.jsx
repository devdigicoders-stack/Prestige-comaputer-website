'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import LegalPageLayout from '../../components/legal/LegalPageLayout'
import { pcsPolicies } from '../../data/pcsPolicies'
import { getPolicyBySlug } from '../../services/policyApi'
import { useLanguage } from '../../context/LanguageContext'

export default function WarrantyClientView() {
  const { language, isRtl } = useLanguage()
  const [policy, setPolicy] = useState(null)

  useEffect(() => {
    let isMounted = true
    getPolicyBySlug('warranty')
      .then((data) => {
        if (isMounted && data) setPolicy(data)
      })
      .catch(() => {})
    return () => {
      isMounted = false
    }
  }, [])

  const { brandNew, preOwned, additionalTerms } = pcsPolicies

  const bn = language === 'ar' ? brandNew.ar : brandNew.en
  const po = language === 'ar' ? preOwned.ar : preOwned.en
  const add = language === 'ar' ? additionalTerms.ar : additionalTerms.en

  const title = policy?.title || 'Warranty & Guarantee Policy'
  const titleAr = policy?.titleAr || 'سياسة الضمان وخدمات ما بعد البيع'
  const subtitle = policy?.subtitle || 'Official Prestige Guarantee terms for brand-new and certified pre-owned computers, coverage details, exclusions, and QC service center procedures.'
  const subtitleAr = policy?.subtitleAr || 'الشروط الرسمية لضمان بريستيج للأجهزة الجديدة والمستعملة، تفاصيل التغطية، الاستثناءات، وإجراءات مركز خدمة وضبط الجودة في الدوحة.'
  const badge = policy?.badge || 'Prestige Guarantee'
  const badgeAr = policy?.badgeAr || 'ضمان بريستيج المعتمد'
  const lastUpdated = policy?.lastUpdated || 'Official PCS Policy 2026'

  return (
    <LegalPageLayout
      title={title}
      titleAr={titleAr}
      subtitle={subtitle}
      subtitleAr={subtitleAr}
      lastUpdated={lastUpdated}
      badge={badge}
      badgeAr={badgeAr}
    >
      {/* Notice Pill Linking to Master Bilingual Policy */}
      <div className="not-prose mb-8 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              {isRtl ? 'وثيقة السياسات الرسمية ثنائية اللغة' : 'Official Bilingual PCS Policy Document'}
            </h4>
            <p className="text-xs text-gray-600">
              {isRtl
                ? 'تم استخراج هذه البنود من الوثيقة المعتمدة الصادرة عن شركة خدمات بريستيج للكمبيوتر (PCS الدوحة).'
                : 'Directly sourced from the official ISO-certified policy document issued by Prestige Computer Services.'}
            </p>
          </div>
        </div>
        <Link
          href="/policies"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b80808] text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
        >
          <span>{isRtl ? 'عرض الوثيقة الكاملة جنبًا إلى جنب' : 'View Full Bilingual Document'}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* SECTION 1: BRAND-NEW DEVICES */}
      <div className="not-prose mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-6 bg-[#dc1414] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            {isRtl ? '1. الأجهزة الجديدة كليًا – الضمان الرسمي' : '1. Brand-New Devices – Manufacturer Warranty'}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc1414] flex items-center justify-center shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">{bn.warranty.title}</h3>
              <p className="mt-1 text-sm text-gray-700 leading-relaxed">{bn.warranty.text}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-xs">
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-900">{isRtl ? 'مدة الضمان' : 'Warranty Duration'}</p>
              <p className="text-gray-600 mt-0.5">{isRtl ? '12 شهرًا وفقًا لما هو مذكور في الفاتورة' : 'Typically 12 Months as stated on invoice'}</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-900">{isRtl ? 'مراكز الخدمة' : 'Service Coordination'}</p>
              <p className="text-gray-600 mt-0.5">{isRtl ? 'مساعدة في التقديم عبر مراكز معتمدة' : 'Assisted claims via OEM authorized centres'}</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <p className="font-bold text-gray-900">{isRtl ? 'الاستلام والتوصيل' : 'Logistics'}</p>
              <p className="text-gray-600 mt-0.5">{isRtl ? 'مسؤولية العميل لدى مركز خدمة PCS بالمرقاب' : 'Customer responsibility to/from Al-Mirqab Mall'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: PRE-OWNED DEVICES */}
      <div className="not-prose mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-6 bg-[#dc1414] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            {isRtl ? '2. الأجهزة المستعملة – ضمان بريستيج المحدود' : '2. Pre-Owned Devices – Prestige Limited Guarantee'}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">{po.warranty.title}</h3>
              <p className="mt-1 text-sm text-gray-700 leading-relaxed">{po.warranty.text}</p>
            </div>
          </div>

          {/* Highlight: 2-Hour Battery Guarantee */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
                <line x1="22" y1="11" x2="22" y2="13" />
                <line x1="6" y1="11" x2="6" y2="13" />
                <line x1="10" y1="11" x2="10" y2="13" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-950">
                {isRtl ? 'ضمان ساعتين كحد أدنى لبطارية اللابتوب' : 'Minimum 2-Hour Laptop Battery Backup Guarantee'}
              </p>
              <p className="text-xs text-emerald-800 mt-0.5">
                {isRtl
                  ? 'يضمن فحص الجودة لدينا مدة تشغيل لا تقل عن ساعتين وقت استلام الجهاز تحت ظروف التشغيل العادية.'
                  : 'PCS Quality Control guarantees at least 2 hours of battery backup at the time of purchase under standard operating workloads.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: COMPREHENSIVE WARRANTY EXCLUSIONS */}
      <div className="not-prose mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-6 bg-[#dc1414] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            {isRtl ? '3. الشروط الإضافية واستثناءات الضمان (لكافة الأجهزة)' : '3. Additional Terms & Warranty Exclusions (All Devices)'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {add.items.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-xs flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[#dc1414] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.label}</h4>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: SERVICE HOURS & REPAIR TIMELINE */}
      <div className="not-prose mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-950">
              {isRtl ? 'ساعات العمل الرسمية لقسم الضمان' : 'Official Warranty Service Hours'}
            </h3>
            <p className="text-xs text-amber-900 mt-1 leading-relaxed">
              {isRtl
                ? 'تتم معالجة مطالبات الضمان والاستبدال حصرياً من الأحد إلى الخميس، من الساعة 10:00 صباحًا حتى 5:00 مساءً فقط.'
                : 'Warranty claims and hardware replacements are processed Sunday through Thursday, 10:00 AM – 5:00 PM only.'}
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-blue-950">
              {isRtl ? 'المدة الزمنية لإصلاحات الضمان' : 'Warranty Repair Turnaround'}
            </h3>
            <p className="text-xs text-blue-900 mt-1 leading-relaxed">
              {isRtl
                ? 'قد تستغرق إصلاحات الضمان من 21 إلى 42 يوم عمل، وذلك تبعاً لتوافر قطع الغيار الأصلية وإجراءات مركز الصيانة.'
                : 'Warranty repairs take between 21 to 42 business days, subject to parts availability and authorized testing workflows.'}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 5: QC CLAIMS & SUPPORT CONTACT */}
      <div className="not-prose p-6 sm:p-8 rounded-3xl bg-gray-900 text-white shadow-lg">
        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white inline-block mb-3">
            {isRtl ? 'قسم الجودة والمطالبات' : 'Quality Control & Claims Department'}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isRtl ? 'تقديم مطالبة الضمان أو الاستفسار' : 'Submit a Warranty Claim or Technical Inquiry'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
            {isRtl
              ? 'يرجى إرسال تفاصيل الفاتورة، الرقم التسلسلي، وصور/فيديو للعطل إلى البريد الإلكتروني المعتمد لسرعة الفحص والمتابعة.'
              : 'Please prepare your original invoice, PCS device serial number, and a brief description/video of the issue for fast dispatch.'}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <a
              href="mailto:qc@pcsdoha.net"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center gap-2.5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-400" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <p className="text-[11px] text-gray-400">{isRtl ? 'البريد الإلكتروني للضمان' : 'Direct Email'}</p>
                <p className="font-bold text-white">qc@pcsdoha.net</p>
              </div>
            </a>

            <a
              href="tel:+97441453868"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center gap-2.5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p className="text-[11px] text-gray-400">{isRtl ? 'هاتف المركز' : 'Phone Desk'}</p>
                <p className="font-bold text-white">+974 4145 3868</p>
              </div>
            </a>

            <a
              href="https://wa.me/97466919155"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center gap-2.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
              </svg>
              <div>
                <p className="text-[11px] text-gray-400">{isRtl ? 'واتساب الدعم' : 'WhatsApp Desk'}</p>
                <p className="font-bold text-white">+974 6691 9155</p>
              </div>
            </a>
          </div>

          <p className="text-gray-400 text-xs mt-4">
            <strong>{isRtl ? 'المقر:' : 'HQ Address:'}</strong> {add.departmentContact.location}
          </p>
        </div>
      </div>
    </LegalPageLayout>
  )
}
