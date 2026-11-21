import { getActiveCategories } from '../../services/categoryApi'
import FooterClient from './FooterClient'

export default async function Footer() {
  let categories = []
  try {
    const liveCategories = await getActiveCategories()
    if (liveCategories && Array.isArray(liveCategories)) {
      categories = liveCategories
    }
  } catch {
    // Keep empty fallback
  }

  return <FooterClient initialCategories={categories} />
}
