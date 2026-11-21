import Home from '../components/home/Home'

export const metadata = {
  title: 'Prestige Computers | Buy & Rent Laptops, Desktops, Gaming PCs Doha Qatar',
  description:
    'Prestige Computers (PCS Doha) at Al-Mirqab Mall. Brand-new systems, certified pre-owned devices, custom gaming rigs, workstations, and computer rentals in Qatar.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prestige Computers',
    alternateName: 'PCS Doha',
    url: 'https://pcsdoha.net',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pcsdoha.net/products?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Home />
    </>
  )
}
