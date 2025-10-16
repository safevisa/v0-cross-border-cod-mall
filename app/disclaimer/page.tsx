import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DisclaimerPage() {
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
            <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>CODPAL Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-sm text-muted-foreground mb-6">
                  Last updated: January 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">1. General Disclaimer</h2>
                  <p>
                    The information on this website is provided on an "as is" basis. To the fullest 
                    extent permitted by law, CODPAL excludes all representations, warranties, 
                    conditions and terms relating to our website and the use of this website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">2. Product Information</h2>
                  <p className="mb-4">
                    While we strive to provide accurate product information, we cannot guarantee that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Product descriptions are error-free</li>
                    <li>Images accurately represent products</li>
                    <li>Prices are always current</li>
                    <li>Products are always in stock</li>
                    <li>Product specifications are complete</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">3. Limitation of Liability</h2>
                  <p className="mb-4">
                    CODPAL shall not be liable for any direct, indirect, incidental, special, 
                    consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loss of profits or revenue</li>
                    <li>Loss of data or information</li>
                    <li>Business interruption</li>
                    <li>Personal injury or property damage</li>
                    <li>Any other damages arising from the use of our services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">4. Third-Party Content</h2>
                  <p>
                    Our website may contain links to third-party websites or services. We are not 
                    responsible for the content, privacy policies, or practices of these third parties. 
                    Your use of third-party services is at your own risk.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">5. International Shipping</h2>
                  <p className="mb-4">
                    International shipping is subject to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Customs regulations and duties</li>
                    <li>Local import restrictions</li>
                    <li>Shipping delays beyond our control</li>
                    <li>Local laws and regulations</li>
                  </ul>
                  <p className="mt-4">
                    We are not responsible for delays, additional fees, or restrictions imposed by 
                    customs or local authorities.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">6. Payment and Security</h2>
                  <p>
                    While we use industry-standard security measures, we cannot guarantee that our 
                    website is completely secure from unauthorized access or data breaches. Users 
                    are responsible for maintaining the security of their account credentials.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">7. Force Majeure</h2>
                  <p>
                    We shall not be liable for any failure or delay in performance due to circumstances 
                    beyond our reasonable control, including but not limited to acts of God, natural 
                    disasters, war, terrorism, government actions, or other events of force majeure.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">8. Jurisdiction</h2>
                  <p>
                    This disclaimer is governed by the laws of Singapore. Any disputes arising from 
                    this disclaimer shall be subject to the exclusive jurisdiction of the courts of Singapore.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about this disclaimer, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong>Email:</strong> legal@codpal.com</p>
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
