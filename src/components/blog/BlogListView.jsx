'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getBlogs } from '../../services/blogApi'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#9ca3af] shrink-0">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}

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

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 shrink-0">
      <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M10 4L6 8l4 4" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M6 4l4 4-4 4" />
    </svg>
  )
}

function ArticleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#d1d5db]">
      <rect x="8" y="6" width="32" height="36" rx="3" />
      <path d="M15 16h18M15 22h18M15 28h12" />
    </svg>
  )
}

function BlogCard({ post }) {
  const img = post.coverImage || FALLBACK_IMG
  return (
    <article className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_28px_rgba(16,24,40,0.09)] hover:-translate-y-1 hover:border-[#dc1414]/20 transition-all duration-200 flex flex-col group">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#f1f5f9]">
        <img src={img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/55 backdrop-blur-sm text-white leading-none">
          {post.category}
        </span>
        {post.isFeatured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#dc1414] text-white leading-none">
            <StarIcon /> Featured
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-[11.5px] text-[#6b7280] mb-2.5 font-medium">
          <span className="inline-flex items-center gap-1.5"><CalendarIcon />{new Date(post.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          <span className="text-[#d1d5db]">•</span>
          <span className="inline-flex items-center gap-1.5"><ClockIcon />{post.readTime}</span>
        </div>
        <h3 className="text-[15px] font-bold text-[#111827] leading-snug group-hover:text-[#dc1414] transition-colors line-clamp-2 flex-1">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt && (
          <p className="text-[12.5px] text-[#4b5563] mt-2 line-clamp-2 leading-relaxed">{post.excerpt}</p>
        )}
        <div className="mt-4 pt-3.5 border-t border-[#f3f4f6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {post.author?.avatar
              ? <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full object-cover border border-[#e5e7eb]" />
              : <div className="w-7 h-7 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#dc1414] text-[11px] font-bold">{(post.author?.name || 'P')[0]}</div>
            }
            <span className="text-[12px] font-semibold text-[#374151]">{post.author?.name || 'Prestige Computers'}</span>
          </div>
          <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-[12px] font-bold text-[#dc1414] hover:text-[#b91c1c] group">
            Read <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden animate-pulse">
      <div className="h-48 bg-[#f3f4f6]" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-[#f3f4f6] rounded w-1/3" />
        <div className="h-4 bg-[#f3f4f6] rounded w-full" />
        <div className="h-4 bg-[#f3f4f6] rounded w-3/4" />
        <div className="h-3 bg-[#f3f4f6] rounded w-full" />
        <div className="h-3 bg-[#f3f4f6] rounded w-2/3" />
      </div>
    </div>
  )
}

export default function BlogListView() {
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState([])
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getBlogs({ category: selectedCategory === 'All' ? '' : selectedCategory, search, page, limit: 9 })
      .then((data) => {
        if (cancelled) return
        setBlogs(data.blogs || [])
        setTotal(data.total || 0)
        setPages(data.pages || 1)
        setCategories(['All', ...(data.categories || [])])
      })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [selectedCategory, search, page])

  const featuredPost = blogs.find((b) => b.isFeatured) || blogs[0]

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">

        {/* Breadcrumb */}
        <nav className="mb-5 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#dc1414] transition-colors">Home</Link></li>
            <li className="text-[#d1d5db]">/</li>
            <li className="font-semibold text-[#111827]">Tech Guides & Blog</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-4">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <rect x="2" y="2" width="12" height="12" rx="2" />
              <path d="M5 6h6M5 9h4" />
            </svg>
            Prestige Tech Journal
          </span>
          <h1 className="text-2xl sm:text-[36px] font-extrabold tracking-tight leading-tight">
            Computer Hardware <span className="text-[#dc1414]">Guides & Insights</span>
          </h1>
          <p className="mt-2.5 text-[13.5px] sm:text-sm text-[#6b7280] leading-relaxed">
            Expert buying advice, benchmark comparisons, custom PC builds, and rental strategies.
          </p>
          {/* Search */}
          <div className="mt-6 relative max-w-md mx-auto">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              placeholder="Search guides, GPUs, benchmarks..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d1d5db] bg-white text-[13.5px] shadow-[0_1px_3px_rgba(16,24,40,0.04)] focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        {categories.length > 1 && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => { setSelectedCategory(cat); setPage(1) }}
                className={`px-4 py-2 rounded-xl text-[12.5px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#dc1414] text-white shadow-[0_4px_12px_rgba(220,20,20,0.3)]'
                    : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:border-[#dc1414]/40 hover:text-[#dc1414]'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Featured Post Banner */}
        {!loading && featuredPost && selectedCategory === 'All' && !search && page === 1 && (
          <div className="mb-12 bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_16px_rgba(16,24,40,0.06)] hover:shadow-[0_8px_32px_rgba(16,24,40,0.1)] transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto relative overflow-hidden min-h-[280px]">
                <img src={featuredPost.coverImage || FALLBACK_IMG} alt={featuredPost.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11.5px] font-bold bg-[#dc1414] text-white shadow-md">
                  <StarIcon /> Featured Article
                </span>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[12px] text-[#6b7280] mb-3 font-medium flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[#374151] font-semibold text-[11.5px]">{featuredPost.category}</span>
                    <span className="inline-flex items-center gap-1.5"><ClockIcon />{featuredPost.readTime}</span>
                    <span className="text-[#d1d5db]">•</span>
                    <span className="inline-flex items-center gap-1.5"><CalendarIcon />{new Date(featuredPost.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-tight hover:text-[#dc1414] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                  {featuredPost.excerpt && (
                    <p className="mt-3 text-[13.5px] text-[#4b5563] leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
                  )}
                </div>
                <div className="mt-6 pt-5 border-t border-[#f3f4f6] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {featuredPost.author?.avatar
                      ? <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-9 h-9 rounded-full object-cover border border-[#e5e7eb]" />
                      : <div className="w-9 h-9 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#dc1414] text-sm font-bold">{(featuredPost.author?.name || 'P')[0]}</div>
                    }
                    <div>
                      <p className="text-[13px] font-bold text-[#111827]">{featuredPost.author?.name || 'Prestige Computers'}</p>
                      {featuredPost.author?.role && <p className="text-[11px] text-[#6b7280]">{featuredPost.author.role}</p>}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] group">
                    Read Article <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#e5e7eb] py-20 text-center shadow-xs">
            <div className="flex justify-center mb-4 text-[#d1d5db]"><ArticleIcon /></div>
            <p className="text-[16px] font-bold text-[#374151]">No articles found</p>
            <p className="text-[13px] text-[#6b7280] mt-1">Try a different category or search term.</p>
            {(search || selectedCategory !== 'All') && (
              <button type="button" onClick={() => { setSearch(''); setSelectedCategory('All'); setPage(1) }}
                className="mt-4 px-4 py-2 bg-[#dc1414] text-white text-[13px] font-semibold rounded-lg hover:bg-[#b91c1c] transition-colors cursor-pointer">
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {blogs.map((post) => <BlogCard key={post._id} post={post} />)}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button type="button" disabled={page === 1} onClick={() => setPage((p) => p - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold border border-[#e5e7eb] rounded-xl bg-white hover:border-[#dc1414] hover:text-[#dc1414] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors">
              <ChevronLeftIcon /> Prev
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                <button key={p} type="button" onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                    page === p ? 'bg-[#dc1414] text-white shadow-xs' : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:border-[#dc1414]/40'
                  }`}>
                  {p}
                </button>
              ))}
            </div>
            <button type="button" disabled={page === pages} onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold border border-[#e5e7eb] rounded-xl bg-white hover:border-[#dc1414] hover:text-[#dc1414] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors">
              Next <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
