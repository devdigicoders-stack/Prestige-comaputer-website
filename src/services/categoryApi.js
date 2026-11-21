export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Resolve full category image URL (handles uploaded files in /uploads/)
 */
export function getCategoryImageUrl(imagePath) {
  if (!imagePath) return '';
  if (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://') ||
    imagePath.startsWith('data:')
  ) {
    return imagePath;
  }
  return `${BACKEND_URL}${imagePath}`;
}

/**
 * Fetch active categories from backend REST API
 */
export async function getActiveCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`, {
      cache: 'no-store', // Always fresh for dynamic updates from admin
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const result = await res.json();
    return result.data || [];
  } catch (err) {
    console.warn('⚠️ Category API fetch note:', err.message);
    return null;
  }
}
