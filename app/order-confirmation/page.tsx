"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Package, Truck, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useOrders } from "@/lib/order-context"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const { getOrderById } = useOrders()
  
  const order = orderId ? getOrderById(orderId) : null

  if (!order) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <p className="text-muted-foreground mb-6">The order you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/account/orders">View My Orders</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
              <p className="text-muted-foreground">
                Thank you for your order. We've received your order and will process it shortly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Order Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Order Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Number:</span>
                      <span className="font-mono font-semibold">{order.orderNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Date:</span>
                      <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge 
                        variant={order.status === 'pending' ? 'default' : 'secondary'}
                        className="capitalize"
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Amount:</span>
                      <span className="font-semibold text-lg">${order.totalAmount.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity} × ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="font-medium">{order.shippingAddress.name}</p>
                      <p className="text-sm text-muted-foreground">{order.shippingAddress.phone}</p>
                      <p className="text-sm">
                        {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Steps */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      What's Next?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-blue-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Order Confirmation</h4>
                          <p className="text-sm text-muted-foreground">
                            You'll receive an email confirmation shortly
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-yellow-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Processing</h4>
                          <p className="text-sm text-muted-foreground">
                            We'll prepare your order for shipment (1-2 business days)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-green-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Shipping</h4>
                          <p className="text-sm text-muted-foreground">
                            Your order will be shipped and you'll receive tracking information
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-purple-600">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Delivery</h4>
                          <p className="text-sm text-muted-foreground">
                            Your order will arrive at your specified address
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {order.paymentMethod.type === 'cod' ? '💰' : 
                           order.paymentMethod.type === 'credit_card' ? '💳' : 
                           order.paymentMethod.type === 'paypal' ? '🅿️' : '💳'}
                        </div>
                        <div>
                          <p className="font-medium">{order.paymentMethod.name}</p>
                          <p className="text-sm text-muted-foreground">{order.paymentMethod.details}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/account/orders">View All Orders</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
