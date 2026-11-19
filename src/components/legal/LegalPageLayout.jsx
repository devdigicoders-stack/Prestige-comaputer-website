'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund & Cancellation', href: '/refund-policy' },
  { label: 'Shipping & Delivery', href: '/shipping-policy' },
  { label: 'Warranty & Rental Agreement', href: '/warranty' },
]

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated = '18 November 2026',
  badge = 'Official Store Policy',
  children,
}) {
  const pathname = usePathname()

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-[#6b7280]">Legal & Policies</span>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">{title}</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fee2e2] text-[#dc1414]">
                {badge}
              </span>
              <span className="text-xs text-[#6b7280] font-medium">
                Last Updated: {lastUpdated}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
              {title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#4b5563] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2.5 border border-[#d1d5db] hover:bg-[#f3f4f6] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>🖨️</span>
              <span>Print Policy</span>
            </button>
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
            >
              <span>Legal Desk</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Policy Navigation Sidebar (lg:col-span-3) */}
          <aside className="lg:col-span-3 space-y-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] px-3 mb-2">
                All Legal Documents
              </h3>
              <nav className="space-y-1">
                {LEGAL_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]'
                          : 'text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#111827]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-2xl p-5 text-white shadow-sm">
              <span className="text-base">⚖️</span>
              <h4 className="text-sm font-bold mt-1.5">Compliance & Grievance</h4>
              <p className="text-[11px] text-[#cbd5e1] mt-1 leading-snug">
                Questions regarding our agreements or payment handling? Reach our compliance officer directly.
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs space-y-1">
                <p>Email: <a href="mailto:legal@prestigecomputers.in" className="text-[#fca5a5] hover:underline">legal@prestigecomputers.in</a></p>
                <p>Phone: <a href="tel:+919876543210" className="text-[#fca5a5] hover:underline">+91 98765 43210</a></p>
              </div>
            </div>
          </aside>

          {/* Right Column: Policy Document Prose (lg:col-span-9) */}
          <main className="lg:col-span-9 bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm">
            <div className="prose prose-sm sm:prose-base max-w-none text-[#374151] leading-relaxed [&>h2]:text-lg sm:[&>h2]:text-xl [&>h2]:font-extrabold [&>h2]:text-[#111827] [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-[#f3f4f6] [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-[#111827] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:mb-4">
              {children}
            </div>

            {/* Bottom Acknowledgement Box */}
            <div className="mt-10 pt-6 border-t border-[#f3f4f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
              <p>Prestige Computers Pvt. Ltd. • CIN: U72900UP2024PTC184910</p>
              <div className="flex gap-4">
                <Link href="/terms" className="hover:text-[#dc1414] hover:underline">Terms</Link>
                <Link href="/privacy" className="hover:text-[#dc1414] hover:underline">Privacy</Link>
                <Link href="/faq" className="hover:text-[#dc1414] hover:underline">Help Center</Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
