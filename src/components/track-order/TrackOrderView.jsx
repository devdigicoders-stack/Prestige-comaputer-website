'use client'

import { useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import { trackOrder } from '../../services/orderApi'
import { getProductImageUrl } from '../../services/productApi'
import { useLanguage } from '../../context/LanguageContext'

const STATUS_CONFIG = {
  Confirmed: {
    label: 'Order Confirmed',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    dot: 'bg-blue-600',
    stepIndex: 0,
  },
  Processing: {
    label: 'Packed & QC Passed',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    dot: 'bg-amber-600',
    stepIndex: 1,
  },
  Shipped: {
    label: 'Shipped & In Transit',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    dot: 'bg-purple-600',
    stepIndex: 2,
  },
  'Out for Delivery': {
    label: 'Out for Delivery',
    badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
    dot: 'bg-orange-600',
    stepIndex: 3,
  },
  Delivered: {
    label: 'Delivered',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dot: 'bg-emerald-600',
    stepIndex: 4,
  },
  Cancelled: {
    label: 'Order Cancelled',
    badgeBg: 'bg-red-50 text-red-700 border-red-200',
    dot: 'bg-red-600',
    stepIndex: -1,
  },
}

export default function TrackOrderView() {
  const { isRtl } = useLanguage()
  const [orderIdInput, setOrderIdInput] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [trackedOrder, setTrackedOrder] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)
  const [, startTransition] = useTransition()

  const copyOrderId = (text) => {
    if (!text) return
    navigator.clipboard?.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const executeTrack = async (targetId) => {
    const cleanId = (targetId || orderIdInput).trim()
    if (!cleanId) {
      setErrorMsg(isRtl ? 'يرجى إدخال رقم طلب صحيح (مثال: PCS-2026-42492)' : 'Please enter a valid Order ID (e.g. PCS-2026-42492)')
      return
    }

    setIsSearching(true)
    setErrorMsg('')

    try {
      const data = await trackOrder(cleanId)
      if (data) {
        setTrackedOrder(data)
        if (typeof window !== 'undefined') {
          const url = new URL(window.location.href)
          url.searchParams.set('id', data.orderNumber || cleanId)
          window.history.replaceState(null, '', url.toString())
        }
      } else {
        setErrorMsg(`No order found matching ID "${cleanId}".`)
        setTrackedOrder(null)
      }
    } catch (err) {
      setErrorMsg(
        err?.message ||
          `No order found matching ID "${cleanId}". Please check your Order ID and try again.`
      )
      setTrackedOrder(null)
    } finally {
      setIsSearching(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const idFromUrl = params.get('id')
      if (idFromUrl) {
        startTransition(() => {
          setOrderIdInput(idFromUrl)
        })
        executeTrack(idFromUrl)
      }
    }
  }, [])

  const handleTrackSubmit = (e) => {
    e.preventDefault()
    executeTrack(orderIdInput)
  }

  const statusInfo = trackedOrder
    ? STATUS_CONFIG[trackedOrder.status] || {
        label: trackedOrder.status || 'Confirmed',
        badgeBg: 'bg-gray-100 text-gray-800 border-gray-200',
        dot: 'bg-gray-500',
        stepIndex: 0,
      }
    : null

  const isCancelled = trackedOrder?.status === 'Cancelled'

  // Normalize single clean timeline from order data
  const rawTimeline = Array.isArray(trackedOrder?.timeline) ? trackedOrder.timeline : []
  const activeStepIdx = statusInfo ? statusInfo.stepIndex : 0

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-24 text-[#111827]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 pt-5 sm:pt-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                {isRtl ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            <li className="text-[#9ca3af]">/</li>
            <li className="font-semibold text-[#111827]">{isRtl ? 'تتبع الطلب' : 'Track Order'}</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#fee2e2] text-[#dc1414] mb-3 border border-[#fecaca]">
            <span className="w-2 h-2 rounded-full bg-[#dc1414] animate-pulse" />
            {isRtl ? 'حالة الطلب المباشرة' : 'Live Order Status'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
            {isRtl ? (
              <>تتبع <span className="text-[#dc1414]">حالة طلبك</span></>
            ) : (
              <>Track Your <span className="text-[#dc1414]">Order Status</span></>
            )}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6b7280]">
            {isRtl
              ? 'أدخل رقم الطلب للتحقق من حالة التأكيد والتجهيز والشحن في دولة قطر.'
              : 'Enter your Order ID to check real-time order confirmation, assembly QC, and delivery schedule.'}
          </p>
        </div>

        {/* Unified Sleek Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <form
            onSubmit={handleTrackSubmit}
            className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#e5e7eb] p-2 flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:border-[#dc1414] focus-within:ring-2 focus-within:ring-[#dc1414]/15"
          >
            <div className="relative flex-1 w-full flex items-center">
              <span className="pl-3.5 pr-2 rtl:pr-3.5 rtl:pl-2 text-[#9ca3af]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={orderIdInput}
                onChange={(e) => setOrderIdInput(e.target.value)}
                placeholder={isRtl ? 'أدخل رقم الطلب (مثال: PCS-2026-42492)' : 'Enter Order ID (e.g. PCS-2026-42492)'}
                className="w-full py-2.5 pr-8 rtl:pl-8 rtl:pr-0 bg-transparent text-sm sm:text-base font-semibold text-[#111827] uppercase placeholder:normal-case placeholder:font-normal placeholder:text-[#9ca3af] outline-none"
                required
              />
              {orderIdInput && (
                <button
                  type="button"
                  onClick={() => setOrderIdInput('')}
                  className="pr-2 rtl:pl-2 text-[#9ca3af] hover:text-[#111827] transition-colors"
                  title="Clear"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.98] text-white text-sm font-bold rounded-xl shadow-[0_4px_12px_rgba(220,20,20,0.3)] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-60"
            >
              {isSearching ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" className="opacity-75" />
                  </svg>
                  <span>{isRtl ? 'جاري الفحص...' : 'Checking...'}</span>
                </>
              ) : (
                <>
                  <span>{isRtl ? 'تتبع الطلب' : 'Track Order'}</span>
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {errorMsg && (
            <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-[#dc1414] font-medium flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Empty State Banner (when no order tracked yet) */}
        {!trackedOrder && !isSearching && (
          <div className="max-w-xl mx-auto bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#fee2e2] flex items-center justify-center text-[#dc1414] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827]">
              Looking for your Order ID?
            </h3>
            <p className="text-xs sm:text-sm text-[#6b7280] mt-1 max-w-sm mx-auto">
              Your Order ID was provided when your order was confirmed. You can also quickly find it under your profile orders.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Link
                href="/profile?tab=orders"
                className="px-4 py-2 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Go to My Orders</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 border border-[#d1d5db] hover:bg-[#f8fafc] text-xs font-bold text-[#374151] rounded-xl transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        )}

        {/* Dynamic Order Details View */}
        {trackedOrder && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Order Header Card */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#f1f5f9]">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6b7280]">
                      Order
                    </span>
                    <span className="font-mono text-base sm:text-lg font-extrabold text-[#111827]">
                      #{trackedOrder.orderNumber || trackedOrder.orderId}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyOrderId(trackedOrder.orderNumber || trackedOrder.orderId)}
                      className="text-xs text-[#dc1414] hover:underline font-bold flex items-center gap-1 ml-1"
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold border ${statusInfo.badgeBg}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.dot} animate-pulse`} />
                      {statusInfo.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#6b7280] mt-1.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Placed on: <strong>{trackedOrder.placedDate}</strong></span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof window !== 'undefined') window.print()
                    }}
                    className="px-3.5 py-1.5 border border-[#d1d5db] hover:bg-[#f8fafc] text-xs font-bold rounded-xl transition-colors text-[#374151] flex items-center gap-1.5 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>Print Receipt</span>
                  </button>
                  <Link
                    href="/contact"
                    className="px-3.5 py-1.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1"
                  >
                    <span>Support</span>
                  </Link>
                </div>
              </div>

              {/* Order Key Metrics (No Third-Party Courier AWB) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
                <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9]">
                  <span className="text-[#6b7280] block font-medium">Estimated Delivery</span>
                  <strong className="text-sm font-bold text-[#111827] block mt-0.5">
                    {trackedOrder.estimatedDelivery || 'In 2-4 Days'}
                  </strong>
                </div>
                <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9]">
                  <span className="text-[#6b7280] block font-medium">Delivery Mode</span>
                  <strong className="text-sm font-bold text-[#111827] flex items-center gap-1.5 mt-0.5 capitalize">
                    {trackedOrder.deliveryMethod === 'express' ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#dc1414]">
                          <path d="M13 2 3 14h7v8l10-12h-7l0-8z" />
                        </svg>
                        <span>Express (1-2 Days)</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#16a34a]">
                          <rect width="16" height="13" x="1" y="3" rx="2" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                        <span>Standard (2-4 Days)</span>
                      </>
                    )}
                  </strong>
                </div>
                <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9]">
                  <span className="text-[#6b7280] block font-medium">Payment Mode</span>
                  <strong className="text-sm font-bold text-[#111827] block mt-0.5">
                    {trackedOrder.payment?.method || 'UPI'}
                  </strong>
                </div>
                <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#f1f5f9]">
                  <span className="text-[#6b7280] block font-medium">Payment Status</span>
                  <strong
                    className={`text-sm font-bold block mt-0.5 ${
                      trackedOrder.payment?.status?.includes('Paid') ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    {trackedOrder.payment?.status || 'Paid'}
                  </strong>
                </div>
              </div>
            </div>

            {/* SINGLE Unified Order Status Timeline (No Duplicates!) */}
            {!isCancelled ? (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#f1f5f9]">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111827]">
                      Order Progress Timeline
                    </h3>
                    <p className="text-xs text-[#6b7280] mt-0.5">
                      Live status updates directly from Prestige Computers assembly & fulfillment hub.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Live Sync Active
                  </span>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e5e7eb] space-y-6 sm:space-y-8 ml-2 sm:ml-4">
                  {rawTimeline.map((step, idx) => {
                    const isDone = step.completed
                    const isCurrent = step.current || idx === activeStepIdx

                    return (
                      <div key={idx} className="relative group">
                        {/* Step Marker Circle */}
                        <div
                          className={`absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            isDone
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : isCurrent
                              ? 'bg-[#dc1414] text-white ring-4 ring-[#fee2e2] animate-pulse'
                              : 'bg-white text-[#9ca3af] border border-[#d1d5db]'
                          }`}
                        >
                          {isDone ? '✓' : isCurrent ? '●' : idx + 1}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4
                                className={`text-sm sm:text-base font-bold ${
                                  isCurrent ? 'text-[#dc1414]' : isDone ? 'text-[#111827]' : 'text-[#6b7280]'
                                }`}
                              >
                                {step.title}
                              </h4>
                              {isCurrent && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fee2e2] text-[#dc1414]">
                                  Current Status
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-[#4b5563] mt-1 leading-relaxed">
                              {step.description}
                            </p>
                            {step.location && (
                              <p className="text-[11px] text-[#9ca3af] mt-1.5 flex items-center gap-1 font-medium">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#dc1414] shrink-0" aria-hidden="true">
                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>{step.location}</span>
                              </p>
                            )}
                          </div>

                          {step.timestamp && (
                            <span className="text-xs font-semibold text-[#6b7280] whitespace-nowrap mt-1 sm:mt-0 bg-[#f8fafc] px-2.5 py-1 rounded-lg border border-[#f1f5f9] self-start">
                              {new Date(step.timestamp).toLocaleString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#dc1414] flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#dc1414]">This Order Has Been Cancelled</h3>
                <p className="text-xs text-[#6b7280] mt-1 max-w-md mx-auto">
                  Stock has been returned to inventory. If you already made a payment, it will be refunded according to our return policy.
                </p>
              </div>
            )}

            {/* Bottom 2-Column: Ordered Items + Shipping & Payment Summary */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Ordered Items (col-span-7) */}
              <div className="md:col-span-7 bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-xs">
                <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4 pb-2 border-b border-[#f1f5f9]">
                  Ordered Items ({trackedOrder.items?.length || 0})
                </h4>
                <div className="divide-y divide-[#f1f5f9]">
                  {trackedOrder.items && trackedOrder.items.length > 0 ? (
                    trackedOrder.items.map((item, idx) => (
                      <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-3.5">
                        <img
                          src={item.image ? getProductImageUrl(item.image) : '/placeholder-product.png'}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-contain bg-[#f8fafc] border border-[#e5e7eb] shrink-0 p-1"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs sm:text-sm font-bold text-[#111827] truncate">
                            {item.name}
                          </h5>
                          {item.specs && (
                            <p className="text-[11px] text-[#6b7280] truncate mt-0.5">
                              {item.specs}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-1.5 text-xs">
                            <span className="text-[#6b7280] font-medium">Quantity: {item.qty}</span>
                            <span className="font-extrabold text-[#dc1414]">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-[#6b7280] py-2">No hardware items found.</p>
                  )}
                </div>
              </div>

              {/* Delivery Destination & Payment (col-span-5) */}
              <div className="md:col-span-5 bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-3 pb-2 border-b border-[#f1f5f9]">
                    Delivery Destination
                  </h4>
                  <div className="text-xs text-[#4b5563] space-y-1 bg-[#f8fafc] p-3.5 rounded-xl border border-[#f1f5f9]">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#111827] text-sm">{trackedOrder.recipient?.name}</p>
                      {trackedOrder.recipient?.addressType && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white border border-[#e5e7eb] text-[#374151]">
                          {trackedOrder.recipient.addressType}
                        </span>
                      )}
                    </div>
                    <p className="leading-relaxed mt-1">{trackedOrder.recipient?.address}</p>
                    {trackedOrder.recipient?.phone && (
                      <p className="font-semibold text-[#111827] pt-1.5 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{trackedOrder.recipient.phone}</span>
                      </p>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mt-5 mb-3 pb-2 border-b border-[#f1f5f9]">
                    Billing & Payment
                  </h4>
                  <div className="text-xs space-y-2 bg-[#f8fafc] p-3.5 rounded-xl border border-[#f1f5f9]">
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Payment Method</span>
                      <span className="font-bold text-[#111827]">{trackedOrder.payment?.method}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Payment Status</span>
                      <span
                        className={`font-bold ${
                          trackedOrder.payment?.status?.includes('Paid')
                            ? 'text-emerald-700'
                            : 'text-amber-700'
                        }`}
                      >
                        {trackedOrder.payment?.status}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-[#e2e8f0] pt-2 mt-2 font-bold">
                      <span className="text-[#111827] text-sm">Total Amount</span>
                      <span className="text-[#dc1414] text-base">{trackedOrder.payment?.amount}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f1f5f9] text-[11px] text-[#6b7280] flex items-center justify-between">
                  <span>Need assistance with delivery?</span>
                  <Link href="/contact" className="text-[#dc1414] font-bold hover:underline">
                    Doha Hub Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
