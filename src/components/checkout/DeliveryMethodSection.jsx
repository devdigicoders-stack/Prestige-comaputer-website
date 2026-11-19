'use client'

export default function DeliveryMethodSection({
  deliveryMethod = 'standard',
  onSelectDeliveryMethod,
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-6 h-6 rounded-full bg-[#dc1414] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
          2
        </span>
        <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
          Delivery Method
        </h2>
      </div>

      {/* Options Row (2 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Standard Delivery */}
        <div
          onClick={() => onSelectDeliveryMethod('standard')}
          className={`rounded-2xl p-4 flex items-center justify-between gap-3 transition-all cursor-pointer ${
            deliveryMethod === 'standard'
              ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
              : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Radio */}
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                deliveryMethod === 'standard'
                  ? 'border-[#dc1414] bg-white'
                  : 'border-[#d1d5db] bg-white'
              }`}
            >
              {deliveryMethod === 'standard' && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
              )}
            </div>

            {/* Truck Icon */}
            <div className="w-8 h-8 rounded-lg bg-[#fee2e2] text-[#dc1414] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#111827]">
                Standard Delivery
              </span>
              <span className="text-[11.5px] text-[#6b7280]">
                Delivery in 2 - 4 Business Days
              </span>
            </div>
          </div>

          <span className="text-[14px] font-extrabold text-[#dc1414]">
            Free
          </span>
        </div>

        {/* Express Delivery */}
        <div
          onClick={() => onSelectDeliveryMethod('express')}
          className={`rounded-2xl p-4 flex items-center justify-between gap-3 transition-all cursor-pointer ${
            deliveryMethod === 'express'
              ? 'bg-[#fef2f2]/60 border-2 border-[#dc1414] shadow-xs'
              : 'bg-white border border-[#e5e7eb] hover:border-[#9ca3af]'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Radio */}
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                deliveryMethod === 'express'
                  ? 'border-[#dc1414] bg-white'
                  : 'border-[#d1d5db] bg-white'
              }`}
            >
              {deliveryMethod === 'express' && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#dc1414]" />
              )}
            </div>

            {/* Lightning Icon */}
            <div className="w-8 h-8 rounded-lg bg-[#f3f4f6] text-[#374151] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#111827]">
                Express Delivery
              </span>
              <span className="text-[11.5px] text-[#6b7280]">
                Delivery in 1 - 2 Business Days
              </span>
            </div>
          </div>

          <span className="text-[14px] font-extrabold text-[#111827]">
            ₹199
          </span>
        </div>
      </div>
    </div>
  )
}
