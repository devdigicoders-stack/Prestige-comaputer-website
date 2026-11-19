import AboutView from '../../components/about/AboutView'

export const metadata = {
  title: 'About Us | Prestige Computers (PCS) — A Tiny City Full of Amazing Computers',
  description:
    'Learn about Prestige Computers (PCS), your trusted partner for high-performance laptops, custom gaming PCs, workstations, accessories, and flexible computer rentals.',
  keywords: [
    'about prestige computers',
    'prestige computers pcs',
    'computer store london',
    'pc rental company',
    'custom gaming pcs uk',
    'laptop supplier',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Prestige Computers (PCS)',
    description:
      'Learn about our journey, 10+ years of excellence, 50,000+ happy customers, and commitment to delivering the best computers.',
    url: 'https://prestigecomputers.co.uk/about',
    siteName: 'Prestige Computers',
    images: ['/banner/about.png'],
    type: 'website',
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Prestige Computers (PCS)',
    description:
      'Prestige Computers (PCS) is a complete IT solutions provider offering a wide range of laptops, desktops, workstations, accessories, components and rental solutions.',
    url: 'https://prestigecomputers.co.uk/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Prestige Computers',
      alternateName: 'PCS',
      url: 'https://prestigecomputers.co.uk',
      logo: 'https://prestigecomputers.co.uk/logo.png',
      telephone: '+44 20 7946 0958',
      email: 'support@prestigecomputers.co.uk',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutView />
    </>
  )
}
