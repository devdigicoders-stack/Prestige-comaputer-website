'use client'

import { useState } from 'react'
import Link from 'next/link'

const STORE_LOCATIONS = [
  {
    id: 'kanpur-flagship',
    city: 'Kanpur',
    name: 'Prestige Computers Experience Hub (Kakadeo)',
    type: 'Flagship Store & Repair Lab',
    badge: 'Flagship Experience Center',
    address: 'D-104, Sharda Apartment, Near Kakadeo Coaching Hub, Kanpur - 208025, Uttar Pradesh, India',
    phone: '+91 98765 43210',
    email: 'kanpur.store@prestigecomputers.in',
    hours: 'Mon – Sat: 10:00 AM – 8:30 PM | Sunday: 11:00 AM – 6:00 PM',
    mapQuery: 'Kakadeo, Kanpur, Uttar Pradesh 208025',
    services: [
      'Retail Laptops & Desktops',
      'Custom PC Assembly Lab',
      'Walk-in Laptop Rentals',
      'Certified Repair Hub',
      '0% Instant Paperless EMI',
    ],
    isFeatured: true,
  },
  {
    id: 'kanpur-civillines',
    city: 'Kanpur',
    name: 'Prestige Computers Tech Store (Civil Lines)',
    type: 'Retail & Premium Workstations',
    badge: 'Retail Store',
    address: 'Shop 14, Ground Floor, Megamart Complex, The Mall, Civil Lines, Kanpur - 208001, Uttar Pradesh',
    phone: '+91 91234 56789',
    email: 'civillines@prestigecomputers.in',
    hours: 'Mon – Sat: 10:30 AM – 8:00 PM | Sunday Closed',
    mapQuery: 'Civil Lines, Kanpur, Uttar Pradesh 208001',
    services: [
      'Premium Ultrabooks & MacBooks',
      'Accessories & Components',
      'Same-Day Online Order Pickup',
      'Corporate Consultations',
    ],
  },
  {
    id: 'lucknow-hub',
    city: 'Lucknow',
    name: 'Prestige Computers Enterprise & Rental Depot',
    type: 'B2B & Rental Hub',
    badge: 'Rental & B2B Hub',
    address: 'Plot 22, Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow - 226010, Uttar Pradesh',
    phone: '+91 98765 43211',
    email: 'lucknow@prestigecomputers.in',
    hours: 'Mon – Fri: 09:30 AM – 7:00 PM | Sat: 10:00 AM – 4:00 PM',
    mapQuery: 'Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    services: [
      'Bulk Corporate Laptop Rentals',
      'Event & Gaming Rig Leasing',
      'Onsite IT Deployment Support',
      'GST Business Invoicing',
    ],
  },
  {
    id: 'london-studio',
    city: 'London UK',
    name: 'Prestige Computers UK Technology Studio',
    type: 'European HQ & Distribution',
    badge: 'International Studio',
    address: '124 Tech City Road, Shoreditch, London EC1V 2NX, United Kingdom',
    phone: '+44 20 7946 0958',
    email: 'uk@prestigecomputers.co.uk',
    hours: 'Mon – Sat: 09:00 AM – 7:00 PM | Sunday: 10:00 AM – 4:00 PM',
    mapQuery: 'Shoreditch, London EC1V 2NX, UK',
    services: [
      'High-Performance Workstations',
      'Custom RTX Liquid-Cooled Rigs',
      'UK On-site Warranty Support',
      'Enterprise Server Leasing',
    ],
  },
]

