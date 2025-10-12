"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { products } from "./products"

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: typeof products
  isSearching: boolean
  performSearch: (query: string) => void
  clearSearch: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof products>([])
  const [isSearching, setIsSearching] = useState(false)

  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
      
      setSearchResults(filtered)
      setIsSearching(false)
    }, 300)
  }, [])

  const clearSearch = useCallback(() => {
    setSearchQuery("")
    setSearchResults([])
    setIsSearching(false)
  }, [])

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        isSearching,
        performSearch,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
