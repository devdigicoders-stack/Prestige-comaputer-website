'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  DELIVERY_COUNTRIES,
  MAIN_NAV_LINKS,
} from '../../constants/navigation'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { getActiveCategories } from '../../services/categoryApi'
import HeaderSearchBar from './HeaderSearchBar'

function GlobeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" />
      <path d="M2.8 12h18.4" />
      <path d="M12 2.8a14.5 14.5 0 0 1 0 18.4 14.5 14.5 0 0 1 0-18.4Z" />
    </svg>
  )
}

function TruckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4.5l3 3.2V16H13v-6Z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </svg>
  )
}

function ShieldCheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.5 3 8 7 9.3 4-1.3 7-4.8 7-9.3V6l-7-3Z" />
      <path d="m9 12.2 2 2 4-4.2" />
    </svg>
  )
}

function HeadsetIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="3.2" height="5.5" rx="1.4" />
      <rect x="17.8" y="13" width="3.2" height="5.5" rx="1.4" />
      <path d="M19.4 18.5A3 3 0 0 1 16.5 21H13" />
    </svg>
  )
}

function SearchIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </svg>
  )
}

function UserIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.8" />
      <path d="M4.5 20c0-3.5 3.3-6 7.5-6s7.5 2.5 7.5 6" />
    </svg>
  )
}

function HeartIcon({ className = 'w-[22px] h-[22px]' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20.4s-7.5-4.8-9.3-9.3C1.4 7.8 3.6 4.5 7.1 4.5c2 0 3.7 1.1 4.9 2.7 1.2-1.6 2.9-2.7 4.9-2.7 3.5 0 5.7 3.3 4.4 6.6-1.8 4.5-9.3 9.3-9.3 9.3Z" />
    </svg>
  )
}

function CartIcon({ className = 'w-[23px] h-[23px]' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
      <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MenuIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </svg>
  )
}

function CloseIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

function ChevronDownIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="w-[18px] h-[18px] rounded-full bg-white text-[#0a0a0c] hover:bg-[#e11212] hover:text-white flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-current" aria-hidden="true">
          <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.6v3h2.6V21h3.3Z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-[18px] h-[18px] text-white hover:text-[#e11212] flex items-center justify-center transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[16px] h-[16px]"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="w-[18px] h-[18px] text-white hover:text-[#e11212] flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
          <path d="M21.58 7.19a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.68.49a2.7 2.7 0 0 0-1.9 1.9C2 8.87 2 12 2 12s0 3.13.42 4.81a2.7 2.7 0 0 0 1.9 1.9c1.68.49 7.68.49 7.68.49s6 0 7.68-.49a2.7 2.7 0 0 0 1.9-1.9c.42-1.68.42-4.81.42-4.81s0-3.13-.42-4.81ZM9.9 15.2V8.8l5.6 3.2-5.6 3.2Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-[18px] h-[18px] text-white hover:text-[#e11212] flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current" aria-hidden="true">
          <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
        </svg>
      </a>
    </div>
  )
}

