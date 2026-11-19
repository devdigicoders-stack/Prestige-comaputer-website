import Link from 'next/link'
import {
  RentalLaptopVisual,
  RentalDesktopVisual,
  RentalWorkstationVisual,
  RentalMonitorVisual,
  RentalAccessoriesVisual,
} from './RentalsCategoryVisuals'

export default function RentalsCategoryGrid() {
  const categories = [
    {
      id: 'laptops',
      title: 'Laptops on Rent',
      desc: 'For Business, Study & Projects',
      href: '/products?category=laptops',
      visual: <RentalLaptopVisual />,
    },
    {
      id: 'desktops',
      title: 'Desktops on Rent',
      desc: 'Reliable & High-Performance',
      href: '/products?category=desktops',
      visual: <RentalDesktopVisual />,
    },
    {
      id: 'workstations',
      title: 'Workstations on Rent',
      desc: 'For Design, Editing & Development',
      href: '/products?category=workstations',
      visual: <RentalWorkstationVisual />,
    },
    {
      id: 'monitors',
      title: 'Monitors on Rent',
      desc: 'HD, Full HD & 4K Displays',
      href: '/products?category=monitors',
      visual: <RentalMonitorVisual />,
    },
    {
      id: 'accessories',
      title: 'IT Accessories',
      desc: 'Keyboards, Mouse, Headsets & More',
      href: '/products?category=accessories',
      visual: <RentalAccessoriesVisual />,
    },
  ]

  return (
    <section id="categories" aria-label="Explore Rental Categories" className="mb-14 sm:mb-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111827] flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
          <span>
            Explore <span className="text-[#dc1414]">Rental Categories</span>
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#dc1414]/70 inline-block" />
        </h2>
      </div>

      {/* 5 Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group bg-white rounded-2xl border border-[#e5e7eb] p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.07)] hover:border-[#dc1414]/40"
          >
            {/* Visual Box */}
            <div className="h-[120px] bg-[#f8fafc] rounded-xl flex items-center justify-center p-2 mb-3.5 transition-transform duration-200 group-hover:scale-103">
              {cat.visual}
            </div>

            {/* Content & Arrow Row */}
            <div className="flex items-end justify-between gap-2 mt-auto">
              <div>
                <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-0.5 text-[11.5px] text-[#6b7280] leading-snug">
                  {cat.desc}
                </p>
              </div>

              {/* Circle Arrow Action Button */}
              <div className="w-8 h-8 rounded-full border border-[#fecaca] bg-[#fff5f5] text-[#dc1414] group-hover:bg-[#dc1414] group-hover:text-white transition-all duration-200 flex items-center justify-center shrink-0 shadow-xs">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
