/**
 * Helper to generate official Prestige Computers Qatar WhatsApp inquiry link
 * Hotline: +974 6691 9155
 */
export function getWhatsAppInquiryUrl(product) {
  const phone = '97466919155'
  const name = product?.name || product?.title || 'Computer System'
  const sku = product?.sku ? ` (Ref: ${product.sku})` : ''
  const price = product?.price ? ` at QAR ${Number(product.price).toLocaleString()}` : ''
  const message = `Hello Prestige Computers Doha, I am inquiring about ${name}${sku}${price}. Is this item available in stock at Al-Mirqab Mall showroom?`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export default getWhatsAppInquiryUrl
