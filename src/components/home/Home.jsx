import HeroBanner from './components/HeroBanner'
import CorePillarsShowcase from './components/CorePillarsShowcase'
import WeeklyFlyersSection from './components/WeeklyFlyersSection'
import CategoryStrip from './components/CategoryStrip'
import FeaturedProducts from './components/FeaturedProducts'
import TrustStrip from './components/TrustStrip'
import DealsAndRentals from './components/DealsAndRentals'
import TopBrands from './components/TopBrands'
import Testimonials from './components/Testimonials'
import LatestBlogs from './components/LatestBlogs'

export default function Home({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <>
      {/* 1. Hero Promotional Banner & Division Highlights */}
      <HeroBanner />

      {/* 2. Three Core Pillars Division Showcase (Gaming, Business, Pre-Owned) */}
      <CorePillarsShowcase />

      {/* 3. Interactive Digital Weekly Fliers Section */}
      <WeeklyFlyersSection />

      {/* 4. Quick Category Icons Carousel */}
      <CategoryStrip />

      {/* 5. Featured Products & Hot Deals (WoodMart + iConnect Cards in QAR) */}
      <FeaturedProducts
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
      />

      {/* 6. Physical Showroom & Partner Trust Strip */}
      <TrustStrip />

      {/* 7. Corporate & Personal IT Equipment Leasing */}
      <DealsAndRentals />

      {/* 8. Authorized Partner Brands Showcase (Dell, HP, Lenovo, ASUS, MSI, Apple) */}
      <TopBrands />

      {/* 9. Verified Customer Reviews */}
      <Testimonials />

      {/* 10. Tech Guides & Buying Advice */}
      <LatestBlogs />
    </>
  )
}
