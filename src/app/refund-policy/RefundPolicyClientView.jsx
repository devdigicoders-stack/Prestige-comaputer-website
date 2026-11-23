'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import LegalPageLayout from '../../components/legal/LegalPageLayout'
import { pcsPolicies } from '../../data/pcsPolicies'
import { getPolicyBySlug } from '../../services/policyApi'
import { useLanguage } from '../../context/LanguageContext'

export default function RefundPolicyClientView() {
  const { language, isRtl } = useLanguage()
  const [policy, setPolicy] = useState(null)

  useEffect(() => {
    let isMounted = true
    getPolicyBySlug('refund-policy')
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

  const title = policy?.title || 'Refund & Cancellation Policy'
  const titleAr = policy?.titleAr || 'سياسة الإرجاع والاستبدال واسترداد الأموال'
  const subtitle = policy?.subtitle || 'Clear and authoritative return windows, technical defect qualification, bank transfer refund timelines, and payment fee structures under the Prestige Guarantee.'
  const subtitleAr = policy?.subtitleAr || 'الشروط الرسمية المعتمدة لمهلات الإرجاع، فحص العيوب الفنية، مواعيد استرداد الأموال عبر التحويل البنكي، ورسوم معالجة نقاط البيع والبطاقات.'
  const badge = policy?.badge || 'Prestige Customer Protection'
  const badgeAr = policy?.badgeAr || 'حماية عملاء بريستيج المعتمدة'
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
              {isRtl ? 'وثيقة السياسات الرسمية الصادرة عن الإدارة' : 'Official Authorized PCS Policy Terms'}
            </h4>
            <p className="text-xs text-gray-600">
              {isRtl
                ? 'وفقاً للوثيقة الرسمية الصادرة عن شركة خدمات بريستيج للكمبيوتر (PCS الدوحة) والمطبقة في صالة عرض مول المرقاب.'
                : 'Formally codified per the ISO-certified policy document for Prestige Computer Services (PCS Doha).'}
            </p>
          </div>
        </div>
        <Link
          href="/policies"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b80808] text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
        >
          <span>{isRtl ? 'عرض الوثيقة الكاملة ثنائية اللغة' : 'View Full Bilingual Document'}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* SECTION 1: BRAND-NEW RETURNS & REFUNDS */}
      <div className="not-prose mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-6 bg-[#dc1414] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            {isRtl ? '1. سياسة إرجاع الأجهزة الجديدة كلياً (7 أيام للمنتجات المختومة)' : '1. Brand-New Devices Return Policy (7 Days Sealed)'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-block mb-2">
                {isRtl ? 'الإرجاع والاستبدال' : 'Returns & Exchanges'}
              </span>
              <h3 className="text-base font-bold text-gray-900">{bn.returns.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{bn.returns.text}</p>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
              <strong>{isRtl ? 'تنبيه هام:' : 'Strict Condition:'}</strong>{' '}
              {isRtl
                ? 'المنتجات المفتوحة أو التي تم تشغيلها غير قابلة للإرجاع نهائياً وتخضع لشروط ضمان الشركة المصنّعة.'
                : 'Opened or powered-on products are non-returnable and remain subject strictly to manufacturer warranty.'}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 inline-block mb-2">
                {isRtl ? 'معالجة استرداد الأموال' : 'Refund Processing'}
              </span>
              <h3 className="text-base font-bold text-gray-900">{bn.refunds.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{bn.refunds.text}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <p className="font-bold text-gray-900">{isRtl ? 'طريقة الاسترداد' : 'Method'}</p>
                <p className="text-gray-600 mt-0.5">{isRtl ? 'تحويل بنكي خلال يومي عمل' : 'Bank Transfer in 2 working days'}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <p className="font-bold text-gray-900">{isRtl ? 'رسوم نقاط البيع' : 'Card Fee'}</p>
                <p className="text-gray-600 mt-0.5">{isRtl ? 'خصم 2% لرسوم البطاقات' : '2% POS/Card processing fee'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: PRE-OWNED RETURNS & EXCHANGES */}
      <div className="not-prose mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-6 bg-[#dc1414] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            {isRtl ? '2. سياسة الأجهزة المستعملة المعتمدة (إرجاع 3 أيام / استبدال 15 يومًا)' : '2. Pre-Owned Devices (3-Day Return / 15-Day Exchange)'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900">{po.returns.title}</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">{po.returns.text}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc1414] flex items-center justify-center shrink-0 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900">{po.nonQualifying.title}</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">{po.nonQualifying.text}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900">{po.refunds.title}</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">{po.refunds.text}</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: SUMMARY CRITERIA TABLE */}
      <div className="not-prose mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-900">
            {isRtl ? 'جدول مقارنة سياسات الإرجاع والاستبدال' : 'Quick Reference: Returns & Exchanges Criteria'}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100/70 text-gray-700 font-bold border-b border-gray-200">
              <tr>
                <th className="p-3.5">{isRtl ? 'الفئة' : 'Category'}</th>
                <th className="p-3.5">{isRtl ? 'مهلة الإرجاع' : 'Return Window'}</th>
                <th className="p-3.5">{isRtl ? 'مهلة الاستبدال' : 'Exchange Window'}</th>
                <th className="p-3.5">{isRtl ? 'الشروط المؤهلة' : 'Qualifying Condition'}</th>
                <th className="p-3.5">{isRtl ? 'رسوم الدفع بالبطاقة' : 'Card Fee'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-600">
              <tr>
                <td className="p-3.5 font-bold text-gray-900">{isRtl ? 'أجهزة جديدة كلياً' : 'Brand-New Devices'}</td>
                <td className="p-3.5 text-emerald-600 font-bold">{isRtl ? '7 أيام' : '7 Days'}</td>
                <td className="p-3.5 text-emerald-600 font-bold">{isRtl ? '7 أيام' : '7 Days'}</td>
                <td className="p-3.5">{isRtl ? 'مختومة بالكرتونة الأصلية وغير مشغلة نهائياً' : 'Sealed & unopened with original receipt'}</td>
                <td className="p-3.5 font-semibold text-gray-900">2% POS Fee</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-gray-900">{isRtl ? 'أجهزة مستعملة معتمدة' : 'Pre-Owned Devices'}</td>
                <td className="p-3.5 text-emerald-600 font-bold">{isRtl ? '3 أيام' : '3 Days'}</td>
                <td className="p-3.5 text-emerald-600 font-bold">{isRtl ? '15 يوماً' : '15 Days'}</td>
                <td className="p-3.5">{isRtl ? 'عيوب فنية مشمولة بالضمان ومثبتة بفحص PCS' : 'Qualifying technical/warranty defects only'}</td>
                <td className="p-3.5 font-semibold text-gray-900">2% POS Fee</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-gray-900">{isRtl ? 'تغيير الرأي / ترقية' : 'Change of Mind / Upgrades'}</td>
                <td className="p-3.5 text-red-600 font-bold">{isRtl ? 'غير قابل للإرجاع' : 'Non-Returnable'}</td>
                <td className="p-3.5 text-red-600 font-bold">{isRtl ? 'غير قابل للاستبدال' : 'Non-Exchangeable'}</td>
                <td className="p-3.5">{isRtl ? 'لا تُعد عيوبًا في المنتج' : 'Not considered product defects'}</td>
                <td className="p-3.5">—</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-gray-900">{isRtl ? 'الملحقات والكابلات والشواحن' : 'Accessories & Chargers'}</td>
                <td className="p-3.5 text-red-600 font-bold">{isRtl ? 'غير قابلة للإرجاع' : 'Non-Returnable'}</td>
                <td className="p-3.5 text-red-600 font-bold">{isRtl ? 'مستثناة' : 'Excluded'}</td>
                <td className="p-3.5">{isRtl ? 'مستثناة من الضمان ما لم ينص خلاف ذلك' : 'Excluded from warranty unless on invoice'}</td>
                <td className="p-3.5">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: QC CONTACT & CLAIMS */}
      <div className="not-prose p-6 sm:p-8 rounded-3xl bg-gray-900 text-white shadow-lg">
        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white inline-block mb-3">
            {isRtl ? 'إدارة الجودة والاسترجاع' : 'QC & Refund Department'}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isRtl ? 'بدء طلب استرجاع أو استبدال' : 'Initiate a Return or Refund Request'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
            {isRtl
              ? 'تتم معالجة كافة طلبات الإرجاع والاسترداد بعد موافقة الإدارة العامة وقسم الجودة. يرجى مراسلة البريد أدناه مصحوباً برقم الفاتورة.'
              : 'All return and refund requests require HQ approval and technical QC inspection. Please submit your request directly to our Quality Control desk.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="mailto:qc@pcsdoha.net"
              className="px-5 py-3 rounded-xl bg-[#dc1414] hover:bg-[#b80808] text-white font-bold transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{isRtl ? 'مراسلة قسم الجودة (qc@pcsdoha.net)' : 'Email QC (qc@pcsdoha.net)'}</span>
            </a>

            <a
              href="https://wa.me/97466919155"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition-colors inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
              </svg>
              <span>{isRtl ? 'محادثة واتساب' : 'WhatsApp Support'}</span>
            </a>
          </div>
        </div>
      </div>
    </LegalPageLayout>
  )
}
