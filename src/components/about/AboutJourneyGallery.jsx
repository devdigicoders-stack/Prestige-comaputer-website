'use client'

import { useState } from 'react'
import Link from 'next/link'

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ChevronLeftIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

const GALLERY_PHOTOS = [
  {
    id: 1,
    title: 'Flagship Showroom Counter',
    src: '/banner/about.png',
  },
  {
    id: 2,
    title: 'Custom High-FPS Gaming Rigs',
    src: '/banner/1.png',
  },
  {
    id: 3,
    title: 'Laptops & Workstations Display',
    src: '/banner/product.png',
  },
]

export default function AboutJourneyGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_PHOTOS.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < GALLERY_PHOTOS.length - 1 ? prev + 1 : 0))
  }

  return (
    <section aria-label="A Glimpse of Prestige Computers" className="mb-14 sm:mb-18">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Heading, Description, Button */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 h-[2px] bg-[#dc1414]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold text-[#dc1414] uppercase tracking-[0.14em]">
              Our Journey
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111827] tracking-[-0.02em] leading-tight">
            A Glimpse of Prestige Computers
          </h2>

          <p className="mt-4 text-[13.5px] sm:text-[14.5px] text-[#4b5563] leading-relaxed">
            From a local store to a trusted IT destination, our journey has been driven by one goal — empowering people with the right technology.
          </p>

          <div className="mt-6 sm:mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#dc1414] text-[#dc1414] hover:bg-[#dc1414] hover:text-white font-semibold text-[13px] transition-all cursor-pointer group"
            >
              <span>Our Store Location</span>
              <ArrowRightIcon className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: 3-Image Carousel Showcase */}
        <div className="lg:col-span-8 relative">
          {/* Carousel Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous gallery image"
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#111827] shadow-[0_4px_12px_rgba(0,0,0,0.18)] border border-[#e5e7eb] flex items-center justify-center hover:bg-[#dc1414] hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next gallery image"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#111827] shadow-[0_4px_12px_rgba(0,0,0,0.18)] border border-[#e5e7eb] flex items-center justify-center hover:bg-[#dc1414] hover:text-white transition-all cursor-pointer"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>

          {/* 3 Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 overflow-hidden px-2">
            {GALLERY_PHOTOS.map((photo, idx) => {
              const isSelected = idx === currentIndex
              return (
                <div
                  key={photo.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={[
                    'relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer bg-[#0f172a] shadow-sm',
                    isSelected
                      ? 'border-[#dc1414] ring-2 ring-[#dc1414]/30 scale-[1.02]'
                      : 'border-[#e5e7eb] hover:border-[#dc1414]/40 opacity-90 hover:opacity-100',
                  ].join(' ')}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-[180px] sm:h-[190px] xl:h-[210px] object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )
            })}
          </div>

          {/* Dots Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1.5" role="tablist" aria-label="Gallery slides">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to photo ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={[
                  'h-2 rounded-full transition-all cursor-pointer',
                  idx === currentIndex ? 'w-6 bg-[#dc1414]' : 'w-2 bg-[#d1d5db] hover:bg-[#9ca3af]',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
