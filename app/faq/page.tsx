import { ArrowLeft, HelpCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is CODPAL?",
          answer: "CODPAL is a cross-border e-commerce platform specializing in high-quality products from China, shipping to over 100 countries worldwide. We offer a wide range of products including daily essentials, fashion, outdoor gear, and specialty items like Pu-er tea and jade jewelry."
        },
        {
          question: "How do I create an account?",
          answer: "Click on 'Sign Up' in the top right corner, fill in your name, email, and password. You'll receive a confirmation email to verify your account."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your personal information. All payment data is processed securely through trusted third-party providers."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Shipping times vary by location: Singapore/Malaysia (2-3 days), Asia Pacific (5-7 days), North America (7-10 days), Europe (8-12 days), Other regions (10-15 days)."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes, we offer free standard shipping worldwide on all orders. Express shipping is available for an additional $15.99 for faster delivery."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, all orders are tracked with RFID technology. You'll receive a tracking number via email once your order ships, and you can track it on our website or the carrier's website."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept Cash on Delivery (COD), credit cards, and PayPal. COD is available in select regions for your convenience."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unused items in original packaging with all tags attached. Returns are free for defective items or our errors, but customers pay return shipping for change of mind returns."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Refunds are processed within 3-5 business days after we receive your returned item. The money will appear in your original payment method within 5-7 business days."
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer: "Yes, you can exchange items for a different size, color, or style. Please contact customer service to arrange an exchange."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          question: "Are your products authentic?",
          answer: "Yes, all our products are 100% authentic. We work directly with manufacturers and authorized distributors to ensure product authenticity and quality."
        },
        {
          question: "What if a product is out of stock?",
          answer: "If a product is out of stock, you'll see an 'Out of Stock' badge. You can sign up for email notifications to be alerted when it becomes available again."
        },
        {
          question: "Do you offer product warranties?",
          answer: "Product warranties vary by item. Most electronics come with manufacturer warranties, and we provide our own warranty for certain categories. Check individual product pages for warranty details."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          question: "How do I change my password?",
          answer: "Go to 'My Account' > 'Account Settings' > 'Change Password'. Enter your current password and new password to update."
        },
        {
          question: "Can I save multiple addresses?",
          answer: "Yes, you can save multiple shipping addresses in your account. Go to 'My Account' > 'Addresses' to add, edit, or delete addresses."
        },
        {
          question: "What should I do if I forgot my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link."
        }
      ]
    }
  ]

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
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-muted-foreground">
                Find answers to common questions about our products, shipping, returns, and more.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border rounded-lg">
                          <div className="p-4">
                            <h4 className="font-medium mb-2">{faq.question}</h4>
                            <p className="text-muted-foreground text-sm">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="text-center py-8">
                <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our customer service team is here to help.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/shipping">Shipping Info</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
