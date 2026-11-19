import LegalPageLayout from '../../components/legal/LegalPageLayout'

export const metadata = {
  title: 'Warranty & Rental Agreement Policy | Prestige Computers',
  description:
    'Complete details regarding official OEM manufacturer warranties, Prestige Computers 1-Year Certified Care, custom PC build coverage, and rental hardware guarantees.',
  alternates: {
    canonical: '/warranty',
  },
}

export default function WarrantyPage() {
  return (
    <LegalPageLayout
      title="Warranty & Rental Agreement"
      subtitle="Complete coverage details for OEM hardware warranties, custom PC builds, and equipment terms under the Prestige Computers Rent On program."
      lastUpdated="18 November 2026"
      badge="Warranty & Service"
    >
      <h2>1. Official Brand Manufacturer Warranty</h2>
      <p>
        Every brand-new laptop, pre-built workstation, monitor, and boxed component sold by Prestige Computers comes with an authentic <strong>Official Manufacturer Warranty</strong> (Dell, HP, Lenovo, ASUS, Apple, Acer, MSI, Corsair, Kingston, Western Digital).
      </p>
      <ul>
        <li><strong>Laptops & Pre-builts:</strong> 1 to 3 Years official On-site / Carry-in manufacturer warranty.</li>
        <li><strong>Processors & Motherboards:</strong> 3 Years brand replacement warranty.</li>
        <li><strong>RAM & Storage (NVMe SSDs):</strong> 3 to 5 Years manufacturer warranty (up to 10 years / TBW limit on select enterprise NVMe SSDs).</li>
        <li><strong>Power Supplies (PSUs):</strong> 5 to 10 Years 80+ Gold/Platinum certified warranty.</li>
      </ul>

      <h2>2. Prestige Computers Certified Care (Complimentary 1-Year)</h2>
      <p>
        In addition to OEM brand warranties, every computer purchased from Prestige Computers automatically receives complimentary <strong>Prestige Computers Certified Care</strong> for 1 Year:
      </p>
      <ul>
        <li><strong>Free Lifetime Labor Diagnostics:</strong> Walk into our Kakadeo or Civil Lines experience hubs anytime for free hardware diagnostics.</li>
        <li><strong>Free Annual Thermal Repasting:</strong> Complimentary cleaning, dust removal, and high-conductivity thermal paste re-application (Arctic MX-4 / Thermal Grizzly) to keep temps low and FPS high.</li>
        <li><strong>On-Site Doorstep Pickup Support:</strong> In major hubs like Kanpur and Lucknow, we arrange doorstep pickup and coordinate directly with authorized brand service centers on your behalf.</li>
      </ul>

      <h2>3. Custom PC Build System Warranty</h2>
      <p>
        Custom gaming rigs and workstation towers assembled in our Kakadeo facility are covered under a dual-tier protection model:
      </p>
      <ul>
        <li><strong>Component-Level Warranties:</strong> Each individual hardware component retains its full 3-year or 5-year OEM manufacturer warranty.</li>
        <li><strong>1-Year Prestige System Integration Warranty:</strong> We guarantee the stability of our assembly, cabling, liquid-cooling loops, BIOS optimizations, and thermal tuning for a full 12 months. If any component malfunctions, our engineers diagnose the fault and replace the specific part under warranty with zero assembly charges.</li>
      </ul>

      <h2>4. Computer & Laptop Rental Agreement (&ldquo;Rent On&rdquo;) Terms</h2>
      <p>
        For customers renting equipment under our &ldquo;Rent On&rdquo; program:
      </p>
      <h3>4.1 Operational Guarantee & 24-Hour Swap</h3>
      <p>
        If any rented laptop or desktop experiences a hardware breakdown or component failure during your active rental tenure, Prestige Computers guarantees a <strong>free hardware replacement within 24 hours</strong> in serviceable hubs, ensuring zero loss of business or study productivity.
      </p>
      <h3>4.2 Equipment Maintenance & Support</h3>
      <p>
        Prestige Computers provides ongoing remote and phone technical support for all rented equipment. Routine OS maintenance, driver updates, and hardware tune-ups are provided free of charge.
      </p>
      <h3>4.3 Security Deposit Refund Rules</h3>
      <p>
        Upon the completion of the rental tenure, the equipment must be returned with its original power adapter and accessories. The refundable security deposit is processed and returned to the customer&rsquo;s verified bank account or UPI within <strong>24 to 48 hours</strong> of physical inspection.
      </p>

      <h2>5. Exclusions & What is NOT Covered</h2>
      <p>
        Warranty coverage and rental damage waivers do not apply to the following conditions:
      </p>
      <ul>
        <li>Accidental physical drop damage, crushed chassis, or cracked LCD/OLED display panels.</li>
        <li>Liquid spills, immersion, corrosive substance exposure, or moisture oxidation on internal motherboards.</li>
        <li>Unauthorized third-party hardware repairs, BIOS modding, or broken manufacturer tamper seals.</li>
        <li>Electrical burnouts caused by non-certified power adapters, improper building earthing, or extreme high-voltage grid surges (we strongly recommend using a reputable surge protector or UPS).</li>
      </ul>

      <h2>6. How to Claim Warranty or Request Rental Service</h2>
      <p>
        To submit a warranty inquiry or report a technical issue:
      </p>
      <ol>
        <li><strong>Walk-In:</strong> Bring your machine along with the purchase invoice to our flagship hub at D-104, Sharda Apartment, Kakadeo, Kanpur.</li>
        <li><strong>Online Portal:</strong> Visit our <a href="/contact" className="text-[#dc1414] font-semibold hover:underline">Contact Page</a> or <a href="/faq" className="text-[#dc1414] font-semibold hover:underline">Help Center</a> with your Order ID.</li>
        <li><strong>Helpline:</strong> Call our hardware support desk at <code>+91 98765 43210</code> or email <code>support@prestigecomputers.in</code>.</li>
      </ol>
    </LegalPageLayout>
  )
}
