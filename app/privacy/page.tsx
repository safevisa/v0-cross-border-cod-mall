import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>CODPAL Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-sm text-muted-foreground mb-6">
                  Last updated: {new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Order history and preferences</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Provide customer support</li>
                    <li>Send you important updates about your orders</li>
                    <li>Improve our services and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With shipping carriers to deliver your orders</li>
                    <li>With payment processors to complete transactions</li>
                    <li>When required by law or to protect our rights</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                  <p className="mb-4">
                    We implement comprehensive security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>SSL/TLS encryption for all data transmission</li>
                    <li>Secure payment processing with PCI DSS compliance</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Data backup and recovery procedures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p>
                    All payment information is encrypted and processed securely through certified 
                    payment processors. We never store complete payment card information on our servers.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">5. Your Rights (GDPR Compliance)</h2>
                  <p className="mb-4">
                    Under the General Data Protection Regulation (GDPR), you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Right of Access:</strong> Request copies of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                    <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
                    <li><strong>Right to Object:</strong> Opt out of marketing communications</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                  </ul>
                  <p className="mb-4">
                    To exercise any of these rights, please contact us at privacy@codpal.com. 
                    We will respond to your request within 30 days.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Data Protection Officer:</strong> dpo@codpal.com<br />
                      <strong>Supervisory Authority:</strong> Spanish Data Protection Agency (AEPD) | Personal Data Protection Commission (PDPC, Singapore)
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">6. Governing Law</h2>
                  <p>
                    This Privacy Policy and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Spain.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-semibold">ICEBOX NETWORK SL</p>
                    <p>Getafe, Resurrección street, number 3, Spain</p>
                    <p><strong>Email:</strong> privacy@codpal.com</p>
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
