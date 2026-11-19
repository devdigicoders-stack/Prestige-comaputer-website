'use client'

import { useState } from 'react'
import Link from 'next/link'

const SAMPLE_ORDERS = {
  'PCS-2026-89421': {
    orderId: 'PCS-2026-89421',
    placedDate: '17 Nov 2026, 10:30 AM',
    estimatedDelivery: 'Friday, 21 Nov 2026 (Before 6:00 PM)',
    status: 'Out for Delivery',
    statusStep: 4, // 1 to 5
    courier: 'BlueDart Express',
    trackingNumber: 'BLUEDT-9928174123',
    currentLocation: 'Kakadeo Hub, Kanpur (5 km away)',
    deliveryAgent: 'Manoj Kumar (+91 98765 00123)',
    recipient: {
      name: 'Rahul Sharma',
      phone: '+91 98765 43210',
      address: 'D-104, Sharda Apartment, Kakadeo, Kanpur - 208025, Uttar Pradesh',
    },
    payment: {
      method: 'UPI (Google Pay)',
      status: 'Paid Verified',
      amount: '₹60,998',
    },
    items: [
      {
        id: 'dell-inspiron-15',
        name: 'Dell Inspiron 15 (2025)',
        specs: 'Intel Core i5 13th Gen | 16GB RAM | 512GB NVMe SSD',
        price: '₹52,999',
        qty: 1,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&auto=format&fit=crop&q=80',
      },
      {
        id: 'hyperx-cloud-iii',
        name: 'HyperX Cloud III Gaming Headset',
        specs: '7.1 Surround Sound | Noise Cancelling Mic',
        price: '₹7,999',
        qty: 1,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&auto=format&fit=crop&q=80',
      },
    ],
    timeline: [
      {
        title: 'Order Confirmed',
        description: 'Payment verified via UPI. Order sent to warehouse.',
        time: '17 Nov, 10:30 AM',
        location: 'Online Store, Prestige Computers',
        completed: true,
      },
      {
        title: 'QC Passed & Packed',
        description: 'Hardware diagnostics passed 100%. Sealed in anti-static tamper-proof packaging.',
        time: '17 Nov, 04:15 PM',
        location: 'Kanpur Central Assembly Hub',
        completed: true,
      },
      {
        title: 'Shipped & In Transit',
        description: 'Package handed over to BlueDart Express logistics partner.',
        time: '18 Nov, 09:30 AM',
        location: 'Kanpur Regional Logistics Center',
        completed: true,
      },
      {
        title: 'Out for Delivery',
        description: 'Courier executive Manoj Kumar is out with your package.',
        time: '19 Nov, 08:45 AM',
        location: 'Kakadeo Local Delivery Station',
        completed: true,
        current: true,
      },
      {
        title: 'Delivered',
        description: 'Package will be delivered with OTP verification.',
        time: 'Expected by 6:00 PM today',
        location: 'Customer Address',
        completed: false,
      },
    ],
  },
}

