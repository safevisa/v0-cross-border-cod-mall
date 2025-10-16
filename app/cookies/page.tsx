import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiePolicyPage() {
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
            <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>CODPAL Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-sm text-muted-foreground mb-6">
                  Last updated: January 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">1. What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device 
                    when you visit our website. They help us provide you with a better experience 
                    by remembering your preferences and enabling certain functionality.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">2. Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Essential Cookies</h3>
                      <p className="mb-2">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Session management</li>
                        <li>Security and authentication</li>
                        <li>Shopping cart functionality</li>
                        <li>Load balancing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Performance Cookies</h3>
                      <p className="mb-2">
                        These cookies help us understand how visitors interact with our website.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Google Analytics</li>
                        <li>Page load times</li>
                        <li>Error tracking</li>
                        <li>User behavior analysis</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Functional Cookies</h3>
                      <p className="mb-2">
                        These cookies enable enhanced functionality and personalization.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Language preferences</li>
                        <li>Currency selection</li>
                        <li>User interface preferences</li>
                        <li>Location-based services</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Marketing Cookies</h3>
                      <p className="mb-2">
                        These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Facebook Pixel</li>
                        <li>Google Ads</li>
                        <li>Retargeting campaigns</li>
                        <li>Conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">3. Cookie Duration</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left">Cookie Type</th>
                          <th className="border border-gray-300 p-3 text-left">Duration</th>
                          <th className="border border-gray-300 p-3 text-left">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Session Cookies</td>
                          <td className="border border-gray-300 p-3">Until browser closes</td>
                          <td className="border border-gray-300 p-3">Essential functionality</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Authentication</td>
                          <td className="border border-gray-300 p-3">30 days</td>
                          <td className="border border-gray-300 p-3">User login</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Preferences</td>
                          <td className="border border-gray-300 p-3">1 year</td>
                          <td className="border border-gray-300 p-3">User settings</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Analytics</td>
                          <td className="border border-gray-300 p-3">2 years</td>
                          <td className="border border-gray-300 p-3">Performance tracking</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">4. Managing Cookies</h2>
                  <p className="mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                    <li><strong>Cookie Consent:</strong> Use our cookie banner to manage preferences</li>
                    <li><strong>Opt-out Links:</strong> Use industry opt-out tools for advertising cookies</li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality 
                      of our website and your user experience.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">5. Third-Party Cookies</h2>
                  <p className="mb-4">
                    We may use third-party services that set their own cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Analytics:</strong> Website analytics and performance</li>
                    <li><strong>Facebook:</strong> Social media integration and advertising</li>
                    <li><strong>Payment Processors:</strong> Secure payment processing</li>
                    <li><strong>Shipping Partners:</strong> Order tracking and delivery</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">6. Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time. Any changes will be posted 
                    on this page with an updated revision date. We encourage you to review this 
                    policy periodically.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong>Email:</strong> privacy@codpal.com</p>
                    <p><strong>Address:</strong> CODPAL PTE. LTD., Singapore</p>
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
