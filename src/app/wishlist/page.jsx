import WishlistView from '../../components/wishlist/WishlistView'

export const metadata = {
  title: 'My Wishlist | Prestige Computers (PCS)',
  description:
    'Manage your saved laptops, gaming desktops, monitors, and IT accessories with Prestige Computers. Fast checkout, price alerts, and exclusive member deals.',
  alternates: {
    canonical: '/wishlist',
  },
  openGraph: {
    title: 'My Wishlist | Prestige Computers',
    description:
      'Manage your saved laptops, gaming desktops, monitors, and IT accessories with Prestige Computers.',
    url: 'https://prestigecomputers.in/wishlist',
    siteName: 'Prestige Computers',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function WishlistPage() {
  return <WishlistView />
}
