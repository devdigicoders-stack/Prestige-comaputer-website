'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function CartHeroBanner() {
  const { isRtl } = useLanguage()

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0c]">
      {/* Background Banner with Fallback Gradient */}
      <div
        className="relative w-full min-h-[190px] sm:min-h-[220px] md:min-h-[250px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: isRtl
            ? "linear-gradient(270deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.68) 45%, rgba(10,10,12,0.2) 100%), url('/banner/cart.png')"
            : "linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.68) 45%, rgba(10,10,12,0.2) 100%), url('/banner/cart.png')",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
            <span className="text-gray-400 font-bold text-xs rtl:rotate-180" aria-hidden="true">
              &gt;
            </span>
            <span className="text-white font-semibold" aria-current="page">
              {isRtl ? 'سلة التسوق' : 'My Cart'}
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight text-white mt-3">
            {isRtl ? (
              <>سلة <span className="text-[#e11414]">المشتريات</span></>
            ) : (
              <>My <span className="text-[#e11414]">Cart</span></>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-200 mt-2 font-normal">
            {isRtl
              ? 'راجع منتجاتك، حدث الكميات وتابع لإتمام الطلب بأمان وسرعة.'
              : 'Review your items, update quantity and proceed to checkout.'}
          </p>
        </div>
      </div>
    </section>
  )
}
