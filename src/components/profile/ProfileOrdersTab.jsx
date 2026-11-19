'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  WishlistLaptopVisual,
  WishlistDesktopVisual,
  WishlistMonitorVisual,
  WishlistHeadsetVisual,
} from '../wishlist/WishlistVisuals'

function formatINR(val) {
  return `₹${Number(val).toLocaleString('en-IN')}`
}

export default function ProfileOrdersTab() {
  const [filter, setFilter] = useState('all')

  const orders = [
    {
      id: 'PCS-2025-98412',
      date: 'Nov 19, 2026',
      status: 'in-transit',
      statusLabel: 'In Transit',
      statusColor: 'bg-[#fef3c7] text-[#b45309] border-[#fde68a]',
      total: 170998,
      estDelivery: 'Tomorrow, Nov 20 by 6:00 PM',
      currentStep: 3, // 1: Confirmed, 2: Packed, 3: In Transit, 4: Delivered
      items: [
        {
          name: 'Dell Inspiron 15 (2025)',
          specs: 'Core i5 | 16GB RAM | 512GB SSD',
          price: 52999,
          qty: 1,
          visual: <WishlistLaptopVisual className="w-full h-full max-h-[50px] object-contain" />,
        },
        {
          name: 'PCS Gaming Desktop Pro',
          specs: 'Core i7 | 32GB RAM | 1TB SSD | RTX 4060',
          price: 129999,
          qty: 1,
          visual: <WishlistDesktopVisual className="w-full h-full max-h-[50px] object-contain" />,
        },
      ],
    },
    {
      id: 'PCS-2025-87310',
      date: 'Oct 28, 2026',
      status: 'delivered',
      statusLabel: 'Delivered',
      statusColor: 'bg-[#dcfce7] text-[#16a34a] border-[#bbf7d0]',
      total: 28999,
      deliveredOn: 'Oct 30, 2026',
      currentStep: 4,
      items: [
        {
          name: 'LG UltraGear 27" Gaming Monitor',
          specs: '27" QHD | 165Hz | 1ms | IPS Panel',
          price: 28999,
          qty: 1,
          visual: <WishlistMonitorVisual className="w-full h-full max-h-[50px] object-contain" />,
        },
      ],
    },
    {
      id: 'PCS-2025-65129',
      date: 'Sep 14, 2026',
      status: 'delivered',
      statusLabel: 'Delivered',
      statusColor: 'bg-[#dcfce7] text-[#16a34a] border-[#bbf7d0]',
      total: 7999,
      deliveredOn: 'Sep 16, 2026',
      currentStep: 4,
      items: [
        {
          name: 'HyperX Cloud III Gaming Headset',
          specs: '7.1 Surround | Noise Cancelling | Red Accent',
          price: 7999,
          qty: 1,
          visual: <WishlistHeadsetVisual className="w-full h-full max-h-[50px] object-contain" />,
        },
      ],
    },
  ]

  const filteredOrders = orders.filter((o) => {
    if (filter === 'all') return true
    return o.status === filter
  })

  return (
    <div className="flex flex-col gap-5">
      {/* Top Filter Bar */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <h2 className="text-[18px] font-bold text-[#111827]">
            Order History
          </h2>
          <p className="text-[12.5px] text-[#6b7280]">
            Track status, view invoices and manage reorders.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          {[
            { id: 'all', label: 'All Orders' },
            { id: 'in-transit', label: 'In Transit' },
            { id: 'delivered', label: 'Delivered' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#dc1414] text-white shadow-xs'
                  : 'bg-[#f3f4f6] text-[#4b5563] hover:text-[#111827]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-4 hover:border-[#dc1414]/30 transition-colors"
          >
            {/* Top Bar: Order ID, Date, Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#f3f4f6]">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[14.5px] font-extrabold text-[#111827]">
                  Order #{order.id}
                </span>
                <span className="text-[12px] text-[#6b7280]">
                  Placed on {order.date}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${order.statusColor}`}>
                  ● {order.statusLabel}
                </span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] text-[#6b7280] block">Total Amount</span>
                <span className="text-[16px] font-black text-[#dc1414]">
                  {formatINR(order.total)}
                </span>
              </div>
            </div>

            {/* 4-Step Progress Tracker for In-Transit order */}
            {order.status === 'in-transit' && (
              <div className="bg-[#fefce8] border border-[#fef08a] rounded-xl p-3 sm:p-4 my-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12.5px] font-bold text-[#854d0e]">
                    Expected Delivery: {order.estDelivery}
                  </span>
                  <span className="text-[11px] font-semibold text-[#a16207]">
                    Courier: BlueDart Express (Track #BD8921)
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold text-[10px]">✓</div>
                    <span className="font-bold text-[#111827] mt-1">Confirmed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold text-[10px]">✓</div>
                    <span className="font-bold text-[#111827] mt-1">Packed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#dc1414] text-white flex items-center justify-center font-bold text-[10px] animate-pulse">●</div>
                    <span className="font-bold text-[#dc1414] mt-1">In Transit</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-5 h-5 rounded-full bg-[#d1d5db] text-[#4b5563] flex items-center justify-center font-bold text-[10px]">4</div>
                    <span className="font-semibold text-[#6b7280] mt-1">Delivered</span>
                  </div>
                </div>
              </div>
            )}

            {/* Products in this order */}
            <div className="flex flex-col divide-y divide-[#f3f4f6]">
              {order.items.map((it, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-12 bg-[#f8fafc] rounded-xl border border-[#e5e7eb] flex items-center justify-center p-1 shrink-0">
                      {it.visual}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13.5px] font-bold text-[#111827]">{it.name}</span>
                      <span className="text-[11.5px] text-[#6b7280]">{it.specs}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[13.5px] font-bold text-[#111827] block">{formatINR(it.price)}</span>
                    <span className="text-[11px] text-[#6b7280]">Qty: {it.qty}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#f3f4f6]">
              <button
                type="button"
                onClick={() => alert(`Downloading GST Invoice for Order #${order.id}...`)}
                className="px-3.5 py-1.5 rounded-lg border border-[#d1d5db] text-[#374151] hover:text-[#dc1414] hover:border-[#dc1414] text-[12px] font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                <span>Invoice PDF</span>
              </button>

              <Link
                href="/products"
                className="px-4 py-1.5 rounded-lg bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12px] font-bold transition-colors cursor-pointer"
              >
                Buy Again
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
