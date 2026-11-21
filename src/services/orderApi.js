export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Place a new customer order (supports guest and authenticated checkout)
 */
export async function createOrder(orderData) {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('pcs_token') || localStorage.getItem('token')
      : null;

  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify(orderData),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || `Failed to place order (${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data;
}

/**
 * Public Order Tracking by Order ID or Tracking Number
 */
export async function trackOrder(orderNumber) {
  if (!orderNumber) {
    throw new Error('Order number is required');
  }

  const cleanNum = encodeURIComponent(orderNumber.trim());
  const res = await fetch(`${API_URL}/orders/track/${cleanNum}`, {
    cache: 'no-store',
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || `Order not found (${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data;
}

/**
 * Get logged-in user's past orders
 */
export async function getMyOrders() {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('pcs_token') || localStorage.getItem('token')
      : null;

  if (!token) return [];

  const res = await fetch(`${API_URL}/orders/my-orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) return [];
  return json.data || [];
}
