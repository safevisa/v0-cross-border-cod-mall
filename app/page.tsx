import Link from "next/link"
import { ArrowRight, Package, Shield, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-r from-primary/5 via-background to-accent/5 py-8">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">RFID Tracking</div>
                  <div className="text-xs text-muted-foreground">Real-time updates</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">COD Available</div>
                  <div className="text-xs text-muted-foreground">Pay on delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Global Shipping</div>
                  <div className="text-xs text-muted-foreground">100+ countries</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Secure Shopping</div>
                  <div className="text-xs text-muted-foreground">Buyer protection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {categories.map((category) => {
          const categoryProducts = products.filter((p) => p.category === category.id).slice(0, 8)
          if (categoryProducts.length === 0) return null

          return (
            <section key={category.id} className="py-12 border-b">
              <div className="container">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <span className="text-3xl">{category.icon}</span>
                    {category.name}
                  </h2>
                  <Button variant="ghost" asChild>
                    <Link href={`/category/${category.id}`}>
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </main>

      <Footer />
    </div>
  )
}
