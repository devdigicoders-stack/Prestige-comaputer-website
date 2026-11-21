'use client'

/**
 * High-fidelity vector illustrations for Dell Inspiron 15 (2025)
 * matching the user's mockup screen with the vivid blue-purple wave wallpaper,
 * thin bezels, Dell logo, and multiple camera angles.
 */

export function DellLaptopFrontVisual({ className = 'w-full h-full max-h-[340px]' }) {
  return (
    <svg
      viewBox="0 0 540 340"
      className={`${className} drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all duration-300`}
      aria-label="Dell Inspiron 15 Front View"
    >
      <defs>
        {/* Screen Background Deep Gradient */}
        <linearGradient id="dellScreenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b0826" />
          <stop offset="35%" stopColor="#0f172a" />
          <stop offset="70%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#090514" />
        </linearGradient>

        {/* Luminous Neon Waves (Blue, Cyan, Magenta, Purple) */}
        <linearGradient id="neonWaveBlue" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="45%" stopColor="#3b82f6" />
          <stop offset="85%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>

        <linearGradient id="neonWaveMagenta" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="40%" stopColor="#d946ef" />
          <stop offset="75%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>

        <linearGradient id="neonGlowRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.85" />
        </linearGradient>

        {/* Chassis Silver / Platinum Gradients */}
        <linearGradient id="chassisSilver" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="30%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        <linearGradient id="chassisEdge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        <linearGradient id="bezelDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
      </defs>

      {/* 1. Outer Bezel / Display Lid */}
      <rect x="76" y="24" width="388" height="236" rx="10" fill="url(#bezelDark)" stroke="#3f3f46" strokeWidth="2.5" />

      {/* Top WebCam & Microphones */}
      <circle cx="270" cy="30.5" r="2.2" fill="#27272a" />
      <circle cx="270" cy="30.5" r="1" fill="#0284c7" />
      <circle cx="258" cy="30.5" r="0.75" fill="#52525b" />
      <circle cx="282" cy="30.5" r="0.75" fill="#52525b" />

      {/* 2. Active Screen Display Area */}
      <rect x="84" y="36" width="372" height="212" rx="3" fill="url(#dellScreenBg)" />

      {/* Vibrant Abstract Fluid Wave Graphic (Wallpaper) */}
      <g opacity="0.96">
        {/* Soft Background Wave Glow */}
        <path
          d="M84 210 Q160 120 280 180 T456 100 L456 248 L84 248 Z"
          fill="url(#neonWaveMagenta)"
          opacity="0.35"
        />

        {/* Primary Flowing Silk Wave 1 (Magenta / Pink Ribbon) */}
        <path
          d="M84 190 C140 160, 200 80, 310 130 C380 160, 420 110, 456 80 L456 125 C420 150, 370 190, 300 160 C210 120, 160 190, 84 220 Z"
          fill="url(#neonWaveMagenta)"
        />

        {/* Primary Flowing Silk Wave 2 (Cyan / Blue Ribbon) */}
        <path
          d="M84 150 C150 120, 210 50, 330 110 C400 145, 435 90, 456 50 L456 95 C430 135, 385 175, 315 140 C220 95, 170 165, 84 185 Z"
          fill="url(#neonWaveBlue)"
        />

        {/* Top Highlight Filament */}
        <path
          d="M95 145 C160 115, 220 55, 335 112 C405 147, 440 92, 456 55"
          fill="none"
          stroke="#e0e7ff"
          strokeWidth="2.5"
          strokeOpacity="0.85"
        />

        <path
          d="M110 180 C170 155, 230 85, 330 135 C390 165, 430 120, 456 90"
          fill="none"
          stroke="#fbcfe8"
          strokeWidth="2"
          strokeOpacity="0.9"
        />

        {/* Secondary Delicate Wave */}
        <path
          d="M84 235 C170 200, 260 210, 340 185 C400 165, 435 175, 456 160 L456 195 C425 210, 380 200, 330 215 C250 240, 160 225, 84 248 Z"
          fill="url(#neonGlowRibbon)"
          opacity="0.8"
        />
      </g>

      {/* Screen Glare Reflection Overlay */}
      <polygon points="84,36 210,36 120,248 84,248" fill="#ffffff" fillOpacity="0.04" />

      {/* Screen Bottom Chin & DELL Logo */}
      <rect x="84" y="248" width="372" height="12" fill="#18181b" />
      <g transform="translate(263, 250)">
        {/* Dell Circular Logo */}
        <circle cx="7" cy="4" r="3.8" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
        <text
          x="7"
          y="5.8"
          fill="#e2e8f0"
          fontSize="3.8"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          DELL
        </text>
      </g>

      {/* 3. Laptop Base / Deck (Perspective Angle) */}
      <polygon
        points="70,260 470,260 522,306 18,306"
        fill="url(#chassisSilver)"
        stroke="url(#chassisEdge)"
        strokeWidth="1.2"
      />
      {/* Front Lip / Edge */}
      <polygon points="18,306 522,306 515,314 25,314" fill="#64748b" />
      <polygon points="25,314 515,314 510,317 30,317" fill="#334155" />

      {/* Keyboard Well */}
      <polygon points="86,264 454,264 480,290 60,290" fill="#0f172a" />

      {/* Keyboard Rows (Clean Keycap Representation) */}
      <line x1="88" y1="268" x2="452" y2="268" stroke="#334155" strokeWidth="2.5" strokeDasharray="8 3" />
      <line x1="84" y1="273" x2="456" y2="273" stroke="#334155" strokeWidth="2.5" strokeDasharray="9 3" />
      <line x1="80" y1="278" x2="460" y2="278" stroke="#334155" strokeWidth="2.5" strokeDasharray="10 3" />
      <line x1="74" y1="283" x2="466" y2="283" stroke="#334155" strokeWidth="2.5" strokeDasharray="11 3" />
      {/* Spacebar */}
      <line x1="210" y1="287" x2="330" y2="287" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />

      {/* Precision Trackpad */}
      <polygon
        points="226,293 314,293 318,304 222,304"
        fill="#f8fafc"
        stroke="#94a3b8"
        strokeWidth="1"
      />

      {/* Intel Core sticker accent on palm rest */}
      <rect x="424" y="294" width="12" height="9" rx="1" fill="#0284c7" />
      <text x="430" y="300" fill="#ffffff" fontSize="3" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">intel</text>
    </svg>
  )
}

