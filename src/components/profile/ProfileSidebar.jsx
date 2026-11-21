'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStore } from '../../context/StoreContext'

export default function ProfileSidebar({ activeTab = 'personal', onSelectTab }) {
  const router = useRouter()
  const { logout, wishlistIds } = useStore()

  const navItems = [
    {
      id: 'personal',
      label: 'Personal Information',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      id: 'orders',
      label: 'My Orders',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      id: 'rentals',
      label: 'My Rentals',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: 'wishlist',
      label: 'My Wishlist',
      isLink: true,
      href: '/wishlist',
      badge: wishlistIds.length > 0 ? wishlistIds.length : null,
      badgeColor: 'bg-[#fee2e2] text-[#dc1414]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      id: 'addresses',
      label: 'Saved Addresses',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      id: 'payments',
      label: 'Payment Methods',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
    {
      id: 'security',
      label: 'Security & Password',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      ),
    },
  ]

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out of your account?')) {
      logout()
      router.push('/')
    }
  }

  return (
    <aside className="w-full lg:w-72 shrink-0 bg-white rounded-2xl border border-[#e5e7eb] p-3 shadow-2xs">
      <div className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id

          if (item.isLink) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-[#4b5563] hover:text-[#111827] hover:bg-[#f8fafc] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#6b7280]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#fef2f2] text-[#dc1414] font-bold shadow-2xs'
                  : 'text-[#4b5563] hover:text-[#111827] hover:bg-[#f8fafc]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? 'text-[#dc1414]' : 'text-[#6b7280]'}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}

        {/* Divider */}
        <div className="my-2 border-t border-[#f3f4f6]" />

        {/* Logout Button */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-[#dc2626] hover:bg-[#fef2f2] transition-colors cursor-pointer w-full text-left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  )
}
