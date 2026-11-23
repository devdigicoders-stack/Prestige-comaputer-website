'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function DeliveryMethodSection({
  deliveryMethod = 'standard',
  onSelectDeliveryMethod,
}) {
  const { isArabic } = useLanguage()

  const methods = [
    {
      id: 'standard',
      name: isArabic ? 'التوصيل العادي' : 'Standard Delivery',
      desc: isArabic ? 'التوصيل خلال 2 - 4 أيام عمل في جميع مناطق قطر' : 'Delivery in 2 - 4 Business Days across Qatar',
      price: isArabic ? 'مجاني' : 'Free',
      badge: isArabic ? 'شامل لجميع المناطق' : 'All Qatar Hubs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: 'express',
      name: isArabic ? 'التوصيل السريع (في نفس اليوم)' : 'Express Delivery (Same-Day)',
      desc: isArabic ? 'توصيل خلال ساعات في الدوحة ولوسيل' : 'Same-day delivery across Doha & Lusail',
      price: isArabic ? '25 ر.ق' : 'QAR 25',
      badge: isArabic ? 'أولوية التجهيز' : 'Priority Dispatch',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      id: 'pickup',
      name: isArabic ? 'الاستلام من المعرض (المرقاب مول)' : 'Showroom Pickup (Al-Mirqab Mall)',
      desc: isArabic ? 'جاهز للاستلام خلال ساعتين من معتمد المعرض' : 'Ready in 2 Hours • Inspect before receiving',
      price: isArabic ? 'مجاني' : 'Free',
      badge: isArabic ? 'استلام فوري' : 'Self Collection',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-6 h-6 rounded-full bg-[#dc1414] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
          2
        </span>
        <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
          {isArabic ? 'طريقة التوصيل والاستلام' : 'Delivery Method'}
        </h2>
      </div>

      {/* Options Row (3 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {methods.map((method) => {
          const isSelected = deliveryMethod === method.id

          return (
            <div
              key={method.id}
              onClick={() => onSelectDeliveryMethod(method.id)}
              className={`rounded-2xl p-4 flex flex-col justify-between gap-3 transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                  : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
              }`}
            >
              {/* Top: Radio + Icon + Badge */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-[#dc1414] bg-white'
                        : 'border-[#d1d5db] bg-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#fee2e2] text-[#dc1414]'
                        : 'bg-[#f3f4f6] text-[#374151]'
                    }`}
                  >
                    {method.icon}
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-[#fee2e2] text-[#b91c1c]'
                      : 'bg-[#f3f4f6] text-[#6b7280]'
                  }`}
                >
                  {method.badge}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[13.5px] font-bold text-[#111827]">
                  {method.name}
                </h3>
                <p className="text-[11.5px] text-[#6b7280] mt-1 leading-snug">
                  {method.desc}
                </p>
              </div>

              {/* Bottom Price */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500">
                  {isArabic ? 'الرسوم:' : 'Cost:'}
                </span>
                <span
                  className={`text-[13.5px] font-extrabold ${
                    method.id === 'express' ? 'text-[#111827]' : 'text-[#16a34a]'
                  }`}
                >
                  {method.price}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
