import { ArrowLeft, RotateCcw, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ReturnsRefundsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex justify-center">
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
            <h1 className="text-3xl font-bold mb-8">Returns & Refunds</h1>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RotateCcw className="h-5 w-5" />
                    Return Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">30-Day Return Policy</h3>
                    <p className="text-sm text-green-800">
                      You have 30 days from the delivery date to return any item for a full refund. 
                      Items must be in original condition with all tags and packaging.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Eligible for Return</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Unused items in original packaging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Items with all original tags attached</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Defective or damaged items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Wrong items received</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Not Eligible for Return</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Used or worn items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Items without original packaging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Personalized or custom items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Items returned after 30 days</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How to Return an Item</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-blue-600">1</span>
                        </div>
                        <h4 className="font-medium text-sm">Request Return</h4>
                        <p className="text-xs text-muted-foreground">Contact customer service or use our online form</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-yellow-600">2</span>
                        </div>
                        <h4 className="font-medium text-sm">Get Approval</h4>
                        <p className="text-xs text-muted-foreground">We'll review your request within 24 hours</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-green-600">3</span>
                        </div>
                        <h4 className="font-medium text-sm">Package Item</h4>
                        <p className="text-xs text-muted-foreground">Use original packaging and include return label</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-purple-600">4</span>
                        </div>
                        <h4 className="font-medium text-sm">Ship Back</h4>
                        <p className="text-xs text-muted-foreground">Drop off at designated location or schedule pickup</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Refund Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Refund Timeline</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Processing Time:</p>
                          <p className="text-muted-foreground">3-5 business days after we receive your return</p>
                        </div>
                        <div>
                          <p className="font-medium">Refund Method:</p>
                          <p className="text-muted-foreground">Refunded to your original payment method</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-sm">Processing</h4>
                        <p className="text-xs text-muted-foreground">3-5 days</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-medium text-sm">Refund Issued</h4>
                        <p className="text-xs text-muted-foreground">To your account</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-purple-600">$</span>
                        </div>
                        <h4 className="font-medium text-sm">Money Back</h4>
                        <p className="text-xs text-muted-foreground">5-7 days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Return Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Free Return Shipping</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Defective or damaged items</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Wrong items received</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Our error</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Customer Pays Return Shipping</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Change of mind returns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Size exchanges</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Color/style changes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    This Returns & Refunds Policy and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Singapore.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">ICEBOX NETWORK SL</p>
                    <p className="text-sm text-muted-foreground mb-2">144 ROBINSON ROAD, #12-01, ROBINSON SQUARE, SINGAPORE 068908</p>
                    <p className="text-sm text-muted-foreground">Email: support@codpal.com</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you need assistance with your return or have questions about our refund policy, 
                    our customer service team is here to help.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/account/orders">View My Orders</Link>
                    </Button>
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
