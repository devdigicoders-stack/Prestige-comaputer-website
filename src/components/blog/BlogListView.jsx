'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BLOG_POSTS } from '../../data/blogData'

export default function BlogListView() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'All',
    'Gaming Hardware',
    'Workstations',
    'Custom PC Builds',
    'Rentals',
  ]

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCat =
      selectedCategory === 'All' || post.category === selectedCategory
    const matchQuery =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchCat && matchQuery
  })

  const featuredPost = BLOG_POSTS[0]

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Tech Guides & Blog</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-3">
            <span>📰</span>
            Prestige Tech Journal
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
            Computer Hardware <span className="text-[#dc1414]">Guides & Insights</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6b7280]">
            Expert buying advice, benchmark comparisons, custom PC assembly walk-throughs, and hardware rental strategies.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, RTX GPUs, benchmarks..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d1d5db] bg-white text-xs sm:text-sm shadow-xs focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none text-[#111827]"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]'
                  : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:bg-[#f3f4f6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Blog Banner (if viewing all and no search) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mb-12 bg-white rounded-3xl border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#dc1414] text-white shadow-md">
                  ★ Featured Article
                </span>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#6b7280] mb-2 font-medium">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f1f5f9] text-[#111827] font-semibold">
                      {featuredPost.category}
                    </span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-[#111827] leading-tight hover:text-[#dc1414] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#f3f4f6] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-left leading-none">
                      <p className="text-xs font-bold text-[#111827]">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-[#6b7280] mt-0.5">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="text-xs font-bold text-[#dc1414] hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#f1f5f9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-xs text-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-[#6b7280] mb-2 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111827] leading-snug group-hover:text-[#dc1414] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4b5563] mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-bold text-[#111827]">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#dc1414] hover:underline flex items-center gap-1"
                >
                  <span>Read</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
