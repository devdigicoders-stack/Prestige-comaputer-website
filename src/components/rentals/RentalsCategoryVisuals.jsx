export function RentalLaptopVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full max-h-[110px]" aria-hidden="true">
      <defs>
        <linearGradient id="catLapScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Screen Frame */}
      <polygon points="36,18 184,18 178,98 42,98" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <polygon points="40,22 180,22 174,94 46,94" fill="url(#catLapScreen)" />
      {/* Abstract Wave on Screen */}
      <path d="M46 70 Q110 35 174 85 L174 94 L46 94 Z" fill="#60a5fa" fillOpacity="0.4" />
      <circle cx="110" cy="20" r="1.5" fill="#64748b" />
      {/* Base */}
      <polygon points="42,98 178,98 206,118 14,118" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <polygon points="14,118 206,118 202,122 18,122" fill="#0f172a" />
      {/* Trackpad */}
      <rect x="94" y="105" width="32" height="10" rx="1.5" fill="#334155" />
    </svg>
  )
}

export function RentalDesktopVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full max-h-[110px]" aria-hidden="true">
      <defs>
        <linearGradient id="catDeskScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="60%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Monitor Screen */}
      <rect x="18" y="18" width="115" height="74" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <rect x="22" y="22" width="107" height="66" rx="2" fill="url(#catDeskScreen)" />
      <path d="M22 65 Q75 35 129 70 L129 88 L22 88 Z" fill="#818cf8" fillOpacity="0.45" />
      {/* Monitor Stand */}
      <rect x="70" y="92" width="11" height="16" fill="#334155" />
      <path d="M52 108 L99 108 L103 112 L48 112 Z" fill="#1e293b" />

      {/* Desktop Tower */}
      <rect x="145" y="14" width="55" height="100" rx="4" fill="#0b0f19" stroke="#334155" strokeWidth="1.5" />
      <rect x="149" y="18" width="47" height="92" rx="2" fill="#111827" />
      {/* RGB Cooling Ring Fans */}
      <circle cx="172.5" cy="38" r="10" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
      <circle cx="172.5" cy="38" r="4" fill="#0284c7" />
      <circle cx="172.5" cy="65" r="10" fill="none" stroke="#ec4899" strokeWidth="2.5" />
      <circle cx="172.5" cy="65" r="4" fill="#db2777" />
      <circle cx="172.5" cy="92" r="10" fill="none" stroke="#eab308" strokeWidth="2.5" />
      <circle cx="172.5" cy="92" r="4" fill="#ca8a04" />
    </svg>
  )
}

export function RentalWorkstationVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full max-h-[110px]" aria-hidden="true">
      <defs>
        <linearGradient id="catWorkScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#311042" />
          <stop offset="50%" stopColor="#701a75" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Left Monitor */}
      <rect x="14" y="24" width="86" height="60" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <rect x="17" y="27" width="80" height="54" rx="1.5" fill="url(#catWorkScreen)" />
      <path d="M17 62 Q57 38 97 66 L97 81 L17 81 Z" fill="#c084fc" fillOpacity="0.4" />
      <rect x="52" y="84" width="9" height="15" fill="#334155" />
      <rect x="38" y="99" width="37" height="4" rx="1" fill="#1e293b" />

      {/* Right Monitor */}
      <rect x="108" y="24" width="86" height="60" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <rect x="111" y="27" width="80" height="54" rx="1.5" fill="url(#catWorkScreen)" />
      <path d="M111 62 Q151 38 191 66 L191 81 L111 81 Z" fill="#60a5fa" fillOpacity="0.4" />
      <rect x="146" y="84" width="9" height="15" fill="#334155" />
      <rect x="132" y="99" width="37" height="4" rx="1" fill="#1e293b" />
    </svg>
  )
}

export function RentalMonitorVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full max-h-[110px]" aria-hidden="true">
      <defs>
        <linearGradient id="catMonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1833" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Monitor Display */}
      <rect x="25" y="16" width="170" height="85" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <rect x="28" y="19" width="164" height="79" rx="2" fill="url(#catMonGrad)" />
      {/* Abstract Glowing Curve */}
      <path d="M28 72 C80 25, 120 100, 192 48 L192 98 L28 98 Z" fill="#38bdf8" fillOpacity="0.45" />
      {/* Ergonomic Stand */}
      <rect x="103" y="101" width="14" height="15" fill="#475569" />
      <path d="M78 116 L142 116 L147 121 L73 121 Z" fill="#1e293b" />
    </svg>
  )
}

export function RentalAccessoriesVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full max-h-[110px]" aria-hidden="true">
      <defs>
        <linearGradient id="accNeon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Keyboard */}
      <rect x="16" y="55" width="118" height="52" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <line x1="22" y1="64" x2="128" y2="64" stroke="url(#accNeon)" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="22" y1="73" x2="128" y2="73" stroke="url(#accNeon)" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="22" y1="82" x2="128" y2="82" stroke="url(#accNeon)" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="22" y1="91" x2="128" y2="91" stroke="url(#accNeon)" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="44" y="97" width="56" height="4" rx="1" fill="#71717a" />

      {/* Headset on Right */}
      <path d="M165 30 A 28 28 0 0 1 202 58" fill="none" stroke="#27272a" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="156" y="54" width="12" height="24" rx="4" fill="#09090b" stroke="#dc1414" strokeWidth="1.5" />
      <rect x="198" y="54" width="12" height="24" rx="4" fill="#09090b" stroke="#dc1414" strokeWidth="1.5" />
      <circle cx="162" cy="66" r="3" fill="#dc1414" />
      <circle cx="204" cy="66" r="3" fill="#dc1414" />

      {/* Gaming Mouse */}
      <path d="M150 90 C150 82 158 76 166 76 C174 76 182 82 182 90 L182 104 C182 112 174 116 166 116 C158 116 150 112 150 104 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <line x1="166" y1="76" x2="166" y2="90" stroke="#dc1414" strokeWidth="1.5" />
      <circle cx="166" cy="84" r="2" fill="#ef4444" />
    </svg>
  )
}
