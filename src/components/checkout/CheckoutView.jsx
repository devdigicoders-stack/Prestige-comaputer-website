'use client'

import { useState } from 'react'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs'
import CheckoutStepper from './CheckoutStepper'
import DeliveryAddressSection from './DeliveryAddressSection'
import DeliveryMethodSection from './DeliveryMethodSection'
import PaymentMethodSection from './PaymentMethodSection'
import CheckoutOrderSummary from './CheckoutOrderSummary'
import CheckoutSuccessModal from './CheckoutSuccessModal'
import { FullscreenLoader } from '../common/BrandLoader'

export default function CheckoutView() {
  const [selectedAddressId, setSelectedAddressId] = useState('addr-1')
  const [deliveryMethod, setDeliveryMethod] = useState('standard') // 'standard' | 'express'
  const [selectedPayment, setSelectedPayment] = useState('upi') // 'upi' | 'card' | 'netbanking' | 'emi' | 'wallets'
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true)
    setTimeout(() => {
      setIsPlacingOrder(false)
      setIsSuccessModalOpen(true)
    }, 1000)
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* 1. Breadcrumbs: Home > Cart > Checkout */}
        <CheckoutBreadcrumbs />

        {/* 2. Top Header: Title & 4-Step Stepper */}
        <CheckoutStepper currentStep={2} cartCount={3} />

        {/* 3. Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-5">
          {/* Left Column: Delivery Address, Delivery Method, Payment Method (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* 1. Delivery Address */}
            <DeliveryAddressSection
              selectedAddressId={selectedAddressId}
              onSelectAddress={setSelectedAddressId}
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
          title="Processing Order..."
          subtitle="Please wait while we confirm your payment"
        />
      )}

      {/* Order Success Celebratory Modal */}
      <CheckoutSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        paymentMethod={selectedPayment}
        totalAmount={deliveryMethod === 'express' ? '₹1,71,197' : '₹1,70,998'}
      />
    </div>
  )
}
