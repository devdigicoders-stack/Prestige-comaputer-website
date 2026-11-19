'use client'

import Link from 'next/link'
import { useStore } from '../../context/StoreContext'

export default function ProfileHeroBanner({ activeTab, onSelectTab }) {
  const { currentUser, wishlistIds, cartItems } = useStore()

  const userName = currentUser?.name || 'Rahul Sharma'
  const userEmail = currentUser?.email || 'rahul.sharma@prestigecomputers.in'
  const userPhone = currentUser?.phone || '+91 98765 43210'

  return (
    <div className="relative w-full bg-gradient-to-r from-[#0d0d11] via-[#1a080a] to-[#0d0d11] text-white pt-6 pb-8 border-b border-white/10 overflow-hidden">
      {/* Red ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#dc1414]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#dc1414]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 relative z-10">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="text-[12.5px] text-[#9ca3af] mb-4">
          <ol className="flex items-center gap-1.5 sm:gap-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li className="text-[#6b7280]">&gt;</li>
            <li className="text-[#9ca3af]">My Account</li>
            <li className="text-[#6b7280]">&gt;</li>
            <li className="text-white font-semibold" aria-current="page">Profile</li>
          </ol>
        </nav>

        {/* Profile User Card + Quick Stats */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Avatar + Details */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Avatar with Camera badge */}
            <div className="relative">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#e11414] to-[#990a0d] p-0.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full bg-[#1e1e24] rounded-2xl flex items-center justify-center text-white text-[28px] font-black tracking-tight">
                  {userName.charAt(0).toUpperCase()}
                </div>
              </div>
              <button
                type="button"
                title="Change Avatar"
                className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#dc1414] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform cursor-pointer border-2 border-[#141418]"
                aria-label="Upload new avatar"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M1 8a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 8.07 3h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 16.07 6H17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Zm13.5 3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-[20px] sm:text-[23px] font-black text-white tracking-tight">
                  {userName}
                </h1>
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#dc1414] to-[#f97316] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>
                  <span>Prestige VIP Member</span>
                </span>
              </div>

              <div className="flex items-center gap-3 text-[12.5px] text-[#9ca3af] mt-1 flex-wrap">
                <span>{userEmail}</span>
                <span className="text-white/20">•</span>
                <span>{userPhone}</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => onSelectTab('orders')}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 text-left transition-colors cursor-pointer group"
            >
              <span className="text-[10.5px] uppercase font-bold text-[#9ca3af] block tracking-wide">
                My Orders
              </span>
              <span className="text-[17px] font-extrabold text-white group-hover:text-[#dc1414] transition-colors">
                12 Completed
              </span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('rentals')}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 text-left transition-colors cursor-pointer group"
            >
              <span className="text-[10.5px] uppercase font-bold text-[#9ca3af] block tracking-wide">
                Rentals
              </span>
              <span className="text-[17px] font-extrabold text-[#22c55e] group-hover:text-emerald-400 transition-colors">
                2 Active
              </span>
            </button>

            <Link
              href="/wishlist"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 text-left transition-colors cursor-pointer group"
            >
              <span className="text-[10.5px] uppercase font-bold text-[#9ca3af] block tracking-wide">
                Wishlist
              </span>
              <span className="text-[17px] font-extrabold text-[#f43f5e] group-hover:text-rose-400 transition-colors">
                {wishlistIds.length} Saved
              </span>
            </Link>

            <button
              type="button"
              onClick={() => onSelectTab('addresses')}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 text-left transition-colors cursor-pointer group"
            >
              <span className="text-[10.5px] uppercase font-bold text-[#9ca3af] block tracking-wide">
                Addresses
              </span>
              <span className="text-[17px] font-extrabold text-white group-hover:text-[#dc1414] transition-colors">
                2 Saved
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
