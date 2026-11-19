'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { FullscreenLoader } from './BrandLoader'

/**
 * RouteTransitionLoader
 * Automatically triggers Prestige Computers branded loader on:
 * 1. Internal link clicks across the whole website
 * 2. Browser back / forward buttons (popstate)
 * 3. Custom events ('pcs:start-loading', 'pcs:stop-loading')
 * 4. Page change detection via pathname & searchParams
 */
function TransitionLoaderInternal() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [loaderText, setLoaderText] = useState({
    title: 'Loading...',
    subtitle: 'Please wait a moment',
  })

  // Keep track of current URL to detect actual route changes
  const currentUrlRef = useRef('')
  const showTimeRef = useRef(0)
  const safetyTimerRef = useRef(null)
  const fadeTimerRef = useRef(null)

  useEffect(() => {
    currentUrlRef.current = window.location.pathname + window.location.search
  }, [])

  // Start smooth loader
  const startLoading = (title = 'Loading...', subtitle = 'Please wait a moment') => {
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current)
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current)

    setLoaderText({ title, subtitle })
    showTimeRef.current = Date.now()
    setIsFading(false)
    setIsLoading(true)

    // Safety timeout: automatically hide after 5 seconds to prevent getting stuck
    safetyTimerRef.current = setTimeout(() => {
      stopLoading()
    }, 5000)
  }

  // Stop smooth loader with fade out
  const stopLoading = () => {
    const elapsed = Date.now() - showTimeRef.current
    const minDisplayTime = 120 // snappy and responsive transition without artificial lag
    const remainingTime = Math.max(0, minDisplayTime - elapsed)

    setTimeout(() => {
      setIsFading(true)
      fadeTimerRef.current = setTimeout(() => {
        setIsLoading(false)
        setIsFading(false)
      }, 160) // ultra-smooth quick fade transition
    }, remainingTime)
  }

  // Detect route change completion
  useEffect(() => {
    const newUrl = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    if (currentUrlRef.current !== newUrl) {
      currentUrlRef.current = newUrl
      if (isLoading) {
        stopLoading()
      }
    }
  }, [pathname, searchParams])

  // Listen to link clicks and browser popstate
  useEffect(() => {
    const handleLinkClick = (e) => {
      // Ignore modified clicks (cmd, ctrl, shift, alt)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      // Find closest anchor tag
      const anchor = e.target.closest('a')
      if (!anchor) return

      // Ignore if marked to skip
      if (anchor.getAttribute('data-no-loader') !== null) return

      // Ignore download, external target
      if (anchor.hasAttribute('download') || anchor.target === '_blank') return

      const href = anchor.getAttribute('href')
      if (!href) return

      // Ignore hash anchors, mailto, tel, javascript
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return
      }

      // Check origin
      try {
        const url = new URL(href, window.location.href)
        if (url.origin !== window.location.origin) return

        // If navigating to the exact same URL, ignore
        const currentPathAndSearch = window.location.pathname + window.location.search
        const targetPathAndSearch = url.pathname + url.search
        if (currentPathAndSearch === targetPathAndSearch && !url.hash) {
          return
        }

        // Trigger loader!
        startLoading()
      } catch {
        // invalid URL format, ignore
      }
    }

    const handlePopState = () => {
      startLoading()
    }

    const handleCustomStart = (e) => {
      const { title, subtitle } = e?.detail || {}
      startLoading(title, subtitle)
    }

    const handleCustomStop = () => {
      stopLoading()
    }

    document.addEventListener('click', handleLinkClick, { capture: true })
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('pcs:start-loading', handleCustomStart)
    window.addEventListener('pcs:stop-loading', handleCustomStop)

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true })
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('pcs:start-loading', handleCustomStart)
      window.removeEventListener('pcs:stop-loading', handleCustomStop)
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current)
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current)
    }
  }, [])

  if (!isLoading) return null

  return (
    <FullscreenLoader
      isOpen={isLoading}
      isFading={isFading}
      title={loaderText.title}
      subtitle={loaderText.subtitle}
    />
  )
}

export default function RouteTransitionLoader() {
  return (
    <Suspense fallback={null}>
      <TransitionLoaderInternal />
    </Suspense>
  )
}
