import Link from 'next/link'
import { getActiveCategories, getCategoryImageUrl } from '../../services/categoryApi'

export const metadata = {
  title: 'All Computer Categories | Laptops, Desktops, Gaming PCs & Hardware',
  description:
    'Explore all computer categories at Prestige Computers (PCS Doha). Brand-new systems, certified pre-owned devices, custom gaming PCs, and B2B rentals with official warranty.',
  keywords: [
    'computer categories',
    'laptops qatar',
    'desktops doha',
    'gaming pcs',
    'monitors',
    'workstations',
    'prestige computers doha',
  ],
  alternates: {
    canonical: '/categories',
  },
}

export default async function CategoriesPage() {
  // Fetch dynamic categories from backend API
  const liveCategories = await getActiveCategories()
  const categories = Array.isArray(liveCategories) ? liveCategories : []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Computer & Hardware Categories',
    description:
      'Explore computer categories including Laptops, Desktops, Gaming PCs, Monitors, and Accessories available to buy and rent.',
    url: 'https://pcsdoha.net/categories',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categories.map((cat, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: cat.name,
        url: `https://pcsdoha.net/products?category=${cat.slug}`,
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
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(225,20,20,0.35),transparent_70%)] pointer-events-none" />
          </div>

          {/* Categories Grid */}
          <section aria-label="All Categories Grid">
            {categories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((cat) => {
                  const id = cat.slug || cat._id
                  const title = cat.name || cat.title
                  const count =
                    typeof cat.productCount === 'number'
                      ? `${cat.productCount} ${cat.productCount === 1 ? 'Product' : 'Products'}`
                      : `${cat.count || 0} Products`
                  const startPrice = cat.startPrice || 'From QAR 299'
                  const rentPrice = cat.rentPrice || 'Rent Available'
                  const desc = cat.description || cat.desc
                  const features = cat.features?.length ? cat.features : ['Certified Hardware', 'Official Warranty', 'Fast Delivery']
                  const badge = cat.badge
                  const imageUrl = cat.image ? getCategoryImageUrl(cat.image) : ''

                  return (
                    <div
                      key={id}
                      className="bg-white rounded-2xl border border-[#e7eaf0] p-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/35 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top Row: Badge & Count */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[12px] font-semibold text-[#6b7280]">
                            {count}
                          </span>
                          {badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#e11212] text-white text-[10.5px] font-semibold leading-none shadow-xs">
                              {badge}
                            </span>
                          )}
                        </div>

                        {/* Title & Image row */}
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="text-[19px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors leading-tight">
                            {title}
                          </h2>
                          {imageUrl && (
                            <div className="w-12 h-12 rounded-lg bg-[#f8f9fb] border border-[#e5e7eb] overflow-hidden shrink-0">
                              <img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                          )}
                        </div>

                        <p className="mt-2 text-[13px] text-[#4b5563] leading-relaxed">
                          {desc}
                        </p>

                        {/* Feature Bullets */}
                        <ul className="mt-4 space-y-1.5 text-[12px] text-[#374151]">
                          {features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dc1414] shrink-0" />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Row: Pricing & Link */}
                      <div className="mt-6 pt-4 border-t border-[#f0f2f5] flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[14px] font-bold text-[#111827]">
                            {startPrice}
                          </p>
                          <p className="text-[11.5px] text-[#dc1414] font-medium">
                            {rentPrice}
                          </p>
                        </div>

                        <Link
                          href={`/products?category=${id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[12.5px] font-semibold shadow-[0_4px_12px_rgba(220,16,16,0.25)] transition-all cursor-pointer"
                        >
                          <span>Explore</span>
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center max-w-xl mx-auto shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#dc1414] flex items-center justify-center mx-auto mb-3.5">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-bold text-[#111827]">No Categories Found</h3>
                <p className="text-[13px] text-[#6b7280] mt-1 mb-5">
                  Categories will appear dynamically once added from the Admin Panel.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#dc1414] text-white text-[13px] font-semibold hover:bg-[#b91c1c] transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            )}
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
