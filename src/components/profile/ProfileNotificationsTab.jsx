'use client'

import { useEffect, useState } from 'react'
import { useStore } from '../../context/StoreContext'
import { updateNotificationPreferences } from '../../services/authApi'

export default function ProfileNotificationsTab() {
  const { currentUser, setCurrentUser } = useStore()

  const [prefs, setPrefs] = useState({
    orderUpdates: true,
    whatsappAlerts: true,
    rentalReminders: true,
    promotionalOffers: false,
    priceDropAlerts: true,
  })

  useEffect(() => {
    if (currentUser?.notificationPreferences) {
      setPrefs({
        orderUpdates: currentUser.notificationPreferences.orderUpdates !== false,
        whatsappAlerts: currentUser.notificationPreferences.whatsappAlerts !== false,
        rentalReminders: currentUser.notificationPreferences.rentalReminders !== false,
        promotionalOffers: !!currentUser.notificationPreferences.promotionalOffers,
        priceDropAlerts: currentUser.notificationPreferences.priceDropAlerts !== false,
      })
    }
  }, [currentUser])

  const [toastMessage, setToastMessage] = useState('')

  const toggle = async (key) => {
    const nextPrefs = { ...prefs, [key]: !prefs[key] }
    setPrefs(nextPrefs)
    try {
      const saved = await updateNotificationPreferences(nextPrefs)
      if (currentUser) {
        setCurrentUser({ ...currentUser, notificationPreferences: saved })
      }
      setToastMessage('Preference saved to database.')
      setTimeout(() => setToastMessage(''), 2500)
    } catch (err) {
      console.warn('Failed to save preference:', err.message)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      <div className="pb-4 border-b border-[#f3f4f6]">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-[#111827]">
            Notification Preferences
          </h2>
          {toastMessage && (
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-emerald-600" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{toastMessage}</span>
            </span>
          )}
        </div>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          Choose how you want Prestige Computers to communicate with you about your orders and rentals.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-[#f3f4f6]">
        <div className="py-3.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[13.5px] font-bold text-[#111827] block">
              Order &amp; Shipping Updates
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
              Get delivery status, tracking links and invoice copies directly on your WhatsApp number.
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
              Rental Tenure &amp; Due Date Reminders
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Alerts for upcoming monthly rental lease renewals and scheduled maintenance checkups.
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
              Promotional Offers &amp; Hardware Launches
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Early bird discounts on new graphics cards, Intel/AMD CPUs, and gaming gear.
            </span>
          </div>
          <button
            type="button"
            onClick={() => toggle('promotionalOffers')}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              prefs.promotionalOffers ? 'bg-[#16a34a]' : 'bg-[#d1d5db]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-transform ${prefs.promotionalOffers ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

        <div className="py-3.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[13.5px] font-bold text-[#111827] block">
              Price Drop &amp; Stock Alerts
            </span>
            <span className="text-[12px] text-[#6b7280]">
              Notifications when items on your wishlist go on sale or restock.
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
