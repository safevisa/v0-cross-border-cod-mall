import { ArrowLeft, DollarSign, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CODInfoPage() {
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
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Cash on Delivery (COD)</h1>
              <p className="text-muted-foreground">
                Pay for your order when it arrives at your doorstep
              </p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    What is Cash on Delivery?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800">
                      Cash on Delivery (COD) allows you to pay for your order in cash when the package 
                      is delivered to your address. This payment method provides peace of mind as you 
                      can inspect your items before making payment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Available Regions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      COD is available in the following regions:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Asia Pacific</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                            <span className="text-sm">Singapore</span>
                            <Badge variant="outline" className="text-xs bg-green-100">Available</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                            <span className="text-sm">Malaysia</span>
                            <Badge variant="outline" className="text-xs bg-green-100">Available</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                            <span className="text-sm">Thailand</span>
                            <Badge variant="outline" className="text-xs bg-green-100">Available</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                            <span className="text-sm">Philippines</span>
                            <Badge variant="outline" className="text-xs bg-green-100">Available</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold">Other Regions</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                            <span className="text-sm">India</span>
                            <Badge variant="outline" className="text-xs bg-yellow-100">Limited</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                            <span className="text-sm">Vietnam</span>
                            <Badge variant="outline" className="text-xs bg-yellow-100">Limited</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                            <span className="text-sm">North America</span>
                            <Badge variant="outline" className="text-xs bg-red-100">Not Available</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                            <span className="text-sm">Europe</span>
                            <Badge variant="outline" className="text-xs bg-red-100">Not Available</Badge>
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
                    <Clock className="h-5 w-5" />
                    How COD Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-blue-600">1</span>
                        </div>
                        <h4 className="font-medium text-sm">Place Order</h4>
                        <p className="text-xs text-muted-foreground">Select COD as payment method</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-yellow-600">2</span>
                        </div>
                        <h4 className="font-medium text-sm">Processing</h4>
                        <p className="text-xs text-muted-foreground">Order processed and shipped</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-green-600">3</span>
                        </div>
                        <h4 className="font-medium text-sm">Delivery</h4>
                        <p className="text-xs text-muted-foreground">Package arrives at your address</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-purple-600">4</span>
                        </div>
                        <h4 className="font-medium text-sm">Payment</h4>
                        <p className="text-xs text-muted-foreground">Pay cash to delivery person</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    COD Terms & Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3 text-green-700">Requirements</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Valid government-issued ID required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Someone must be present to receive delivery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Exact cash amount ready for payment</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-red-700">Limitations</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                            <span>Maximum order value: $500</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                            <span>Additional COD fee may apply</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                            <span>No change provided by delivery person</span>
                          </li>
                        </ul>
                      </div>
                    </div>
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