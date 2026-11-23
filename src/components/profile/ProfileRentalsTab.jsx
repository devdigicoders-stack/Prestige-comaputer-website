'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getMyRentals } from '../../services/rentalApi'
import { getProductImageUrl } from '../../services/productApi'
import { WishlistLaptopVisual } from '../wishlist/WishlistVisuals'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'

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
  const { isArabic } = useLanguage()
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
            const deviceSpecs =
              item.productSnapshot?.specs ||
              (item.product?.specs?.cpu
                ? `${item.product?.specs?.cpu} | ${item.product?.specs?.ram || ''}`
                : typeof item.product?.specs === 'string'
                ? item.product?.specs
                : '')
            const deviceImg = item.productSnapshot?.image || item.product?.images?.[0] || item.product?.image || ''

            const startDateStr = item.startDate ? new Date(item.startDate).toLocaleDateString(isArabic ? 'ar-QA' : 'en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }) : 'Now'

            const endDateStr = item.endDate ? new Date(item.endDate).toLocaleDateString(isArabic ? 'ar-QA' : 'en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }) : 'Ongoing'

            return (
              <div
                key={item._id || item.rentalId}
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm flex flex-col gap-5 hover:border-[#dc1414]/30 transition-all"
              >
                {/* 1. Top Header Row: Agreement ID, Status Badge, Device Title & Monthly Rent */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-gray-100">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-[12px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                        Agreement #{item.rentalId || item._id?.slice(-6)}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11.5px] font-bold px-2.5 py-0.5 rounded-full border ${statusBadge.style}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dot} animate-pulse`} />
                        {statusBadge.label}
                      </span>
                    </div>

                    <h3 className="text-[16px] sm:text-[18px] font-extrabold text-[#111827] mt-1">
                      {deviceTitle}
                    </h3>
                    {deviceSpecs && (
                      <p className="text-[13px] text-gray-500 font-medium">
                        {deviceSpecs}
                      </p>
                    )}
                  </div>

                  <div className="sm:text-right shrink-0 bg-red-50/50 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-red-100/60 flex sm:flex-col justify-between items-center sm:items-end">
                    <span className="text-[11px] text-[#6b7280] font-medium block">Monthly Rent</span>
                    <span className="text-[18px] sm:text-[20px] font-black text-[#dc1414]">
                      {formatCurrency(item.rentAmountPerUnit, isArabic)}
                      <span className="text-[12px] font-semibold text-[#6b7280]">/mo</span>
                    </span>
                  </div>
                </div>

                {/* 2. Middle Row: Device Thumbnail + Lease Parameter Badges */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#f8fafc] rounded-2xl border border-gray-200 flex items-center justify-center p-2 shrink-0 overflow-hidden shadow-2xs">
                    {deviceImg ? (
                      <img
                        src={getProductImageUrl(deviceImg)}
                        alt={deviceTitle}
                        className="w-full h-full object-contain hover:scale-105 transition-transform"
                      />
                    ) : (
                      <WishlistLaptopVisual className="w-full h-full max-h-[65px] object-contain" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200/90 text-[12px] text-gray-700">
                        <span className="text-gray-500 font-medium">Tenure:</span>
                        <strong className="text-gray-900 font-bold">{item.duration} {item.duration === 1 ? 'Month' : 'Months'}</strong>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200/90 text-[12px] text-gray-700">
                        <span className="text-gray-500 font-medium">Lease Period:</span>
                        <strong className="text-gray-900 font-semibold">{startDateStr} &rarr; {endDateStr}</strong>
                      </div>

                      {item.serialNumber && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 border border-red-200 text-[12px] text-red-700 font-mono font-bold">
                          <span>SN: {item.serialNumber}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[12px] text-gray-600">
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Fulfillment: <strong className="text-gray-800">{item.deliveryMethod || 'Free Doorstep Delivery & Setup • Doha, Qatar'}</strong></span>
                    </div>
                  </div>
                </div>

                {/* 3. Financial & KYC Details Strip (3 Clean Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 rounded-xl bg-gray-50/80 border border-gray-200">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      Refundable Security Deposit
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[15px] font-black text-emerald-700">
                        {formatCurrency(item.securityDeposit, isArabic)}
                      </span>
                      <span className="text-[10.5px] text-gray-500 font-medium">
                        (Refunded upon return)
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 sm:border-l sm:border-gray-200 sm:pl-4">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      Deposit Status
                    </span>
                    <span className="text-[13px] font-bold capitalize text-gray-900 flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.depositStatus === 'paid' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      {item.depositStatus === 'paid' ? 'Paid & Escrow Protected' : (item.depositStatus || 'Pending Verification')}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 sm:border-l sm:border-gray-200 sm:pl-4">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      KYC Verification
                    </span>
                    <span
                      className={`text-[13px] font-bold capitalize flex items-center gap-1.5 ${
                        item.kycStatus === 'verified' ? 'text-emerald-700' : 'text-amber-700'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.kycStatus === 'verified' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      {item.kycStatus === 'verified'
                        ? 'Verified (Qatar ID / CR)'
                        : (item.kycStatus || 'Under Verification')}
                    </span>
                  </div>
                </div>

                {/* 4. Tracking Updates Timeline */}
                {item.trackingTimeline && item.trackingTimeline.length > 0 && (
                  <div className="bg-[#fcfdfd] p-3.5 rounded-xl border border-gray-200/80 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        Application Updates
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium">
                        Prestige Doha Dispatch Desk
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {item.trackingTimeline.slice(-3).map((tl, idx) => (
                        <div key={idx} className="flex items-center justify-between text-gray-700 flex-wrap gap-1">
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <strong className="text-gray-900">{tl.title}:</strong> {tl.description}
                          </span>
                          <span className="text-[11px] text-gray-400 font-medium">
                            {new Date(tl.timestamp).toLocaleDateString(isArabic ? 'ar-QA' : 'en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Footer Row: Direct WhatsApp Support & Showroom / Lease Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[12px] text-gray-500">
                    <span>Questions about this agreement?</span>
                    <a
                      href="https://wa.me/97466919155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#dc1414] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>WhatsApp Concierge (+974 6691 9155)</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 self-end sm:self-auto">
                    <Link
                      href="/contact"
                      className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:text-[#dc1414] hover:border-[#dc1414] text-[12px] font-bold transition-colors cursor-pointer bg-white shadow-2xs"
                    >
                      PCS Doha Hub
                    </Link>
                    <Link
                      href="/rentals"
                      className="px-4 py-2 rounded-xl bg-[#dc1414] text-white hover:bg-[#b91c1c] text-[12px] font-bold transition-colors cursor-pointer shadow-xs"
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