export default function TrackOrderView() {
  const [orderIdInput, setOrderIdInput] = useState('PCS-2026-89421')
  const [contactInput, setContactInput] = useState('+91 98765 43210')
  const [isSearching, setIsSearching] = useState(false)
  const [trackedOrder, setTrackedOrder] = useState(SAMPLE_ORDERS['PCS-2026-89421'])
  const [errorMsg, setErrorMsg] = useState('')

  const handleTrackSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')
    const cleanId = orderIdInput.trim().toUpperCase()

    if (!cleanId) {
      setErrorMsg('Please enter a valid Order ID or Tracking Number.')
      return
    }

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      if (SAMPLE_ORDERS[cleanId]) {
        setTrackedOrder(SAMPLE_ORDERS[cleanId])
      } else {
        // Fallback mockup generator for any custom order ID entered
        setTrackedOrder({
          orderId: cleanId,
          placedDate: '18 Nov 2026, 02:15 PM',
          estimatedDelivery: 'Saturday, 22 Nov 2026',
          status: 'Processing & Packed',
          statusStep: 2,
          courier: 'Prestige Express Logistics',
          trackingNumber: `EXP-${cleanId.replace(/[^0-9]/g, '') || '784910'}`,
          currentLocation: 'Kanpur Central Fulfillment Center',
          deliveryAgent: 'Will be assigned upon dispatch',
          recipient: {
            name: 'Valued Customer',
            phone: contactInput || '+91 98765 XXXXX',
            address: 'Customer Delivery Address, Kanpur, Uttar Pradesh',
          },
          payment: {
            method: 'Prepaid (Verified)',
            status: 'Payment Received',
            amount: '₹52,999',
          },
          items: [
            {
              id: 'custom-order-item',
              name: 'Prestige Certified Hardware System',
              specs: 'Includes Official 1-Year UK & India On-site Warranty',
              price: '₹52,999',
              qty: 1,
              image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&auto=format&fit=crop&q=80',
            },
          ],
          timeline: [
            {
              title: 'Order Confirmed',
              description: 'Order registered in our system and components reserved.',
              time: '18 Nov, 02:15 PM',
              location: 'Prestige Online System',
              completed: true,
            },
            {
              title: 'QC & Packaging',
              description: 'Hardware inspection and packaging in progress.',
              time: '19 Nov, 11:00 AM',
              location: 'Kanpur Warehouse Hub',
              completed: true,
              current: true,
            },
            {
              title: 'Dispatch & Transit',
              description: 'Handoff to delivery partner.',
              time: 'Expected tomorrow',
              location: 'Logistics Hub',
              completed: false,
            },
            {
              title: 'Out for Delivery',
              description: 'Local courier agent on the way.',
              time: 'Pending',
              location: 'Destination Station',
              completed: false,
            },
            {
              title: 'Delivered',
              description: 'Delivered to customer.',
              time: 'Pending',
              location: 'Customer Address',
              completed: false,
            },
          ],
        })
      }
    }, 600)
  }

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Track Order</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#dc1414] animate-pulse" />
            Live Shipment Tracker
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
            Track Your <span className="text-[#dc1414]">Order & Shipment</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6b7280]">
            Enter your Order ID and registered phone/email to check real-time dispatch status, courier details, and live delivery updates.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#e5e7eb] p-5 sm:p-7 max-w-3xl mx-auto mb-10">
          <form onSubmit={handleTrackSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12.5px] font-bold text-[#374151] mb-1.5">
                  Order ID or Tracking Number <span className="text-[#dc1414]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={orderIdInput}
                    onChange={(e) => setOrderIdInput(e.target.value)}
                    placeholder="e.g. PCS-2026-89421"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d1d5db] text-sm focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none uppercase font-semibold text-[#111827] placeholder:normal-case placeholder:font-normal"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12.5px] font-bold text-[#374151] mb-1.5">
                  Phone Number or Email <span className="text-[#6b7280] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d1d5db] text-sm focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none text-[#111827]"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-[#dc1414] font-medium">{errorMsg}</p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setOrderIdInput('PCS-2026-89421')
                  setContactInput('+91 98765 43210')
                }}
                className="text-xs text-[#dc1414] hover:underline font-medium cursor-pointer"
              >
                Sample Order #PCS-2026-89421
              </button>

              <button
                type="submit"
                disabled={isSearching}
                className="w-full sm:w-auto px-7 py-2.5 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_rgba(220,20,20,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSearching ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" className="opacity-75" />
                    </svg>
                    <span>Fetching Status...</span>
                  </>
                ) : (
                  <>
                    <span>Track Shipment</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tracking Details View */}
        {trackedOrder && (
          <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
            {/* Status Summary Banner */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6b7280]">
                    Order #{trackedOrder.orderId}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d]">
                    {trackedOrder.status}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] mt-1">
                  Estimated Delivery: {trackedOrder.estimatedDelivery}
                </h3>
                <p className="text-xs text-[#6b7280] mt-0.5">
                  Courier: <strong className="text-[#111827]">{trackedOrder.courier}</strong> | Tracking AWB:{' '}
                  <strong className="text-[#dc1414] font-mono">{trackedOrder.trackingNumber}</strong>
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => alert(`Invoice receipt for ${trackedOrder.orderId} will download as PDF.`)}
                  className="px-4 py-2 border border-[#d1d5db] hover:bg-[#f3f4f6] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Invoice (PDF)</span>
                </button>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Need Help?
                </Link>
              </div>
            </div>

            {/* Visual Timeline Section */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-6 flex items-center justify-between">
                <span>Shipment Journey</span>
                <span className="text-xs font-medium text-[#15803d] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-ping" />
                  Live Tracking Active
                </span>
              </h3>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e5e7eb] space-y-8 ml-2 sm:ml-4">
                {trackedOrder.timeline.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step.completed
                          ? step.current
                            ? 'bg-[#dc1414] text-white ring-4 ring-[#fee2e2]'
                            : 'bg-[#16a34a] text-white'
                          : 'bg-[#f1f5f9] text-[#9ca3af] border border-[#d1d5db]'
                      }`}
                    >
                      {step.completed ? (step.current ? '●' : '✓') : idx + 1}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                      <div>
                        <h4
                          className={`text-sm sm:text-base font-bold ${
                            step.current ? 'text-[#dc1414]' : 'text-[#111827]'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#4b5563] mt-0.5">
                          {step.description}
                        </p>
                        <p className="text-xs text-[#9ca3af] mt-1 flex items-center gap-1">
                          <span>📍 {step.location}</span>
                        </p>
                      </div>
                      <span className="text-xs font-medium text-[#6b7280] whitespace-nowrap mt-1 sm:mt-0">
                        {step.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 Columns: Items Ordered + Delivery Destination */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Items Card (col-span-7) */}
              <div className="md:col-span-7 bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[#111827] mb-4">
                  Items in this Package ({trackedOrder.items.length})
                </h4>
                <div className="divide-y divide-[#f3f4f6]">
                  {trackedOrder.items.map((it) => (
                    <div key={it.id} className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-3.5">
                      <img
                        src={it.image}
                        alt={it.name}
                        className="w-16 h-16 rounded-xl object-cover bg-[#f8fafc] border border-[#e5e7eb] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs sm:text-sm font-bold text-[#111827] truncate">
                          {it.name}
                        </h5>
                        <p className="text-[11px] text-[#6b7280] truncate mt-0.5">
                          {it.specs}
                        </p>
                        <div className="flex items-center justify-between mt-1 text-xs">
                          <span className="text-[#6b7280]">Qty: {it.qty}</span>
                          <span className="font-extrabold text-[#dc1414]">{it.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery & Payment Details (col-span-5) */}
              <div className="md:col-span-5 bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#111827] mb-3">
                    Delivery Address
                  </h4>
                  <div className="text-xs text-[#4b5563] space-y-1 bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9]">
                    <p className="font-bold text-[#111827]">{trackedOrder.recipient.name}</p>
                    <p>{trackedOrder.recipient.address}</p>
                    <p className="font-semibold text-[#111827]">{trackedOrder.recipient.phone}</p>
                  </div>

                  <h4 className="text-sm font-bold text-[#111827] mt-5 mb-3">
                    Payment Summary
                  </h4>
                  <div className="text-xs space-y-1.5 bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9]">
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Payment Method</span>
                      <span className="font-semibold text-[#111827]">{trackedOrder.payment.method}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Payment Status</span>
                      <span className="font-semibold text-[#15803d]">{trackedOrder.payment.status}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#e2e8f0] pt-1 mt-1 font-bold">
                      <span className="text-[#111827]">Total Paid</span>
                      <span className="text-[#dc1414] text-sm">{trackedOrder.payment.amount}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f3f4f6] text-[11px] text-[#6b7280] flex items-center justify-between">
                  <span>Questions about your order?</span>
                  <a href="tel:+919876543210" className="text-[#dc1414] font-bold hover:underline">
                    Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
