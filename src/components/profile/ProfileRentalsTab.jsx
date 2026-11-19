'use client'

import Link from 'next/link'
import { WishlistLaptopVisual, WishlistDesktopVisual } from '../wishlist/WishlistVisuals'

export default function ProfileRentalsTab() {
  const rentals = [
    {
      id: 'RNT-2026-4412',
      device: 'Business Laptop - Dell Latitude 15',
      specs: 'Intel Core i5 | 16GB RAM | 512GB SSD | Win 11 Pro',
      monthlyRent: 1299,
      tenure: '6 Months',
      startDate: 'Aug 01, 2026',
      endDate: 'Jan 31, 2027',
      nextDue: 'Dec 01, 2026',
      deposit: '₹5,000 (Refundable)',
      status: 'Active',
      visual: <WishlistLaptopVisual className="w-full h-full max-h-[55px] object-contain" />,
    },
    {
      id: 'RNT-2026-3829',
      device: 'High Performance Office Desktop PC',
      specs: 'Core i5 | 16GB RAM | 512GB SSD + 24" FHD Monitor',
      monthlyRent: 1799,
      tenure: '12 Months',
      startDate: 'May 15, 2026',
      endDate: 'May 14, 2027',
      nextDue: 'Dec 15, 2026',
      deposit: '₹8,000 (Refundable)',
      status: 'Active',
      visual: <WishlistDesktopVisual className="w-full h-full max-h-[55px] object-contain" />,
    },
  ]

  return (
    <div className="flex flex-col gap-5">
      {/* Top Header */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <h2 className="text-[18px] font-bold text-[#111827]">
            My Rental Devices
          </h2>
          <p className="text-[12.5px] text-[#6b7280]">
            Manage your leased laptops, workstations, tenure extensions and maintenance.
          </p>
        </div>

        <Link
          href="/rentals"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12.5px] font-bold transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <span>+ Rent Another Device</span>
        </Link>
      </div>

      {/* Rentals Cards */}
      <div className="flex flex-col gap-4">
        {rentals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs flex flex-col gap-4 hover:border-[#dc1414]/30 transition-colors"
          >
            {/* Top Row: Device Name, Agreement ID, Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#f3f4f6]">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[15px] font-extrabold text-[#111827]">
                  {item.device}
                </span>
                <span className="text-[12px] text-[#6b7280]">
                  Agreement #{item.id}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#dcfce7] text-[#16a34a] border border-[#bbf7d0]">
                  ● {item.status}
                </span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] text-[#6b7280] block">Monthly Rent</span>
                <span className="text-[17px] font-black text-[#dc1414]">
                  ₹{item.monthlyRent.toLocaleString('en-IN')}<span className="text-[12px] font-medium text-[#6b7280]">/mo</span>
                </span>
              </div>
            </div>

            {/* Device Info & Specs */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-14 bg-[#f8fafc] rounded-xl border border-[#e5e7eb] flex items-center justify-center p-1.5 shrink-0">
                {item.visual}
              </div>
              <div className="flex flex-col">
                <p className="text-[13px] font-semibold text-[#111827]">{item.specs}</p>
                <div className="flex items-center gap-3 text-[12px] text-[#6b7280] mt-1 flex-wrap">
                  <span>Tenure: <strong className="text-[#111827] font-semibold">{item.tenure}</strong></span>
                  <span>•</span>
                  <span>Deposit: <strong className="text-[#111827] font-semibold">{item.deposit}</strong></span>
                  <span>•</span>
                  <span>Next Due: <strong className="text-[#dc1414] font-semibold">{item.nextDue}</strong></span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#f3f4f6] flex-wrap">
              <button
                type="button"
                onClick={() => alert(`Opening maintenance request for ${item.device}...`)}
                className="px-3.5 py-1.5 rounded-lg border border-[#d1d5db] text-[#374151] hover:text-[#dc1414] hover:border-[#dc1414] text-[12px] font-bold transition-colors cursor-pointer"
              >
                Request Service / Repair
              </button>
              <button
                type="button"
                onClick={() => alert(`Downloading Rental Agreement #${item.id}...`)}
                className="px-3.5 py-1.5 rounded-lg border border-[#d1d5db] text-[#374151] hover:text-[#dc1414] hover:border-[#dc1414] text-[12px] font-bold transition-colors cursor-pointer"
              >
                Agreement PDF
              </button>
              <button
                type="button"
                onClick={() => alert(`Tenure extension options for ${item.device} opened.`)}
                className="px-4 py-1.5 rounded-lg bg-[#dc1414] hover:bg-[#b91c1c] text-white text-[12px] font-bold transition-colors cursor-pointer"
              >
                Extend Rental
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
