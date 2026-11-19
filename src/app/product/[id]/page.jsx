import { redirect } from 'next/navigation'

export default async function ProductRedirectPage({ params }) {
  const resolvedParams = await params
  const id = resolvedParams?.id || 'dell-inspiron-15'
  redirect(`/products/${id}`)
}
