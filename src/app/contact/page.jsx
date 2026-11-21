import ContactView from '../../components/contact/ContactView'
import companyInfo from '../../data/companyInfo'

export const metadata = {
  title: 'Contact Us | Prestige Computers (PCS Doha) — Showroom & B2B Inquiries',
  description:
    'Contact Prestige Computers (PCS Doha) at Al-Mirqab Mall, Doha, Qatar for retail laptops, custom gaming PCs, workstations, and B2B equipment rentals. Call +974 4145 3868 or WhatsApp +974 6691 9155.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Prestige Computers (PCS Doha)',
    description:
      'Have questions, need a quote, or want to rent or purchase computer equipment? Connect with our Doha team via phone, WhatsApp, email, or visit our showroom.',
    url: 'https://pcsdoha.net/contact',
    images: ['/banner/contct.png'],
  },
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Prestige Computers (PCS Doha)',
    description:
      'Reach out to Prestige Computers for laptop sales, computer rentals, and expert technical support in Doha, Qatar.',
    url: 'https://pcsdoha.net/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: companyInfo.publicName,
      alternateName: 'PCS Doha',
      telephone: companyInfo.phones.primary,
      email: companyInfo.emails.general,
      url: companyInfo.website.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: companyInfo.location.building + ', ' + companyInfo.location.mall,
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
          dayOfWeek: [
            'Saturday',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
          ],
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
      sameAs: Object.values(companyInfo.socialLinks),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactView />
    </>
  )
}
