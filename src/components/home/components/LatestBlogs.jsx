'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getBlogs } from '../../../services/blogApi'
import { useLanguage } from '../../../context/LanguageContext'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-[#6b7280] shrink-0">
      <rect x="2" y="3" width="12" height="11" rx="2" /><path d="M5 1.8v2.4M11 1.8v2.4M2 6.5h12" strokeLinecap="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-[#6b7280] shrink-0">
      <circle cx="8" cy="8" r="6" /><path d="M8 4.8v3.4l2.2 1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#e7eaf0] overflow-hidden flex items-stretch min-h-[146px] animate-pulse">
      <div className="w-[152px] shrink-0 bg-gray-100" />
      <div className="flex-1 p-4 space-y-3">
        <div className="h-5 bg-gray-100 rounded w-20" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2 mt-2" />
      </div>
    </div>
  )
}

export default function LatestBlogs() {
  const { t, isRtl } = useLanguage()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getBlogs({ limit: 3, page: 1 })
      .then((data) => { if (!cancelled) setBlogs(data.blogs?.slice(0, 3) || []) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  if (!loading && blogs.length === 0) return null

  return (
    <section className="w-full bg-white py-6 sm:py-8" aria-label="Latest Blogs and Buying Guides">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] tracking-[-0.02em]">
            {t('latestBlogsTitle')}
          </h2>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc1414] hover:text-[#b91c1c] transition-colors shrink-0 group cursor-pointer">
            <span>{t('viewAllArticles')}</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {loading
            ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
            : blogs.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-[#e7eaf0] shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_24px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/25 transition-all duration-200 overflow-hidden flex items-stretch min-h-[146px] cursor-pointer">
                {/* Thumbnail */}
                <div className="w-[138px] sm:w-[158px] lg:w-[152px] xl:w-[174px] shrink-0 overflow-hidden bg-[#f1f5f9]">
                  <img
                    src={post.coverImage || FALLBACK_IMG}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0 p-3.5 sm:p-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#cc1414] text-white text-[11px] font-semibold leading-none px-3 py-1.5 rounded-md">
                      {post.category}
                    </span>
                    <h3 className="mt-2.5 text-[14.5px] xl:text-[15.5px] font-bold text-[#111827] leading-[1.32] group-hover:text-[#dc1414] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-3 flex items-center flex-wrap gap-x-3.5 gap-y-1 text-[11.5px] font-medium text-[#6b7280]">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon />
                      {new Date(post.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}
