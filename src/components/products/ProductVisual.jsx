export default function ProductVisual({ variant = 'dell-inspiron' }) {
  if (variant === 'asus-rog') {
    return (
      <svg
        viewBox="0 0 240 150"
        className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.18)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rogBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b0014" />
            <stop offset="50%" stopColor="#250738" />
            <stop offset="100%" stopColor="#0a0112" />
          </linearGradient>
          <linearGradient id="rogNeon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Laptop Screen Display Lid */}
        <polygon points="34,22 206,22 198,114 42,114" fill="#121217" stroke="#27272a" strokeWidth="1.6" />
        <polygon points="38,26 202,26 194,110 46,110" fill="url(#rogBg)" />

        {/* ROG Eye Neon Vector Graphic */}
        <g transform="translate(92, 44) scale(0.9)">
          <path
            d="M5 24 C14 8, 38 4, 60 18 C46 22, 28 28, 16 36 Z"
            fill="url(#rogNeon)"
          />
          <path
            d="M26 26 C36 21, 52 23, 62 30 C48 35, 34 33, 26 26 Z"
            fill="#ffffff"
            fillOpacity="0.85"
          />
          <path
            d="M3 32 C12 28, 22 29, 30 35 C20 37, 10 37, 3 32 Z"
            fill="#ec4899"
          />
        </g>
        {/* Subtle keyboard glow reflection on lower bezel */}
        <rect x="42" y="112" width="156" height="2" fill="#a855f7" fillOpacity="0.5" />

        {/* Laptop Base / Deck */}
        <polygon points="42,114 198,114 228,138 12,138" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <polygon points="12,138 228,138 224,142 16,142" fill="#09090b" />

        {/* Keyboard Area with RGB glow */}
        <polygon points="48,117 192,117 210,132 30,132" fill="#0f0f12" />
        <line x1="52" y1="121" x2="188" y2="121" stroke="#ec4899" strokeWidth="1.2" strokeDasharray="5 3" strokeOpacity="0.75" />
        <line x1="46" y1="126" x2="194" y2="126" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="5 3" strokeOpacity="0.75" />
        <line x1="40" y1="130" x2="200" y2="130" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="5 3" strokeOpacity="0.75" />

        {/* Front RGB Lightbar */}
        <polygon points="20,139 220,139 218,141 22,141" fill="url(#rogNeon)" />
      </svg>
    )
  }

  if (variant === 'pcs-gaming-pc') {
    return (
      <svg
        viewBox="0 0 240 150"
        className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.22)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ringCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="55%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e1726" />
          </radialGradient>
          <radialGradient id="ringMagenta" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="55%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#1e1022" />
          </radialGradient>
          <radialGradient id="ringYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="55%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#1c0f05" />
          </radialGradient>
          <linearGradient id="rgbBar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>

        {/* PC Tower Main Body (Tempered Glass Side) */}
        <rect x="70" y="8" width="98" height="126" rx="6" fill="#0d0e14" stroke="#27272a" strokeWidth="2" />
        <rect x="76" y="14" width="68" height="114" rx="3" fill="#0f111a" stroke="#1f2433" strokeWidth="1" />

        {/* 3 Glowing Front RGB Ring Fans */}
        <rect x="146" y="12" width="18" height="118" rx="2" fill="#090a0f" />
        <circle cx="155" cy="32" r="7.5" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
        <circle cx="155" cy="32" r="3" fill="#0891b2" />

        <circle cx="155" cy="71" r="7.5" fill="none" stroke="#f472b6" strokeWidth="2.5" />
        <circle cx="155" cy="71" r="3" fill="#db2777" />

        <circle cx="155" cy="110" r="7.5" fill="none" stroke="#fde047" strokeWidth="2.5" />
        <circle cx="155" cy="110" r="3" fill="#ea580c" />

        {/* Interior: CPU Liquid Cooler */}
        <circle cx="98" cy="46" r="14" fill="none" stroke="#a855f7" strokeWidth="2.8" />
        <circle cx="98" cy="46" r="6" fill="#7e22ce" />
        <path d="M106 38 C120 28, 126 22, 134 22" fill="none" stroke="#27272a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M106 44 C120 34, 126 28, 136 28" fill="none" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />

        {/* RAM RGB sticks */}
        <rect x="120" y="32" width="2.5" height="26" rx="1" fill="#38bdf8" />
        <rect x="124" y="32" width="2.5" height="26" rx="1" fill="#ec4899" />

        {/* GPU graphics card with RGB strip */}
        <rect x="80" y="76" width="58" height="14" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="0.8" />
        <rect x="82" y="80" width="54" height="2.5" rx="1" fill="url(#rgbBar)" />

        {/* PSU Shroud */}
        <rect x="76" y="104" width="68" height="24" rx="2" fill="#08090d" />
        <rect x="82" y="112" width="34" height="3" rx="1" fill="#3b82f6" fillOpacity="0.7" />

        {/* RGB Keyboard (Foreground Desk) */}
        <polygon points="26,128 108,128 114,142 20,142" fill="#09090b" stroke="#334155" strokeWidth="1" />
        <polygon points="28,130 106,130 112,140 22,140" fill="#0f172a" />
        <line x1="28" y1="133" x2="106" y2="133" stroke="url(#rgbBar)" strokeWidth="1.4" strokeDasharray="4 2" />
        <line x1="25" y1="137" x2="109" y2="137" stroke="url(#rgbBar)" strokeWidth="1.4" strokeDasharray="4 2" />

        {/* RGB Gaming Mouse */}
        <ellipse cx="128" cy="136" rx="8" ry="5.5" fill="#09090b" stroke="#38bdf8" strokeWidth="1" />
        <ellipse cx="128" cy="136" rx="3.5" ry="2" fill="#ec4899" />
      </svg>
    )
  }

  if (variant === 'hp-15s') {
    return (
      <svg
        viewBox="0 0 240 150"
        className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.12)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hpScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0369a1" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#082f49" />
          </linearGradient>
          <linearGradient id="hpSilverDeck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        {/* Silver Display Lid */}
        <polygon points="34,22 206,22 198,114 42,114" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.4" />
        {/* Inner Screen */}
        <polygon points="38,26 202,26 194,110 46,110" fill="url(#hpScreen)" />

        {/* HP Blue Wallpaper Wave & Circular Logo */}
        <circle cx="120" cy="68" r="22" fill="#ffffff" fillOpacity="0.12" />
        <g stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round">
          <line x1="113" y1="60" x2="113" y2="76" />
          <line x1="113" y1="68" x2="120" y2="68" />
          <line x1="120" y1="60" x2="120" y2="76" />
          <line x1="126" y1="60" x2="126" y2="76" />
          <path d="M126 60 C132 60, 134 64, 134 68 C134 72, 132 76, 126 76" fill="none" />
        </g>

        {/* Laptop Deck (Natural Silver) */}
        <polygon points="42,114 198,114 228,138 12,138" fill="url(#hpSilverDeck)" stroke="#94a3b8" strokeWidth="1" />
        <polygon points="12,138 228,138 224,142 16,142" fill="#64748b" />

        {/* Black Chiclet Keyboard */}
        <polygon points="48,117 192,117 210,132 30,132" fill="#1e293b" />
        <line x1="52" y1="121" x2="188" y2="121" stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 2.5" />
        <line x1="46" y1="126" x2="194" y2="126" stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 2.5" />
        <line x1="40" y1="130" x2="200" y2="130" stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 2.5" />

        {/* Precision Touchpad */}
        <polygon points="98,134 142,134 145,140 95,140" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
      </svg>
    )
  }

  if (variant === 'lenovo-thinkpad') {
    return (
      <svg
        viewBox="0 0 240 150"
        className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.18)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tpScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="50%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
        </defs>

        {/* Matte Black Screen Lid */}
        <polygon points="34,22 206,22 198,114 42,114" fill="#09090b" stroke="#27272a" strokeWidth="1.4" />
        <polygon points="38,26 202,26 194,110 46,110" fill="url(#tpScreen)" />

        {/* ThinkPad Red Dot Logo and Abstract Red Silk Wave */}
        <path d="M46 95 Q115 50, 194 85" fill="none" stroke="#dc1414" strokeWidth="3" strokeOpacity="0.85" />
        <path d="M46 100 Q120 70, 194 95" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeOpacity="0.6" />
        <text x="184" y="38" fill="#ffffff" fontSize="8" fontFamily="Arial, sans-serif" fontWeight="700">Think</text>
        <circle cx="193" cy="31" r="1.5" fill="#dc1414" />

        {/* Black Base / Deck */}
        <polygon points="42,114 198,114 228,138 12,138" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <polygon points="12,138 228,138 224,142 16,142" fill="#09090b" />

        {/* Keyboard with Red TrackPoint */}
        <polygon points="48,117 192,117 210,132 30,132" fill="#09090b" />
        <line x1="52" y1="121" x2="188" y2="121" stroke="#3f3f46" strokeWidth="1.2" strokeDasharray="5 2.5" />
        <line x1="46" y1="126" x2="194" y2="126" stroke="#3f3f46" strokeWidth="1.2" strokeDasharray="5 2.5" />
        <line x1="40" y1="130" x2="200" y2="130" stroke="#3f3f46" strokeWidth="1.2" strokeDasharray="5 2.5" />
        {/* Red TrackPoint */}
        <circle cx="120" cy="126" r="2.2" fill="#dc1414" />
      </svg>
    )
  }

  if (variant === 'apple-macbook') {
    return (
      <svg
        viewBox="0 0 240 150"
        className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.12)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="macScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4c1d95" />
            <stop offset="50%" stopColor="#c026d3" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="macDeck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4f4f5" />
            <stop offset="100%" stopColor="#d4d4d8" />
          </linearGradient>
        </defs>

        {/* Space Gray Lid */}
        <polygon points="34,22 206,22 198,114 42,114" fill="#27272a" stroke="#3f3f46" strokeWidth="1.4" />
        <polygon points="38,26 202,26 194,110 46,110" fill="url(#macScreen)" />

        {/* Center Display Notch & Abstract Fluid Wallpaper */}
        <rect x="114" y="26" width="12" height="4" rx="1.5" fill="#09090b" />
        <path d="M46 100 Q100 40, 194 90" fill="none" stroke="#f472b6" strokeWidth="4" strokeOpacity="0.8" />
        <path d="M46 80 Q130 110, 194 60" fill="none" stroke="#67e8f9" strokeWidth="3.5" strokeOpacity="0.75" />

        {/* Aluminum Unibody Deck */}
        <polygon points="42,114 198,114 228,138 12,138" fill="url(#macDeck)" stroke="#a1a1aa" strokeWidth="1" />
        <polygon points="12,138 228,138 224,142 16,142" fill="#71717a" />

        {/* Black Magic Keyboard */}
        <polygon points="48,117 192,117 210,132 30,132" fill="#18181b" />
        <line x1="52" y1="121" x2="188" y2="121" stroke="#3f3f46" strokeWidth="1.2" strokeDasharray="5 2.5" />
        <line x1="46" y1="126" x2="194" y2="126" stroke="#3f3f46" strokeWidth="1.2" strokeDasharray="5 2.5" />
        <line x1="40" y1="130" x2="200" y2="130" stroke="#3f3f46" strokeWidth="1.2" strokeDasharray="5 2.5" />

        {/* Giant Force Touch Trackpad */}
        <polygon points="90,133 150,133 154,141 86,141" fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="0.8" />
      </svg>
    )
  }

  if (variant === 'aio-pc') {
    return (
      <svg
        viewBox="0 0 240 150"
        className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.14)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aioScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* All-in-One Monitor Display */}
        <rect x="36" y="14" width="168" height="104" rx="4" fill="#09090b" stroke="#334155" strokeWidth="2" />
        <rect x="40" y="18" width="160" height="92" rx="2" fill="url(#aioScreen)" />

        {/* Windows 11 Blue Bloom on Screen */}
        <ellipse cx="120" cy="64" rx="42" ry="24" fill="#38bdf8" fillOpacity="0.45" />
        <ellipse cx="120" cy="64" rx="24" ry="14" fill="#60a5fa" fillOpacity="0.6" />

        {/* Bottom Speaker Chin */}
        <rect x="40" y="110" width="160" height="6" fill="#1e293b" />
        <circle cx="120" cy="113" r="1.8" fill="#94a3b8" />

        {/* Stand Neck and Base */}
        <rect x="113" y="118" width="14" height="18" fill="#475569" />
        <polygon points="92,136 148,136 156,142 84,142" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      </svg>
    )
  }

  // Default: Dell Inspiron 15 with Windows 11 Blue Bloom Wallpaper
  return (
    <svg
      viewBox="0 0 240 150"
      className="w-full max-w-[210px] h-[130px] mx-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.14)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="win11Bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1e3d" />
          <stop offset="55%" stopColor="#12366b" />
          <stop offset="100%" stopColor="#071329" />
        </linearGradient>
        <radialGradient id="win11Bloom" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#2563eb" stopOpacity="0.85" />
          <stop offset="85%" stopColor="#1d4ed8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0c1e3d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dellSilver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* Screen Lid Frame */}
      <polygon points="34,22 206,22 198,114 42,114" fill="#0f172a" stroke="#334155" strokeWidth="1.6" />
      {/* Inner Screen Display */}
      <polygon points="38,26 202,26 194,110 46,110" fill="url(#win11Bg)" />

      {/* Windows 11 Bloom Petals (Signature Blue Flower) */}
      <ellipse cx="120" cy="72" rx="46" ry="28" fill="url(#win11Bloom)" />
      {/* Center Petal Fold Curves */}
      <path
        d="M96 82 C98 62, 116 52, 120 74 C124 52, 142 62, 144 82 C134 76, 128 78, 120 84 C112 78, 106 76, 96 82 Z"
        fill="#93c5fd"
        fillOpacity="0.9"
      />
      <path
        d="M104 68 C112 56, 128 56, 136 68 C128 62, 112 62, 104 68 Z"
        fill="#ffffff"
        fillOpacity="0.6"
      />

      {/* Silver Laptop Base / Deck */}
      <polygon points="42,114 198,114 228,138 12,138" fill="url(#dellSilver)" stroke="#94a3b8" strokeWidth="1" />
      <polygon points="12,138 228,138 224,142 16,142" fill="#64748b" />

      {/* Keyboard Recess */}
      <polygon points="48,117 192,117 210,132 30,132" fill="#1e293b" />
      <line x1="52" y1="121" x2="188" y2="121" stroke="#475569" strokeWidth="1.2" strokeDasharray="5 2.5" />
      <line x1="46" y1="126" x2="194" y2="126" stroke="#475569" strokeWidth="1.2" strokeDasharray="5 2.5" />
      <line x1="40" y1="130" x2="200" y2="130" stroke="#475569" strokeWidth="1.2" strokeDasharray="5 2.5" />

      {/* Touchpad */}
      <polygon points="98,134 142,134 145,140 95,140" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
    </svg>
  )
}
