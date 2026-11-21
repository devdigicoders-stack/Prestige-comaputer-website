'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { getProductReviews, markReviewHelpful, submitReview } from '../../services/reviewApi'
import { useLanguage } from '../../context/LanguageContext'

function StarIcon({ filled = true, size = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 20 20" className={`${size} shrink-0`} aria-hidden="true">
      <path
        fill={filled ? '#f59e0b' : '#e5e7eb'}
        d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z"
      />
    </svg>
  )
}

function StarRow({ rating, size = 'w-4 h-4' }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <StarIcon key={s} filled={s <= Math.round(rating)} size={size} />
      ))}
    </div>
  )
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="#16a34a" aria-hidden="true">
      <path d="M8 1.2a6.8 6.8 0 1 0 0 13.6A6.8 6.8 0 0 0 8 1.2Zm3.1 5.4-3.7 3.8a.75.75 0 0 1-1.08 0L4.85 8.9a.75.75 0 1 1 1.06-1.06l.95.95 3.18-3.25a.75.75 0 1 1 1.06 1.06Z" />
    </svg>
  )
}

function ThumbIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
      <path d="M2 10.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM6 10.33V15a2 2 0 0 0 2 2h6.5a2 2 0 0 0 1.95-1.57l1-5.5a2 2 0 0 0-1.96-2.43H12V5a2 2 0 0 0-2-2 1 1 0 0 0-1 1v.5L7.17 7.68A2 2 0 0 0 6 9.5v.83Z" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793ZM11.379 5.793 3 14.172V17h2.828l8.38-8.379-2.83-2.828Z" />
    </svg>
  )
}

const AVATAR_COLORS = [
  ['#fee2e2', '#dc2626'], ['#dbeafe', '#1d4ed8'], ['#dcfce7', '#16a34a'],
  ['#fef3c7', '#d97706'], ['#f3e8ff', '#7c3aed'], ['#fce7f3', '#be185d'],
  ['#e0f2fe', '#0369a1'], ['#ecfdf5', '#059669'],
]

function ReviewAvatar({ name }) {
  const initials = (name || 'U')
    .split(' ').filter(Boolean).slice(0, 2)
    .map((w) => w[0].toUpperCase()).join('')
  const idx = (name || 'U').charCodeAt(0) % AVATAR_COLORS.length
  const [bg, fg] = AVATAR_COLORS[idx]
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-[13px] ring-2 ring-white"
      style={{ background: bg, color: fg }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function RatingBar({ star, count, total }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  const colors = { 5: '#22c55e', 4: '#84cc16', 3: '#f59e0b', 2: '#f97316', 1: '#ef4444' }
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-3 text-[12px] font-semibold text-gray-600 shrink-0">{star}</span>
      <StarIcon filled size="w-3 h-3" />
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: colors[star] }}
        />
      </div>
      <span className="w-6 text-right text-[11px] text-gray-400 shrink-0">{count}</span>
    </div>
  )
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const d = Math.floor(diff / 86400000)
  if (d === 0) return 'Today'
  if (d === 1) return 'Yesterday'
  if (d < 30) return `${d}d ago`
  if (d < 365) return `${Math.floor(d / 30)}mo ago`
  return `${Math.floor(d / 365)}y ago`
}

function ReviewCard({ review, onHelpful }) {
  const { isArabic } = useLanguage()
  const [clicked, setClicked] = useState(false)
  const [count, setCount] = useState(review.helpfulCount || 0)

  const handleHelpful = () => {
    if (clicked) return
    setClicked(true)
    setCount((c) => c + 1)
    onHelpful(review._id)
  }

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']

  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 text-left rtl:text-right">
      <div className="flex items-start gap-3">
        <ReviewAvatar name={review.userName} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[14px] font-bold text-gray-900">{review.userName}</span>
                {review.isVerifiedBuyer && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <VerifiedIcon />
                    {isArabic ? 'موثق' : 'Verified'}
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-center gap-2">
                <StarRow rating={review.rating} size="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold text-amber-600">{ratingLabels[review.rating]}</span>
              </div>
            </div>
            <span className="text-[11px] text-gray-400 shrink-0">{timeAgo(review.createdAt)}</span>
          </div>
        </div>
      </div>

      {review.title && (
        <p className="mt-3 text-[13.5px] font-bold text-gray-800">{review.title}</p>
      )}

      <p className="mt-2 text-[13px] text-gray-600 leading-relaxed">
        {review.body}
      </p>

      <div className="mt-3.5 pt-3 border-t border-gray-50 flex items-center justify-between">
        <button
          type="button"
          onClick={handleHelpful}
          disabled={clicked}
          className={`inline-flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
            clicked
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
              : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600'
          }`}
        >
          <ThumbIcon />
          {clicked ? (isArabic ? 'تم التأكيد!' : 'Helpful!') : isArabic ? 'مفيد' : 'Helpful'}{count > 0 && ` (${count})`}
        </button>
      </div>
    </article>
  )
}

