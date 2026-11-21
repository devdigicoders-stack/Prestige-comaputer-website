import RefundPolicyClientView from './RefundPolicyClientView'

export const metadata = {
  title: 'Refund & Cancellation Policy | Prestige Computers',
  description:
    'Official PCS refund policy, 7-day sealed brand-new return, 3-day technical defect return & 15-day exchange for pre-owned computers, 2% card fee, and bank transfer turnaround.',
  alternates: {
    canonical: '/refund-policy',
  },
}

export default function RefundPolicyPage() {
  return <RefundPolicyClientView />
}
