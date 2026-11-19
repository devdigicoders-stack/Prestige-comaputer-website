export const DELIVERY_COUNTRIES = [
  'United Kingdom',
  'India',
  'United States',
  'United Arab Emirates',
  'Canada',
]

export const ALL_CATEGORIES_MENU = [
  { label: 'Laptops', count: '48 Products', href: '/products?category=laptops' },
  { label: 'Desktops', count: '22 Products', href: '/products?category=desktops' },
  { label: 'Gaming PCs', count: '26 Products', href: '/products?category=gaming-pcs' },
  { label: 'Workstations', count: '14 Products', href: '/products?category=workstations' },
  { label: 'All-in-One PCs', count: '24 Products', href: '/products?category=all-in-one' },
  { label: 'Monitors & Displays', count: '19 Products', href: '/products?category=monitors' },
  { label: 'Components', count: '35 Products', href: '/products?category=components' },
  { label: 'Accessories', count: '42 Products', href: '/products?category=accessories' },
  { label: 'Rent a Computer', count: 'Flexible Plans', isNew: true, href: '/rentals' },
]

export const MAIN_NAV_LINKS = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    hasDropdown: false,
  },
  {
    id: 'products',
    label: 'Products',
    href: '/products',
    hasDropdown: false,
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    hasDropdown: false,
  },
  {
    id: 'rentals',
    label: 'Rent On',
    href: '/rentals',
    badge: 'New',
    hasDropdown: false,
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
    hasDropdown: false,
  },
]
