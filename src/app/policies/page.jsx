import PoliciesClientView from './PoliciesClientView'

export const metadata = {
  title: 'Official PCS Policies Document | Prestige Computer Services (PCS Doha)',
  description:
    'Official bilingual policies (English & العربية) for Prestige Computer Services (PCS Doha): Brand-new and pre-owned hardware guarantees, warranty terms, return timelines, and quality control guidelines.',
  alternates: {
    canonical: '/policies',
  },
}

export default function PoliciesPage() {
  return <PoliciesClientView />
}
