import ContactView from '../../components/contact/ContactView'

export const metadata = {
  title: 'Contact Us | Prestige Computers (PCS) — Customer Support & Sales',
  description:
    'Get in touch with Prestige Computers (PCS) for computer sales, flexible laptop rentals, custom gaming PC builds, and warranty support in Civil Lines, Kanpur. Call +91 98765 43210.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Prestige Computers (PCS)',
    description:
      'Have questions, need a quote, or want to rent a device? Connect with our team via phone, WhatsApp, email, or visit our store.',
    url: 'https://prestigecomputers.co.uk/contact',
    images: ['/banner/contct.png'],
  },
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Prestige Computers (PCS)',
    description:
      'Reach out to Prestige Computers for laptop sales, computer rentals, and expert technical support.',
    url: 'https://prestigecomputers.co.uk/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Prestige Computers (PCS)',
      telephone: '+91 98765 43210',
      email: 'support@prestigecomputers.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 12, IT Market, Civil Lines',
        addressLocality: 'Kanpur',
        addressRegion: 'Uttar Pradesh',
        postalCode: '208001',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '10:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '11:00',
          closes: '18:00',
        },
      ],
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
