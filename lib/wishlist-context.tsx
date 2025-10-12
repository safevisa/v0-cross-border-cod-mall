"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { Product } from "./products"

interface WishlistContextType {
  items: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  const addToWishlist = useCallback((product: Product) => {
    setItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev // Already in wishlist
      }
      return [...prev, product]
    })
  }, [])

  const removeFromWishlist = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId))
  }, [])

  const isInWishlist = useCallback((productId: string) => {
    return items.some(item => item.id === productId)
  }, [items])

  const clearWishlist = useCallback(() => {
    setItems([])
  }, [])

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
