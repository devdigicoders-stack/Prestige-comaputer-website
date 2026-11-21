'use client'

import { useEffect, useMemo, useState } from 'react'
import { getProductImageUrl, getProducts } from '../../services/productApi'
import { useLanguage } from '../../context/LanguageContext'
import RentalBookingModal from './RentalBookingModal'

export default function RentalsPopularPlans() {
  const { isRtl } = useLanguage()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [liveProducts, setLiveProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    getProducts({ limit: 12, sort: 'popularity' })
      .then((res) => {
        if (isMounted && res?.products && Array.isArray(res.products)) {
          setLiveProducts(res.products)
        }
      })
      .catch((err) => {
        console.warn('⚠️ Could not load live rental products:', err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const plans = useMemo(() => {
    const rentalItems = liveProducts.filter(
      (p) =>
        p.type !== 'Buy Only' &&
        (Number(p.rentPerMonth) > 0 || Boolean(p.rentPrice))
    )

    const list = rentalItems.length > 0 ? rentalItems.slice(0, 4) : liveProducts.slice(0, 4)

    return list.map((p, idx) => {
      const rent = Number(p.rentPerMonth) || 2499
      const badges = ['Most Rented', 'Best for Office', 'High Performance', 'For Creators']
      const badgeColors = [
        'bg-[#dc1414] text-white',
        'bg-[#6366f1] text-white',
        'bg-[#f97316] text-white',
        'bg-[#2563eb] text-white',
      ]

      const specsText =
        typeof p.specs === 'string'
          ? p.specs
          : [p.specs?.cpu || p.specs?.processor, p.specs?.ram].filter(Boolean).join(' | ') ||
            p.subtitle ||
            'High Performance Hardware'

      const rawImg =
        p.image ||
        (typeof p.images?.[0] === 'string' ? p.images[0] : p.images?.[0]?.url) ||
        ''

      return {
        id: p._id || p.slug || p.id,
        badge: p.badge || badges[idx % badges.length],
        badgeColor: badgeColors[idx % badgeColors.length],
        title: p.name || p.title,
        specs: specsText,
        price: rent,
        formattedPrice: p.rentPrice || `₹${rent.toLocaleString('en-IN')}`,
        imageUrl: rawImg,
        deposit: p.deposit || 0,
        rentPerMonth: rent,
        rentPrice: p.rentPrice,
      }
    })
  }, [liveProducts])

  const handleOpenRental = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <section id="plans" aria-label="Popular Rental Plans" className="mb-14 sm:mb-16">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wide uppercase bg-[#fee2e2] text-[#dc1414] mb-2">
          {isRtl ? 'باقات شهرية بأسعار مناسبة' : 'Affordable Monthly Plans'}
        </span>
        <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#111827] tracking-tight">
          {isRtl ? 'باقات التأجير الأكثر طلباً' : 'Popular Rental Packages'}
        </h2>
        <p className="mt-2 text-[14px] sm:text-[15px] text-[#6b7280] max-w-[560px] mx-auto">
          {isRtl
            ? 'اختر من بين أجهزة لابتوب ومحطات عمل معتمدة ومفحوصة مع توصيل مجاني لباب منزلك وضمان استبدال فوري في دولة قطر.'
            : 'Choose from verified, pre-configured workstations and laptops with free doorstep delivery, zero deposit options, and instant swap warranty.'}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={`skel-${idx}`}
              className="bg-white rounded-2xl border border-[#e5e7eb] p-5 h-72 animate-pulse flex flex-col justify-between"
            >
              <div className="h-5 w-24 bg-gray-100 rounded" />
              <div className="h-28 w-full bg-gray-100 rounded-xl my-2" />
              <div className="h-4 w-3/4 bg-gray-100 rounded mb-1" />
              <div className="h-8 w-full bg-gray-100 rounded-lg mt-2" />
            </div>
          ))
        ) : (
          plans.map((plan) => (
            <div
              key={plan.id}
              className="group bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-[#dc1414]/40 relative"
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs ${plan.badgeColor}`}
                >
                  {plan.badge}
                </span>
              </div>

              {/* Device Visual */}
              <div className="h-[140px] flex items-center justify-center my-2 p-2 transition-transform duration-200 group-hover:scale-103">
                <img
                  src={getProductImageUrl(plan.imageUrl)}
                  alt={plan.title}
                  className="max-h-[130px] max-w-[170px] object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.1)]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              {/* Info */}
              <div className="mt-2 text-center">
                <h3 className="text-[16px] font-bold text-[#111827] leading-snug line-clamp-1">
                  {plan.title}
                </h3>
                <p className="mt-1 text-[11.5px] text-[#6b7280] leading-snug font-medium line-clamp-1">
                  {plan.specs}
                </p>

                {/* Price */}
                <div className="mt-3 flex items-baseline justify-center gap-1.5">
                  <span className="text-[22px] font-extrabold text-[#dc1414]">
                    {plan.formattedPrice}
                  </span>
                  <span className="text-[12px] font-medium text-[#6b7280]">
                    {isRtl ? '/ شهرياً' : '/ Month'}
                  </span>
                </div>
              </div>

              {/* Rent Now Button */}
              <button
                type="button"
                onClick={() => handleOpenRental(plan)}
                className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13px] font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(220,16,16,0.35)] transition-all cursor-pointer"
              >
                <span>{isRtl ? 'استأجر الآن' : 'Rent Now'}</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-4 h-4 rtl:rotate-180"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Advanced Rental Application Modal */}
      {isModalOpen && selectedPlan && (
        <RentalBookingModal
          isOpen={isModalOpen}
          product={selectedPlan}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedPlan(null)
          }}
        />
      )}
    </section>
  )
}
