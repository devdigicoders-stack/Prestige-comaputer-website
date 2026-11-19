'use client'

import CartHeroBanner from './CartHeroBanner'
import CartItemsList from './CartItemsList'
import OrderSummary from './OrderSummary'
import CartTrustBadges from './CartTrustBadges'
import CartRecommendations from './CartRecommendations'

export default function CartView() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      {/* Top Banner with /banner/cart.png */}
      <CartHeroBanner />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* 2-Column Cart Area */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          {/* Left: Cart Items List */}
          <CartItemsList />

          {/* Right: Order Summary Sidebar */}
          <OrderSummary />
        </div>

        {/* 5 Trust Badges Row */}
        <CartTrustBadges />

        {/* You Might Also Like */}
        <CartRecommendations />
      </main>
    </div>
  )
}
