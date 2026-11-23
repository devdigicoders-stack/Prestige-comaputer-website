'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function PaymentMethodSection({
  selectedPayment = 'card',
  onSelectPayment,
}) {
  const { isArabic, isRtl } = useLanguage()

  // State for interactive card input fields
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
  })

  // Format card number with spaces every 4 digits
  const handleCardNumberChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16)
    const formatted = raw.match(/.{1,4}/g)?.join(' ') || raw
    setCardData((prev) => ({ ...prev, cardNumber: formatted }))
  }

  // Format expiry date MM/YY
  const handleExpiryChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 4)
    let formatted = raw
    if (raw.length >= 2) {
      formatted = `${raw.slice(0, 2)}/${raw.slice(2)}`
    }
    setCardData((prev) => ({ ...prev, expiry: formatted }))
  }

  const [copiedIban, setCopiedIban] = useState(false)
  const qnbIban = 'QA02QNBA000000000012345678901'

  const handleCopyIban = () => {
    navigator.clipboard?.writeText(qnbIban)
    setCopiedIban(true)
    setTimeout(() => setCopiedIban(false), 2500)
  }

  // Detect card brand
  const getCardBrand = () => {
    const clean = cardData.cardNumber.replace(/\s/g, '')
    if (clean.startsWith('4')) return 'VISA'
    if (/^5[1-5]/.test(clean)) return 'MASTERCARD'
    return 'CARD'
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-6 h-6 rounded-full bg-[#dc1414] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
          3
        </span>
        <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
          {isArabic ? 'طريقة الدفع' : 'Payment Method'}
        </h2>
      </div>

      {/* Grid: Left payment list + Right preview widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Payment Options List (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          
          {/* 1. Credit / Debit Card */}
          <div
            onClick={() => onSelectPayment('card')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'card'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'card'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'card' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#dc1414]">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                {isArabic ? 'بطاقة ائتمان / مدى / خصم مباشر' : 'Credit / Debit Card (Visa, Mastercard)'}
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-black text-[#1a1f71] italic tracking-tight bg-gray-50 px-1.5 py-0.5 rounded border border-gray-200">
                VISA
              </span>
              <div className="flex -space-x-1 items-center bg-gray-50 px-1.5 py-0.5 rounded border border-gray-200">
                <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] opacity-90" />
              </div>
            </div>
          </div>

          {/* 2. Cash on Delivery (COD) */}
          <div
            onClick={() => onSelectPayment('cod')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'cod'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'cod'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'cod' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#16a34a]">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                {isArabic ? 'الدفع نقداً عند الاستلام (COD)' : 'Cash on Delivery (Pay at Doorstep)'}
              </span>
            </div>

            <span className="text-[10.5px] font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded-md shrink-0">
              {isArabic ? 'بدون دفع مسبق' : 'Zero Advance'}
            </span>
          </div>

          {/* 3. POS Terminal on Delivery */}
          <div
            onClick={() => onSelectPayment('pos')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'pos'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'pos'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'pos' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#2563eb]">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <circle cx="12" cy="16" r="1.5" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                {isArabic ? 'جهاز نقاط البيع المحمول عند التوصيل (POS)' : 'POS Card Terminal on Delivery'}
              </span>
            </div>

            <span className="text-[10px] font-bold text-[#1d4ed8] bg-[#eff6ff] px-2 py-0.5 rounded-md shrink-0">
              {isArabic ? 'بطاقة عند الباب' : 'Tap & Pay'}
            </span>
          </div>

          {/* 4. QNB Bank Direct Transfer */}
          <div
            onClick={() => onSelectPayment('qnb')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'qnb'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'qnb'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'qnb' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#0f766e]">
                <line x1="3" y1="21" x2="21" y2="21" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="5 6 12 3 19 6" />
                <line x1="4" y1="10" x2="4" y2="21" />
                <line x1="20" y1="10" x2="20" y2="21" />
                <line x1="8" y1="14" x2="8" y2="17" />
                <line x1="12" y1="14" x2="12" y2="17" />
                <line x1="16" y1="14" x2="16" y2="17" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                {isArabic ? 'تحويل بنكي مباشر (بنك قطر الوطني QNB)' : 'QNB / Bank Transfer (Direct Deposit)'}
              </span>
            </div>

            <span className="text-[10px] font-bold text-[#0f766e] bg-[#f0fdfa] px-2 py-0.5 rounded-md shrink-0">
              QNB Qatar
            </span>
          </div>

          {/* 5. Showroom Pickup & Pay */}
          <div
            onClick={() => onSelectPayment('pickup')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'pickup'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'pickup'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'pickup' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#b45309]">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                {isArabic ? 'الاستلام والدفع في المعرض (المرقاب مول)' : 'Pay & Collect at Showroom (Al-Mirqab Mall)'}
              </span>
            </div>

            <span className="text-[10px] font-bold text-[#b45309] bg-[#fffbeb] px-2 py-0.5 rounded-md shrink-0">
              {isArabic ? 'فحص قبل الدفع' : 'Inspect First'}
            </span>
          </div>

        </div>

        {/* Right Column: Dynamic Preview / Details Widget (lg:col-span-5) */}
        <div className="lg:col-span-5">
          <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
            
            {/* VIEW 1: Card Input Details & Preview */}
            {selectedPayment === 'card' && (
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <h4 className="text-[13.5px] font-bold text-[#111827]">
                    {isArabic ? 'بيانات البطاقة البنكية' : 'Card Payment Details'}
                  </h4>
                  <span className="text-[11px] font-extrabold text-[#1a1f71] bg-white px-2 py-0.5 rounded border border-gray-200">
                    {getCardBrand()}
                  </span>
                </div>

                {/* Card Number Input */}
                <div>
                  <label className="block text-[11.5px] font-semibold text-gray-700 mb-1">
                    {isArabic ? 'رقم البطاقة' : 'Card Number'}
                  </label>
                  <input
                    type="text"
                    value={cardData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="4000 1234 5678 9010"
                    className="w-full text-[13px] font-mono bg-white border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414] tracking-wider"
                  />
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-[11.5px] font-semibold text-gray-700 mb-1">
                    {isArabic ? 'اسم صاحب البطاقة' : 'Cardholder Name'}
                  </label>
                  <input
                    type="text"
                    value={cardData.cardHolder}
                    onChange={(e) => setCardData({ ...cardData, cardHolder: e.target.value.toUpperCase() })}
                    placeholder="AHMED AL-THANI"
                    className="w-full text-[13px] bg-white border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414] uppercase tracking-wide"
                  />
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11.5px] font-semibold text-gray-700 mb-1">
                      {isArabic ? 'تاريخ الانتهاء' : 'Expiry (MM/YY)'}
                    </label>
                    <input
                      type="text"
                      value={cardData.expiry}
                      onChange={handleExpiryChange}
                      placeholder="12/28"
                      className="w-full text-[13px] font-mono bg-white border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11.5px] font-semibold text-gray-700 mb-1">
                      {isArabic ? 'رمز الأمان (CVV)' : 'CVV / CVC'}
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '') })}
                      placeholder="•••"
                      className="w-full text-[13px] font-mono bg-white border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 flex items-center gap-1.5 pt-1">
                  <span className="text-[#16a34a] font-bold">🔒</span>
                  <span>{isArabic ? 'تشفير آمن 256-بت متوافق مع معايير قطر' : '256-bit SSL encrypted PCI-DSS payment'}</span>
                </p>
              </div>
            )}

            {/* VIEW 2: Cash on Delivery Preview */}
            {selectedPayment === 'cod' && (
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#16a34a] flex items-center justify-center mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] text-center">
                  {isArabic ? 'الدفع نقداً عند باب المنزل' : 'Cash on Doorstep Delivery'}
                </h4>
                <ul className="text-[12px] text-gray-600 space-y-2 pt-1 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>{isArabic ? 'ادفع نقداً بالريال القطري عند استلام الجهاز' : 'Pay in cash (QAR) directly to the delivery agent'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>{isArabic ? 'تحقق من سلامة العبوة وضمان المتجر قبل الدفع' : 'Inspect the tamper-proof sealed box and invoice first'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>{isArabic ? 'استلام فاتورة رسمية فورية وضمان لمدة سنة' : 'Receive official tax invoice & 1-Year PCS Store Warranty'}</span>
                  </li>
                </ul>
              </div>
            )}

            {/* VIEW 3: POS Card Machine on Delivery */}
            {selectedPayment === 'pos' && (
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#2563eb] flex items-center justify-center mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <circle cx="12" cy="16" r="1.5" />
                  </svg>
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] text-center">
                  {isArabic ? 'جهاز نقاط البيع المحمول (POS)' : 'Portable POS Machine on Delivery'}
                </h4>
                <ul className="text-[12px] text-gray-600 space-y-2 pt-1 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold">✓</span>
                    <span>{isArabic ? 'مندوب التوصيل يحمل جهاز دفع إلكتروني لاسلكي' : 'Courier brings wireless POS terminal to your location'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold">✓</span>
                    <span>{isArabic ? 'يدعم بطاقات الفيزا والماستركارد والبطاقات البنكية القطرية' : 'Accepts Visa, Mastercard & GCC Bank Debit Cards'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold">✓</span>
                    <span>{isArabic ? 'دفع سريع وخالي من المتاعب بدون نقود' : 'Contactless Tap-to-Pay with printed transaction slip'}</span>
                  </li>
                </ul>
              </div>
            )}

            {/* VIEW 4: QNB Bank Transfer */}
            {selectedPayment === 'qnb' && (
              <div className="space-y-2.5 text-[12px]">
                <div className="flex items-center justify-between pb-1.5 border-b border-gray-200">
                  <span className="font-bold text-[#0f766e] text-[13px]">
                    {isArabic ? 'بيانات التحويل البنكي (QNB)' : 'QNB Official Bank Details'}
                  </span>
                  <span className="bg-[#f0fdfa] text-[#0f766e] font-extrabold text-[11px] px-2 py-0.5 rounded border border-[#ccfbf1]">
                    QNB Qatar
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 space-y-1.5 font-mono text-[11.5px]">
                  <div>
                    <span className="text-gray-500 font-sans block text-[11px]">Beneficiary Name:</span>
                    <strong className="text-gray-900 font-sans">Prestige Computer Services W.L.L.</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 font-sans block text-[11px]">Bank:</span>
                    <strong className="text-gray-900 font-sans">Qatar National Bank (QNB)</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 font-sans block text-[11px]">IBAN:</span>
                    <div className="flex items-center justify-between gap-1 text-[11px] font-bold text-[#0f766e]">
                      <span className="break-all">{qnbIban}</span>
                      <button
                        type="button"
                        onClick={handleCopyIban}
                        className="text-[10.5px] font-sans font-bold px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer shrink-0"
                      >
                        {copiedIban ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {isArabic
                    ? 'يرجى كتابة رقم الطلب في خانة الملاحظات بالتحويل. يمكنك إرسال إيصال التحويل عبر واتساب للتأكيد الفوري.'
                    : 'Please mention your Order ID in the transfer remarks. Send receipt on WhatsApp (+974 6691 9155) for instant priority dispatch.'}
                </p>
              </div>
            )}

            {/* VIEW 5: Showroom Pickup */}
            {selectedPayment === 'pickup' && (
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#b45309] flex items-center justify-center mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] text-center">
                  {isArabic ? 'الاستلام من معرض المرقاب مول' : 'Showroom Collection in Doha'}
                </h4>
                <div className="bg-white p-3 rounded-xl border border-gray-200 text-[12px] space-y-1">
                  <strong className="text-gray-900 block font-semibold">Prestige Computers Showroom</strong>
                  <p className="text-gray-600 leading-snug">
                    Tower 1, 2nd Floor, Office No 201, Al-Mirqab Mall, Al Mirqab Al Jadeed St, Doha, Qatar
                  </p>
                  <p className="text-[11.5px] text-[#b45309] font-bold pt-1">
                    Ready for pickup in 2 Hours • Sat–Thu 10 AM – 10 PM
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}
