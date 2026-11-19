'use client'

import { useState } from 'react'
import {
  DellLaptopFrontVisual,
  DellLaptopSideAngleVisual,
  DellLaptopDeckVisual,
  DellLaptopLidClosedVisual,
  DellLaptopVideoVisual,
  ThumbnailPreview,
} from './DellInspironVisuals'

/* Clean Vector Spec Icons */
function SpecCpuIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth="1.8" />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.25" strokeWidth="1.2" />
      <path d="M8 2v3M12 2v3M16 2v3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 19v3M12 19v3M16 19v3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 8h3M2 12h3M2 16h3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 8h3M19 12h3M19 16h3" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SpecRamIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <rect x="2" y="6" width="20" height="12" rx="1.5" strokeWidth="1.8" />
      <rect x="4.5" y="8.5" width="3" height="4.5" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="9" y="8.5" width="3" height="4.5" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="13.5" y="8.5" width="3" height="4.5" rx="0.5" fill="currentColor" stroke="none" />
      <line x1="4" y1="18" x2="4" y2="15.5" strokeWidth="1.3" />
      <line x1="6.5" y1="18" x2="6.5" y2="15.5" strokeWidth="1.3" />
      <line x1="9" y1="18" x2="9" y2="15.5" strokeWidth="1.3" />
      <line x1="15" y1="18" x2="15" y2="15.5" strokeWidth="1.3" />
      <line x1="17.5" y1="18" x2="17.5" y2="15.5" strokeWidth="1.3" />
      <line x1="20" y1="18" x2="20" y2="15.5" strokeWidth="1.3" />
    </svg>
  )
}

function SpecSsdIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.8" />
      <rect x="6.5" y="7" width="11" height="5.5" rx="1" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />
      <circle cx="7.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <path d="M11 16.5h6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SpecDisplayIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <rect x="2" y="3.5" width="20" height="13" rx="1.5" strokeWidth="1.8" />
      <line x1="2" y1="14" x2="22" y2="14" strokeWidth="1" />
      <line x1="12" y1="16.5" x2="12" y2="20.5" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="7.5" y1="20.5" x2="16.5" y2="20.5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SpecWindowsIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="#0078d4" className={className}>
      <rect x="3" y="3" width="8.2" height="8.2" rx="0.8" />
      <rect x="12.8" y="3" width="8.2" height="8.2" rx="0.8" />
      <rect x="3" y="12.8" width="8.2" height="8.2" rx="0.8" />
      <rect x="12.8" y="12.8" width="8.2" height="8.2" rx="0.8" />
    </svg>
  )
}

