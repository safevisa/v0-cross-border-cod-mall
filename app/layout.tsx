import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { UserProvider } from "@/lib/user-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { SearchProvider } from "@/lib/search-context"
import { LanguageProvider } from "@/lib/language-context"
import { OrderProvider } from "@/lib/order-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CODPAL - Global Marketplace | Shop from 100+ Countries",
  description:
    "Your trusted global marketplace connecting Chinese sellers to worldwide buyers. Shop daily essentials, fashion, outdoor gear, tea, jade, and more with secure COD payment.",
  keywords: "global marketplace, cross-border shopping, COD payment, Chinese products, international shipping",
  authors: [{ name: "ICEBOX NETWORK SL" }],
  creator: "ICEBOX NETWORK SL",
  publisher: "ICEBOX NETWORK SL",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codpal.com",
    title: "CODPAL - Global Marketplace",
    description: "Your trusted global marketplace connecting Chinese sellers to worldwide buyers",
    siteName: "CODPAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODPAL - Global Marketplace",
    description: "Your trusted global marketplace connecting Chinese sellers to worldwide buyers",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <AuthProvider>
            <UserProvider>
              <WishlistProvider>
                <SearchProvider>
                  <OrderProvider>
                    <CartProvider>
                      <Suspense fallback={null}>{children}</Suspense>
                    </CartProvider>
                  </OrderProvider>
                </SearchProvider>
              </WishlistProvider>
            </UserProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
