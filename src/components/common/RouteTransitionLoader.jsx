'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Slim top progress bar — starts instantly on link click,
 * completes when Next.js finishes the route change.
 * URL changes immediately, no fullscreen blocking overlay.
 */
function ProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  const rafRef = useRef(null)
  const timerRef = useRef(null)
  const currentUrlRef = useRef('')
  const activeRef = useRef(false)

  const clearTimers = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const start = () => {
    clearTimers()
    activeRef.current = true
    setVisible(true)
    setProgress(0)

    // Animate progress from 0 → ~85% quickly, then slow down (never reaches 100 until done)
    let current = 0
    const tick = () => {
      if (!activeRef.current) return
      // Fast at start, slows down as it approaches 85
      const increment = current < 30 ? 8 : current < 60 ? 4 : current < 80 ? 1.5 : 0.3
      current = Math.min(current + increment, 85)
      setProgress(current)
      if (current < 85) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  const finish = () => {
    clearTimers()
    activeRef.current = false
    setProgress(100)
    timerRef.current = setTimeout(() => {
      setVisible(false)
      setProgress(0)
    }, 300)
  }

  // Complete bar when route actually changes
  useEffect(() => {
    const newUrl = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    if (currentUrlRef.current && currentUrlRef.current !== newUrl) {
      finish()
    }
    currentUrlRef.current = newUrl
  }, [pathname, searchParams])

  // Start on link click
  useEffect(() => {
    const handleClick = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = e.target.closest('a')
      if (!anchor) return
      if (anchor.getAttribute('data-no-loader') !== null) return
      if (anchor.hasAttribute('download') || anchor.target === '_blank') return
      const href = anchor.getAttribute('href')
      if (!href) return
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) return

      try {
        const url = new URL(href, window.location.href)
        if (url.origin !== window.location.origin) return
        const current = window.location.pathname + window.location.search
        const target = url.pathname + url.search
        if (current === target && !url.hash) return
        start()
      } catch {
        // invalid URL
      }
    }

    const handlePopState = () => start()

    document.addEventListener('click', handleClick, { capture: true })
    window.addEventListener('popstate', handlePopState)
    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
      window.removeEventListener('popstate', handlePopState)
      clearTimers()
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none"
      style={{ background: 'transparent' }}
    >
      <div
        style={{
          width: `${progress}%`,
          transition: progress === 100 ? 'width 0.15s ease-out' : 'width 0.08s linear',
          height: '100%',
          background: 'linear-gradient(90deg, #dc1414, #ef4444)',
          boxShadow: '0 0 8px rgba(220,20,20,0.6)',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  )
}

export default function RouteTransitionLoader() {
  return (
    <Suspense fallback={null}>
      <ProgressBar />
    </Suspense>
  )
}
