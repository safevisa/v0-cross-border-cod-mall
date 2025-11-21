'use client'
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const openWindow = (url: string) => {
    window.open(url, "_blank")
  }
  return (
    <footer className="border-t bg-muted/50 p-2 flex justify-center">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                C
              </div>
              <span className="font-bold text-2xl">CODPAL</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Your trusted global marketplace connecting quality products from China to 100+ countries worldwide. Shop
              with confidence using our secure COD payment and RFID tracking.
            </p>
            <div className="flex gap-3">
              <Link href="#" onClick={() => openWindow("https://www.facebook.com")} className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" onClick={() => openWindow("https://www.instagram.com")} className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" onClick={() => openWindow("https://twitter.com")} className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" onClick={() => openWindow("https://www.youtube.com")} className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/daily-essentials" className="text-muted-foreground hover:text-foreground">
                  🏠 Daily Essentials
                </Link>
              </li>
              <li>
                <Link href="/category/mens-fashion" className="text-muted-foreground hover:text-foreground">
                  👔 Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/womens-fashion" className="text-muted-foreground hover:text-foreground">
                  👗 Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/outdoor-camping" className="text-muted-foreground hover:text-foreground">
                  ⛺ Outdoor & Camping
                </Link>
              </li>
              <li>
                <Link href="/category/sports-equipment" className="text-muted-foreground hover:text-foreground">
                  🏋️ Sports Equipment
                </Link>
              </li>
              <li>
                <Link href="/category/creative-decor" className="text-muted-foreground hover:text-foreground">
                  🎨 Creative Decor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/track-order" className="text-muted-foreground hover:text-foreground">
                  📦 Track Order
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  🚚 Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                  🔄 Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  ❓ FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  💬 Contact Us
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-foreground">
                  📏 Size Guide
                </Link>
              </li>
              <li>
                <Link href="/cod-info" className="text-muted-foreground hover:text-foreground">
                  💰 COD Payment Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  🔒 Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  📋 Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="text-muted-foreground hover:text-foreground">
                  🛡️ Data Protection
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  🍪 Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">
                  ⚖️ Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" className="text-muted-foreground hover:text-foreground">
                  🧠 Intellectual Property
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 codpal.pet.ltd (Singapore). All rights reserved.Governed by Singapore Law. </p>
          <p>ICEBOX NETWORK SL | 144 ROBINSON ROAD, #12-01, ROBINSON SQUARE, SINGAPORE 068908 | Governed by Singapore Law</p>
        </div>
      </div>
    </footer>
  )
}
