'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { normalizeCartItem } from './CartItemsList'
import { validateCouponApi, getActiveCouponsApi } from '../../services/couponApi'

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
  const { isArabic, isRtl } = useLanguage()
  const { cartItems, openLoginModal, currentUser } = useStore()
  const [coupon, setCoupon] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [couponError, setCouponError] = useState('')
  const [isValidatingCoupon, setIsValidatingCoupon] = useState(false)
  const [availableCoupons, setAvailableCoupons] = useState([])
  const [showAvailableOffers, setShowAvailableOffers] = useState(false)

  // Calculate Subtotal from cart items dynamically
  const selectedItems = (Array.isArray(cartItems) ? cartItems : [])
    .map(normalizeCartItem)
    .filter(Boolean)
    .filter((it) => it.selected !== false)

  const totalCount = selectedItems.reduce((acc, it) => acc + (it.quantity || 1), 0)
  const subtotal = selectedItems.reduce((acc, it) => acc + it.price * (it.quantity || 1), 0)

  // Dynamic delivery charge calculated from cart items
  const rawDeliveryCharges = selectedItems.reduce((acc, it) => {
    const isFree = it.isFreeDelivery !== false && Number(it.deliveryCharge || 0) === 0
    return acc + (isFree ? 0 : Number(it.deliveryCharge || 0) * (it.quantity || 1))
  }, 0)

  // Load available coupons and existing session coupon on mount
  useEffect(() => {
    let isMounted = true
    getActiveCouponsApi().then((data) => {
      if (isMounted && Array.isArray(data)) {
        setAvailableCoupons(data)
      }
    })

    try {
      const saved = sessionStorage.getItem('pcs_applied_coupon')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed && parsed.code) {
          setAppliedCoupon(parsed)
        }
      }
    } catch {}

    return () => {
      isMounted = false
    }
  }, [])

  // Dynamic live calculation of coupon discount
  let couponDiscount = 0
  let effectiveDeliveryCharge = rawDeliveryCharges

  if (appliedCoupon) {
    if (appliedCoupon.isFreeShipping || appliedCoupon.discountType === 'free_shipping') {
      effectiveDeliveryCharge = 0
      couponDiscount = 0
    } else if (appliedCoupon.discountType === 'percentage') {
      let disc = Math.round((subtotal * appliedCoupon.discountValue) / 100)
      if (appliedCoupon.maxDiscountAmount && disc > appliedCoupon.maxDiscountAmount) {
        disc = appliedCoupon.maxDiscountAmount
      }
      couponDiscount = disc
    } else {
      couponDiscount = Math.min(subtotal, appliedCoupon.discountAmount ?? appliedCoupon.discountValue)
    }
  }

  const totalDiscount = couponDiscount
  const finalTotal = Math.max(0, subtotal - totalDiscount + effectiveDeliveryCharge)

  const handleApplyCouponCode = async (codeToApply) => {
    const code = (codeToApply || coupon).trim().toUpperCase()
    if (!code) {
      setCouponError(isArabic ? 'يرجى إدخال رمز الخصم' : 'Please enter a coupon code')
      return
    }

    setCouponError('')
    setIsValidatingCoupon(true)

    try {
      const res = await validateCouponApi({
        code,
        cartTotal: subtotal,
        deliveryCharge: rawDeliveryCharges,
      })

      const couponObj = {
        code: res.code,
        label: res.description,
        discountType: res.discountType,
        discountValue: res.discountValue,
        discountAmount: res.discountAmount,
        isFreeShipping: res.isFreeShipping,
        maxDiscountAmount: res.maxDiscountAmount,
      }

      setAppliedCoupon(couponObj)
      setCoupon('')
      try {
        sessionStorage.setItem('pcs_applied_coupon', JSON.stringify(couponObj))
      } catch {}
    } catch (err) {
      setCouponError(err.message || (isArabic ? 'رمز الخصم غير صالح' : 'Invalid coupon code'))
    } finally {
      setIsValidatingCoupon(false)
    }
  }

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null)
    setCoupon('')
    setCouponError('')
    try {
      sessionStorage.removeItem('pcs_applied_coupon')
    } catch {}
  }

  const handleCheckout = () => {
    if (!currentUser) {
      openLoginModal()
      return
    }
    if (appliedCoupon) {
      try {
        sessionStorage.setItem('pcs_applied_coupon', JSON.stringify(appliedCoupon))
      } catch {}
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
              {formatCurrency(subtotal, isArabic)}
            </span>
          </div>

          <div className="flex items-center justify-between text-emerald-600 font-semibold">
            <span>
              {isRtl ? 'الخصم' : 'Discount'}{' '}
              {appliedCoupon ? `(${appliedCoupon.code})` : ''}
            </span>
            <span>{totalDiscount > 0 ? `- ${formatCurrency(totalDiscount, isArabic)}` : (isArabic ? '0 ر.ق' : 'QAR 0')}</span>
          </div>

          <div className="flex items-center justify-between text-gray-700">
            <span className="inline-flex items-center gap-1.5">
              <TruckIcon className="w-4 h-4 text-gray-500" />
              <span>{isRtl ? 'رسوم التوصيل' : 'Delivery Charges'}</span>
            </span>
            <span className={`font-semibold ${effectiveDeliveryCharge === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
              {effectiveDeliveryCharge === 0
                ? (isRtl ? 'مجاني' : 'Free')
                : formatCurrency(effectiveDeliveryCharge, isArabic)}
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
              {formatCurrency(finalTotal, isArabic)}
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
            className="flex items-center justify-between text-xs sm:text-[13px] font-bold text-gray-800 mb-2.5"
          >
            <span className="flex items-center gap-1.5">
              <TicketIcon className="w-4 h-4 text-[#dc1414]" />
              <span>{isRtl ? 'هل لديك كود خصم؟' : 'Have a Coupon Code?'}</span>
            </span>
            {availableCoupons.length > 0 && (
              <button
                type="button"
                onClick={() => setShowAvailableOffers(!showAvailableOffers)}
                className="text-[11px] text-[#dc1414] hover:underline font-semibold cursor-pointer"
              >
                {showAvailableOffers
                  ? (isRtl ? 'إخفاء العروض' : 'Hide Offers')
                  : (isRtl ? 'عرض الكوبونات المتاحة' : 'View Offers')}
              </button>
            )}
          </label>

          {appliedCoupon ? (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="px-2 py-0.5 rounded text-[11px] font-black bg-emerald-600 text-white tracking-wide">
                  {appliedCoupon.code}
                </span>
                <span className="text-xs text-emerald-800 font-medium truncate">
                  {appliedCoupon.label || (isRtl ? 'تم تطبيق الخصم' : 'Coupon applied!')}
                </span>
              </div>
              <button
                type="button"
                onClick={handleRemoveCoupon}
                className="text-xs text-red-600 hover:text-red-800 font-bold px-2 py-1 hover:bg-red-50 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {isRtl ? 'إلغاء' : 'Remove'}
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleApplyCouponCode()
              }}
              className="flex gap-2"
            >
              <input
                id="cart-coupon-input"
                type="text"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value)
                  setCouponError('')
                }}
                placeholder={isRtl ? 'أدخل كود الخصم (مثال: PRESTIGE10)' : 'Enter coupon code (e.g. PRESTIGE10)'}
                className="flex-1 min-w-0 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-gray-250 bg-gray-50/50 focus:outline-none focus:ring-1.5 focus:ring-[#dc1414] transition-all uppercase"
              />
              <button
                type="submit"
                disabled={isValidatingCoupon || !coupon.trim()}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isValidatingCoupon || !coupon.trim()
                    ? 'border border-gray-200 text-gray-400 bg-gray-100 cursor-not-allowed'
                    : 'border border-[#dc1414] text-[#dc1414] hover:bg-red-50'
                }`}
              >
                {isValidatingCoupon ? '...' : (isRtl ? 'تطبيق' : 'Apply')}
              </button>
            </form>
          )}

          {couponError && (
            <p className="text-[11.5px] text-red-600 font-medium mt-1.5">
              {couponError}
            </p>
          )}

          {/* Collapsible Available Offers List */}
          {showAvailableOffers && availableCoupons.length > 0 && !appliedCoupon && (
            <div className="mt-3 p-2.5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-[11px] font-bold text-gray-700 block mb-1">
                {isRtl ? 'الكوبونات المتاحة حالياً:' : 'Active Store Coupons:'}
              </span>
              {availableCoupons.map((c) => (
                <div
                  key={c.code}
                  className="p-2 rounded-lg bg-white border border-gray-200/80 flex items-center justify-between gap-2 shadow-2xs"
                >
                  <div className="min-w-0">
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-black bg-red-100 text-[#dc1414] tracking-wide">
                      {c.code}
                    </span>
                    <p className="text-[11px] text-gray-600 mt-0.5 truncate">
                      {c.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleApplyCouponCode(c.code)}
                    className="px-2.5 py-1 rounded text-[11px] font-bold bg-[#dc1414] hover:bg-[#b91c1c] text-white shrink-0 cursor-pointer transition-colors"
                  >
                    {isRtl ? 'تطبيق' : 'Apply'}
                  </button>
                </div>
              ))}
            </div>
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
