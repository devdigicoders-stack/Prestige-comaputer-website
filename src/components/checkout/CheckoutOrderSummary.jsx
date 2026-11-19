'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  WishlistLaptopVisual,
  WishlistDesktopVisual,
  WishlistHeadsetVisual,
} from '../wishlist/WishlistVisuals'

function formatINR(val) {
  return `₹${Number(val).toLocaleString('en-IN')}`
}

export default function CheckoutOrderSummary({
  deliveryMethod = 'standard',
  onPlaceOrder,
}) {
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  const items = [
    {
      id: 'dell-inspiron-15',
      name: 'Dell Inspiron 15 (2025)',
      specs: 'Core i5 | 16GB RAM | 512GB SSD',
      price: 52999,
      quantity: 1,
      visual: <WishlistLaptopVisual className="w-full h-full max-h-[50px] object-contain" />,
    },
    {
      id: 'pcs-gaming-desktop-pro',
      name: 'PCS Gaming Desktop Pro',
      specs: 'Core i7 | 32GB RAM | 1TB SSD | RTX 4060',
      price: 129999,
      quantity: 1,
      visual: <WishlistDesktopVisual className="w-full h-full max-h-[50px] object-contain" />,
    },
    {
      id: 'hyperx-cloud-iii-headset',
      name: 'HyperX Cloud III Headset',
      specs: '7.1 Surround | Noise Cancelling',
      price: 7999,
      quantity: 1,
      visual: <WishlistHeadsetVisual className="w-full h-full max-h-[50px] object-contain" />,
    },
  ]

  const subtotal = items.reduce((acc, it) => acc + it.price * it.quantity, 0) // 1,90,997
  const baseDiscount = 19999
  const extraCouponDiscount = couponApplied ? 5000 : 0
  const totalDiscount = baseDiscount + extraCouponDiscount
  const deliveryCharge = deliveryMethod === 'express' ? 199 : 0
  const finalTotal = subtotal - totalDiscount + deliveryCharge

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (!coupon.trim()) {
      setCouponError('Please enter a coupon code')
      return
    }
    setCouponApplied(true)
    setCouponError('')
  }

  return (
    <aside className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#f3f4f6]">
        <h2 className="text-[17px] font-bold text-[#111827]">
          Order Summary <span className="text-[14px] font-semibold text-[#dc1414]">({items.length} Items)</span>
        </h2>
        <Link
          href="/cart"
          className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
            <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
            <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <span>Edit Cart</span>
        </Link>
      </div>

      {/* Item List (3 Items matching mockup) */}
      <div className="flex flex-col divide-y divide-[#f3f4f6] py-2">
        {items.map((item) => (
          <div key={item.id} className="py-3 flex items-center justify-between gap-3">
            {/* Visual Thumbnail */}
            <div className="w-14 h-12 bg-[#f8fafc] rounded-lg border border-[#e5e7eb] flex items-center justify-center p-1 shrink-0">
              {item.visual}
            </div>

            {/* Title & Specs */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-bold text-[#111827] truncate">
                {item.name}
              </h3>
              <p className="text-[11px] text-[#6b7280] truncate mt-0.5">
                {item.specs}
              </p>
            </div>

            {/* Price & Quantity */}
            <div className="text-right shrink-0">
              <div className="text-[14px] font-black text-[#dc1414]">
                {formatINR(item.price)}
              </div>
              <div className="text-[11px] text-[#6b7280] mt-0.5">
                Qty: {item.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Code Section */}
      <div className="py-3 border-t border-b border-[#f3f4f6] my-1">
        <div className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#111827] mb-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#dc1414]">
            <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
          </svg>
          <span>Have a Coupon Code?</span>
        </div>

        <form onSubmit={handleApplyCoupon} className="flex gap-2">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="flex-1 bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12.5px] rounded-lg px-3 py-1.5 outline-none"
          />
          <button
            type="submit"
            className="border-2 border-[#dc1414] text-[#dc1414] hover:bg-[#fef2f2] text-[12.5px] font-bold px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Apply
          </button>
        </form>

        {couponApplied && (
          <p className="mt-1.5 text-[11px] font-semibold text-[#16a34a]">
            ✓ Coupon applied! Additional ₹5,000 saved.
          </p>
        )}
        {couponError && (
          <p className="mt-1.5 text-[11px] font-semibold text-[#dc1414]">
            {couponError}
          </p>
        )}
      </div>

      {/* Price Calculations */}
      <div className="py-3.5 space-y-2 text-[13px]">
        <div className="flex items-center justify-between text-[#4b5563]">
          <span>Subtotal ({items.length} Items)</span>
          <span className="font-bold text-[#111827]">{formatINR(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-[#16a34a] font-semibold">
          <span>Discount</span>
          <span>- {formatINR(totalDiscount)}</span>
        </div>

        <div className="flex items-center justify-between text-[#4b5563]">
          <span>Delivery Charges</span>
          <span className="font-bold text-[#111827]">
            {deliveryCharge === 0 ? '₹0' : formatINR(deliveryCharge)}
          </span>
        </div>
      </div>

      {/* Total Amount */}
      <div className="pt-3 border-t border-[#f3f4f6]">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-[15px] font-bold text-[#111827] block leading-tight">
              Total Amount
            </span>
            <span className="text-[11px] text-[#6b7280]">
              (Inclusive of all taxes)
            </span>
          </div>
          <span className="text-[24px] sm:text-[26px] font-black text-[#dc1414] tracking-tight">
            {formatINR(finalTotal)}
          </span>
        </div>

        {/* Place Order Button */}
        <button
          type="button"
          onClick={onPlaceOrder}
          className="w-full py-3.5 px-4 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white font-bold text-[14.5px] flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
          </svg>
          <span>Place Order</span>
          <span aria-hidden="true">&rarr;</span>
        </button>

        {/* Trust Badges */}
        <div className="mt-3.5 text-center text-[11px] text-[#6b7280] flex items-center justify-center flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 font-medium">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#16a34a]">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
            </svg>
            <span>100% Secure Payment</span>
          </span>
          <span>|</span>
          <Link href="/refund-policy" className="hover:text-[#dc1414] hover:underline">Easy Returns</Link>
          <span>|</span>
          <span>GST Invoice</span>
        </div>

        <p className="mt-2 text-center text-[10.5px] text-[#9ca3af] leading-tight">
          By placing your order, you agree to Prestige Computers&apos;{' '}
          <Link href="/terms" className="underline hover:text-[#dc1414]">Terms of Sale</Link> and{' '}
          <Link href="/privacy" className="underline hover:text-[#dc1414]">Privacy Policy</Link>.
        </p>
      </div>
    </aside>
  )
}
