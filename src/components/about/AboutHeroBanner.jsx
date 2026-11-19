export default function AboutHeroBanner() {
  return (
    <section
      aria-label="About Prestige Computers Banner"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#080204] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.3)] mb-10 sm:mb-14 min-h-[260px] sm:min-h-[290px] lg:min-h-[310px] flex items-stretch"
    >
      {/* Right Showroom Image */}
      <div className="absolute top-0 right-0 w-full sm:w-[62%] lg:w-[58%] h-full">
        <img
          src="/banner/about.png"
          alt="Prestige Computers Showroom Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft edge gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#080204] via-[#080204]/60 sm:via-transparent to-transparent" />
      </div>

      {/* Left Red & Black Angled Backdrop */}
      <div className="relative z-10 w-full sm:w-[60%] lg:w-[52%] flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-8 sm:py-10 bg-gradient-to-r from-[#080204] via-[#080204]/95 to-[#080204]/30 sm:to-transparent">
        {/* Decorative angled slice line with red glow */}
        <div
          className="hidden sm:block absolute -right-6 top-0 bottom-0 w-12 pointer-events-none"
          style={{
            background:
              'linear-gradient(115deg, transparent 40%, rgba(225,20,20,0.6) 48%, rgba(225,20,20,1) 50%, transparent 52%)',
          }}
        />

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-5 sm:w-6 h-[2px] bg-[#dc1414]" />
          <span className="text-[11px] sm:text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.14em]">
            About Prestige Computers
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] font-bold italic tracking-[-0.03em] leading-[1.08] text-white">
          About <span className="text-[#e11414] drop-shadow-[0_2px_14px_rgba(225,20,20,0.4)]">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14.5px] lg:text-[15.5px] text-[#d1d5db] font-normal leading-relaxed max-w-[440px]">
          Your Trusted Partner for Laptops, Desktops, Workstations, and IT Solutions.
        </p>
      </div>
    </section>
  )
}
