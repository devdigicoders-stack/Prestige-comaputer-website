'use client'

import { useState } from 'react'
import Link from 'next/link'
import LegalPageLayout from '../../components/legal/LegalPageLayout'
import { pcsPolicies } from '../../data/pcsPolicies'
import { useLanguage } from '../../context/LanguageContext'

export default function PoliciesClientView() {
  const { language, isRtl } = useLanguage()
  const [viewMode, setViewMode] = useState('auto') // 'auto' (follows language), 'en', 'ar', 'bilingual'

  const effectiveLang = viewMode === 'auto' ? language : viewMode === 'bilingual' ? 'en' : viewMode
  const isBilingual = viewMode === 'bilingual'

  const { aboutUs, brandNew, preOwned, additionalTerms } = pcsPolicies

  return (
    <LegalPageLayout
      title="Official PCS Policies & Terms"
      titleAr="وثيقة سياسات وشروط بريستيج الرسمية"
      subtitle="Complete warranty coverage, return windows, refund procedures, and device terms under the Prestige Guarantee."
      subtitleAr="دليل شامل لضمان بريستيج، شروط الإرجاع والاستبدال، إجراءات استرداد الأموال، ومطالبات الصيانة المعتمدة في قطر."
      badge="ISO-Certified Policy Document"
      badgeAr="وثيقة سياسات معتمدة بموجب ISO"
      lastUpdated="Updated Official Document 2026"
    >
      {/* View Mode Switcher Pills */}
      <div className="not-prose mb-8 p-3 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#111827]">
            {isRtl ? 'عرض الوثيقة:' : 'Document View:'}
          </span>
          <span className="text-xs text-[#6b7280]">
            {isRtl ? 'اختر اللغة المناسبة لقراءة البنود' : 'Select language mode for policy terms'}
          </span>
        </div>

        <div className="inline-flex items-center rounded-xl bg-white p-1 border border-[#d1d5db] shadow-xs text-xs font-bold">
          <button
            type="button"
            onClick={() => setViewMode('auto')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'auto'
                ? 'bg-[#111827] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-[#111827]'
            }`}
          >
            {isRtl ? 'تلقائي' : 'Auto (Synced)'}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('en')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'en'
                ? 'bg-[#dc1414] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-[#111827]'
            }`}
          >
            English Only
          </button>
          <button
            type="button"
            onClick={() => setViewMode('ar')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-arabic ${
              viewMode === 'ar'
                ? 'bg-[#dc1414] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-[#111827]'
            }`}
          >
            العربية فقط
          </button>
          <button
            type="button"
            onClick={() => setViewMode('bilingual')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'bilingual'
                ? 'bg-[#dc1414] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-[#111827]'
            }`}
          >
            Side-by-Side (Bilingual)
          </button>
        </div>
      </div>

      {/* SECTION 1: ABOUT US */}
      {isBilingual ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-10 pb-8 border-b border-[#e5e7eb]">
          <div className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#fee2e2] text-[#dc1414]">
              About Us (English)
            </span>
            <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-3">
              {aboutUs.en.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              {aboutUs.en.content}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs text-right font-arabic" dir="rtl">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#fee2e2] text-[#dc1414]">
              نبذة عنا (العربية)
            </span>
            <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-3">
              {aboutUs.ar.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              {aboutUs.ar.content}
            </p>
          </div>
        </div>
      ) : (
        <div className="mb-10 pb-8 border-b border-[#e5e7eb]">
          <h2>{aboutUs[effectiveLang].title}</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#374151]">
            {aboutUs[effectiveLang].content}
          </p>
          <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {aboutUs[effectiveLang].highlights.map((h, i) => (
              <div key={i} className="p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <strong className="text-xs font-bold text-[#111827] block">{h.label}</strong>
                <span className="text-[11px] text-[#6b7280] block mt-0.5 leading-snug">{h.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: BRAND-NEW DEVICES */}
      {isBilingual ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-10 pb-8 border-b border-[#e5e7eb]">
          <div className="p-6 rounded-2xl bg-[#fcfcfd] border border-[#e5e7eb]">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#dbeafe] text-[#1d4ed8]">
              {brandNew.en.badge}
            </span>
            <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-4">
              {brandNew.en.title}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#374151]">
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Warranty:</strong>
                <p>{brandNew.en.warranty.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Returns &amp; Exchanges:</strong>
                <p>{brandNew.en.returns.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Refunds:</strong>
                <p>{brandNew.en.refunds.text}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#fcfcfd] border border-[#e5e7eb] text-right font-arabic" dir="rtl">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#dbeafe] text-[#1d4ed8]">
              {brandNew.ar.badge}
            </span>
            <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-4">
              {brandNew.ar.title}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#374151]">
              <div>
                <strong className="font-bold text-[#111827] block mb-1">الضمان:</strong>
                <p>{brandNew.ar.warranty.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">الإرجاع والاستبدال:</strong>
                <p>{brandNew.ar.returns.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">استرداد الأموال:</strong>
                <p>{brandNew.ar.refunds.text}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10 pb-8 border-b border-[#e5e7eb]">
          <h2>{brandNew[effectiveLang].title}</h2>
          <h3>{brandNew[effectiveLang].warranty.title}</h3>
          <p>{brandNew[effectiveLang].warranty.text}</p>
          <h3>{brandNew[effectiveLang].returns.title}</h3>
          <p>{brandNew[effectiveLang].returns.text}</p>
          <h3>{brandNew[effectiveLang].refunds.title}</h3>
          <p>{brandNew[effectiveLang].refunds.text}</p>
        </div>
      )}

      {/* SECTION 3: PRE-OWNED DEVICES */}
      {isBilingual ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-10 pb-8 border-b border-[#e5e7eb]">
          <div className="p-6 rounded-2xl bg-[#fcfcfd] border border-[#e5e7eb]">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#fef3c7] text-[#92400e]">
              {preOwned.en.badge}
            </span>
            <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-4">
              {preOwned.en.title}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#374151]">
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Warranty &amp; Battery:</strong>
                <p>{preOwned.en.warranty.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Returns (3 Days) &amp; Exchanges (15 Days):</strong>
                <p>{preOwned.en.returns.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Non-Qualifying Returns:</strong>
                <p>{preOwned.en.nonQualifying.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">Refunds:</strong>
                <p>{preOwned.en.refunds.text}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#fcfcfd] border border-[#e5e7eb] text-right font-arabic" dir="rtl">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#fef3c7] text-[#92400e]">
              {preOwned.ar.badge}
            </span>
            <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-4">
              {preOwned.ar.title}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#374151]">
              <div>
                <strong className="font-bold text-[#111827] block mb-1">الضمان والبطارية:</strong>
                <p>{preOwned.ar.warranty.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">الإرجاع (3 أيام) والاستبدال (15 يومًا):</strong>
                <p>{preOwned.ar.returns.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">الحالات غير المؤهلة للإرجاع:</strong>
                <p>{preOwned.ar.nonQualifying.text}</p>
              </div>
              <div>
                <strong className="font-bold text-[#111827] block mb-1">استرداد الأموال:</strong>
                <p>{preOwned.ar.refunds.text}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10 pb-8 border-b border-[#e5e7eb]">
          <h2>{preOwned[effectiveLang].title}</h2>
          <h3>{preOwned[effectiveLang].warranty.title}</h3>
          <p>{preOwned[effectiveLang].warranty.text}</p>
          <h3>{preOwned[effectiveLang].returns.title}</h3>
          <p>{preOwned[effectiveLang].returns.text}</p>
          <h3>{preOwned[effectiveLang].nonQualifying.title}</h3>
          <p>{preOwned[effectiveLang].nonQualifying.text}</p>
          <h3>{preOwned[effectiveLang].refunds.title}</h3>
          <p>{preOwned[effectiveLang].refunds.text}</p>
        </div>
      )}

      {/* SECTION 4: ADDITIONAL TERMS - ALL DEVICES */}
      <div className="mb-10 pb-8 border-b border-[#e5e7eb]">
        <h2>{additionalTerms[effectiveLang].title}</h2>
        <ul>
          {additionalTerms[effectiveLang].items.map((item, idx) => (
            <li key={idx}>
              <strong>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* SECTION 5: CONTACT & CUSTOMER ACKNOWLEDGMENT BOX */}
      <div className="not-prose p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1f2937] text-white shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#dc1414] text-white">
              {effectiveLang === 'ar' ? 'إجراءات المطالبات والخدمة' : 'Quality Control & Claims Desk'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-2">
              {additionalTerms[effectiveLang].departmentContact.label}
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] mt-1">
              {additionalTerms[effectiveLang].departmentContact.location}
            </p>
          </div>

          <div className="space-y-1.5 text-xs text-[#cbd5e1] shrink-0">
            <p>
              Email:{' '}
              <a href="mailto:qc@pcsdoha.net" className="text-[#fca5a5] font-bold hover:underline">
                qc@pcsdoha.net
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+97441453868" className="text-[#fca5a5] font-bold hover:underline">
                +974 4145 3868
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a
                href="https://wa.me/97466919155"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fca5a5] font-bold hover:underline"
              >
                +974 6691 9155
              </a>
            </p>
            <p className="text-[11px] text-amber-300 font-semibold">
              {additionalTerms[effectiveLang].departmentContact.hours}
            </p>
          </div>
        </div>

        {/* Customer Agreement Box */}
        <div className="mt-6 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400 shrink-0">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-semibold text-white">
              {effectiveLang === 'ar'
                ? 'لقد قرأت وفهمت الشروط المذكورة أعلاه وأوافق عليها.'
                : 'I have read and understood the above conditions and agree to them.'}
            </span>
          </div>

          <span className="text-[11px] text-[#9ca3af]">
            Prestige Computer Services (PCS Doha) • Document Ref: PCS-POL-2026-QA
          </span>
        </div>
      </div>
    </LegalPageLayout>
  )
}
