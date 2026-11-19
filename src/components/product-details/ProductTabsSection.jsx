'use client'

import { useState } from 'react'
import { DellLaptopFrontVisual } from './DellInspironVisuals'

export default function ProductTabsSection() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="flex flex-col gap-3">
      {/* 1. Tab Headers Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'overview'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          Overview
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('specifications')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'specifications'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          Specifications
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('reviews')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'reviews'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          Reviews (328)
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('qa')}
          className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'qa'
              ? 'bg-[#dc1414] text-white shadow-xs'
              : 'bg-white text-[#4b5563] hover:text-[#111827] border border-[#e5e7eb]'
          }`}
        >
          Q&A (18)
        </button>
      </div>

      {/* 2. Tab Content Area */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Product Overview Description (md:col-span-4) */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <h2 className="text-[17px] sm:text-[18px] font-bold text-[#111827]">
                Product Overview
              </h2>
              <p className="text-[13px] text-[#4b5563] leading-relaxed">
                The Dell Inspiron 15 (2025) is a versatile and powerful laptop designed for students,
                professionals and everyday multitasking. With the latest Intel® Core™ processor,
                high-speed SSD and a vibrant Full HD display, it delivers a smooth and reliable
                performance for work, study and entertainment.
              </p>
            </div>

            {/* Middle: 5 Red Bullet Checkmarks (md:col-span-4) */}
            <div className="md:col-span-4 flex flex-col gap-2.5">
              {[
                '13th Gen Intel® Core™ i5 Processor',
                '15.6" Full HD (1920 × 1080) Anti-Glare Display',
                'Fast 512GB SSD Storage',
                '16GB DDR4 Memory (Expandable)',
                'Windows 11 Home (Pre-installed)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#dc1414] text-white flex items-center justify-center shrink-0 text-[11px] font-bold">
                    ✓
                  </span>
                  <span className="text-[12.5px] font-semibold text-[#1f2937]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Dark Promo Card with Dell Logo & Laptop Visual (md:col-span-4) */}
            <div className="md:col-span-4">
              <div className="bg-gradient-to-br from-[#090a0f] via-[#11131a] to-[#0b0c10] rounded-2xl p-4 sm:p-5 text-white flex flex-col justify-between min-h-[170px] relative overflow-hidden border border-[#27272a] shadow-md">
                {/* Subtle Glow */}
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#dc1414]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Top Info */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    {/* Dell circular logo */}
                    <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-[8px] font-black tracking-widest text-white">
                      DELL
                    </div>
                    <span className="text-[13.5px] font-bold tracking-tight">
                      Inspiron 15 (2025)
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#9ca3af] z-10 my-1 font-medium tracking-wide">
                  Work | Study | Entertainment
                </p>

                {/* Small Laptop render on bottom right */}
                <div className="w-full flex justify-end items-center mt-1 z-10">
                  <div className="w-36 h-20">
                    <DellLaptopFrontVisual className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specifications Tab */}
      {activeTab === 'specifications' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
          <h2 className="text-[17px] font-bold text-[#111827] mb-4">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[12.5px]">
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Processor</span>
              <span className="text-[#111827]">13th Gen Intel® Core™ i5-1335U (10 Cores, up to 4.60 GHz)</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Operating System</span>
              <span className="text-[#111827]">Windows 11 Home 64-bit Single Language</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Memory (RAM)</span>
              <span className="text-[#111827]">16GB DDR4 3200MHz (2x 8GB, Expandable up to 32GB)</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Storage</span>
              <span className="text-[#111827]">512GB M.2 PCIe NVMe Solid State Drive</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Display</span>
              <span className="text-[#111827]">15.6" FHD (1920x1080) 120Hz Anti-Glare LED Backlight</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Graphics</span>
              <span className="text-[#111827]">Intel® Iris® Xe Graphics</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Keyboard</span>
              <span className="text-[#111827]">Full-size Spill-Resistant Keyboard with Numeric Keypad</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Wireless</span>
              <span className="text-[#111827]">Wi-Fi 6 (802.11ax) + Bluetooth 5.3</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Ports</span>
              <span className="text-[#111827]">1x USB 3.2 Gen 1 Type-C, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4, SD Card Reader</span>
            </div>
            <div className="flex py-2 border-b border-[#f3f4f6]">
              <span className="w-36 font-semibold text-[#6b7280]">Battery & Weight</span>
              <span className="text-[#111827]">41 Whr 3-Cell Battery | 1.65 kg (3.64 lbs) Carbon Black Chassis</span>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#f3f4f6]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[32px] font-black text-[#111827]">4.6</span>
                <div>
                  <div className="flex items-center text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[12px] text-[#6b7280]">Based on 328 Verified Customer Reviews</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="bg-[#dc1414] text-white text-[12.5px] font-bold px-4 py-2 rounded-lg hover:bg-[#b91c1c] transition-colors cursor-pointer"
            >
              Write a Review
            </button>
          </div>

          {/* Sample Reviews */}
          <div className="flex flex-col divide-y divide-[#f3f4f6] text-[12.5px]">
            <div className="py-3 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#111827]">Rahul Sharma <span className="text-[#16a34a] text-[11px] font-medium ml-1">✓ Verified Buyer</span></span>
                <span className="text-[#9ca3af] text-[11px]">2 days ago</span>
              </div>
              <div className="flex text-[#f59e0b] text-[12px]">★★★★★</div>
              <p className="text-[#4b5563]">
                Awesome laptop for college coding and daily productivity. The 13th Gen i5 boots Windows in 4 seconds. Battery lasts around 6-7 hours on office mode!
              </p>
            </div>

            <div className="py-3 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#111827]">Priya Verma <span className="text-[#16a34a] text-[11px] font-medium ml-1">✓ Verified Buyer</span></span>
                <span className="text-[#9ca3af] text-[11px]">1 week ago</span>
              </div>
              <div className="flex text-[#f59e0b] text-[12px]">★★★★★</div>
              <p className="text-[#4b5563]">
                Screen display is crisp with anti-glare coating which is great for long study sessions. Very lightweight to carry in backpack.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Q&A Tab */}
      {activeTab === 'qa' && (
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-4">
          <h2 className="text-[17px] font-bold text-[#111827]">
            Questions & Answers (18)
          </h2>
          <div className="flex flex-col divide-y divide-[#f3f4f6] text-[12.5px]">
            <div className="py-3 flex flex-col gap-1">
              <p className="font-bold text-[#111827]">Q: Can I upgrade the RAM in future?</p>
              <p className="text-[#4b5563]">A: Yes, it comes with 2 DDR4 SODIMM slots and supports expansion up to 32GB RAM.</p>
            </div>
            <div className="py-3 flex flex-col gap-1">
              <p className="font-bold text-[#111827]">Q: Does it have pre-installed MS Office?</p>
              <p className="text-[#4b5563]">A: Yes, it includes Windows 11 Home and Microsoft Office Home & Student 2021 pre-activated for lifetime.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
