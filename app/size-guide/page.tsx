import { ArrowLeft, Ruler, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SizeGuidePage() {
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
              <h1 className="text-3xl font-bold mb-4">Size Guide</h1>
              <p className="text-muted-foreground">
                Find the perfect fit for your clothing and accessories.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Men's Clothing Size Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Tops (Shirts, Polos, T-shirts)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 p-3 text-left">Size</th>
                              <th className="border border-gray-300 p-3 text-left">Chest (cm)</th>
                              <th className="border border-gray-300 p-3 text-left">Waist (cm)</th>
                              <th className="border border-gray-300 p-3 text-left">Length (cm)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">S</td>
                              <td className="border border-gray-300 p-3">86-91</td>
                              <td className="border border-gray-300 p-3">76-81</td>
                              <td className="border border-gray-300 p-3">68</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">M</td>
                              <td className="border border-gray-300 p-3">91-96</td>
                              <td className="border border-gray-300 p-3">81-86</td>
                              <td className="border border-gray-300 p-3">70</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">L</td>
                              <td className="border border-gray-300 p-3">96-101</td>
                              <td className="border border-gray-300 p-3">86-91</td>
                              <td className="border border-gray-300 p-3">72</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">XL</td>
                              <td className="border border-gray-300 p-3">101-106</td>
                              <td className="border border-gray-300 p-3">91-96</td>
                              <td className="border border-gray-300 p-3">74</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Women's Clothing Size Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Tops & Dresses</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 p-3 text-left">Size</th>
                              <th className="border border-gray-300 p-3 text-left">Bust (cm)</th>
                              <th className="border border-gray-300 p-3 text-left">Waist (cm)</th>
                              <th className="border border-gray-300 p-3 text-left">Hip (cm)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">XS</td>
                              <td className="border border-gray-300 p-3">81-86</td>
                              <td className="border border-gray-300 p-3">66-71</td>
                              <td className="border border-gray-300 p-3">86-91</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">S</td>
                              <td className="border border-gray-300 p-3">86-91</td>
                              <td className="border border-gray-300 p-3">71-76</td>
                              <td className="border border-gray-300 p-3">91-96</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">M</td>
                              <td className="border border-gray-300 p-3">91-96</td>
                              <td className="border border-gray-300 p-3">76-81</td>
                              <td className="border border-gray-300 p-3">96-101</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">L</td>
                              <td className="border border-gray-300 p-3">96-101</td>
                              <td className="border border-gray-300 p-3">81-86</td>
                              <td className="border border-gray-300 p-3">101-106</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardContent className="py-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">How to Measure</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Ruler className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Use a Measuring Tape</h4>
                      <p className="text-sm text-muted-foreground">
                        Use a flexible measuring tape for accurate measurements
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Measure Over Underwear</h4>
                      <p className="text-sm text-muted-foreground">
                        Measure over the appropriate undergarments for accurate sizing
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold text-purple-600">?</span>
                      </div>
                      <h4 className="font-semibold mb-2">Need Help?</h4>
                      <p className="text-sm text-muted-foreground">
                        Contact our customer service for personalized sizing assistance
                      </p>
                    </div>
                  </div>
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