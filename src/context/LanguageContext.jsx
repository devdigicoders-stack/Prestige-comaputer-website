'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  isRtl: false,
  isArabic: false,
  t: (key, fallback) => fallback || key,
})

export const CATEGORY_TRANSLATIONS = {
  all: 'جميع المنتجات',
  laptops: 'أجهزة لابتوب',
  laptop: 'أجهزة لابتوب',
  desktops: 'أجهزة مكتبية',
  desktop: 'أجهزة مكتبية',
  workstations: 'محطات عمل',
  workstation: 'محطات عمل',
  'gaming-pcs': 'تجميعات ألعاب',
  gaming: 'تجميعات ألعاب',
  components: 'قطع غيار',
  monitors: 'شاشات عرض',
  monitor: 'شاشات عرض',
  accessories: 'ملحقات وإكسسوارات',
  networking: 'أجهزة شبكات',
  software: 'برمجيات',
  'all-in-one': 'الكل في واحد',
}

export const TRANSLATIONS = {
  en: {
    // Topbar
    callUs: 'Call Us',
    whatsapp: 'WhatsApp',
    trackOrder: 'Track Order',
    needHelp: 'Need Help?',
    storeLocator: 'Store Locator',
    language: 'Language',
    english: 'English',
    arabic: 'العربية',

    // Header & Search
    searchPlaceholder: 'Search for laptops, desktops, gaming PCs, accessories...',
    searchButton: 'Search',
    loginRegister: 'Login / Register',
    myAccount: 'My Account',
    signUpFree: 'Sign Up Free',
    signedInAs: 'Signed in as',
    myProfile: 'My Profile',
    myRentals: 'My Rentals',
    myOrders: 'My Orders',
    signOut: 'Sign Out',
    wishlist: 'Wishlist',
    cart: 'Cart',
    items: 'items',
    emptyWishlist: 'Your wishlist is empty',
    emptyCart: 'Your cart is empty',

    // Main Navigation
    allCategories: 'All Categories',
    loadingCategories: 'Loading categories...',
    noCategoriesFound: 'No categories found',
    home: 'Home',
    products: 'Products',
    aboutUs: 'About Us',
    rentOn: 'Rent On',
    contactUs: 'Contact Us',
    newBadge: 'New',

    // Common Buttons & Badges
    shopNow: 'Shop Now',
    shopDeals: 'Shop Deals',
    exploreShowroom: 'Explore Our Showroom',
    viewOnGoogleMaps: 'View On Google Maps',
    viewDetails: 'View Details',
    addToCart: 'Add to Cart',
    rentNow: 'Rent Now',
    exploreRentalPlans: 'Explore Rental Plans',
    learnMore: 'Learn More',
    filterBy: 'Filter By',
    sortBy: 'Sort By',
    price: 'Price',
    qar: 'QAR',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    leftInStock: 'Left',
    buyNow: 'Buy Now',
    addToCart: 'Add to Cart',
    added: 'Added!',
    rentFrom: 'Rent from',
    perMonth: '/mo',
    freeDelivery: 'Free Delivery',
    freeShipping: 'Free Delivery in Qatar',
    isoCertifiedBadge: 'ISO-Certified in Qatar',
    readyInventoryBadge: '1,200+ Computers Ready',
    openDaily: 'Open Daily',
    latestBlogsTitle: 'Latest Blogs & Buying Guides',
    viewAllArticles: 'View All Articles',
    topBrandsTitle: 'Authorized Global Brands',
    topBrandsSubtitle: 'Official partners and authorized resellers in Qatar',

    // Home Sections
    featuredCategories: 'Featured Categories',
    dealsOfTheWeek: 'Deals of the Week',
    exclusiveOffers: 'Exclusive Offers on Top Computers',
    offerEndsIn: 'Offer Ends In:',
    days: 'Days',
    hours: 'Hours',
    mins: 'Mins',
    secs: 'Secs',
    featuredProducts: 'Featured Products',
    featuredProductsSubtitle: 'Discover top-rated computers, laptops, and custom builds',
    tabAllProducts: 'All Products',
    tabBestSellers: 'Best Sellers',
    tabNewArrivals: 'New Arrivals',
    tabTopDeals: 'Top Deals',
    tabRentals: 'Rentals',
    viewAllProducts: 'View All Products',
    
    // Promo Cards
    rentCardTitle: 'Rent a Computer',
    rentCardSubtitle: 'Flexible, Affordable & Hassle-Free',
    rentBullet1: 'Short & Long Term Plans',
    rentBullet2: 'Ideal for Businesses & Events',
    rentBullet3: 'Latest Configurations',
    offerCardBadge: 'Limited Time Offer',
    saveUpTo: 'Save Up to',
    saveUpToDesc: 'On Selected Laptops & Accessories',

    // Trust Strip
    trustShippingTitle: 'Free Shipping in Qatar',
    trustShippingSubtitle: 'Fast 1-2 day delivery across Doha & municipalities',
    trustReturnsTitle: 'Prestige Guarantee Returns',
    trustReturnsSubtitle: 'Official return & replacement warranty terms',
    trustWarrantyTitle: '100% Genuine Warranty',
    trustWarrantySubtitle: 'Official manufacturer & PCS warranty included',
    trustPaymentsTitle: 'Secure Payments',
    trustPaymentsSubtitle: 'Cards, Bank Transfer & Showroom POS',
    trustSupportTitle: 'Dedicated Hardware Desk',
    trustSupportSubtitle: 'Phone & WhatsApp technical support',

    // Newsletter
    newsletterTitle: 'Stay Updated with Prestige Computers',
    newsletterSubtitle: 'Get the latest deals, new arrivals, rental offers and tech tips straight to your inbox.',
    subscribe: 'Subscribe',
    enterEmail: 'Enter your email address',
    subscribedSuccess: "You're subscribed! Watch your inbox for tech deals.",

    // Footer
    footerAbout: 'Prestige Computer Services (PCS Doha) is an ISO-certified leading reseller of brand-new and certified pre-owned computers, laptops, gaming rigs, and IT solutions in Qatar since 2020.',
    showroomLocation: 'Tower I, 2nd Floor, Office 201, Al-Mirqab Mall, Al Mirqab Al Jadeed St, Doha, Qatar',
    workingHours: 'Sat–Thu: 10:00 AM – 10:00 PM | Fri: 2:30 PM – 10:30 PM',
    allRightsReserved: 'All rights reserved. Prestige Computers.',
    shopColumn: 'Shop',
    serviceColumn: 'Services',
    supportColumn: 'Support',
    companyColumn: 'Company',

    // Policy & Terms
    customerAgreement: 'I have read and understood the above conditions and agree to them.',
    serviceHoursNote: 'Warranty claims and replacements: Sunday–Thursday, 10:00 AM–5:00 PM only.',
    printPolicy: 'Print Policy',
    legalDesk: 'Legal Desk',
    allDocuments: 'All Legal Documents',
    complianceGrievance: 'Compliance & Grievance',
  },
  ar: {
    // Topbar
    callUs: 'اتصل بنا',
    whatsapp: 'واتساب',
    trackOrder: 'تتبع طلبك',
    needHelp: 'هل تحتاج مساعدة؟',
    storeLocator: 'مواقع المتاجر',
    language: 'اللغة',
    english: 'English',
    arabic: 'العربية',

    // Header & Search
    searchPlaceholder: 'ابحث عن أجهزة الكمبيوتر المحمولة، التجميعات، المعالجات، الملحقات...',
    searchButton: 'بحث',
    loginRegister: 'تسجيل الدخول / إنشاء حساب',
    myAccount: 'حسابي',
    signUpFree: 'سجل مجاناً',
    signedInAs: 'تم تسجيل الدخول باسم',
    myProfile: 'ملفي الشخصي',
    myRentals: 'إيجاراتي',
    myOrders: 'طلباتي',
    signOut: 'تسجيل الخروج',
    wishlist: 'المفضلة',
    cart: 'السلة',
    items: 'منتجات',
    emptyWishlist: 'قائمة المفضلة فارغة',
    emptyCart: 'سلة المشتريات فارغة',

    // Main Navigation
    allCategories: 'جميع التصنيفات',
    loadingCategories: 'جاري تحميل التصنيفات...',
    noCategoriesFound: 'لم يتم العثور على تصنيفات',
    home: 'الرئيسية',
    products: 'المنتجات',
    aboutUs: 'من نحن',
    rentOn: 'خدمة الإيجار',
    contactUs: 'اتصل بنا',
    newBadge: 'جديد',

    // Common Buttons & Badges
    shopNow: 'تسوق الآن',
    shopDeals: 'تسوق العروض',
    exploreShowroom: 'استكشف صالة العرض',
    viewOnGoogleMaps: 'عرض على خرائط Google',
    viewDetails: 'عرض التفاصيل',
    addToCart: 'أضف إلى السلة',
    rentNow: 'استأجر الآن',
    exploreRentalPlans: 'استكشف خطط الإيجار',
    learnMore: 'اعرف المزيد',
    filterBy: 'تصفية حسب',
    sortBy: 'ترتيب حسب',
    price: 'السعر',
    qar: 'ر.ق',
    inStock: 'متوفر بالمخزون',
    outOfStock: 'نفدت الكمية',
    leftInStock: 'متبقي',
    buyNow: 'اشتري الآن',
    addToCart: 'أضف للسلة',
    added: 'تمت الإضافة!',
    rentFrom: 'إيجار من',
    perMonth: '/شهرياً',
    freeDelivery: 'توصيل مجاني',
    freeShipping: 'توصيل مجاني في قطر',
    isoCertifiedBadge: 'معتمد بشهادة ISO في قطر',
    readyInventoryBadge: '+1,200 جهاز كمبيوتر جاهز',
    openDaily: 'مفتوح يومياً',
    latestBlogsTitle: 'أحدث المقالات ودليل الشراء',
    viewAllArticles: 'عرض جميع المقالات',
    topBrandsTitle: 'كبرى العلامات التجارية العالمية',
    topBrandsSubtitle: 'موزع ووكيل معتمد وموثوق في دولة قطر',

    // Home Sections
    featuredCategories: 'التصنيفات المميزة',
    dealsOfTheWeek: 'عروض الأسبوع الحصرية',
    exclusiveOffers: 'تخفيضات استثنائية على أجهزة الكمبيوتر',
    offerEndsIn: 'ينتهي العرض خلال:',
    days: 'أيام',
    hours: 'ساعات',
    mins: 'دقائق',
    secs: 'ثواني',
    featuredProducts: 'المنتجات المميزة',
    featuredProductsSubtitle: 'استكشف أفضل أجهزة الكمبيوتر المحمولة والمكتبية والتجميعات المعتمدة في قطر',
    tabAllProducts: 'جميع المنتجات',
    tabBestSellers: 'الأكثر مبيعاً',
    tabNewArrivals: 'وصل حديثاً',
    tabTopDeals: 'أقوى العروض',
    tabRentals: 'أجهزة للإيجار',
    viewAllProducts: 'عرض جميع المنتجات',
    
    // Promo Cards
    rentCardTitle: 'استئجار كمبيوتر',
    rentCardSubtitle: 'مرن، بأسعار مناسبة وبدون متاعب',
    rentBullet1: 'خطط قصيرة وطويلة الأجل',
    rentBullet2: 'مثالي للشركات والمؤتمرات',
    rentBullet3: 'أحدث المواصفات والأجهزة',
    offerCardBadge: 'عرض لفترة محدودة',
    saveUpTo: 'وفر حتى',
    saveUpToDesc: 'على أجهزة لابتوب وملحقات مختارة',

    // Trust Strip
    trustShippingTitle: 'توصيل مجاني في قطر',
    trustShippingSubtitle: 'توصيل سريع خلال 1-2 يوم لجميع البلديات',
    trustReturnsTitle: 'ضمان الإرجاع المعتمد',
    trustReturnsSubtitle: 'وفق الشروط الرسمية لضمان بريستيج',
    trustWarrantyTitle: 'ضمان أصلي 100%',
    trustWarrantySubtitle: 'ضمان الشركة المصنعة الرسمي ومركز PCS',
    trustPaymentsTitle: 'دفع آمن 100%',
    trustPaymentsSubtitle: 'بطاقات بنكية، تحويل ونقاط بيع في المعرض',
    trustSupportTitle: 'مكتب الدعم الفني المتخصص',
    trustSupportSubtitle: 'دعم فني واستشارات عبر الهاتف والواتساب',

    // Newsletter
    newsletterTitle: 'ابقَ على اطلاع مع بريستيج للكمبيوتر',
    newsletterSubtitle: 'احصل على أحدث العروض والأسعار الخاصة واستئجار الأجهزة في قطر مباشرة عبر بريدك.',
    subscribe: 'اشتراك',
    enterEmail: 'أدخل بريدك الإلكتروني',
    subscribedSuccess: 'تم اشتراكك بنجاح! تفقد بريدك الإلكتروني للعروض الحصرية.',

    // Footer
    footerAbout: 'شركة Prestige Computer Services (PCS الدوحة) هي شركة معتمدة بشهادة ISO وأبرز موزع لأجهزة الكمبيوتر الجديدة والمستعملة المعتمدة، التجميعات الاحترافية، وحلول تكنولوجيا المعلومات في قطر منذ عام 2020.',
    showroomLocation: 'البرج 1، الطابق الثاني، مكتب 201، مول المرقاب، شارع المرقاب الجديد، الدوحة، قطر',
    workingHours: 'السبت – الخميس: 10:00 ص – 10:00 م | الجمعة: 2:30 م – 10:30 م',
    allRightsReserved: 'جميع الحقوق محفوظة. بريستيج للكمبيوتر.',
    shopColumn: 'المتجر',
    serviceColumn: 'الخدمات',
    supportColumn: 'الدعم والمساعدة',
    companyColumn: 'عن بريستيج',

    // Policy & Terms
    customerAgreement: 'لقد قرأت وفهمت الشروط المذكورة أعلاه وأوافق عليها.',
    serviceHoursNote: 'ساعات الخدمة: يتم التعامل مع مطالبات الضمان والاستبدال من الأحد إلى الخميس، من 10:00 صباحًا حتى 5:00 مساءً فقط.',
    printPolicy: 'طباعة الوثيقة',
    legalDesk: 'المكتب القانوني',
    allDocuments: 'جميع الوثائق القانونية',
    complianceGrievance: 'الامتثال والشكاوى',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pcs_language')
      if (saved === 'ar' || saved === 'en') {
        setLanguageState(saved)
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }
  }, [language])

  const setLanguage = (lang) => {
    if (lang !== 'en' && lang !== 'ar') return
    setLanguageState(lang)
    try {
      localStorage.setItem('pcs_language', lang)
    } catch {}
  }

  const isRtl = language === 'ar'
  const isArabic = language === 'ar'

  const t = (key, fallback) => {
    return TRANSLATIONS[language]?.[key] || fallback || TRANSLATIONS.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl, isArabic, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
export default LanguageContext
