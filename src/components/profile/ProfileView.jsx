'use client'

import { useEffect, useState } from 'react'
import ProfileHeroBanner from './ProfileHeroBanner'
import ProfileSidebar from './ProfileSidebar'
import ProfilePersonalTab from './ProfilePersonalTab'
import ProfileOrdersTab from './ProfileOrdersTab'
import ProfileRentalsTab from './ProfileRentalsTab'
import ProfileAddressesTab from './ProfileAddressesTab'
import ProfilePaymentsTab from './ProfilePaymentsTab'
import ProfileSecurityTab from './ProfileSecurityTab'
import ProfileNotificationsTab from './ProfileNotificationsTab'

export default function ProfileView() {
  const [activeTab, setActiveTab] = useState('personal')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const tabParam = params.get('tab')
      const validTabs = ['personal', 'orders', 'rentals', 'addresses', 'payments', 'security', 'notifications']
      if (tabParam && validTabs.includes(tabParam)) {
        setActiveTab(tabParam)
      }
    }
  }, [])

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen text-[#111827]">
      {/* 1. Profile Top Ambient Banner */}
      <ProfileHeroBanner activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* 2. Main Two-Column Layout */}
      <main className="max-w-[1380px] mx-auto px-4 lg:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 items-start">
          {/* Left Column: Sidebar Navigation */}
          <ProfileSidebar activeTab={activeTab} onSelectTab={setActiveTab} />

          {/* Right Column: Active Tab Content */}
          <section className="flex-1 min-w-0 w-full" aria-label="Profile Details">
            {activeTab === 'personal' && <ProfilePersonalTab />}
            {activeTab === 'orders' && <ProfileOrdersTab />}
            {activeTab === 'rentals' && <ProfileRentalsTab />}
            {activeTab === 'addresses' && <ProfileAddressesTab />}
            {activeTab === 'payments' && <ProfilePaymentsTab />}
            {activeTab === 'security' && <ProfileSecurityTab />}
            {activeTab === 'notifications' && <ProfileNotificationsTab />}
          </section>
        </div>
      </main>
    </div>
  )
}
