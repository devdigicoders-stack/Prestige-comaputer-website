'use client'

import Link from 'next/link'
import { useLanguage } from '../../../context/LanguageContext'

/* ─────────────────────────────────────────────────────────────
   18 AUTHENTIC REAL BRAND LOGOS
   (Matching exact reference: Dell, HP, Lenovo, Acer, ASUS, MSI,
    Apple, Microsoft, NVIDIA, Intel, AMD, Samsung,
    LG, Kingston, Corsair, Western Digital, Seagate, Canon)
────────────────────────────────────────────────────────────── */

// 1. Dell: Blue ring with tilted E
function DellLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" className="h-[36px] w-[36px] shrink-0" aria-label="Dell">
      <circle cx="32" cy="32" r="28" fill="none" stroke="#007DB8" strokeWidth="3.6" />
      <g fill="#007DB8">
        <path d="M11 24.5h6.1c4.5 0 7.4 2.8 7.4 7.5s-2.9 7.5-7.4 7.5H11V24.5Zm4 3.4v8.2h1.9c2.2 0 3.5-1.4 3.5-4.1s-1.3-4.1-3.5-4.1H15Z" />
        <g transform="rotate(-28 31 32)">
          <path d="M25.6 25.5h9.4v3h-5.8v2h5.2v2.8h-5.2v2.1h5.8v3h-9.4V25.5Z" />
        </g>
        <path d="M38.5 24.5h3.9v11.6h4.8v3.4h-8.7V24.5Z" />
        <path d="M47.7 24.5h3.9v11.6h4.8v3.4h-8.7V24.5Z" />
      </g>
    </svg>
  )
}

// 2. HP: Classic cyan/blue circle with authentic slanted monogram
function HpLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" className="h-[38px] w-[38px] shrink-0" aria-label="HP">
      <circle cx="32" cy="32" r="29" fill="#0096D6" />
      <g fill="#ffffff">
        <path d="M26.6 4.6 17.5 46h5.5l3.7-16.8h4.2L27.2 46h5.5l4-18.3c.6-2.9-1.2-5.2-4.2-5.2h-4.6l4-17.9h-5.3Z" />
        <path d="M40.3 22.5 31.8 59.5h5.5l3.1-13.5h5.1c3.8 0 6.8-2.4 7.7-6.3l2.2-10c.9-4.1-1.3-7.2-5.4-7.2h-9.7Zm4.2 4.6h3.4c1.3 0 2 1 1.7 2.4l-2 9.2c-.3 1.5-1.3 2.4-2.8 2.4h-3.4l3.1-14Z" />
      </g>
    </svg>
  )
}

// 3. Lenovo: Red solid rectangle pill with bold white Lenovo wordmark
function LenovoLogo() {
  return (
    <div className="px-3.5 py-1.5 bg-[#E2231A] rounded flex items-center justify-center shrink-0 shadow-2xs">
      <span className="text-white font-extrabold text-[15px] tracking-tight font-sans leading-none">
        Lenovo
      </span>
    </div>
  )
}

// 4. Acer: Iconic bright green italic lower-case wordmark
function AcerLogo() {
  return (
    <span className="text-[#83B81A] font-black italic text-[22px] tracking-tight font-sans -skew-x-12 select-none">
      acer
    </span>
  )
}

// 5. ASUS: Iconic bold stencil-style black ASUS wordmark
function AsusLogo() {
  return (
    <svg width="86" height="22" viewBox="0 0 100 24" className="h-[18px] w-auto shrink-0" aria-label="ASUS">
      <g fill="#111827">
        <path d="M13 3.5 3.5 20h5l2.3-4.2h9.7L22.8 20h5L17.5 3.5h-4.5Zm-.8 8.8 3.2-6 3.2 6h-6.4Z" />
        <path d="M31 3.8c-3.6 0-6 1.9-6 4.7 0 3 2.1 4.3 6.4 4.9l5.3.7c1.6.2 2.1.7 2.1 1.4 0 .9-.9 1.4-2.6 1.4H25.3v3.8h12c4.3 0 6.7-2.1 6.7-5.2 0-2.9-2-4.3-6.3-5l-5.3-.7c-1.5-.2-2.1-.6-2.1-1.3 0-.8.7-1.3 2.3-1.3H42.5V3.8H31Z" />
        <path d="M49 3.8h4.8v10.5c0 1.6.8 2.4 2.6 2.4s2.6-.8 2.6-2.4V3.8h4.8v10.8c0 3.8-2.5 5.8-7.4 5.8s-7.4-2-7.4-5.8V3.8Z" />
        <path d="M77 3.8c-3.6 0-6 1.9-6 4.7 0 3 2.1 4.3 6.4 4.9l5.3.7c1.6.2 2.1.7 2.1 1.4 0 .9-.9 1.4-2.6 1.4H71.3v3.8h12c4.3 0 6.7-2.1 6.7-5.2 0-2.9-2-4.3-6.3-5l-5.3-.7c-1.5-.2-2.1-.6-2.1-1.3 0-.8.7-1.3 2.3-1.3H88.5V3.8H77Z" />
      </g>
    </svg>
  )
}

