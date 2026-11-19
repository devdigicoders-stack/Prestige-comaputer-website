'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const DEFAULT_WISHLIST = [
  'dell-inspiron-15',
  'pcs-gaming-desktop-pro',
  'lg-ultragear-27',
  'hyperx-cloud-iii',
]

const DEFAULT_CART_ITEMS = [
  { id: 'dell-inspiron-15', quantity: 1, selected: true },
  { id: 'pcs-gaming-desktop-pro', quantity: 1, selected: true },
  { id: 'hyperx-cloud-iii', quantity: 1, selected: true },
]

const StoreContext = createContext({
  wishlistIds: DEFAULT_WISHLIST,
  cartCount: 3,
  cartItems: DEFAULT_CART_ITEMS,
  isRegisterOpen: false,
  isLoginOpen: false,
  currentUser: null,
  toggleWishlist: () => {},
  removeFromWishlist: () => {},
  clearWishlist: () => {},
  addToCart: () => {},
  updateCartItemQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  toggleCartItemSelection: () => {},
  selectAllCartItems: () => {},
  moveAllToWishlist: () => {},
  openRegisterModal: () => {},
  closeRegisterModal: () => {},
  openLoginModal: () => {},
  closeLoginModal: () => {},
  setCurrentUser: () => {},
})

export function StoreProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState(DEFAULT_WISHLIST)
  const [cartItems, setCartItems] = useState(DEFAULT_CART_ITEMS)
  const [cartCount, setCartCount] = useState(3)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  // Optional: persist in localStorage if available in browser
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('pcs_website_wishlist')
      if (savedWishlist) {
        try {
          const parsed = JSON.parse(savedWishlist)
          if (Array.isArray(parsed)) setWishlistIds(parsed)
        } catch {
          // ignore
        }
      }
      const savedCartItems = localStorage.getItem('pcs_website_cart_items')
      if (savedCartItems) {
        try {
          const parsed = JSON.parse(savedCartItems)
          if (Array.isArray(parsed)) {
            setCartItems(parsed)
            const total = parsed.reduce((acc, it) => acc + (it.quantity || 1), 0)
            setCartCount(total)
          }
        } catch {
          // ignore
        }
      } else {
        const savedCart = localStorage.getItem('pcs_website_cart_count')
        if (savedCart) {
          setCartCount(Number(savedCart))
        }
      }
      const savedUser = localStorage.getItem('pcs_website_user')
      if (savedUser) {
        try {
          setCurrentUser(JSON.parse(savedUser))
        } catch {
          // ignore
        }
      }
    } catch {
      // ignore
    }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isRegisterOpen || isLoginOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isRegisterOpen, isLoginOpen])

  const toggleWishlist = (productId) => {
    setWishlistIds((prev) => {
      const next = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
      try {
        localStorage.setItem('pcs_website_wishlist', JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistIds((prev) => {
      const next = prev.filter((id) => id !== productId)
      try {
        localStorage.setItem('pcs_website_wishlist', JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }

  const clearWishlist = () => {
    setWishlistIds([])
    try {
      localStorage.setItem('pcs_website_wishlist', JSON.stringify([]))
    } catch {
      // ignore
    }
  }

  const syncCart = (nextItems) => {
    setCartItems(nextItems)
    const count = nextItems.reduce((acc, it) => acc + (it.quantity || 1), 0)
    setCartCount(count)
    try {
      localStorage.setItem('pcs_website_cart_items', JSON.stringify(nextItems))
      localStorage.setItem('pcs_website_cart_count', String(count))
    } catch {
      // ignore
    }
  }

  const addToCart = (productId) => {
    if (productId) {
      setCartItems((prev) => {
        const existing = prev.find((it) => it.id === productId)
        let next
        if (existing) {
          next = prev.map((it) =>
            it.id === productId ? { ...it, quantity: (it.quantity || 1) + 1 } : it
          )
        } else {
          next = [...prev, { id: productId, quantity: 1, selected: true }]
        }
        syncCart(next)
        return next
      })
    } else {
      setCartCount((prev) => {
        const next = prev + 1
        try {
          localStorage.setItem('pcs_website_cart_count', String(next))
        } catch {
          // ignore
        }
        return next
      })
    }
  }

  const updateCartItemQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId)
      return
    }
    const next = cartItems.map((it) =>
      it.id === productId ? { ...it, quantity: newQty } : it
    )
    syncCart(next)
  }

  const removeFromCart = (productId) => {
    const next = cartItems.filter((it) => it.id !== productId)
    syncCart(next)
  }

  const clearCart = () => {
    syncCart([])
  }

  const toggleCartItemSelection = (productId) => {
    const next = cartItems.map((it) =>
      it.id === productId ? { ...it, selected: !it.selected } : it
    )
    syncCart(next)
  }

  const selectAllCartItems = (selected = true) => {
    const next = cartItems.map((it) => ({ ...it, selected }))
    syncCart(next)
  }

  const moveAllToWishlist = () => {
    cartItems.forEach((it) => {
      if (!wishlistIds.includes(it.id)) {
        setWishlistIds((prev) => {
          const next = [...prev, it.id]
          try {
            localStorage.setItem('pcs_website_wishlist', JSON.stringify(next))
          } catch {
            // ignore
          }
          return next
        })
      }
    })
    clearCart()
  }

  const openRegisterModal = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(true)
  }

  const closeRegisterModal = () => {
    setIsRegisterOpen(false)
  }

  const openLoginModal = () => {
    setIsRegisterOpen(false)
    setIsLoginOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginOpen(false)
  }

  const handleSetCurrentUser = (user) => {
    setCurrentUser(user)
    try {
      if (user) {
        localStorage.setItem('pcs_website_user', JSON.stringify(user))
      } else {
        localStorage.removeItem('pcs_website_user')
      }
    } catch {
      // ignore
    }
  }

  const contextValue = useMemo(
    () => ({
      wishlistIds,
      cartCount,
      cartItems,
      isRegisterOpen,
      isLoginOpen,
      currentUser,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
      addToCart,
      updateCartItemQuantity,
      removeFromCart,
      clearCart,
      toggleCartItemSelection,
      selectAllCartItems,
      moveAllToWishlist,
      openRegisterModal,
      closeRegisterModal,
      openLoginModal,
      closeLoginModal,
      setCurrentUser: handleSetCurrentUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      wishlistIds,
      cartCount,
      cartItems,
      isRegisterOpen,
      isLoginOpen,
      currentUser,
    ]
  )

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}
