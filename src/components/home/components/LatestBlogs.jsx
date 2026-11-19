import Link from 'next/link'

function LaptopGuideArtwork() {
  return (
    <svg
      viewBox="0 0 220 165"
      className="w-full h-full block object-cover"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Modern silver laptop on a bright office desk"
    >
      <defs>
        <linearGradient id="blog1Bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="45%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="blog1Desk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="blog1Screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#09111f" />
          <stop offset="55%" stopColor="#0f2942" />
          <stop offset="100%" stopColor="#071324" />
        </linearGradient>
        <linearGradient id="blog1Glow" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="blog1Deck" x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="55%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>

      {/* Blurred studio office backdrop */}
      <rect width="220" height="165" fill="url(#blog1Bg)" />
      <rect x="0" y="0" width="90" height="110" fill="#334155" fillOpacity="0.45" />
      <rect x="18" y="26" width="54" height="12" rx="4" fill="#94a3b8" fillOpacity="0.35" />
      <rect x="12" y="52" width="66" height="10" rx="3" fill="#e2e8f0" fillOpacity="0.28" />
      <circle cx="178" cy="28" r="36" fill="#f8fafc" fillOpacity="0.24" />

      {/* Desk surface */}
      <polygon points="0,104 220,96 220,165 0,165" fill="url(#blog1Desk)" />

      {/* Laptop shadow */}
      <polygon points="4,132 162,164 218,134 72,108" fill="#0f172a" fillOpacity="0.24" />

      {/* Laptop screen lid (angled perspective) */}
      <polygon
        points="92,16 214,34 202,126 70,96"
        fill="#0b0f17"
        stroke="#334155"
        strokeWidth="1.5"
      />
      {/* Inner display panel */}
      <polygon points="97,22 208,38 197,119 76,92" fill="url(#blog1Screen)" />

      {/* Abstract geometric tech graphic on screen */}
      <polygon
        points="78,91 108,58 148,74 176,56 202,94 196,118"
        fill="url(#blog1Glow)"
        fillOpacity="0.55"
      />
      {/* Glowing cyan grid/lines on screen */}
      <g stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.65">
        <line x1="88" y1="90" x2="105" y2="68" />
        <line x1="97" y1="92" x2="114" y2="66" />
        <line x1="106" y1="94" x2="123" y2="69" />
        <line x1="115" y1="96" x2="132" y2="72" />
        <line x1="124" y1="98" x2="141" y2="75" />
        <line x1="133" y1="100" x2="151" y2="77" />
        <line x1="142" y1="103" x2="161" y2="79" />
        <line x1="151" y1="105" x2="171" y2="82" />
        <line x1="160" y1="107" x2="181" y2="84" />
        <line x1="170" y1="110" x2="191" y2="87" />
        <line x1="180" y1="112" x2="199" y2="91" />
      </g>
      <polyline
        points="82,86 108,62 146,76 178,60 198,86"
        fill="none"
        stroke="#bae6fd"
        strokeWidth="1.4"
        strokeOpacity="0.85"
      />
      {/* Screen gloss reflection */}
      <polygon points="97,22 152,30 120,102 76,92" fill="#ffffff" fillOpacity="0.06" />

      {/* Laptop base / aluminum keyboard deck */}
      <polygon points="70,96 202,126 146,162 4,126" fill="url(#blog1Deck)" />
      {/* Front aluminum lip edge */}
      <polygon points="4,126 146,162 146,165 4,132" fill="#64748b" />
      <polygon points="146,162 202,126 202,131 146,165" fill="#475569" />

      {/* Keyboard recess */}
      <polygon points="68,101 180,127 154,145 40,117" fill="#111827" />
      {/* Keyboard key rows */}
      <g stroke="#475569" strokeWidth="1.2" strokeDasharray="6 3">
        <line x1="69" y1="105" x2="172" y2="129" />
        <line x1="62" y1="110" x2="165" y2="134" />
        <line x1="55" y1="114" x2="158" y2="139" />
        <line x1="48" y1="118" x2="151" y2="143" />
      </g>

      {/* Trackpad */}
      <polygon
        points="54,128 96,139 81,150 38,139"
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="0.8"
      />
    </svg>
  )
}