function WriteReviewForm({ productId, onSuccess }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!rating) { setError('Please select a star rating'); return }
    if (body.trim().length < 10) { setError('Review must be at least 10 characters'); return }
    if (!name.trim()) { setError('Please enter your name'); return }
    setSubmitting(true)
    try {
      await submitReview({ productId, rating, title: title.trim(), body: body.trim(), userName: name.trim(), userEmail: email.trim() })
      setSuccess(true)
      onSuccess?.()
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-[16px] font-bold text-emerald-800">Review Submitted!</p>
        <p className="mt-1 text-[13px] text-emerald-600">Thank you! Your review will appear after approval.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-[#dc1414] to-[#b91c1c] px-6 py-4">
        <h3 className="text-[15px] font-bold text-white">Write a Review</h3>
        <p className="text-[12px] text-red-100 mt-0.5">Share your experience with this product</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Star Rating */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-700 mb-2">
            Your Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setRating(s)}
                onMouseEnter={() => setHover(s)}
                onMouseLeave={() => setHover(0)}
                className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
                aria-label={`${s} star`}
              >
                <StarIcon filled={s <= (hover || rating)} size="w-8 h-8" />
              </button>
            ))}
            {(hover || rating) > 0 && (
              <span className="ml-2 text-[13px] font-semibold text-amber-600">
                {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][hover || rating]}
              </span>
            )}
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3.5 py-2.5 text-[13px] rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
            />
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3.5 py-2.5 text-[13px] rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
            />
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Review Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Summarize your experience"
            maxLength={120}
            className="w-full px-3.5 py-2.5 text-[13px] rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
          />
        </div>

        {/* Body */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">
            Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tell others about your experience with this product..."
            rows={4}
            maxLength={2000}
            className="w-full px-3.5 py-2.5 text-[13px] rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all resize-none"
          />
          <p className="mt-1 text-[11px] text-gray-400">{body.length}/2000</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-[12.5px] px-4 py-2.5 rounded-xl">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-gradient-to-r from-[#dc1414] to-[#b91c1c] hover:from-[#e81a1a] hover:to-[#a81010] text-white text-[13.5px] font-bold rounded-xl shadow-[0_4px_14px_rgba(220,20,20,0.3)] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]"
        >
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
        <p className="text-center text-[11px] text-gray-400">Reviews are moderated before publishing.</p>
      </form>
    </div>
  )
}

