'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { getRentalPlans, submitRentalRequest } from '../../services/rentalApi'
import { getProductImageUrl } from '../../services/productApi'
import { getUserAddresses } from '../../services/authApi'
import { useStore } from '../../context/StoreContext'

const DEFAULT_TENURE_OPTIONS = [
  { months: 1, label: '1 Month', discount: 0, tag: 'Short Term' },
  { months: 3, label: '3 Months', discount: 5, tag: '5% OFF' },
  { months: 6, label: '6 Months', discount: 10, tag: '10% OFF - Popular' },
  { months: 12, label: '12 Months', discount: 15, tag: '15% OFF - Best Value' },
]

const DOC_TYPES = [
  { value: 'Aadhaar Card', placeholder: 'Enter 12-digit Aadhaar Number (e.g. 5421 8901 2345)' },
  { value: 'PAN Card', placeholder: 'Enter 10-digit PAN (e.g. ABCDE1234F)' },
  { value: 'Voter ID', placeholder: 'Enter Voter ID Number (e.g. WBD1234567)' },
  { value: 'Driving License', placeholder: 'Enter Driving License No (e.g. UP-7820200012345)' },
  { value: 'Company GSTIN', placeholder: 'Enter 15-digit Company GSTIN (e.g. 09AAAAA0000A1Z5)' },
]

const LEASE_PURPOSES = [
  'Personal Work & Study',
  'Software Development & IT Coding',
  'Office / Corporate Operations',
  'High-End Video Editing & 3D Animation',
  'Competitive Gaming & Esports Streaming',
  'Short-term Event / Conference Demo',
]

const PAYMENT_METHODS = [
  {
    id: 'Cash on Delivery',
    title: 'Pay on Doorstep Delivery',
    subtitle: 'Inspect device first, then pay via Cash or UPI QR to delivery agent.',
    badge: 'Zero Risk',
  },
  {
    id: 'Instant Online Payment',
    title: 'Instant Online Payment (UPI / Cards)',
    subtitle: 'Fast-track priority warehouse dispatch via UPI, Debit/Credit Card or NetBanking.',
    badge: 'Priority Dispatch',
  },
  {
    id: 'Corporate Net-30 Lease',
    title: 'Corporate Net-30 Invoice',
    subtitle: 'For registered companies with GST invoice & monthly bank transfer billing.',
    badge: 'B2B Invoicing',
  },
]

