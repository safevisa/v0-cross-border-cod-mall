"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Truck, CheckCircle, Clock, AlertCircle, RotateCcw, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { useOrders } from "@/lib/order-context"

export default function OrdersPage() {
  const { isLoggedIn, user } = useAuth()
  const { addToCart } = useCart()
  const { getOrdersByUser } = useOrders()
  
  // Get user's orders from the order context
  const orders = user ? getOrdersByUser(user.id) : []

  const handleReorder = (order: any) => {
    order.items.forEach((item: any) => {
      for (let i = 0; i < item.quantity; i++) {
        addToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          description: "",
          category: "",
          inStock: true,
          rating: 4.5,
          reviewCount: 100
        })
      }
    })
    alert('Items added to cart!')
  }

  const handleTrackPackage = (trackingNumber: string) => {
    window.open(`https://www.singpost.com/track-items?track=${trackingNumber}`, '_blank')
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

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">Please sign in to view your orders</p>
            <Button asChild>
              <Link href="/login">Sign In</Link>
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
              <Link href="/account">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Account
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Orders</h1>
            <Button asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>

          {orders.length === 0 ? (
            <Card>
              <CardContent className="py-12">
                <div className="text-center">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't placed any orders yet. Start shopping to see your orders here.
                  </p>
                  <Button asChild>
                    <Link href="/">Start Shopping</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.status)}
                          <div>
                            <h3 className="font-semibold">Order {order.orderNumber}</h3>
                            <p className="text-sm text-muted-foreground">
                              Placed on {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${getStatusColor(order.status)} capitalize`}>
                          {order.status}
                        </Badge>
                        <span className="text-lg font-semibold">
                          ${order.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Order Items */}
                      <div className="space-y-3">
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

                      <Separator />

                      {/* Order Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {order.status === 'delivered' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleReorder(order)}
                            >
                              <RotateCcw className="mr-2 h-4 w-4" />
                              Reorder
                            </Button>
                          )}
                          {order.trackingNumber && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleTrackPackage(order.trackingNumber)}
                            >
                              <MapPin className="mr-2 h-4 w-4" />
                              Track Package
                            </Button>
                          )}
                        </div>
                        <Button variant="outline" asChild>
                          <Link href={`/order-details/${order.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}