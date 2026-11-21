'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getMyRentals } from '../../services/rentalApi'
import { getProductImageUrl } from '../../services/productApi'
import { WishlistLaptopVisual } from '../wishlist/WishlistVisuals'

function formatINR(val) {
  return `₹${Number(val || 0).toLocaleString('en-IN')}`
}

function getRentalStatusBadge(status = 'pending') {
  switch (status.toLowerCase()) {
    case 'active':
      return {
        label: 'Active on Lease',
        style: 'bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]',
        dot: 'bg-[#16a34a]',
      }
    case 'approved':
      return {
        label: 'Approved & Dispatching',
        style: 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]',
        dot: 'bg-[#2563eb]',
      }
    case 'returned':
      return {
        label: 'Returned & Completed',
        style: 'bg-gray-100 text-gray-700 border-gray-200',
        dot: 'bg-gray-500',
      }
    case 'overdue':
      return {
        label: 'Return Overdue',
        style: 'bg-[#fef3c7] text-[#b45309] border-[#fde68a]',
        dot: 'bg-[#d97706]',
      }
    case 'rejected':
    case 'cancelled':
      return {
        label: 'Application Rejected',
        style: 'bg-[#fee2e2] text-[#b91c1c] border-[#fecaca]',
        dot: 'bg-[#dc1414]',
      }
    case 'pending':
    case 'requested':
    default:
      return {
        label: 'Under Verification',
        style: 'bg-[#fef3c7] text-[#b45309] border-[#fde68a]',
        dot: 'bg-[#d97706]',
      }
  }
}

export default function ProfileRentalsTab() {
  const [rentals, setRentals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    getMyRentals()
      .then((data) => {
        if (!ignore && Array.isArray(data)) {
          setRentals(data)
        }
      })
      .catch((err) => {
        console.warn('Failed to load rentals:', err.message)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="flex flex-col gap-5">
      {/* Top Header */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <h2 className="text-[18px] font-bold text-[#111827]">
            My Rental Devices &amp; Leases
          </h2>
          <p className="text-[12.5px] text-[#6b7280]">
            Track rental applications, live lease status, hardware serial tags, and tenure extensions.
          </p>
        </div>

        <Link
          href="/rentals"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12.5px] font-bold transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <span>+ Rent Another Device</span>
        </Link>
      </div>

      {/* Rentals Cards */}
      {loading ? (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center text-[#6b7280] flex flex-col items-center justify-center gap-2">
          <div className="w-6 h-6 border-2 border-[#dc1414] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Loading your leased hardware agreements...</span>
        </div>
      ) : rentals.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 text-center text-[#6b7280] flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 mb-3 border border-gray-100">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <p className="text-[15px] font-bold text-[#111827]">No active rental agreements</p>
          <p className="text-[12.5px] text-[#6b7280] mt-1 max-w-sm">
            You do not currently have any active equipment lease applications or active devices.
          </p>
          <Link
            href="/rentals"
            className="mt-4 px-5 py-2.5 rounded-xl bg-[#dc1414] text-white text-[12.5px] font-bold hover:bg-[#b91c1c] transition-colors shadow-sm"
          >
            Explore Rental Hardware &rarr;
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {rentals.map((item) => {
            const statusBadge = getRentalStatusBadge(item.rentalStatus)
            const deviceTitle = item.productSnapshot?.title || item.product?.title || 'Prestige Certified Hardware'
            const deviceSpecs = item.productSnapshot?.specs || item.product?.specs?.cpu ? `${item.product.specs.cpu} | ${item.product.specs.ram}` : ''
            const deviceImg = item.productSnapshot?.image || item.product?.images?.[0]

            const startDateStr = item.startDate ? new Date(item.startDate).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }) : 'Now'

            const endDateStr = item.endDate ? new Date(item.endDate).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }) : 'Ongoing'

            return (
              <div
                key={item._id || item.rentalId}
                className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-4 hover:border-[#dc1414]/30 transition-colors"
              >
                {/* Top Row: Device Name, Agreement ID, Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#f3f4f6]">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[15px] font-extrabold text-[#111827]">
                      {deviceTitle}
                    </span>
                    <span className="text-[12px] font-mono text-[#6b7280]">
                      Agreement #{item.rentalId}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${statusBadge.style}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dot} animate-pulse`} />
                      {statusBadge.label}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-[#6b7280] block">Monthly Rent</span>
                    <span className="text-[17px] font-black text-[#dc1414]">
                      {formatINR(item.rentAmountPerUnit)}<span className="text-[12px] font-medium text-[#6b7280]">/mo</span>
                    </span>
                  </div>
                </div>

                {/* Device Info & Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-8 flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#f8fafc] rounded-xl border border-[#e5e7eb] flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                      {deviceImg ? (
                        <img
                          src={getProductImageUrl(deviceImg)}
                          alt={deviceTitle}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <WishlistLaptopVisual className="w-full h-full max-h-[55px] object-contain" />
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      {deviceSpecs && (
                        <p className="text-[13px] font-semibold text-[#111827] truncate">{deviceSpecs}</p>
                      )}
                      <div className="flex items-center gap-3 text-[12px] text-[#6b7280] mt-1 flex-wrap">
                        <span>Tenure: <strong className="text-[#111827] font-semibold">{item.duration} Months</strong></span>
                        <span>&bull;</span>
                        <span>Lease Period: <strong className="text-[#111827] font-semibold">{startDateStr} &rarr; {endDateStr}</strong></span>
                        {item.serialNumber && (
                          <>
                            <span>&bull;</span>
                            <span className="text-[#dc1414] font-mono font-bold">SN: {item.serialNumber}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9] text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Security Deposit:</span>
                      <strong className="text-emerald-700 font-bold">{formatINR(item.securityDeposit)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Deposit Status:</span>
                      <span className="font-semibold capitalize text-[#111827]">{item.depositStatus || 'Pending'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">KYC Status:</span>
                      <span className={`font-bold capitalize ${item.kycStatus === 'verified' ? 'text-emerald-700' : 'text-amber-700'}`}>
                        {item.kycStatus || 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tracking Progress Updates */}
                {item.trackingTimeline && item.trackingTimeline.length > 0 && (
                  <div className="bg-[#fcfdfd] p-3 rounded-xl border border-[#f1f5f9] text-xs space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280] block">
                      Application Updates
                    </span>
                    <div className="space-y-1">
                      {item.trackingTimeline.slice(-2).map((tl, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[#374151]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <strong>{tl.title}:</strong> {tl.description}
                          </span>
                          <span className="text-[11px] text-[#9ca3af]">
                            {new Date(tl.timestamp).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-[#f3f4f6]">
                  <span className="text-[11px] text-[#6b7280]">
                    Delivery: <strong className="text-[#111827]">{item.deliveryMethod || 'Free Doorstep Delivery'}</strong>
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/contact"
                      className="px-3.5 py-1.5 rounded-lg border border-[#d1d5db] text-[#374151] hover:text-[#dc1414] hover:border-[#dc1414] text-[12px] font-bold transition-colors cursor-pointer"
                    >
                      Kanpur Hub Support
                    </Link>
                    <Link
                      href="/contact"
                      className="px-3.5 py-1.5 rounded-lg bg-[#111827] text-white hover:bg-[#1f2937] text-[12px] font-bold transition-colors cursor-pointer"
                    >
                      Extend Lease / Upgrade
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
