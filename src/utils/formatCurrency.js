/**
 * Format currency in Qatari Riyal (QAR / ر.ق)
 * English: "QAR 2,499"
 * Arabic: "2,499 ر.ق"
 */
export function formatCurrency(amount, isArabic = false) {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return isArabic ? '0 ر.ق' : 'QAR 0'
  }
  const formatted = Number(amount).toLocaleString('en-US', {
    maximumFractionDigits: 0,
  })
  return isArabic ? `${formatted} ر.ق` : `QAR ${formatted}`
}

export default formatCurrency