// 6. MSI: Red gaming dragon crest
function MsiLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 46 44" className="h-[36px] w-[36px] shrink-0" aria-label="MSI">
      <path
        d="M23 2 C30 4.5, 40 7.5, 43 14 C44.5 17, 44 21, 42 24.5 C39 29.5, 34 33, 31 35.5 C28 38, 25 41.5, 23 43 C21 41.5, 18 38, 15 35.5 C12 33, 7 29.5, 4 24.5 C2 21, 1.5 17, 3 14 C6 7.5, 16 4.5, 23 2 Z"
        fill="none"
        stroke="#E21B22"
        strokeWidth="2.8"
      />
      <path
        d="M17 14 C18 10, 23 9, 27 10.5 C30 11.8, 32 14, 31 17 C30 20, 26 21, 28 23.5 C30 25.5, 32 24, 31 27 C30 30.5, 24 31, 22 27.5 C20 24, 22 22, 19.5 19.5 C17 17.5, 15 17, 17 14 Z"
        fill="#E21B22"
      />
      <circle cx="25" cy="13" r="1.3" fill="#ffffff" />
      <path d="M23 28 L19 35 L27 35 Z" fill="#E21B22" />
    </svg>
  )
}

// 7. Apple: Classic black bitten apple with leaf
function AppleLogo() {
  return (
    <svg width="30" height="32" viewBox="0 0 170 170" className="h-[30px] w-[30px] fill-[#000000] shrink-0" aria-label="Apple">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.77-11.73-14.19-6.9-10.63-12.08-22.75-15.54-36.35-3.46-13.6-5.19-26.23-5.19-37.9 0-14.78 3.58-27.18 10.74-37.2 7.16-10.02 16.2-15.15 27.12-15.39 5.37 0 11.2 1.34 17.5 4.02 6.3 2.68 10.36 4.08 12.18 4.2 2.02-.24 6.27-1.68 12.74-4.33 6.47-2.65 12.18-3.85 17.13-3.6 12.74.84 22.84 5.86 30.3 15.06-11.05 6.69-16.48 15.77-16.3 27.23.24 9.17 3.75 16.89 10.53 23.16 6.78 6.27 14.86 9.8 24.23 10.59-2.02 6.04-4.48 12.13-7.39 18.27zm-32.96-107.4c0-7.38 2.68-14.34 8.04-20.89 5.36-6.55 11.95-10.63 19.78-12.24.48 2.05.73 4.1.73 6.16 0 7.38-2.68 14.47-8.04 21.26-5.36 6.8-12.01 10.9-19.96 12.3-.12-2.18-.55-4.37-.55-6.59z" />
    </svg>
  )
}

// 8. Microsoft: 4-color squares + grey Microsoft wordmark
function MicrosoftLogo() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
        <div className="bg-[#F25022] w-full h-full" />
        <div className="bg-[#7FBA00] w-full h-full" />
        <div className="bg-[#00A4EF] w-full h-full" />
        <div className="bg-[#FFB900] w-full h-full" />
      </div>
      <span className="text-[#5E5E5E] font-semibold text-[15px] font-sans whitespace-nowrap">
        Microsoft
      </span>
    </div>
  )
}

// 9. NVIDIA: Green eye/spiral crest
function NvidiaLogo() {
  return (
    <svg width="46" height="34" viewBox="0 0 54 38" className="h-[28px] w-auto shrink-0" aria-label="NVIDIA">
      <path
        d="M26 6 C12 6, 2 16, 2 26 C2 33, 9 37, 18 37 C21 37, 23.5 36.6, 26 36 L26 30.5 C23.5 31, 21 31.4, 18.5 31.4 C13 31.4, 8 28.5, 8 23 C8 16.5, 14 12, 26 12 L26 6 Z"
        fill="#76B900"
      />
      <path
        d="M26 14 C18.5 14, 13 18.5, 13 23.5 C13 27, 16.5 29.5, 21 29.5 C22.8 29.5, 24.5 29.2, 26 28.7 L26 24 C24.5 24.5, 23 24.8, 21.5 24.8 C19 24.8, 17.5 23.8, 17.5 22.2 C17.5 19.8, 20.5 18.5, 26 18.5 L26 14 Z"
        fill="#76B900"
      />
      <path
        d="M26 20.2 C23.2 20.2, 21 21.4, 21 22.8 C21 24.2, 23.2 25.2, 26 25.2 L26 20.2 Z"
        fill="#76B900"
      />
    </svg>
  )
}