export default function ProductReviewSection({ product }) {
  const { isArabic } = useLanguage()
  const productId = product?._id
  const productName = product?.name || product?.title || ''

  const [data, setData] = useState({ reviews: [], total: 0, pages: 0, ratingBreakdown: [] })
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('-createdAt')
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef(null)

  const loadReviews = useCallback(() => {
    if (!productId) { setLoading(false); return }
    let ignore = false
    setLoading(true)
    getProductReviews(productId, { page, limit: 5, sort })
      .then((d) => { if (!ignore) setData(d) })
      .catch(() => {})
      .finally(() => { if (!ignore) setLoading(false) })
    return () => { ignore = true }
  }, [productId, page, sort])

  useEffect(() => {
    const cleanup = loadReviews()
    return cleanup
  }, [loadReviews])

  const handleHelpful = useCallback((reviewId) => {
    markReviewHelpful(reviewId).catch(() => {})
  }, [])

  const avgRating = (() => {
    if (data.total === 0) return product?.rating || 0
    const sum = data.reviews.reduce((acc, r) => acc + r.rating, 0)
    return data.reviews.length ? Math.round((sum / data.reviews.length) * 10) / 10 : product?.rating || 0
  })()

  const breakdownMap = {}
  ;(data.ratingBreakdown || []).forEach((b) => { breakdownMap[b._id] = b.count })

  const totalReviews = data.total || product?.reviewCount || 0

  return (
    <div className="mt-10" id="reviews">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[20px] sm:text-[22px] font-black text-gray-900 tracking-tight">
            {isArabic ? 'تقييمات العملاء' : 'Customer Reviews'}
          </h2>
          <p className="mt-0.5 text-[13px] text-gray-500">
            {totalReviews > 0
              ? isArabic
                ? `${totalReviews} تقييم لـ ${productName}`
                : `${totalReviews} review${totalReviews > 1 ? 's' : ''} for ${productName}`
              : isArabic
              ? `كن أول من يقيم ${productName}`
              : `Be the first to review ${productName}`}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowForm((v) => !v)
            setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80)
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold bg-gradient-to-r from-[#dc1414] to-[#b91c1c] text-white rounded-xl shadow-[0_4px_14px_rgba(220,20,20,0.25)] hover:shadow-[0_6px_18px_rgba(220,20,20,0.35)] transition-all cursor-pointer active:scale-[0.98]"
        >
          <PenIcon />
          {isArabic ? 'كتابة تقييم' : 'Write Review'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Rating Summary */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm sticky top-4">
            {/* Big Score */}
            <div className="text-center pb-4 border-b border-gray-100">
              <div className="text-[56px] font-black text-gray-900 leading-none">{avgRating}</div>
              <div className="mt-2 flex justify-center">
                <StarRow rating={avgRating} size="w-5 h-5" />
              </div>
              <p className="mt-1.5 text-[12px] text-gray-400">
                {isArabic
                  ? `بناءً على ${totalReviews} تقييم`
                  : `Based on ${totalReviews} review${totalReviews !== 1 ? 's' : ''}`}
              </p>
            </div>

            {/* Breakdown Bars */}
            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((s) => (
                <RatingBar key={s} star={s} count={breakdownMap[s] || 0} total={totalReviews} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Reviews */}
        <div className="lg:col-span-9 flex flex-col gap-4">
          {/* Sort Bar */}
          {data.total > 0 && (
            <div className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-4 py-2.5 shadow-sm">
              <p className="text-[12.5px] text-gray-500">
                {isArabic ? (
                  <>
                    عرض <span className="font-semibold text-gray-700">{data.reviews.length}</span> من <span className="font-semibold text-gray-700">{data.total}</span> تقييم
                  </>
                ) : (
                  <>
                    Showing <span className="font-semibold text-gray-700">{data.reviews.length}</span> of <span className="font-semibold text-gray-700">{data.total}</span> reviews
                  </>
                )}
              </p>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1) }}
                className="text-[12.5px] font-medium border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 cursor-pointer"
              >
                <option value="-createdAt">{isArabic ? 'الأحدث أولاً' : 'Newest First'}</option>
                <option value="createdAt">{isArabic ? 'الأقدم أولاً' : 'Oldest First'}</option>
                <option value="-rating">{isArabic ? 'الأعلى تقييماً' : 'Highest Rating'}</option>
                <option value="rating">{isArabic ? 'الأقل تقييماً' : 'Lowest Rating'}</option>
                <option value="-helpfulCount">{isArabic ? 'الأكثر فائدة' : 'Most Helpful'}</option>
              </select>
            </div>
          )}

          {/* Loading Skeletons */}
          {loading && (
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3.5 w-28 bg-gray-100 rounded-full" />
                      <div className="h-3 w-20 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full bg-gray-100 rounded-full" />
                    <div className="h-3 w-4/5 bg-gray-100 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && data.reviews.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <p className="text-[15px] font-bold text-gray-800">
                {isArabic ? 'لا توجد تقييمات بعد' : 'No reviews yet'}
              </p>
              <p className="mt-1 text-[13px] text-gray-500">
                {isArabic ? 'كن أول من يشارك تجربته مع هذا المنتج!' : 'Be the first to share your experience!'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setShowForm(true)
                  setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80)
                }}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[13px] font-bold rounded-xl transition-colors cursor-pointer"
              >
                <PenIcon />
                {isArabic ? 'كن أول من يقيم' : 'Write First Review'}
              </button>
            </div>
          )}

          {/* Review Cards */}
          {!loading && data.reviews.length > 0 && (
            <>
              {data.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} onHelpful={handleHelpful} />
              ))}

              {/* Pagination */}
              {data.pages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-1">
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-semibold border border-gray-200 rounded-xl bg-white hover:border-red-300 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 rtl:rotate-180"><path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" /></svg>
                    {isArabic ? 'السابق' : 'Prev'}
                  </button>
                  <span className="px-4 py-2 text-[12.5px] font-medium text-gray-600 bg-white border border-gray-200 rounded-xl">
                    {page} / {data.pages}
                  </span>
                  <button
                    type="button"
                    disabled={page === data.pages}
                    onClick={() => setPage((p) => p + 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-semibold border border-gray-200 rounded-xl bg-white hover:border-red-300 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    {isArabic ? 'التالي' : 'Next'}
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 rtl:rotate-180"><path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Write Review Form */}
          <div ref={formRef}>
            {showForm && (
              <WriteReviewForm
                productId={productId}
                onSuccess={() => {
                  setShowForm(false)
                  setPage(1)
                  loadReviews()
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
