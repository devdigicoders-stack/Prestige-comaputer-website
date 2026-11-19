'use client'

import Link from 'next/link'

function formatGBP(amount) {
  return `£${Number(amount).toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function LaptopProductImage({ variant = 'dell' }) {
  const id = `prod-lap-${variant}`

  return (
    <svg
      viewBox="0 0 210 128"
      className="w-full max-w-[186px] h-[112px] mx-auto drop-shadow-[0_6px_10px_rgba(15,23,42,0.12)]"
      aria-hidden="true"
    >
      <defs>
        {/* Dell Red Silk */}
        <linearGradient id={`${id}-dell-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b0305" />
          <stop offset="55%" stopColor="#7a070b" />
          <stop offset="100%" stopColor="#260306" />
        </linearGradient>
        <linearGradient id={`${id}-dell-wave`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef1919" />
          <stop offset="55%" stopColor="#ff453a" />
          <stop offset="100%" stopColor="#990a0d" />
        </linearGradient>

        {/* HP Electric Blue */}
        <linearGradient id={`${id}-hp-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#051332" />
          <stop offset="55%" stopColor="#0b3b91" />
          <stop offset="100%" stopColor="#041536" />
        </linearGradient>
        <linearGradient id={`${id}-hp-wave`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Lenovo ThinkPad Red/Black */}
        <linearGradient id={`${id}-lenovo-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f0f12" />
          <stop offset="60%" stopColor="#3f0608" />
          <stop offset="100%" stopColor="#120405" />
        </linearGradient>
        <linearGradient id={`${id}-lenovo-wave`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#dc1414" />
          <stop offset="55%" stopColor="#ff3b2f" />
          <stop offset="100%" stopColor="#7f070a" />
        </linearGradient>

        {/* MacBook Purple/Violet */}
        <linearGradient id={`${id}-mac-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b0764" />
          <stop offset="50%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id={`${id}-mac-wave`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>

        {/* ASUS ROG Dark Indigo + Neon Logo */}
        <linearGradient id={`${id}-asus-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="55%" stopColor="#17123a" />
          <stop offset="100%" stopColor="#090915" />
        </linearGradient>
        <linearGradient id={`${id}-asus-crest`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id={`${id}-asus-rgb`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* Metallic Chassis */}
        <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="22%" stopColor="#e5e7eb" />
          <stop offset="50%" stopColor="#f3f4f6" />
          <stop offset="78%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
        <linearGradient id={`${id}-darkbase`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#18181b" />
          <stop offset="50%" stopColor="#3f3f46" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
      </defs>

      {/* Subtle Ground Shadow */}
      <ellipse cx="105" cy="118" rx="84" ry="5.5" fill="#0f172a" fillOpacity="0.14" />

      {/* Outer Display Lid */}
      <rect
        x="34"
        y="10"
        width="142"
        height="90"
        rx="5"
        fill={variant === 'lenovo' || variant === 'asus' ? '#111216' : '#18181b'}
        stroke={variant === 'lenovo' || variant === 'asus' ? '#27272a' : '#52525b'}
        strokeWidth="1.2"
      />

      {/* Screen Content by Variant */}
      <clipPath id={`${id}-clip`}>
        <rect x="38.5" y="14.5" width="133" height="80" rx="1.8" />
      </clipPath>

      <g clipPath={`url(#${id}-clip)`}>
        {variant === 'dell' && (
          <>
            <rect x="38.5" y="14.5" width="133" height="80" fill={`url(#${id}-dell-bg)`} />
            <path
              d="M36 94 C66 56, 102 68, 174 16 L174 52 C126 70, 92 78, 52 96 Z"
              fill={`url(#${id}-dell-wave)`}
              fillOpacity="0.88"
            />
            <path
              d="M44 96 C82 70, 128 74, 174 44 L174 96 Z"
              fill="#5e0508"
              fillOpacity="0.72"
            />
          </>
        )}

        {variant === 'hp' && (
          <>
            <rect x="38.5" y="14.5" width="133" height="80" fill={`url(#${id}-hp-bg)`} />
            <path
              d="M38 78 C64 40, 106 24, 172 50 L172 95 L38 95 Z"
              fill={`url(#${id}-hp-wave)`}
              fillOpacity="0.68"
            />
            <path
              d="M42 95 C78 52, 118 58, 168 18 L174 36 C132 66, 98 80, 62 96 Z"
              fill="#38bdf8"
              fillOpacity="0.55"
            />
          </>
        )}

        {variant === 'lenovo' && (
          <>
            <rect x="38.5" y="14.5" width="133" height="80" fill={`url(#${id}-lenovo-bg)`} />
            <path
              d="M44 96 C78 58, 112 52, 174 16 L174 44 C132 68, 102 76, 70 96 Z"
              fill={`url(#${id}-lenovo-wave)`}
              fillOpacity="0.92"
            />
            <path
              d="M84 96 C116 74, 144 68, 174 52 L174 96 Z"
              fill="#7f070a"
              fillOpacity="0.8"
            />
          </>
        )}

        {variant === 'macbook' && (
          <>
            <rect x="38.5" y="14.5" width="133" height="80" fill={`url(#${id}-mac-bg)`} />
            <path
              d="M38 92 C68 48, 106 36, 172 22 L172 62 C122 66, 90 82, 58 96 Z"
              fill={`url(#${id}-mac-wave)`}
              fillOpacity="0.85"
            />
            <path
              d="M38 64 C78 82, 118 46, 172 78 L172 96 L38 96 Z"
              fill="#c084fc"
              fillOpacity="0.5"
            />
            {/* MacBook Notch */}
            <rect x="96" y="14.5" width="18" height="4.2" rx="1.4" fill="#111215" />
          </>
        )}

        {variant === 'asus' && (
          <>
            <rect x="38.5" y="14.5" width="133" height="80" fill={`url(#${id}-asus-bg)`} />
            {/* Ambient purple/blue glow */}
            <circle cx="105" cy="54" r="36" fill="#6366f1" fillOpacity="0.24" />
            {/* Stylized ROG Eye Emblem */}
            <path
              d="M66 56 C84 36, 118 32, 148 36 C132 54, 122 68, 96 74 C106 64, 116 56, 130 46 C106 46, 88 54, 72 68 Z"
              fill="none"
              stroke={`url(#${id}-asus-crest)`}
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            <path
              d="M84 62 C98 54, 112 52, 122 52 C114 60, 104 65, 92 67 Z"
              fill={`url(#${id}-asus-crest)`}
              fillOpacity="0.85"
            />
          </>
        )}

        {/* Subtle Top-Left Glass Reflection */}
        <path d="M38.5 14.5 L98 14.5 L62 94.5 L38.5 94.5 Z" fill="#ffffff" fillOpacity="0.06" />
      </g>

      {/* Webcam Dot */}
      {variant !== 'macbook' && (
        <circle cx="105" cy="12.2" r="1.1" fill="#52525b" />
      )}

      {/* Lower Base Deck */}
      <path
        d="M34 100 L176 100 L194 111.5 L16 111.5 Z"
        fill={
          variant === 'lenovo' || variant === 'asus'
            ? `url(#${id}-darkbase)`
            : `url(#${id}-silver)`
        }
      />

      {/* Keyboard Recess */}
      <path d="M40 101.5 L170 101.5 L178 107 L32 107 Z" fill="#18181b" fillOpacity="0.85" />

      {/* ThinkPad Red TrackPoint */}
      {variant === 'lenovo' && <circle cx="105" cy="104.2" r="1.5" fill="#dc1414" />}

      {/* Front Base Lip */}
      <path
        d="M16 111.5 L194 111.5 C193 114.2 190 115.5 186 115.5 L24 115.5 C20 115.5 17 114.2 16 111.5 Z"
        fill={variant === 'lenovo' || variant === 'asus' ? '#111216' : '#9ca3af'}
      />

      {/* Center Thumb Notch / ROG RGB Bar */}
      {variant === 'asus' ? (
        <rect x="46" y="112.5" width="118" height="2" rx="1" fill={`url(#${id}-asus-rgb)`} />
      ) : (
        <rect
          x="93"
          y="111.5"
          width="24"
          height="2"
          rx="1"
          fill={variant === 'lenovo' ? '#3f3f46' : '#6b7280'}
        />
      )}
    </svg>
  )
}

function HeartIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[18px] h-[18px]"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20.4s-7.5-4.8-9.3-9.3C1.4 7.8 3.6 4.5 7.1 4.5c2 0 3.7 1.1 4.9 2.7 1.2-1.6 2.9-2.7 4.9-2.7 3.5 0 5.7 3.3 4.4 6.6-1.8 4.5-9.3 9.3-9.3 9.3Z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-[#f59e0b] fill-current shrink-0" aria-hidden="true">
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 0 0 .95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 0 0-.36 1.12l1.29 3.96c.3.92-.75 1.69-1.54 1.12l-3.37-2.45a1 1 0 0 0-1.18 0l-3.37 2.45c-.79.57-1.84-.2-1.54-1.12l1.29-3.96a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 0 0 .95-.69l1.29-3.96Z" />
    </svg>
  )
}

function MiniCartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.46 1.2h8.84a1.5 1.5 0 0 0 1.45-1.13L20.5 7.5H6.2" />
      <circle cx="9.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MiniCalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.3" />
      <path d="M3.5 9.8h17" />
      <path d="M8 3.2v3.2" />
      <path d="M16 3.2v3.2" />
    </svg>
  )
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <article className="bg-white rounded-xl border border-[#e7eaf0] shadow-[0_2px_10px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_24px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/30 transition-all duration-200 p-3.5 flex flex-col justify-between group">
      <div>
        {/* Top Row: Discount Pill & Wishlist Heart */}
        <div className="flex items-center justify-between min-h-[24px]">
          {product.discount ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#dc1414] text-white text-[11px] font-semibold leading-snug">
              {product.discount}
            </span>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={() => onToggleWishlist?.(product.id)}
            aria-label={
              isWishlisted
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
            }
            className={[
              'p-1 rounded-full transition-colors cursor-pointer',
              isWishlisted
                ? 'text-[#dc1414]'
                : 'text-[#374151] hover:text-[#dc1414]',
            ].join(' ')}
          >
            <HeartIcon filled={isWishlisted} />
          </button>
        </div>

        {/* Laptop Artwork */}
        <Link
          href={`/products/${product.id === 'dell-xps-15-2024' ? 'dell-inspiron-15' : product.id}`}
          className="block py-1.5 group-hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
        >
          <LaptopProductImage variant={product.artwork} />
        </Link>

        {/* Product Info */}
        <div className="mt-2">
          <Link
            href={`/products/${product.id === 'dell-xps-15-2024' ? 'dell-inspiron-15' : product.id}`}
            className="block"
          >
            <h3 className="text-[13.5px] font-bold text-[#111827] leading-snug truncate group-hover:text-[#dc1414] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="mt-0.5 text-[11.5px] text-[#6b7280] truncate">
            {product.specs}
          </p>

          {/* Rating */}
          <div className="mt-1.5 flex items-center gap-1 text-[12px]">
            <StarIcon />
            <span className="font-semibold text-[#d97706]">
              {product.rating}
            </span>
            <span className="text-[#6b7280]">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-[16px] font-bold text-[#111827] tracking-[-0.01em]">
              {formatGBP(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-[11.5px] text-[#9ca3af] line-through">
                {formatGBP(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="shrink-0 rounded-lg bg-gradient-to-b from-[#e11414] to-[#bd0909] hover:from-[#ed1a1a] hover:to-[#a50707] active:scale-[0.98] text-white py-2 px-2.5 text-[11px] font-semibold inline-flex items-center justify-center gap-1 shadow-xs transition-all cursor-pointer whitespace-nowrap"
        >
          <MiniCartIcon />
          <span>Buy Now</span>
        </button>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="flex-1 min-w-0 rounded-lg border border-[#dc1414]/65 bg-white hover:bg-[#fef2f2] active:scale-[0.98] text-[#c81010] py-2 px-1.5 text-[10.5px] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-1 transition-all cursor-pointer whitespace-nowrap"
        >
          <MiniCalendarIcon />
          <span className="truncate">Rent from £{product.rentPerMonth}/mo</span>
        </button>
      </div>
    </article>
  )
}
