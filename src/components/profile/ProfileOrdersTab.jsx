'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getMyOrders } from '../../services/orderApi'
import { getProductImageUrl } from '../../services/productApi'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  WishlistLaptopVisual,
} from '../wishlist/WishlistVisuals'

function getStatusStyle(status = 'Pending') {
  switch (status) {
    case 'Delivered':
      return { label: 'Delivered', color: 'bg-[#dcfce7] text-[#16a34a] border-[#bbf7d0]' }
    case 'Shipped':
    case 'Out for Delivery':
    case 'Processing':
      return { label: status, color: 'bg-[#fef3c7] text-[#b45309] border-[#fde68a]' }
    case 'Cancelled':
      return { label: 'Cancelled', color: 'bg-[#fee2e2] text-[#b91c1c] border-[#fecaca]' }
    default:
      return { label: status || 'Confirmed', color: 'bg-[#e0f2fe] text-[#0369a1] border-[#bae6fd]' }
  }
}

export default function ProfileOrdersTab() {
  const { isArabic, isRtl } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    getMyOrders()
      .then((data) => {
        if (!ignore && Array.isArray(data)) {
          setOrders(data)
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch user orders:', err.message)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })
    return () => {
      ignore = true
    }
  }, [])

  const filteredOrders = orders.filter((o) => {
    if (filter === 'all') return true
    if (filter === 'in-transit') {
      return o.orderStatus === 'Shipped' || o.orderStatus === 'Out for Delivery' || o.orderStatus === 'Processing'
    }
    if (filter === 'delivered') {
      return o.orderStatus === 'Delivered'
    }
    return true
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
      {loading ? (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center text-[#6b7280]">
          <p className="text-[14px] font-medium animate-pulse">Loading your orders from database...</p>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center text-[#6b7280] flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <p className="text-[15px] font-bold text-[#111827]">No orders found</p>
          <p className="text-[12.5px] text-[#6b7280] mt-1">
            {filter !== 'all' ? 'No orders match this status filter.' : "You haven't placed any orders yet."}
          </p>
          <Link
            href="/products"
            className="mt-4 px-4 py-2 rounded-xl bg-[#dc1414] text-white text-[12.5px] font-bold hover:bg-[#b91c1c] transition-colors"
          >
            Explore Catalog &rarr;
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredOrders.map((order) => {
            const statusConfig = getStatusStyle(order.orderStatus)
            const dateStr = order.createdAt
              ? new Date(order.createdAt).toLocaleDateString('en-IN', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Recently'
            const items = order.orderItems || []

            return (
              <div
                key={order._id || order.orderNumber}
                className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-4 hover:border-[#dc1414]/30 transition-colors"
              >
                {/* Top Bar: Order ID, Date, Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#f3f4f6]">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[14.5px] font-extrabold text-[#111827]">
                      Order #{order.orderNumber}
                    </span>
                    <span className="text-[12px] text-[#6b7280]">
                      Placed on {dateStr}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${statusConfig.color}`}>
                      ● {statusConfig.label}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-[#6b7280] block">Total Amount</span>
                    <span className="text-[16px] font-black text-[#dc1414]">
                      {formatCurrency(order.totalPrice, isArabic)}
                    </span>
                  </div>
                </div>

                {/* Progress / Logistics Tracker if available */}
                {order.courier && order.trackingNumber && (
                  <div className="bg-[#fefce8] border border-[#fef08a] rounded-xl p-3 sm:p-4 my-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 text-[12px]">
                      <span className="font-bold text-[#854d0e]">
                        Logistics: {order.courier}
                      </span>
                      <span className="font-mono text-[#a16207]">
                        AWB: {order.trackingNumber}
                      </span>
                      <Link
                        href={`/track-order?id=${order.orderNumber}`}
                        className="text-[11.5px] font-bold text-[#dc1414] hover:underline"
                      >
                        Track Live &rarr;
                      </Link>
                    </div>
                  </div>
                )}

                {/* Products in this order */}
                <div className="flex flex-col divide-y divide-[#f3f4f6]">
                  {items.map((it, idx) => {
                    const itemName = it.name || it.title || 'Computer System'
                    const itemSpecs = typeof it.specs === 'string' ? it.specs : (it.specs?.cpu ? `${it.specs.cpu} | ${it.specs.ram || ''}` : '')
                    return (
                      <div key={idx} className="py-2.5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-14 h-12 bg-[#f8fafc] rounded-xl border border-[#e5e7eb] flex items-center justify-center p-1 shrink-0 overflow-hidden">
                            {it.image ? (
                              <img
                                src={getProductImageUrl(it.image)}
                                alt={itemName}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <WishlistLaptopVisual className="w-full h-full max-h-[50px] object-contain" />
                            )}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[13.5px] font-bold text-[#111827] truncate">
                              {itemName}
                            </span>
                            {itemSpecs && (
                              <span className="text-[11.5px] text-[#6b7280] truncate">
                                {itemSpecs}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[13.5px] font-bold text-[#111827] block">
                            {formatCurrency(it.price * (it.quantity || 1), isArabic)}
                          </span>
                          <span className="text-[11px] text-[#6b7280]">Qty: {it.quantity || 1}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#f3f4f6]">
                  <Link
                    href={`/track-order?id=${order.orderNumber}`}
                    className="px-3.5 py-1.5 rounded-lg border border-[#d1d5db] text-[#374151] hover:text-[#dc1414] hover:border-[#dc1414] text-[12px] font-bold transition-colors cursor-pointer"
                  >
                    Track Status
                  </Link>

                  <Link
                    href="/products"
                    className="px-4 py-1.5 rounded-lg bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12px] font-bold transition-colors cursor-pointer"
                  >
                    Buy Again
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
