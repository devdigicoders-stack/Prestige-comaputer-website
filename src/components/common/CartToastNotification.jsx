'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStore } from '../../context/StoreContext'
import { getProductImageUrl } from '../../services/productApi'

export default function CartToastNotification() {
  const { cartToast, hideCartToast, cartCount } = useStore()
  const router = useRouter()

  useEffect(() => {
    if (!cartToast?.show) return
    const timer = setTimeout(() => {
      hideCartToast()
    }, 5500)
    return () => clearTimeout(timer)
  }, [cartToast?.show, hideCartToast])

  if (!cartToast?.show) return null

  const prod = cartToast.product || {}
  const rawImg = prod.image || (Array.isArray(prod.images) ? prod.images[0] : '')
  const imgUrl = rawImg ? getProductImageUrl(rawImg) : ''

  const handleGoToCart = () => {
    hideCartToast()
    router.push('/cart')
  }

  const handleCheckoutNow = () => {
    hideCartToast()
    router.push('/checkout')
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed top-20 right-3 sm:right-6 z-[9999] max-w-[390px] w-[calc(100vw-24px)] bg-white rounded-2xl border-2 border-emerald-500/30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] p-4 sm:p-5 animate-fade-in transition-all duration-300"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div>
            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">
              Product Added to Cart!
            </h4>
            <span className="text-[11px] text-emerald-700 font-medium">
              Cart updated ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={hideCartToast}
          aria-label="Close notification"
          className="text-gray-400 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Product Mini Preview */}
      <div className="py-3 flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-150 p-1 flex items-center justify-center shrink-0 overflow-hidden">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={prod.name || 'Product'}
              className="w-full h-full object-contain"
            />
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-gray-400">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold text-gray-900 truncate">
            {prod.name || 'Product'}
          </p>
          {prod.price && (
            <p className="text-[13px] font-extrabold text-[#dc1414] mt-0.5">
              ₹{Number(prod.price).toLocaleString('en-IN')}
            </p>
          )}
          <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
            Click below to review items and place your order.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleGoToCart}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-[12.5px] font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
              <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
              <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            <span>View Cart & Order</span>
            <span aria-hidden="true">&rarr;</span>
          </button>

          <button
            type="button"
            onClick={handleCheckoutNow}
            className="py-2.5 px-3 rounded-xl border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 text-[12px] font-semibold transition-colors cursor-pointer"
          >
            Checkout
          </button>
        </div>

        <button
          type="button"
          onClick={hideCartToast}
          className="text-center text-[11px] text-gray-500 hover:text-gray-800 transition-colors py-0.5 cursor-pointer"
        >
          &larr; Continue Shopping
        </button>
      </div>
    </div>
  )
}
