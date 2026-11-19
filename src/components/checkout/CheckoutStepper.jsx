'use client'

export default function CheckoutStepper({ currentStep = 2, cartCount = 3 }) {
  const steps = [
    {
      id: 1,
      name: 'Cart',
      sub: `(${cartCount} Items)`,
      status: 'completed',
    },
    {
      id: 2,
      name: 'Address',
      sub: 'Delivery Details',
      status: 'current',
    },
    {
      id: 3,
      name: 'Payment',
      sub: 'Choose Payment',
      status: 'upcoming',
    },
    {
      id: 4,
      name: 'Place Order',
      sub: 'Review & Confirm',
      status: 'upcoming',
    },
  ]

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 border-b border-[#f1f5f9] pb-4">
      {/* Left: Heading & Subtitle */}
      <div>
        <h1 className="text-[26px] sm:text-[30px] font-black text-[#111827] tracking-tight leading-tight">
          Checkout
        </h1>
        <p className="text-[13px] text-[#6b7280] mt-0.5">
          Complete your order in just a few steps.
        </p>
      </div>

      {/* Right: 4-Step Stepper */}
      <div className="flex items-center overflow-x-auto no-scrollbar py-1">
        {steps.map((step, idx) => {
          const isDone = step.status === 'completed'
          const isCurrent = step.status === 'current'
          const isLast = idx === steps.length - 1

          return (
            <div key={step.id} className="flex items-center">
              {/* Step Node */}
              <div className="flex flex-col items-center text-center">
                {/* Circle */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[12px] sm:text-[13px] transition-all shadow-xs ${
                    isDone
                      ? 'bg-[#dc1414] text-white'
                      : isCurrent
                      ? 'bg-[#dc1414] text-white ring-4 ring-[#fee2e2]'
                      : 'bg-[#e5e7eb] text-[#6b7280]'
                  }`}
                >
                  {isDone ? (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>

                {/* Labels below */}
                <span
                  className={`text-[12px] sm:text-[12.5px] font-bold mt-1.5 leading-none ${
                    isDone || isCurrent ? 'text-[#111827]' : 'text-[#6b7280]'
                  }`}
                >
                  {step.name}
                </span>
                <span className="text-[10.5px] sm:text-[11px] text-[#9ca3af] leading-tight mt-0.5 whitespace-nowrap">
                  {step.sub}
                </span>
              </div>

              {/* Connecting Line */}
              {!isLast && (
                <div
                  className={`w-12 sm:w-18 md:w-22 h-[2px] mx-2 -mt-4 transition-colors ${
                    isDone ? 'bg-[#dc1414]' : 'bg-[#e5e7eb]'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
