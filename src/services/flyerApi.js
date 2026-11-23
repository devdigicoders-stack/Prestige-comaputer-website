export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export const FALLBACK_FLYERS = [
  {
    _id: 'flyer-gaming',
    id: 'flyer-gaming',
    title: 'Gaming Flier — Issue 01',
    titleAr: 'نشرة أجهزة الألعاب — العدد 01',
    issueNumber: 'Issue 01',
    category: 'Gaming Division',
    categoryAr: 'قسم الألعاب الاحترافية',
    categorySlug: 'gaming',
    dateBadge: 'Valid This Week',
    dateBadgeAr: 'ساري هذا الأسبوع',
    productCount: '48 Products Inside',
    productCountAr: '48 منتج متوفر بالنشرة',
    accentColor: '#dc1414',
    bgBorder: '#fca5a5',
    coverImage: '/banner/product.png',
    link: '/products?category=gaming',
    whatsappMessage: 'Hi Prestige Computers, I want to inquire about the Weekly Gaming Flier deals at Al Mirqab Mall.',
    isActive: true,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isExpired: false,
  },
  {
    _id: 'flyer-business',
    id: 'flyer-business',
    title: 'Business Flier — Issue 02',
    titleAr: 'نشرة أجهزة الشركات — العدد 02',
    issueNumber: 'Issue 02',
    category: 'Business & Workstations',
    categoryAr: 'حلول الأعمال والمؤسسات',
    categorySlug: 'business',
    dateBadge: 'Corporate & Retail',
    dateBadgeAr: 'للشركات والأفراد',
    productCount: '52 Products Inside',
    productCountAr: '52 منتج متوفر بالنشرة',
    accentColor: '#2563eb',
    bgBorder: '#93c5fd',
    coverImage: '/banner/storefront.png',
    link: '/products?category=business',
    whatsappMessage: 'Hi Prestige Computers, I want to inquire about the Weekly Business & Workstations Flier.',
    isActive: true,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isExpired: false,
  },
  {
    _id: 'flyer-preowned',
    id: 'flyer-preowned',
    title: 'Pre-Owned Flier — Issue 03',
    titleAr: 'نشرة الأجهزة المستعملة — العدد 03',
    issueNumber: 'Issue 03',
    category: 'Genuine Certified Deals',
    categoryAr: 'أجهزة مفحوصة ومضمونة',
    categorySlug: 'pre-owned',
    dateBadge: 'Limited Stock',
    dateBadgeAr: 'كميات محدودة',
    productCount: '44 Products Inside',
    productCountAr: '44 منتج متوفر بالنشرة',
    accentColor: '#059669',
    bgBorder: '#6ee7b7',
    coverImage: '/banner/about.png',
    link: '/products?category=pre-owned',
    whatsappMessage: 'Hi Prestige Computers, I am inquiring about the Genuine Pre-Owned Flier inventory.',
    isActive: true,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isExpired: false,
  },
];

/**
 * Check if a flyer has passed its validity / expiry date
 */
export function isFlyerExpired(flier) {
  if (!flier) return false;
  if (flier.isExpired !== undefined) return Boolean(flier.isExpired);
  if (!flier.validUntil) return false;
  return new Date(flier.validUntil) < new Date();
}

/**
 * Resolve full flyer cover image URL
 */
export function getFlyerImageUrl(imagePath) {
  if (!imagePath) return '/banner/product.png';
  if (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://') ||
    imagePath.startsWith('data:')
  ) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  if (cleanPath.startsWith('/uploads/')) {
    return cleanPath;
  }
  return cleanPath;
}

/**
 * Fetch active weekly flyers from backend REST API
 */
export async function getWeeklyFlyers(params = {}) {
  try {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    const res = await fetch(`${API_URL}/flyers?${searchParams.toString()}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const result = await res.json();
    const flyers = result?.data?.flyers;

    if (Array.isArray(flyers) && flyers.length > 0) {
      return flyers;
    }
    return FALLBACK_FLYERS;
  } catch (err) {
    console.warn('⚠️ Flyer API fetch note (using fallback):', err.message);
    return FALLBACK_FLYERS;
  }
}
