export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export async function getBlogs(params = {}) {
  try {
    const q = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => { if (v !== undefined && v !== '') q.append(k, v); });
    const res = await fetch(`${API_URL}/blogs?${q}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data || { blogs: [], total: 0, categories: [] };
  } catch {
    return { blogs: [], total: 0, categories: [] };
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/blogs/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch {
    return null;
  }
}
