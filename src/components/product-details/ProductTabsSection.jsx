'use client'

import { useState } from 'react'
import { getProductImageUrl } from '../../services/productApi'
import { useLanguage } from '../../context/LanguageContext'
import ProductReviewSection from './ProductReviewSection'

export default function ProductTabsSection({ product }) {
  const { isArabic } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')

  const productName = product?.name || product?.title || 'Dell Inspiron 15 (2025)'
  const brandName = product?.brand || 'Dell'
  const reviewTotal = product?.reviewCount || product?.numReviews || 328
  const productPhoto = getProductImageUrl(
    product?.image ||
      (typeof product?.images?.[0] === 'string'
        ? product.images[0]
        : product?.images?.[0]?.url) ||
      ''
  )

  const descriptionText =
    product?.description ||
    (isArabic
      ? 'كمبيوتر عالي الأداء مصمم للإنتاجية العالية والأعمال المكتبية والدراسة وتعدد المهام الإبداعية. مزود بذاكرة عالية السرعة وتخزين NVMe SSD فائق السرعة لأقصى قدر من الموثوقية.'
      : 'Versatile and powerful computer engineered for high productivity, office work, study, and demanding creative multitasking. Packed with high-speed memory and fast NVMe SSD storage for peak reliability.')

  const specRows = [
    {
      label: isArabic ? 'المعالج' : 'Processor',
      value: product?.specs?.processor || product?.specs?.cpu || '13th Gen Intel Core i5',
    },
    {
      label: isArabic ? 'نظام التشغيل' : 'Operating System',
      value: product?.specs?.os || (isArabic ? 'ويندوز 11 أصلي' : 'Windows 11 Pro Genuine'),
    },
    {
      label: isArabic ? 'الذاكرة العشوائية' : 'Memory (RAM)',
      value: product?.specs?.ram || '16GB DDR5 4800MHz',
    },
    {
      label: isArabic ? 'سعة التخزين' : 'Storage',
      value: product?.specs?.storage || '512GB M.2 PCIe NVMe SSD',
    },
    {
      label: isArabic ? 'الشاشة' : 'Display',
      value: product?.specs?.display || '15.6" FHD (1920x1080) Anti-Glare',
    },
    {
      label: isArabic ? 'بطاقة الرسومات' : 'Graphics',
      value: product?.specs?.graphics || 'Intel Iris Xe Graphics',
    },
    {
      label: isArabic ? 'الضمان' : 'Warranty',
      value: product?.specs?.warranty || product?.warranty || (isArabic ? 'ضمان رسمي من الوكيل المعتمد' : '1 Year Official Onsite Warranty'),
    },
  ]

  // Add custom specs if present
  if (product?.customSpecs?.length) {
    product.customSpecs.forEach((cs) => {
      if (cs.key && cs.value) {
        specRows.push({ label: cs.key, value: cs.value })
      }
    })
  }

  // Highlights bullets
  const highlights = [
    product?.specs?.processor || product?.specs?.cpu || (isArabic ? 'معالج إنتل كور عالي الأداء' : 'Intel Core High Performance Compute'),
    product?.specs?.display || (isArabic ? 'شاشة عالية الدقة مضادة للتوهج' : 'High-Definition Anti-Glare Display'),
    isArabic
      ? `تخزين سريع ${product?.specs?.storage || '512GB NVMe SSD'}`
      : `Fast ${product?.specs?.storage || '512GB NVMe SSD'} Storage`,
    isArabic
      ? `ذاكرة عالية السرعة ${product?.specs?.ram || '16GB RAM'}`
      : `${product?.specs?.ram || '16GB RAM'} High-Speed Memory`,
    product?.specs?.os || (isArabic ? 'ويندوز 11 مثبت مسبقاً' : 'Windows 11 Pro Pre-installed'),
  ]

  return (
    <div className="flex flex-col gap-3">
      {/* 1. Tab Headers Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'overview'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          {isArabic ? 'نظرة عامة' : 'Overview'}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('specifications')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'specifications'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          {isArabic ? 'المواصفات الفنية' : 'Specifications'}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('reviews')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'reviews'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          {isArabic ? `التقييمات (${reviewTotal})` : `Reviews (${reviewTotal})`}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('qa')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'qa'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          {isArabic ? 'الأسئلة والأجوبة (18)' : 'Q&A (18)'}
        </button>
      </div>

      {/* 2. Tab Content Area */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Product Overview Description */}
            <div className="md:col-span-4 flex flex-col gap-2 text-left rtl:text-right">
              <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
                {isArabic ? 'نظرة عامة على المنتج' : 'Product Overview'}
              </h2>
              <p className="text-[13px] text-[#4b5563] leading-relaxed">
                {descriptionText}
              </p>
            </div>

            {/* Middle: 5 Red Bullet Checkmarks */}
            <div className="md:col-span-4 flex flex-col gap-2.5 text-left rtl:text-right">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#dc1414] text-white flex items-center justify-center shrink-0 text-[11px] font-bold">
                    ✓
                  </span>
                  <span className="text-[12.5px] font-semibold text-[#1f2937]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Dark Promo Card with Brand & Visual */}
            <div className="md:col-span-4">
              <div className="bg-gradient-to-br from-[#090a0f] via-[#11131a] to-[#0b0c10] rounded-2xl p-4 sm:p-5 text-white flex flex-col justify-between min-h-[170px] relative overflow-hidden border border-[#27272a] shadow-md">
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#dc1414]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded-full border border-white/40 flex items-center justify-center text-[9px] font-black tracking-widest text-white uppercase">
                      {brandName}
                    </div>
                    <span className="text-[13.5px] font-bold tracking-tight truncate max-w-[170px]">
                      {productName}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#9ca3af] z-10 my-1 font-medium tracking-wide">
                  {isArabic ? 'للعمل | للدراسة | للألعاب والترفيه' : 'Work | Study | Entertainment'}
                </p>

                <div className="w-full flex justify-end items-center mt-1 z-10">
                  <div className="w-36 h-20 flex items-center justify-end">
                    {productPhoto ? (
                      <img
                        src={productPhoto}
                        alt={productName}
                        className="max-w-full max-h-full object-contain drop-shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-12 rounded bg-white/10 flex items-center justify-center text-white/50">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
                          <path d="M7 20h10M12 16v4" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specifications Tab */}
      {activeTab === 'specifications' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs text-left rtl:text-right">
          <h2 className="text-[17px] font-bold text-[#111827] mb-4">
            {isArabic ? 'المواصفات الفنية' : 'Technical Specifications'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[12.5px]">
            {specRows.map((row, idx) => (
              <div key={idx} className="flex py-2 border-b border-[#f3f4f6]">
                <span className="w-36 font-semibold text-[#6b7280] shrink-0">{row.label}</span>
                <span className="text-[#111827] font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
          <ProductReviewSection product={product} />
        </div>
      )}

      {/* Q&A Tab */}
      {activeTab === 'qa' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-4 text-left rtl:text-right">
          <h2 className="text-[17px] font-bold text-[#111827]">
            {isArabic ? 'الأسئلة الشائعة والأجوبة (18)' : 'Questions & Answers (18)'}
          </h2>
          <div className="flex flex-col divide-y divide-[#f3f4f6] text-[12.5px]">
            <div className="py-3 flex flex-col gap-1">
              <p className="font-bold text-[#111827]">
                {isArabic ? 'س: هل يمكنني ترقية ذاكرة RAM في المستقبل؟' : 'Q: Can I upgrade the RAM in future?'}
              </p>
              <p className="text-[#4b5563]">
                {isArabic
                  ? 'ج: نعم، يأتي الجهاز بفتحات ترقية قياسية ويدعم ترقية ذاكرة RAM ومحرك أقراص SSD.'
                  : 'A: Yes, it comes with standard expansion slots and supports RAM and SSD upgrades.'}
              </p>
            </div>
            <div className="py-3 flex flex-col gap-1">
              <p className="font-bold text-[#111827]">
                {isArabic ? 'س: هل يشمل الجهاز ضماناً رسمياً؟' : 'Q: Does it have official warranty?'}
              </p>
              <p className="text-[#4b5563]">
                {isArabic
                  ? 'ج: نعم، تأتي جميع المنتجات من بريستيج كمبيوترز بضمان رسمي من الشركة المصنعة 100% مع دعم فني متكامل.'
                  : 'A: Yes, all products from Prestige Computers come with 100% genuine manufacturer brand warranty with onsite support.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
