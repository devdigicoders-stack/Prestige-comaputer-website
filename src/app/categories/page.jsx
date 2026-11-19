import Link from 'next/link'

export const metadata = {
  title: 'All Computer Categories | Laptops, Desktops, Gaming PCs & Hardware',
  description:
    'Explore all computer categories at Prestige Computers. From high-performance gaming rigs and workstations to business laptops and computer rentals with UK warranty.',
  keywords: [
    'computer categories',
    'laptops',
    'desktops',
    'gaming pcs',
    'monitors',
    'workstations',
    'prestige computers categories',
  ],
  alternates: {
    canonical: '/categories',
  },
  openGraph: {
    title: 'All Computer Categories | Prestige Computers',
    description:
      'Browse all computing categories: Laptops, Desktops, Gaming Rigs, Workstations, Monitors & Accessories.',
    url: 'https://prestigecomputers.co.uk/categories',
    siteName: 'Prestige Computers',
    type: 'website',
  },
}

const CATEGORY_ITEMS = [
  {
    id: 'laptops',
    title: 'Laptops & Ultrabooks',
    count: '124 Products',
    startPrice: 'From ₹29,999',
    rentPrice: 'Rent from ₹499/day',
    desc: 'Lightweight ultrabooks, student laptops, business workhorses, and Apple MacBooks.',
    features: ['Intel Core & AMD Ryzen', 'Apple M2/M3 Silicon', '13" to 17" Displays', 'Up to 20h Battery'],
    badge: 'Popular',
    iconColor: 'from-[#e11414] to-[#990a0d]',
  },
  {
    id: 'gaming-pcs',
    title: 'Gaming PCs & Rigs',
    count: '68 Products',
    startPrice: 'From ₹59,999',
    rentPrice: 'Rent from ₹1,299/day',
    desc: 'High-FPS custom gaming towers powered by NVIDIA GeForce RTX 40-Series & liquid cooling.',
    features: ['RTX 4060 to RTX 4090', 'ARGB Liquid Cooling', 'DDR5 32GB/64GB RAM', 'Overclocked CPUs'],
    badge: 'Hot Deal',
    iconColor: 'from-[#ef4444] to-[#b91c1c]',
  },
  {
    id: 'desktops',
    title: 'Desktop Computers',
    count: '54 Products',
    startPrice: 'From ₹24,999',
    rentPrice: 'Rent from ₹399/day',
    desc: 'Reliable office desktops, small form factor PCs, and tower configurations for daily productivity.',
    features: ['Intel Core i5/i7/i9', 'Fast NVMe SSD Storage', 'Multi-Monitor Support', '3-Yr Warranty'],
    badge: null,
    iconColor: 'from-[#3b82f6] to-[#1d4ed8]',
  },
  {
    id: 'workstations',
    title: 'Pro Workstations',
    count: '28 Products',
    startPrice: 'From ₹1,19,999',
    rentPrice: 'Rent from ₹2,499/day',
    desc: 'Heavy-duty workstation rigs engineered for 3D animation, CAD, rendering, and AI model workflows.',
    features: ['NVIDIA RTX Ada / Quadro', 'Intel Xeon & Threadripper', 'ECC Memory Support', 'Certified ISV Drivers'],
    badge: 'Enterprise',
    iconColor: 'from-[#8b5cf6] to-[#6d28d9]',
  },
  {
    id: 'all-in-one',
    title: 'All-in-One PCs',
    count: '24 Products',
    startPrice: 'From ₹34,999',
    rentPrice: 'Rent from ₹699/day',
    desc: 'Sleek all-in-one desktop displays with integrated computing power and wireless accessories.',
    features: ['24" to 27" 4K IPS Screens', 'Built-in FHD Webcams', 'Clean Cable Setup', 'Integrated Audio'],
    badge: null,
    iconColor: 'from-[#06b6d4] to-[#0e7490]',
  },
  {
    id: 'monitors',
    title: 'Monitors & Displays',
    count: '42 Products',
    startPrice: 'From ₹8,999',
    rentPrice: 'Rent from ₹199/day',
    desc: 'High-refresh rate gaming monitors, curved ultra-wides, and color-accurate 4K creative displays.',
    features: ['144Hz to 360Hz Refresh', 'IPS & OLED Panels', 'G-Sync / FreeSync', 'USB-C Hub Delivery'],
    badge: null,
    iconColor: 'from-[#10b981] to-[#047857]',
  },
  {
    id: 'accessories',
    title: 'Computer Accessories',
    count: '96 Products',
    startPrice: 'From ₹999',
    rentPrice: 'Add-on available',
    desc: 'Mechanical RGB keyboards, precision gaming mice, studio headsets, docking stations, and webcams.',
    features: ['Hot-swap Switches', 'Ultra-low Latency 2.4G', 'Spatial 7.1 Audio', 'Thunderbolt 4 Docks'],
    badge: null,
    iconColor: 'from-[#f59e0b] to-[#b45309]',
  },
  {
    id: 'components',
    title: 'PC Components',
    count: '85 Products',
    startPrice: 'From ₹1,499',
    rentPrice: 'Upgrade service',
    desc: 'Graphics cards, processors, motherboards, DDR4/DDR5 RAM kits, NVMe SSDs, and modular PSUs.',
    features: ['NVIDIA & AMD GPUs', 'Intel Core & AMD AM5', 'Gen4/Gen5 M.2 SSDs', '80+ Gold/Platinum PSUs'],
    badge: null,
    iconColor: 'from-[#6366f1] to-[#4338ca]',
  },
  {
    id: 'networking',
    title: 'Networking & WiFi',
    count: '31 Products',
    startPrice: 'From ₹1,999',
    rentPrice: 'Event rental',
    desc: 'WiFi 6/6E and WiFi 7 routers, mesh systems, Gigabit switches, and network security appliances.',
    features: ['Tri-Band WiFi 6E/7', 'Mesh Whole-home Coverage', 'Multi-Gig 2.5G/10G Ports', 'Advanced Firewall'],
    badge: null,
    iconColor: 'from-[#14b8a6] to-[#0f766e]',
  },
  {
    id: 'printers',
    title: 'Printers & Scanners',
    count: '18 Products',
    startPrice: 'From ₹6,499',
    rentPrice: 'Rent from ₹350/day',
    desc: 'High-speed office laser printers, eco-tank wireless printers, and commercial document scanners.',
    features: ['Duplex Auto-printing', 'Wireless & AirPrint', 'Ultra Low Cost per Page', 'High-res Scanning'],
    badge: null,
    iconColor: 'from-[#64748b] to-[#334155]',
  },
]

