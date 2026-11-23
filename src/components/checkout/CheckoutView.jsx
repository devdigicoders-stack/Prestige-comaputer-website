'use client'

import { useState } from 'react'
import Link from 'next/link'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs'
import CheckoutStepper from './CheckoutStepper'
import DeliveryAddressSection from './DeliveryAddressSection'
import DeliveryMethodSection from './DeliveryMethodSection'
import PaymentMethodSection from './PaymentMethodSection'
import CheckoutOrderSummary from './CheckoutOrderSummary'
import CheckoutSuccessModal from './CheckoutSuccessModal'
import { FullscreenLoader } from '../common/BrandLoader'
import { useStore } from '../../context/StoreContext'
import { createOrder } from '../../services/orderApi'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'

export default function CheckoutView() {
  const { cartItems, removeFromCart, clearCart, currentUser, openLoginModal, openRegisterModal } = useStore()
  const { isArabic } = useLanguage()
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [deliveryMethod, setDeliveryMethod] = useState('standard') // 'standard' | 'express' | 'pickup'
  const [selectedPayment, setSelectedPayment] = useState('card') // 'card' | 'cod' | 'pos' | 'qnb' | 'pickup'
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [orderError, setOrderError] = useState('')
  const [placedOrderDetails, setPlacedOrderDetails] = useState(null)

  const selectedItems = Array.isArray(cartItems) ? cartItems.filter((c) => c.selected !== false) : []
  const selectedCount = selectedItems.reduce((acc, it) => acc + (it.quantity || 1), 0)

  const handlePlaceOrder = async (summaryData) => {
    // 1. Must be logged in
    if (!currentUser) {
      setOrderError(
        isArabic
          ? 'يجب تسجيل الدخول لإنشاء وتأكيد الطلب. يرجى تسجيل الدخول.'
          : 'You must be signed in to create and place an order. Please log in.'
      )
      openLoginModal()
      return
    }

    // 2. Cart must contain items
    const itemsToOrder = summaryData?.items || []
    if (!itemsToOrder || itemsToOrder.length === 0) {
      setOrderError(
        isArabic
          ? 'سلة التسوق فارغة. يرجى إضافة منتجات قبل إتمام الطلب.'
          : 'Your shopping cart is empty. Please add products before placing an order.'
      )
      return
    }

    // 3. For delivery (standard/express), must have a selected delivery address
    if (deliveryMethod !== 'pickup') {
      if (!selectedAddress || (!selectedAddress.street && !selectedAddress.address)) {
        setOrderError(
          isArabic
            ? 'يرجى تحديد أو إضافة عنوان التوصيل في قطر.'
            : 'Please select or add a delivery shipping address in Qatar.'
        )
        return
      }
    }

    setIsPlacingOrder(true)
    setOrderError('')

    try {
      const calcTotal = summaryData?.finalTotal || 0
      const calcSubtotal = summaryData?.subtotal || calcTotal
      const calcDelivery = summaryData?.deliveryCharge || 0
      const calcDiscount = summaryData?.totalDiscount || 0

      // Map payment methods cleanly for database
      const paymentMap = {
        card: 'Credit / Debit Card',
        cod: 'Cash on Delivery',
        pos: 'POS Terminal on Delivery',
        qnb: 'QNB Bank Transfer',
        pickup: 'Showroom Collection & Pay',
        // Backward compatibility fallbacks
        upi: 'Credit / Debit Card',
        netbanking: 'QNB Bank Transfer',
      }

      const recipientName =
        selectedAddress?.name || currentUser.name || (isArabic ? 'عميل برستيج' : 'Prestige Customer')
      const recipientPhone =
        selectedAddress?.phone || currentUser.phone || currentUser.mobile || '+974 6691 9155'
      const streetAddress =
        deliveryMethod === 'pickup'
          ? 'Al-Mirqab Mall, Tower 1, Office 201, Doha'
          : selectedAddress?.street || selectedAddress?.address || 'Doha'
      const city =
        deliveryMethod === 'pickup'
          ? 'Doha'
          : selectedAddress?.city || currentUser.city || 'Doha'
      const state =
        deliveryMethod === 'pickup'
          ? 'Al Mirqab'
          : selectedAddress?.state || 'Doha'
      const postalCode =
        deliveryMethod === 'pickup'
          ? 'Doha'
          : selectedAddress?.postalCode || 'Doha'
      const addressType =
        deliveryMethod === 'pickup'
          ? 'Showroom'
          : selectedAddress?.type || 'Home'

      const payload = {
        orderItems: itemsToOrder.map((it) => ({
          productId: it.id,
          name: it.name,
          title: it.name,
          image: it.image || '',
          price: it.price,
          quantity: it.quantity || 1,
          specs: it.specs || '',
          type: it.type || 'Buy',
        })),
        customer: {
          name: recipientName,
          email: currentUser.email,
          phone: recipientPhone,
        },
        shippingAddress: {
          name: recipientName,
          phone: recipientPhone,
          street: streetAddress,
          city,
          state,
          postalCode,
          country: selectedAddress?.country || 'Qatar',
          addressType,
        },
        deliveryMethod,
        paymentMethod: paymentMap[selectedPayment] || 'Credit / Debit Card',
        itemsPrice: calcSubtotal,
        shippingPrice: calcDelivery,
        discountPrice: calcDiscount,
        couponCode: summaryData?.couponCode || '',
        coupon: summaryData?.appliedCoupon || null,
        totalPrice: calcTotal,
        notes: summaryData?.couponCode
          ? `Coupon applied: ${summaryData.couponCode} • Method: ${deliveryMethod}`
          : `Method: ${deliveryMethod}`,
      }

      const created = await createOrder(payload)
      setPlacedOrderDetails(created)

      // Clean up session coupon
      try {
        sessionStorage.removeItem('pcs_applied_coupon')
      } catch {}

      // Remove checked-out items from cart, preserving any unselected items
      const orderedIds = itemsToOrder.map((it) => it.id)
      orderedIds.forEach((id) => removeFromCart(id))
      setIsSuccessModalOpen(true)
    } catch (err) {
      console.error('Order creation error:', err)
      setOrderError(
        err?.message ||
          (isArabic
            ? 'تعذر إتمام الطلب في الوقت الحالي. يرجى المحاولة مرة أخرى.'
            : 'Could not place order. Please try again.')
      )
    } finally {
      setIsPlacingOrder(false)
    }
  }

  // If user is not logged in, show Auth Gate
  if (!currentUser) {
    return (
      <div className="bg-[#f8fafc] min-h-[80vh] flex items-center justify-center py-16 px-4 text-[#111827]">
        <div className="w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-xl p-8 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-[#fef2f2] border border-[#fee2e2] text-[#dc1414] mx-auto flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            {isArabic ? 'تسجيل الدخول مطلوب' : 'Sign In Required'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {isArabic
              ? 'يجب تسجيل الدخول إلى حسابك في برستيج كمبيوترز لإتمام عملية الدفع وتأكيد الطلب.'
              : 'You must be signed in to Prestige Computers to checkout and place your order.'}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={openLoginModal}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              {isArabic ? 'تسجيل الدخول إلى حسابك' : 'Sign In to Your Account'}
            </button>

            <button
              type="button"
              onClick={openRegisterModal}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold transition-all cursor-pointer"
            >
              {isArabic ? 'إنشاء حساب جديد' : 'Create a New Account'}
            </button>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-150">
            <Link
              href="/products"
              className="text-xs font-medium text-gray-500 hover:text-[#dc1414] transition-colors"
            >
              &larr; {isArabic ? 'العودة لكتالوج المنتجات' : 'Back to Products Catalog'}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* 1. Breadcrumbs: Home > Cart > Checkout */}
        <CheckoutBreadcrumbs />

        {/* 2. Top Header: Title & 4-Step Stepper */}
        <CheckoutStepper currentStep={2} cartCount={selectedCount} />

        {/* Error notification if placement failed */}
        {orderError && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-[13px] text-[#b91c1c] font-medium flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>{orderError}</span>
            </div>
            <button
              type="button"
              onClick={() => setOrderError('')}
              className="font-bold underline text-[12px] cursor-pointer"
            >
              {isArabic ? 'إغلاق' : 'Dismiss'}
            </button>
          </div>
        )}

        {/* 3. Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-5">
          {/* Left Column: Delivery Address, Delivery Method, Payment Method (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* 1. Delivery Address */}
            <DeliveryAddressSection
              currentUser={currentUser}
              selectedAddress={selectedAddress}
              onSelectAddress={setSelectedAddress}
            />

            {/* 2. Delivery Method */}
            <DeliveryMethodSection
              deliveryMethod={deliveryMethod}
              onSelectDeliveryMethod={setDeliveryMethod}
            />

            {/* 3. Payment Method */}
            <PaymentMethodSection
              selectedPayment={selectedPayment}
              onSelectPayment={setSelectedPayment}
            />
          </div>

          {/* Right Column: Order Summary & Place Order (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <CheckoutOrderSummary
              deliveryMethod={deliveryMethod}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </div>

      {/* Order Processing Fullscreen Loader */}
      {isPlacingOrder && (
        <FullscreenLoader
          isOpen={true}
          title={isArabic ? 'جاري تأكيد وتجهيز الطلب...' : 'Placing Your Order...'}
          subtitle={
            isArabic
              ? 'تخصيص المخزون وإصدار الفاتورة الرسمية لنظام برستيج...'
              : 'Reserving hardware stock and generating official PCS invoice...'
          }
        />
      )}

      {/* Order Success Celebratory Modal */}
      <CheckoutSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        orderNumber={placedOrderDetails?.orderNumber || ''}
        paymentMethod={placedOrderDetails?.paymentMethod || selectedPayment}
        totalAmount={
          placedOrderDetails?.totalPrice
            ? formatCurrency(placedOrderDetails.totalPrice, isArabic)
            : isArabic
            ? '0 ر.ق'
            : 'QAR 0'
        }
        estimatedDelivery={
          placedOrderDetails?.estimatedDelivery ||
          (deliveryMethod === 'pickup'
            ? isArabic
              ? 'جاهز للاستلام خلال ساعتين من معرض المرقاب مول'
              : 'Ready for pickup in 2 hours at Al-Mirqab Mall'
            : isArabic
            ? 'خلال 2-4 أيام عمل في قطر'
            : 'In 2-4 business days across Qatar')
        }
        shippingAddress={placedOrderDetails?.shippingAddress || selectedAddress}
      />
    </div>
  )
}
