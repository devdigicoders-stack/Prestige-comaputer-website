import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#dc1414]">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-[#111827]">Page Not Found</h2>
      <p className="mt-2 text-[#6b7280]">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2.5 rounded-lg bg-[#dc1414] text-white font-semibold hover:bg-[#b91c1c] transition-colors cursor-pointer"
      >
        Back to Home
      </Link>
    </div>
  )
}
