export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

function getAuthHeaders() {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('pcs_token') || localStorage.getItem('token')
      : null;
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

/**
 * Fetch approved reviews for a specific product
 */
export async function getProductReviews(productId, { page = 1, limit = 10, sort = '-createdAt' } = {}) {
  try {
    const params = new URLSearchParams({ page, limit, sort });
    const res = await fetch(`${API_URL}/reviews/product/${productId}?${params}`, {
      cache: 'no-store',
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) return { reviews: [], total: 0, pages: 0, ratingBreakdown: [] };
    return json.data;
  } catch {
    return { reviews: [], total: 0, pages: 0, ratingBreakdown: [] };
  }
}

/**
 * Submit a new review (authenticated or guest)
 */
export async function submitReview({ productId, rating, title, body, userName, userEmail }) {
  const headers = getAuthHeaders();
  const res = await fetch(`${API_URL}/reviews`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ productId, rating, title, body, userName, userEmail }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || json.error || 'Failed to submit review');
  }
  return json;
}

/**
 * Fetch featured testimonials for homepage
 */
export async function getTestimonials(limit = 6) {
  try {
    const res = await fetch(`${API_URL}/reviews/testimonials?limit=${limit}`, {
      cache: 'no-store',
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) return [];
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Mark a review as helpful
 */
export async function markReviewHelpful(reviewId) {
  const res = await fetch(`${API_URL}/reviews/${reviewId}/helpful`, { method: 'PATCH' });
  const json = await res.json().catch(() => ({}));
  return json.data;
}
