'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function CheckoutSuccessModal({
  isOpen,
  onClose,
  orderNumber = '',
  paymentMethod = 'Credit / Debit Card',
  totalAmount = 'QAR 0',
  estimatedDelivery = 'In 2-4 business days',
  shippingAddress = null,
}) {
  const { isArabic } = useLanguage()

  if (!isOpen) return null

  const trackHref = orderNumber ? `/track-order?id=${encodeURIComponent(orderNumber)}` : '/track-order'

  // Pre-filled WhatsApp message for Qatar showroom support
  const waMessage = encodeURIComponent(
    `Hello Prestige Computers! I have placed an order #${orderNumber} for ${totalAmount} via ${paymentMethod}. Please confirm order processing and delivery status.`
  )
  const waUrl = `https://wa.me/97466919155?text=${waMessage}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 text-center shadow-2xl relative border border-[#e5e7eb] animate-scale-up">
        {/* Animated Green Checkmark */}
        <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center mx-auto mb-4 shadow-sm ring-8 ring-[#f0fdf4]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-[22px] font-black text-[#111827] tracking-tight">
          {isArabic ? 'تم تأكيد طلبك بنجاح!' : 'Order Placed Successfully!'}
        </h3>
        <p className="mt-1.5 text-[13px] text-[#6b7280] leading-relaxed">
          {isArabic
            ? 'شكراً لتسوقك من برستيج كمبيوترز (الدوحة). تم تخصيص المخزون وتجهيز الفاتورة الرسمية.'
            : 'Thank you for your order with Prestige Computers (Doha). Hardware stock has been allocated and reserved.'}
        </p>

        {/* Order Details Card */}
        <div className="mt-5 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-4 text-left text-[12.5px] space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">{isArabic ? 'رقم الطلب:' : 'Order ID:'}</span>
            <span className="font-bold text-[#111827] font-mono">#{orderNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">{isArabic ? 'المبلغ الإجمالي:' : 'Total Amount:'}</span>
            <span className="font-bold text-[#dc1414]">{totalAmount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">{isArabic ? 'طريقة الدفع:' : 'Payment Mode:'}</span>
            <span className="font-semibold text-[#111827]">{paymentMethod}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">{isArabic ? 'موعد التسليم المتوقع:' : 'Est. Delivery:'}</span>
            <span className="font-semibold text-[#16a34a]">{estimatedDelivery}</span>
          </div>

          {shippingAddress && (
            <div className="pt-2 border-t border-gray-200 text-[11.5px] text-[#4b5563]">
              <span className="font-semibold text-[#111827] block">
                {isArabic ? 'وجهة التسليم / الاستلام:' : 'Delivering / Collection:'}
              </span>
              <p className="truncate font-medium">
                {shippingAddress.name} ({shippingAddress.phone})
              </p>
              <p className="text-gray-500 truncate">
                {shippingAddress.street}, {shippingAddress.city} {shippingAddress.country ? `• ${shippingAddress.country}` : '• Qatar'}
              </p>
            </div>
          )}
        </div>

        {/* WhatsApp Direct Confirmation Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 w-full py-2.5 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/20 font-bold text-[12.5px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32Z" />
          </svg>
          <span>{isArabic ? 'إرسال تأكيد عبر واتساب (+974)' : 'Confirm on WhatsApp (+974)'}</span>
        </a>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <Link
            href="/"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-[#d1d5db] text-[#374151] hover:bg-[#f3f4f6] font-bold text-[13px] transition-colors"
          >
            {isArabic ? 'متابعة التسوق' : 'Continue Shopping'}
          </Link>
          <Link
            href={trackHref}
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold text-[13px] transition-colors shadow-xs"
          >
            {isArabic ? 'تتبع الطلب' : 'Track Order'} &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
