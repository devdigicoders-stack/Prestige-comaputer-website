import Home from '../components/home/Home'

export const metadata = {
  title: 'Prestige Computers | Buy & Rent Laptops, Desktops, Gaming PCs London',
  description:
    'A Tiny City Full of Amazing Computers. Explore top brand laptops, custom RTX gaming rigs, and flexible computer rentals in London & UK.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prestige Computers',
    url: 'https://prestigecomputers.co.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prestigecomputers.co.uk/products?search={search_term_string}',
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
