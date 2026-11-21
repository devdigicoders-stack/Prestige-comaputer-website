import AboutView from '../../components/about/AboutView'
import companyInfo from '../../data/companyInfo'

export const metadata = {
  title: 'About Us | Prestige Computers (PCS Doha) — Established 2020',
  description:
    'Learn about Prestige Computers (Prestige Computer Services / PCS Doha), Qatar-based computer and IT equipment supplier established in 2020 at Al-Mirqab Mall, Doha.',
  keywords: [
    'about prestige computers',
    'prestige computer services',
    'pcs doha',
    'computer store doha qatar',
    'al mirqab mall computer shop',
    'gaming laptops doha',
    'computer rental qatar',
    'it equipment supplier qatar',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Prestige Computers (PCS Doha)',
    description:
      'Qatar-based computer and IT equipment supplier established in 2020 at Al-Mirqab Mall, Doha. Serving individual, gaming, and enterprise IT requirements.',
    url: 'https://pcsdoha.net/about',
    siteName: 'Prestige Computers',
    images: ['/banner/about.png'],
    type: 'website',
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Prestige Computers (PCS Doha)',
    description: companyInfo.about.paragraph1,
    url: 'https://pcsdoha.net/about',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: companyInfo.businessName,
      alternateName: companyInfo.publicName,
      foundingDate: '2020',
      url: 'https://pcsdoha.net',
      logo: 'https://pcsdoha.net/logo.png',
      telephone: companyInfo.phones.primary,
      email: companyInfo.emails.general,
      address: {
        '@type': 'PostalAddress',
        streetAddress: companyInfo.location.building + ', ' + companyInfo.location.street,
        addressLocality: companyInfo.location.city,
        addressCountry: 'QA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: companyInfo.location.latitude,
        longitude: companyInfo.location.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '10:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Friday'],
          opens: '14:30',
          closes: '22:30',
        },
      ],
      sameAs: [
        companyInfo.socialLinks.instagram,
        companyInfo.socialLinks.facebook,
        companyInfo.socialLinks.tiktok,
        companyInfo.socialLinks.googleMaps,
      ],
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
