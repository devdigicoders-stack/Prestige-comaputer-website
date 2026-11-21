import BrandLoader from '@/components/common/BrandLoader'

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
    >
      <BrandLoader />
    </div>
  )
}
