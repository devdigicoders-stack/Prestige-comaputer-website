import CategoryStrip from './components/CategoryStrip'
import DealsAndRentals from './components/DealsAndRentals'
import FeaturedProducts from './components/FeaturedProducts'
import HeroBanner from './components/HeroBanner'
import LatestBlogs from './components/LatestBlogs'
import NewsletterBanner from './components/NewsletterBanner'
import PromoOffers from './components/PromoOffers'
import Testimonials from './components/Testimonials'
import TopBrands from './components/TopBrands'
import TrustStrip from './components/TrustStrip'

export default function Home({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <>
      <HeroBanner />
      <CategoryStrip />
      <PromoOffers />
      <FeaturedProducts
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
      />
      <TrustStrip />
      <DealsAndRentals />
      <TopBrands />
      <Testimonials />
      <LatestBlogs />
      <NewsletterBanner />
    </>
  )
}
