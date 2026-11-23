'use client'

import ProductBreadcrumbs from './ProductBreadcrumbs'
import ProductGallery from './ProductGallery'
import ProductConfigurator from './ProductConfigurator'
import ProductBuyRentSidebar from './ProductBuyRentSidebar'
import ProductTabsSection from './ProductTabsSection'
import ProductRecommendations from './ProductRecommendations'

export default function ProductDetailsView({
  product = {
    id: 'dell-inspiron-15',
    name: 'Dell Inspiron 15 (2025)',
    subtitle: 'Powerful, Reliable & Perfect for Work, Study and Everyday Use',
    basePrice: 52999,
    originalPrice: 59999,
    discount: '12% OFF',
    rating: 4.8,
    reviewCount: 328,
    soldCount: '1,245+ Sold',
    emi: 'QAR 125/month',
    badge: 'Bestseller',
  },
}) {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-14 text-[#111827]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* 1. Breadcrumb Bar */}
        <ProductBreadcrumbs
          category={product.category || 'Laptops'}
          brand={product.brand ? `${product.brand} Computers` : 'Dell Laptops'}
          productName={product.name}
        />

        {/* 2. Top 3-Column Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start mt-1">
          {/* Column 1: Image Gallery & Spec Highlights (col-span-5) */}
          <div className="lg:col-span-5">
            <ProductGallery product={product} badge={product.badge} />
          </div>

          {/* Column 2: Core Info, Specs & Actions (col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-2xs">
            <ProductConfigurator product={product} />
          </div>

          {/* Column 3: Buy / Rent Switch & Offers / Delivery Widget (col-span-3) */}
          <div className="lg:col-span-3">
            <ProductBuyRentSidebar product={product} />
          </div>
        </div>

        {/* 3. Middle Section: Product Tabs (Overview / Specs / Reviews / Q&A) */}
        <div className="mt-8">
          <ProductTabsSection product={product} />
        </div>

        {/* 4. Bottom Section: "You Might Also Like" Carousel */}
        <ProductRecommendations relatedProducts={product.relatedProducts} />
      </div>
    </div>
  )
}