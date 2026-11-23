'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useStore } from '../../context/StoreContext'
import { getProductImageUrl } from '../../services/productApi'
import { validateCouponApi, getActiveCouponsApi } from '../../services/couponApi'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  WishlistLaptopVisual,
} from '../wishlist/WishlistVisuals'

export default function CheckoutOrderSummary({
  deliveryMethod = 'standard',
  onPlaceOrder,
}) {
  const { cartItems } = useStore()
  const { isArabic, isRtl } = useLanguage()
  const [coupon, setCoupon] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [couponError, setCouponError] = useState('')
  const [isValidatingCoupon, setIsValidatingCoupon] = useState(false)
  const [availableCoupons, setAvailableCoupons] = useState([])
  const [showAvailableOffers, setShowAvailableOffers] = useState(false)

  // Restore coupon from session if applied on cart page, and load active promo coupons
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

  const items = useMemo(() => {
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      // ONLY selected cart items are eligible for checkout order
      const selectedCartItems = cartItems.filter((c) => c.selected !== false)
      return selectedCartItems.map((c) => ({
        id: c.id || c.slug || c._id || 'prod',
        name: c.name || c.title || 'Product Hardware System',
        specs:
          typeof c.specs === 'string'
            ? c.specs
            : c.specs?.cpu
            ? `${c.specs.cpu} | ${c.specs.ram || ''}`
            : Array.isArray(c.specs)
            ? c.specs.map((s) => s.label || s).join(' | ')
            : (c.subtitle || c.category || ''),
        price: Number(c.price) || 0,
        quantity: Math.max(1, Number(c.quantity || 1)),
        image: c.image || '',
        isFreeDelivery: c.isFreeDelivery !== false && Number(c.deliveryCharge || 0) === 0,
        deliveryCharge: c.isFreeDelivery === false ? Number(c.deliveryCharge || 0) : 0,
        type: c.type || 'Buy',
      }))
    }
    return []
  }, [cartItems])

  const subtotal = items.reduce((acc, it) => acc + it.price * it.quantity, 0)

  // Delivery charge calculations
  const baseDeliveryCharge = items.reduce((acc, it) => {
    return acc + (it.isFreeDelivery ? 0 : it.deliveryCharge * it.quantity)
  }, 0)

  let expressSurcharge = 0
  if (deliveryMethod === 'express') {
    expressSurcharge = 25
  } else if (deliveryMethod === 'pickup') {
    expressSurcharge = 0
  }

  const rawDeliveryCharge =
    deliveryMethod === 'pickup'
      ? 0
      : items.length > 0
      ? baseDeliveryCharge + expressSurcharge
      : 0

  // Calculate Coupon Discount dynamically
  let couponDiscount = 0
  let effectiveDeliveryCharge = rawDeliveryCharge

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
    setCouponError('')

    if (!code) {
      setCouponError(isArabic ? 'يرجى إدخال رمز القسيمة.' : 'Please enter a coupon code.')
      return
    }

    try {
      setIsValidatingCoupon(true)
      const res = await validateCouponApi({
        code,
        cartTotal: subtotal,
        deliveryCharge: rawDeliveryCharge,
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
      setCouponError(err.message || (isArabic ? 'رمز القسيمة غير صالح. يرجى المحاولة مرة أخرى.' : 'Invalid coupon code. Please try again.'))
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

  const handleTriggerPlaceOrder = () => {
    if (items.length === 0) return
    onPlaceOrder?.({
      items,
      subtotal,
      deliveryCharge: effectiveDeliveryCharge,
      totalDiscount,
      finalTotal,
      couponCode: appliedCoupon?.code || '',
      appliedCoupon,
    })
  }

  return (
    <aside className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#f3f4f6]">
        <h2 className="text-[17px] font-bold text-[#111827]">
          {isArabic ? 'ملخص الطلب' : 'Order Summary'}{' '}
          <span className="text-[14px] font-semibold text-[#dc1414]">
            ({items.length} {isArabic ? 'منتجات' : 'Items'})
          </span>
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
          <span>{isArabic ? 'تعديل السلة' : 'Edit Cart'}</span>
        </Link>
      </div>

      {/* Item List */}
      {items.length === 0 ? (
        <div className="py-8 text-center text-gray-500">
          <p className="text-[13.5px] font-medium text-gray-700">
            {isArabic ? 'سلة التسوق فارغة حالياً.' : 'Your cart is currently empty.'}
          </p>
          <p className="text-[12px] text-gray-400 mt-1">
            {isArabic ? 'أضف منتجات من المتجر لمتابعة الطلب.' : 'Add items from the store to proceed.'}
          </p>
          <Link
            href="/products"
            className="mt-3 inline-block px-4 py-1.5 rounded-lg bg-[#dc1414] text-white text-[12.5px] font-bold hover:bg-[#b91c1c] transition-colors"
          >
            {isArabic ? 'استعراض الأجهزة' : 'Explore Products'} &rarr;
          </Link>
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-[#f3f4f6] py-2 max-h-[280px] overflow-y-auto">
          {items.map((item, idx) => (
            <div key={item.id + idx} className="py-3 flex items-center justify-between gap-3">
              {/* Visual Thumbnail */}
              <div className="w-14 h-12 bg-[#f8fafc] rounded-lg border border-[#e5e7eb] flex items-center justify-center p-1 shrink-0 overflow-hidden">
                {item.image ? (
                  <img
                    src={getProductImageUrl(item.image)}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <WishlistLaptopVisual className="w-full h-full max-h-[50px] object-contain" />
                )}
              </div>

              {/* Title & Specs */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-bold text-[#111827] truncate">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[#6b7280] truncate mt-0.5">
                  {item.specs}
                </p>
                <span className="text-[10.5px] font-semibold text-emerald-600 block mt-0.5">
                  {item.isFreeDelivery
                    ? isArabic
                      ? '✓ توصيل مجاني'
                      : '✓ Free Delivery'
                    : `+ ${formatCurrency(item.deliveryCharge * item.quantity, isArabic)} ${isArabic ? 'شحن' : 'Delivery'}`}
                </span>
              </div>

              {/* Price & Quantity */}
              <div className="text-right shrink-0">
                <div className="text-[14px] font-black text-[#dc1414]">
                  {formatCurrency(item.price * item.quantity, isArabic)}
                </div>
                <div className="text-[11px] text-[#6b7280] mt-0.5">
                  {isArabic ? 'الكمية:' : 'Qty:'} {item.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Coupon Code Section */}
      <div className="py-3 border-t border-b border-[#f3f4f6] my-1">
        <div className="flex items-center justify-between text-[12.5px] font-bold text-[#111827] mb-2">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#dc1414]">
              <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            <span>{isArabic ? 'هل لديك رمز قسيمة خصم؟' : 'Have a Coupon Code?'}</span>
          </div>
          {availableCoupons.length > 0 && (
            <button
              type="button"
              onClick={() => setShowAvailableOffers(!showAvailableOffers)}
              className="text-[11px] text-[#dc1414] hover:underline font-semibold cursor-pointer"
            >
              {showAvailableOffers
                ? (isArabic ? 'إخفاء العروض' : 'Hide Offers')
                : (isArabic ? 'عرض الكوبونات المتاحة' : 'View Offers')}
            </button>
          )}
        </div>

        {appliedCoupon ? (
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-[12px]">
            <div>
              <span className="font-bold text-emerald-800 tracking-wider font-mono">
                {appliedCoupon.code}
              </span>
              <p className="text-[11px] text-emerald-700">{appliedCoupon.label}</p>
            </div>
            <button
              type="button"
              onClick={handleRemoveCoupon}
              className="text-[#dc1414] hover:underline font-bold text-[11.5px] cursor-pointer"
            >
              {isArabic ? 'إلغاء' : 'Remove'}
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
              type="text"
              value={coupon}
              disabled={isValidatingCoupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="e.g. PRESTIGE10, FIRSTBUY"
              className="flex-1 bg-white border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[12.5px] rounded-lg px-3 py-1.5 outline-none uppercase disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={isValidatingCoupon}
              className="border-2 border-[#dc1414] text-[#dc1414] hover:bg-[#fef2f2] text-[12.5px] font-bold px-4 py-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            >
              {isValidatingCoupon ? (isArabic ? 'جاري التحقق...' : 'Applying...') : (isArabic ? 'تطبيق' : 'Apply')}
            </button>
          </form>
        )}

        {couponError && (
          <p className="mt-1.5 text-[11px] font-semibold text-[#dc1414]">
            {couponError}
          </p>
        )}

        {/* Collapsible Available Store Offers */}
        {showAvailableOffers && availableCoupons.length > 0 && !appliedCoupon && (
          <div className="mt-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <span className="text-[11px] font-bold text-gray-700 block mb-1">
              {isArabic ? 'العروض والكوبونات المتاحة:' : 'Available Store Coupons:'}
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
                  {isArabic ? 'تطبيق' : 'Apply'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Calculations */}
      <div className="py-3.5 space-y-2 text-[13px]">
        <div className="flex items-center justify-between text-[#4b5563]">
          <span>{isArabic ? 'المجموع الفرعي' : 'Subtotal'} ({items.length} {isArabic ? 'منتجات' : 'Items'})</span>
          <span className="font-bold text-[#111827]">{formatCurrency(subtotal, isArabic)}</span>
        </div>

        <div className="flex items-center justify-between text-[#16a34a] font-semibold">
          <span>{isArabic ? 'الخصم' : 'Discount'} {appliedCoupon ? `(${appliedCoupon.code})` : ''}</span>
          <span>{totalDiscount > 0 ? `- ${formatCurrency(totalDiscount, isArabic)}` : (isArabic ? '0 ر.ق' : 'QAR 0')}</span>
        </div>

        <div className="flex items-center justify-between text-[#4b5563]">
          <span>{isArabic ? 'رسوم التوصيل' : 'Delivery Charges'}</span>
          <span className={`font-bold ${effectiveDeliveryCharge === 0 ? 'text-[#16a34a]' : 'text-[#111827]'}`}>
            {effectiveDeliveryCharge === 0
              ? isArabic
                ? 'مجاني'
                : 'Free'
              : formatCurrency(effectiveDeliveryCharge, isArabic)}
          </span>
        </div>
      </div>

      {/* Total Amount */}
      <div className="pt-3 border-t border-[#f3f4f6]">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-[15px] font-bold text-[#111827] block leading-tight">
              {isArabic ? 'المبلغ الإجمالي' : 'Total Amount'}
            </span>
            <span className="text-[11px] text-[#6b7280]">
              {isArabic ? '(شامل جميع الرسوم وضمان المتجر)' : '(Inclusive of official warranty)'}
            </span>
          </div>
          <span className="text-[24px] sm:text-[26px] font-black text-[#dc1414] tracking-tight">
            {formatCurrency(finalTotal, isArabic)}
          </span>
        </div>

        {/* Place Order Button */}
        <button
          type="button"
          disabled={items.length === 0}
          onClick={handleTriggerPlaceOrder}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-[14.5px] flex items-center justify-center gap-2 shadow-xs transition-all ${
            items.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white cursor-pointer'
          }`}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
          </svg>
          <span>
            {items.length === 0
              ? isArabic
                ? 'سلة التسوق فارغة'
                : 'Your Cart is Empty'
              : isArabic
              ? 'تأكيد وإتمام الطلب'
              : 'Place Order'}
          </span>
          {items.length > 0 && <span aria-hidden="true">&rarr;</span>}
        </button>

        {/* Trust Badges */}
        <div className="mt-3.5 text-center text-[11px] text-[#6b7280] flex items-center justify-center flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 font-medium">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#16a34a]">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
            </svg>
            <span>{isArabic ? 'دفع آمن 100%' : '100% Secure Payment'}</span>
          </span>
          <span>|</span>
          <Link href="/about" className="hover:text-[#dc1414] hover:underline">
            {isArabic ? 'استبدال وضمان معتمد' : 'Authorized Warranty'}
          </Link>
          <span>|</span>
          <span>{isArabic ? 'فاتورة رسمية معتمدة' : 'Official Store Invoice'}</span>
        </div>

        <p className="mt-2 text-center text-[10.5px] text-[#9ca3af] leading-tight">
          {isArabic ? (
            <>
              بإتمام هذا الطلب، أنت توافق على{' '}
              <Link href="/terms" className="underline hover:text-[#dc1414]">شروط البيع</Link> و{' '}
              <Link href="/privacy" className="underline hover:text-[#dc1414]">سياسة الخصوصية</Link> لبرستيج كمبيوترز.
            </>
          ) : (
            <>
              By placing your order, you agree to Prestige Computers&apos;{' '}
              <Link href="/terms" className="underline hover:text-[#dc1414]">Terms of Sale</Link> and{' '}
              <Link href="/privacy" className="underline hover:text-[#dc1414]">Privacy Policy</Link>.
            </>
          )}
        </p>
      </div>
    </aside>
  )
}
