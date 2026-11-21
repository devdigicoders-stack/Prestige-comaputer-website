'use client'

import Link from 'next/link'

export default function CheckoutSuccessModal({
  isOpen,
  onClose,
  orderNumber = '',
  paymentMethod = 'UPI',
  totalAmount = '₹0',
  estimatedDelivery = 'In 2-4 business days',
  shippingAddress = null,
}) {
  if (!isOpen) return null

  const trackHref = orderNumber ? `/track-order?id=${encodeURIComponent(orderNumber)}` : '/track-order'

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
          Order Placed Successfully!
        </h3>
        <p className="mt-1.5 text-[13px] text-[#6b7280] leading-relaxed">
          Thank you for your order with Prestige Computers. Stock has been allocated from our warehouse.
        </p>

        {/* Order Details Card */}
        <div className="mt-5 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-4 text-left text-[12.5px] space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">Order ID:</span>
            <span className="font-bold text-[#111827] font-mono">#{orderNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">Total Amount:</span>
            <span className="font-bold text-[#dc1414]">{totalAmount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">Payment Mode:</span>
            <span className="font-semibold text-[#111827] uppercase">{paymentMethod}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748b]">Est. Delivery:</span>
            <span className="font-semibold text-[#16a34a]">{estimatedDelivery}</span>
          </div>

          {shippingAddress && (
            <div className="pt-2 border-t border-gray-200 text-[11.5px] text-[#4b5563]">
              <span className="font-semibold text-[#111827] block">Delivering to:</span>
              <p className="truncate">
                {shippingAddress.name} ({shippingAddress.phone})
              </p>
              <p className="text-gray-500 truncate">
                {shippingAddress.street}, {shippingAddress.city} - {shippingAddress.postalCode}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <Link
            href="/"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-[#d1d5db] text-[#374151] hover:bg-[#f3f4f6] font-bold text-[13px] transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href={trackHref}
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold text-[13px] transition-colors shadow-xs"
          >
            Track Order &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
