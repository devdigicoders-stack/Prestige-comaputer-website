'use client'

import Link from 'next/link'
import { BLOG_POSTS } from '../../data/blogData'

export default function BlogDetailView({ slug }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0]
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]">
      <div className="max-w-[900px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#6b7280]">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#dc1414] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#dc1414] transition-colors">
                Tech Guides
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827] truncate max-w-xs sm:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article Header Card */}
        <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm mb-8">
          <div className="flex items-center gap-3 text-xs text-[#6b7280] mb-3 font-semibold">
            <span className="px-3 py-1 rounded-full bg-[#fee2e2] text-[#dc1414]">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#4b5563] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Details Strip */}
          <div className="mt-6 pt-6 border-t border-[#f3f4f6] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#e5e7eb]"
              />
              <div>
                <h4 className="text-sm font-bold text-[#111827]">{post.author.name}</h4>
                <p className="text-xs text-[#6b7280]">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href)
                  alert('Article link copied to clipboard!')
                }}
                className="px-3 py-1.5 border border-[#d1d5db] hover:bg-[#f3f4f6] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>🔗</span>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden border border-[#e5e7eb] mb-10 shadow-sm h-64 sm:h-96 relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Article Body */}
        <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm mb-12">
          <div
            className="prose prose-sm sm:prose-base max-w-none text-[#374151] leading-relaxed [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#111827] [&>h2]:mt-8 [&>h2]:mb-3 [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-[#f3f4f6] flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#111827] mr-1">Tags:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-[#f1f5f9] text-[#4b5563] text-xs font-medium"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Recommended Products CTA */}
        <div className="bg-gradient-to-r from-[#111827] to-[#1e293b] rounded-3xl p-6 sm:p-8 text-white mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#dc1414] text-white">
              Hardware Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2">
              Ready to Upgrade or Rent Your Dream Setup?
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] mt-1 max-w-lg">
              Explore certified laptops, custom RTX desktop builds, and flexible monthly rental plans at Prestige Computers.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/products"
              className="px-5 py-2.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md"
            >
              Shop Laptops
            </Link>
            <Link
              href="/rentals"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors"
            >
              Rent a Computer
            </Link>
          </div>
        </div>

        {/* Related Articles Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#111827] mb-6">
            More Tech Guides from Prestige Computers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="bg-white rounded-2xl border border-[#e5e7eb] p-4 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-32 rounded-xl object-cover mb-3"
                  />
                  <span className="text-[10px] font-bold text-[#dc1414] uppercase tracking-wider">
                    {rp.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827] mt-1 group-hover:text-[#dc1414] transition-colors line-clamp-2">
                    {rp.title}
                  </h4>
                </div>
                <span className="text-[11px] text-[#6b7280] mt-3 block">{rp.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
