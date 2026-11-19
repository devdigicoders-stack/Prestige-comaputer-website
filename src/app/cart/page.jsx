import CartView from '../../components/cart/CartView'

export const metadata = {
  title: 'Shopping Cart | Prestige Computers (PCS)',
  description:
    'Review your saved cart items, customize quantities, apply coupon codes, and proceed to secure checkout with Prestige Computers.',
  alternates: {
    canonical: '/cart',
  },
  openGraph: {
    title: 'Shopping Cart | Prestige Computers',
    description:
      'Review your shopping cart items, calculate delivery and discounts, and checkout securely with Prestige Computers.',
    url: 'https://prestigecomputers.in/cart',
    siteName: 'Prestige Computers',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function CartPage() {
  return <CartView />
}
