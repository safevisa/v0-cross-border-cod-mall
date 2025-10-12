import { ArrowLeft, Package, MapPin, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function TrackOrderPage() {
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
            <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="tracking-number" className="block text-sm font-medium mb-2">
                      Enter your tracking number or order ID:
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="tracking-number"
                        placeholder="RF123456789SG or ORD-001"
                        className="flex-1"
                      />
                      <Button>Track Order</Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You can find your tracking number in your order confirmation email or in your account orders.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Track Your Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Tracking Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Order ID</h4>
                          <p className="text-sm text-muted-foreground">
                            Use your order number (e.g., ORD-001) to track your package
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Tracking Number</h4>
                          <p className="text-sm text-muted-foreground">
                            Use the carrier tracking number (e.g., RF123456789SG)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Email Notification</h4>
                          <p className="text-sm text-muted-foreground">
                            Check your email for tracking updates
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Shipping Partners</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Singapore Post</h4>
                          <p className="text-sm text-muted-foreground">
                            Primary shipping partner for international deliveries
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Package className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Local Carriers</h4>
                          <p className="text-sm text-muted-foreground">
                            Regional carriers for faster local delivery
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Typical Delivery Timeline</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-sm">Processing</h4>
                      <p className="text-xs text-muted-foreground">1-2 days</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Package className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h4 className="font-medium text-sm">Shipped</h4>
                      <p className="text-xs text-muted-foreground">1-3 days</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-medium text-sm">In Transit</h4>
                      <p className="text-xs text-muted-foreground">3-10 days</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-medium text-sm">Delivered</h4>
                      <p className="text-xs text-muted-foreground">Complete</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Need Help?</h4>
                  <p className="text-sm text-blue-800">
                    If you're having trouble tracking your order or have questions about delivery, 
                    please contact our customer service team.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
