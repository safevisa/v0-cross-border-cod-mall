"use client"

import Link from "next/link"
import { ArrowLeft, User, Mail, Phone, MapPin, Package, Heart, Settings, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth-context"

export default function AccountPage() {
  const { user, isLoggedIn } = useAuth()

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

          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Sign In Required</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <User className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Please sign in to access your account
                  </p>
                  <div className="space-y-2">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/register">Create Account</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {/* Profile Info */}
              <div className="md:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="font-semibold">{user?.name}</h3>
                      <p className="text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                    <Separator className="my-4" />
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/account/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Account Settings
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Account Options */}
              <div className="md:col-span-3">
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        My Orders
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Track your recent orders</p>
                      <Button variant="outline" asChild>
                        <Link href="/account/orders">View All Orders</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        Wishlist
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Items you've saved for later</p>
                      <Button variant="outline" asChild>
                        <Link href="/account/wishlist">View Wishlist</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Addresses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Manage your delivery addresses</p>
                      <Button variant="outline" asChild>
                        <Link href="/account/addresses">Manage Addresses</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Methods
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Manage your payment options</p>
                      <Button variant="outline" asChild>
                        <Link href="/account/payment">Manage Payment</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
