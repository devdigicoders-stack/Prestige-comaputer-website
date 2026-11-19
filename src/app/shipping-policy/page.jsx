import LegalPageLayout from '../../components/legal/LegalPageLayout'

export const metadata = {
  title: 'Shipping & Delivery Policy | Prestige Computers',
  description:
    'Details on delivery timelines, express shipping, double-boxed fragile PC packaging, 100% transit insurance, and tracking at Prestige Computers.',
  alternates: {
    canonical: '/shipping-policy',
  },
}

export default function ShippingPolicyPage() {
  return (
    <LegalPageLayout
      title="Shipping & Delivery Policy"
      subtitle="How we pack, insure, and dispatch your high-performance laptops and custom PC rigs safely to your doorstep."
      lastUpdated="18 November 2026"
      badge="Logistics & Delivery"
    >
      <h2>1. Serviceable Areas & Coverage</h2>
      <p>
        Prestige Computers ships to over <strong>19,000+ PIN codes across India</strong> via premier logistics partners (BlueDart Express, Delhivery, DTDC, and PCS Express Fleet). We also operate dedicated European and UK distribution hubs from our London technology studio.
      </p>

      <h2>2. Delivery Timelines & Charges</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-xs sm:text-sm border-collapse border border-[#e5e7eb] rounded-xl overflow-hidden">
          <thead className="bg-[#f8fafc] text-[#111827]">
            <tr>
              <th className="border border-[#e5e7eb] p-3 text-left font-bold">Delivery Mode</th>
              <th className="border border-[#e5e7eb] p-3 text-left font-bold">Estimated Turnaround</th>
              <th className="border border-[#e5e7eb] p-3 text-left font-bold">Shipping Cost</th>
              <th className="border border-[#e5e7eb] p-3 text-left font-bold">Applicability</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e7eb] text-[#4b5563]">
            <tr>
              <td className="border border-[#e5e7eb] p-3 font-semibold text-[#111827]">Standard Delivery</td>
              <td className="border border-[#e5e7eb] p-3">2 – 4 Business Days</td>
              <td className="border border-[#e5e7eb] p-3 text-[#16a34a] font-bold">FREE (₹0)</td>
              <td className="border border-[#e5e7eb] p-3">All orders across India</td>
            </tr>
            <tr>
              <td className="border border-[#e5e7eb] p-3 font-semibold text-[#111827]">Express Delivery</td>
              <td className="border border-[#e5e7eb] p-3">24 – 48 Hours</td>
              <td className="border border-[#e5e7eb] p-3 font-bold text-[#dc1414]">₹199</td>
              <td className="border border-[#e5e7eb] p-3">Kanpur, Lucknow & Metros</td>
            </tr>
            <tr>
              <td className="border border-[#e5e7eb] p-3 font-semibold text-[#111827]">Same-Day Store Pickup</td>
              <td className="border border-[#e5e7eb] p-3">Ready in 2 Hours</td>
              <td className="border border-[#e5e7eb] p-3 text-[#16a34a] font-bold">FREE (₹0)</td>
              <td className="border border-[#e5e7eb] p-3">Kakadeo & Civil Lines Hubs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Industrial-Grade Packaging for Fragile Hardware</h2>
      <p>
        High-performance gaming laptops and custom desktop towers contain delicate silicon, heavy graphics cards, and glass panels. We employ specialized packing protocols:
      </p>
      <ul>
        <li><strong>Expanding Internal Foam (Custom PCs):</strong> Custom desktop towers are packed with expanding chemical foam bags inside the chassis that harden around the graphics card (RTX 4070/4080/4090) and CPU tower heatsink, eliminating PCIe slot stress during courier movement.</li>
        <li><strong>Double-Walled Heavy Corrugated Boxes:</strong> High-burst strength outer boxes surrounded by high-density polyethylene (EPE) corner protectors.</li>
        <li><strong>Holographic Tamper-Proof Seals:</strong> Every box is secured with serial-numbered security tape. If the tape appears broken or tampered with, customers are advised to refuse delivery.</li>
      </ul>

      <h2>4. 100% Comprehensive Transit Insurance</h2>
      <p>
        Every single hardware shipment dispatched by Prestige Computers is <strong>100% insured against loss, theft, and transit damage</strong> at no extra cost to the buyer. In the rare event a shipment is damaged or lost by the courier, Prestige Computers will dispatch an immediate replacement unit without making the customer wait for insurance settlement.
      </p>

      <h2>5. Delivery Verification & Mandatory OTP Handover</h2>
      <p>
        To ensure packages reach the rightful recipient, high-value electronics (laptops, gaming PCs, and rental hardware) require a mandatory <strong>One-Time Password (OTP)</strong> sent to your registered mobile number at the time of doorstep handover.
      </p>

      <h2>6. Damaged or Tampered Package on Arrival</h2>
      <p>
        If the outer packaging shows visible tears, crushing, or tampered tape upon arrival:
      </p>
      <ol>
        <li>Do NOT accept the delivery or share the delivery OTP.</li>
        <li>Ask the delivery executive to mark &ldquo;Damaged in Transit / Delivery Refused&rdquo;.</li>
        <li>Notify our support team immediately at <code>+91 98765 43210</code> or <code>support@prestigecomputers.in</code>. A brand-new replacement will be prioritized for dispatch.</li>
      </ol>
    </LegalPageLayout>
  )
}
