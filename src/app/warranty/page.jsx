import WarrantyClientView from './WarrantyClientView'

export const metadata = {
  title: 'Warranty & Guarantee Policy | Prestige Computers',
  description:
    'Official Prestige Guarantee terms, 12-month brand-new manufacturer warranties, 6-12 month pre-owned coverage, 2-hour battery guarantee, and QC service center guidelines in Doha, Qatar.',
  alternates: {
    canonical: '/warranty',
  },
}

export default function WarrantyPage() {
  return <WarrantyClientView />
}
