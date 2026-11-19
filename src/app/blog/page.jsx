import BlogListView from '../../components/blog/BlogListView'

export const metadata = {
  title: 'Tech Guides & Hardware Blog | Prestige Computers',
  description:
    'Read the latest buying guides, gaming laptop benchmarks, custom PC assembly tips, and computer rental insights from Prestige Computers experts.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return <BlogListView />
}
