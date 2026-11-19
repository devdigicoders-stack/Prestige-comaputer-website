import ProductDetailsView from '../../../components/product-details/ProductDetailsView'
import { ALL_PRODUCTS_DATA } from '../../../data/allProducts'

export async function generateStaticParams() {
  const ids = ALL_PRODUCTS_DATA.map((p) => ({ id: p.id }))
  // Also include default variants
  if (!ids.some((item) => item.id === 'dell-inspiron-15')) {
    ids.push({ id: 'dell-inspiron-15' })
  }
  return ids
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const id = resolvedParams?.id || 'dell-inspiron-15'
  const matched = ALL_PRODUCTS_DATA.find((p) => p.id === id)

  const productName = matched ? matched.name : 'Dell Inspiron 15 (2025)'

  return {
    title: `${productName} | Buy Online | Prestige Computers`,
    description:
      'Buy Dell Inspiron 15 (2025) with 13th Gen Intel Core i5, 16GB RAM, 512GB SSD, Windows 11 at best price. Free delivery and 1 year Dell India warranty.',
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${productName} - Prestige Computers`,
      description:
        'Powerful, Reliable & Perfect for Work, Study and Everyday Use. Flat discounts & No Cost EMI available.',
      url: `https://prestigecomputers.co.uk/products/${id}`,
    },
  }
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params
  const id = resolvedParams?.id || 'dell-inspiron-15'
  const matched = ALL_PRODUCTS_DATA.find((p) => p.id === id)

  // Dell Inspiron 15 product data matching mockup
  const productData = {
    id: id,
    name: matched?.name?.split('(')[0]?.trim() || 'Dell Inspiron 15 (2025)',
    subtitle: 'Powerful, Reliable & Perfect for Work, Study and Everyday Use',
    basePrice: matched?.price || 52999,
    originalPrice: matched?.originalPrice || 59999,
    discount: matched?.discount || '12% OFF',
    rating: matched?.rating || 4.6,
    reviewCount: matched?.reviewCount || 328,
    soldCount: '1,245+ Sold',
    emi: '₹2,542/month',
    badge: 'Bestseller',
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productData.name,
    description: productData.subtitle,
    brand: {
      '@type': 'Brand',
      name: 'Dell',
    },
    offers: {
      '@type': 'Offer',
      price: productData.basePrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
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
