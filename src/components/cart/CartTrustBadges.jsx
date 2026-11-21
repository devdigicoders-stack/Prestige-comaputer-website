'use client'

import { useLanguage } from '../../context/LanguageContext'

function FastDeliveryIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h1.5" />
    </svg>
  )
}

function ShieldCheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function EasyReturnsIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

function DedicatedSupportIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 1.5a9 9 0 00-9 9v1.5a3 3 0 003 3h1.5a1.5 1.5 0 001.5-1.5V9a1.5 1.5 0 00-1.5-1.5H6a7.5 7.5 0 0112 0h-1.5A1.5 1.5 0 0015 9v4.5a1.5 1.5 0 001.5 1.5H18a3 3 0 003-3V10.5a9 9 0 00-9-9z" />
    </svg>
  )
}

function GenuineIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  )
}

const BADGES = [
  { icon: FastDeliveryIcon, label: 'Free & Fast', sub: 'Delivery', labelAr: 'توصيل مجاني', subAr: 'وسريع' },
  { icon: ShieldCheckIcon, label: 'Secure', sub: 'Payments', labelAr: 'دفع آمن', subAr: 'ومحمي 100%' },
  { icon: EasyReturnsIcon, label: 'Easy', sub: 'Returns', labelAr: 'إرجاع ميسر', subAr: 'خلال 7 أيام' },
  { icon: DedicatedSupportIcon, label: 'Dedicated', sub: 'Support', labelAr: 'دعم فني', subAr: 'مخصص 24/7' },
  { icon: GenuineIcon, label: 'Genuine', sub: 'Products', labelAr: 'منتجات أصلية', subAr: 'بضمان الوكيل' },
]

export default function CartTrustBadges() {
  const { isArabic } = useLanguage()

  return (
    <div className="w-full bg-[#fdf2f2]/60 rounded-2xl border border-red-100/70 p-4 sm:p-5 mt-6 sm:mt-8 shadow-xs">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center text-center">
        {BADGES.map((badge, idx) => {
          const Icon = badge.icon
          const title = isArabic ? badge.labelAr : badge.label
          const subtitle = isArabic ? badge.subAr : badge.sub

          return (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 text-left rtl:text-right">
              <div className="w-10 h-10 rounded-xl bg-white border border-red-100 text-[#dc1414] flex items-center justify-center shrink-0 shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className="block text-[12.5px] sm:text-[13px] font-bold text-gray-900">
                  {title}
                </span>
                <span className="block text-[11px] sm:text-[11.5px] font-medium text-gray-600">
                  {subtitle}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
