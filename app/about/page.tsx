import { ArrowLeft, MapPin, Phone, Mail, Globe, Shield, Truck, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
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
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About CODPAL</h1>
              <p className="text-xl text-muted-foreground">
                Your trusted global marketplace connecting Chinese sellers to worldwide buyers
              </p>
            </div>

            <div className="space-y-8">
              {/* Company Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Who We Are</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    CODPAL is a leading cross-border e-commerce platform operated by ICEBOX NETWORK SL, 
                    a Spanish company dedicated to connecting high-quality Chinese products with customers 
                    worldwide. We specialize in bringing you authentic products from trusted manufacturers 
                    across China.
                  </p>
                  <p>
                    Our mission is to make global shopping accessible, secure, and convenient. We offer 
                    a wide range of products including daily essentials, fashion items, outdoor gear, 
                    premium teas, jade jewelry, and purple clay teapots, all with guaranteed authenticity 
                    and quality.
                  </p>
                </CardContent>
              </Card>

              {/* Company Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Registered Office</h4>
                          <p className="text-sm text-muted-foreground">
                            ICEBOX NETWORK SL<br />
                            144 ROBINSON ROAD, #12-01, ROBINSON SQUARE<br />
                            SINGAPORE 068908
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Contact</h4>
                          <p className="text-sm text-muted-foreground">
                            +34 XXX XXX XXX<br />
                            support@codpal.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Global Reach</h4>
                          <p className="text-sm text-muted-foreground">
                            Shipping to 100+ countries<br />
                            Worldwide customer support
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Quality Assurance</h4>
                          <p className="text-sm text-muted-foreground">
                            Authentic products guarantee<br />
                            Quality control standards
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Values */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Trust & Security</h3>
                      <p className="text-sm text-muted-foreground">
                        Secure transactions and buyer protection for peace of mind
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Truck className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Global Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        Fast and reliable delivery to over 100 countries worldwide
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Quality Products</h3>
                      <p className="text-sm text-muted-foreground">
                        Curated selection of authentic, high-quality products
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Services */}
              <Card>
                <CardHeader>
                  <CardTitle>What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Product Categories</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Daily Essentials & Household Items</li>
                        <li>• Men's & Women's Fashion</li>
                        <li>• Outdoor & Camping Equipment</li>
                        <li>• Sports & Fitness Gear</li>
                        <li>• Creative Decor & Accessories</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Payment & Delivery</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Cash on Delivery (COD) available</li>
                        <li>• Credit Card & PayPal accepted</li>
                        <li>• RFID tracking for all shipments</li>
                        <li>• 30-day return policy</li>
                        <li>• Worldwide shipping network</li>
                        <li>• Customer support in multiple languages</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Legal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">ICEBOX NETWORK SL</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      144 ROBINSON ROAD, #12-01, ROBINSON SQUARE, SINGAPORE 068908
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Governing Law:</strong> These Terms of Service and any separate agreements 
                      whereby we provide you Services shall be governed by and construed in accordance 
                      with the laws of Singapore.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Jurisdiction:</strong> Any disputes arising out of or relating to these 
                      Terms of Service or the Services shall be subject to the exclusive jurisdiction 
                      of the courts of Singapore.
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
