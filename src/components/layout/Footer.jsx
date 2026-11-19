import Link from 'next/link'

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Laptops', href: '/products?category=laptops' },
      { label: 'Desktops', href: '/products?category=desktops' },
      { label: 'Gaming PCs', href: '/products?category=gaming-pcs' },
      { label: 'Workstations', href: '/products?category=workstations' },
      { label: 'Accessories', href: '/products?category=accessories' },
      { label: 'Components', href: '/products?category=components' },
    ],
  },
  {
    title: 'Service',
    links: [
      { label: 'Rent a Computer', href: '/rentals' },
      { label: 'Business Solutions', href: '/about' },
      { label: 'Education Solutions', href: '/about' },
      { label: 'Deals & Offers', href: '/products' },
      { label: 'Bulk Orders', href: '/contact' },
      { label: 'Track Order', href: '/track-order' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/faq' },
      { label: 'Returns & Refunds', href: '/refund-policy' },
      { label: 'Shipping & Delivery', href: '/shipping-policy' },
      { label: 'Warranty Information', href: '/warranty' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Stores', href: '/store-locator' },
      { label: 'Tech Guides & Blog', href: '/blog' },
      { label: 'Categories', href: '/categories' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

function FooterSocials() {
  return (
    <div className="mt-4 flex items-center gap-2.5">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#dc1414] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.6v3h2.6V21h3.3Z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#dc1414] text-white flex items-center justify-center transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#dc1414] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M21.6 7.4a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 9.1 2 12 2 12s0 2.9.4 4.6a2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.6.4-4.6s0-2.9-.4-4.6ZM10 15V9l5.2 3-5.2 3Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#dc1414] text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
          <path d="M6.9 8.5H3.6V19h3.3V8.5ZM5.2 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 12.8c0-3.1-1.7-4.6-4-4.6-1.8 0-2.7 1-3.1 1.7V8.5H10v10.5h3.3v-5.7c0-1.5.7-2.4 2-2.4 1.2 0 1.8.8 1.8 2.4V19h3.3v-6.2Z" />
        </svg>
      </a>
    </div>
  )
}

function PaymentBadges() {
  return (
    <div className="mt-5 flex items-center flex-wrap gap-2" aria-label="Accepted payment methods">
      {/* VISA */}
      <div
        className="h-[27px] px-2.5 rounded-[5px] bg-white flex items-center justify-center shadow-sm select-none"
        title="Visa"
      >
        <svg viewBox="0 0 54 18" className="h-[13px] w-auto" aria-label="Visa">
          <text
            x="27"
            y="14"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="16"
            letterSpacing="-0.5"
            fill="#1A1F71"
          >
            VISA
          </text>
        </svg>
      </div>

      {/* Mastercard */}
      <div
        className="h-[27px] px-2.5 rounded-[5px] bg-white flex items-center justify-center shadow-sm select-none"
        title="Mastercard"
      >
        <svg viewBox="0 0 38 24" className="h-[17px] w-auto" aria-label="Mastercard">
          <circle cx="13.5" cy="12" r="8.5" fill="#EB001B" />
          <circle cx="24.5" cy="12" r="8.5" fill="#F79E1B" />
          <path
            d="M19 5.3A8.5 8.5 0 0 1 22 12a8.5 8.5 0 0 1-3 6.7A8.5 8.5 0 0 1 16 12a8.5 8.5 0 0 1 3-6.7Z"
            fill="#FF5F00"
          />
        </svg>
      </div>

      {/* PayPal */}
      <div
        className="h-[27px] px-2.5 rounded-[5px] bg-white flex items-center justify-center shadow-sm select-none"
        title="PayPal"
      >
        <svg viewBox="0 0 66 20" className="h-[13px] w-auto" aria-label="PayPal">
          <text
            x="33"
            y="15"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="800"
            fontStyle="italic"
            fontSize="15.5"
            letterSpacing="-0.4"
          >
            <tspan fill="#003087">Pay</tspan>
            <tspan fill="#009CDE">Pal</tspan>
          </text>
        </svg>
      </div>

      {/* Apple Pay */}
      <div
        className="h-[27px] px-2.5 rounded-[5px] bg-white flex items-center justify-center shadow-sm select-none"
        title="Apple Pay"
      >
        <svg viewBox="0 0 56 20" className="h-[14px] w-auto" aria-label="Apple Pay">
          <path
            d="M12.5 5.2c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1.1Zm1.4 4.7c0-1.5 1.2-2.2 1.3-2.3-.7-1-1.8-1.2-2.2-1.2-.9-.1-1.8.6-2.3.6-.5 0-1.2-.5-2-.5-1 0-2 .6-2.5 1.5-1.1 1.9-.3 4.7.8 6.2.5.7 1.1 1.6 1.9 1.5.8 0 1.1-.5 2-.5.9 0 1.2.5 2 .5.8 0 1.4-.7 1.9-1.5.6-.9.8-1.7.8-1.8 0 0-1.7-.7-1.7-2.5Z"
            fill="#111827"
          />
          <text
            x="35.5"
            y="14.5"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="700"
            fontSize="13.5"
            fill="#111827"
          >
            Pay
          </text>
        </svg>
      </div>

      {/* Google Pay */}
      <div
        className="h-[27px] px-2.5 rounded-[5px] bg-white flex items-center justify-center shadow-sm select-none"
        title="Google Pay"
      >
        <svg viewBox="0 0 58 20" className="h-[14px] w-auto" aria-label="Google Pay">
          <path
            d="M15.8 10.2c0-.4 0-.8-.1-1.2H10.2v2.3h3.2c-.1.7-.6 1.4-1.2 1.8v1.5h2c1.1-1.1 1.6-2.6 1.6-4.4Z"
            fill="#4285F4"
          />
          <path
            d="M10.2 16c1.6 0 2.9-.5 3.9-1.4l-2-1.5c-.5.4-1.2.6-1.9.6-1.5 0-2.8-1-3.2-2.4H5v1.6C6 14.8 7.9 16 10.2 16Z"
            fill="#34A853"
          />
          <path
            d="M7 11.3c-.1-.4-.2-.8-.2-1.3s.1-.9.2-1.3V7.1H5C4.5 8 4.3 9 4.3 10s.2 2 .7 2.9l2-1.6Z"
            fill="#FBBC05"
          />
          <path
            d="M10.2 6.3c.9 0 1.6.3 2.2.9l1.7-1.7C13.1 4.6 11.8 4 10.2 4 7.9 4 6 5.2 5 7.1l2 1.6c.4-1.4 1.7-2.4 3.2-2.4Z"
            fill="#EA4335"
          />
          <text
            x="36"
            y="14.5"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="600"
            fontSize="13.5"
            fill="#4b5563"
          >
            Pay
          </text>
        </svg>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0c] text-white">
      {/* SVG filter so /logo.png dark ink renders crisp white on dark bg */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <filter id="footer-logo-dark-bg" colorInterpolationFilters="sRGB">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="-3.2 0 0 0 1.45  -3.2 0 0 0 1.45  -3.2 0 0 0 1.45  0 0 0 1 0"
              result="blackToWhite"
            />
            <feBlend
              in="SourceGraphic"
              in2="blackToWhite"
              mode="screen"
              result="combined"
            />
            <feComposite in="combined" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Main Footer Columns */}
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-11 pb-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.55fr_0.85fr_1fr_1.05fr_0.95fr_1.45fr] gap-y-8 gap-x-6">
          {/* Column 1: Brand Logo + About + Socials */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Prestige Computers — A Tiny City Full of Amazing Computers"
                className="h-[54px] sm:h-[62px] w-auto object-contain"
                style={{ filter: 'url(#footer-logo-dark-bg)' }}
              />
            </Link>

            <p className="mt-3.5 text-[12.5px] leading-[1.6] text-[#c7cbd1] max-w-[265px]">
              Your trusted destination to buy or rent laptops, desktops, gaming
              PCs and accessories with flexible plans and expert support.
            </p>

            <FooterSocials />
          </div>

          {/* Columns 2-5: Shop, Service, Support, Company */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[14px] font-bold text-white tracking-[-0.01em] mb-3.5">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12.5px] text-[#c7cbd1] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 6: Contact Us + Payment Badges */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-[14px] font-bold text-white tracking-[-0.01em] mb-3.5">
              Contact Us
            </h3>

            <ul className="space-y-2.5 text-[12.5px] text-[#c7cbd1]">
              <li>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#d1d5db] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@prestigecomputers.in"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors break-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#d1d5db] shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <span>support@prestigecomputers.in</span>
                </a>
              </li>

              <li className="inline-flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#d1d5db] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1 1 18.5 10c0 5.3-6.5 11-6.5 11Z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
                <span>Civil Lines, Kanpur, Uttar Pradesh</span>
              </li>
            </ul>

            <PaymentBadges />
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-white/12">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#9ca3af]">
          <p>&copy; 2025 Prestige Computers (PCS). All Rights Reserved.</p>

          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <Link href="/about" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
