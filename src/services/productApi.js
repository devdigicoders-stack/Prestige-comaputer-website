export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Resolve full product image URL (handles uploaded files in /uploads/ or external URLs)
 */
export function getProductImageUrl(imagePath) {
  if (!imagePath) return '';
  if (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://') ||
    imagePath.startsWith('data:')
  ) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  // If the path is an uploaded asset in /uploads/, return /uploads/filename directly
  // so Next.js static asset serving on port 3000 serves it reliably!
  if (cleanPath.startsWith('/uploads/')) {
    return cleanPath;
  }
  return `${BACKEND_URL}${cleanPath}`;
}

/**
 * Fetch products from backend REST API with rich filtering & sorting
 */
export async function getProducts(params = {}) {
  try {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    const res = await fetch(`${API_URL}/products?${searchParams.toString()}`, {
      cache: 'no-store', // Always fresh for real-time inventory and pricing
    });

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const result = await res.json();
    return result.data || { products: [], pagination: { total: 0 } };
  } catch (err) {
    console.warn('⚠️ Product API fetch note:', err.message);
    return { products: [], pagination: { total: 0 } };
  }
}

/**
 * Fetch featured products for homepage tabs
 */
export async function getFeaturedProducts() {
  try {
    const res = await fetch(`${API_URL}/products/featured`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const result = await res.json();
    return result.data || [];
  } catch (err) {
    console.warn('⚠️ Featured products API fetch note:', err.message);
    return [];
  }
}

/**
 * Fetch single product by ID or Slug with 4 related recommendations
 */
export async function getProductByIdOrSlug(idOrSlug) {
  try {
    const res = await fetch(`${API_URL}/products/${encodeURIComponent(idOrSlug)}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const result = await res.json();
    return result.data || { product: null, relatedProducts: [] };
  } catch (err) {
    console.warn('⚠️ Product details API fetch note:', err.message);
    return { product: null, relatedProducts: [] };
  }
}

const productApi = {
  getProducts,
  getFeaturedProducts,
  getProductByIdOrSlug,
  getProductImageUrl,
  BACKEND_URL,
  API_URL,
};

export default productApi;