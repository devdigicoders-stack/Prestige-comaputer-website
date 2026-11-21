export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Validate coupon code against live backend database
 * @param {Object} params { code, cartTotal, deliveryCharge }
 */
export async function validateCouponApi({ code, cartTotal = 0, deliveryCharge = 0 }) {
  const res = await fetch(`${API_URL}/coupons/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: code.trim().toUpperCase(),
      cartTotal: Number(cartTotal) || 0,
      deliveryCharge: Number(deliveryCharge) || 0,
    }),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg =
      json.message ||
      json.error ||
      `Invalid coupon code (HTTP ${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data;
}
