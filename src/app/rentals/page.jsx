import RentalsView from '../../components/rentals/RentalsView'

export const metadata = {
  title: 'Rent On — High-Performance Computers & Laptops on Rent | Prestige Computers',
  description:
    'Rent high-performance laptops, desktops, workstations, and accessories on flexible rental plans in Doha, Qatar. Best rental rates with quick delivery and expert support.',
  alternates: {
    canonical: '/rentals',
  },
  openGraph: {
    title: 'Rent On — Computer & Laptop Rentals | Prestige Computers',
    description:
      'High-performance laptops, desktops & workstations on flexible rental plans in Doha, Qatar.',
    url: 'https://pcsdoha.net/rentals',
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
      name: 'Prestige Computers (PCS Doha)',
      url: 'https://pcsdoha.net',
    },
    areaServed: 'QA',
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