export function DellLaptopSideAngleVisual({ className = 'w-full h-full max-h-[340px]' }) {
  return (
    <svg
      viewBox="0 0 540 340"
      className={`${className} drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all duration-300`}
      aria-label="Dell Inspiron 15 Side Angle View"
    >
      <defs>
        <linearGradient id="sideLid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="sideScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b0826" />
          <stop offset="40%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="sideDeck" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Angled Laptop Display Lid */}
      <polygon points="120,40 390,20 405,230 160,250" fill="url(#sideLid)" stroke="#475569" strokeWidth="2" />
      {/* Angled Display Content */}
      <polygon points="135,50 380,32 395,222 170,240" fill="url(#sideScreen)" />

      {/* Wave Graphic in Angle */}
      <path
        d="M170 240 C220 180, 300 120, 380 90 L385 140 C310 160, 230 210, 170 240 Z"
        fill="#ec4899"
        opacity="0.9"
      />
      <path
        d="M170 200 C240 140, 320 80, 380 50 L385 80 C320 110, 240 170, 170 220 Z"
        fill="#38bdf8"
        opacity="0.85"
      />

      {/* Base / Keyboard in Angle */}
      <polygon points="160,250 405,230 480,285 200,312" fill="url(#sideDeck)" stroke="#64748b" strokeWidth="1.5" />
      {/* Front edge */}
      <polygon points="200,312 480,285 470,295 190,320" fill="#475569" />

      {/* Keyboard Grid in Angle */}
      <polygon points="190,253 395,235 440,275 230,295" fill="#0f172a" />
      <line x1="200" y1="258" x2="395" y2="242" stroke="#334155" strokeWidth="2" strokeDasharray="7 2" />
      <line x1="210" y1="267" x2="410" y2="252" stroke="#334155" strokeWidth="2" strokeDasharray="8 2" />
      <line x1="220" y1="277" x2="425" y2="262" stroke="#334155" strokeWidth="2" strokeDasharray="9 2" />

      {/* Trackpad */}
      <polygon points="295,288 350,277 358,292 302,302" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
    </svg>
  )
}

