import Link from 'next/link'

export default function ProductBreadcrumbs({
  category = 'Laptops',
  brand = 'Dell Laptops',
  productName = 'Dell Inspiron 15 (2025)',
}) {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 text-[12.5px] text-[#6b7280]">
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="hover:text-[#dc1414] transition-colors flex items-center gap-1"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5 text-[#9ca3af]"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Home</span>
          </Link>
          <span className="text-[#9ca3af]">&gt;</span>
        </li>

        <li className="flex items-center gap-1.5">
          <Link
            href="/products?cat=laptops"
            className="hover:text-[#dc1414] transition-colors"
          >
            {category}
          </Link>
          <span className="text-[#9ca3af]">&gt;</span>
        </li>

        <li className="flex items-center gap-1.5">
          <Link
            href="/products?cat=laptops&brand=Dell"
            className="hover:text-[#dc1414] transition-colors"
          >
            {brand}
          </Link>
          <span className="text-[#9ca3af]">&gt;</span>
        </li>

        <li className="font-semibold text-[#111827] truncate max-w-[240px] sm:max-w-none" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  )
}
