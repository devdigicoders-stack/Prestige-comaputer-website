'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { getRentalPlans, submitRentalRequest } from '../../services/rentalApi'
import { getProductImageUrl } from '../../services/productApi'
import { getUserAddresses } from '../../services/authApi'
import { useStore } from '../../context/StoreContext'
import { useLanguage } from '../../context/LanguageContext'
import { formatCurrency } from '../../utils/formatCurrency'

const DEFAULT_TENURE_OPTIONS = [
  { months: 1, label: '1 Month', discount: 0, tag: 'Short Term' },
  { months: 3, label: '3 Months', discount: 5, tag: '5% OFF' },
  { months: 6, label: '6 Months', discount: 10, tag: '10% OFF - Popular' },
  { months: 12, label: '12 Months', discount: 15, tag: '15% OFF - Best Value' },
]

const QATAR_MUNICIPALITIES = [
  'Doha',
  'Al Rayyan',
  'Al Wakrah',
  'Lusail',
  'Al Khor',
  'Al Daayen',
  'Umm Salal',
  'Al Shamal',
  'Al Shahaniya',
]

const DOC_TYPES = [
  {
    value: 'Qatar ID (QID)',
    labelEn: 'Qatar ID (QID)',
    labelAr: 'البطاقة الشخصية القطرية (QID)',
    placeholder: 'Enter 11-digit QID (e.g. 29063401234)',
  },
  {
    value: 'Passport',
    labelEn: 'Passport',
    labelAr: 'جواز السفر',
    placeholder: 'Enter Passport Number (e.g. N1234567)',
  },
  {
    value: 'Commercial Registration (CR)',
    labelEn: 'Company CR (Corporate)',
    labelAr: 'السجل التجاري للشركات (CR)',
    placeholder: 'Enter Qatar CR Number (e.g. 123456)',
  },
  {
    value: 'Qatar Driving License',
    labelEn: 'Qatar Driving License',
    labelAr: 'رخصة القيادة القطرية',
    placeholder: 'Enter Qatari Driving License Number',
  },
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
    id: 'Cash / Card on Delivery (POS)',
    titleEn: 'Pay on Doorstep Delivery (Cash / POS Terminal)',
    titleAr: 'الدفع عند الاستلام (نقداً أو بالبطاقة عبر جهاز POS)',
    subtitleEn: 'Inspect device first, then pay via Cash or POS Terminal to delivery courier.',
    subtitleAr: 'افحص الجهاز وتأكد من الضمان أولاً، ثم ادفع نقداً أو بالبطاقة للمندوب.',
    badgeEn: 'Zero Advance',
    badgeAr: 'بدون دفع مسبق',
  },
  {
    id: 'Instant Online Payment',
    titleEn: 'Instant Online Card Payment (Visa / Mastercard)',
    titleAr: 'دفع فوري إلكتروني (فيزا / ماستركارد)',
    subtitleEn: 'Fast-track priority warehouse dispatch via encrypted credit or debit card.',
    subtitleAr: 'تجهيز فوري سريع بأولوية الإرسال عبر بطاقة الائتمان أو الخصم.',
    badgeEn: 'Priority Dispatch',
    badgeAr: 'أولوية التجهيز',
  },
  {
    id: 'Corporate Net-30 Lease',
    titleEn: 'Corporate Net-30 Lease Invoice',
    titleAr: 'فاتورة تأجير الشركات (آجل 30 يوم)',
    subtitleEn: 'For registered companies in Qatar with CR and monthly bank transfer billing.',
    subtitleAr: 'للشركات والمؤسسات المعتمدة في قطر مع فوترة بنكية شهرية.',
    badgeEn: 'B2B Billing',
    badgeAr: 'فوترة تجارية',
  },
  {
    id: 'Showroom Pickup & Pay',
    titleEn: 'Pay & Collect at Showroom (Al-Mirqab Mall)',
    titleAr: 'الاستلام والدفع في المعرض (المرقاب مول)',
    subtitleEn: 'Collect in person from our Al-Mirqab Mall showroom in Doha (Ready in 2 Hours).',
    subtitleAr: 'استلم بنفسك من معرضنا في المرقاب مول، الدوحة (جاهز خلال ساعتين).',
    badgeEn: 'Inspect First',
    badgeAr: 'فحص فوري',
  },
]

