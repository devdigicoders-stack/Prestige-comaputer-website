export function WishlistLaptopVisual({ className = 'w-full h-full max-h-[120px]' }) {
  return (
    <svg viewBox="0 0 220 130" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wishLapScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Screen Frame */}
      <polygon points="36,18 184,18 178,98 42,98" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <polygon points="40,22 180,22 174,94 46,94" fill="url(#wishLapScreen)" />
      {/* Abstract Wave on Screen */}
      <path d="M46 72 Q110 32 174 80 L174 94 L46 94 Z" fill="#60a5fa" fillOpacity="0.45" />
      <circle cx="110" cy="20" r="1.5" fill="#64748b" />
      {/* Base */}
      <polygon points="42,98 178,98 206,118 14,118" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <polygon points="14,118 206,118 202,122 18,122" fill="#0f172a" />
      {/* Trackpad */}
      <rect x="94" y="105" width="32" height="10" rx="1.5" fill="#334155" />
    </svg>
  )
}

export function WishlistDesktopVisual({ className = 'w-full h-full max-h-[120px]' }) {
  return (
    <svg viewBox="0 0 160 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wishDeskBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b0f19" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
      </defs>
      {/* PC Tower Body */}
      <rect x="35" y="10" width="90" height="120" rx="6" fill="url(#wishDeskBg)" stroke="#334155" strokeWidth="2" />
      {/* Glass Side Panel */}
      <rect x="42" y="18" width="56" height="104" rx="3" fill="#090a0f" stroke="#1f2433" strokeWidth="1" />
      {/* Front Panel with 3 RGB Fans */}
      <rect x="103" y="16" width="16" height="108" rx="3" fill="#0d0e14" />
      {/* Top Fan (Cyan) */}
      <circle cx="111" cy="36" r="6.5" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
      <circle cx="111" cy="36" r="2.5" fill="#0891b2" />
      {/* Middle Fan (Magenta) */}
      <circle cx="111" cy="70" r="6.5" fill="none" stroke="#ec4899" strokeWidth="2.5" />
      <circle cx="111" cy="70" r="2.5" fill="#db2777" />
      {/* Bottom Fan (Yellow/Orange) */}
      <circle cx="111" cy="104" r="6.5" fill="none" stroke="#eab308" strokeWidth="2.5" />
      <circle cx="111" cy="104" r="2.5" fill="#ca8a04" />
      {/* Internal Cooler Glow */}
      <circle cx="68" cy="48" r="10" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 2" />
      {/* GPU Block */}
      <rect x="46" y="80" width="48" height="14" rx="2" fill="#18181b" stroke="#38bdf8" strokeWidth="1" />
    </svg>
  )
}

export function WishlistMonitorVisual({ className = 'w-full h-full max-h-[120px]' }) {
  return (
    <svg viewBox="0 0 200 130" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wishMonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1040" />
          <stop offset="60%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Monitor Screen Frame */}
      <rect x="20" y="14" width="160" height="88" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <rect x="23" y="17" width="154" height="82" rx="2" fill="url(#wishMonGrad)" />
      {/* Screen Graphic Wave */}
      <path d="M23 75 C70 30, 110 95, 177 50 L177 99 L23 99 Z" fill="#818cf8" fillOpacity="0.4" />
      {/* Stand Neck */}
      <rect x="93" y="102" width="14" height="15" fill="#475569" />
      {/* Stand Base */}
      <path d="M68 117 L132 117 L138 122 L62 122 Z" fill="#1e293b" />
    </svg>
  )
}

