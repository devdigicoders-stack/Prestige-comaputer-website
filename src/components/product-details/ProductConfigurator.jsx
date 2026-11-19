'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '../../context/StoreContext'

function formatINR(val) {
  return `₹${Number(val).toLocaleString('en-IN')}`
}

export default function ProductConfigurator({
  product = {
    id: 'dell-inspiron-15',
    name: 'Dell Inspiron 15 (2025)',
    subtitle: 'Powerful, Reliable & Perfect for Work, Study and Everyday Use',
    basePrice: 52999,
    originalPrice: 59999,
    discount: '12% OFF',
    rating: 4.6,
    reviewCount: 328,
    soldCount: '1,245+ Sold',
    emi: '₹2,542/month',
  },
}) {
  const router = useRouter()
  const { wishlistIds, toggleWishlist, addToCart } = useStore()
  const isWishlisted = wishlistIds.includes(product.id)

  // Configuration options state
  const [selectedProcessor, setSelectedProcessor] = useState('Core i5')
  const [selectedRam, setSelectedRam] = useState('16GB')
  const [selectedStorage, setSelectedStorage] = useState('512GB SSD')
  const [quantity, setQuantity] = useState(1)
  const [addedToast, setAddedToast] = useState(false)

  // Dynamic price adjustment based on configuration
  const getPrice = () => {
    let p = product.basePrice || 52999
    if (selectedProcessor === 'Core i7') p += 12000
    if (selectedProcessor === 'Core i9') p += 26000
    if (selectedRam === '8GB') p -= 4000
    if (selectedRam === '32GB') p += 8000
    if (selectedStorage === '256GB SSD') p -= 3000
    if (selectedStorage === '1TB SSD') p += 6000
    return p
  }

  const currentPrice = getPrice()
  const currentOriginalPrice = Math.round(currentPrice * 1.13)

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedProcessor}-${selectedRam}-${selectedStorage}`,
      name: `${product.name} (${selectedProcessor}, ${selectedRam}, ${selectedStorage})`,
      price: currentPrice,
      originalPrice: currentOriginalPrice,
      discount: product.discount,
      imageVariant: 'dell-inspiron',
      specs: {
        cpu: selectedProcessor,
        ram: selectedRam,
        storage: selectedStorage,
        display: '15.6" FHD',
      },
      quantity: quantity,
    })

    setAddedToast(true)
    setTimeout(() => setAddedToast(false), 2400)
  }

  const handleBuyNow = () => {
    handleAddToCart()
    router.push('/cart')
  }

  return (
    <div className="flex flex-col gap-3.5">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-[24px] sm:text-[27px] font-bold text-[#111827] tracking-tight leading-tight">
          {product.name}
        </h1>
        <p className="mt-1 text-[13px] sm:text-[13.5px] text-[#6b7280] leading-snug">
          {product.subtitle}
        </p>
      </div>

      {/* Rating & Sold Row */}
      <div className="flex items-center flex-wrap gap-2 text-[12.5px] text-[#4b5563]">
        <div className="flex items-center gap-0.5 text-[#f59e0b]">
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
            </svg>
          ))}
        </div>
        <span className="font-bold text-[#111827]">{product.rating}</span>
        <span className="text-[#6b7280]">({product.reviewCount} Reviews)</span>
        <span className="text-[#d1d5db]">|</span>
        <span className="font-semibold text-[#374151]">{product.soldCount}</span>
      </div>

      {/* Price Row */}
      <div className="flex items-baseline flex-wrap gap-2.5 pt-0.5">
        <span className="text-[28px] sm:text-[32px] font-extrabold text-[#dc1414] tracking-tight">
          {formatINR(currentPrice)}
        </span>
        <span className="text-[14.5px] text-[#9ca3af] line-through font-normal">
          {formatINR(currentOriginalPrice)}
        </span>
        <span className="text-[11.5px] font-bold text-[#dc1414] bg-[#fee2e2]/70 border border-[#fecaca] px-2 py-0.5 rounded-md">
          {product.discount}
        </span>
      </div>

      {/* EMI Notice */}
      <div className="flex items-center gap-1.5 text-[12px] text-[#4b5563]">
        <span>EMI starts at</span>
        <strong className="text-[#111827] font-semibold">{product.emi}</strong>
        <span className="text-[#d1d5db]">|</span>
        <span>No Cost EMI available</span>
        <button
          type="button"
          title="EMI Details"
          className="w-3.5 h-3.5 rounded-full border border-[#9ca3af] text-[#6b7280] flex items-center justify-center text-[9px] hover:border-[#111827] cursor-pointer"
        >
          i
        </button>
      </div>

      <div className="h-[1px] bg-[#f3f4f6] my-0.5" />

      {/* Selectors Group */}
      <div className="flex flex-col gap-3">
        {/* Processor Selector */}
        <div className="flex items-center gap-3">
          <span className="w-18 shrink-0 text-[13px] font-medium text-[#4b5563]">
            Processor
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {['Core i5', 'Core i7', 'Core i9'].map((proc) => {
              const active = selectedProcessor === proc
              return (
                <button
                  key={proc}
                  type="button"
                  onClick={() => setSelectedProcessor(proc)}
                  className={`px-3.5 py-1.5 text-[12.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                    active
                      ? 'border-2 border-[#dc1414] text-[#dc1414] bg-white shadow-2xs'
                      : 'border border-[#d1d5db] text-[#374151] hover:border-[#9ca3af] bg-white'
                  }`}
                >
                  {proc}
                </button>
              )
            })}
          </div>
        </div>

        {/* RAM Selector */}
        <div className="flex items-center gap-3">
          <span className="w-18 shrink-0 text-[13px] font-medium text-[#4b5563]">
            RAM
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {['8GB', '16GB', '32GB'].map((ram) => {
              const active = selectedRam === ram
              return (
                <button
                  key={ram}
                  type="button"
                  onClick={() => setSelectedRam(ram)}
                  className={`px-3.5 py-1.5 text-[12.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                    active
                      ? 'border-2 border-[#dc1414] text-[#dc1414] bg-white shadow-2xs'
                      : 'border border-[#d1d5db] text-[#374151] hover:border-[#9ca3af] bg-white'
                  }`}
                >
                  {ram}
                </button>
              )
            })}
          </div>
        </div>

        {/* Storage Selector */}
        <div className="flex items-center gap-3">
          <span className="w-18 shrink-0 text-[13px] font-medium text-[#4b5563]">
            Storage
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {['256GB SSD', '512GB SSD', '1TB SSD'].map((st) => {
              const active = selectedStorage === st
              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedStorage(st)}
                  className={`px-3.5 py-1.5 text-[12.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                    active
                      ? 'border-2 border-[#dc1414] text-[#dc1414] bg-white shadow-2xs'
                      : 'border border-[#d1d5db] text-[#374151] hover:border-[#9ca3af] bg-white'
                  }`}
                >
                  {st}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Quantity & Stock Status Row */}
      <div className="flex items-center justify-between gap-4 pt-1">
        {/* Quantity Stepper */}
        <div className="flex items-center gap-3">
          <span className="w-18 shrink-0 text-[13px] font-medium text-[#4b5563]">
            Quantity
          </span>
          <div className="inline-flex items-center border border-[#d1d5db] rounded-lg bg-white overflow-hidden shadow-2xs">
            <button
              type="button"
              disabled={quantity <= 1}
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 flex items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] active:bg-[#e5e7eb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Decrease quantity"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="w-8 text-center text-[13px] font-bold text-[#111827]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 flex items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] active:bg-[#e5e7eb] cursor-pointer transition-colors"
              aria-label="Increase quantity"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stock Status Indicator */}
        <div className="flex items-center gap-1.5 text-right">
          <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse" />
          <div className="flex flex-col text-left">
            <span className="text-[12.5px] font-bold text-[#16a34a]">In Stock</span>
            <span className="text-[11px] text-[#6b7280]">Ships in 1-2 days</span>
          </div>
        </div>
      </div>

      {/* Action Buttons Row 1: Add to Cart & Add to Wishlist */}
      <div className="flex items-center gap-3 pt-2">
        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-[13.5px] font-bold py-3 px-5 rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
            <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
            <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <span>Add to Cart</span>
        </button>

        {/* Add to Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className={`px-4 py-3 border rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isWishlisted
              ? 'border-[#dc1414] text-[#dc1414] bg-[#fef2f2]'
              : 'border-[#d1d5db] text-[#374151] hover:border-[#dc1414] hover:text-[#dc1414] bg-white'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isWishlisted ? '#dc1414' : 'none'}
            stroke={isWishlisted ? '#dc1414' : 'currentColor'}
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
        </button>
      </div>

      {/* Action Buttons Row 2: Buy Now Full-Width Outline Red Button */}
      <button
        type="button"
        onClick={handleBuyNow}
        className="w-full bg-white hover:bg-[#fef2f2] text-[#dc1414] border-2 border-[#dc1414] active:scale-[0.99] text-[14px] font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M13 2 3 14h7v8l10-12h-7l0-8z" />
        </svg>
        <span>⚡ Buy Now</span>
      </button>

      {/* Feedback Toast */}
      {addedToast && (
        <div className="bg-[#16a34a] text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg text-center shadow-md animate-fade-in">
          ✓ Added to cart successfully!
        </div>
      )}
    </div>
  )
}
