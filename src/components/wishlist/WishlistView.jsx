'use client'

import { useStore } from '../../context/StoreContext'
import WishlistHeroBanner from './WishlistHeroBanner'
import AccountSidebar from './AccountSidebar'
import WishlistItemsList from './WishlistItemsList'
import WishlistRecommendations from './WishlistRecommendations'

export default function WishlistView() {
  const { wishlistIds, currentUser, openLoginModal, openRegisterModal } = useStore()

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      {/* Hero Banner with /banner/wish.png */}
      <WishlistHeroBanner />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {!currentUser ? (
          <div className="w-full max-w-lg mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-8 text-center my-6">
            <div className="w-16 h-16 rounded-2xl bg-[#fff1f2] border border-[#ffe4e6] text-[#e11d48] mx-auto flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Sign In to View Your Wishlist
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Please log in or register to access your saved hardware and custom rigs.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={openLoginModal}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] text-white text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Sign In Now
              </button>
              <button
                type="button"
                onClick={openRegisterModal}
                className="px-6 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold transition-all cursor-pointer"
              >
                Create Account
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
            {/* Left Sidebar */}
            <AccountSidebar wishlistCount={wishlistIds.length} />

            {/* Right Main Wishlist Content */}
            <WishlistItemsList />
          </div>
        )}

        {/* You Might Also Like */}
        <WishlistRecommendations />
      </main>
    </div>
  )
}
