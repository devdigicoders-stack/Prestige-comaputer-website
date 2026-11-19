import AllProductsView from '../../components/products/AllProductsView'
import { ALL_PRODUCTS_DATA } from '../../data/allProducts'

export const metadata = {
  title: 'All Products | Buy & Rent Laptops, Desktops, Gaming PCs & Hardware',
  description:
    'Browse our complete range of Laptops, Desktops, Workstations, Accessories, and Components. Buy or rent with flexible plans in London & UK.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'All Products | Prestige Computers Catalog',
    description:
      'Buy or rent latest Dell, HP, Apple, ASUS, Lenovo laptops, RTX gaming PCs, and workstations.',
    url: 'https://prestigecomputers.co.uk/products',
    images: ['/banner/product.png'],
  },
}

export default function ProductsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Prestige Computers Catalog',
    description: 'Explore genuine laptops, gaming rigs, and desktops available for purchase and rental.',
    numberOfItems: ALL_PRODUCTS_DATA.length,
    itemListElement: ALL_PRODUCTS_DATA.map((prod, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Product',
        name: prod.name,
        description: `${prod.brand} ${prod.category}`,
        offers: {
          '@type': 'Offer',
          price: prod.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: prod.rating,
          reviewCount: prod.reviewCount,
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
      <AllProductsView />
    </>
  )
}