export default function StoreLocatorView() {
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedStoreId, setSelectedStoreId] = useState('kanpur-flagship')
  const [searchQuery, setSearchQuery] = useState('')

  const cities = ['All', 'Kanpur', 'Lucknow', 'London UK']

  const filteredStores = STORE_LOCATIONS.filter((s) => {
    const matchCity = selectedCity === 'All' || s.city === selectedCity
    const matchQuery =
      !searchQuery ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.city.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCity && matchQuery
  })

  const activeStore =
    STORE_LOCATIONS.find((s) => s.id === selectedStoreId) || STORE_LOCATIONS[0]

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Store Locator</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-3">
            <span className="text-base">📍</span>
            Experience Centers & Outlets
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
            Find a <span className="text-[#dc1414]">Prestige Computers</span> Store
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6b7280]">
            Experience cutting-edge gaming laptops, hands-on custom PC builds, instant walk-in rentals, and certified repair diagnostics near you.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* City Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar">
            {cities.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCity(c)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCity === c
                    ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]'
                    : 'bg-[#f1f5f9] text-[#4b5563] hover:bg-[#e2e8f0]'
                }`}
              >
                {c === 'All' ? 'All Locations (4)' : c}
              </button>
            ))}
          </div>

          {/* Search by location or keyword */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by area, pincode or city..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#d1d5db] text-xs sm:text-sm focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none text-[#111827]"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 text-[#9ca3af] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* 2-Column Store Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Stores Cards List (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 max-h-[820px] overflow-y-auto pr-1">
            {filteredStores.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 text-center">
                <p className="text-sm font-semibold text-[#6b7280]">
                  No stores found matching your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCity('All')
                    setSearchQuery('')
                  }}
                  className="mt-3 text-xs text-[#dc1414] font-bold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredStores.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setSelectedStoreId(store.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    selectedStoreId === store.id
                      ? 'bg-white border-[#dc1414] shadow-[0_8px_24px_rgba(220,20,20,0.12)] ring-2 ring-[#dc1414]/15'
                      : 'bg-white border-[#e5e7eb] hover:border-[#cbd5e1] hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#fee2e2] text-[#dc1414]">
                      {store.badge}
                    </span>
                    <span className="text-xs text-[#6b7280] font-medium">{store.city}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#111827] leading-snug">
                    {store.name}
                  </h3>
                  <p className="text-xs text-[#6b7280] mt-1 line-clamp-2">
                    {store.address}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#f3f4f6] text-xs text-[#4b5563] space-y-1">
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#16a34a]">🕒</span>
                      <span className="truncate">{store.hours}</span>
                    </p>
                    <p className="flex items-center gap-1.5 font-semibold text-[#111827]">
                      <span className="text-[#dc1414]">📞</span>
                      <span>{store.phone}</span>
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Selected Store Highlight & Map Embed (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 shadow-sm">
            {/* Store Detailed Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#dc1414] text-white">
                  {activeStore.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#111827] mt-2">
                  {activeStore.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#4b5563] mt-1 max-w-xl">
                  {activeStore.address}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-xs font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(220,20,20,0.3)] flex items-center justify-center gap-1.5"
                >
                  <span>Get Directions</span>
                  <span>↗</span>
                </a>
                <a
                  href={`tel:${activeStore.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-4 py-2.5 border border-[#d1d5db] hover:bg-[#f3f4f6] text-[#111827] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            {/* Timings & Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-[#f3f4f6] text-xs">
              <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#f1f5f9]">
                <h4 className="font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <span>🕒 Store Hours</span>
                </h4>
                <p className="text-[#4b5563] leading-relaxed">{activeStore.hours}</p>
                <p className="text-[#16a34a] font-semibold mt-1.5">● Open Today for Walk-ins</p>
              </div>

              <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#f1f5f9]">
                <h4 className="font-bold text-[#111827] mb-1.5 flex items-center gap-1.5">
                  <span>📞 Direct Contact</span>
                </h4>
                <p className="text-[#4b5563]">Phone: <strong className="text-[#111827]">{activeStore.phone}</strong></p>
                <p className="text-[#4b5563]">Email: <strong className="text-[#111827]">{activeStore.email}</strong></p>
              </div>
            </div>

            {/* In-Store Services Available */}
            <div className="py-6 border-b border-[#f3f4f6]">
              <h4 className="text-sm font-bold text-[#111827] mb-3">
                Services Available at this Outlet
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStore.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-xs font-medium text-[#374151] flex items-center gap-1.5"
                  >
                    <span className="text-[#16a34a] font-bold">✓</span>
                    <span>{srv}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Map Visual Box */}
            <div className="mt-6">
              <div className="relative w-full h-[260px] rounded-2xl overflow-hidden border border-[#e5e7eb] bg-[#f1f5f9] flex flex-col items-center justify-center p-6 text-center">
                {/* Visual Map Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#dc1414] text-white flex items-center justify-center text-xl shadow-lg animate-bounce">
                    📍
                  </div>
                  <h4 className="font-bold text-[#111827] text-base mt-2">
                    {activeStore.name}
                  </h4>
                  <p className="text-xs text-[#6b7280] max-w-sm mt-0.5">
                    {activeStore.address}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-5 py-2 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
