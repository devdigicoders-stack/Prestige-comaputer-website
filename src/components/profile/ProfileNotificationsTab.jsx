'use client'

import { useState } from 'react'

export default function ProfileNotificationsTab() {
  const [prefs, setPrefs] = useState({
    orderUpdates: true,
    whatsappAlerts: true,
    rentalReminders: true,
    promotionalOffers: false,
    priceDropAlerts: true,
  })

  const toggle = (key) => setPrefs((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      <div className="pb-4 border-b border-[#f3f4f6]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Notification Preferences
        </h2>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          Choose how you want Prestige Computers to communicate with you about your orders and rentals.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-[#f3f4f6]">
        <div className="py-3.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[13.5px] font-bold text-[#111827] block">
              Order & Shipping Updates
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Receive real-time tracking emails and SMS when items are packed, dispatched, and out for delivery.
            </span>
          </div>
          <button
            type="button"
            onClick={() => toggle('orderUpdates')}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              prefs.orderUpdates ? 'bg-[#16a34a]' : 'bg-[#d1d5db]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${prefs.orderUpdates ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

        <div className="py-3.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[13.5px] font-bold text-[#111827] block">
              WhatsApp Notifications
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Get delivery status and invoice copies directly on your WhatsApp number.
            </span>
          </div>
          <button
            type="button"
            onClick={() => toggle('whatsappAlerts')}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              prefs.whatsappAlerts ? 'bg-[#16a34a]' : 'bg-[#d1d5db]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${prefs.whatsappAlerts ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

        <div className="py-3.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[13.5px] font-bold text-[#111827] block">
              Rental Due & Maintenance Reminders
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Timely reminders 5 days before your monthly rental payment is due.
            </span>
          </div>
          <button
            type="button"
            onClick={() => toggle('rentalReminders')}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              prefs.rentalReminders ? 'bg-[#16a34a]' : 'bg-[#d1d5db]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${prefs.rentalReminders ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

        <div className="py-3.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[13.5px] font-bold text-[#111827] block">
              Wishlist Price Drop Alerts
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Get notified immediately whenever products in your wishlist receive discounts.
            </span>
          </div>
          <button
            type="button"
            onClick={() => toggle('priceDropAlerts')}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              prefs.priceDropAlerts ? 'bg-[#16a34a]' : 'bg-[#d1d5db]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${prefs.priceDropAlerts ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>
      </div>
    </div>
  )
}