function GamingPcArtwork() {
  return (
    <svg
      viewBox="0 0 220 165"
      className="w-full h-full block object-cover"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="RGB Gaming PC tower with glowing liquid cooling fans"
    >
      <defs>
        <radialGradient id="rgbAmbient" cx="50%" cy="48%" r="65%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.65" />
          <stop offset="55%" stopColor="#1e1b4b" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#09090f" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="fanCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="45%" stopColor="#06b6d4" />
          <stop offset="85%" stopColor="#0e7490" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#09090f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fanRainbow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="38%" stopColor="#22c55e" />
          <stop offset="72%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#09090f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fanOrange" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="45%" stopColor="#f97316" />
          <stop offset="80%" stopColor="#ef4444" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#09090f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fanPink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5d0fe" />
          <stop offset="45%" stopColor="#d946ef" />
          <stop offset="80%" stopColor="#7e22ce" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#09090f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rgbStrip" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Dark gaming room backdrop */}
      <rect width="220" height="165" fill="url(#rgbAmbient)" />
      {/* Desk reflection */}
      <rect x="0" y="142" width="220" height="23" fill="#09090b" />
      <ellipse cx="104" cy="150" rx="84" ry="12" fill="#9333ea" fillOpacity="0.3" />

      {/* Gaming PC Tower Chassis */}
      <rect
        x="24"
        y="8"
        width="148"
        height="140"
        rx="8"
        fill="#0d0e14"
        stroke="#27272a"
        strokeWidth="2.5"
      />
      {/* Tempered glass interior */}
      <rect x="33" y="16" width="102" height="122" rx="4" fill="#11121c" stroke="#1f2937" strokeWidth="1.2" />

      {/* Top RGB accent strip */}
      <rect x="36" y="18" width="96" height="3.5" rx="1.5" fill="url(#rgbStrip)" />

      {/* Left Rear Exhaust RGB Fans (2 stacked) */}
      <g>
        <circle cx="54" cy="48" r="18" fill="url(#fanCyan)" />
        <circle cx="54" cy="48" r="14" fill="none" stroke="#22d3ee" strokeWidth="2.4" />
        <circle cx="54" cy="48" r="5" fill="#0f172a" stroke="#67e8f9" strokeWidth="1.2" />

        <circle cx="54" cy="90" r="18" fill="url(#fanRainbow)" />
        <circle cx="54" cy="90" r="14" fill="none" stroke="#4ade80" strokeWidth="2.2" />
        <circle cx="54" cy="90" r="5" fill="#0f172a" stroke="#fde047" strokeWidth="1.2" />
      </g>

      {/* Center AIO Liquid Cooler Pump & Tubing */}
      <path d="M98 62 C112 36, 122 24, 128 22" fill="none" stroke="#18181b" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M104 66 C118 44, 126 30, 130 26" fill="none" stroke="#27272a" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="96" cy="64" r="16" fill="url(#fanPink)" />
      <circle cx="96" cy="64" r="11" fill="#09090f" stroke="#e879f9" strokeWidth="2.4" />
      <circle cx="96" cy="64" r="5" fill="none" stroke="#38bdf8" strokeWidth="1.8" />

      {/* RAM Sticks */}
      <rect x="118" y="34" width="3.5" height="36" rx="1" fill="#38bdf8" />
      <rect x="124" y="34" width="3.5" height="36" rx="1" fill="#e879f9" />

      {/* Horizontal Graphics Card with RGB strip */}
      <rect x="44" y="96" width="84" height="16" rx="2.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <rect x="48" y="102" width="76" height="3.5" rx="1.5" fill="url(#rgbStrip)" />

      {/* PSU Shroud */}
      <rect x="34" y="118" width="100" height="20" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1" />
      <rect x="42" y="125" width="46" height="4" rx="2" fill="#3b82f6" fillOpacity="0.65" />

      {/* Right Front Panel 3 RGB Fans */}
      <rect x="142" y="14" width="24" height="128" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
      <ellipse cx="154" cy="39" rx="9" ry="15" fill="url(#fanCyan)" />
      <ellipse cx="154" cy="39" rx="6.5" ry="11.5" fill="none" stroke="#38bdf8" strokeWidth="2" />

      <ellipse cx="154" cy="78" rx="9" ry="15" fill="url(#fanOrange)" />
      <ellipse cx="154" cy="78" rx="6.5" ry="11.5" fill="none" stroke="#fb923c" strokeWidth="2" />

      <ellipse cx="154" cy="117" rx="9" ry="15" fill="url(#fanPink)" />
      <ellipse cx="154" cy="117" rx="6.5" ry="11.5" fill="none" stroke="#e879f9" strokeWidth="2" />

      {/* Glass diagonal sheen */}
      <polygon points="33,16 90,16 55,138 33,138" fill="#ffffff" fillOpacity="0.05" />
    </svg>
  )
}

function BusinessSetupArtwork() {
  return (
    <svg
      viewBox="0 0 220 165"
      className="w-full h-full block object-cover"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Modern business dual monitor office desk setup"
    >
      <defs>
        <linearGradient id="officeWindow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="55%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="officeDesk" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="50%" stopColor="#3f3f46" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="bizScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c192c" />
          <stop offset="55%" stopColor="#172d4a" />
          <stop offset="100%" stopColor="#0a1220" />
        </linearGradient>
      </defs>

      {/* Modern sunlit office window background */}
      <rect width="220" height="165" fill="url(#officeWindow)" />
      {/* Window mullions / dark vertical frames */}
      <rect x="0" y="0" width="20" height="130" fill="#1e293b" fillOpacity="0.88" />
      <rect x="96" y="0" width="12" height="130" fill="#1e293b" fillOpacity="0.72" />
      <rect x="198" y="0" width="22" height="130" fill="#1e293b" fillOpacity="0.88" />
      {/* City skyline silhouette outside window */}
      <rect x="26" y="34" width="18" height="70" fill="#64748b" fillOpacity="0.42" />
      <rect x="52" y="22" width="24" height="82" fill="#475569" fillOpacity="0.35" />
      <rect x="122" y="28" width="26" height="76" fill="#475569" fillOpacity="0.35" />
      <rect x="158" y="40" width="22" height="64" fill="#64748b" fillOpacity="0.42" />

      {/* Office Desk Surface */}
      <polygon points="0,122 220,122 220,165 0,165" fill="url(#officeDesk)" />
      <line x1="0" y1="122" x2="220" y2="122" stroke="#71717a" strokeWidth="1.2" />

      {/* Desk Warm Ambient Edge Glow */}
      <ellipse cx="110" cy="126" rx="85" ry="9" fill="#38bdf8" fillOpacity="0.16" />

      {/* Monitor Stands */}
      <rect x="55" y="102" width="10" height="24" fill="#18181b" />
      <rect x="40" y="123" width="40" height="4" rx="2" fill="#09090b" />
      <rect x="148" y="102" width="10" height="24" fill="#18181b" />
      <rect x="133" y="123" width="40" height="4" rx="2" fill="#09090b" />

      {/* Left Monitor */}
      <polygon points="16,44 106,50 106,105 16,108" fill="#09090b" stroke="#334155" strokeWidth="1.5" />
      <polygon points="20,48 102,53 102,101 20,104" fill="url(#bizScreen)" />
      {/* Left Monitor Data Lines & Curves */}
      <path d="M24 94 Q55 70, 98 62" fill="none" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.8" />
      <path d="M24 62 Q62 82, 98 94" fill="none" stroke="#93c5fd" strokeWidth="1.1" strokeOpacity="0.6" />
      <rect x="26" y="56" width="22" height="12" rx="1.5" fill="#1e3a5f" fillOpacity="0.7" />
      <rect x="29" y="60" width="14" height="2" rx="1" fill="#7dd3fc" />
      <rect x="29" y="64" width="9" height="2" rx="1" fill="#38bdf8" />

      {/* Right Monitor */}
      <polygon points="110,50 200,44 200,108 110,105" fill="#09090b" stroke="#334155" strokeWidth="1.5" />
      <polygon points="114,53 196,48 196,104 114,101" fill="url(#bizScreen)" />
      {/* Right Monitor Dashboard & Bar Graph */}
      <path d="M118 88 Q154 62, 192 78" fill="none" stroke="#60a5fa" strokeWidth="1.4" strokeOpacity="0.8" />
      <path d="M118 68 Q156 88, 192 58" fill="none" stroke="#38bdf8" strokeWidth="1.1" strokeOpacity="0.65" />
      <rect x="164" y="60" width="24" height="28" rx="2" fill="#0f172a" fillOpacity="0.65" />
      <rect x="168" y="76" width="3.5" height="9" rx="1" fill="#38bdf8" />
      <rect x="174" y="70" width="3.5" height="15" rx="1" fill="#60a5fa" />
      <rect x="180" y="65" width="3.5" height="20" rx="1" fill="#dc1414" />

      {/* Keyboard & Mouse on Desk */}
      <polygon points="62,134 148,134 156,146 54,146" fill="#0f172a" stroke="#3f3f46" strokeWidth="1" />
      <line x1="65" y1="138" x2="145" y2="138" stroke="#475569" strokeWidth="1.4" strokeDasharray="5 3" />
      <line x1="62" y1="142" x2="148" y2="142" stroke="#475569" strokeWidth="1.4" strokeDasharray="5 3" />
      <ellipse cx="174" cy="141" rx="9" ry="5.5" fill="#0f172a" stroke="#3f3f46" strokeWidth="1" />
      <rect x="173" y="137" width="2" height="3.5" rx="1" fill="#38bdf8" />

      {/* Desk Under-edge */}
      <rect x="0" y="156" width="220" height="9" fill="#09090b" />
    </svg>
  )
}

const BLOG_POSTS = [
  {
    id: 'choose-right-laptop-2025',
    slug: 'best-gaming-laptops-2026',
    category: 'Buying Guide',
    title: 'How to Choose the Right Laptop in 2026',
    date: '15 Nov 2026',
    readTime: '6 min read',
    Artwork: LaptopGuideArtwork,
  },
  {
    id: 'best-gaming-pcs-every-budget',
    slug: 'how-to-build-rtx-4070-pc',
    category: 'Gaming',
    title: 'Step-by-Step Custom PC Build Guide: Ryzen 7 & RTX 4070',
    date: '08 Nov 2026',
    readTime: '10 min read',
    Artwork: GamingPcArtwork,
  },
  {
    id: 'why-renting-computers-smart-business',
    slug: 'why-renting-laptops-is-smart',
    category: 'Rentals',
    title: 'Why Renting Computers is Smart for Businesses in 2026',
    date: '02 Nov 2026',
    readTime: '5 min read',
    Artwork: BusinessSetupArtwork,
  },
]

function CalendarMetaIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5 text-[#6b7280] shrink-0"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="12" height="11" rx="2" />
      <path d="M5 1.8v2.4M11 1.8v2.4M2 6.5h12" strokeLinecap="round" />
    </svg>
  )
}

function ClockMetaIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5 text-[#6b7280] shrink-0"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.8v3.4l2.2 1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function LatestBlogs() {
  return (
    <section
      className="w-full bg-white py-6 sm:py-8"
      aria-label="Latest Blogs and Buying Guides"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* Section Header Row */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] tracking-[-0.02em]">
            Latest Blogs &amp; Buying Guides
          </h2>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc1414] hover:text-[#b91c1c] transition-colors shrink-0 group cursor-pointer"
          >
            <span>View All Articles</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3 Horizontal Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {BLOG_POSTS.map((post) => {
            const Artwork = post.Artwork
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-[#e7eaf0] shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_24px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/25 transition-all duration-200 overflow-hidden flex items-stretch min-h-[146px] cursor-pointer"
              >
                {/* Left Thumbnail */}
                <div className="w-[138px] sm:w-[158px] lg:w-[152px] xl:w-[174px] shrink-0 overflow-hidden rounded-2xl bg-[#0f172a]">
                  <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Artwork />
                  </div>
                </div>

                {/* Right Text Details */}
                <div className="flex-1 min-w-0 p-3.5 sm:p-4 flex flex-col justify-between">
                  <div>
                    {/* Category Badge */}
                    <span className="inline-block bg-[#cc1414] text-white text-[11px] font-semibold leading-none px-3 py-1.5 rounded-md tracking-[0.01em]">
                      {post.category}
                    </span>

                    {/* Blog Title */}
                    <h3 className="mt-2.5 text-[14.5px] xl:text-[15.5px] font-bold text-[#111827] leading-[1.32] group-hover:text-[#dc1414] transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  {/* Date & Read Time Meta */}
                  <div className="mt-3 flex items-center flex-wrap gap-x-3.5 gap-y-1 text-[11.5px] font-medium text-[#6b7280]">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarMetaIcon />
                      <span>{post.date}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockMetaIcon />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
