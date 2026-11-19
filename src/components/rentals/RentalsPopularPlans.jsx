'use client'

import { useState } from 'react'
import { useStore } from '../../context/StoreContext'
import {
  RentalLaptopVisual,
  RentalDesktopVisual,
  RentalWorkstationVisual,
} from './RentalsCategoryVisuals'
import ProductVisual from '../products/ProductVisual'

export default function RentalsPopularPlans() {
  const store = useStore()
  const [addedItem, setAddedItem] = useState(null)

  const plans = [
    {
      id: 'rent-plan-1',
      badge: 'Most Rented',
      badgeColor: 'bg-[#dc1414] text-white',
      title: 'Business Laptop',
      specs: 'Intel Core i5 | 8GB RAM | 512GB SSD',
      price: 1299,
      formattedPrice: '₹1,299',
      visual: <ProductVisual variant="dell-inspiron" />,
    },
    {
      id: 'rent-plan-2',
      badge: 'Best for Office',
      badgeColor: 'bg-[#6366f1] text-white',
      title: 'Office Desktop',
      specs: 'Intel Core i5 | 16GB RAM | 512GB SSD',
      price: 1799,
      formattedPrice: '₹1,799',
      visual: <RentalDesktopVisual />,
    },
    {
      id: 'rent-plan-3',
      badge: 'High Performance',
      badgeColor: 'bg-[#f97316] text-white',
      title: 'Workstation',
      specs: 'Intel Core i7 | 32GB RAM | 1TB SSD',
      price: 3999,
      formattedPrice: '₹3,999',
      visual: <ProductVisual variant="pcs-gaming-pc" />,
    },
    {
      id: 'rent-plan-4',
      badge: 'For Creators',
      badgeColor: 'bg-[#2563eb] text-white',
      title: 'Creator Laptop',
      specs: 'Intel Core i7 | 16GB RAM | RTX 4060',
      price: 5999,
      formattedPrice: '₹5,999',
      visual: <ProductVisual variant="asus-rog" />,
    },
  ]

  const handleRentNow = (plan) => {
    store.addToCart({
      id: plan.id,
      name: `${plan.title} [Rental - Monthly Plan]`,
      price: plan.price,
      isRental: true,
      category: 'Rentals',
      specs: plan.specs,
    })
    setAddedItem(plan.title)
    setTimeout(() => setAddedItem(null), 3000)
  }

  return (
    <section id="plans" aria-label="Popular Rental Plans" className="mb-14 sm:mb-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-[#111827]">
          Popular Rental Plans
        </h2>
      </div>

      {addedItem && (
        <div className="mb-6 p-3.5 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 text-[#065f46] flex items-center justify-between text-[13px] font-semibold animate-fade-in">
          <span>✓ "{addedItem}" added to your rental cart successfully!</span>
          <span className="text-[11.5px] uppercase font-bold tracking-wide">Monthly Plan</span>
        </div>
      )}

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {plans.map((plan) => (
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
              {plan.visual}
            </div>

            {/* Info */}
            <div className="mt-2 text-center">
              <h3 className="text-[16px] font-bold text-[#111827] leading-snug">
                {plan.title}
              </h3>
              <p className="mt-1 text-[11.5px] text-[#6b7280] leading-snug font-medium">
                {plan.specs}
              </p>

              {/* Price */}
              <div className="mt-3 flex items-baseline justify-center gap-1.5">
                <span className="text-[22px] font-extrabold text-[#dc1414]">
                  {plan.formattedPrice}
                </span>
                <span className="text-[12px] font-medium text-[#6b7280]">
                  / Month
                </span>
              </div>
            </div>

            {/* Rent Now Button */}
            <button
              type="button"
              onClick={() => handleRentNow(plan)}
              className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[13px] font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(220,16,16,0.35)] transition-all cursor-pointer"
            >
              <span>Rent Now</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
