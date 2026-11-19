export default function StoreLocationAndHours() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
      {/* 1. Store Location Card */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 shadow-sm flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#fff1f2] border border-[#fecdd3] flex items-center justify-center text-[#dc1414]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="text-[15px] font-bold text-[#111827]">
            Store Location
          </h3>
        </div>

        {/* Vector Stylized Map Card */}
        <a
          href="https://maps.google.com/?q=Prestige+Computers+IT+Market+Civil+Lines"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f1f5f9] h-[130px] transition-all hover:border-[#dc1414]/50 hover:shadow-xs"
        >
          {/* Map Graphic Background */}
          <svg viewBox="0 0 300 130" className="w-full h-full object-cover" aria-hidden="true">
            {/* Ground */}
            <rect width="300" height="130" fill="#f1f5f9" />
            {/* Green Parks */}
            <path d="M10 20 Q50 5 80 35 L80 90 Q30 80 10 90 Z" fill="#bbf7d0" fillOpacity="0.7" />
            <path d="M220 80 Q250 65 290 85 L290 120 L220 120 Z" fill="#bbf7d0" fillOpacity="0.6" />
            {/* Roads */}
            <line x1="0" y1="65" x2="300" y2="65" stroke="#ffffff" strokeWidth="14" />
            <line x1="0" y1="65" x2="300" y2="65" stroke="#eab308" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="140" y1="0" x2="140" y2="130" stroke="#ffffff" strokeWidth="12" />
            <line x1="140" y1="0" x2="140" y2="130" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="40" y1="0" x2="40" y2="130" stroke="#ffffff" strokeWidth="8" />
            <line x1="240" y1="0" x2="240" y2="130" stroke="#ffffff" strokeWidth="8" />
            {/* Pin Marker */}
            <g transform="translate(140, 52)">
              <circle cx="0" cy="0" r="10" fill="#fee2e2" />
              <path d="M0 -12 C-6 -12 -10 -8 -10 -2 C-10 6 0 16 0 16 C0 16 10 6 10 -2 C10 -8 6 -12 0 -12 Z" fill="#dc1414" />
              <circle cx="0" cy="-3" r="3" fill="#ffffff" />
            </g>
          </svg>

          {/* Floating Badge */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-xs rounded-lg px-2.5 py-1.5 border border-[#e2e8f0] flex items-center justify-between shadow-xs">
            <div>
              <div className="text-[11.5px] font-bold text-[#111827] leading-none group-hover:text-[#dc1414] transition-colors">
                Prestige Computers (PCS)
              </div>
              <div className="text-[10px] text-[#64748b] mt-0.5">
                IT Market, Civil Lines
              </div>
            </div>
            <span className="text-[#dc1414] text-xs font-bold">↗</span>
          </div>
        </a>
      </div>

      {/* 2. Business Hours Card */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#fff1f2] border border-[#fecdd3] flex items-center justify-center text-[#dc1414]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#111827]">
              Business Hours
            </h3>
          </div>

          <div className="space-y-2 mt-4 text-[12.5px]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#374151]">Monday – Saturday</span>
              <span className="text-[#111827] font-medium">10:00 AM – 8:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#374151]">Sunday</span>
              <span className="text-[#111827] font-medium">11:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-5 pt-3 border-t border-[#f1f3f7]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[11.5px] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>Store Open Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}
