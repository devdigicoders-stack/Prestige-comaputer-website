import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import RegisterModal from '../components/auth/RegisterModal'
import LoginModal from '../components/auth/LoginModal'
import CartToastNotification from '../components/common/CartToastNotification'
import RouteTransitionLoader from '../components/common/RouteTransitionLoader'
import GlobalRentalModal from '../components/rentals/GlobalRentalModal'
import { StoreProvider } from '../context/StoreContext'
import { LanguageProvider } from '../context/LanguageContext'

export const metadata = {
  metadataBase: new URL('https://pcsdoha.net'),
  title: {
    default: 'Prestige Computers — Computer Retailer & IT Solutions | Doha, Qatar',
    template: '%s | Prestige Computers',
  },
  description:
    'Prestige Computers (PCS Doha) at Al-Mirqab Mall, Doha. Brand-new systems, certified genuine pre-owned devices, custom gaming PCs, workstations, and B2B equipment rentals.',
  keywords: [
    'buy laptop qatar',
    'computer store doha',
    'custom gaming pc qatar',
    'workstations doha',
    'laptop rental doha',
    'prestige computers qatar',
    'pcs doha',
    'al mirqab mall computers',
  ],
  authors: [{ name: 'Prestige Computers' }],
  creator: 'Prestige Computers',
  publisher: 'Prestige Computers',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prestige Computers (PCS Doha) — Computer Retailer & IT Solutions',
    description:
      'Explore certified laptops, custom gaming rigs, workstations, and flexible rental plans in Doha, Qatar.',
    url: 'https://pcsdoha.net',
    siteName: 'Prestige Computers',
    images: [
      {
        url: '/banner/product.png',
        width: 1200,
        height: 630,
        alt: 'Prestige Computers Storefront',
      },
    ],
    locale: 'en_QA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prestige Computers — Buy & Rent High-Performance Computers',
    description:
      'Brand-new systems, certified pre-owned devices, and custom PC builds at Al-Mirqab Mall, Doha, Qatar.',
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
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ComputerStore',
    name: 'Prestige Computers',
    alternateName: 'Prestige Computer Services (PCS Doha)',
    url: 'https://pcsdoha.net',
    logo: 'https://pcsdoha.net/logo.png',
    image: 'https://pcsdoha.net/banner/product.png',
    description:
      'Qatar-based computer and IT equipment supplier established in 2020 at Al-Mirqab Mall, Doha. Brand-new systems, certified pre-owned devices, custom PCs, and B2B leasing.',
    telephone: '+974 4145 3868',
    email: 'info@pcsdoha.net',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tower I, 2nd Floor, Office No 201, Al-Mirqab Mall, Al Mirqab Al Jadeed St',
      addressLocality: 'Doha',
      addressCountry: 'QA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.281',
      longitude: '51.503',
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
    sameAs: [
      'https://www.instagram.com/prestigecomputers.qa/',
      'https://www.facebook.com/pcsdoha/',
      'https://www.tiktok.com/@prestigecomputers.qa',
      'https://wa.me/97466919155',
      'https://www.google.com/maps/place/?q=place_id:ChIJE2au-QvRRT4R5xkwxaUf4bo',
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
          <LanguageProvider>
            <RouteTransitionLoader />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <RegisterModal />
            <LoginModal />
            <CartToastNotification />
            <GlobalRentalModal />
          </LanguageProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
