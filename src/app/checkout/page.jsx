import CheckoutView from '../../components/checkout/CheckoutView'

export const metadata = {
  title: 'Checkout | Complete Your Order | Prestige Computers',
  description:
    'Secure checkout for genuine laptops, desktops, and accessories. Fast delivery across India with 100% genuine warranty.',
  alternates: {
    canonical: '/checkout',
  },
}

export default function CheckoutPage() {
  return <CheckoutView />
}
