import { Suspense } from 'react'
import AllProductsView from '../../components/products/AllProductsView'
import { getProducts } from '../../services/productApi'

export const metadata = {
  title: 'All Products | Buy & Rent Laptops, Desktops, Gaming PCs & Hardware',
  description:
    'Browse our complete range of Laptops, Desktops, Workstations, Accessories, and Components. Buy or rent with flexible plans in Doha, Qatar.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'All Products | Prestige Computers Catalog',
    description:
      'Buy or rent latest brand laptops, RTX gaming PCs, and workstations in Doha, Qatar.',
    url: 'https://pcsdoha.net/products',
    images: ['/banner/product.png'],
  },
}

export default async function ProductsPage() {
  const data = await getProducts({ limit: 50 }).catch(() => ({ products: [] }))
  const products = data?.products || []

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Prestige Computers Catalog',
    description: 'Explore genuine laptops, gaming rigs, and desktops available for purchase and rental.',
    numberOfItems: products.length,
    itemListElement: products.map((prod, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Product',
        name: prod.name || prod.title,
        description: `${prod.brand} ${prod.categoryName || prod.category?.name || 'Computer'}`,
        offers: {
          '@type': 'Offer',
          price: prod.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: prod.rating || 4.8,
          reviewCount: prod.reviewCount || 120,
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Suspense
        fallback={
          <div className="w-full bg-[#f8fafc]/60 min-h-screen py-16 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#dc1414] border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <AllProductsView />
      </Suspense>
    </>
  )
}