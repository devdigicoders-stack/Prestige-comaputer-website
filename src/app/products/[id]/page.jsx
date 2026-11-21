import ProductDetailsView from '../../../components/product-details/ProductDetailsView'
import { getProductByIdOrSlug } from '../../../services/productApi'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const id = resolvedParams?.id || 'dell-inspiron-15'
  const res = await getProductByIdOrSlug(id).catch(() => ({ product: null }))
  const matched = res?.product

  const productName = matched?.name || matched?.title || 'Prestige Computers'
  const subtitle =
    matched?.subtitle ||
    'Buy high performance laptops, desktops, and gaming PCs with warranty.'

  return {
    title: `${productName} | Buy & Rent Online | Prestige Computers`,
    description: subtitle,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${productName} - Prestige Computers`,
      description: subtitle,
      url: `https://pcsdoha.net/products/${id}`,
    },
  }
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params
  const id = resolvedParams?.id || 'dell-inspiron-15'
  const res = await getProductByIdOrSlug(id).catch(() => ({ product: null, relatedProducts: [] }))
  const matched = res?.product

  // Fallback defaults if database isn't ready
  const productData = {
    id: matched?.slug || id,
    _id: matched?._id,
    name: matched?.name || matched?.title || 'Dell Inspiron 15 (2025)',
    subtitle:
      matched?.subtitle ||
      'Powerful, Reliable & Perfect for Work, Study and Everyday Use',
    brand: matched?.brand || 'Dell',
    category: matched?.categoryName || matched?.category?.name || 'Laptops',
    categorySlug: matched?.categorySlug || 'laptops',
    basePrice: matched?.price || 52999,
    price: matched?.price || 52999,
    originalPrice:
      matched?.originalPrice ||
      matched?.comparePrice ||
      Math.round((matched?.price || 52999) * 1.13),
    discount: matched?.discount || '12% OFF',
    rating: matched?.rating || 4.8,
    reviewCount: matched?.reviewCount || matched?.numReviews || 328,
    soldCount: matched?.soldCount || '1,245+ Sold',
    emi:
      matched?.emi ||
      `₹${Math.round((matched?.price || 52999) / 24).toLocaleString('en-IN')}/month`,
    type: matched?.type || 'Buy & Rent',
    rentPrice:
      matched?.rentPrice ||
      (matched?.rentPerMonth ? `₹${Number(matched.rentPerMonth).toLocaleString('en-IN')}/mo` : ''),
    rentPerMonth: Number(matched?.rentPerMonth) || 0,
    deposit: Number(matched?.deposit) || 0,
    stock: matched?.stock !== undefined ? matched.stock : 15,
    lowStockThreshold: matched?.lowStockThreshold ?? 5,
    outOfStockThreshold: matched?.outOfStockThreshold ?? 0,
    inStock:
      matched?.inStock !== undefined
        ? matched.inStock
        : (matched?.stock || 0) > (matched?.outOfStockThreshold ?? 0),
    status: matched?.status || 'Active',
    badge: matched?.badge || 'Bestseller',
    badgeType: matched?.badgeType || 'bestseller',
    image: matched?.image || `/uploads/${matched?.slug || id || 'dell-inspiron-15'}.jpg`,
    images: matched?.images?.length
      ? matched.images
      : [matched?.image || `/uploads/${matched?.slug || id || 'dell-inspiron-15'}.jpg`],
    imageVariant: matched?.imageVariant || 'dell-inspiron',
    specs: matched?.specs || {
      cpu: '13th Gen Intel Core i5-1335U (10-Core, up to 4.6GHz)',
      processor: '13th Gen Intel Core i5-1335U',
      ram: '16GB DDR5 4800MHz',
      storage: '512GB M.2 PCIe NVMe SSD',
      display: '15.6" FHD (1920x1080) 120Hz Anti-Glare WVA 250 nits',
      graphics: 'Intel Iris Xe Graphics',
      os: 'Windows 11 Home + MS Office 2021',
      warranty: '1 Year Dell India Onsite Warranty',
    },
    customSpecs: matched?.customSpecs || [],
    description: matched?.description || '',
    relatedProducts: res?.relatedProducts || [],
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productData.name,
    description: productData.subtitle,
    brand: {
      '@type': 'Brand',
      name: productData.brand,
    },
    offers: {
      '@type': 'Offer',
      price: productData.basePrice,
      priceCurrency: 'INR',
      availability:
        productData.inStock &&
        productData.stock > productData.outOfStockThreshold
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Prestige Computers',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: productData.rating,
      reviewCount: productData.reviewCount,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailsView product={productData} />
    </>
  )
}