export function WishlistHeadsetVisual({ className = 'w-full h-full max-h-[120px]' }) {
  return (
    <svg viewBox="0 0 160 140" className={className} aria-hidden="true">
      {/* Headband */}
      <path d="M38 65 A 44 44 0 0 1 122 65" fill="none" stroke="#18181b" strokeWidth="9" strokeLinecap="round" />
      <path d="M42 63 A 40 40 0 0 1 118 63" fill="none" stroke="#27272a" strokeWidth="3.5" strokeLinecap="round" />
      {/* Red accent ribbon on headband */}
      <path d="M56 36 A 40 40 0 0 1 104 36" fill="none" stroke="#dc1414" strokeWidth="2.5" />

      {/* Left Earcup */}
      <rect x="24" y="62" width="18" height="42" rx="7" fill="#09090b" stroke="#dc1414" strokeWidth="2" />
      <circle cx="33" cy="83" r="4.5" fill="#dc1414" />

      {/* Right Earcup */}
      <rect x="118" y="62" width="18" height="42" rx="7" fill="#09090b" stroke="#dc1414" strokeWidth="2" />
      <circle cx="127" cy="83" r="4.5" fill="#dc1414" />

      {/* Flexible Mic Arm */}
      <path d="M30 96 Q25 118 52 120" fill="none" stroke="#52525b" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="52" y="116" width="9" height="7" rx="2" fill="#09090b" stroke="#dc1414" strokeWidth="1" />
    </svg>
  )
}

export function WishlistKeyboardVisual({ className = 'w-full h-full max-h-[100px]' }) {
  return (
    <svg viewBox="0 0 180 110" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="keyNeon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Keyboard Case */}
      <rect x="15" y="32" width="150" height="58" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
      {/* Key Rows with RGB underglow */}
      <line x1="22" y1="42" x2="158" y2="42" stroke="url(#keyNeon)" strokeWidth="2.5" strokeDasharray="5 2.5" />
      <line x1="22" y1="52" x2="158" y2="52" stroke="url(#keyNeon)" strokeWidth="2.5" strokeDasharray="5 2.5" />
      <line x1="22" y1="62" x2="158" y2="62" stroke="url(#keyNeon)" strokeWidth="2.5" strokeDasharray="5 2.5" />
      <line x1="22" y1="72" x2="158" y2="72" stroke="url(#keyNeon)" strokeWidth="2.5" strokeDasharray="5 2.5" />
      {/* Spacebar */}
      <rect x="55" y="78" width="70" height="5" rx="1.5" fill="#71717a" />
    </svg>
  )
}

export function WishlistMouseVisual({ className = 'w-full h-full max-h-[100px]' }) {
  return (
    <svg viewBox="0 0 130 110" className={className} aria-hidden="true">
      {/* Mouse Body */}
      <path
        d="M45 28 C45 16 55 12 65 12 C75 12 85 16 85 28 L88 65 C88 84 78 96 65 96 C52 96 42 84 42 65 Z"
        fill="#18181b"
        stroke="#3f3f46"
        strokeWidth="1.5"
      />
      {/* Scroll Wheel */}
      <rect x="62" y="24" width="6" height="14" rx="2" fill="#09090b" stroke="#06b6d4" strokeWidth="1" />
      {/* Middle Split */}
      <line x1="65" y1="12" x2="65" y2="48" stroke="#3f3f46" strokeWidth="1" />
      {/* RGB Logo / Glow */}
      <circle cx="65" cy="72" r="5" fill="#06b6d4" fillOpacity="0.8" />
    </svg>
  )
}

export function WishlistSSDVisual({ className = 'w-full h-full max-h-[100px]' }) {
  return (
    <svg viewBox="0 0 160 110" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ssdBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      {/* SSD Body */}
      <rect x="35" y="22" width="90" height="66" rx="5" fill="url(#ssdBlue)" stroke="#3b82f6" strokeWidth="1.2" />
      {/* Bevel Edge */}
      <rect x="40" y="26" width="80" height="58" rx="3" fill="#1e40af" fillOpacity="0.3" />
      {/* Brand Text */}
      <text x="80" y="58" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" letterSpacing="1">
        SAMSUNG
      </text>
      <text x="80" y="68" textAnchor="middle" fill="#93c5fd" fontSize="7" fontWeight="medium">
        T7 Shield 1TB
      </text>
    </svg>
  )
}
