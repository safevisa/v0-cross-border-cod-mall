import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>CODPAL Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-sm text-muted-foreground mb-6">
                  Last updated: January 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using CODPAL's services, you accept and agree to be bound by 
                    the terms and provision of this agreement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
                  <p className="mb-4">
                    Permission is granted to temporarily use CODPAL's services for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a 
                    transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
                  <p className="mb-4">
                    When you create an account with us, you must provide information that is 
                    accurate, complete, and current at all times. You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Safeguarding the password and all activities under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Ensuring your account information remains accurate</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">4. Orders and Payment</h2>
                  <p className="mb-4">
                    All orders are subject to acceptance by CODPAL. We reserve the right to refuse 
                    or cancel your order at any time for certain reasons including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Product availability</li>
                    <li>Errors in pricing or product information</li>
                    <li>Suspected fraudulent activity</li>
                    <li>Payment authorization issues</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">5. Shipping and Delivery</h2>
                  <p>
                    We ship to over 100 countries worldwide. Delivery times vary by location. 
                    All orders are tracked with RFID technology. COD (Cash on Delivery) is available 
                    in select regions.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">6. Returns and Refunds</h2>
                  <p className="mb-4">
                    We offer returns within 30 days of delivery for unused items in original packaging. 
                    Refunds will be processed within 5-7 business days after we receive the returned items.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">7. Prohibited Uses</h2>
                  <p className="mb-4">
                    You may not use our service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
                  <p>
                    In no event shall CODPAL, nor its directors, employees, partners, agents, suppliers, 
                    or affiliates, be liable for any indirect, incidental, special, consequential, or 
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                    or other intangible losses, resulting from your use of the service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
                  <p className="mb-4">
                    These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Spain.
                  </p>
                  <p>
                    Any disputes arising out of or relating to these Terms of Service or the Services shall be subject to the exclusive jurisdiction of the courts of Spain.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-semibold">ICEBOX NETWORK SL</p>
                    <p>Getafe, Resurrección street, number 3, Spain</p>
                    <p><strong>Email:</strong> legal@codpal.com</p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
