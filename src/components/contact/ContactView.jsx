'use client'

import Link from 'next/link'
import ContactHeroBanner from './ContactHeroBanner'
import ContactFormCard from './ContactFormCard'
import ContactInfoCard from './ContactInfoCard'
import StoreLocationAndHours from './StoreLocationAndHours'
import ContactOtherWays from './ContactOtherWays'
import ContactBottomCta from './ContactBottomCta'

export default function ContactView() {
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
            <li className="font-semibold text-[#111827]">Contact Us</li>
          </ol>
        </nav>

        {/* 1. Hero Banner with contct.png */}
        <ContactHeroBanner />

        {/* 2. Main Contact Grid: Form (Left) & Info + Hours (Right) */}
        <section aria-label="Contact Channels and Message Form" className="mb-14 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Send Us a Message Card (col-span-6) */}
            <div className="lg:col-span-6">
              <ContactFormCard />
            </div>

            {/* Right Column: Contact Information + Location & Hours (col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <ContactInfoCard />
              <StoreLocationAndHours />
            </div>
          </div>
        </section>

        {/* 3. Other Ways We Can Help (4 Cards) */}
        <ContactOtherWays />

        {/* 4. Bottom Quick Assistance CTA Banner */}
        <ContactBottomCta />
      </div>
    </div>
  )
}
