'use client'

import { useState } from 'react'
import { submitEnquiry } from '../../services/enquiryApi'
import { useLanguage } from '../../context/LanguageContext'

export default function ContactFormCard() {
  const { isRtl } = useLanguage()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.fullName.trim()) {
      setErrorMessage(isRtl ? 'يرجى إدخال اسمك بالكامل.' : 'Please enter your full name.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage(isRtl ? 'يرجى إدخال بريد إلكتروني صالح.' : 'Please enter a valid email address.')
      return
    }
    if (!formData.phone.trim()) {
      setErrorMessage(isRtl ? 'يرجى إدخال رقم الهاتف للتواصل.' : 'Please enter your contact phone number.')
      return
    }
    if (!formData.subject.trim()) {
      setErrorMessage(isRtl ? 'يرجى كتابة موضوع الرسالة.' : 'Please enter the subject of your message.')
      return
    }
    if (!formData.message.trim()) {
      setErrorMessage(isRtl ? 'يرجى كتابة نص رسالتك.' : 'Please write your message.')
      return
    }

    try {
      setIsSubmitting(true)
      setErrorMessage('')
      await submitEnquiry(formData)
      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: 'General Inquiry',
        subject: '',
        message: '',
      })
    } catch (err) {
      setErrorMessage(err.message || (isRtl ? 'تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال بنا.' : 'Failed to submit your message. Please try again or call us directly.'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e5e7eb] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -rotate-45 translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#111827] leading-tight">
              {isRtl ? (
                <>أرسل لنا <span className="text-[#dc1414]">رسالة</span></>
              ) : (
                <>Send Us a <span className="text-[#dc1414]">Message</span></>
              )}
            </h2>
            <p className="mt-1 text-[12.5px] sm:text-[13px] text-[#6b7280]">
              {isRtl
                ? 'املأ النموذج وسيقوم فريقنا بالرد والتواصل معك خلال وقت قصير.'
                : 'Fill out the form below and our team will get back to you shortly.'}
            </p>
          </div>
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] flex items-start gap-3 animate-fade-in">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div className="text-[13px]">
              <strong className="font-bold">{isRtl ? 'شكراً لك!' : 'Thank you!'}</strong>{' '}
              {isRtl
                ? 'تم إرسال رسالتك بنجاح. سيتواصل معك أحد المتخصصين لدينا في غضون ساعتين.'
                : 'Your message has been sent successfully. One of our specialists will get back to you within 2 hours.'}
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-[12.5px] font-medium flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* The Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Full Name & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-[12.5px] font-semibold text-[#374151] mb-1.5"
              >
                {isRtl ? 'الاسم الكامل' : 'Full Name'} <span className="text-[#dc1414]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 rtl:left-auto rtl:right-0 rtl:pr-3 flex items-center pointer-events-none text-[#9ca3af]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={isRtl ? 'أدخل اسمك بالكامل' : 'Enter your name'}
                  className="w-full pl-9 pr-3.5 rtl:pr-9 rtl:pl-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[13px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[12.5px] font-semibold text-[#374151] mb-1.5"
              >
                {isRtl ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-[#dc1414]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 rtl:left-auto rtl:right-0 rtl:pr-3 flex items-center pointer-events-none text-[#9ca3af]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  className="w-full pl-9 pr-3.5 rtl:pr-9 rtl:pl-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[13px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone Number & Inquiry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-[12.5px] font-semibold text-[#374151] mb-1.5"
              >
                {isRtl ? 'رقم الهاتف' : 'Phone Number'} <span className="text-[#dc1414]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 rtl:left-auto rtl:right-0 rtl:pr-3 flex items-center pointer-events-none text-[#9ca3af]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={isRtl ? '+974 ...' : 'Enter your phone number'}
                  className="w-full pl-9 pr-3.5 rtl:pr-9 rtl:pl-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[13px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiryType"
                className="block text-[12.5px] font-semibold text-[#374151] mb-1.5"
              >
                {isRtl ? 'نوع الاستفسار' : 'Inquiry Type'} <span className="text-[#dc1414]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 rtl:left-auto rtl:right-0 rtl:pr-3 flex items-center pointer-events-none text-[#9ca3af]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full pl-9 pr-8 rtl:pr-9 rtl:pl-8 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[13px] text-[#111827] outline-none transition-all bg-white cursor-pointer appearance-none"
                >
                  <option value="General Inquiry">{isRtl ? 'استفسار عام' : 'General Inquiry'}</option>
                  <option value="Product Purchase">{isRtl ? 'شراء منتج' : 'Product Purchase'}</option>
                  <option value="Computer & Laptop Rental">{isRtl ? 'تأجير لابتوب وكمبيوتر' : 'Computer & Laptop Rental'}</option>
                  <option value="Bulk & Corporate Orders">{isRtl ? 'طلبات الشركات والجملة' : 'Bulk & Corporate Orders'}</option>
                  <option value="Technical Support">{isRtl ? 'دعم فني وصيانة' : 'Technical Support'}</option>
                  <option value="Warranty & Repair">{isRtl ? 'الضمان والإصلاح' : 'Warranty & Repair'}</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 rtl:right-auto rtl:left-0 rtl:pl-3 flex items-center pointer-events-none text-[#9ca3af]">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-[12.5px] font-semibold text-[#374151] mb-1.5"
            >
              {isRtl ? 'الموضوع' : 'Subject'} <span className="text-[#dc1414]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 rtl:left-auto rtl:right-0 rtl:pr-3 flex items-center pointer-events-none text-[#9ca3af]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder={isRtl ? 'أدخل موضوع الرسالة' : 'Enter subject'}
                className="w-full pl-9 pr-3.5 rtl:pr-9 rtl:pl-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[13px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 4: Your Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[12.5px] font-semibold text-[#374151] mb-1.5"
            >
              {isRtl ? 'نص الرسالة' : 'Your Message'} <span className="text-[#dc1414]">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 pointer-events-none text-[#9ca3af]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={isRtl ? 'اكتب تفاصيل رسالتك أو استفسارك هنا...' : 'Write your message here...'}
                className="w-full pl-9 pr-3.5 rtl:pr-9 rtl:pl-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#dc1414] focus:ring-1 focus:ring-[#dc1414] text-[13px] text-[#111827] placeholder-[#9ca3af] outline-none transition-all resize-y"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e11414] to-[#b80808] hover:from-[#eb1a1a] hover:to-[#9f0606] active:scale-[0.99] text-white text-[14px] font-bold shadow-[0_6px_20px_rgba(220,16,16,0.35)] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 -rotate-45 rtl:rotate-135"
                aria-hidden="true"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              <span>
                {isSubmitting
                  ? (isRtl ? 'جاري إرسال الرسالة...' : 'Sending Message...')
                  : (isRtl ? 'إرسال الرسالة' : 'Send Message')}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
