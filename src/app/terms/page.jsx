import LegalPageLayout from '../../components/legal/LegalPageLayout'

export const metadata = {
  title: 'Terms & Conditions | Prestige Computers',
  description:
    'Read the official Terms and Conditions of Prestige Computers regarding computer hardware sales, laptop rentals, custom PC assembly, and payment policies.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms and conditions carefully before purchasing, renting, or configuring hardware on Prestige Computers."
      lastUpdated="18 November 2026"
      badge="Legal Contract"
    >
      <h2>1. Introduction & Acceptance of Terms</h2>
      <p>
        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website, retail storefronts, and online services provided by <strong>Prestige Computers Pvt. Ltd.</strong> (&ldquo;Prestige Computers&rdquo;, &ldquo;PCS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered in Kanpur, Uttar Pradesh, India.
      </p>
      <p>
        By accessing our website, creating an account, purchasing hardware, or booking computer rental equipment, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our services.
      </p>

      <h2>2. User Accounts & Verification</h2>
      <p>
        To access certain features, including order tracking, rental bookings, and personalized checkout, you may be required to register an account. You agree to provide accurate, current, and complete information during registration.
      </p>
      <ul>
        <li>You are solely responsible for maintaining the confidentiality of your account credentials and password.</li>
        <li>You must notify us immediately at <code>support@prestigecomputers.in</code> if you suspect unauthorized access to your account.</li>
        <li>We reserve the right to suspend or terminate accounts that provide fraudulent information or engage in suspicious payment activities.</li>
      </ul>

      <h2>3. Product Pricing, Specifications & Availability</h2>
      <p>
        We make every effort to display accurate pricing, technical specifications, and inventory availability for laptops, desktops, and components.
      </p>
      <ul>
        <li>All prices displayed are in Indian Rupees (₹) and include applicable Goods and Services Tax (GST) unless specified otherwise.</li>
        <li>In the event of an inadvertent typographical error or technical glitch where a product is listed at an incorrect price, Prestige Computers reserves the right to cancel or refuse the order and issue a full refund.</li>
        <li>Images are for illustrative representation; actual chassis color, thermal finish, and packaging may vary slightly depending on OEM batches.</li>
      </ul>

      <h2>4. Computer & Laptop Rental Agreement (&ldquo;Rent On&rdquo;)</h2>
      <p>
        Customers utilizing our rental services enter into a binding equipment rental agreement subject to the following mandatory conditions:
      </p>
      <h3>4.1 Security Deposit & KYC Verification</h3>
      <p>
        Every rental equipment booking requires a refundable security deposit and valid government-issued photo identification (Aadhaar Card, Driving License, or Company GSTIN certificate for corporate leases). Security deposits are refunded within 24 to 48 hours following the safe return and technical inspection of the hardware.
      </p>
      <h3>4.2 Equipment Use & Care</h3>
      <p>
        The customer agrees to use the rented equipment solely for lawful, normal business, educational, or entertainment purposes. The customer shall not dismantle, tamper with internal warranty seals, overclock beyond manufacturer limits, or install pirated software.
      </p>
      <h3>4.3 Damage, Loss & Theft Liability</h3>
      <p>
        In the event of physical damage, water spillage, screen breakage, or total loss/theft of the rented hardware, the customer is liable for the full repair cost or replacement market value of the equipment. Normal operational wear and tear is exempt.
      </p>
      <h3>4.4 Late Returns & Extensions</h3>
      <p>
        Rental equipment must be returned on or before the agreed end date. Late returns without prior extension approval will incur a standard daily late fee of ₹500/day for laptops and ₹1,000/day for high-end workstation rigs.
      </p>

      <h2>5. Custom PC Assembly & Hardware Orders</h2>
      <p>
        Orders for custom liquid-cooled gaming PCs and enterprise workstations require component reservation and specialized labor.
      </p>
      <ul>
        <li>Every custom build undergoes a compulsory 48-hour thermal benchmark burn-in test before dispatch.</li>
        <li>Once assembly and hardware testing commence, custom rig orders cannot be cancelled without a 10% restocking and labor fee.</li>
      </ul>

      <h2>6. Payments, Invoicing & GST Credit</h2>
      <p>
        We support secure payments via UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and verified EMI financing partners.
      </p>
      <ul>
        <li>Registered businesses can provide their GSTIN number during checkout to receive an official B2B Tax Invoice eligible for Input Tax Credit (ITC).</li>
        <li>No Cost EMI is facilitated through third-party banking partners; approval and interest subvention are subject to the issuing bank&rsquo;s criteria.</li>
      </ul>

      <h2>7. Limitation of Liability & Governing Law</h2>
      <p>
        Prestige Computers shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from data loss, business interruption, or software incompatibilities arising from the use of our hardware or services.
      </p>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Kanpur, Uttar Pradesh, India</strong>.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        For inquiries regarding these Terms and Conditions, please contact:
      </p>
      <p>
        <strong>Legal Desk — Prestige Computers Pvt. Ltd.</strong><br />
        D-104, Sharda Apartment, Kakadeo, Kanpur - 208025, Uttar Pradesh, India<br />
        Email: <a href="mailto:legal@prestigecomputers.in" className="text-[#dc1414] font-semibold hover:underline">legal@prestigecomputers.in</a> | Phone: +91 98765 43210
      </p>
    </LegalPageLayout>
  )
}
