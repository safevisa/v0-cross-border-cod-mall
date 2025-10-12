import { ArrowLeft, Truck, MapPin, Clock, Package, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ShippingInfoPage() {
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
            <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Worldwide Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We ship to over 100 countries worldwide. All packages are tracked with RFID technology 
                    for real-time updates on your order's journey.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold">Shipping Zones</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm">Zone 1 (Singapore, Malaysia)</span>
                          <Badge variant="outline" className="text-xs">2-3 days</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <span className="text-sm">Zone 2 (Asia Pacific)</span>
                          <Badge variant="outline" className="text-xs">5-7 days</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                          <span className="text-sm">Zone 3 (North America)</span>
                          <Badge variant="outline" className="text-xs">7-10 days</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                          <span className="text-sm">Zone 4 (Europe)</span>
                          <Badge variant="outline" className="text-xs">8-12 days</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                          <span className="text-sm">Zone 5 (Other regions)</span>
                          <Badge variant="outline" className="text-xs">10-15 days</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold">Shipping Methods</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 border rounded">
                          <Package className="h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium text-sm">Standard Shipping</p>
                            <p className="text-xs text-muted-foreground">Free worldwide</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 border rounded">
                          <Truck className="h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium text-sm">Express Shipping</p>
                            <p className="text-xs text-muted-foreground">$15.99 - Faster delivery</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 border rounded">
                          <Clock className="h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium text-sm">COD Available</p>
                            <p className="text-xs text-muted-foreground">Cash on delivery in select regions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Order Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-blue-600">1</span>
                        </div>
                        <h4 className="font-medium text-sm">Order Placed</h4>
                        <p className="text-xs text-muted-foreground">Within 1 hour</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-yellow-600">2</span>
                        </div>
                        <h4 className="font-medium text-sm">Processing</h4>
                        <p className="text-xs text-muted-foreground">1-2 business days</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-green-600">3</span>
                        </div>
                        <h4 className="font-medium text-sm">Shipped</h4>
                        <p className="text-xs text-muted-foreground">Tracking number sent</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-purple-600">4</span>
                        </div>
                        <h4 className="font-medium text-sm">Delivered</h4>
                        <p className="text-xs text-muted-foreground">Delivery confirmation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Delivery Requirements</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Valid delivery address required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Someone must be available to receive the package</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Valid ID may be required for COD orders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Signature may be required for delivery</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Delivery Attempts</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Up to 3 delivery attempts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Package held at local post office if undeliverable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>30-day holding period before return</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Contact customer service for redelivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Restrictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">Important Notes</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Some items may be restricted in certain countries</li>
                      <li>• Customs duties and taxes may apply in your country</li>
                      <li>• Delivery times may be affected by customs clearance</li>
                      <li>• We are not responsible for customs delays or fees</li>
                      <li>• Check local import regulations before ordering</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
