'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { normalizeCartItem } from './CartItemsList'

function LockIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  )
}

function TicketIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
    </svg>
  )
}

function TruckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h1.5" />
    </svg>
  )
}

export default function OrderSummary() {
  const router = useRouter()
  const { isRtl } = useLanguage()
  const { cartItems, openLoginModal, currentUser } = useStore()
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  // Calculate Subtotal from cart items dynamically
  const selectedItems = (Array.isArray(cartItems) ? cartItems : [])
    .map(normalizeCartItem)
    .filter(Boolean)
    .filter((it) => it.selected !== false)

  const totalCount = selectedItems.reduce((acc, it) => acc + (it.quantity || 1), 0)
  const subtotal = selectedItems.reduce((acc, it) => acc + it.price * (it.quantity || 1), 0)

  // Dynamic delivery charge calculated from cart items
  const deliveryCharges = selectedItems.reduce((acc, it) => {
    const isFree = it.isFreeDelivery !== false && Number(it.deliveryCharge || 0) === 0
    return acc + (isFree ? 0 : Number(it.deliveryCharge || 0) * (it.quantity || 1))
  }, 0)

  // STRICT RULE: No discount applied automatically! Discount is ₹0 until a coupon is applied.
  const couponDiscount = couponApplied
    ? (coupon.trim().toUpperCase() === 'SAVE5'
        ? Math.round(subtotal * 0.05)
        : Math.round(subtotal * 0.1))
    : 0
  const totalDiscount = couponDiscount
  const finalTotal = Math.max(0, subtotal - totalDiscount + deliveryCharges)

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    const code = coupon.trim().toUpperCase()
    if (!code) {
      setCouponError('Please enter a coupon code')
      return
    }
    setCouponApplied(true)
    setCouponError('')
  }

  const handleCheckout = () => {
    if (!currentUser) {
      openLoginModal()
      return
    }
    router.push('/checkout')
  }

  return (
    <aside className="w-full lg:w-[380px] shrink-0" aria-label="Order Summary">
      <div className="bg-white rounded-2xl border border-gray-150 p-5 sm:p-6 shadow-xs sticky top-24">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 pb-4 border-b border-gray-100 tracking-tight">
          {isRtl ? 'ملخص الطلب' : 'Order Summary'}
        </h2>

        {/* Pricing Rows */}
        <div className="py-4 space-y-3 text-[13.5px]">
          <div className="flex items-center justify-between text-gray-700">
            <span>
              {isRtl
                ? `المجموع الفرعي (${totalCount} ${totalCount === 1 ? 'منتج' : 'منتجات'})`
                : `Subtotal (${totalCount} ${totalCount === 1 ? 'Item' : 'Items'})`}
            </span>
            <span className="font-bold text-gray-900">
              ₹{subtotal.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="flex items-center justify-between text-emerald-600 font-semibold">
            <span>
              {isRtl ? 'الخصم' : 'Discount'}{' '}
              {couponApplied && coupon ? `(${coupon.trim().toUpperCase()})` : ''}
            </span>
            <span>{totalDiscount > 0 ? `- ₹${totalDiscount.toLocaleString('en-IN')}` : '₹0'}</span>
          </div>

          <div className="flex items-center justify-between text-gray-700">
            <span className="inline-flex items-center gap-1.5">
              <TruckIcon className="w-4 h-4 text-gray-500" />
              <span>{isRtl ? 'رسوم التوصيل' : 'Delivery Charges'}</span>
            </span>
            <span className={`font-semibold ${deliveryCharges === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
              {deliveryCharges === 0
                ? (isRtl ? 'مجاني' : 'Free')
                : `₹${deliveryCharges.toLocaleString('en-IN')}`}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-150 pt-4">
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <span className="text-base font-bold text-gray-900 block leading-tight">
                {isRtl ? 'المبلغ الإجمالي' : 'Total Amount'}
              </span>
              <span className="text-[11.5px] text-gray-500 font-normal">
                {isRtl ? '(شامل لجميع الرسوم والضرائب)' : '(Inclusive of all taxes)'}
              </span>
            </div>
            <span className="text-2xl font-black text-[#dc1414] tracking-tight">
              ₹{finalTotal.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Checkout CTA */}
          <button
            type="button"
            onClick={handleCheckout}
            className="w-full py-3.5 px-4 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white font-bold text-[14.5px] flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <LockIcon className="w-4 h-4 shrink-0" />
            <span>{isRtl ? 'المتابعة لإتمام الطلب' : 'Proceed to Checkout'}</span>
            <span aria-hidden="true" className="rtl:rotate-180">&rarr;</span>
          </button>
        </div>

        {/* Coupon Code Section */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <label
            htmlFor="cart-coupon-input"
            className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-gray-800 mb-2.5"
          >
            <TicketIcon className="w-4 h-4 text-[#dc1414]" />
            <span>{isRtl ? 'هل لديك كود خصم؟' : 'Have a Coupon Code?'}</span>
          </label>

          <form onSubmit={handleApplyCoupon} className="flex gap-2">
            <input
              id="cart-coupon-input"
              type="text"
              value={coupon}
              onChange={(e) => {
                setCoupon(e.target.value)
                setCouponError('')
              }}
              placeholder={isRtl ? 'أدخل كود الخصم' : 'Enter coupon code'}
              className="flex-1 min-w-0 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-gray-250 bg-gray-50/50 focus:outline-none focus:ring-1.5 focus:ring-[#dc1414] transition-all"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl border border-[#dc1414] text-[#dc1414] hover:bg-red-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              {isRtl ? 'تطبيق' : 'Apply'}
            </button>
          </form>

          {couponApplied && (
            <p className="text-[11.5px] text-emerald-600 font-semibold mt-1.5">
              ✓ Coupon applied successfully! Extra 5% off included.
            </p>
          )}
          {couponError && (
            <p className="text-[11.5px] text-red-600 font-medium mt-1.5">
              {couponError}
            </p>
          )}
        </div>

        {/* Free Delivery Banner */}
        <div className="mt-5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 text-center">
          <TruckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>You are eligible for Free Delivery!</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect width="20" height="5" x="2" y="7" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>
      </div>
    </aside>
  )
}
