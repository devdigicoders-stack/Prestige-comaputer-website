import BlogDetailView from '../../../components/blog/BlogDetailView'
import { BLOG_POSTS } from '../../../data/blogData'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams?.slug)

  if (!post) {
    return {
      title: 'Article Not Found | Prestige Computers',
    }
  }

  return {
    title: `${post.title} | Prestige Computers`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params
  return <BlogDetailView slug={resolvedParams?.slug} />
}