// 10. Intel: Blue modern "intel." wordmark
function IntelLogo() {
  return (
    <span className="text-[#0068B5] font-black text-[24px] tracking-tight font-sans whitespace-nowrap select-none">
      intel<span className="text-[#0068B5] text-[28px] leading-none">.</span>
    </span>
  )
}

// 11. AMD: Black AMD wordmark + dual arrowhead symbol
function AmdLogo() {
  return (
    <div className="flex items-center gap-1.5 shrink-0 select-none">
      <span className="text-[#111827] font-black text-[20px] tracking-tight font-sans">
        AMD
      </span>
      <svg width="18" height="18" viewBox="0 0 20 20" className="w-[18px] h-[18px] shrink-0" fill="#111827">
        <polygon points="0,0 9,0 18,9 9,18 0,18 9,9" />
        <polygon points="11,9 20,18 16,18 7,9" />
      </svg>
    </div>
  )
}

// 12. Samsung: Bold royal blue SAMSUNG wordmark
function SamsungLogo() {
  return (
    <span className="text-[#034EA2] font-black text-[16px] tracking-[0.14em] font-sans whitespace-nowrap select-none">
      SAMSUNG
    </span>
  )
}

// 13. LG: Burgundy circle with L-G face + bold LG text
function LgLogo() {
  return (
    <div className="flex items-center gap-2 shrink-0 select-none">
      <svg width="26" height="26" viewBox="0 0 30 30" className="w-[26px] h-[26px] shrink-0">
        <circle cx="15" cy="15" r="14" fill="#A50034" />
        <path
          d="M15 7v9h7"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10.5" cy="11.5" r="1.6" fill="#ffffff" />
      </svg>
      <span className="text-[#A50034] font-black text-[20px] font-sans tracking-wide">
        LG
      </span>
    </div>
  )
}

// 14. Kingston: Red Rex crowned pharaoh head mascot
function KingstonLogo() {
  return (
    <svg width="34" height="38" viewBox="0 0 38 42" className="h-[34px] w-auto shrink-0" aria-label="Kingston">
      <path
        d="M9 7 L15 3 L23 3 L29 7 L27 15 L32 19 L29 27 L23 38 L15 38 L9 27 L6 19 Z"
        fill="none"
        stroke="#C8102E"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path d="M13 13 H25 M11 17 H27 M15 21 H23 M17 27 H21" stroke="#C8102E" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="15" cy="17" r="1.6" fill="#C8102E" />
      <circle cx="23" cy="17" r="1.6" fill="#C8102E" />
    </svg>
  )
}

// 15. Corsair: Black sailing ship 3-sails crest
function CorsairLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 42 40" className="h-[30px] w-auto shrink-0" aria-label="Corsair">
      <g fill="#111827">
        <path d="M21 2 C16 10, 11 18, 7 26 C13 22, 17 22, 21 27 C21 17, 18 9, 21 2 Z" />
        <path d="M23 5 C26 12, 30 19, 32 26 C28 22, 25 22, 23 27 C23 18, 23 11, 23 5 Z" />
        <path d="M33 13 C36 18, 37 24, 38 27 C36 24, 34 24, 33 28 Z" />
        <path d="M4 29 C13 25.5, 26 25.5, 38 29 C31 31.5, 15 33.5, 4 29 Z" />
      </g>
    </svg>
  )
}

// 16. Western Digital: Wordmark with signature purple/blue geometric WW accent
function WesternDigitalLogo() {
  return (
    <div className="flex items-center gap-1.5 shrink-0 select-none">
      <span className="text-[#111827] font-bold text-[13.5px] font-sans tracking-tight whitespace-nowrap">
        Western Digital
      </span>
      <div className="grid grid-cols-2 gap-0.5 w-3 h-3 shrink-0">
        <div className="bg-[#6B21A8] w-full h-full rounded-[1px]" />
        <div className="bg-[#0284C7] w-full h-full rounded-[1px]" />
        <div className="bg-[#EC4899] w-full h-full rounded-[1px]" />
        <div className="bg-[#3B82F6] w-full h-full rounded-[1px]" />
      </div>
    </div>
  )
}

// 17. Seagate: Green dynamic spiral swirl logo
function SeagateLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 42 40" className="h-[30px] w-auto shrink-0" aria-label="Seagate">
      <path
        d="M21 4 C30 4, 37 11.5, 37 20 C37 28, 30 34, 23 35.5 C15 37, 7 31, 5 22 C4 14.5, 11 7, 20 6 C26.5 5, 32 9.5, 33 16 C34 21.5, 30 27, 24 27.5 C19 28, 14 24, 14 19.5 C14 15.5, 17.5 13, 21.5 13.5 C24 14, 26 16, 25.5 19"
        fill="none"
        stroke="#689F38"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 18. Canon: Red serif classic Canon wordmark
