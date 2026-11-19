import FaqView from '../../components/faq/FaqView'

export const metadata = {
  title: 'Help Center & FAQs | Prestige Computers',
  description:
    'Frequently asked questions about buying laptops, gaming PC assembly, computer rentals, delivery times, warranty, and payment options at Prestige Computers.',
  alternates: {
    canonical: '/faq',
  },
}

export default function FaqPage() {
  return <FaqView />
}