export default function CategoriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Computer & Hardware Categories',
    description:
      'Explore computer categories including Laptops, Desktops, Gaming PCs, Monitors, and Accessories available to buy and rent.',
    url: 'https://prestigecomputers.co.uk/categories',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: CATEGORY_ITEMS.map((cat, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: cat.title,
        url: `https://prestigecomputers.co.uk/products?category=${cat.id}`,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#f8f9fa] min-h-screen py-8 lg:py-12">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 text-[12.5px] text-[#6b7280]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#dc1414] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#111827]">Categories</li>
            </ol>
          </nav>

          {/* Hero Banner Header */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d0406] via-[#1a0508] to-[#0f0406] text-white p-7 sm:p-10 mb-8 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dc1414]/20 border border-[#dc1414]/40 text-[#ff5c5c] text-[11.5px] font-semibold uppercase tracking-wider mb-3">
                Prestige Computers Catalog
              </span>
              <h1 className="text-[28px] sm:text-[38px] font-bold italic tracking-[-0.02em] leading-tight">
                Explore All Computer <span className="text-[#ff3b3b]">Categories</span>
              </h1>
              <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#d1d5db] leading-relaxed">
                Find the perfect system tailored to your budget and workflow. Whether you want to buy brand new, rent flexibly, or upgrade your current setup, we provide certified genuine hardware with full UK warranty.
              </p>
            </div>
            {/* Background Glow */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(225,20,20,0.35),transparent_70%)] pointer-events-none" />
          </div>

          {/* Categories Grid */}
          <section aria-label="All Categories Grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORY_ITEMS.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-2xl border border-[#e7eaf0] p-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/35 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Badge & Count */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[12px] font-semibold text-[#6b7280]">
                        {cat.count}
                      </span>
                      {cat.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#e11212] text-white text-[10.5px] font-semibold leading-none shadow-xs">
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-[19px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors leading-tight">
                      {cat.title}
                    </h2>

                    <p className="mt-2 text-[13px] text-[#4b5563] leading-relaxed">
                      {cat.desc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="mt-4 space-y-1.5 text-[12px] text-[#374151]">
                      {cat.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#dc1414]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Row: Pricing & Link */}
                  <div className="mt-6 pt-4 border-t border-[#f0f2f5] flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[14px] font-bold text-[#111827]">
                        {cat.startPrice}
                      </p>
                      <p className="text-[11.5px] text-[#dc1414] font-medium">
                        {cat.rentPrice}
                      </p>
                    </div>

                    <Link
                      href={`/products?category=${cat.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[12.5px] font-semibold shadow-[0_4px_12px_rgba(220,16,16,0.25)] transition-all cursor-pointer"
                    >
                      <span>Explore</span>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Rental Banner Callout */}
          <div className="mt-10 rounded-2xl bg-[#111216] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 text-white">
            <div>
              <h2 className="text-[20px] sm:text-[23px] font-bold">
                Need a computer for a temporary project or event?
              </h2>
              <p className="mt-1 text-[13.5px] text-[#9ca3af] max-w-xl">
                Rent top-tier laptops, Macs, and gaming PCs with zero lock-in. Flexible daily, weekly, and monthly rates with instant delivery in London &amp; nationwide.
              </p>
            </div>
            <Link
              href="/rentals"
              className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-[#f3f4f6] text-[#111827] font-bold text-[13.5px] shadow-lg transition-all cursor-pointer"
            >
              View Rental Plans
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
