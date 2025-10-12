"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useSearch } from "@/lib/search-context"
import { products } from "@/lib/products"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const { searchResults, isSearching, performSearch } = useSearch()

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    performSearch(searchQuery)
  }

  const handleClearSearch = () => {
    setQuery("")
    performSearch("")
  }

  // Get search query from URL params if available
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const searchParam = urlParams.get('q')
    if (searchParam) {
      setQuery(searchParam)
      performSearch(searchParam)
    }
  }, [performSearch])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Search Products</h1>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-10 h-12 text-lg"
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={handleClearSearch}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Search Results */}
            <div>
              {query ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">
                      {isSearching ? (
                        "Searching..."
                      ) : (
                        `Search results for "${query}" (${searchResults.length} found)`
                      )}
                    </h2>
                  </div>

                  {isSearching ? (
                    <div className="text-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Searching products...</p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {searchResults.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No products found</h3>
                      <p className="text-muted-foreground mb-6">
                        Try searching with different keywords or browse our categories
                      </p>
                      <div className="flex gap-3 justify-center">
                        <Button variant="outline" onClick={handleClearSearch}>
                          Clear Search
                        </Button>
                        <Button asChild>
                          <Link href="/">Browse All Products</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Start your search</h3>
                  <p className="text-muted-foreground mb-6">
                    Enter keywords to find the products you're looking for
                  </p>
                  
                  {/* Popular Searches */}
                  <div className="max-w-2xl mx-auto">
                    <h4 className="font-medium mb-4">Popular Searches</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["polo shirt", "tea set", "jade jewelry", "camping gear", "sports equipment"].map((term) => (
                        <Button
                          key={term}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSearch(term)}
                          className="text-sm"
                        >
                          {term}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
