import AboutHeroBanner from './AboutHeroBanner'
import AboutWhoWeAre from './AboutWhoWeAre'
import AboutStatsStrip from './AboutStatsStrip'
import AboutMissionVision from './AboutMissionVision'
import AboutWhyChooseUs from './AboutWhyChooseUs'
import AboutJourneyGallery from './AboutJourneyGallery'
import AboutBottomCta from './AboutBottomCta'

export default function AboutView() {
  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen py-5 sm:py-8">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* 1. Hero Banner */}
        <AboutHeroBanner />

        {/* 2. Who We Are */}
        <AboutWhoWeAre />

        {/* 3. 4-Card Stats Strip */}
        <AboutStatsStrip />

        {/* 4. Our Mission & Vision */}
        <AboutMissionVision />

        {/* 5. Why Choose PCS? */}
        <AboutWhyChooseUs />

        {/* 6. A Glimpse of Prestige Computers / Gallery */}
        <AboutJourneyGallery />

        {/* 7. Bottom CTA */}
        <AboutBottomCta />
      </div>
    </div>
  )
}
