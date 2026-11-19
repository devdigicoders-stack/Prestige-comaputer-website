import Link from 'next/link'

function DellLogo() {
  return (
    <svg viewBox="0 0 64 64" className="h-[38px] w-auto" role="img" aria-label="Dell">
      <circle cx="32" cy="32" r="27" fill="none" stroke="#007DB8" strokeWidth="3.6" />
      <g fill="#007DB8">
        {/* D */}
        <path d="M10.5 24.5h6.1c4.5 0 7.4 2.8 7.4 7.5s-2.9 7.5-7.4 7.5h-6.1V24.5Zm4 3.4v8.2h1.9c2.2 0 3.5-1.4 3.5-4.1s-1.3-4.1-3.5-4.1h-1.9Z" />
        {/* Tilted E */}
        <g transform="rotate(-28 31 32)">
          <path d="M25.6 25.5h9.4v3h-5.8v2h5.2v2.8h-5.2v2.1h5.8v3h-9.4V25.5Z" />
        </g>
        {/* First L */}
        <path d="M38.2 24.5h3.9v11.6h4.8v3.4h-8.7V24.5Z" />
        {/* Second L */}
        <path d="M47.4 24.5h3.9v11.6h4.8v3.4h-8.7V24.5Z" />
      </g>
    </svg>
  )
}

function HpLogo() {
  return (
    <svg viewBox="0 0 64 64" className="h-[38px] w-auto" role="img" aria-label="HP">
      <circle cx="32" cy="32" r="28" fill="#0096D6" />
      {/* Authentic slanted HP monogram */}
      <g fill="#ffffff">
        {/* h */}
        <path d="M26.6 4.6 17.5 46h5.5l3.7-16.8h4.2L27.2 46h5.5l4-18.3c.6-2.9-1.2-5.2-4.2-5.2h-4.6l4-17.9h-5.3Z" />
        {/* p */}
        <path d="M40.3 22.5 31.8 59.5h5.5l3.1-13.5h5.1c3.8 0 6.8-2.4 7.7-6.3l2.2-10c.9-4.1-1.3-7.2-5.4-7.2h-9.7Zm4.2 4.6h3.4c1.3 0 2 1 1.7 2.4l-2 9.2c-.3 1.5-1.3 2.4-2.8 2.4h-3.4l3.1-14Z" />
      </g>
    </svg>
  )
}

