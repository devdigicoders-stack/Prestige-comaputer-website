export default function ContactOtherWays() {
  const cards = [
    {
      id: 'sales',
      title: 'Sales Enquiry',
      desc: 'Get product details, best offers and bulk quotes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <path d="M4 13a8 8 0 0 1 16 0" />
          <rect x="3" y="13" width="3.2" height="5.5" rx="1.4" />
          <rect x="17.8" y="13" width="3.2" height="5.5" rx="1.4" />
          <path d="M19.4 18.5A3 3 0 0 1 16.5 21H13" />
        </svg>
      ),
    },
    {
      id: 'rental',
      title: 'Rental Support',
      desc: 'Choose a rental plan, check availability or get a custom quote.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: 'tech',
      title: 'Technical Support',
      desc: 'Need help with setup, installation or any technical issue?',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: 'bulk',
      title: 'Business & Bulk Orders',
      desc: 'Custom IT solutions for businesses, schools and institutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#dc1414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="9" y1="6" x2="15" y2="6" />
          <line x1="9" y1="10" x2="15" y2="10" />
          <line x1="9" y1="14" x2="15" y2="14" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      ),
    },
  ]

  return (
    <section aria-label="Other Ways We Can Help" className="mb-14 sm:mb-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111827] flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
          <span>
            Other Ways <span className="text-[#dc1414]">We Can Help</span>
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <div
            key={c.id}
            className="group bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#dc1414]/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                {c.icon}
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#111827] leading-snug">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[12px] sm:text-[12.5px] text-[#6b7280] leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
