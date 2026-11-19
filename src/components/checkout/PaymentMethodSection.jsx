'use client'

export default function PaymentMethodSection({
  selectedPayment = 'upi',
  onSelectPayment,
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-6 h-6 rounded-full bg-[#dc1414] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
          3
        </span>
        <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
          Payment Method
        </h2>
      </div>

      {/* Grid: Left payment list + Right preview widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Payment Options List (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          {/* 1. UPI */}
          <div
            onClick={() => onSelectPayment('upi')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'upi'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414]'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Radio */}
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'upi'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'upi' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              {/* Mobile Phone Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#dc1414]">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                UPI (Google Pay, PhonePe, Paytm, etc.)
              </span>
            </div>

            {/* UPI Logo */}
            <div className="flex items-center shrink-0">
              <span className="text-[12px] font-black italic tracking-tighter text-[#097939]">
                UPI
              </span>
              <span className="text-[10px] font-black text-[#ea580c] ml-0.5">►</span>
            </div>
          </div>

          {/* 2. Credit / Debit Card */}
          <div
            onClick={() => onSelectPayment('card')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'card'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414]'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Radio */}
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

              {/* Card Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#4b5563]">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                Credit / Debit Card
              </span>
            </div>

            {/* Card Brand Logos */}
            <div className="flex items-center gap-2 shrink-0">
              {/* VISA */}
              <span className="text-[11.5px] font-black text-[#1a1f71] italic tracking-tight">
                VISA
              </span>
              {/* Mastercard circles */}
              <div className="flex -space-x-1 items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-90" />
              </div>
              {/* RuPay */}
              <span className="text-[11px] font-bold text-[#0066b2]">
                RuPay<span className="text-[#f15a24]">►</span>
              </span>
            </div>
          </div>

          {/* 3. Net Banking */}
          <div
            onClick={() => onSelectPayment('netbanking')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'netbanking'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414]'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'netbanking'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'netbanking' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              {/* Bank Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#4b5563]">
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
                Net Banking
              </span>
            </div>
          </div>

          {/* 4. EMI (Credit Card / Debit Card) */}
          <div
            onClick={() => onSelectPayment('emi')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'emi'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414]'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'emi'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'emi' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              {/* Calendar/Calculator Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#4b5563]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                EMI (Credit Card / Debit Card)
              </span>
            </div>

            <span className="text-[10px] font-bold text-[#dc1414] bg-[#fee2e2] px-2 py-0.5 rounded-md shrink-0">
              No Cost EMI Available
            </span>
          </div>

          {/* 5. Wallets (Paytm, Amazon Pay, etc.) */}
          <div
            onClick={() => onSelectPayment('wallets')}
            className={`rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${
              selectedPayment === 'wallets'
                ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414]'
                : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                  selectedPayment === 'wallets'
                    ? 'border-[#dc1414] bg-white'
                    : 'border-[#d1d5db] bg-white'
                }`}
              >
                {selectedPayment === 'wallets' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
                )}
              </div>

              {/* Wallet Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5 text-[#4b5563]">
                <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                <path d="M16 3H4a2 2 0 0 0-2 2v2" />
                <circle cx="16" cy="14" r="1.5" />
              </svg>

              <span className="text-[13px] font-semibold text-[#111827]">
                Wallets (Paytm, Amazon Pay, etc.)
              </span>
            </div>

            {/* Wallet logos */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-bold text-[#00b9f5]">
                paytm
              </span>
              <span className="text-[11px] font-bold text-[#111827]">
                amazon
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Preview & Trust Card (lg:col-span-5) */}
        <div className="lg:col-span-5">
          <div className="bg-[#fff5f5] rounded-2xl border border-[#fee2e2] p-4 sm:p-5 flex flex-col justify-between min-h-[220px]">
            {/* Top: Phone vector with QR + Features */}
            <div className="flex items-center gap-4">
              {/* Smartphone Mockup with QR */}
              <div className="w-16 h-26 bg-[#dc1414] rounded-xl p-1 shadow-md shrink-0 flex flex-col items-center justify-between">
                <div className="w-3 h-0.5 bg-white/60 rounded-full my-0.5" />
                <div className="w-full flex-1 bg-white rounded-lg p-1.5 flex flex-col items-center justify-center">
                  {/* QR Pattern */}
                  <div className="w-10 h-10 border-2 border-[#111827] p-0.5 grid grid-cols-3 gap-0.5">
                    <div className="bg-[#111827]" />
                    <div className="bg-[#111827]" />
                    <div className="bg-transparent" />
                    <div className="bg-transparent" />
                    <div className="bg-[#dc1414]" />
                    <div className="bg-[#111827]" />
                    <div className="bg-[#111827]" />
                    <div className="bg-transparent" />
                    <div className="bg-[#111827]" />
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/70 my-0.5" />
              </div>

              {/* Text list */}
              <div className="flex flex-col">
                <h4 className="text-[13.5px] font-bold text-[#111827] mb-2 leading-tight">
                  Pay Securely with UPI
                </h4>
                <div className="flex flex-col gap-1.5 text-[11.5px] text-[#374151] font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>Fast & Instant Payment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>100% Secure & Encrypted</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>Supports All UPI Apps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: UPI Apps Logos */}
            <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-[#fecaca]/60">
              {/* Google Pay */}
              <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-[#e5e7eb] shadow-2xs">
                <span className="font-bold text-[11px] text-[#4285f4]">G</span>
                <span className="text-[11px] font-semibold text-[#5f6368]">Pay</span>
              </div>

              {/* PhonePe */}
              <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-[#e5e7eb] shadow-2xs">
                <div className="w-3.5 h-3.5 rounded-full bg-[#5f259f] text-white flex items-center justify-center text-[9px] font-bold">
                  पे
                </div>
                <span className="text-[10.5px] font-bold text-[#5f259f]">PhonePe</span>
              </div>

              {/* Paytm */}
              <div className="flex items-center bg-white px-2 py-1 rounded-md border border-[#e5e7eb] shadow-2xs">
                <span className="text-[11px] font-black text-[#002e6e]">Pay</span>
                <span className="text-[11px] font-black text-[#00b9f5]">tm</span>
              </div>

              {/* BHIM */}
              <div className="flex items-center bg-white px-2 py-1 rounded-md border border-[#e5e7eb] shadow-2xs">
                <span className="text-[10.5px] font-black text-[#138808]">BH</span>
                <span className="text-[10.5px] font-black text-[#ff9933]">IM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
