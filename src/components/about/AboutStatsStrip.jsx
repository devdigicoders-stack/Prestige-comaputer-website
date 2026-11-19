function CalendarIcon({ className = 'w-9 h-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2.4" />
    </svg>
  )
}

function UsersIcon({ className = 'w-9 h-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function BoxIcon({ className = 'w-9 h-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </svg>
  )
}

function BadgeIcon({ className = 'w-9 h-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc1414"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 13.99 18 22l-6-3.5L6 22l2.52-8.01" />
    </svg>
  )
}

const STATS = [
  {
    id: 'years',
    value: '10+',
    label: 'Years of Excellence',
    Icon: CalendarIcon,
  },
  {
    id: 'customers',
    value: '50,000+',
    label: 'Happy Customers',
    Icon: UsersIcon,
  },
  {
    id: 'products',
    value: '5,000+',
    label: 'Products & Variants',
    Icon: BoxIcon,
  },
  {
    id: 'brands',
    value: '50+',
    label: 'Trusted Brands',
    Icon: BadgeIcon,
  },
]

export default function AboutStatsStrip() {
  return (
    <section aria-label="Key Statistics" className="mb-14 sm:mb-18">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STATS.map(({ id, value, label, Icon }) => (
          <div
            key={id}
            className="bg-white rounded-2xl border border-[#eceff4] p-5 sm:p-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)] hover:border-[#dc1414]/25 transition-all duration-200 flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-[#fef2f2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Icon className="w-8 h-8 text-[#dc1414]" />
            </div>
            <div className="min-w-0">
              <p className="text-[24px] sm:text-[27px] font-bold text-[#111827] leading-none tracking-[-0.02em]">
                {value}
              </p>
              <p className="mt-1 text-[13px] text-[#4b5563] font-medium leading-tight">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
