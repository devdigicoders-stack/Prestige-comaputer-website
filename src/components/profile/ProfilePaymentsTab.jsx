'use client'

import { useState } from 'react'

export default function ProfilePaymentsTab() {
  const [upiList, setUpiList] = useState([
    { id: 'upi-1', handle: 'rahulsharma@okhdfcbank', app: 'Google Pay', isDefault: true },
    { id: 'upi-2', handle: '9876543210@paytm', app: 'Paytm UPI', isDefault: false },
  ])

  const [cards, setCards] = useState([
    {
      id: 'card-1',
      bank: 'HDFC Bank',
      type: 'Credit Card',
      brand: 'VISA',
      last4: '4092',
      exp: '08/29',
      isDefault: true,
    },
    {
      id: 'card-2',
      bank: 'State Bank of India',
      type: 'Debit Card',
      brand: 'RuPay',
      last4: '8812',
      exp: '11/27',
      isDefault: false,
    },
  ])

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      {/* Top Header */}
      <div className="pb-4 border-b border-[#f3f4f6]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Saved Payment Methods
        </h2>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          Manage your saved UPI accounts, credit and debit cards for 1-click checkout.
        </p>
      </div>

      {/* UPI Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14.5px] font-bold text-[#111827] flex items-center gap-2">
            <span>UPI IDs</span>
            <span className="text-[10px] font-black text-[#097939] bg-[#dcfce7] px-2 py-0.5 rounded">
              UPI ►
            </span>
          </h3>
          <button
            type="button"
            onClick={() => alert('Add new UPI dialog opened')}
            className="text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
          >
            + Add New UPI
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {upiList.map((upi) => (
            <div
              key={upi.id}
              className="rounded-xl border border-[#e5e7eb] p-4 flex items-center justify-between gap-3 bg-white hover:border-[#dc1414]/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#fee2e2] text-[#dc1414] flex items-center justify-center font-bold text-[12px] shrink-0">
                  @
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#111827]">{upi.handle}</span>
                  <span className="text-[11px] text-[#6b7280]">{upi.app}</span>
                </div>
              </div>

              {upi.isDefault ? (
                <span className="text-[10.5px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                  Default
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setUpiList((prev) =>
                      prev.map((u) => ({ ...u, isDefault: u.id === upi.id }))
                    )
                  }
                  className="text-[11.5px] font-semibold text-[#6b7280] hover:text-[#dc1414] cursor-pointer"
                >
                  Make Default
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#f3f4f6]" />

      {/* Credit / Debit Cards Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14.5px] font-bold text-[#111827]">
            Saved Cards
          </h3>
          <button
            type="button"
            onClick={() => alert('Add new card dialog opened')}
            className="text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
          >
            + Add New Card
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-[#e5e7eb] p-4 flex flex-col justify-between bg-gradient-to-br from-[#111827] to-[#1f2937] text-white shadow-md min-h-[140px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#9ca3af]">{card.bank}</span>
                <span className="text-[12px] font-black italic">{card.brand}</span>
              </div>

              <div className="text-[16px] tracking-widest font-mono py-2">
                •••• •••• •••• {card.last4}
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#9ca3af] pt-1 border-t border-white/10">
                <span>Expires: {card.exp}</span>
                {card.isDefault ? (
                  <span className="text-[#22c55e] font-bold">✓ Default Card</span>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setCards((prev) =>
                        prev.map((c) => ({ ...c, isDefault: c.id === card.id }))
                      )
                    }
                    className="hover:text-white cursor-pointer"
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
