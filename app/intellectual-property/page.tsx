import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntellectualPropertyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container mx-auto">
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
            <h1 className="text-3xl font-bold mb-8">Intellectual Property</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>CODPAL Intellectual Property Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-sm text-muted-foreground mb-6">
                  Last updated: {new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">1. Ownership of Content</h2>
                  <p>
                    All content on the CODPAL website, including but not limited to text, graphics, 
                    logos, images, audio clips, video, digital downloads, data compilations, and 
                    software, is the property of CODPAL PTE. LTD. or its content suppliers and is 
                    protected by international copyright laws.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">2. Trademarks</h2>
                  <p className="mb-4">
                    The following are trademarks of CODPAL PTE. LTD.:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>CODPAL logo and brand name</li>
                    <li>Product names and designs</li>
                    <li>Service marks and trade dress</li>
                    <li>Domain names and URLs</li>
                  </ul>
                  <p className="mt-4">
                    These trademarks may not be used without our prior written consent.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">3. Copyright Protection</h2>
                  <p className="mb-4">
                    All original content on our website is protected by copyright law. You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reproduce, distribute, or display our content without permission</li>
                    <li>Create derivative works based on our content</li>
                    <li>Use our content for commercial purposes</li>
                    <li>Remove or alter copyright notices</li>
                    <li>Reverse engineer our software or systems</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">4. User-Generated Content</h2>
                  <p className="mb-4">
                    When you submit content to our website (reviews, comments, images), you grant us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A non-exclusive, royalty-free license to use your content</li>
                    <li>The right to display, distribute, and modify your content</li>
                    <li>The right to use your content for marketing purposes</li>
                  </ul>
                  <p className="mt-4">
                    You retain ownership of your content but grant us these rights to operate our platform.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">5. Digital Millennium Copyright Act (DMCA)</h2>
                  <p className="mb-4">
                    We respect intellectual property rights and will respond to valid DMCA notices. 
                    If you believe your copyright has been infringed, please provide:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Identification of the copyrighted work</li>
                    <li>Location of the infringing material</li>
                    <li>Your contact information</li>
                    <li>A statement of good faith belief</li>
                    <li>A statement of accuracy under penalty of perjury</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">6. Third-Party Intellectual Property</h2>
                  <p>
                    We respect the intellectual property rights of third parties. Product images, 
                    descriptions, and specifications may be provided by suppliers and are used with 
                    permission. If you believe we have used your intellectual property without 
                    permission, please contact us immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">7. Fair Use</h2>
                  <p>
                    Limited use of our content may be permitted under fair use provisions, such as 
                    for educational purposes, news reporting, or criticism. However, any such use 
                    must not be for commercial purposes and must not harm our business interests.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">8. License to Use Website</h2>
                  <p className="mb-4">
                    We grant you a limited, non-exclusive, non-transferable license to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and use our website for personal, non-commercial purposes</li>
                    <li>View and download content for personal use only</li>
                    <li>Print pages for personal reference</li>
                  </ul>
                  <p className="mt-4">
                    This license does not include any resale or commercial use of our website or its contents.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">9. Violations and Enforcement</h2>
                  <p className="mb-4">
                    Violations of our intellectual property rights may result in:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Immediate termination of your access to our website</li>
                    <li>Legal action for damages and injunctive relief</li>
                    <li>Reporting to appropriate authorities</li>
                    <li>Pursuit of criminal charges where applicable</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
                  <p className="mb-4">
                    For intellectual property inquiries or to report violations:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong>Email:</strong> legal@codpal.com</p>
                    <p><strong>Address:</strong> CODPAL PTE. LTD., Singapore | Spanish</p>
                    <p><strong>DMCA Agent:</strong> dmca@codpal.com</p>
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
