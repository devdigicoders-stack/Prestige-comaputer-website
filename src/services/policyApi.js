export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Fetch all published CMS policies & info pages
 */
export async function getAllPolicies() {
  try {
    const res = await fetch(`${API_URL}/policies`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) return [];
    return json.data || [];
  } catch (err) {
    console.warn('Failed to fetch policies:', err.message);
    return [];
  }
}

/**
 * Fetch single CMS policy by slug (e.g. 'terms', 'privacy', 'policies', 'refund-policy')
 */
export async function getPolicyBySlug(slug) {
  try {
    const cleanSlug = encodeURIComponent(String(slug).toLowerCase().trim());
    const res = await fetch(`${API_URL}/policies/${cleanSlug}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) return null;
    return json.data || null;
  } catch (err) {
    console.warn(`Failed to fetch policy '${slug}':`, err.message);
    return null;
  }
}