export default function RentalBookingModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}) {
  const { currentUser, openLoginModal } = useStore()
  const fileInputRef = useRef(null)

  // Lease parameters
  const [tenureOptions, setTenureOptions] = useState(DEFAULT_TENURE_OPTIONS)
  const [durationMonths, setDurationMonths] = useState(1)
  const [startOption, setStartOption] = useState('today') // 'today' | 'tomorrow' | 'custom'
  const [customStartDate, setCustomStartDate] = useState(() => new Date().toISOString().slice(0, 10))

  // Delivery & Customer state
  const [savedAddresses, setSavedAddresses] = useState([])
  const [selectedAddressId, setSelectedAddressId] = useState('custom')
  const [recipientName, setRecipientName] = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('Kanpur')
  const [state, setState] = useState('Uttar Pradesh')
  const [pincode, setPincode] = useState('')

  // KYC state
  const [docType, setDocType] = useState('Aadhaar Card')
  const [docNumber, setDocNumber] = useState('')
  const [purpose, setPurpose] = useState('Personal Work & Study')
  const [attachedFile, setAttachedFile] = useState(null)

  // Payment & Terms
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery')
  const [agreeTerms, setAgreeTerms] = useState(true)

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [submittedRental, setSubmittedRental] = useState(null)

  // Initialize and load dynamic rental plans & saved addresses on mount / when currentUser changes
  useEffect(() => {
    if (!isOpen) return

    let isMounted = true

    // Fetch live Admin-configured rental duration plans from database
    getRentalPlans()
      .then((plans) => {
        if (isMounted && Array.isArray(plans) && plans.length > 0) {
          const activePlans = plans
            .filter((p) => p.isActive !== false)
            .map((p) => ({
              months: Number(p.months),
              label: p.label || `${p.months} Month${p.months > 1 ? 's' : ''}`,
              discount: Number(p.discount) || 0,
              tag: p.tag || (Number(p.discount) > 0 ? `${p.discount}% OFF` : 'Standard Term'),
              isPopular: Boolean(p.isPopular),
            }))
          if (activePlans.length > 0) {
            setTenureOptions(activePlans)
            setDurationMonths((prev) => {
              const match = activePlans.some((ap) => ap.months === prev)
              return match ? prev : activePlans[0].months
            })
          }
        }
      })
      .catch((err) => {
        console.warn('Could not load dynamic rental plans:', err.message)
      })

    const initUserData = async () => {
      if (currentUser) {
        setRecipientName(currentUser.name || '')
        setRecipientPhone(currentUser.phone || currentUser.mobile || '')
        setAddress(currentUser.address || '')
        if (currentUser.city) setCity(currentUser.city)
        if (currentUser.postalCode) setPincode(currentUser.postalCode)

        try {
          const addresses = await getUserAddresses()
          if (isMounted && Array.isArray(addresses) && addresses.length > 0) {
            setSavedAddresses(addresses)
            const defaultAddr = addresses.find((a) => a.isDefault) || addresses[0]
            if (defaultAddr) {
              setSelectedAddressId(defaultAddr._id || defaultAddr.id)
              setRecipientName(defaultAddr.name || defaultAddr.recipientName || currentUser.name || '')
              setRecipientPhone(defaultAddr.phone || currentUser.phone || currentUser.mobile || '')
              setAddress(defaultAddr.street || defaultAddr.address || '')
              if (defaultAddr.city) setCity(defaultAddr.city)
              if (defaultAddr.state) setState(defaultAddr.state)
              if (defaultAddr.postalCode || defaultAddr.pincode) {
                setPincode(defaultAddr.postalCode || defaultAddr.pincode)
              }
            }
          }
        } catch {
          // If address fetch fails, keep currentUser defaults
        }
      }
    }

    initUserData()

    return () => {
      isMounted = false
    }
  }, [isOpen, currentUser])

  // Handle address chip selection
  const handleSelectSavedAddress = (addr) => {
    if (!addr) {
      setSelectedAddressId('custom')
      return
    }
    const addrId = addr._id || addr.id
    setSelectedAddressId(addrId)
    setRecipientName(addr.name || addr.recipientName || currentUser?.name || '')
    setRecipientPhone(addr.phone || currentUser?.phone || currentUser?.mobile || '')
    setAddress(addr.street || addr.address || '')
    if (addr.city) setCity(addr.city)
    if (addr.state) setState(addr.state)
    if (addr.postalCode || addr.pincode) setPincode(addr.postalCode || addr.pincode)
  }

  // Handle document file attachment
  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('Attached file exceeds 10MB limit. Please upload a smaller file.')
        return
      }
      setAttachedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
      })
      setErrorMsg('')
    }
  }

  const handleRemoveFile = () => {
    setAttachedFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // Calculate dynamic start date
  const effectiveStartDate = useMemo(() => {
    const now = new Date()
    if (startOption === 'today') {
      return now.toISOString().slice(0, 10)
    }
    if (startOption === 'tomorrow') {
      now.setDate(now.getDate() + 1)
      return now.toISOString().slice(0, 10)
    }
    return customStartDate || now.toISOString().slice(0, 10)
  }, [startOption, customStartDate])

  // Calculate dynamic return date
  const { calcEndDate, formattedStartDate, formattedEndDate } = useMemo(() => {
    const sDate = new Date(effectiveStartDate)
    const eDate = new Date(sDate)
    eDate.setMonth(eDate.getMonth() + durationMonths)

    return {
      calcEndDate: eDate,
      formattedStartDate: sDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      formattedEndDate: eDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    }
  }, [effectiveStartDate, durationMonths])

  // Pricing calculations
  const rawRent =
    product?.rentPerMonth ||
    (product?.rentPrice ? String(product.rentPrice).replace(/[^\d.]/g, '') : null) ||
    (product?.price ? Math.round(Number(product.price) * 0.05) : 1999)
  const baseMonthlyRent = Math.max(100, Number(rawRent) || 1999)

  const selectedOption = tenureOptions.find((t) => t.months === durationMonths) || tenureOptions[0] || { months: 1, discount: 0, tag: 'Short Term' }
  const discountMultiplier = 1 - selectedOption.discount / 100
  const effectiveMonthlyRent = Math.round(baseMonthlyRent * discountMultiplier)
  const monthlySavings = baseMonthlyRent - effectiveMonthlyRent
  const totalRentAmount = effectiveMonthlyRent * durationMonths
  const totalTenureSavings = monthlySavings * durationMonths

  const securityDeposit =
    Number(product?.deposit) > 0 ? Number(product.deposit) : Math.round(effectiveMonthlyRent * 1.5)
  const totalInitialPay = effectiveMonthlyRent + securityDeposit

  // Safe specs formatting
  const formattedSpecs = useMemo(() => {
    if (!product?.specs) return product?.subtitle || 'High Performance Certified Hardware'
    if (typeof product.specs === 'string') return product.specs
    if (Array.isArray(product.specs)) return product.specs.map((s) => s.label || s).join(' • ')
    if (typeof product.specs === 'object') {
      const parts = [
        product.specs.cpu || product.specs.processor,
        product.specs.ram,
        product.specs.storage,
        product.specs.display,
        product.specs.graphics,
      ].filter(Boolean)
      if (parts.length > 0) return parts.join(' • ')
    }
    return product?.subtitle || 'High Performance Certified Hardware'
  }, [product])

  const rawImage =
    product?.image ||
    (typeof product?.images?.[0] === 'string'
      ? product.images[0]
      : product?.images?.[0]?.url) ||
    product?.imageUrl ||
    ''
  const productImageUrl = rawImage ? getProductImageUrl(rawImage) : '/placeholder-product.png'

  const currentDocTypeConfig = DOC_TYPES.find((d) => d.value === docType) || DOC_TYPES[0]

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!currentUser) {
      setErrorMsg('Please log in to submit a rental hardware application.')
      openLoginModal?.()
      return
    }

    if (!recipientName.trim()) {
      setErrorMsg('Please enter customer full name.')
      return
    }
    if (!recipientPhone.trim() || recipientPhone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile contact number.')
      return
    }
    if (!address.trim()) {
      setErrorMsg('Please provide your complete delivery street address.')
      return
    }
    if (!pincode.trim() || pincode.trim().length < 6) {
      setErrorMsg('Please enter a valid 6-digit postal PIN code.')
      return
    }
    if (!docNumber.trim()) {
      setErrorMsg(`Please enter your valid ${docType} ID number for KYC verification.`)
      return
    }
    if (!agreeTerms) {
      setErrorMsg('Please check and accept the hardware lease agreement terms to proceed.')
      return
    }

    setIsSubmitting(true)
    setErrorMsg('')

    try {
      const payload = {
        productId: product?.id || product?._id,
        productTitle: product?.title || product?.name || 'Prestige Rental Hardware',
        productImage: rawImage || '',
        productSpecs: formattedSpecs,
        tenureType: 'monthly',
        duration: durationMonths,
        startDate: effectiveStartDate,
        rentAmountPerUnit: effectiveMonthlyRent,
        totalRentAmount,
        securityDeposit,
        paymentMethod,
        customer: {
          name: recipientName.trim(),
          email: currentUser.email || '',
          phone: recipientPhone.trim(),
          address: address.trim(),
          city: city.trim() || 'Kanpur',
          state: state.trim() || 'Uttar Pradesh',
          postalCode: pincode.trim(),
        },
        kycDetails: {
          documentType: docType,
          documentNumber: docNumber.trim(),
          purpose,
          documentFile: attachedFile ? attachedFile.name : '',
        },
      }

      const res = await submitRentalRequest(payload)
      setSubmittedRental(res)
      onSuccess?.(res)
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit rental request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#e5e7eb] overflow-hidden my-auto max-h-[95vh] flex flex-col animate-fade-in">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#f1f5f9] bg-[#fafbfc] shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dc1414] animate-pulse" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#111827]">
                Rent Hardware Lease Agreement
              </h3>
            </div>
            <p className="text-xs text-[#6b7280] mt-0.5">
              Doorstep delivery &bull; Zero maintenance &bull; 100% refundable deposit
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#9ca3af] hover:text-[#111827] hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {submittedRental ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-[#111827]">
                  Rental Lease Registered Successfully!
                </h4>
                <p className="text-sm font-semibold text-[#dc1414] mt-1 font-mono">
                  Agreement #{submittedRental.rentalId}
                </p>
                <p className="text-xs text-[#6b7280] max-w-md mx-auto mt-2 leading-relaxed">
                  Our Kanpur logistics hub has received your hardware lease request. Your KYC verification will be processed within 2-4 hours, followed by express doorstep delivery and diagnostics setup.
                </p>
              </div>

              {/* Submitted Lease Summary */}
              <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#f1f5f9] text-xs space-y-2 text-left max-w-lg mx-auto">
                <div className="flex justify-between items-center py-1 border-b border-[#f1f5f9]">
                  <span className="text-[#6b7280]">Hardware Device:</span>
                  <strong className="text-[#111827] text-right font-semibold">
                    {submittedRental.productSnapshot?.title || product?.title || product?.name}
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#f1f5f9]">
                  <span className="text-[#6b7280]">Lease Tenure:</span>
                  <strong className="text-[#111827]">
                    {submittedRental.duration} Months ({formattedStartDate} &rarr; {formattedEndDate})
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#f1f5f9]">
                  <span className="text-[#6b7280]">Monthly Rent:</span>
                  <strong className="text-[#dc1414] font-bold">
                    ₹{Number(submittedRental.rentAmountPerUnit).toLocaleString('en-IN')}/mo
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#f1f5f9]">
                  <span className="text-[#6b7280]">Refundable Deposit:</span>
                  <strong className="text-emerald-700 font-bold">
                    ₹{Number(submittedRental.securityDeposit).toLocaleString('en-IN')} (100% Refundable)
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#f1f5f9]">
                  <span className="text-[#6b7280]">Payment Method:</span>
                  <span className="font-semibold text-[#111827] bg-white px-2 py-0.5 rounded border border-[#e5e7eb]">
                    {paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[#6b7280]">Delivery Address:</span>
                  <strong className="text-[#111827] text-right truncate max-w-[260px]">
                    {address}, {city} - {pincode}
                  </strong>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/profile?tab=rentals"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-sm"
                >
                  View My Rental Dashboard &rarr;
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-[#d1d5db] text-xs font-bold text-[#374151] hover:bg-gray-50 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#dc1414] font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Hardware Summary Card */}
              <div className="flex items-center gap-3.5 bg-[#f8fafc] p-3.5 rounded-xl border border-[#f1f5f9]">
                <img
                  src={productImageUrl}
                  alt={product?.title || product?.name || 'Prestige Rental Hardware'}
                  className="w-16 h-16 rounded-xl object-contain bg-white border border-[#e5e7eb] shrink-0 p-1.5"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {product?.brand && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-gray-200 text-gray-700">
                        {product.brand}
                      </span>
                    )}
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      In Stock Kanpur
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827] truncate mt-0.5">
                    {product?.title || product?.name || 'Prestige Certified System'}
                  </h4>
                  <p className="text-[11px] text-[#6b7280] truncate mt-0.5">
                    {formattedSpecs}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-extrabold text-[#dc1414]">
                      ₹{effectiveMonthlyRent.toLocaleString('en-IN')}/mo
                    </span>
                    {selectedOption.discount > 0 && (
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {selectedOption.tag}
                      </span>
                    )}
                    <span className="text-[10px] text-[#6b7280]">
                      Deposit: ₹{securityDeposit.toLocaleString('en-IN')} (Refundable)
                    </span>
                  </div>
                </div>
              </div>

              {/* Lease Tenure Selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                    Select Rental Duration
                  </label>
                  {totalTenureSavings > 0 && (
                    <span className="text-[11px] font-bold text-emerald-600">
                      Save ₹{totalTenureSavings.toLocaleString('en-IN')} across {durationMonths} Mo
                    </span>
                  )}
                </div>
                <div className={`grid gap-2 ${tenureOptions.length <= 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'}`}>
                  {tenureOptions.map((opt) => (
                    <button
                      key={opt.months}
                      type="button"
                      onClick={() => setDurationMonths(opt.months)}
                      className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        durationMonths === opt.months
                          ? 'border-[#dc1414] bg-[#fee2e2]/30 ring-2 ring-[#dc1414]/20 shadow-xs'
                          : 'border-[#e5e7eb] bg-white hover:border-[#dc1414]/40'
                      }`}
                    >
                      <span className="block text-xs font-bold text-[#111827]">{opt.label}</span>
                      <span className={`block text-[10px] font-semibold mt-0.5 ${opt.discount > 0 ? 'text-[#dc1414]' : 'text-[#6b7280]'}`}>
                        {opt.tag}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between text-[11px] text-[#6b7280] mt-1.5 px-0.5">
                  <span>
                    Lease Return Date: <strong className="text-[#111827]">{formattedEndDate}</strong>
                  </span>
                  <span className="text-gray-400">Extendable or convertible to purchase anytime</span>
                </div>
              </div>

              {/* Delivery Start Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151]">
                  Hardware Delivery &amp; Lease Start Date
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setStartOption('today')}
                    className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      startOption === 'today'
                        ? 'border-[#dc1414] bg-[#fee2e2]/20 font-bold text-[#dc1414]'
                        : 'border-[#e5e7eb] text-[#4b5563] hover:border-gray-300'
                    }`}
                  >
                    <span className="block text-xs">Today (Express)</span>
                    <span className="block text-[10px] opacity-75">Within 4 Hours</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStartOption('tomorrow')}
                    className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      startOption === 'tomorrow'
                        ? 'border-[#dc1414] bg-[#fee2e2]/20 font-bold text-[#dc1414]'
                        : 'border-[#e5e7eb] text-[#4b5563] hover:border-gray-300'
                    }`}
                  >
                    <span className="block text-xs">Tomorrow</span>
                    <span className="block text-[10px] opacity-75">Morning Slot</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStartOption('custom')}
                    className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      startOption === 'custom'
                        ? 'border-[#dc1414] bg-[#fee2e2]/20 font-bold text-[#dc1414]'
                        : 'border-[#e5e7eb] text-[#4b5563] hover:border-gray-300'
                    }`}
                  >
                    <span className="block text-xs">Pick Specific Date</span>
                    <span className="block text-[10px] opacity-75">Custom Schedule</span>
                  </button>
                </div>
                {startOption === 'custom' && (
                  <div className="mt-2">
                    <input
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      value={customStartDate}
                      onChange={(e) => setCustomStartDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Delivery Recipient & Saved Addresses */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                    Delivery Recipient &amp; Address
                  </label>
                  {savedAddresses.length > 0 && (
                    <span className="text-[11px] text-[#6b7280]">
                      {savedAddresses.length} Saved Address{savedAddresses.length > 1 ? 'es' : ''} Found
                    </span>
                  )}
                </div>

                {/* Saved Address Chips */}
                {savedAddresses.length > 0 && (
                  <div className="flex flex-wrap gap-2 pb-1">
                    {savedAddresses.map((addr) => {
                      const addrId = addr._id || addr.id
                      const isSelected = selectedAddressId === addrId
                      return (
                        <button
                          key={addrId}
                          type="button"
                          onClick={() => handleSelectSavedAddress(addr)}
                          className={`text-left px-3 py-1.5 rounded-xl border text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#dc1414] bg-[#fee2e2]/20 text-[#dc1414] font-bold ring-1 ring-[#dc1414]/30'
                              : 'border-[#e5e7eb] text-[#374151] hover:border-gray-300'
                          }`}
                        >
                          <span className="capitalize">{addr.type || 'Address'}</span>
                          <span className="text-[10px] ml-1 opacity-70">
                            ({addr.street ? `${addr.street.slice(0, 18)}...` : addr.city})
                          </span>
                        </button>
                      )
                    })}
                    <button
                      type="button"
                      onClick={() => handleSelectSavedAddress(null)}
                      className={`px-3 py-1.5 rounded-xl border text-xs transition-all cursor-pointer ${
                        selectedAddressId === 'custom'
                          ? 'border-[#dc1414] bg-[#fee2e2]/20 text-[#dc1414] font-bold ring-1 ring-[#dc1414]/30'
                          : 'border-[#e5e7eb] text-[#6b7280] hover:border-gray-300'
                      }`}
                    >
                      + Custom Address
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="Full Customer Name *"
                    className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                  <input
                    type="tel"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    placeholder="10-digit Mobile Phone Number *"
                    className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Complete Street Address, House/Office No. *"
                    className="sm:col-span-2 px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City (e.g. Kanpur)"
                    className="px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="PIN Code *"
                    className="px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                </div>
              </div>

              {/* KYC Verification & Document Upload */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                    KYC Verification &amp; Identity Details
                  </label>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Bank-Grade 256-bit Encrypted
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <select
                    value={docType}
                    onChange={(e) => setDocType(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none bg-white font-medium"
                  >
                    {DOC_TYPES.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.value}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value)}
                    placeholder={currentDocTypeConfig.placeholder}
                    className="sm:col-span-2 px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] text-[#6b7280] font-medium mb-1">
                      Primary Purpose of Lease
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none bg-white font-medium"
                    >
                      {LEASE_PURPOSES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Document Attachment / Upload */}
                  <div>
                    <label className="block text-[11px] text-[#6b7280] font-medium mb-1">
                      Upload Document Copy (Front / Back / PDF)
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                    {attachedFile ? (
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                        <div className="flex items-center gap-1.5 truncate">
                          <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-semibold text-emerald-800 truncate">{attachedFile.name}</span>
                          <span className="text-[10px] text-emerald-600 shrink-0">({attachedFile.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-red-500 hover:text-red-700 ml-2 font-bold cursor-pointer"
                        >
                          &times;
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-dashed border-[#d1d5db] hover:border-[#dc1414] text-xs text-[#4b5563] hover:text-[#dc1414] bg-[#f9fafb] transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <span>Attach {docType} Copy (Optional)</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151]">
                  Select Payment Preference
                </label>
                <div className="space-y-2">
                  {PAYMENT_METHODS.map((pm) => {
                    const isSelected = paymentMethod === pm.id
                    return (
                      <div
                        key={pm.id}
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'border-[#dc1414] bg-[#fee2e2]/15 ring-2 ring-[#dc1414]/20'
                            : 'border-[#e5e7eb] bg-white hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={isSelected}
                          onChange={() => setPaymentMethod(pm.id)}
                          className="mt-0.5 accent-[#dc1414]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#111827]">{pm.title}</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                              {pm.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6b7280] mt-0.5">{pm.subtitle}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Transparent Pricing Breakdown */}
              <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-[#f1f5f9] text-xs space-y-2">
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>Base Monthly Rent</span>
                  <span className="text-[#111827] font-semibold">₹{baseMonthlyRent.toLocaleString('en-IN')}/mo</span>
                </div>
                {selectedOption.discount > 0 && (
                  <div className="flex justify-between items-center text-emerald-600 font-semibold">
                    <span>Tenure Discount ({selectedOption.tag})</span>
                    <span>-₹{monthlySavings.toLocaleString('en-IN')}/mo</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-[#111827] font-bold">
                  <span>Net Monthly Rent ({durationMonths} Month Lease)</span>
                  <span>₹{effectiveMonthlyRent.toLocaleString('en-IN')}/mo</span>
                </div>
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>100% Refundable Security Deposit</span>
                  <span className="font-bold text-emerald-700">
                    ₹{securityDeposit.toLocaleString('en-IN')} (Refundable)
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>Express Doorstep Delivery &amp; Setup</span>
                  <span className="font-bold text-emerald-700">
                    <span className="line-through text-gray-400 font-normal mr-1">₹499</span>
                    FREE
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>Hardware Replacement Warranty &amp; QC</span>
                  <span className="font-bold text-emerald-700">INCLUDED</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-[#e2e8f0] font-bold text-sm">
                  <div>
                    <span className="text-[#111827] block">Initial Payable at Delivery</span>
                    <span className="text-[10px] text-[#6b7280] font-normal">
                      1st Month Rent + 100% Refundable Deposit
                    </span>
                  </div>
                  <span className="text-[#dc1414] text-base font-extrabold">
                    ₹{totalInitialPay.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <label className="flex items-start gap-2.5 text-xs text-[#4b5563] cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 rounded border-[#d1d5db] text-[#dc1414] focus:ring-[#dc1414] accent-[#dc1414]"
                />
                <span className="leading-relaxed">
                  I agree to Prestige Computer Hardware Lease Agreement terms, zero-maintenance replacement guarantee, and 100% deposit refund policy upon device return.
                </span>
              </label>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_rgba(220,20,20,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" className="opacity-75" />
                      </svg>
                      <span>Submitting Rental Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Rental Request &bull; Pay ₹{totalInitialPay.toLocaleString('en-IN')}</span>
                      <span>&rarr;</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
