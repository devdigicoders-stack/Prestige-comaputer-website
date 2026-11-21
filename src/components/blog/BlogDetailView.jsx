'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getBlogBySlug } from '../../services/blogApi'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5 shrink-0">
      <rect x="2" y="3" width="12" height="11" rx="2" /><path d="M5 1.8v2.4M11 1.8v2.4M2 6.5h12" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <circle cx="8" cy="8" r="6" /><path d="M8 4.8v3.4l2.2 1.3" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M1.5 8s2.5-5 6.5-5 6.5 5 6.5 5-2.5 5-6.5 5-6.5-5-6.5-5Z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <circle cx="12.5" cy="3" r="1.5" /><circle cx="12.5" cy="13" r="1.5" /><circle cx="3.5" cy="8" r="1.5" />
      <path d="M5 7.1l6-3.2M5 8.9l6 3.2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M3 8l3.5 3.5L13 4.5" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M2 2h5.5l6.5 6.5-5.5 5.5L2 7.5V2Z" /><circle cx="5" cy="5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M13 8H3M7 4L3 8l4 4" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function NotFoundIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-[#d1d5db]">
      <rect x="10" y="8" width="44" height="48" rx="4" />
      <path d="M20 22h24M20 30h24M20 38h14" />
      <circle cx="46" cy="46" r="10" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <path d="M43 43l6 6M49 43l-6 6" />
    </svg>
  )
}

