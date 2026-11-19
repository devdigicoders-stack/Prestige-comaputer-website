import LegalPageLayout from '../../components/legal/LegalPageLayout'

export const metadata = {
  title: 'Refund & Cancellation Policy | Prestige Computers',
  description:
    'Review the official 7-day replacement, cancellation, and refund policies of Prestige Computers for laptops, custom PCs, components, and rental security deposits.',
  alternates: {
    canonical: '/refund-policy',
  },
}

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      subtitle="Clear, transparent terms regarding product returns, order cancellations, doorstep replacements, and rental security deposit refunds."
      lastUpdated="18 November 2026"
      badge="Customer Protection"
    >
      <h2>1. 7-Day Doorstep Replacement & Return Window</h2>
      <p>
        At Prestige Computers, we stand behind the quality of every laptop, desktop rig, and accessory we deliver. We offer a <strong>7-Day Replacement or Return Policy</strong> from the date of package delivery for hardware purchased directly from our website or retail stores.
      </p>

      <h2>2. Conditions Eligible for Return or Replacement</h2>
      <p>
        You are eligible for a free doorstep replacement or 100% refund if your order meets any of the following criteria:
      </p>
      <ul>
        <li><strong>Manufacturing Hardware Defect:</strong> Display dead pixels, motherboard failure, RAM/SSD faults, or charging malfunctions verified by our diagnostics team.</li>
        <li><strong>Transit Physical Damage:</strong> Packaging or machine damaged during courier transit (must be reported within 48 hours with unboxing photos/video).</li>
        <li><strong>Specification Mismatch:</strong> Product received differs from the invoice or ordered specifications (e.g. processor variant, RAM capacity, or color).</li>
      </ul>

      <h2>3. Non-Returnable & Non-Refundable Items</h2>
      <p>
        The following circumstances and categories are exempt from return or refund:
      </p>
      <ul>
        <li>Products with physical, accidental, or liquid spillage damage caused after successful delivery.</li>
        <li>Hardware where OEM warranty stickers, serial numbers, or tamper-proof bar codes have been removed, defaced, or altered.</li>
        <li>Opened operating system licenses, digital software codes, or antivirus cards once activated.</li>
        <li>Custom-built liquid-cooled gaming rigs after hardware burn-in testing and delivery (hardware defects in individual components remain fully covered under component replacement warranty).</li>
      </ul>

      <h2>4. Order Cancellation Policy</h2>
      <h3>4.1 Before Dispatch</h3>
      <p>
        Standard orders can be cancelled anytime before dispatch with a <strong>100% instant refund</strong>. You can cancel directly from your Profile Dashboard or by calling our customer helpline at <code>+91 98765 43210</code>.
      </p>
      <h3>4.2 After Dispatch</h3>
      <p>
        If an order has already been handed over to the courier partner, cancellation will incur a nominal two-way transit logistics deduction (₹300 for laptops, ₹800 for high-end desktop towers). The remaining balance will be refunded immediately upon the package returning to our warehouse.
      </p>
      <h3>4.3 Custom PC Builds</h3>
      <p>
        Because custom PC builds involve component reservation, custom cable sleeving, and dedicated technician labor, cancellation after assembly and burn-in testing has commenced will incur a 10% restocking and labor fee.
      </p>

      <h2>5. Rental Security Deposit Refund Timeline</h2>
      <p>
        Under our &ldquo;Rent On&rdquo; computer rental program:
      </p>
      <ul>
        <li>Your security deposit is <strong>100% refundable</strong> upon the conclusion of your rental tenure.</li>
        <li>Once our technical engineer conducts a standard operational check (power-on, screen integrity, charger included), your deposit is credited back to your original payment method or verified UPI ID within <strong>24 to 48 hours</strong>.</li>
        <li>A formal Deposit Return Receipt with bank UTR transaction reference is sent to your registered email and WhatsApp.</li>
      </ul>

      <h2>6. Refund Methods & Turnaround Time</h2>
      <p>
        Once an eligible return is approved and received at our facility, refunds are processed according to the original payment channel:
      </p>
      <ul>
        <li><strong>UPI (Google Pay, PhonePe, Paytm):</strong> 24 to 48 hours.</li>
        <li><strong>Net Banking (NEFT/IMPS):</strong> 2 to 4 business days.</li>
        <li><strong>Credit & Debit Cards:</strong> 5 to 7 business days (subject to issuing bank billing cycles).</li>
        <li><strong>Cash on Delivery (COD) Orders:</strong> Refunded directly to your verified bank account via IMPS within 48 hours of product inspection.</li>
      </ul>

      <h2>7. How to Initiate a Return</h2>
      <p>
        Initiating a replacement or return is simple:
      </p>
      <ol>
        <li>Go to your <a href="/profile" className="text-[#dc1414] font-semibold hover:underline">Customer Dashboard</a> or visit our <a href="/contact" className="text-[#dc1414] font-semibold hover:underline">Contact Page</a>.</li>
        <li>Submit your Order ID, attach photos/video demonstrating the issue, and select &ldquo;Request Return/Replacement&rdquo;.</li>
        <li>Our technical support desk will schedule a free reverse doorstep pickup with our insured courier partner within 24 hours.</li>
      </ol>
    </LegalPageLayout>
  )
}
