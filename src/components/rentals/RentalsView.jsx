'use client'

import Link from 'next/link'
import RentalsHeroBanner from './RentalsHeroBanner'
import RentalsTrustStrip from './RentalsTrustStrip'
import RentalsCategoryGrid from './RentalsCategoryGrid'
import RentalsHowItWorks from './RentalsHowItWorks'
import RentalsPopularPlans from './RentalsPopularPlans'
import RentalsWhyChoose from './RentalsWhyChoose'
import RentalsFaqAndCustomCard from './RentalsFaqAndCustomCard'
import RentalsBottomCta from './RentalsBottomCta'

export default function RentalsView() {
  return (
    <div className="w-full bg-[#f8fafc]/60 min-h-screen pb-14">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-3 sm:pt-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-3 text-[12.5px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Rent On</li>
          </ol>
        </nav>

        {/* 1. Hero Banner with rent.png */}
        <RentalsHeroBanner />

        {/* 2. 5 Trust Highlights Strip */}
        <RentalsTrustStrip />

        {/* 3. Explore Rental Categories Grid */}
        <RentalsCategoryGrid />

        {/* 4. How Rent On Works? 4 Steps */}
        <RentalsHowItWorks />

        {/* 5. Popular Rental Plans Grid */}
        <RentalsPopularPlans />

        {/* 6. Why Rent from Prestige Computers? */}
        <RentalsWhyChoose />

        {/* 7. FAQs Accordion + Custom Solution Card */}
        <RentalsFaqAndCustomCard />

        {/* 8. Bottom CTA Banner */}
        <RentalsBottomCta />
      </div>
    </div>
  )
}
