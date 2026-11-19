'use client'

import { useStore } from '../../context/StoreContext'
import WishlistHeroBanner from './WishlistHeroBanner'
import AccountSidebar from './AccountSidebar'
import WishlistItemsList from './WishlistItemsList'
import WishlistRecommendations from './WishlistRecommendations'

export default function WishlistView() {
  const { wishlistIds } = useStore()

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      {/* Hero Banner with /banner/wish.png */}
      <WishlistHeroBanner />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          {/* Left Sidebar */}
          <AccountSidebar wishlistCount={wishlistIds.length} />

          {/* Right Main Wishlist Content */}
          <WishlistItemsList />
        </div>

        {/* You Might Also Like */}
        <WishlistRecommendations />
      </main>
    </div>
  )
}
