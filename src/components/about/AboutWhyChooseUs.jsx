function ShieldCheckIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function DeliveryTruckIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

function HeadsetSupportIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

function CogSettingsIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function LaptopRentalIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </svg>
  )
}

function CurrencyPriceIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M6 8h12M6 12h8M14 8a4 4 0 0 1-4 4H6l8 7" />
    </svg>
  )
}

const REASONS = [
  {
    id: 'genuine',
    title: '100% Genuine Products',
    Icon: ShieldCheckIcon,
  },
  {
    id: 'delivery',
    title: 'Fast & Safe Delivery',
    Icon: DeliveryTruckIcon,
  },
  {
    id: 'support',
    title: 'Expert Technical Support',
    Icon: HeadsetSupportIcon,
  },
  {
    id: 'solutions',
    title: 'Customized IT Solutions',
    Icon: CogSettingsIcon,
  },
  {
    id: 'rental',
    title: 'Flexible Rental Plans',
    Icon: LaptopRentalIcon,
  },
  {
    id: 'price',
    title: 'Best Price & Offers',
    Icon: CurrencyPriceIcon,
  },
]

export default function AboutWhyChooseUs() {
  return (
    <section aria-label="Why Choose Prestige Computers" className="mb-14 sm:mb-18">
      {/* Centered Heading with Red Lines */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 text-center">
        <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]" />
        <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#111827] tracking-[-0.02em]">
          Why Choose <span className="text-[#dc1414]">PCS?</span>
        </h2>
        <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]" />
      </div>

      {/* 6 Grid Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {REASONS.map(({ id, title, Icon }) => (
          <div
            key={id}
            className="bg-[#fef7f7] rounded-2xl border border-[#fae2e2] p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-[0_2px_10px_rgba(220,16,16,0.03)] hover:shadow-[0_8px_20px_rgba(220,16,16,0.08)] hover:border-[#dc1414]/30 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-[#f8d0d0] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-3.5">
              <Icon className="w-6 h-6 text-[#dc1414]" />
            </div>

            <h3 className="text-[13px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
