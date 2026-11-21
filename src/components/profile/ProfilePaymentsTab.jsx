'use client'

import { useEffect, useState } from 'react'
import {
  getPaymentMethods,
  addPaymentMethod,
  deletePaymentMethod,
} from '../../services/authApi'

export default function ProfilePaymentsTab() {
  const [paymentMethods, setPaymentMethods] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAddUpiOpen, setIsAddUpiOpen] = useState(false)
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const [upiHandle, setUpiHandle] = useState('')
  const [upiApp, setUpiApp] = useState('Google Pay')
  const [cardForm, setCardForm] = useState({
    bank: '',
    cardType: 'Debit Card',
    brand: 'VISA',
    last4: '',
    exp: '',
  })
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const loadMethods = async () => {
    setLoading(true)
    try {
      const data = await getPaymentMethods()
      if (Array.isArray(data)) {
        setPaymentMethods(data)
      }
    } catch (err) {
      console.warn('Failed to load payment methods:', err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMethods()
  }, [])

  const handleAddUpi = async (e) => {
    e.preventDefault()
    if (!upiHandle.includes('@')) {
      alert('Please enter a valid UPI ID (e.g. name@okhdfcbank or 9876543210@upi)')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await addPaymentMethod({
        type: 'upi',
        handle: upiHandle.trim(),
        app: upiApp,
        isDefault: paymentMethods.length === 0,
      })
      if (Array.isArray(res)) setPaymentMethods(res)
      else loadMethods()
      setUpiHandle('')
      setIsAddUpiOpen(false)
      setFeedback('UPI ID saved successfully in database!')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to save UPI ID')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddCard = async (e) => {
    e.preventDefault()
    if (cardForm.last4.length !== 4) {
      alert('Please enter the last 4 digits of your card.')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await addPaymentMethod({
        type: 'card',
        bank: cardForm.bank.trim() || 'Bank Card',
        cardType: cardForm.cardType,
        brand: cardForm.brand,
        last4: cardForm.last4.trim(),
        exp: cardForm.exp.trim() || '12/28',
        isDefault: paymentMethods.length === 0,
      })
      if (Array.isArray(res)) setPaymentMethods(res)
      else loadMethods()
      setCardForm({ bank: '', cardType: 'Debit Card', brand: 'VISA', last4: '', exp: '' })
      setIsAddCardOpen(false)
      setFeedback('Card saved securely for checkout!')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to save card')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRemove = async (id) => {
    if (!confirm('Are you sure you want to remove this payment method?')) return
    try {
      const res = await deletePaymentMethod(id)
      if (Array.isArray(res)) setPaymentMethods(res)
      else setPaymentMethods((prev) => prev.filter((p) => (p._id || p.id) !== id))
      setFeedback('Payment method removed.')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to remove payment method')
    }
  }

  const upiList = paymentMethods.filter((p) => p.type === 'upi')
  const cardList = paymentMethods.filter((p) => p.type === 'card')

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      {/* Top Header */}
      <div className="pb-4 border-b border-[#f3f4f6]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Saved Payment Methods
        </h2>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          Manage your saved UPI accounts and bank cards for fast 1-click checkout.
        </p>
      </div>

      {feedback && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12.5px] font-medium">
          {feedback}
        </div>
      )}

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
            onClick={() => setIsAddUpiOpen(true)}
            className="text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
          >
            + Add New UPI
          </button>
        </div>

        {loading ? (
          <div className="py-4 text-center text-gray-500 text-[12.5px] animate-pulse">Loading saved UPI...</div>
        ) : upiList.length === 0 ? (
          <div className="p-4 rounded-xl border border-dashed border-gray-300 text-center text-gray-500 text-[12.5px]">
            No UPI accounts saved yet. Add your VPA for instant checkout.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {upiList.map((upi) => {
              const id = upi._id || upi.id
              return (
                <div
                  key={id}
                  className="rounded-xl border border-[#e5e7eb] p-4 flex items-center justify-between gap-3 bg-white hover:border-[#dc1414]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#fee2e2] text-[#dc1414] flex items-center justify-center font-bold text-[12px] shrink-0">
                      @
                    </div>
                    <div className="min-w-0">
                      <span className="text-[13px] font-bold text-[#111827] block truncate">
                        {upi.handle}
                      </span>
                      <span className="text-[11px] text-[#6b7280]">{upi.app}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {upi.isDefault && (
                      <span className="text-[10px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemove(id)}
                      className="text-[11.5px] text-[#dc2626] hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Cards Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14.5px] font-bold text-[#111827] flex items-center gap-2">
            <span>Credit &amp; Debit Cards</span>
            <span className="text-[10.5px] font-medium text-[#6b7280]">
              Encrypted &bull; PCI-DSS Secure
            </span>
          </h3>
          <button
            type="button"
            onClick={() => setIsAddCardOpen(true)}
            className="text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
          >
            + Add New Card
          </button>
        </div>

        {loading ? (
          <div className="py-4 text-center text-gray-500 text-[12.5px] animate-pulse">Loading cards...</div>
        ) : cardList.length === 0 ? (
          <div className="p-4 rounded-xl border border-dashed border-gray-300 text-center text-gray-500 text-[12.5px]">
            No cards saved yet. Add a credit or debit card for easy checkout.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cardList.map((card) => {
              const id = card._id || card.id
              return (
                <div
                  key={id}
                  className="rounded-xl border border-[#e5e7eb] p-4 flex flex-col justify-between gap-3 bg-white hover:border-[#dc1414]/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[13px] font-bold text-[#111827] block">
                        {card.bank}
                      </span>
                      <span className="text-[11.5px] text-[#6b7280]">
                        {card.cardType} ({card.brand})
                      </span>
                    </div>
                    {card.isDefault && (
                      <span className="text-[10px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#f3f4f6]">
                    <span className="font-mono text-[13px] font-extrabold text-[#111827] tracking-wider">
                      •••• •••• •••• {card.last4}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(id)}
                      className="text-[11.5px] text-[#dc2626] hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Add UPI Modal */}
      {isAddUpiOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-xl">
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">Add UPI ID</h3>
            <form onSubmit={handleAddUpi} className="flex flex-col gap-3 text-[13px]">
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  Virtual Payment Address (VPA) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. mobile@upi, name@okhdfcbank"
                  value={upiHandle}
                  onChange={(e) => setUpiHandle(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  UPI Provider
                </label>
                <select
                  value={upiApp}
                  onChange={(e) => setUpiApp(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                >
                  <option value="Google Pay">Google Pay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm UPI">Paytm UPI</option>
                  <option value="BHIM UPI">BHIM UPI</option>
                  <option value="Other Bank UPI">Other Bank UPI</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddUpiOpen(false)}
                  className="px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-1.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold rounded-lg"
                >
                  {isSubmitting ? 'Saving...' : 'Save UPI'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Card Modal */}
      {isAddCardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-xl">
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">Add Bank Card</h3>
            <form onSubmit={handleAddCard} className="flex flex-col gap-3 text-[13px]">
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  Bank Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC Bank, SBI, ICICI"
                  value={cardForm.bank}
                  onChange={(e) => setCardForm({ ...cardForm, bank: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Card Type
                  </label>
                  <select
                    value={cardForm.cardType}
                    onChange={(e) => setCardForm({ ...cardForm, cardType: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none"
                  >
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Card Network
                  </label>
                  <select
                    value={cardForm.brand}
                    onChange={(e) => setCardForm({ ...cardForm, brand: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none"
                  >
                    <option value="VISA">VISA</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="RuPay">RuPay</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Last 4 Digits *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    placeholder="e.g. 4092"
                    value={cardForm.last4}
                    onChange={(e) => setCardForm({ ...cardForm, last4: e.target.value.replace(/\D/g, '') })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    Expiry (MM/YY)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 08/29"
                    value={cardForm.exp}
                    onChange={(e) => setCardForm({ ...cardForm, exp: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddCardOpen(false)}
                  className="px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-1.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold rounded-lg"
                >
                  {isSubmitting ? 'Saving...' : 'Save Card'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