export default function RentalBookingModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}) {
  const { currentUser, openLoginModal } = useStore()
  const { isArabic } = useLanguage()
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
  const [city, setCity] = useState('Doha')
  const [state, setState] = useState('Al Mirqab')
  const [zone, setZone] = useState('')

  // KYC state
  const [docType, setDocType] = useState('Qatar ID (QID)')
  const [docNumber, setDocNumber] = useState('')
  const [purpose, setPurpose] = useState('Personal Work & Study')
  const [attachedFile, setAttachedFile] = useState(null)
  const [fileBase64, setFileBase64] = useState('')

  // Payment & Terms
  const [paymentMethod, setPaymentMethod] = useState('Cash / Card on Delivery (POS)')
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
        setRecipientPhone(currentUser.phone || currentUser.mobile || '+974 ')
        if (currentUser.address) setAddress(currentUser.address)
        if (currentUser.city) setCity(currentUser.city)

        try {
          const addresses = await getUserAddresses()
          if (isMounted && Array.isArray(addresses) && addresses.length > 0) {
            setSavedAddresses(addresses)
            const defaultAddr = addresses.find((a) => a.isDefault) || addresses[0]
            if (defaultAddr) {
              setSelectedAddressId(defaultAddr._id || defaultAddr.id)
              setRecipientName(defaultAddr.name || currentUser.name || '')
              setRecipientPhone(defaultAddr.phone || currentUser.phone || currentUser.mobile || '+974 ')
              setAddress(defaultAddr.street || defaultAddr.address || '')
              if (defaultAddr.city) setCity(defaultAddr.city)
              if (defaultAddr.state) setState(defaultAddr.state)
              if (defaultAddr.postalCode && defaultAddr.postalCode !== 'Doha') {
                setZone(defaultAddr.postalCode)
              }
            }
          }
        } catch {
          // Keep current user defaults
        }
      } else {
        setRecipientPhone('+974 ')
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
    setRecipientName(addr.name || currentUser?.name || '')
    setRecipientPhone(addr.phone || currentUser?.phone || currentUser?.mobile || '+974 ')
    setAddress(addr.street || addr.address || '')
    if (addr.city) setCity(addr.city)
    if (addr.state) setState(addr.state)
    if (addr.postalCode && addr.postalCode !== 'Doha') setZone(addr.postalCode)
  }

  // Handle document file attachment with Base64 encoding for Admin inspection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg(isArabic ? 'حجم الملف يتجاوز 10 ميجابايت. يرجى اختيار ملف أصغر.' : 'Attached file exceeds 10MB limit. Please upload a smaller file.')
        return
      }

      const reader = new FileReader()
      reader.onload = () => {
        setFileBase64(reader.result)
        setAttachedFile({
          name: file.name,
          size: (file.size / 1024).toFixed(1) + ' KB',
          type: file.type,
          dataUrl: reader.result,
        })
        setErrorMsg('')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveFile = () => {
    setAttachedFile(null)
    setFileBase64('')
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
  const { formattedStartDate, formattedEndDate } = useMemo(() => {
    const sDate = new Date(effectiveStartDate)
    const eDate = new Date(sDate)
    eDate.setMonth(eDate.getMonth() + durationMonths)

    return {
      formattedStartDate: sDate.toLocaleDateString(isArabic ? 'ar-QA' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      formattedEndDate: eDate.toLocaleDateString(isArabic ? 'ar-QA' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    }
  }, [effectiveStartDate, durationMonths, isArabic])

  // Pricing calculations
  const rawRent =
    product?.rentPerMonth ||
    (product?.rentPrice ? String(product.rentPrice).replace(/[^\d.]/g, '') : null) ||
    (product?.price ? Math.round(Number(product.price) * 0.05) : 350)
  const baseMonthlyRent = Math.max(50, Number(rawRent) || 350)

  const selectedOption =
    tenureOptions.find((t) => t.months === durationMonths) ||
    tenureOptions[0] || { months: 1, discount: 0, tag: 'Short Term' }
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

    if (!recipientName.trim()) {
      setErrorMsg(isArabic ? 'يرجى إدخال اسم المستلم بالكامل.' : 'Please enter customer full name.')
      return
    }

    const cleanPhone = recipientPhone.replace(/\D/g, '')
    if (!cleanPhone || cleanPhone.length < 7) {
      setErrorMsg(
        isArabic
          ? 'يرجى إدخال رقم هاتف قطري صالح (مثال: +974 6691 9155).'
          : 'Please enter a valid Qatar contact phone number (e.g. +974 6691 9155).'
      )
      return
    }

    if (!address.trim()) {
      setErrorMsg(
        isArabic
          ? 'يرجى إدخال عنوان التوصيل بالتفصيل (رقم المبنى والشارع والمنطقة).'
          : 'Please provide complete delivery street address (Building No, Street No, Zone).'
      )
      return
    }

    if (!docNumber.trim()) {
      setErrorMsg(
        isArabic
          ? `يرجى إدخال رقم ${currentDocTypeConfig.labelAr} للتحقق من الهوية.`
          : `Please enter your valid ${docType} ID number for KYC verification.`
      )
      return
    }

    if (!agreeTerms) {
      setErrorMsg(
        isArabic
          ? 'يرجى الموافقة على شروط عقد تأجير الأجهزة وضمان الاسترجاع للمتابعة.'
          : 'Please check and accept the hardware lease agreement terms to proceed.'
      )
      return
    }

    setIsSubmitting(true)
    setErrorMsg('')

    try {
      const payload = {
        productId: product?.id || product?._id,
        productTitle: product?.title || product?.name || 'Prestige Rental Hardware System',
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
          email: currentUser?.email || 'customer@pcsdoha.net',
          phone: recipientPhone.trim(),
          address: address.trim(),
          city: city.trim() || 'Doha',
          state: state.trim() || city.trim() || 'Doha',
          postalCode: zone.trim() || 'Doha',
        },
        kycDetails: {
          documentType: docType,
          documentNumber: docNumber.trim(),
          purpose,
          documentFile: fileBase64 || (attachedFile ? attachedFile.name : ''),
        },
      }

      const res = await submitRentalRequest(payload)
      setSubmittedRental(res)
      onSuccess?.(res)
    } catch (err) {
      setErrorMsg(
        err.message ||
          (isArabic
            ? 'تعذر إرسال طلب التأجير. يرجى المحاولة مرة أخرى.'
            : 'Failed to submit rental request. Please try again.')
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pre-filled WhatsApp direct confirmation for priority dispatch
  const agreementId = submittedRental?.rentalId || 'RT-PENDING'
  const deviceName = submittedRental?.productSnapshot?.title || product?.title || product?.name || 'Prestige Hardware'
  const waText = encodeURIComponent(
    `Hello Prestige Computers Doha! I have submitted a Rental Lease Application #${agreementId} for ${deviceName} (${durationMonths} Months lease, Total: QAR ${totalInitialPay}). Please confirm KYC approval and delivery slot.`
  )
  const waHref = `https://wa.me/97466919155?text=${waText}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#e5e7eb] overflow-hidden my-auto max-h-[95vh] flex flex-col animate-scale-up">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#f1f5f9] bg-[#fafbfc] shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dc1414] animate-pulse" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#111827]">
                {isArabic ? 'عقد تأجير أجهزة الكمبيوتر والمعدات' : 'Rent Hardware Lease Agreement'}
              </h3>
            </div>
            <p className="text-xs text-[#6b7280] mt-0.5">
              {isArabic
                ? 'توصيل لباب منزلك في قطر • صيانة فورية واستبدال مجاني • تأمين مسترد 100%'
                : 'Doorstep delivery across Qatar • Zero maintenance & instant swap • 100% refundable deposit'}
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
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4.5">
          {submittedRental ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs ring-8 ring-emerald-50/60">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-[#111827]">
                  {isArabic ? 'تم تقديم طلب التأجير بنجاح!' : 'Rental Lease Registered Successfully!'}
                </h4>
                <p className="text-sm font-semibold text-[#dc1414] mt-1 font-mono">
                  {isArabic ? 'رقم العقد:' : 'Agreement'} #{submittedRental.rentalId}
                </p>
                <p className="text-xs text-[#6b7280] max-w-md mx-auto mt-2 leading-relaxed">
                  {isArabic
                    ? 'مركز التوزيع بالدوحة (المرقاب مول) استلم طلبك. سيتم مراجعة بيانات الهوية وتجهيز الجهاز للتوصيل أو الاستلام خلال ساعات.'
                    : 'Our Doha logistics hub (Al Mirqab Mall) has received your lease request. KYC verification will be approved within 2-4 hours, followed by express doorstep delivery and setup.'}
                </p>
              </div>

              {/* Submitted Lease Summary Card */}
              <div className="bg-[#f8fafc] p-4 rounded-2xl border border-[#e2e8f0] text-xs space-y-2.5 text-left max-w-lg mx-auto">
                <div className="flex justify-between items-center py-1 border-b border-gray-150">
                  <span className="text-[#64748b]">{isArabic ? 'الجهاز المستأجر:' : 'Hardware Device:'}</span>
                  <strong className="text-[#111827] text-right font-semibold truncate max-w-[220px]">
                    {submittedRental.productSnapshot?.title || product?.title || product?.name}
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-150">
                  <span className="text-[#64748b]">{isArabic ? 'مدة الإيجار:' : 'Lease Tenure:'}</span>
                  <strong className="text-[#111827]">
                    {submittedRental.duration} {isArabic ? 'أشهر' : 'Months'} ({formattedStartDate} &rarr; {formattedEndDate})
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-150">
                  <span className="text-[#64748b]">{isArabic ? 'الإيجار الشهري الصافي:' : 'Monthly Rent:'}</span>
                  <strong className="text-[#dc1414] font-bold">
                    {formatCurrency(submittedRental.rentAmountPerUnit, isArabic)}/mo
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-150">
                  <span className="text-[#64748b]">{isArabic ? 'مبلغ التأمين المسترد:' : 'Refundable Deposit:'}</span>
                  <strong className="text-emerald-700 font-bold">
                    {formatCurrency(submittedRental.securityDeposit, isArabic)} (100% {isArabic ? 'مسترد' : 'Refundable'})
                  </strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-150">
                  <span className="text-[#64748b]">{isArabic ? 'طريقة الدفع:' : 'Payment Method:'}</span>
                  <span className="font-semibold text-[#111827] bg-white px-2 py-0.5 rounded border border-[#e5e7eb]">
                    {paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[#64748b]">{isArabic ? 'عنوان التوصيل / الاستلام:' : 'Delivery Address:'}</span>
                  <strong className="text-[#111827] text-right truncate max-w-[240px]">
                    {address}, {city}
                  </strong>
                </div>
              </div>

              {/* WhatsApp Expedite Button */}
              <div className="max-w-lg mx-auto">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/20 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32Z" />
                  </svg>
                  <span>{isArabic ? 'تأكيد فوري عبر واتساب للموافقة السريعة' : 'Confirm on WhatsApp for Priority Dispatch (+974)'}</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/profile?tab=rentals"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-sm"
                >
                  {isArabic ? 'عرض لوحة تحكم التأجير' : 'View My Rental Dashboard'} &rarr;
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-[#d1d5db] text-xs font-bold text-[#374151] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {isArabic ? 'تم' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User Authentication Status Banner */}
              {currentUser ? (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>
                      {isArabic ? 'مسجل الدخول باسم:' : 'Signed in as:'}{' '}
                      <strong className="text-emerald-950">{currentUser.name || currentUser.email}</strong>
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    {isArabic ? 'حساب معتمد' : 'Verified Customer'}
                  </span>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between flex-wrap gap-2">
                  <span>
                    {isArabic
                      ? 'غير مسجل الدخول؟ يمكنك تسجيل الدخول لملء العنوان بضغطة زر، أو المتابعة كضيف أدناه.'
                      : 'Not signed in? You can sign in for 1-click address autofill, or continue as guest below.'}
                  </span>
                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="font-bold text-[#dc1414] hover:underline cursor-pointer shrink-0"
                  >
                    {isArabic ? 'تسجيل الدخول' : 'Sign In Now'} &rarr;
                  </button>
                </div>
              )}

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#dc1414] font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Hardware Summary Card */}
              <div className="flex items-center gap-3.5 bg-[#f8fafc] p-3.5 rounded-2xl border border-[#f1f5f9]">
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
                      {isArabic ? 'متوفر في مستودع الدوحة' : 'In Stock Doha'}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827] truncate mt-0.5">
                    {product?.title || product?.name || 'Prestige Certified System'}
                  </h4>
                  <p className="text-[11px] text-[#6b7280] truncate mt-0.5">
                    {formattedSpecs}
                  </p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs font-extrabold text-[#dc1414]">
                      {formatCurrency(effectiveMonthlyRent, isArabic)}/mo
                    </span>
                    {selectedOption.discount > 0 && (
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {selectedOption.tag}
                      </span>
                    )}
                    <span className="text-[10px] text-[#6b7280]">
                      {isArabic ? 'التأمين المسترد:' : 'Deposit:'} {formatCurrency(securityDeposit, isArabic)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lease Tenure Selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                    {isArabic ? 'اختر مدة التأجير' : 'Select Rental Duration'}
                  </label>
                  {totalTenureSavings > 0 && (
                    <span className="text-[11px] font-bold text-emerald-600">
                      {isArabic ? 'توفير' : 'Save'} {formatCurrency(totalTenureSavings, isArabic)} ({durationMonths} {isArabic ? 'شهر' : 'Mo'})
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
                    {isArabic ? 'تاريخ نهاية الإيجار:' : 'Lease Return Date:'}{' '}
                    <strong className="text-[#111827]">{formattedEndDate}</strong>
                  </span>
                  <span className="text-gray-400">
                    {isArabic ? 'قابل للتجديد أو الشراء النهائي في أي وقت' : 'Extendable or convertible to purchase anytime'}
                  </span>
                </div>
              </div>

              {/* Delivery Start Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151]">
                  {isArabic ? 'تاريخ بدء العقد والتوصيل' : 'Delivery & Lease Start Date'}
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
                    <span className="block text-xs">{isArabic ? 'اليوم (سريع)' : 'Today (Express)'}</span>
                    <span className="block text-[10px] opacity-75">{isArabic ? 'خلال 4 ساعات' : 'Within 4 Hours'}</span>
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
                    <span className="block text-xs">{isArabic ? 'غداً' : 'Tomorrow'}</span>
                    <span className="block text-[10px] opacity-75">{isArabic ? 'الفترة الصباحية' : 'Morning Slot'}</span>
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
                    <span className="block text-xs">{isArabic ? 'تحديد موعد' : 'Pick Specific Date'}</span>
                    <span className="block text-[10px] opacity-75">{isArabic ? 'جدول مخصص' : 'Custom Schedule'}</span>
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
                    {isArabic ? 'بيانات المستلم وعنوان التوصيل (قطر)' : 'Recipient & Delivery Address (Qatar)'}
                  </label>
                  {savedAddresses.length > 0 && (
                    <span className="text-[11px] text-[#6b7280]">
                      {savedAddresses.length} {isArabic ? 'عناوين محفوظة' : 'Saved Addresses'}
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
                      + {isArabic ? 'عنوان مخصص' : 'Custom Address'}
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder={isArabic ? 'اسم المستلم بالكامل *' : 'Full Customer Name *'}
                    className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                    required
                  />
                  <input
                    type="tel"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    placeholder={isArabic ? 'رقم الهاتف (+974 6691 9155) *' : 'Contact Phone (+974 6691 9155) *'}
                    className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none dir-ltr"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="sm:col-span-1">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none bg-white font-medium"
                    >
                      {QATAR_MUNICIPALITIES.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={
                        isArabic
                          ? 'رقم المبنى، رقم الشارع، رقم المنطقة (مثال: مبنى 201، شارع 840) *'
                          : 'Building No, Street No, Zone No (e.g. Bldg 201, St 840, Zone 39) *'
                      }
                      className="w-full px-3 py-2 rounded-xl border border-[#d1d5db] text-xs focus:border-[#dc1414] outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* KYC Verification & Document Upload */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                    {isArabic ? 'بيانات التحقق من الهوية (KYC)' : 'KYC Verification & Identity Details'}
                  </label>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {isArabic ? 'تشفير بنكي آمن 256-بت' : 'Bank-Grade 256-bit Encrypted'}
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
                        {isArabic ? d.labelAr : d.labelEn}
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
                      {isArabic ? 'الغرض الأساسي من الاستئجار' : 'Primary Purpose of Lease'}
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
                      {isArabic ? 'إرفاق صورة الهوية / السجل التجاري' : 'Upload Document Copy (Front / Back / PDF)'}
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
                          {attachedFile.dataUrl && attachedFile.type?.startsWith('image/') ? (
                            <img
                              src={attachedFile.dataUrl}
                              alt="KYC Preview"
                              className="w-5 h-5 rounded object-cover border border-emerald-300 shrink-0"
                            />
                          ) : (
                            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
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
                        <span>
                          {isArabic ? `إرفاق صورة ${currentDocTypeConfig.labelAr} (اختياري)` : `Attach ${docType} Copy (Optional)`}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151]">
                  {isArabic ? 'اختر طريقة الدفع المفضلة' : 'Select Payment Preference'}
                </label>
                <div className="space-y-2">
                  {PAYMENT_METHODS.map((pm) => {
                    const isSelected = paymentMethod === pm.id
                    return (
                      <div
                        key={pm.id}
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'border-[#dc1414] bg-[#fee2e2]/15 ring-2 ring-[#dc1414]/20 shadow-xs'
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
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#111827]">
                              {isArabic ? pm.titleAr : pm.titleEn}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 shrink-0">
                              {isArabic ? pm.badgeAr : pm.badgeEn}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6b7280] mt-0.5">
                            {isArabic ? pm.subtitleAr : pm.subtitleEn}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Transparent Pricing Breakdown */}
              <div className="bg-[#f8fafc] p-4 rounded-2xl border border-[#e2e8f0] text-xs space-y-2">
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>{isArabic ? 'الإيجار الشهري الأساسي' : 'Base Monthly Rent'}</span>
                  <span className="text-[#111827] font-semibold">{formatCurrency(baseMonthlyRent, isArabic)}/mo</span>
                </div>
                {selectedOption.discount > 0 && (
                  <div className="flex justify-between items-center text-emerald-600 font-semibold">
                    <span>{isArabic ? 'خصم مدة العقد' : 'Tenure Discount'} ({selectedOption.tag})</span>
                    <span>-{formatCurrency(monthlySavings, isArabic)}/mo</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-[#111827] font-bold">
                  <span>
                    {isArabic ? 'صافي الإيجار الشهري' : 'Net Monthly Rent'} ({durationMonths} {isArabic ? 'أشهر' : 'Month Lease'})
                  </span>
                  <span>{formatCurrency(effectiveMonthlyRent, isArabic)}/mo</span>
                </div>
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>{isArabic ? 'مبلغ التأمين المسترد 100%' : '100% Refundable Security Deposit'}</span>
                  <span className="font-bold text-emerald-700">
                    {formatCurrency(securityDeposit, isArabic)} ({isArabic ? 'مسترد بالكامل' : 'Refundable'})
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>{isArabic ? 'التوصيل والتركيب لباب منزلك' : 'Express Doorstep Delivery & Setup'}</span>
                  <span className="font-bold text-emerald-700">
                    <span className="line-through text-gray-400 font-normal mr-1">{isArabic ? '499 ر.ق' : 'QAR 499'}</span>
                    {isArabic ? 'مجاني' : 'FREE'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#6b7280]">
                  <span>{isArabic ? 'ضمان الصيانة والاستبدال الفوري' : 'Hardware Swap Warranty & QC'}</span>
                  <span className="font-bold text-emerald-700">{isArabic ? 'مشمول' : 'INCLUDED'}</span>
                </div>

                <div className="flex justify-between items-center pt-2.5 border-t border-[#e2e8f0] font-bold text-sm">
                  <div>
                    <span className="text-[#111827] block">
                      {isArabic ? 'المبلغ المطلوب عند الاستلام' : 'Initial Payable at Delivery'}
                    </span>
                    <span className="text-[10px] text-[#6b7280] font-normal">
                      {isArabic ? 'إيجار الشهر الأول + التأمين المسترد' : '1st Month Rent + 100% Refundable Deposit'}
                    </span>
                  </div>
                  <span className="text-[#dc1414] text-base font-extrabold">
                    {formatCurrency(totalInitialPay, isArabic)}
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
                  {isArabic
                    ? 'أوافق على بنود عقد تأجير الأجهزة لبرستيج كمبيوترز، وضمان الصيانة الفورية، وسياسة استرداد التأمين 100% عند إرجاع الجهاز بحالة سليمة.'
                    : 'I agree to Prestige Computer Hardware Lease Agreement terms, zero-maintenance replacement guarantee, and 100% deposit refund policy upon device return.'}
                </span>
              </label>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-sm font-bold rounded-2xl shadow-[0_4px_14px_rgba(220,20,20,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" className="opacity-75" />
                      </svg>
                      <span>{isArabic ? 'جاري إرسال طلب التأجير...' : 'Submitting Rental Application...'}</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {isArabic
                          ? `تأكيد طلب التأجير • المستحق ${formatCurrency(totalInitialPay, isArabic)}`
                          : `Submit Rental Request • Pay ${formatCurrency(totalInitialPay, isArabic)}`}
                      </span>
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
