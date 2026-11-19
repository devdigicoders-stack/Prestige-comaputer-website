'use client'

/**
 * BrandLoader - Prestige Computers Signature Animated Loader
 * Matches mockup design:
 * - PCS | PRESTIGE COMPUTERS header logo
 * - Spinning gradient red arc ring
 * - Outline red laptop in center with subtle breathe animation
 * - "Loading..." & "Please wait a moment"
 * - 3 animated pulsing red progress pills
 */

export function LaptopOutlineIcon({ className = 'w-16 h-12' }) {
  return (
    <svg
      viewBox="0 0 72 52"
      fill="none"
      className={`${className} text-[#dc1414] drop-shadow-[0_2px_8px_rgba(220,20,20,0.2)]`}
      aria-hidden="true"
    >
      {/* Laptop Screen Lid Outline */}
      <path
        d="M13 6C13 4.89543 13.8954 4 15 4H57C58.1046 4 59 4.89543 59 6V37H13V6Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {/* Laptop Base / Deck */}
      <path
        d="M4 42C4 39.7909 5.79086 38 8 38H64C66.2091 38 68 39.7909 68 42L66.5 45C66.5 46.1046 65.6046 47 64.5 47H7.5C6.39543 47 5.5 46.1046 5.5 45L4 42Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* Trackpad notch */}
      <rect x="31" y="39.5" width="10" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}

export function BrandLogoHeader() {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      {/* PCS Bold Red Italic Logo */}
      <span className="text-[25px] font-black italic tracking-tighter text-[#dc1414] leading-none">
        PCS
      </span>
      <span className="text-[20px] text-[#cbd5e1] font-light leading-none -mt-0.5">
        |
      </span>
      {/* PRESTIGE COMPUTERS Text */}
      <div className="flex flex-col text-left leading-none">
        <span className="text-[11.5px] font-black tracking-wider text-[#111827]">
          PRESTIGE
        </span>
        <span className="text-[9px] font-bold tracking-wider text-[#4b5563] mt-0.5">
          COMPUTERS
        </span>
      </div>
    </div>
  )
}

export default function BrandLoader({
  title = 'Loading...',
  subtitle = 'Please wait a moment',
  isCard = true,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col items-center text-center select-none ${
        isCard
          ? 'bg-white rounded-[26px] p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#f1f5f9] max-w-[280px] sm:max-w-[310px] w-full mx-auto'
          : ''
      } ${className}`}
    >
      <style>{`
        @keyframes pcsPillWave {
          0%, 100% {
            background-color: #fee2e2;
            opacity: 0.45;
            transform: scale(0.92);
          }
          33% {
            background-color: #dc1414;
            opacity: 1;
            transform: scale(1);
          }
          66% {
            background-color: #fca5a5;
            opacity: 0.7;
            transform: scale(0.96);
          }
        }
        @keyframes pcsBreathe {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.95;
          }
        }
      `}</style>

      {/* 1. Header Logo */}
      <BrandLogoHeader />

      {/* 2. Center Animated Graphic: Spinning Gradient Ring + Center Laptop */}
      <div className="relative w-36 h-36 my-2 flex items-center justify-center">
        {/* SVG Rotating Gradient Ring */}
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: '1.2s', animationTimingFunction: 'linear' }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pcsSpinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc1414" stopOpacity="1" />
              <stop offset="55%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#dc1414" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#dc1414" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background track (subtle light gray ring) */}
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="#fef2f2"
            strokeWidth="4"
          />

          {/* Spinning Gradient Arc */}
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="url(#pcsSpinnerGradient)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray="235"
            strokeDashoffset="65"
          />
        </svg>

        {/* Center Outline Laptop with subtle breathing effect */}
        <div
          className="relative z-10"
          style={{ animation: 'pcsBreathe 2s ease-in-out infinite' }}
        >
          <LaptopOutlineIcon className="w-16 h-12" />
        </div>
      </div>

      {/* 3. Loading Text */}
      <h3 className="text-[19px] sm:text-[20px] font-black text-[#111827] mt-3 tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-[13px] text-[#6b7280] mt-1 font-medium">
        {subtitle}
      </p>

      {/* 4. Bottom 3 Animated Pulsing Pills */}
      <div className="flex items-center justify-center gap-1.5 mt-4 pt-1">
        <span
          className="h-2 rounded-full"
          style={{
            width: '22px',
            animation: 'pcsPillWave 1.2s ease-in-out infinite',
            animationDelay: '0s',
          }}
        />
        <span
          className="h-2 rounded-full"
          style={{
            width: '22px',
            animation: 'pcsPillWave 1.2s ease-in-out infinite',
            animationDelay: '0.4s',
          }}
        />
        <span
          className="h-2 rounded-full"
          style={{
            width: '22px',
            animation: 'pcsPillWave 1.2s ease-in-out infinite',
            animationDelay: '0.8s',
          }}
        />
      </div>
    </div>
  )
}

/**
 * Fullscreen Loader Overlay with backdrop blur for page transitions
 */
export function FullscreenLoader({
  isOpen = true,
  isFading = false,
  title = 'Loading...',
  subtitle = 'Please wait a moment',
}) {
  if (!isOpen) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white/75 backdrop-blur-sm p-4 transition-opacity duration-150 ease-out will-change-[opacity] ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <BrandLoader title={title} subtitle={subtitle} isCard={true} />
    </div>
  )
}
