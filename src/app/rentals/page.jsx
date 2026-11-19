import RentalsView from '../../components/rentals/RentalsView'

export const metadata = {
  title: 'Rent On — High-Performance Computers & Laptops on Rent | Prestige Computers',
  description:
    'Rent high-performance laptops, desktops, workstations, and accessories on flexible rental plans. Best rental rates starting from ₹1,299/month with quick delivery and expert support.',
  alternates: {
    canonical: '/rentals',
  },
  openGraph: {
    title: 'Rent On — Computer & Laptop Rentals | Prestige Computers',
    description:
      'High-performance laptops, desktops & workstations on flexible rental plans. Daily, weekly & monthly subscriptions with zero hassle.',
    url: 'https://prestigecomputers.co.uk/rentals',
    images: ['/banner/rent.png'],
  },
}

export default function RentalsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Computer & Laptop Rental Service',
    provider: {
      '@type': 'ComputerStore',
      name: 'Prestige Computers',
      url: 'https://prestigecomputers.co.uk',
    },
    areaServed: 'IN',
    serviceType: 'Computer Rental',
    offers: [
      {
        '@type': 'Offer',
        name: 'Business Laptop Monthly Plan',
        price: '1299',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        name: 'Office Desktop Monthly Plan',
        price: '1799',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        name: 'Workstation Monthly Plan',
        price: '3999',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        name: 'Creator Laptop Monthly Plan',
        price: '5999',
        priceCurrency: 'INR',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RentalsView />
    </>
  )
}
