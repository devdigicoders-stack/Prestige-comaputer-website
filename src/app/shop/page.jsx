import AllProductsView from '../../components/products/AllProductsView'

export const metadata = {
  title: 'Shop All Products — Prestige Computers',
  description:
    'Browse our complete range of Laptops, Desktops, Workstations, Accessories, and Components. Buy or rent with flexible plans.',
  alternates: {
    canonical: '/products',
  },
}

export default function ShopPage() {
  return <AllProductsView />
}
