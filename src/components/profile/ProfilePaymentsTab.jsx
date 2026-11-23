'use client'

import { useEffect, useState } from 'react'
import {
  getPaymentMethods,
  addPaymentMethod,
  deletePaymentMethod,
} from '../../services/authApi'
import { useLanguage } from '../../context/LanguageContext'

export default function ProfilePaymentsTab() {
  const { isArabic } = useLanguage()
  const [paymentMethods, setPaymentMethods] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const [isAddBankOpen, setIsAddBankOpen] = useState(false)

  // Card form state
  const [cardForm, setCardForm] = useState({
    bank: '',
    cardType: 'Debit Card',
    brand: 'VISA',
    last4: '',
    exp: '',
  })

  // Bank account form state
  const [bankForm, setBankForm] = useState({
    bank: 'Qatar National Bank (QNB)',
    handle: '', // IBAN
    app: 'Prestige Computers W.L.L.', // Beneficiary / Account holder
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

  const handleAddCard = async (e) => {
    e.preventDefault()
    if (cardForm.last4.length !== 4) {
      alert(isArabic ? 'يرجى إدخال آخر 4 أرقام من البطاقة' : 'Please enter the last 4 digits of your card.')
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
      setFeedback(isArabic ? 'تم حفظ البطاقة بأمان في قاعدة البيانات!' : 'Card saved securely for checkout!')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to save card')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddBank = async (e) => {
    e.preventDefault()
    if (!bankForm.handle.trim()) {
      alert(isArabic ? 'يرجى إدخال رقم الآيبان IBAN' : 'Please enter your IBAN number.')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await addPaymentMethod({
        type: 'bank',
        bank: bankForm.bank.trim() || 'Qatar National Bank (QNB)',
        handle: bankForm.handle.trim().toUpperCase(),
        app: bankForm.app.trim() || 'Bank Deposit / Wire',
        isDefault: paymentMethods.length === 0,
      })
      if (Array.isArray(res)) setPaymentMethods(res)
      else loadMethods()
      setBankForm({ bank: 'Qatar National Bank (QNB)', handle: '', app: '' })
      setIsAddBankOpen(false)
      setFeedback(isArabic ? 'تم حفظ بيانات الحساب البنكي بنجاح!' : 'Bank account saved successfully!')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to save bank account')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRemove = async (id) => {
    if (!confirm(isArabic ? 'هل أنت متأكد من رغبتك في حذف طريقة الدفع هذه؟' : 'Are you sure you want to remove this payment method?')) return
    try {
      const res = await deletePaymentMethod(id)
      if (Array.isArray(res)) setPaymentMethods(res)
      else setPaymentMethods((prev) => prev.filter((p) => (p._id || p.id) !== id))
      setFeedback(isArabic ? 'تم حذف طريقة الدفع.' : 'Payment method removed.')
      setTimeout(() => setFeedback(''), 3000)
    } catch (err) {
      alert(err.message || 'Failed to remove payment method')
    }
  }

  const cardList = paymentMethods.filter((p) => p.type === 'card' || (!p.type && p.last4))
  const bankList = paymentMethods.filter((p) => p.type === 'bank' || p.type === 'qnb')

  return (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-7 shadow-2xs flex flex-col gap-6">
      {/* Top Header */}
      <div className="pb-4 border-b border-[#f3f4f6]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          {isArabic ? 'طرق الدفع المحفوظة' : 'Saved Payment Methods'}
        </h2>
        <p className="text-[12.5px] text-[#6b7280] mt-0.5">
          {isArabic
            ? 'إدارة البطاقات البنكية القطرية وحسابات بنك قطر الوطني المحفوظة لإتمام الطلب بضغطة زر.'
            : 'Manage your saved bank cards and QNB banking details for fast 1-click checkout in Qatar.'}
        </p>
      </div>

      {feedback && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12.5px] font-medium">
          {feedback}
        </div>
      )}

      {/* Cards Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14.5px] font-bold text-[#111827] flex items-center gap-2">
            <span>{isArabic ? 'البطاقات البنكية' : 'Credit & Debit Cards'}</span>
            <span className="text-[10.5px] font-medium text-[#6b7280]">
              {isArabic ? 'مشفر • متوافق مع PCI-DSS' : 'Encrypted • PCI-DSS Secure'}
            </span>
          </h3>
          <button
            type="button"
            onClick={() => setIsAddCardOpen(true)}
            className="text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
          >
            + {isArabic ? 'إضافة بطاقة جديدة' : 'Add New Card'}
          </button>
        </div>

        {loading ? (
          <div className="py-4 text-center text-gray-500 text-[12.5px] animate-pulse">
            {isArabic ? 'جاري تحميل البطاقات...' : 'Loading cards...'}
          </div>
        ) : cardList.length === 0 ? (
          <div className="p-4 rounded-xl border border-dashed border-gray-300 text-center text-gray-500 text-[12.5px]">
            {isArabic
              ? 'لم تقم بحفظ أي بطاقة دفع بعد. أضف بطاقة ائتمان أو خصم لسهولة إتمام الطلبات.'
              : 'No cards saved yet. Add a credit or debit card for seamless checkout.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cardList.map((card) => {
              const id = card._id || card.id
              return (
                <div
                  key={id}
                  className="rounded-xl border border-[#e5e7eb] p-4 flex flex-col justify-between gap-3 bg-white hover:border-[#dc1414]/30 transition-colors shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[13px] font-bold text-[#111827] block">
                        {card.bank || 'Bank Card'}
                      </span>
                      <span className="text-[11.5px] text-[#6b7280]">
                        {card.cardType || 'Debit Card'} ({card.brand || 'VISA'})
                      </span>
                    </div>
                    {card.isDefault && (
                      <span className="text-[10px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                        {isArabic ? 'افتراضي' : 'Default'}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#f3f4f6]">
                    <span className="font-mono text-[13px] font-extrabold text-[#111827] tracking-wider">
                      •••• •••• •••• {card.last4 || '••••'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(id)}
                      className="text-[11.5px] text-[#dc2626] hover:underline cursor-pointer"
                    >
                      {isArabic ? 'حذف' : 'Delete'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Bank Accounts Section (QNB & GCC Banking) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14.5px] font-bold text-[#111827] flex items-center gap-2">
            <span>{isArabic ? 'الحسابات البنكية (QNB / IBAN)' : 'Bank Transfer Accounts (QNB / IBAN)'}</span>
            <span className="text-[10px] font-black text-[#0f766e] bg-[#f0fdfa] px-2 py-0.5 rounded">
              QATAR
            </span>
          </h3>
          <button
            type="button"
            onClick={() => setIsAddBankOpen(true)}
            className="text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] cursor-pointer"
          >
            + {isArabic ? 'إضافة حساب بنكي' : 'Add Bank Account'}
          </button>
        </div>

        {loading ? (
          <div className="py-4 text-center text-gray-500 text-[12.5px] animate-pulse">
            {isArabic ? 'جاري التحميل...' : 'Loading accounts...'}
          </div>
        ) : bankList.length === 0 ? (
          <div className="p-4 rounded-xl border border-dashed border-gray-300 text-center text-gray-500 text-[12.5px]">
            {isArabic
              ? 'لم تقم بحفظ أي حساب بنكي بعد. أضف رقم الآيبان للاسترداد المالي المباشر أو التحويل البنكي.'
              : 'No bank accounts saved yet. Add your Qatari IBAN for direct refunds and bank deposits.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bankList.map((b) => {
              const id = b._id || b.id
              return (
                <div
                  key={id}
                  className="rounded-xl border border-[#e5e7eb] p-4 flex flex-col justify-between gap-3 bg-white hover:border-[#dc1414]/30 transition-colors shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[13px] font-bold text-[#111827] block">
                        {b.bank || 'Qatar National Bank'}
                      </span>
                      <span className="text-[11.5px] text-[#6b7280]">
                        {b.app || 'Prestige Computers Account'}
                      </span>
                    </div>
                    {b.isDefault && (
                      <span className="text-[10px] font-bold text-[#16a34a] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                        {isArabic ? 'افتراضي' : 'Default'}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#f3f4f6]">
                    <span className="font-mono text-[11px] font-bold text-[#0f766e] tracking-tight truncate max-w-[200px]">
                      {b.handle || 'QA02 QNBA ••••'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(id)}
                      className="text-[11.5px] text-[#dc2626] hover:underline cursor-pointer"
                    >
                      {isArabic ? 'حذف' : 'Delete'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Add Card Modal */}
      {isAddCardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-xl animate-scale-up">
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">
              {isArabic ? 'إضافة بطاقة بنكية' : 'Add Bank Card'}
            </h3>
            <form onSubmit={handleAddCard} className="flex flex-col gap-3 text-[13px]">
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'اسم البنك *' : 'Bank Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isArabic ? 'مثال: QNB، البنك التجاري، بنك الدوحة' : 'e.g. QNB, Commercial Bank, Doha Bank'}
                  value={cardForm.bank}
                  onChange={(e) => setCardForm({ ...cardForm, bank: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#dc1414]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    {isArabic ? 'نوع البطاقة' : 'Card Type'}
                  </label>
                  <select
                    value={cardForm.cardType}
                    onChange={(e) => setCardForm({ ...cardForm, cardType: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none bg-white"
                  >
                    <option value="Debit Card">{isArabic ? 'بطاقة خصم (Debit)' : 'Debit Card'}</option>
                    <option value="Credit Card">{isArabic ? 'بطاقة ائتمان (Credit)' : 'Credit Card'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    {isArabic ? 'الشبكة' : 'Network'}
                  </label>
                  <select
                    value={cardForm.brand}
                    onChange={(e) => setCardForm({ ...cardForm, brand: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none bg-white"
                  >
                    <option value="VISA">VISA</option>
                    <option value="Mastercard">Mastercard</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                    {isArabic ? 'آخر 4 أرقام *' : 'Last 4 Digits *'}
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
                    {isArabic ? 'تاريخ الانتهاء (MM/YY)' : 'Expiry (MM/YY)'}
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
                  className="px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 cursor-pointer"
                >
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-1.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold rounded-lg cursor-pointer"
                >
                  {isSubmitting ? (isArabic ? 'جاري الحفظ...' : 'Saving...') : (isArabic ? 'حفظ البطاقة' : 'Save Card')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Bank Account Modal */}
      {isAddBankOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-xl animate-scale-up">
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">
              {isArabic ? 'إضافة حساب بنكي / آيبان (قطر)' : 'Add Qatar Bank Account / IBAN'}
            </h3>
            <form onSubmit={handleAddBank} className="flex flex-col gap-3 text-[13px]">
              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'البنك القطري *' : 'Bank in Qatar *'}
                </label>
                <select
                  value={bankForm.bank}
                  onChange={(e) => setBankForm({ ...bankForm, bank: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none bg-white"
                >
                  <option value="Qatar National Bank (QNB)">Qatar National Bank (QNB)</option>
                  <option value="Commercial Bank of Qatar (CBQ)">Commercial Bank of Qatar (CBQ)</option>
                  <option value="Qatar Islamic Bank (QIB)">Qatar Islamic Bank (QIB)</option>
                  <option value="Doha Bank">Doha Bank</option>
                  <option value="Masraf Al Rayan">Masraf Al Rayan</option>
                  <option value="Dukhan Bank">Dukhan Bank</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'رقم الآيبان الدولي (IBAN) *' : 'Qatar IBAN (29 Characters) *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="QA00 QNBA 0000 0000 0000 0000 0000 0"
                  value={bankForm.handle}
                  onChange={(e) => setBankForm({ ...bankForm, handle: e.target.value.toUpperCase() })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none font-mono uppercase"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#374151] mb-1">
                  {isArabic ? 'اسم صاحب الحساب' : 'Account Beneficiary Name'}
                </label>
                <input
                  type="text"
                  placeholder={isArabic ? 'مثال: أحمد الكواري' : 'e.g. Ahmed Al-Kuwari'}
                  value={bankForm.app}
                  onChange={(e) => setBankForm({ ...bankForm, app: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddBankOpen(false)}
                  className="px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 cursor-pointer"
                >
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-1.5 bg-[#dc1414] hover:bg-[#b91c1c] text-white font-bold rounded-lg cursor-pointer"
                >
                  {isSubmitting ? (isArabic ? 'جاري الحفظ...' : 'Saving...') : (isArabic ? 'حفظ الحساب' : 'Save Account')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
