"use client"

import Link from "next/link"
import { useState } from "react"
import React from "react"
import { ArrowLeft, Check, CreditCard, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { useUser } from "@/lib/user-context"
import { useOrders } from "@/lib/order-context"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const { isLoggedIn, user } = useAuth()
  const { addresses, paymentMethods } = useUser()
  const { addOrder } = useOrders()
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState<string>("")
  const [selectedPayment, setSelectedPayment] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)

  const defaultAddress = addresses.find(addr => addr.isDefault)
  const defaultPayment = paymentMethods.find(pay => pay.isDefault)

  // Set default selections when addresses and payment methods are loaded
  React.useEffect(() => {
    if (defaultAddress && !selectedAddress) {
      setSelectedAddress(defaultAddress.id)
    }
    if (defaultPayment && !selectedPayment) {
      setSelectedPayment(defaultPayment.id)
    }
  }, [defaultAddress, defaultPayment, selectedAddress, selectedPayment])

  const handlePlaceOrder = async () => {
    if (!selectedAddress || !selectedPayment || !user) {
      alert('Please select both delivery address and payment method')
      return
    }

    setIsProcessing(true)
    
    try {
      // Get selected address and payment method
      const address = addresses.find(addr => addr.id === selectedAddress)
      const payment = paymentMethods.find(pay => pay.id === selectedPayment)
      
      if (!address || !payment) {
        alert('Selected address or payment method not found')
        setIsProcessing(false)
        return
      }

      // Prepare order items
      const orderItems = items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image || "/placeholder.svg"
      }))

      // Create order
      const newOrder = addOrder({
        userId: user.id,
        items: orderItems,
        totalAmount: getTotalPrice(),
        shippingAddress: {
          name: address.name,
          phone: address.phone,
          address: address.address,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country
        },
        paymentMethod: {
          type: payment.type,
          name: payment.name,
          details: payment.details
        }
      })

      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear cart
      clearCart()
      
      // Redirect to order confirmation page
      router.push(`/order-confirmation?orderId=${newOrder.id}`)
      
    } catch (error) {
      console.error('Error placing order:', error)
      alert('Failed to place order. Please try again.')
      setIsProcessing(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">Please sign in to proceed with checkout</p>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">Add some items to your cart first</p>
            <Button asChild>
              <Link href="/">Continue Shopping</Link>
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
              <Link href="/cart">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cart
              </Link>
            </Button>
          </div>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {addresses.length > 0 ? (
                    <div className="space-y-3">
                      {addresses.map((address) => (
                        <div
                          key={address.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedAddress === address.id
                              ? "border-primary bg-primary/5"
                              : "border-muted hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedAddress(address.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">{address.name}</span>
                                {address.isDefault && (
                                  <Badge variant="outline" className="text-xs">
                                    Default
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{address.phone}</p>
                              <p className="text-sm">
                                {address.address}, {address.city}, {address.state} {address.postalCode}, {address.country}
                              </p>
                            </div>
                            {selectedAddress === address.id && (
                              <Check className="h-5 w-5 text-primary" />
                            )}
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/account/addresses">
                          <MapPin className="mr-2 h-4 w-4" />
                          Manage Addresses
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">No delivery addresses found</p>
                      <Button asChild>
                        <Link href="/account/addresses">Add Address</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {paymentMethods.length > 0 ? (
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedPayment === method.id
                              ? "border-primary bg-primary/5"
                              : "border-muted hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedPayment(method.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">
                                {method.type === 'cod' ? '💰' : 
                                 method.type === 'credit_card' ? '💳' : 
                                 method.type === 'paypal' ? '🅿️' : '💳'}
                              </div>
                              <div>
                                <p className="font-semibold">{method.name}</p>
                                <p className="text-sm text-muted-foreground">{method.details}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {method.isDefault && (
                                <Badge variant="outline" className="text-xs">
                                  Default
                                </Badge>
                              )}
                              {selectedPayment === method.id && (
                                <Check className="h-5 w-5 text-primary" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/account/payment">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Manage Payment Methods
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">No payment methods found</p>
                      <Button asChild>
                        <Link href="/account/payment">Add Payment Method</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.product.id} className="flex items-center gap-3">
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <img
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.product.name}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.product.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handlePlaceOrder}
                      disabled={isProcessing || !selectedAddress || !selectedPayment}
                    >
                      {isProcessing ? "Processing..." : "Place Order"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By placing this order, you agree to our Terms of Service
                    </p>
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