export default function ProductGallery({
  badge = 'Bestseller',
  specBadges = [
    { labelTop: 'Intel Core i5', labelBottom: '13th Gen', type: 'cpu' },
    { labelTop: '16GB', labelBottom: 'DDR4 RAM', type: 'ram' },
    { labelTop: '512GB', labelBottom: 'SSD', type: 'ssd' },
    { labelTop: '15.6" FHD', labelBottom: 'Anti-Glare', type: 'display' },
    { labelTop: 'Windows 11', labelBottom: 'Home', type: 'os' },
  ],
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const views = [
    <DellLaptopFrontVisual key="front" className="w-full h-[250px] sm:h-[300px] object-contain" />,
    <DellLaptopSideAngleVisual key="angle" className="w-full h-[250px] sm:h-[300px] object-contain" />,
    <DellLaptopDeckVisual key="deck" className="w-full h-[250px] sm:h-[300px] object-contain" />,
    <DellLaptopLidClosedVisual key="lid" className="w-full h-[250px] sm:h-[300px] object-contain" />,
    <DellLaptopVideoVisual key="video" className="w-full h-[250px] sm:h-[300px]" />,
  ]

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? views.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === views.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Top Main Showcase Row: Thumbnails on Left + Big Box on Right */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 items-stretch">
        {/* Left Thumbnails Strip (5 vertical thumbnails) */}
        <div className="flex sm:flex-col gap-2 justify-center sm:justify-start overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 shrink-0">
          {[0, 1, 2, 3, 4].map((idx) => (
            <ThumbnailPreview
              key={idx}
              index={idx}
              isActive={activeImageIndex === idx}
              onClick={() => setActiveImageIndex(idx)}
            />
          ))}
        </div>

        {/* Big Showcase Box */}
        <div className="flex-1 bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-6 relative flex flex-col items-center justify-between min-h-[340px] sm:min-h-[400px] shadow-xs select-none">
          {/* Top Row: Bestseller Pill & Fullscreen Icon */}
          <div className="w-full flex items-center justify-between z-10">
            {/* Bestseller Badge */}
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#dc1414] to-[#f97316] text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-xs">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M8 1a5 5 0 0 0-5 5c0 2.4 1.7 4.4 3.9 4.9C6.4 10.3 6 9.2 6 8a4 4 0 0 1 6-3.4 5 5 0 0 0-4-3.6ZM8 6.5a2.5 2.5 0 0 1 2.5 2.5c0 1.2-.8 2.2-2 2.4-.2-1-.8-1.8-1.6-2.3.6-1.5 1.1-2.6 1.1-2.6Z" />
              </svg>
              <span>{badge}</span>
            </span>

            {/* Expand / Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              title="Expand view"
              className="w-8 h-8 rounded-full border border-[#e5e7eb] text-[#6b7280] hover:text-[#111827] hover:border-[#9ca3af] bg-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              aria-label="Expand view"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M3 4.25A1.25 1.25 0 0 1 4.25 3h3.5a.75.75 0 0 1 0 1.5H4.5v3.25a.75.75 0 0 1-1.5 0v-3.5Zm12.75-.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V4.5h-3.25a.75.75 0 0 1 0-1.5h3.5ZM4.5 15.5H7.75a.75.75 0 0 1 0 1.5h-3.5A1.25 1.25 0 0 1 3 15.75v-3.5a.75.75 0 0 1 1.5 0v3.25Zm11 0v-3.25a.75.75 0 0 1 1.5 0v3.5A1.25 1.25 0 0 1 15.75 17h-3.5a.75.75 0 0 1 0-1.5h3.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Center Main Product Graphic */}
          <div className="w-full flex-1 flex items-center justify-center py-2 relative">
            {/* Left Nav Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous view"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-[#e5e7eb] hover:border-[#dc1414] hover:text-[#dc1414] text-[#4b5563] shadow-xs flex items-center justify-center transition-all cursor-pointer z-10"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Visual View */}
            <div className="w-full max-w-[420px] mx-auto flex items-center justify-center">
              {views[activeImageIndex]}
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next view"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-[#e5e7eb] hover:border-[#dc1414] hover:text-[#dc1414] text-[#4b5563] shadow-xs flex items-center justify-center transition-all cursor-pointer z-10"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {[0, 1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-200 cursor-pointer ${
                  activeImageIndex === idx
                    ? 'w-5 h-2 bg-[#dc1414] rounded-full'
                    : 'w-2 h-2 bg-[#d1d5db] hover:bg-[#9ca3af] rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spec Strip: 5 Spec Badges below gallery matching mockup */}
      <div className="grid grid-cols-5 gap-1 sm:gap-1.5 pt-1">
        {specBadges.map((spec, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-[#e5e7eb] px-1.5 py-2 sm:px-2 sm:py-2.5 flex items-center gap-1.5 hover:border-[#dc1414]/30 hover:shadow-2xs transition-all min-w-0"
          >
            {/* Icon per spec */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#fff1f2] border border-[#fecdd3]/40 text-[#dc1414] flex items-center justify-center shrink-0">
              {spec.type === 'cpu' && <SpecCpuIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dc1414]" />}
              {spec.type === 'ram' && <SpecRamIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dc1414]" />}
              {spec.type === 'ssd' && <SpecSsdIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dc1414]" />}
              {spec.type === 'display' && <SpecDisplayIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dc1414]" />}
              {spec.type === 'os' && <SpecWindowsIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </div>

            {/* Text description with guaranteed no awkward word breaks */}
            <div className="flex flex-col text-left leading-none min-w-0 overflow-hidden">
              <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-bold text-[#111827] truncate whitespace-nowrap">
                {spec.labelTop}
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] lg:text-[10px] text-[#6b7280] truncate whitespace-nowrap mt-0.5 sm:mt-1">
                {spec.labelBottom}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