function LenovoLogo() {
  return (
    <svg viewBox="0 0 132 34" className="h-[22px] w-auto" role="img" aria-label="Lenovo">
      <g fill="#E2231A">
        {/* L */}
        <path d="M4 6h4.8v17.2h9.2v4.3H4V6Z" />
        {/* Tilted e */}
        <g transform="rotate(-14 27 19)">
          <path d="M27.2 11.4c4.9 0 8.1 3.3 8.1 7.8 0 .7-.1 1.3-.2 1.8H23.6c.5 2 2 3.1 4.1 3.1 1.6 0 2.9-.6 3.9-1.6l2.7 2.4c-1.5 1.8-3.8 2.9-6.8 2.9-5.1 0-8.6-3.4-8.6-8.2s3.5-8.2 8.3-8.2Zm-3.6 6.4h7.1c-.3-1.8-1.6-2.9-3.5-2.9-1.8 0-3.1 1.1-3.6 2.9Z" />
        </g>
        {/* n */}
        <path d="M39.5 11.8h4.5v2.3c1.1-1.6 2.8-2.7 5.2-2.7 3.7 0 6 2.4 6 6.4v9.7h-4.6v-8.7c0-2.2-1.1-3.4-3-3.4s-3.5 1.3-3.5 3.6v8.5h-4.6V11.8Z" />
        {/* o */}
        <path d="M66.2 11.4c5 0 8.5 3.5 8.5 8.2s-3.5 8.2-8.5 8.2-8.5-3.5-8.5-8.2 3.5-8.2 8.5-8.2Zm0 4c-2.4 0-3.9 1.7-3.9 4.2s1.5 4.2 3.9 4.2 3.9-1.7 3.9-4.2-1.5-4.2-3.9-4.2Z" />
        {/* v */}
        <path d="M75.5 11.8h4.9l4 10.7 4-10.7h4.8l-6.6 15.7h-4.5l-6.6-15.7Z" />
        {/* o */}
        <path d="M102.6 11.4c5 0 8.5 3.5 8.5 8.2s-3.5 8.2-8.5 8.2-8.5-3.5-8.5-8.2 3.5-8.2 8.5-8.2Zm0 4c-2.4 0-3.9 1.7-3.9 4.2s1.5 4.2 3.9 4.2 3.9-1.7 3.9-4.2-1.5-4.2-3.9-4.2Z" />
      </g>
    </svg>
  )
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 384 512" className="h-[32px] w-auto fill-[#000000]" role="img" aria-label="Apple">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function AsusLogo() {
  return (
    <svg viewBox="0 0 156 32" className="h-[19px] w-auto" role="img" aria-label="ASUS">
      <g fill="#00539B">
        {/* A */}
        <path d="M18.8 5.2 6.5 26.8h6.4l9.1-15.9-3.2-5.7Zm3.5 6.4v15.2h15.2v-5.1h-9.7v-3.8l-5.5-6.3Z" />
        {/* S */}
        <path d="M40.6 5.5c-4.4 0-7.2 2.4-7.2 5.9 0 3.7 2.5 5.4 7.7 6.1l6.4.9c1.9.3 2.6.9 2.6 1.8 0 1.1-1.1 1.8-3.1 1.8H33.8v4.8h14.4c5.1 0 8.1-2.6 8.1-6.5 0-3.6-2.4-5.4-7.6-6.2l-6.4-.9c-1.8-.3-2.5-.8-2.5-1.6 0-1 .9-1.6 2.8-1.6h12.6V5.5H40.6Z" />
        {/* U */}
        <path d="M61.2 12.2v7.2c0 4.8 3.2 7.4 8.6 7.4h14.6V12.2h-5.8v9.8H70.4c-2.2 0-3.4-1-3.4-3v-6.8h-5.8ZM61.2 5.5h5.8v4.6h-5.8V5.5Zm17.4 0h5.8v4.6h-5.8V5.5Z" />
        {/* S */}
        <path d="M96.8 5.5c-4.4 0-7.2 2.4-7.2 5.9 0 3.7 2.5 5.4 7.7 6.1l6.4.9c1.9.3 2.6.9 2.6 1.8 0 1.1-1.1 1.8-3.1 1.8H90v4.8h14.4c5.1 0 8.1-2.6 8.1-6.5 0-3.6-2.4-5.4-7.6-6.2l-6.4-.9c-1.8-.3-2.5-.8-2.5-1.6 0-1 .9-1.6 2.8-1.6h12.6V5.5H96.8Z" />
      </g>
    </svg>
  )
}

function AcerLogo() {
  return (
    <svg viewBox="0 0 120 34" className="h-[22px] w-auto" role="img" aria-label="Acer">
      <g fill="#83B81A" transform="skewX(-12) translate(6 0)">
        {/* a */}
        <path d="M12.5 11.2h12.2c4.2 0 6.5 2 6.5 5.8v10.2H11.5c-4.1 0-6.4-2.1-6.4-5.4 0-3.4 2.4-5.5 6.8-5.5h13.7v-.8c0-1.1-.8-1.7-2.4-1.7H12.5v-2.6Zm1.1 9.1c-1.8 0-2.8.7-2.8 1.9 0 1.2 1 1.9 2.8 1.9h12v-3.8h-12Z" />
        {/* c */}
        <path d="M44.5 11.2h12.8v3.6H45.4c-3.1 0-4.9 1.7-4.9 4.4s1.8 4.4 4.9 4.4h11.9v3.6H44.5c-6.3 0-10.1-3.3-10.1-8s3.8-8 10.1-8Z" />
        {/* e */}
        <path d="M70.6 11.2h9.2c4.7 0 7.6 2.7 7.6 6.7 0 2.5-1.4 4.2-4.6 4.2H65.9c.7 1.3 2.2 1.9 4.5 1.9h14.4v3.2H69.5c-6.1 0-9.8-3.2-9.8-8s3.9-8 10.9-8Zm-4.9 7.6h15.2c.6 0 1-.4 1-1.1 0-1.9-1.4-3-4-3h-7.4c-2.6 0-4.3 1.4-4.8 4.1Z" />
        {/* r */}
        <path d="M92.4 11.2h14.4v3.6h-12c-1.7 0-2.6.8-2.6 2.4v10h-5.4V17c0-3.8 2.1-5.8 5.6-5.8Z" />
      </g>
    </svg>
  )
}

function MsiLogo() {
  return (
    <svg viewBox="0 0 144 40" className="h-[26px] w-auto" role="img" aria-label="MSI">
      {/* Red MSI Dragon Shield */}
      <path
        d="M21 4 36 9.5v11.2c0 8.2-6 13.8-15 16.3C12 34.5 6 28.9 6 20.7V9.5L21 4Z"
        fill="#E21B22"
      />
      {/* Stylized White Dragon Crest inside Shield */}
      <path
        d="M15.2 13.8c2.6-2.4 8-2.8 11.2-.2 1.6 1.3 2.1 3.6 1.2 5.4-.8 1.5-2.6 2.2-4.2 1.7 1.4 1 2 2.8 1.4 4.5-.7 2-2.8 3.2-5 3.1-2.5-.1-4.8-1.7-5.6-4.1l2.8-.6c.5 1.1 1.6 1.8 2.8 1.7 1.1-.1 1.9-.9 2-1.9.1-1.2-.8-2.1-2.2-2.2h-2.4v-2.4h2.5c1.3 0 2.3-.7 2.4-1.8.1-1.1-.8-1.9-2.2-1.9-1.2 0-2.3.6-3 1.5l-1.7-2.8Z"
        fill="#ffffff"
      />
      {/* Bold Slanted Black MSI Wordmark */}
      <g fill="#111111" transform="skewX(-15) translate(8 0)">
        {/* m */}
        <path d="M44 12.5h23.5c2.8 0 4.5 1.6 4.5 4.4v11.6h-5.4V18c0-.8-.5-1.2-1.3-1.2h-3.8v11.7h-5.4V16.8h-4.7v11.7H44v-16Z" />
        {/* s */}
        <path d="M80.5 12.5h15.2v4.3H81.8c-.9 0-1.4.4-1.4 1 0 .6.4.9 1.4.9h9.8c3.6 0 5.6 1.8 5.6 4.9 0 3.2-2.1 4.9-5.8 4.9H75.2v-4.3h14.6c1 0 1.5-.4 1.5-1s-.5-1-1.5-1h-9.7c-3.5 0-5.5-1.7-5.5-4.7 0-3.1 2.1-5 5.9-5Z" />
        {/* i */}
        <path d="M101.8 12.5h5.5v16h-5.5v-16Zm0-5.2h5.5v3.5h-5.5V7.3Z" />
      </g>
    </svg>
  )
}

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 148 34" className="h-[22px] w-auto" role="img" aria-label="Microsoft">
      {/* 4-Color Microsoft Squares */}
      <rect x="4" y="6" width="10" height="10" fill="#F25022" />
      <rect x="15.5" y="6" width="10" height="10" fill="#7FBA00" />
      <rect x="4" y="17.5" width="10" height="10" fill="#00A4EF" />
      <rect x="15.5" y="17.5" width="10" height="10" fill="#FFB900" />
      {/* Microsoft Wordmark */}
      <text
        x="33"
        y="23.5"
        fill="#5E5E5E"
        fontSize="19"
        fontWeight="600"
        fontFamily="Segoe UI, Plus Jakarta Sans, system-ui, sans-serif"
        letterSpacing="-0.3"
      >
        Microsoft
      </text>
    </svg>
  )
}

function ArrowRightIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

const TOP_BRANDS = [
  { id: 'dell', name: 'Dell', Logo: DellLogo },
  { id: 'hp', name: 'HP', Logo: HpLogo },
  { id: 'lenovo', name: 'Lenovo', Logo: LenovoLogo },
  { id: 'apple', name: 'Apple', Logo: AppleLogo },
  { id: 'asus', name: 'ASUS', Logo: AsusLogo },
  { id: 'acer', name: 'Acer', Logo: AcerLogo },
  { id: 'msi', name: 'MSI', Logo: MsiLogo },
  { id: 'microsoft', name: 'Microsoft', Logo: MicrosoftLogo },
]

export default function TopBrands() {
  return (
    <section
      className="w-full bg-white py-5 sm:py-6 border-t border-[#f1f3f6]"
      aria-label="Shop by Top Brands"
    >
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Left Heading */}
          <div className="flex items-center justify-between lg:justify-start shrink-0">
            <h2 className="text-[19px] sm:text-[21px] font-bold text-[#111827] tracking-[-0.02em] whitespace-nowrap">
              Shop by Top Brands
            </h2>

            {/* Mobile View All Link */}
            <Link
              href="/products"
              className="lg:hidden inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#dc1414] hover:text-[#a80b0b] cursor-pointer"
            >
              <span>View All Brands</span>
              <ArrowRightIcon />
            </Link>
          </div>

          {/* 8 Brand Logo Cards */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {TOP_BRANDS.map(({ id, name, Logo }) => (
              <Link
                key={id}
                href={`/products?brand=${id}`}
                aria-label={`Shop ${name}`}
                className="group bg-white rounded-xl border border-[#e7eaf0] shadow-[0_2px_8px_rgba(16,24,40,0.03)] hover:shadow-[0_6px_16px_rgba(16,24,40,0.08)] hover:border-[#dc1414]/35 hover:-translate-y-0.5 transition-all duration-200 h-[56px] px-3 flex items-center justify-center cursor-pointer"
              >
                <div className="group-hover:scale-[1.06] transition-transform duration-200 flex items-center justify-center">
                  <Logo />
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop View All Link */}
          <Link
            href="/products"
            className="hidden lg:inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc1414] hover:text-[#a80b0b] transition-colors whitespace-nowrap shrink-0 group cursor-pointer"
          >
            <span>View All Brands</span>
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