export default function Navbar({
  wishlistCount,
  cartCount,
  onSearch,
}) {
  const store = useStore()
  const { language, setLanguage, isRtl, t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const displayWishlist = wishlistCount ?? store.wishlistIds.length
  const displayCart = cartCount ?? store.cartCount

  const [country, setCountry] = useState('United Kingdom')
  const [countryOpen, setCountryOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [openDropdownId, setOpenDropdownId] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [liveCategories, setLiveCategories] = useState(null)

  const headerRef = useRef(null)

  useEffect(() => {
    let isMounted = true
    getActiveCategories().then((data) => {
      if (isMounted && Array.isArray(data) && data.length > 0) {
        setLiveCategories(data)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const handleOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setCountryOpen(false)
        setAccountOpen(false)
        setCategoriesOpen(false)
        setOpenDropdownId(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = searchValue.trim()
    if (query) {
      router.push(`/products?search=${encodeURIComponent(query)}`)
    } else {
      router.push('/products')
    }
    onSearch?.(query)
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-[#09090b] text-white shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
      {/* TIER 1: TOP UTILITY BAR */}
      <div className="bg-[#060608] border-b border-white/[0.08]">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6 h-9 flex items-center justify-between gap-3 text-[11.5px] sm:text-[12px] text-[#e5e7eb]">
          {/* Left Contact Info (Phone, WhatsApp & Email) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+97441453868"
              className="inline-flex items-center gap-1.5 text-[#e5e7eb] hover:text-[#ff4d4d] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414]" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-medium"><bdi dir="ltr">+974 4145 3868</bdi></span>
            </a>
            <span className="h-3 w-px bg-white/20 hidden sm:inline" aria-hidden="true" />
            <a
              href="https://wa.me/97466919155"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#e5e7eb] hover:text-[#25D366] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#25D366]" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{t('whatsapp')} <bdi dir="ltr">+974 6691 9155</bdi></span>
            </a>
            <span className="h-3 w-px bg-white/20 hidden md:inline" aria-hidden="true" />
            <a
              href="mailto:info@pcsdoha.net"
              className="hidden md:inline-flex items-center gap-1.5 text-[#e5e7eb] hover:text-[#ff4d4d] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414]" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>info@pcsdoha.net</span>
            </a>
          </div>

          {/* Right Links (Track Order, Need Help?, Store Locator) */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#d1d5db]">
            <Link
              href="/track-order"
              className="hover:text-white transition-colors hidden md:inline-flex items-center gap-1"
            >
              <TruckIcon className="w-3.5 h-3.5 text-[#9ca3af]" />
              <span>{t('trackOrder')}</span>
            </Link>
            <span className="h-3 w-px bg-white/20 hidden md:inline" aria-hidden="true" />
            <Link
              href="/faq"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <HeadsetIcon className="w-3.5 h-3.5 text-[#9ca3af]" />
              <span>{t('needHelp')}</span>
            </Link>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link
              href="/store-locator"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#dc1414]" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{t('storeLocator')}</span>
            </Link>

            <span className="h-3 w-px bg-white/20" aria-hidden="true" />

            {/* Language Switcher Pill */}
            <div className="inline-flex items-center rounded-md bg-white/10 p-0.5 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#dc1414] text-white shadow-xs'
                    : 'text-[#d1d5db] hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#dc1414] text-white shadow-xs'
                    : 'text-[#d1d5db] hover:text-white'
                }`}
                title="العربية"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: MAIN HEADER BAR (LOGO + SEARCH + ACCOUNT / WISHLIST / CART) */}
      <div className="bg-[#0a0a0c]">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6 py-3 flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-3 gap-x-4 lg:gap-x-6">
          {/* Left: Mobile Menu + Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 -ml-1.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/logo-white.png"
                alt="Prestige Computers — A Tiny City Full of Amazing Computers"
                className="h-[44px] sm:h-[50px] w-auto object-contain"
                width={160}
                height={50}
              />
            </Link>

            <span
              className="hidden lg:block h-9 w-px bg-white/15 ml-2"
              aria-hidden="true"
            />
          </div>

          {/* Center: Pill Search Bar */}
          <div className="order-3 lg:order-2 w-full lg:flex-1 lg:max-w-[590px]">
            <HeaderSearchBar onSearchSubmit={onSearch} />
          </div>

          {/* Right: Login/Account, Wishlist, Cart */}
          <div className="order-2 lg:order-3 flex items-center gap-3.5 sm:gap-5 shrink-0">
            {/* Account */}
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => {
                  if (store.currentUser) {
                    setAccountOpen((prev) => !prev)
                  } else {
                    store.openLoginModal()
                  }
                  setCountryOpen(false)
                  setCategoriesOpen(false)
                }}
                className="flex items-center gap-2.5 text-left rtl:text-right group cursor-pointer"
              >
                <UserIcon className="w-[26px] h-[26px] text-[#e5e7eb] group-hover:text-white transition-colors shrink-0" />
                <div className="leading-tight">
                  <div className="text-[12px] font-medium text-white group-hover:text-[#ff4d4d] transition-colors">
                    {store.currentUser ? store.currentUser.name : t('loginRegister')}
                  </div>
                  <div className="text-[12px] text-[#d1d5db] inline-flex items-center gap-1 mt-0.5">
                    <span>{store.currentUser ? t('myAccount') : t('signUpFree')}</span>
                    <ChevronDownIcon className="w-3 h-3 text-[#9ca3af]" />
                  </div>
                </div>
              </button>

              {accountOpen && store.currentUser && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-3 w-48 rounded-xl bg-[#141418] border border-white/10 shadow-2xl py-1.5 z-50">
                  <div className="px-4 py-2 border-b border-white/10 text-[11px] text-[#9ca3af]">
                    {t('signedInAs')} <strong className="text-white block truncate">{store.currentUser.email || store.currentUser.name}</strong>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setAccountOpen(false)}
                    className="block w-full px-4 py-2 text-left rtl:text-right text-[12.5px] text-[#e5e7eb] hover:bg-white/[0.06] hover:text-white transition-colors"
                  >
                    {t('myProfile')}
                  </Link>
                  <Link
                    href="/rentals"
                    onClick={() => setAccountOpen(false)}
                    className="block w-full px-4 py-2 text-left rtl:text-right text-[12.5px] text-[#e5e7eb] hover:bg-white/[0.06] hover:text-white transition-colors"
                  >
                    {t('myRentals')}
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setAccountOpen(false)}
                    className="block w-full px-4 py-2 text-left rtl:text-right text-[12.5px] text-[#e5e7eb] hover:bg-white/[0.06] hover:text-white transition-colors"
                  >
                    {t('myOrders')}
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      store.logout()
                      setAccountOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left rtl:text-right text-[12.5px] text-[#ff4d4d] hover:bg-white/[0.06] transition-colors cursor-pointer border-t border-white/10 mt-1"
                  >
                    {t('signOut')}
                  </button>
                </div>
              )}
            </div>

            <span
              className="hidden lg:block h-7 w-px bg-white/15"
              aria-hidden="true"
            />

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label={t('wishlist')}
              className="relative flex items-center gap-2 text-white hover:text-[#ff4d4d] transition-colors cursor-pointer pt-1"
            >
              <span className="relative inline-flex items-center">
                <HeartIcon className="w-[22px] h-[22px]" />
                <span className="absolute -top-2 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#e11212] text-white text-[10.5px] font-semibold flex items-center justify-center leading-none shadow-xs">
                  {displayWishlist}
                </span>
              </span>
              <span className="hidden lg:inline text-[12.5px] font-medium">
                {t('wishlist')}
              </span>
            </Link>

            <span
              className="hidden lg:block h-7 w-px bg-white/15"
              aria-hidden="true"
            />

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={t('cart')}
              className="relative flex items-center gap-2 text-white hover:text-[#ff4d4d] transition-colors cursor-pointer pt-1 pr-1"
            >
              <span className="relative inline-flex items-center">
                <CartIcon className="w-[23px] h-[23px]" />
                <span className="absolute -top-2 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#e11212] text-white text-[10.5px] font-semibold flex items-center justify-center leading-none shadow-xs">
                  {displayCart}
                </span>
              </span>
              <span className="hidden lg:inline text-[12.5px] font-medium">
                {t('cart')}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* TIER 3: MAIN NAVIGATION MENU BAR (DESKTOP) */}
      <nav className="hidden lg:block bg-[#0d0d10] border-t border-white/[0.08] border-b border-white/[0.08]">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6 h-[50px] flex items-center gap-6 xl:gap-8">
          {/* Red All Categories Button + Dropdown (Opens on Mouse Hover) */}
          <div
            className="relative shrink-0"
            onMouseEnter={() => {
              setCategoriesOpen(true)
              setOpenDropdownId(null)
              setAccountOpen(false)
            }}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCategoriesOpen((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-gradient-to-b from-[#e11414] to-[#bd0909] hover:from-[#eb1818] hover:to-[#a80707] text-white text-[13px] font-medium shadow-[0_4px_14px_rgba(220,16,16,0.35)] transition-all cursor-pointer"
            >
              <MenuIcon className="w-4 h-4" />
              <span>{t('allCategories')}</span>
              <ChevronDownIcon
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  categoriesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {categoriesOpen && (
              <div className="absolute left-0 rtl:left-auto rtl:right-0 top-full pt-1 w-64 z-50">
                <div className="rounded-xl bg-[#141418] border border-white/10 shadow-2xl py-2 max-h-[380px] overflow-y-auto no-scrollbar">
                  {!liveCategories ? (
                    <div className="px-4 py-3 text-[12px] text-[#9ca3af] flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-[#dc1414] animate-spin" />
                      <span>{t('loadingCategories')}</span>
                    </div>
                  ) : liveCategories.length > 0 ? (
                    liveCategories.map((cat) => (
                      <Link
                        key={cat.slug || cat._id}
                        href={`/products?category=${cat.slug}`}
                        onClick={() => setCategoriesOpen(false)}
                        className="w-full px-4 py-2.5 flex items-center justify-between text-left rtl:text-right hover:bg-white/[0.06] transition-colors cursor-pointer group"
                      >
                        <span className="inline-flex items-center gap-2 text-[13px] text-[#f3f4f6] group-hover:text-white">
                          <span>{cat.name}</span>
                          {cat.badge && (
                            <span className="px-1.5 py-0.5 rounded-full bg-[#e11212] text-white text-[10px] font-semibold leading-none">
                              {cat.badge}
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] text-[#9ca3af]">
                          {typeof cat.productCount === 'number'
                            ? `${cat.productCount} ${isRtl ? 'منتج' : cat.productCount === 1 ? 'Product' : 'Products'}`
                            : `${cat.count || 0} ${isRtl ? 'منتج' : 'Products'}`}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-[12px] text-[#9ca3af]">
                      {t('noCategoriesFound')}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* MAIN MENU LINKS: Home, Products, Categories, About Us, Rent a Computer, Contact Us */}
          <ul className="flex items-center gap-6 xl:gap-8">
            {MAIN_NAV_LINKS.map((link) => {
              const isOpen = openDropdownId === link.id
              const isCurrent =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              const displayLabel = isRtl && link.labelAr ? link.labelAr : link.label
              const displayBadge = isRtl && link.badgeAr ? link.badgeAr : link.badge

              if (link.hasDropdown) {
                return (
                  <li
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setOpenDropdownId(link.id)}
                    onMouseLeave={() => setOpenDropdownId(null)}
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 py-2 text-[13.5px] font-medium transition-colors ${
                          isCurrent
                            ? 'text-[#ff4d4d]'
                            : 'text-[#f3f4f6] hover:text-[#ff4d4d]'
                        }`}
                      >
                        <span>{displayLabel}</span>
                        <ChevronDownIcon className="w-3 h-3 text-[#9ca3af]" />
                      </Link>
                    </div>

                    {isOpen && (
                      <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-1 z-50">
                        <div className="w-56 rounded-xl bg-[#141418] border border-white/10 shadow-2xl py-1.5">
                          {link.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setOpenDropdownId(null)}
                              className="block w-full px-4 py-2 text-left rtl:text-right text-[12.5px] text-[#d1d5db] hover:bg-white/[0.06] hover:text-white transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 py-2 text-[13.5px] font-medium transition-colors ${
                      isCurrent
                        ? 'text-[#ff4d4d]'
                        : 'text-[#f3f4f6] hover:text-[#ff4d4d]'
                    }`}
                  >
                    <span>{displayLabel}</span>
                    {link.badge && (
                      <span className="ml-1 rtl:ml-0 rtl:mr-1 px-2 py-0.5 rounded-full bg-[#e11212] text-white text-[10px] font-semibold leading-none shadow-xs">
                        {displayBadge}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* MOBILE SLIDE-OVER DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/65 backdrop-blur-[1px]"
            aria-hidden="true"
          />
          <aside className="relative z-10 w-[290px] max-w-[85vw] h-full bg-[#0d0d10] text-white flex flex-col shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/logo-white.png"
                  alt="Prestige Computers"
                  className="h-9 w-auto object-contain"
                  width={120}
                  height={36}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-1.5 rounded-lg text-[#9ca3af] hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Account CTA */}
            <div
              onClick={() => {
                setMobileMenuOpen(false)
                if (store.currentUser) {
                  router.push('/profile')
                } else {
                  store.openLoginModal()
                }
              }}
              className="px-4 py-3 border-b border-white/10 flex items-center gap-3 bg-white/[0.03] cursor-pointer hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#e11212]/20 border border-[#e11212]/40 text-[#ff4d4d] flex items-center justify-center shrink-0">
                <UserIcon className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-medium text-white">
                  {store.currentUser ? store.currentUser.name : t('loginRegister')}
                </p>
                <p className="text-[11.5px] text-[#9ca3af]">
                  {store.currentUser ? store.currentUser.email : t('signUpFree')}
                </p>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-3 space-y-1">
              <div className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#9ca3af]">
                {isRtl ? 'القائمة الرئيسية' : 'Main Navigation'}
              </div>
              {MAIN_NAV_LINKS.map((link) => {
                const displayLabel = isRtl && link.labelAr ? link.labelAr : link.label
                const displayBadge = isRtl && link.badgeAr ? link.badgeAr : link.badge
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-[13.5px] font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-[#e11212]/20 text-[#ff4d4d]'
                        : 'text-[#e5e7eb] hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>{displayLabel}</span>
                      {displayBadge && (
                        <span className="px-2 py-0.5 rounded-full bg-[#e11212] text-white text-[10px] font-semibold leading-none">
                          {displayBadge}
                        </span>
                      )}
                    </span>
                    <ChevronDownIcon className={`w-3.5 h-3.5 ${isRtl ? 'rotate-90' : '-rotate-90'} text-[#9ca3af]`} />
                  </Link>
                )
              })}
              <Link
                href="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-[13.5px] font-medium transition-colors ${
                  pathname === '/wishlist'
                    ? 'bg-[#e11212]/20 text-[#ff4d4d]'
                    : 'text-[#e5e7eb] hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span>{t('wishlist')}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#e11212] text-white text-[10px] font-semibold leading-none">
                    {displayWishlist}
                  </span>
                </span>
                <ChevronDownIcon className={`w-3.5 h-3.5 ${isRtl ? 'rotate-90' : '-rotate-90'} text-[#9ca3af]`} />
              </Link>
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-[13.5px] font-medium transition-colors ${
                  pathname === '/cart'
                    ? 'bg-[#e11212]/20 text-[#ff4d4d]'
                    : 'text-[#e5e7eb] hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span>My Cart</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#e11212] text-white text-[10px] font-semibold leading-none">
                    {displayCart}
                  </span>
                </span>
                <ChevronDownIcon className="w-3.5 h-3.5 -rotate-90 text-[#9ca3af]" />
              </Link>

              {/* Mobile Quick Categories Section */}
              <div className="pt-3 border-t border-white/10">
                <div className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#9ca3af]">
                  Explore Categories
                </div>
                {liveCategories && liveCategories.length > 0 ? (
                  liveCategories.slice(0, 6).map((c) => (
                    <Link
                      key={c.slug || c._id}
                      href={`/products?category=${c.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full px-3 py-2 rounded-lg flex items-center justify-between text-[12.5px] text-[#cbd5e1] hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <span>{c.name}</span>
                      {c.productCount ? (
                        <span className="text-[10.5px] text-[#6b7280]">
                          {c.productCount} Items
                        </span>
                      ) : null}
                    </Link>
                  ))
                ) : null}
                <Link
                  href="/categories"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-3 py-2 rounded-lg flex items-center justify-between text-[12.5px] font-semibold text-[#ff4d4d] hover:bg-white/[0.05] transition-colors"
                >
                  <span>View All Categories</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Mobile Trust Footer */}
            <div className="px-4 py-3.5 border-t border-white/10 space-y-2 text-[11.5px] text-[#d1d5db] bg-[#08080a]">
              <p className="flex items-center gap-2">
                <TruckIcon className="w-3.5 h-3.5 text-[#e11212]" />
                <span>Free Shipping on Orders Over £500</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#e11212]" />
                <span>30 Days Easy Returns &amp; Warranty</span>
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
