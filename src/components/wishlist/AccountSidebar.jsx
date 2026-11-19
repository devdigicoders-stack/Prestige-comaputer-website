'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useStore } from '../../context/StoreContext'

function UserAvatarIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function HomeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function OrdersIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  )
}

function HeartNavIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function RentalsIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  )
}

function MapPinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function CardIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-6-10.5h16.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V7.75C2 6.784 2.784 6 3.75 6z" />
    </svg>
  )
}

function SettingsIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function LogoutIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  )
}

export default function AccountSidebar({ wishlistCount = 4 }) {
  const pathname = usePathname()
  const { currentUser, setCurrentUser, openLoginModal } = useStore()

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/profile', icon: HomeIcon },
    { id: 'orders', label: 'My Orders', href: '/profile', icon: OrdersIcon },
    {
      id: 'wishlist',
      label: `My Wishlist (${wishlistCount})`,
      href: '/wishlist',
      icon: HeartNavIcon,
      active: true,
    },
    { id: 'rentals', label: 'My Rentals', href: '/rentals', icon: RentalsIcon },
    { id: 'addresses', label: 'Addresses', href: '/profile', icon: MapPinIcon },
    { id: 'payments', label: 'Payment Methods', href: '/profile', icon: CardIcon },
    { id: 'settings', label: 'Account Settings', href: '/profile', icon: SettingsIcon },
  ]

  const handleLogout = () => {
    if (currentUser) {
      setCurrentUser(null)
    } else {
      openLoginModal()
    }
  }

  return (
    <aside className="w-full lg:w-[280px] shrink-0">
      <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-xs">
        {/* User Profile Header */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-[#e11414] text-white flex items-center justify-center shrink-0 shadow-xs">
            <UserAvatarIcon className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[17px] font-bold text-gray-900 leading-tight truncate">
              {currentUser?.name || 'My Account'}
            </h2>
            <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">
              Manage your account, orders and preferences.
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-3.5 space-y-1" aria-label="Account Menu">
          {navItems.map((item) => {
            const Icon = item.icon
            const isWishlist = item.id === 'wishlist'

            if (isWishlist) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#dc1414] text-white text-[13.5px] font-semibold shadow-xs transition-all"
                >
                  <Icon className="w-[18px] h-[18px] text-white shrink-0 fill-current" />
                  <span>{item.label}</span>
                </Link>
              )
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-[13.5px] font-medium transition-colors"
              >
                <Icon className="w-[18px] h-[18px] text-gray-500 shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}

          {/* Divider */}
          <div className="pt-2 border-t border-gray-100 mt-2">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#dc1414] hover:bg-red-50 text-[13.5px] font-medium transition-colors cursor-pointer text-left"
            >
              <LogoutIcon className="w-[18px] h-[18px] shrink-0" />
              <span>{currentUser ? 'Logout' : 'Sign In / Register'}</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}
