import { ArrowLeft, Shield, Lock, Eye, Database, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataProtectionPage() {
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
            <h1 className="text-3xl font-bold mb-8">Data Protection & GDPR Compliance</h1>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Data Protection Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-sm text-muted-foreground mb-6">
                    Last updated: {new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
                  </p>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">1. Legal Basis for Processing</h2>
                    <p className="mb-4">
                      ICEBOX NETWORK SL processes personal data in compliance with the General Data Protection Regulation (GDPR) and 
                      the Personal Data Protection Act (PDPA) of Singapore. Our legal bases for processing include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Contract Performance:</strong> To fulfill orders and provide services</li>
                      <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                      <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                      <li><strong>Consent:</strong> For marketing communications and cookies</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">2. Data Categories We Process</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Identity Data</h3>
                        <ul className="text-sm space-y-1">
                          <li>• Name and contact information</li>
                          <li>• Email address and phone number</li>
                          <li>• Billing and shipping addresses</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Transaction Data</h3>
                        <ul className="text-sm space-y-1">
                          <li>• Purchase history and preferences</li>
                          <li>• Payment information (encrypted)</li>
                          <li>• Delivery and tracking data</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Security Measures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Lock className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Encryption</h3>
                      <p className="text-sm text-muted-foreground">
                        All data transmission uses TLS 1.3 encryption
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Secure Storage</h3>
                      <p className="text-sm text-muted-foreground">
                        Data stored in EU-certified data centers
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Access Control</h3>
                      <p className="text-sm text-muted-foreground">
                        Role-based access with audit trails
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Your Rights & Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">GDPR Rights</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Access & Portability</p>
                          <p className="text-muted-foreground">Request your data or transfer it</p>
                        </div>
                        <div>
                          <p className="font-medium">Rectification & Erasure</p>
                          <p className="text-muted-foreground">Correct or delete your data</p>
                        </div>
                        <div>
                          <p className="font-medium">Restriction & Objection</p>
                          <p className="text-muted-foreground">Limit processing or object</p>
                        </div>
                        <div>
                          <p className="font-medium">Withdraw Consent</p>
                          <p className="text-muted-foreground">Opt out anytime</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Data Controller:</strong> ICEBOX NETWORK SL</p>
                        <p><strong>Address:</strong> 144 ROBINSON ROAD, #12-01, ROBINSON SQUARE, SINGAPORE 068908</p>
                        <p><strong>Email:</strong> privacy@codpal.com</p>
                        <p><strong>DPO:</strong> dpo@codpal.com</p>
                        <p><strong>Supervisory Authority:</strong> Singaporean Data Protection Agency (AEPD) | Personal Data Protection Commission (PDPC, Singapore)</p>
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