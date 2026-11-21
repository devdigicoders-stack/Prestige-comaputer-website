import BlogDetailView from '../../../components/blog/BlogDetailView'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const { slug } = await params
  return {
    title: `Blog | Prestige Computers`,
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params
  return <BlogDetailView slug={slug} />
}
