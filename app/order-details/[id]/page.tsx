"use client"

import Link from "next/link"
import Image from "next/image"
import { use } from "react"
import { ArrowLeft, Package, Truck, CheckCircle, Clock, AlertCircle, MapPin, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useOrders } from "@/lib/order-context"
import { useAuth } from "@/lib/auth-context"

export default function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { getOrderById } = useOrders()
  const { isLoggedIn } = useAuth()
  
  const order = getOrderById(resolvedParams.id)

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">Please sign in to view order details</p>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <p className="text-muted-foreground mb-6">The order you're looking for doesn't exist or you don't have permission to view it.</p>
            <Button asChild>
              <Link href="/account/orders">Back to Orders</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-600" />
      case 'pending':
        return <Clock className="h-5 w-5 text-orange-600" />
      case 'cancelled':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Package className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'shipped':
        return 'bg-blue-100 text-blue-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-orange-100 text-orange-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" asChild>
              <Link href="/account/orders">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Orders
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Order Details</h1>
              <div className="flex items-center gap-3">
                {getStatusIcon(order.status)}
                <Badge className={`${getStatusColor(order.status)} capitalize`}>
                  {order.status}
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Order Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Order Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Order Number</p>
                        <p className="font-mono font-semibold">{order.orderNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Order Date</p>
                        <p className="font-semibold">{new Date(order.orderDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Amount</p>
                        <p className="font-semibold text-lg">${order.totalAmount.toFixed(2)}</p>
                      </div>
                      {order.trackingNumber && (
                        <div>
                          <p className="text-sm text-muted-foreground">Tracking Number</p>
                          <p className="font-mono text-sm">{order.trackingNumber}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="relative h-16 w-16 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              Quantity: {item.quantity} × ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${order.totalAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>${order.totalAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">{order.shippingAddress.name}</p>
                      <p className="text-sm text-muted-foreground">{order.shippingAddress.phone}</p>
                      <p className="text-sm">
                        {order.shippingAddress.address}<br />
                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}<br />
                        {order.shippingAddress.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
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

                {/* Order Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Order Placed</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.orderDate).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      {order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Processing</h4>
                            <p className="text-sm text-muted-foreground">Your order is being prepared</p>
                          </div>
                        </div>
                      ) : null}

                      {order.status === 'shipped' || order.status === 'delivered' ? (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Truck className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Shipped</h4>
                            <p className="text-sm text-muted-foreground">
                              {order.trackingNumber ? `Tracking: ${order.trackingNumber}` : 'Your order is on the way'}
                            </p>
                          </div>
                        </div>
                      ) : null}

                      {order.status === 'delivered' ? (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Delivered</h4>
                            <p className="text-sm text-muted-foreground">Your order has been delivered</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {order.trackingNumber && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://www.singpost.com/track-items?track=${order.trackingNumber}`, '_blank')}
                      >
                        <Truck className="mr-2 h-4 w-4" />
                        Track Package
                      </Button>
                    )}
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/account/orders">Back to Orders</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
