'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { getWhatsAppInquiryUrl } from '../../utils/whatsapp'

export default function ProductBuyRentSidebar({
  product,
  rentUrl = '/rentals',
}) {
  const { openRentalModal } = useStore()
  const { isArabic } = useLanguage()
  const [activeTab, setActiveTab] = useState('buy')
  const [pincode, setPincode] = useState('')
  const [deliveryResult, setDeliveryResult] = useState(null)
  const [isChecking, setIsChecking] = useState(false)

  const handleCheckPincode = (e) => {
    e.preventDefault()
    if (!pincode.trim() || pincode.trim().length < 3) {
      setDeliveryResult({
        valid: false,
        message: isArabic
          ? 'يرجى إدخال منطقة أو رمز صالح'
          : 'Please enter a valid area code or pincode',
      })
      return
    }

    setIsChecking(true)
    setTimeout(() => {
      setIsChecking(false)
      const isPaid = product?.isFreeDelivery === false && Number(product?.deliveryCharge) > 0
      setDeliveryResult({
        valid: true,
        message: isArabic
          ? isPaid
            ? `التوصيل متاح خلال 24-48 ساعة | الشحن: ${product.deliveryCharge} ر.ق`
            : 'التوصيل متاح خلال 24-48 ساعة | توصيل مجاني'
          : isPaid
          ? `Delivery available in 24-48 hrs | Shipping: ${formatCurrency(product.deliveryCharge, isArabic)}`
          : 'Delivery available in 24-48 hrs | Free Delivery',
      })
    }, 400)
  }

  return (
    <div className="flex flex-col gap-3.5">
      {/* 1. Top Buy / Rent Switch Tabs */}
      <div className="bg-[#f3f4f6] p-1 rounded-xl flex items-center gap-1 border border-[#e5e7eb]">
        <button
          type="button"
          onClick={() => setActiveTab('buy')}
          className={`flex-1 py-2 px-3 text-[13px] font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'buy'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'text-[#4b5563] hover:text-[#111827]'
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
            <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
            <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <span>{isArabic ? 'شراء' : 'Buy'}</span>
        </button>

        {product?.type === 'Buy Only' ? (
          <Link
            href={rentUrl}
            className="flex-1 py-2 px-3 text-[13px] font-bold rounded-lg flex items-center justify-center gap-1.5 text-[#4b5563] hover:text-[#dc1414] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{isArabic ? 'إيجار' : 'Rent'}</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => openRentalModal?.(product)}
            className="flex-1 py-2 px-3 text-[13px] font-bold rounded-lg flex items-center justify-center gap-1.5 text-[#4b5563] hover:text-[#dc1414] transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{isArabic ? 'إيجار' : 'Rent'}</span>
          </button>
        )}
      </div>

      {/* 2. Available Offers Card */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 shadow-2xs">
        {/* Header */}
        <div className="flex items-center gap-2 text-[#111827] font-bold text-[13.5px] pb-2.5 border-b border-[#f3f4f6]">
          <span className="w-6 h-6 rounded-md bg-[#fee2e2] text-[#dc1414] flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
          </span>
          <span>{isArabic ? 'العروض المتاحة' : 'Available Offers'}</span>
        </div>

        {/* Offer Rows */}
        <div className="flex flex-col divide-y divide-[#f3f4f6] text-[12px] pt-1">
          <div className="py-2.5 flex items-center justify-between gap-2 hover:text-[#dc1414] transition-colors cursor-pointer group">
            <div className="flex items-start gap-2">
              <span className="text-[#dc1414] font-bold text-[13px] leading-tight">%</span>
              <span className="text-[#374151] group-hover:text-[#dc1414] leading-snug">
                {isArabic
                  ? 'خصومات فورية وعروض حصرية على بطاقات الدفع البنكية المعتمدة'
                  : 'Flat Instant Discount on Major Credit & Debit Cards'}
              </span>
            </div>
            <span className="text-[#9ca3af] group-hover:text-[#dc1414] rtl:rotate-180 group-hover:translate-x-0.5 transition-transform text-[13px] font-bold shrink-0">
              &gt;
            </span>
          </div>

          <div className="py-2.5 flex items-center justify-between gap-2 hover:text-[#dc1414] transition-colors cursor-pointer group">
            <div className="flex items-start gap-2">
              <span className="text-[#dc1414] font-bold text-[13px] leading-tight">%</span>
              <span className="text-[#374151] group-hover:text-[#dc1414] leading-snug">
                {isArabic
                  ? 'خطط تقسيط ميسرة وبدون فوائد حتى 12 شهراً'
                  : 'No Cost EMI installment plans up to 12 Months'}
              </span>
            </div>
            <span className="text-[#9ca3af] group-hover:text-[#dc1414] rtl:rotate-180 group-hover:translate-x-0.5 transition-transform text-[13px] font-bold shrink-0">
              &gt;
            </span>
          </div>

          <div className="py-2.5 flex items-center justify-between gap-2 hover:text-[#dc1414] transition-colors cursor-pointer group">
            <div className="flex items-start gap-2">
              <span className="text-[#dc1414] font-bold text-[13px] leading-tight">%</span>
              <span className="text-[#374151] group-hover:text-[#dc1414] leading-snug">
                {isArabic
                  ? 'خصم إضافي 5% عند الدفع الإلكتروني المباشر'
                  : 'Extra 5% Off on Direct Online Payments'}
              </span>
            </div>
            <span className="text-[#9ca3af] group-hover:text-[#dc1414] rtl:rotate-180 group-hover:translate-x-0.5 transition-transform text-[13px] font-bold shrink-0">
              &gt;
            </span>
          </div>
        </div>
      </div>

      {/* 3. Check Delivery Availability Card */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 shadow-2xs">
        {/* Header */}
        <div className="flex items-center gap-2 text-[#111827] font-bold text-[13.5px] mb-2.5">
          <span className="w-6 h-6 rounded-md bg-[#fee2e2] text-[#dc1414] flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.588a13.754 13.754 0 0 0 2.273 1.765 11.758 11.758 0 0 0 .758.433l.28.14.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
            </svg>
          </span>
          <span>{isArabic ? 'التحقق من توفر التوصيل' : 'Check Delivery Availability'}</span>
        </div>

        {/* Form */}
        <form onSubmit={handleCheckPincode} className="flex gap-2">
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder={isArabic ? 'أدخل المنطقة أو الرمز' : 'Enter Pincode / Area'}
            className="flex-1 bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12.5px] rounded-lg px-3 py-2 outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={isChecking}
            className="bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12.5px] font-bold px-4 py-2 rounded-lg shadow-xs transition-colors cursor-pointer disabled:opacity-60"
          >
            {isChecking ? '...' : isArabic ? 'تحقق' : 'Check'}
          </button>
        </form>

        {deliveryResult && (
          <p
            className={`mt-2 text-[11.5px] font-medium flex items-center gap-1.5 ${
              deliveryResult.valid ? 'text-[#16a34a]' : 'text-[#dc1414]'
            }`}
          >
            {deliveryResult.valid && (
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
            )}
            <span>{deliveryResult.message}</span>
          </p>
        )}
      </div>

      {/* 4. Trust Guarantees Grid (2x2) */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Free Delivery */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-3 flex flex-col items-start gap-1 shadow-2xs hover:border-[#dc1414]/20 transition-colors text-left rtl:text-right">
          <div className="w-7 h-7 rounded-lg bg-[#fef2f2] text-[#dc1414] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <span className="text-[12px] font-bold text-[#111827] mt-1 leading-tight">
            {product?.isFreeDelivery === false && Number(product?.deliveryCharge) > 0
              ? isArabic
                ? `الشحن: ${product.deliveryCharge} ر.ق`
                : `Delivery: QAR ${product.deliveryCharge}`
              : isArabic
              ? 'توصيل مجاني'
              : 'Free Delivery'}
          </span>
          <span className="text-[10.5px] text-[#6b7280]">
            {product?.isFreeDelivery === false && Number(product?.deliveryCharge) > 0
              ? isArabic ? 'شحن سريع للباب' : 'Fast doorstep shipping'
              : isArabic ? 'على جميع الطلبات' : 'on all orders'}
          </span>
        </div>

        {/* Easy Returns */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-3 flex flex-col items-start gap-1 shadow-2xs hover:border-[#dc1414]/20 transition-colors text-left rtl:text-right">
          <div className="w-7 h-7 rounded-lg bg-[#fef2f2] text-[#dc1414] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
          </div>
          <span className="text-[12px] font-bold text-[#111827] mt-1 leading-tight">
            {isArabic ? 'إرجاع ميسر' : 'Easy Returns'}
          </span>
          <span className="text-[10.5px] text-[#6b7280]">
            {isArabic ? 'خلال 7 أيام' : 'within 7 days'}
          </span>
        </div>

        {/* 1 Year Warranty */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-3 flex flex-col items-start gap-1 shadow-2xs hover:border-[#dc1414]/20 transition-colors text-left rtl:text-right">
          <div className="w-7 h-7 rounded-lg bg-[#fef2f2] text-[#dc1414] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-[12px] font-bold text-[#111827] mt-1 leading-tight">
            {isArabic ? 'ضمان رسمي' : '1 Year Warranty'}
          </span>
          <span className="text-[10.5px] text-[#6b7280]">
            {isArabic ? 'ضمان الوكيل المعتمد' : 'Brand Warranty'}
          </span>
        </div>

        {/* Authentic Product */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-3 flex flex-col items-start gap-1 shadow-2xs hover:border-[#dc1414]/20 transition-colors text-left rtl:text-right">
          <div className="w-7 h-7 rounded-lg bg-[#fef2f2] text-[#dc1414] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          </div>
          <span className="text-[12px] font-bold text-[#111827] mt-1 leading-tight">
            {isArabic ? 'منتج أصلي' : 'Authentic Product'}
          </span>
          <span className="text-[10.5px] text-[#6b7280]">
            {isArabic ? 'أصلي 100%' : '100% Genuine'}
          </span>
        </div>
      </div>
      {/* Direct WhatsApp Hotline Button (PCS Doha Showroom Hotline) */}
      <a
        href={getWhatsAppInquiryUrl(product)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer text-[13.5px]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span>{isArabic ? 'استفسار عبر واتساب (+974 6691 9155)' : 'WhatsApp Inquiry (+974 6691 9155)'}</span>
      </a>
    </div>
  )
}
