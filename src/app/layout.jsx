import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import RegisterModal from '../components/auth/RegisterModal'
import LoginModal from '../components/auth/LoginModal'
import RouteTransitionLoader from '../components/common/RouteTransitionLoader'
import { StoreProvider } from '../context/StoreContext'

export const metadata = {
  metadataBase: new URL('https://prestigecomputers.co.uk'),
  title: {
    default: 'Prestige Computers — A Tiny City Full of Amazing Computers',
    template: '%s | Prestige Computers',
  },
  description:
    'Buy or rent high-performance laptops, custom RTX gaming PCs, workstations, and computer accessories with flexible daily, weekly, and monthly rental plans. Fast UK delivery.',
  keywords: [
    'buy laptop uk',
    'rent a computer',
    'computer rental london',
    'custom gaming pcs',
    'workstations london',
    'macbook rental',
    'prestige computers',
    'pcs computers',
  ],
  authors: [{ name: 'Prestige Computers' }],
  creator: 'Prestige Computers',
  publisher: 'Prestige Computers',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prestige Computers — Buy, Rent & Upgrade High-Performance Hardware',
    description:
      'Explore certified laptops, custom gaming rigs, workstations, and flexible rental plans across the UK.',
    url: 'https://prestigecomputers.co.uk',
    siteName: 'Prestige Computers',
    images: [
      {
        url: '/banner/product.png',
        width: 1200,
        height: 630,
        alt: 'Prestige Computers Storefront',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prestige Computers — Buy & Rent High-Performance Computers',
    description:
      'Buy or rent latest laptops, custom gaming PCs, and components with flexible plans and official UK warranty.',
    images: ['/banner/product.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ComputerStore',
    name: 'Prestige Computers',
    alternateName: 'PCS',
    url: 'https://prestigecomputers.co.uk',
    logo: 'https://prestigecomputers.co.uk/logo.png',
    image: 'https://prestigecomputers.co.uk/banner/product.png',
    description:
      'Leading UK computer retailer and rental provider offering high-performance laptops, custom desktop PCs, gaming rigs, and enterprise workstation solutions.',
    telephone: '+44 20 7946 0958',
    email: 'support@prestigecomputers.co.uk',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.5074',
      longitude: '-0.1278',
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
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
      'https://youtube.com',
      'https://linkedin.com',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-white text-[#111827] font-sans antialiased overflow-x-clip"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <StoreProvider>
          <RouteTransitionLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <RegisterModal />
          <LoginModal />
        </StoreProvider>
      </body>
    </html>
  )
}
