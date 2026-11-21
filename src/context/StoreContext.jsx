'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getToken, removeToken, getWishlist, syncWishlistToDb, toggleWishlistItemApi } from '../services/authApi'

const DEFAULT_WISHLIST = []
const DEFAULT_CART_ITEMS = []

const StoreContext = createContext({
  wishlistIds: DEFAULT_WISHLIST,
  cartCount: 0,
  cartItems: DEFAULT_CART_ITEMS,
  isRegisterOpen: false,
  isLoginOpen: false,
  currentUser: null,
  authPromptMessage: '',
  setAuthPromptMessage: () => {},
  cartToast: { show: false, product: null, message: '' },
  showCartToast: () => {},
  hideCartToast: () => {},
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
  rentalModal: { open: false, product: null },
  openRentalModal: () => {},
  closeRentalModal: () => {},
  setCurrentUser: () => {},
  logout: () => {},
})

export function StoreProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState(DEFAULT_WISHLIST)
  const [cartItems, setCartItems] = useState(DEFAULT_CART_ITEMS)
  const [cartCount, setCartCount] = useState(0)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [rentalModal, setRentalModal] = useState({ open: false, product: null })
  const [currentUser, setCurrentUser] = useState(null)
  const [authPromptMessage, setAuthPromptMessage] = useState('')
  const [cartToast, setCartToast] = useState({ show: false, product: null, message: '' })

  const openRentalModal = (product) => {
    setRentalModal({ open: true, product })
  }

  const closeRentalModal = () => {
    setRentalModal({ open: false, product: null })
  }

  const hideCartToast = () => {
    setCartToast((prev) => ({ ...prev, show: false }))
  }

  const showCartToast = (product, message = 'Product added to your cart!') => {
    setCartToast({
      show: true,
      product,
      message,
    })
  }

  // Load persisted user and session cart/wishlist on mount
  useEffect(() => {
    const init = async () => {
      try {
        const savedUserStr = localStorage.getItem('pcs_website_user')
        const token = getToken()

        if (savedUserStr && token) {
          try {
            const parsedUser = JSON.parse(savedUserStr)
            setCurrentUser(parsedUser)

            // Load wishlist from MongoDB database (source of truth)
            try {
              const dbWishlist = await getWishlist()
              if (Array.isArray(dbWishlist) && dbWishlist.length > 0) {
                setWishlistIds(dbWishlist.map(String))
                localStorage.setItem('pcs_website_wishlist', JSON.stringify(dbWishlist.map(String)))
              } else {
                // Fallback to localStorage if DB returns empty
                const savedWishlist = localStorage.getItem('pcs_website_wishlist')
                if (savedWishlist) {
                  const parsed = JSON.parse(savedWishlist)
                  if (Array.isArray(parsed) && parsed.length > 0) {
                    setWishlistIds(parsed)
                    // Sync localStorage wishlist up to DB
                    await syncWishlistToDb(parsed)
                  }
                }
              }
            } catch {
              // DB fetch failed, use localStorage
              const savedWishlist = localStorage.getItem('pcs_website_wishlist')
              if (savedWishlist) {
                const parsed = JSON.parse(savedWishlist)
                if (Array.isArray(parsed)) setWishlistIds(parsed)
              }
            }

            // Load user's saved cart
            const savedCartItems = localStorage.getItem('pcs_website_cart_items')
            if (savedCartItems) {
              const parsed = JSON.parse(savedCartItems)
              if (Array.isArray(parsed)) {
                setCartItems(parsed)
                const total = parsed.reduce((acc, it) => acc + (it.quantity || 1), 0)
                setCartCount(total)
              }
            }
          } catch {
            // ignore
          }
        } else {
          // Unauthenticated visitor: start with clean empty cart and wishlist
          setWishlistIds([])
          setCartItems([])
          setCartCount(0)
        }
      } catch {
        // ignore
      }
    }
    init()
  }, [])

  // Lock body scroll when auth modal is open
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

  // ================= WISHLIST =================
  const toggleWishlist = async (productId) => {
    if (!currentUser) {
      setAuthPromptMessage('Please sign in or create an account to save items to your wishlist.')
      openLoginModal()
      return false
    }

    // Optimistic update locally first
    let nextIds
    setWishlistIds((prev) => {
      nextIds = prev.includes(String(productId))
        ? prev.filter((id) => id !== String(productId))
        : [...prev, String(productId)]
      try {
        localStorage.setItem('pcs_website_wishlist', JSON.stringify(nextIds))
      } catch { /* ignore */ }
      return nextIds
    })

    // Sync to MongoDB in background
    try {
      await toggleWishlistItemApi(productId)
    } catch {
      // If DB fails, revert optimistic update
      setWishlistIds((prev) => {
        const reverted = prev.includes(String(productId))
          ? prev.filter((id) => id !== String(productId))
          : [...prev, String(productId)]
        try {
          localStorage.setItem('pcs_website_wishlist', JSON.stringify(reverted))
        } catch { /* ignore */ }
        return reverted
      })
    }
    return true
  }

  const removeFromWishlist = (productId) => {
    const idStr = String(productId)
    setWishlistIds((prev) => {
      const next = prev.filter((id) => String(id) !== idStr)
      try {
        localStorage.setItem('pcs_website_wishlist', JSON.stringify(next))
      } catch { /* ignore */ }
      // Sync to DB in background
      if (currentUser) syncWishlistToDb(next).catch(() => {})
      return next
    })
  }

  const clearWishlist = () => {
    setWishlistIds([])
    try {
      localStorage.setItem('pcs_website_wishlist', JSON.stringify([]))
    } catch { /* ignore */ }
    // Sync to DB in background
    if (currentUser) syncWishlistToDb([]).catch(() => {})
  }

  // ================= CART =================
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

  const addToCart = (productOrId) => {
    // AUTH GATE: User must be registered & logged in to add to cart!
    if (!currentUser) {
      setAuthPromptMessage('Please sign in or create an account to add items to your cart.')
      openLoginModal()
      return false
    }

    if (!productOrId) return false

    const isObj = typeof productOrId === 'object' && productOrId !== null
    const id = isObj
      ? productOrId.id || productOrId.slug || productOrId._id || `item-${Date.now()}`
      : productOrId

    const currentList = Array.isArray(cartItems) ? cartItems : []
    const existingIndex = currentList.findIndex((it) => it.id === id)
    let next
    if (existingIndex > -1) {
      next = currentList.map((it, idx) =>
        idx === existingIndex
          ? {
              ...it,
              ...(isObj ? productOrId : {}),
              id,
              quantity:
                (it.quantity || 1) +
                (isObj && productOrId.quantity ? productOrId.quantity : 1),
            }
          : it
      )
    } else {
      const newObj = isObj
        ? {
            ...productOrId,
            id,
            quantity: productOrId.quantity || 1,
            selected: true,
          }
        : { id, quantity: 1, selected: true }
      next = [...currentList, newObj]
    }
    syncCart(next)

    // Trigger feedback notification
    const toastProduct = isObj
      ? {
          id,
          name: productOrId.name || productOrId.title || 'Product',
          price: productOrId.price,
          image: productOrId.image || (Array.isArray(productOrId.images) ? productOrId.images[0] : ''),
        }
      : { id, name: 'Product' }

    setCartToast({
      show: true,
      product: toastProduct,
      message: 'Product added to your cart successfully!',
    })

    return true
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
    const next = cartItems.filter(
      (it) => it.id !== productId && it._id !== productId && it.slug !== productId
    )
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
    if (!currentUser) {
      setAuthPromptMessage('Please sign in or create an account to save items to your wishlist.')
      openLoginModal()
      return
    }

    const newIds = cartItems
      .map((it) => String(it.id))
      .filter((id) => !wishlistIds.includes(id))

    if (newIds.length > 0) {
      setWishlistIds((prev) => {
        const next = [...prev, ...newIds]
        try {
          localStorage.setItem('pcs_website_wishlist', JSON.stringify(next))
        } catch { /* ignore */ }
        // Sync to DB
        syncWishlistToDb(next).catch(() => {})
        return next
      })
    }
    clearCart()
  }

  // ================= MODALS & AUTH =================
  const openRegisterModal = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(true)
  }

  const closeRegisterModal = () => {
    setIsRegisterOpen(false)
    setAuthPromptMessage('')
  }

  const openLoginModal = () => {
    setIsRegisterOpen(false)
    setIsLoginOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginOpen(false)
    setAuthPromptMessage('')
  }

  const handleSetCurrentUser = (user) => {
    setCurrentUser(user)
    try {
      if (user) {
        localStorage.setItem('pcs_website_user', JSON.stringify(user))
        // Load wishlist from DB after login
        getWishlist().then((dbWishlist) => {
          if (Array.isArray(dbWishlist)) {
            const ids = dbWishlist.map(String)
            setWishlistIds(ids)
            localStorage.setItem('pcs_website_wishlist', JSON.stringify(ids))
          }
        }).catch(() => {})
      } else {
        localStorage.removeItem('pcs_website_user')
        removeToken()
      }
    } catch {
      // ignore
    }
  }

  const logout = () => {
    setCurrentUser(null)
    setCartItems([])
    setCartCount(0)
    setWishlistIds([])
    try {
      localStorage.removeItem('pcs_website_user')
      localStorage.removeItem('pcs_website_cart_items')
      localStorage.removeItem('pcs_website_cart_count')
      localStorage.removeItem('pcs_website_wishlist')
      removeToken()
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
      authPromptMessage,
      setAuthPromptMessage,
      cartToast,
      showCartToast,
      hideCartToast,
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
      rentalModal,
      openRentalModal,
      closeRentalModal,
      setCurrentUser: handleSetCurrentUser,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      wishlistIds,
      cartCount,
      cartItems,
      isRegisterOpen,
      isLoginOpen,
      rentalModal,
      currentUser,
      authPromptMessage,
      cartToast,
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