export function DellLaptopDeckVisual({ className = 'w-full h-full max-h-[340px]' }) {
  return (
    <svg
      viewBox="0 0 540 340"
      className={`${className} drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all duration-300`}
      aria-label="Dell Inspiron 15 Keyboard Deck Closeup"
    >
      <defs>
        <linearGradient id="deckFull" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* Full Laptop Deck Top-Down */}
      <rect x="50" y="30" width="440" height="280" rx="14" fill="url(#deckFull)" stroke="#94a3b8" strokeWidth="2" />

      {/* Display Hinge Bar */}
      <rect x="140" y="34" width="260" height="8" rx="3" fill="#334155" />

      {/* Keyboard Recessed Tray */}
      <rect x="74" y="54" width="392" height="150" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Key Rows */}
      {/* Row 1 - Function Keys */}
      <line x1="84" y1="66" x2="456" y2="66" stroke="#1e293b" strokeWidth="6" strokeDasharray="14 3" />
      {/* Row 2 - Numbers */}
      <line x1="84" y1="84" x2="456" y2="84" stroke="#1e293b" strokeWidth="9" strokeDasharray="18 4" />
      {/* Row 3 - QWERTY */}
      <line x1="84" y1="104" x2="456" y2="104" stroke="#1e293b" strokeWidth="10" strokeDasharray="20 4" />
      {/* Row 4 - ASDF */}
      <line x1="84" y1="125" x2="456" y2="125" stroke="#1e293b" strokeWidth="10" strokeDasharray="20 4" />
      {/* Row 5 - ZXCV */}
      <line x1="84" y1="146" x2="456" y2="146" stroke="#1e293b" strokeWidth="10" strokeDasharray="20 4" />
      {/* Row 6 - Spacebar row */}
      <line x1="84" y1="168" x2="180" y2="168" stroke="#1e293b" strokeWidth="10" strokeDasharray="16 4" />
      <rect x="190" y="163" width="160" height="11" rx="2" fill="#1e293b" />
      <line x1="360" y1="168" x2="456" y2="168" stroke="#1e293b" strokeWidth="10" strokeDasharray="16 4" />

      {/* Power Button top right of keyboard */}
      <circle cx="452" cy="66" r="4" fill="#3b82f6" />

      {/* Precision Touchpad */}
      <rect x="200" y="220" width="140" height="74" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Intel Sticker */}
      <rect x="424" y="240" width="28" height="22" rx="2" fill="#0284c7" />
      <text x="438" y="254" fill="#ffffff" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">intel</text>
      <text x="438" y="260" fill="#ffffff" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">CORE i5</text>
    </svg>
  )
}

export function DellLaptopLidClosedVisual({ className = 'w-full h-full max-h-[340px]' }) {
  return (
    <svg
      viewBox="0 0 540 340"
      className={`${className} drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all duration-300`}
      aria-label="Dell Inspiron 15 Closed Lid Back"
    >
      <defs>
        <linearGradient id="lidBrushed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="35%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <radialGradient id="dellLogoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
      </defs>

      {/* Closed Laptop Outer Lid */}
      <rect x="65" y="45" width="410" height="250" rx="14" fill="url(#lidBrushed)" stroke="#64748b" strokeWidth="2.5" />
      {/* Subtle chamfered edge */}
      <rect x="68" y="48" width="404" height="244" rx="12" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />

      {/* Centered Iconic DELL Chrome Ring Logo */}
      <g transform="translate(270, 170)">
        <circle cx="0" cy="0" r="32" fill="url(#dellLogoGlow)" stroke="#475569" strokeWidth="2" />
        <circle cx="0" cy="0" r="28" fill="#e2e8f0" />
        <text
          x="0"
          y="7"
          fill="#1e293b"
          fontSize="18"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="1"
        >
          DELL
        </text>
      </g>
    </svg>
  )
}

export function DellLaptopVideoVisual({ className = 'w-full h-full max-h-[340px]' }) {
  return (
    <div className={`relative ${className} flex items-center justify-center bg-[#0b0826] rounded-2xl overflow-hidden border border-[#374151]`}>
      <DellLaptopFrontVisual className="w-full h-full opacity-65" />
      {/* Play Video Overlay */}
      <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 rounded-full bg-[#dc1414] text-white flex items-center justify-center shadow-[0_0_24px_rgba(220,20,20,0.6)] cursor-pointer hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-white text-[13px] font-semibold tracking-wide drop-shadow-md">
          Watch Dell Inspiron 15 Review & Demo
        </span>
      </div>
    </div>
  )
}

/**
 * Thumbnail SVGs for the left column strip (matching mockup exactly)
 */
export function ThumbnailPreview({ index, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl p-1 bg-white flex items-center justify-center transition-all duration-200 cursor-pointer overflow-hidden ${
        isActive
          ? 'border-2 border-[#dc1414] shadow-md ring-2 ring-[#dc1414]/20'
          : 'border border-[#e5e7eb] hover:border-[#9ca3af] opacity-80 hover:opacity-100'
      }`}
      aria-label={`Select product image view ${index + 1}`}
    >
      {index === 0 && <DellLaptopFrontVisual className="w-full h-full object-contain" />}
      {index === 1 && <DellLaptopSideAngleVisual className="w-full h-full object-contain" />}
      {index === 2 && <DellLaptopDeckVisual className="w-full h-full object-contain" />}
      {index === 3 && <DellLaptopLidClosedVisual className="w-full h-full object-contain" />}
      {index === 4 && (
        <div className="w-full h-full bg-[#111827] rounded-lg flex items-center justify-center text-white">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5 text-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </button>
  )
}

// Aliases for compatibility
export const DellLaptopAngleVisual = DellLaptopSideAngleVisual
export const DellLaptopKeyboardVisual = DellLaptopDeckVisual
export const DellLaptopSideVisual = DellLaptopLidClosedVisual
