'use client'

import { useEffect, useState } from 'react'
import LegalPageLayout from './LegalPageLayout'
import { getPolicyBySlug } from '../../services/policyApi'
import { useLanguage } from '../../context/LanguageContext'

export default function DynamicLegalPage({
  slug,
  fallbackTitle,
  fallbackTitleAr,
  fallbackSubtitle,
  fallbackSubtitleAr,
  fallbackBadge,
  fallbackBadgeAr,
  fallbackLastUpdated = 'Updated November 2026',
  children,
}) {
  const { isRtl, language } = useLanguage()
  const [policy, setPolicy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [openFaqIdx, setOpenFaqIdx] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function loadPolicy() {
      try {
        setLoading(true)
        const data = await getPolicyBySlug(slug)
        if (isMounted && data) {
          setPolicy(data)
        }
      } catch (err) {
        console.warn(`DynamicLegalPage fetch error for '${slug}':`, err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    if (slug) {
      loadPolicy()
    }
    return () => {
      isMounted = false
    }
  }, [slug])

  // Active resolved values: API policy first, fallback second
  const displayTitle = isRtl
    ? policy?.titleAr || fallbackTitleAr || policy?.title || fallbackTitle
    : policy?.title || fallbackTitle
  const displayTitleAr = policy?.titleAr || fallbackTitleAr

  const displaySubtitle = isRtl
    ? policy?.subtitleAr || fallbackSubtitleAr || policy?.subtitle || fallbackSubtitle
    : policy?.subtitle || fallbackSubtitle
  const displaySubtitleAr = policy?.subtitleAr || fallbackSubtitleAr

  const displayBadge = isRtl
    ? policy?.badgeAr || fallbackBadgeAr || policy?.badge || fallbackBadge
    : policy?.badge || fallbackBadge
  const displayBadgeAr = policy?.badgeAr || fallbackBadgeAr

  const displayLastUpdated = policy?.lastUpdated || fallbackLastUpdated

  const hasDynamicSections = Boolean(policy?.sections && policy.sections.length > 0)
  const hasDynamicHighlights = Boolean(policy?.highlights && policy.highlights.length > 0)
  const hasDynamicFaqs = Boolean(policy?.faqs && policy.faqs.length > 0)

  return (
    <LegalPageLayout
      title={displayTitle}
      titleAr={displayTitleAr}
      subtitle={displaySubtitle}
      subtitleAr={displaySubtitleAr}
      badge={displayBadge}
      badgeAr={displayBadgeAr}
      lastUpdated={displayLastUpdated}
    >
      {/* Live CMS Status Indicator (Clean Minimalist Pill) */}
      {policy && (
        <div className="not-prose mb-6 flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">
              {isRtl ? 'وثيقة محدثة ومربوطة بنظام إدارة المحتوى (CMS Live)' : 'Live CMS Managed Document'}
            </span>
          </div>
          <span className="text-slate-400 font-mono text-[10px]">
            slug: {policy.slug}
          </span>
        </div>
      )}

      {/* Dynamic Highlights Bar if configured in CMS */}
      {hasDynamicHighlights && (
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {policy.highlights.map((h, hIdx) => {
            const label = isRtl && h.labelAr ? h.labelAr : h.label
            const desc = isRtl && h.descAr ? h.descAr : h.desc
            return (
              <div
                key={hIdx}
                className="p-4 rounded-2xl bg-gradient-to-br from-red-50/50 via-white to-red-50/20 border border-red-100/80 shadow-xs"
              >
                <div className="text-xs font-bold text-red-600 mb-1">{label}</div>
                <div className="text-xs text-slate-600 leading-snug">{desc}</div>
              </div>
            )
          })}
        </div>
      )}

      {/* Dynamic Sections from Admin CMS */}
      {hasDynamicSections ? (
        <div className="space-y-8">
          {policy.sections.map((section, sIdx) => {
            const heading = isRtl && section.headingAr ? section.headingAr : section.heading
            const body = isRtl && section.bodyAr ? section.bodyAr : section.body
            const bullets = isRtl && section.bulletsAr?.length ? section.bulletsAr : (section.bullets || [])

            return (
              <section key={section.id || sIdx} className="scroll-mt-24">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#111827] mb-3 pb-2 border-b border-[#f3f4f6]">
                  {heading}
                </h2>
                {body && (
                  <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed mb-4 whitespace-pre-line">
                    {body}
                  </p>
                )}
                {bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 mb-4 text-sm sm:text-base text-[#4b5563]">
                    {bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )
          })}

          {/* Dynamic Markdown / Raw HTML / Prose content if entered in CMS */}
          {Boolean(isRtl ? (policy.contentAr || policy.content) : policy.content) && (
            <div className="mt-6 pt-6 border-t border-slate-100 whitespace-pre-line text-sm sm:text-base text-[#4b5563] leading-relaxed">
              {isRtl ? (policy.contentAr || policy.content) : policy.content}
            </div>
          )}
        </div>
      ) : (
        /* Fallback Structured Markup when no custom CMS sections are stored yet */
        children
      )}

      {/* Dynamic Policy FAQs (Optional section at end of page) */}
      {hasDynamicFaqs && (
        <div className="not-prose mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#dc1414]" />
            <h3 className="text-base font-extrabold text-slate-900">
              {isRtl ? 'الأسئلة الشائعة المتعلقة بهذه الوثيقة' : 'Frequently Asked Questions About This Policy'}
            </h3>
          </div>
          <div className="space-y-2.5">
            {policy.faqs.map((faq, fIdx) => {
              const q = isRtl && faq.questionAr ? faq.questionAr : faq.question
              const a = isRtl && faq.answerAr ? faq.answerAr : faq.answer
              const isOpen = openFaqIdx === fIdx

              return (
                <div
                  key={faq.id || fIdx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : fIdx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-[#dc1414] transition-colors"
                  >
                    <span>{q}</span>
                    <span className="ml-2 text-slate-400 font-mono text-sm shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </LegalPageLayout>
  )
}
