function FastTruckIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-9 h-9 text-[#dc1414] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Speed lines */}
      <path d="M3 13h5" />
      <path d="M2 17.5h6" />
      <path d="M4.5 22h3.5" />
      {/* Truck body */}
      <path d="M10.5 10.5h12.5v13H10.5" />
      <path d="M23 14.5h5.5l4 4.5v4.5H23v-9Z" />
      <circle cx="14.5" cy="25" r="2.6" />
      <circle cx="27.5" cy="25" r="2.6" />
      <path d="M17.2 23.5h7.6" />
    </svg>
  )
}

function ReturnsIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-9 h-9 text-[#dc1414] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M27.5 15.5A10 10 0 0 0 9.6 11.8" />
      <path d="M9.5 7.5v4.5H14" />
      <path d="M8.5 20.5a10 10 0 0 0 17.9 3.7" />
      <path d="M26.5 28.5V24H22" />
    </svg>
  )
}

function ShieldWarrantyIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-9 h-9 text-[#dc1414] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 5.5 8 9.8v8.2c0 6.5 4.3 11.6 10 13.5 5.7-1.9 10-7 10-13.5V9.8L18 5.5Z" />
      <path d="m13.8 18.2 3 3 5.8-6" />
    </svg>
  )
}

function SecureLockIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-9 h-9 text-[#dc1414] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8.5" y="16" width="19" height="14" rx="3.2" />
      <path d="M12.5 16v-4.5a5.5 5.5 0 0 1 11 0V16" />
      <circle cx="18" cy="22.2" r="1.9" />
      <path d="M18 24.1v2.2" />
    </svg>
  )
}

function SupportHeadsetIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-9 h-9 text-[#dc1414] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 19a10 10 0 0 1 20 0" />
      <rect x="6.5" y="18.5" width="4.5" height="8" rx="2" />
      <rect x="25" y="18.5" width="4.5" height="8" rx="2" />
      <path d="M27.2 26.5A4.5 4.5 0 0 1 22.8 30H19" />
      <circle cx="18" cy="30" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

const TRUST_ITEMS = [
  {
    id: 'shipping',
    title: 'Free Shipping',
    subtitle: 'On orders over £500',
    Icon: FastTruckIcon,
  },
  {
    id: 'returns',
    title: '30 Days Returns',
    subtitle: 'Hassle-free & easy',
    Icon: ReturnsIcon,
  },
  {
    id: 'warranty',
    title: 'Genuine Warranty',
    subtitle: 'Manufacturer warranty included',
    Icon: ShieldWarrantyIcon,
  },
  {
    id: 'payments',
    title: 'Secure Payments',
    subtitle: '100% safe & encrypted',
    Icon: SecureLockIcon,
  },
  {
    id: 'support',
    title: '24/7 Support',
    subtitle: "We're always here to help",
    Icon: SupportHeadsetIcon,
  },
]

export default function TrustStrip() {
  return (
    <section
      className="w-full bg-white py-5 sm:py-6"
      aria-label="Store Benefits and Guarantees"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="rounded-2xl bg-[#fdf0f1] border border-[#f8dde0]/75 px-4 sm:px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-5 lg:gap-y-0 lg:divide-x lg:divide-[#e5ccd0]">
            {TRUST_ITEMS.map(({ id, title, subtitle, Icon }) => (
              <div
                key={id}
                className="flex items-center justify-start lg:justify-center gap-3.5 px-3 xl:px-4"
              >
                <Icon />
                <div className="min-w-0 leading-tight">
                  <p className="text-[13.5px] font-bold text-[#111827] truncate">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-[#4b5563] leading-snug">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
