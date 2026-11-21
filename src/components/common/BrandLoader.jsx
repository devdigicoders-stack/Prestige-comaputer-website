'use client'

/**
 * BrandLoader - Prestige Computers Signature Gauge Loader
 * Exact recreation of the reference design:
 * - Circular dark gunmetal/metallic gauge dial frame
 * - Realistic 3D recessed channel with metallic reflection
 * - High-intensity rotating neon red arc with bloom glow & glass tube specular highlight
 * - Prestige Computers official logo in center with red/white branding & PCS monitor emblem
 * - "L o a d i n g . . ." tracking text with soft glow
 * - 5 animated sequential cycling indicator dots (4 red, 1 grey wave)
 */

export default function BrandLoader({
  title = 'L o a d i n g . . .',
  className = '',
  size = 340,
}) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, maxWidth: '90vw', maxHeight: '90vw' }}
    >
      {/* Styles for hardware-accelerated animations */}
      <style>{`
        @keyframes pcsGaugeSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pcsDotCycle {
          0%, 20% {
            background-color: #dc1414;
            box-shadow: 0 0 10px #ef4444, 0 0 20px rgba(239, 68, 68, 0.7);
            transform: scale(1.1);
          }
          40% {
            background-color: #ef4444;
            box-shadow: 0 0 8px #f87171, 0 0 16px rgba(248, 113, 113, 0.5);
            transform: scale(1.05);
          }
          70%, 100% {
            background-color: #52525b;
            box-shadow: none;
            transform: scale(0.9);
          }
        }

        @keyframes pcsAmbientPulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.04);
          }
        }
      `}</style>

      {/* 1. Base Dial Frame (Static Bezel + Metallic Groove Track + Center Cockpit) */}
      <svg
        viewBox="0 0 360 360"
        className="w-full h-full absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          {/* Outer Bezel Metallic Gradient */}
          <linearGradient id="pcsOuterBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d3d45" />
            <stop offset="25%" stopColor="#25252b" />
            <stop offset="50%" stopColor="#18181c" />
            <stop offset="85%" stopColor="#101013" />
            <stop offset="100%" stopColor="#08080a" />
          </linearGradient>

          {/* Outer Rim Hairline Highlight */}
          <linearGradient id="pcsHairlineHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#52525b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#27272a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#09090b" stopOpacity="0.2" />
          </linearGradient>

          {/* Recessed Groove Metallic Reflection Arc */}
          <linearGradient id="pcsGrooveReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18181b" stopOpacity="0" />
            <stop offset="35%" stopColor="#3f3f46" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#71717a" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#27272a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
          </linearGradient>

          {/* Inner Bezel Rim Gradient */}
          <linearGradient id="pcsInnerRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" />
            <stop offset="40%" stopColor="#27272a" />
            <stop offset="70%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          {/* Center Cockpit Radial Ambient Glow */}
          <radialGradient id="pcsCenterAmbient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dc1414" stopOpacity="0.16" />
            <stop offset="45%" stopColor="#dc1414" stopOpacity="0.06" />
            <stop offset="75%" stopColor="#000000" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>

          {/* Outer Drop Shadow for Dial depth */}
          <filter id="pcsDialDepth" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="24" floodColor="#000000" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* 1A. Outer Background Disc */}
        <circle cx="180" cy="180" r="176" fill="#030304" filter="url(#pcsDialDepth)" />

        {/* 1B. Outer Metallic Bezel Ring */}
        <circle
          cx="180"
          cy="180"
          r="174"
          fill="none"
          stroke="url(#pcsOuterBezel)"
          strokeWidth="6"
        />

        {/* 1C. Outer Hairline Specular Ring */}
        <circle
          cx="180"
          cy="180"
          r="176.5"
          fill="none"
          stroke="url(#pcsHairlineHighlight)"
          strokeWidth="1.2"
        />

        {/* 1D. Recessed Circular Channel / Groove (Base Dark Track) */}
        <circle
          cx="180"
          cy="180"
          r="157"
          fill="none"
          stroke="#09090b"
          strokeWidth="24"
        />

        {/* 1E. Channel Inner Shadow Edges (Cylindrical depth) */}
        <circle
          cx="180"
          cy="180"
          r="169"
          fill="none"
          stroke="#18181b"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx="180"
          cy="180"
          r="145"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* 1F. Metallic Reflection Arc on non-glowing portion of track (top-left) */}
        <path
          d="M 68 180 A 112 112 0 0 1 180 68"
          fill="none"
          stroke="url(#pcsGrooveReflection)"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* 1G. Inner Bezel Rim (Between channel and center cockpit) */}
        <circle
          cx="180"
          cy="180"
          r="144"
          fill="none"
          stroke="url(#pcsInnerRim)"
          strokeWidth="4"
        />
        <circle
          cx="180"
          cy="180"
          r="142"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
        />

        {/* 1H. Deep Black Center Cockpit Disc with Subtle Ambient Red Flare */}
        <circle cx="180" cy="180" r="141" fill="#000000" />
        <circle
          cx="180"
          cy="180"
          r="140"
          fill="url(#pcsCenterAmbient)"
          style={{ animation: 'pcsAmbientPulse 3s ease-in-out infinite' }}
        />
      </svg>

      {/* 2. Rotating Neon Red Light Bar (Layer with CSS Spin) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          animation: 'pcsGaugeSpin 2.1s linear infinite',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 360 360" className="w-full h-full overflow-visible">
          <defs>
            {/* Neon Red Intense Glow Filter */}
            <filter id="pcsNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blurSmall" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blurMed" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blurLarge" />
              <feMerge>
                <feMergeNode in="blurLarge" />
                <feMergeNode in="blurMed" />
                <feMergeNode in="blurSmall" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Neon Red Core Gradient */}
            <linearGradient id="pcsNeonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="45%" stopColor="#e50914" />
              <stop offset="85%" stopColor="#dc1414" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>

            {/* Specular White-Pink Highlight Gradient along top of tube */}
            <linearGradient id="pcsTubeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#ffe4e6" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#ff8585" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#dc1414" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 2A. Background Bloom Shadow Layer */}
          <circle
            cx="180"
            cy="180"
            r="157"
            fill="none"
            stroke="#ff1a1a"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="395 590"
            strokeDashoffset="0"
            opacity="0.85"
            filter="url(#pcsNeonGlow)"
          />

          {/* 2B. Main Solid Neon Red Tube */}
          <circle
            cx="180"
            cy="180"
            r="157"
            fill="none"
            stroke="url(#pcsNeonGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="395 590"
            strokeDashoffset="0"
          />

          {/* 2C. 3D Glass Specular Streak along outer crest of tube */}
          <circle
            cx="180"
            cy="180"
            r="161.5"
            fill="none"
            stroke="url(#pcsTubeHighlight)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeDasharray="350 635"
            strokeDashoffset="15"
          />

          {/* 2D. Intense Hotspot Glare at the Leading Tip */}
          <circle
            cx="337"
            cy="180"
            r="8.5"
            fill="#ffffff"
            opacity="0.75"
            filter="drop-shadow(0 0 10px #ffffff) drop-shadow(0 0 20px #ff2222)"
          />
        </svg>
      </div>

      {/* 3. Center Cockpit Content (Logo + 'L o a d i n g . . .' + 5 Animated Dots) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-8">
        {/* Prestige Computers Official Logo */}
        <div className="relative flex items-center justify-center -mt-2">
          <img
            src="/logo-white.png"
            alt="Prestige Computers"
            className="w-[170px] sm:w-[195px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(220,20,20,0.4)]"
            width={195}
            height={87}
          />
        </div>

        {/* 'L o a d i n g . . .' Text */}
        <div
          className="text-[13px] sm:text-[14px] font-semibold text-white tracking-[0.38em] uppercase mt-2.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]"
          style={{ letterSpacing: '0.38em', marginLeft: '0.38em' }}
        >
          {title}
        </div>

        {/* 5 Animated Sequential Indicator Dots (4 Red + 1 Grey in Motion) */}
        <div className="flex items-center gap-2.5 mt-2.5">
          {[0, 1, 2, 3, 4].map((idx) => (
            <span
              key={idx}
              className="w-2.5 h-2.5 rounded-full transition-all duration-200"
              style={{
                backgroundColor: idx === 4 ? '#52525b' : '#dc1414',
                boxShadow: idx === 4 ? 'none' : '0 0 8px #ef4444, 0 0 16px rgba(239, 68, 68, 0.6)',
                animation: 'pcsDotCycle 1.6s ease-in-out infinite',
                animationDelay: `${idx * 0.22}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Fullscreen Loader Overlay for page-wide route transitions & checkouts
 */
export function FullscreenLoader({
  isOpen = true,
  isFading = false,
  title = 'L o a d i n g . . .',
}) {
  if (!isOpen) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-opacity duration-200 ease-out will-change-[opacity] ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <BrandLoader title={title} />
    </div>
  )
}