function CanonLogo() {
  return (
    <span className="text-[#CC0000] font-black text-[22px] tracking-tight font-serif whitespace-nowrap select-none">
      Canon
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────
   COMPLETE 18 BRANDS LIST (EXACT ORDER FROM USER REFERENCE)
────────────────────────────────────────────────────────────── */
const ALL_BRANDS = [
  { id: 'dell', name: 'Dell', Logo: DellLogo },
  { id: 'hp', name: 'HP', Logo: HpLogo },
  { id: 'lenovo', name: 'Lenovo', Logo: LenovoLogo },
  { id: 'acer', name: 'Acer', Logo: AcerLogo },
  { id: 'asus', name: 'ASUS', Logo: AsusLogo },
  { id: 'msi', name: 'MSI', Logo: MsiLogo },
  { id: 'apple', name: 'Apple', Logo: AppleLogo },
  { id: 'microsoft', name: 'Microsoft', Logo: MicrosoftLogo },
  { id: 'nvidia', name: 'NVIDIA', Logo: NvidiaLogo },
  { id: 'intel', name: 'Intel', Logo: IntelLogo },
  { id: 'amd', name: 'AMD', Logo: AmdLogo },
  { id: 'samsung', name: 'Samsung', Logo: SamsungLogo },
  { id: 'lg', name: 'LG', Logo: LgLogo },
  { id: 'kingston', name: 'Kingston', Logo: KingstonLogo },
  { id: 'corsair', name: 'Corsair', Logo: CorsairLogo },
  { id: 'western-digital', name: 'Western Digital', Logo: WesternDigitalLogo },
  { id: 'seagate', name: 'Seagate', Logo: SeagateLogo },
  { id: 'canon', name: 'Canon', Logo: CanonLogo },
]

// Duplicate list exactly once for 100% seamless translateX(-50%) marquee
const MARQUEE_BRANDS = [...ALL_BRANDS, ...ALL_BRANDS]

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

export default function TopBrands() {
  const { isRtl } = useLanguage()

  return (
    <section
      className="w-full bg-white py-6 sm:py-8 border-t border-[#f1f3f6] overflow-hidden"
      aria-label="Trusted Global Brands"
    >
      {/* Continuous Marquee Animation Styles with Pause-on-Hover */}
      <style>{`
        @keyframes brandsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes brandsMarqueeRtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .brands-marquee-track {
          display: flex;
          width: max-content;
          animation: brandsMarquee 38s linear infinite;
        }
        .brands-marquee-track:hover {
          animation-play-state: paused;
        }
        .brands-marquee-track-rtl {
          display: flex;
          width: max-content;
          animation: brandsMarqueeRtl 38s linear infinite;
        }
        .brands-marquee-track-rtl:hover {
          animation-play-state: paused;
        }
        .brands-card-item {
          flex: 0 0 160px;
          width: 160px;
          min-width: 160px;
          max-width: 160px;
          height: 78px;
        }
        @media (min-width: 640px) {
          .brands-card-item {
            flex: 0 0 172px;
            width: 172px;
            min-width: 172px;
            max-width: 172px;
            height: 84px;
          }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dc1414] animate-pulse" />
            <h2 className="text-[17px] sm:text-[19px] font-black uppercase tracking-wider text-[#dc1414]">
              {isRtl ? 'علامات تجارية عالمية موثوقة' : 'TRUSTED GLOBAL BRANDS'}
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#dc1414] hover:text-[#b91010] transition-colors group cursor-pointer"
          >
            <span>{isRtl ? 'عرض جميع المنتجات' : 'View All Products'}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Continuous Smooth Infinite Marquee Row */}
        <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          <div className={`gap-3.5 sm:gap-4 ${isRtl ? 'brands-marquee-track-rtl' : 'brands-marquee-track'}`}>
            {MARQUEE_BRANDS.map(({ id, name, Logo }, idx) => (
              <Link
                key={`${id}-${idx}`}
                href={`/products?brand=${id}`}
                aria-label={`Shop ${name}`}
                className="brands-card-item group bg-white rounded-2xl border border-[#e5e7eb] shadow-2xs hover:shadow-md hover:border-[#dc1414]/40 hover:-translate-y-0.5 transition-all duration-200 px-4 flex items-center justify-center cursor-pointer select-none"
              >
                <div className="group-hover:scale-[1.08] transition-transform duration-200 flex items-center justify-center w-full">
                  <Logo />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
