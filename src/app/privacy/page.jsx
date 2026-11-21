import LegalPageLayout from '../../components/legal/LegalPageLayout'

export const metadata = {
  title: 'Privacy Policy | Prestige Computers',
  description:
    'Learn how Prestige Computers collects, secures, and protects your personal information, rental KYC documents, and payment details in accordance with Indian IT laws.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      titleAr="سياسة حماية البيانات والخصوصية"
      subtitle="Your privacy and trust are paramount. Learn how Prestige Computers collects, stores, and protects your personal and payment data."
      subtitleAr="خصوصيتك وثقتك هي أولويتنا القصوى. تعرف على كيفية جمع وتخزين وحماية بياناتك الشخصية في بريستيج للكمبيوتر."
      lastUpdated="18 November 2026"
      badge="Data Protection"
      badgeAr="حماية البيانات والخصوصية"
    >
      <h2>1. Overview & Commitment to Privacy</h2>
      <p>
        Prestige Computers (Prestige Computer Services / PCS Doha, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), located at Al-Mirqab Mall, Doha, Qatar, is dedicated to safeguarding your personal data and upholding your right to digital privacy. This Privacy Policy outlines our practices regarding the collection, storage, processing, and protection of information gathered through our storefront and services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect only the information necessary to fulfill your hardware orders, provide shipment updates, verify rental agreements, and ensure secure transaction processing:
      </p>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, mobile phone number, delivery address, and account login credentials.</li>
        <li><strong>Transaction & Order Details:</strong> Hardware items purchased, order history, invoice records, and delivery status.</li>
        <li><strong>Rental KYC & Identity Verification:</strong> Government-issued identification documents (Aadhaar Card, Driving License, Passport, or Business GST Certificate) provided exclusively for verifying equipment custody under our &ldquo;Rent On&rdquo; program.</li>
        <li><strong>Technical & Device Data:</strong> IP address, browser type, operating system, and anonymous usage telemetry collected via secure cookies to optimize website performance.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>
        Your data is strictly utilized for legitimate operational and business purposes:
      </p>
      <ul>
        <li>To process, pack, and deliver your computer hardware and accessory orders.</li>
        <li>To provide real-time SMS, WhatsApp, and email shipment tracking milestones.</li>
        <li>To verify identity and prevent equipment loss in our laptop and desktop rental program.</li>
        <li>To process refunds, security deposit returns, and warranty claims.</li>
        <li>To detect and prevent fraudulent transactions, unauthorized access, and cyber threats.</li>
      </ul>

      <h2>4. Payment Security & PCI-DSS Compliance</h2>
      <p>
        We take payment security with the utmost seriousness:
      </p>
      <ul>
        <li><strong>Zero Card Data Storage:</strong> Prestige Computers never stores, logs, or views your credit card numbers, CVV codes, or net banking passwords on our internal servers.</li>
        <li><strong>Encrypted Tokenization:</strong> All payments are processed through PCI-DSS Level 1 certified payment gateway partners (Razorpay, UPI Network, Stripe) with 256-bit SSL encryption.</li>
        <li><strong>Two-Factor Authentication:</strong> Online transactions require mandatory OTP verification as mandated by the Reserve Bank of India (RBI).</li>
      </ul>

      <h2>5. Rental KYC Data Protection & Auto-Purge Policy</h2>
      <p>
        Identity documents submitted for computer rentals are encrypted at rest using AES-256 standards in restricted-access vaults. Once a rental agreement concludes, the hardware is returned, and the security deposit is refunded, KYC documentation is automatically purged after the regulatory audit retention period. We never sell, rent, or trade customer identification records to third-party marketers.
      </p>

      <h2>6. Cookies & Tracking Technologies</h2>
      <p>
        We use essential session cookies to remember your shopping cart items, wishlist selections, and active login state. You can manage or disable non-essential cookies through your browser settings, although certain personalized checkout features may be impacted.
      </p>

      <h2>7. Customer Rights & Data Deletion</h2>
      <p>
        Under applicable Indian data protection frameworks, you hold the right to:
      </p>
      <ul>
        <li>Request a copy of the personal information stored in your account.</li>
        <li>Update or correct inaccurate contact, billing, or address information.</li>
        <li>Request permanent deletion of your account and personal records (subject to statutory tax and invoice retention obligations).</li>
      </ul>

      <h2>8. Grievance Officer & Contact Information</h2>
      <p>
        For inquiries regarding our data handling or privacy practices, please contact our designated officer:
      </p>
      <p>
        <strong>Data Privacy &amp; Customer Support Desk</strong><br />
        Prestige Computers (PCS Doha)<br />
        Tower I, 2nd Floor, Office No 201, Al-Mirqab Mall, Al Mirqab Al Jadeed St, Doha, Qatar<br />
        Email: <a href="mailto:info@pcsdoha.net" className="text-[#dc1414] font-semibold hover:underline">info@pcsdoha.net</a> | Direct: +974 4145 3868 | WhatsApp: +974 6691 9155<br />
        Working Hours: Saturday – Thursday, 10:00 AM – 10:00 PM (Friday: 2:30 PM – 10:30 PM)
      </p>
    </LegalPageLayout>
  )
}