export default function BlogDetailView({ slug }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!slug) return
    getBlogBySlug(slug).then(setData).finally(() => setLoading(false))
  }, [slug])

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return (
      <div className="w-full bg-[#f8fafc] min-h-screen pb-16">
        <div className="max-w-[900px] mx-auto px-4 pt-6 space-y-4 animate-pulse">
          <div className="h-4 bg-[#e5e7eb] rounded w-48" />
          <div className="bg-white rounded-2xl p-8 space-y-4 border border-[#e5e7eb]">
            <div className="h-3 bg-[#f3f4f6] rounded w-24" />
            <div className="h-8 bg-[#f3f4f6] rounded w-full" />
            <div className="h-8 bg-[#f3f4f6] rounded w-3/4" />
            <div className="h-4 bg-[#f3f4f6] rounded w-full" />
          </div>
          <div className="h-64 sm:h-96 bg-[#e5e7eb] rounded-2xl" />
          <div className="bg-white rounded-2xl p-8 space-y-3 border border-[#e5e7eb]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-[#f3f4f6] rounded" style={{ width: `${70 + (i % 3) * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!data?.blog) {
    return (
      <div className="w-full bg-[#f8fafc] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="flex justify-center mb-5"><NotFoundIcon /></div>
          <h2 className="text-xl font-bold text-[#111827]">Article Not Found</h2>
          <p className="text-[13.5px] text-[#6b7280] mt-2 max-w-xs mx-auto">This article may have been removed or the link is incorrect.</p>
          <Link href="/blog" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#dc1414] text-white text-[13px] font-bold rounded-xl hover:bg-[#b91c1c] transition-colors">
            <ArrowLeftIcon /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const { blog, related = [] } = data

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[900px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">

        {/* Breadcrumb */}
        <nav className="mb-5 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-[#dc1414] transition-colors">Home</Link></li>
            <li className="text-[#d1d5db]">/</li>
            <li><Link href="/blog" className="hover:text-[#dc1414] transition-colors">Tech Guides</Link></li>
            <li className="text-[#d1d5db]">/</li>
            <li className="font-semibold text-[#111827] truncate max-w-xs sm:max-w-md">{blog.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-10 shadow-[0_2px_12px_rgba(16,24,40,0.05)] mb-6">
          <div className="flex items-center gap-2.5 text-[12px] text-[#6b7280] mb-4 font-medium flex-wrap">
            <span className="px-3 py-1 rounded-md bg-[#fee2e2] text-[#dc1414] font-semibold text-[11.5px]">{blog.category}</span>
            <span className="inline-flex items-center gap-1.5"><ClockIcon />{blog.readTime}</span>
            <span className="text-[#d1d5db]">•</span>
            <span className="inline-flex items-center gap-1.5"><CalendarIcon />{new Date(blog.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
            {blog.views > 0 && (
              <>
                <span className="text-[#d1d5db]">•</span>
                <span className="inline-flex items-center gap-1.5"><EyeIcon />{blog.views.toLocaleString()} views</span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-[34px] font-extrabold text-[#111827] leading-tight tracking-tight">{blog.title}</h1>
          {blog.excerpt && (
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#4b5563] leading-relaxed">{blog.excerpt}</p>
          )}

          <div className="mt-6 pt-5 border-t border-[#f3f4f6] flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              {blog.author?.avatar
                ? <img src={blog.author.avatar} alt={blog.author.name} className="w-11 h-11 rounded-full object-cover border border-[#e5e7eb]" />
                : <div className="w-11 h-11 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#dc1414] font-bold text-base">{(blog.author?.name || 'P')[0]}</div>
              }
              <div>
                <h4 className="text-[13.5px] font-bold text-[#111827]">{blog.author?.name || 'Prestige Computers'}</h4>
                {blog.author?.role && <p className="text-[12px] text-[#6b7280]">{blog.author.role}</p>}
              </div>
            </div>
            <button type="button" onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#d1d5db] hover:border-[#dc1414] hover:text-[#dc1414] text-[12.5px] font-semibold rounded-xl transition-colors cursor-pointer bg-white">
              {copied ? <><CheckIcon /> Copied!</> : <><ShareIcon /> Share</>}
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] mb-8 shadow-[0_2px_12px_rgba(16,24,40,0.05)] h-64 sm:h-[420px]">
          <img src={blog.coverImage || FALLBACK_IMG} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-10 shadow-[0_2px_12px_rgba(16,24,40,0.05)] mb-8">
          <div
            className="prose prose-sm sm:prose-base max-w-none text-[#374151] leading-relaxed [&>h2]:text-[20px] [&>h2]:font-bold [&>h2]:text-[#111827] [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-[17px] [&>h3]:font-bold [&>h3]:text-[#111827] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>p]:text-[14.5px] [&>p]:leading-[1.75] [&>ul]:mb-4 [&>ul]:pl-5 [&>ul>li]:mb-1.5 [&>ol]:mb-4 [&>ol]:pl-5 [&>blockquote]:border-l-4 [&>blockquote]:border-[#dc1414] [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-[#6b7280] [&>blockquote]:bg-[#fef2f2] [&>blockquote]:py-2 [&>blockquote]:rounded-r-lg [&>img]:rounded-xl [&>img]:my-5 [&>img]:w-full"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags?.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#f3f4f6] flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#374151] mr-1">
                <TagIcon /> Tags:
              </span>
              {blog.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-[#f1f5f9] text-[#4b5563] text-[12px] font-medium hover:bg-[#fee2e2] hover:text-[#dc1414] transition-colors cursor-default">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#111827] to-[#1e293b] rounded-2xl p-6 sm:p-8 text-white mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_32px_rgba(16,24,40,0.18)]">
          <div>
            <span className="inline-block px-3 py-1 rounded-md text-[11.5px] font-bold bg-[#dc1414] text-white mb-3">Hardware Consultation</span>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">Ready to Upgrade or Rent Your Dream Setup?</h3>
            <p className="text-[12.5px] sm:text-[13.5px] text-[#cbd5e1] mt-1.5 max-w-lg leading-relaxed">
              Explore certified laptops, custom RTX desktop builds, and flexible monthly rental plans.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/products" className="px-5 py-2.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[13px] font-bold rounded-xl transition-all shadow-md whitespace-nowrap">
              Shop Laptops
            </Link>
            <Link href="/rentals" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[13px] font-bold rounded-xl transition-colors whitespace-nowrap">
              Rent a Computer
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mb-4">
            <h3 className="text-[19px] font-bold text-[#111827] mb-5">More Tech Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link key={rp._id} href={`/blog/${rp.slug}`}
                  className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_8px_24px_rgba(16,24,40,0.09)] hover:-translate-y-1 hover:border-[#dc1414]/20 transition-all duration-200 group flex flex-col">
                  <div className="h-36 overflow-hidden bg-[#f1f5f9]">
                    <img src={rp.coverImage || FALLBACK_IMG} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[10.5px] font-bold text-[#dc1414] uppercase tracking-wider">{rp.category}</span>
                    <h4 className="text-[13px] font-bold text-[#111827] mt-1.5 group-hover:text-[#dc1414] transition-colors line-clamp-2 flex-1">{rp.title}</h4>
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] text-[#6b7280] mt-2.5 font-medium">
                      <CalendarIcon />{new Date(rp.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
