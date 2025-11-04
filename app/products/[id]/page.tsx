"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"
import { ShoppingCart, Heart, Share2, Package, Shield, ArrowLeft, ChevronLeft, ChevronRight, ShieldCheck, ThermometerSun, Snowflake, ArrowDownUp, Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const product = getProductById(resolvedParams.id)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-muted-foreground mb-6">Product not found</p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const images = product.images || [product.image]
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name}`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Product link copied to clipboard!')
      } catch (error) {
        console.log('Error copying to clipboard:', error)
      }
    }
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size')
      return
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      alert('Please select a color')
      return
    }

    addToCart({ ...product, size: selectedSize, color: selectedColor })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  const featureIcons = [
    <ShieldCheck className="w-6 h-6 text-green-500" />,  // BPA-free硅胶
    <ThermometerSun className="w-6 h-6 text-orange-500" />, // 微波炉适用
    <Snowflake className="w-6 h-6 text-blue-500" />,       // 冰箱适用
    <ArrowDownUp className="w-6 h-6 text-purple-500" />    // 可折叠设计
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex justify-center">
        <div className="container py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Images Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.originalPrice && (
                  <Badge className="absolute top-4 left-4 bg-destructive">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-destructive">Out of Stock</Badge>
                )}

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="grid grid-cols-6 gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded overflow-hidden border-2 ${currentImageIndex === index ? 'border-primary' : 'border-transparent'
                        }`}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </div>
                  )}
                </div>
                {product.inStock ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">In Stock</Badge>
                ) : (
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Out of Stock</Badge>
                )}
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Select Color</h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg font-medium transition-colors ${selectedColor === color
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-gray-300 hover:border-primary'
                          }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="text-sm text-muted-foreground mt-2">Selected: {selectedColor}</p>
                  )}
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Select Size</h3>
                  <div className="grid grid-cols-6 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg font-medium transition-colors ${selectedSize === size
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-gray-300 hover:border-primary'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {selectedSize && (
                    <p className="text-sm text-muted-foreground mt-2">Selected: {selectedSize}</p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" onClick={handleWishlistToggle}>
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="text-sm">RFID Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">COD Available</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="border rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">{key}</div>
                        <div className="text-sm font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      {/* 页面滚动图文结合介绍产品 */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* 产品标题与价格区 */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>

            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-semibold">{product.rating}</span>
              </div>
              <div className="text-sm text-gray-500">|</div>
              <div className="text-sm font-medium text-green-600">In Stock</div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <span className="text-xl text-gray-500 line-through">${product?.originalPrice?.toFixed(2)}</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                Save ${(product?.originalPrice && product.price ? product?.originalPrice - product.price : 0)?.toFixed(2)}
              </span>
            </div>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{product.description}</p>
          </div>

          {/* 纵向滚动图文展示区 */}
          <div className="max-w-3xl mx-auto space-y-6">
            {product.images.map((image, index) => (
              <div key={index} className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-2xl" >
                <Image
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 渐变遮罩增强文字可读性 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70"></div>

                {/* 特性文本 - 仅对前4张图片显示对应特性 */}
                {index < product.features?.length && (
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{featureIcons[index]}</div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{product.features[index]}</h3>
                        {/* 根据特性添加补充说明 */}
                        {index === 0 && <p className="text-gray-600">Safe for you and your family</p>}
                        {index === 1 && <p className="text-gray-600">Convenient heating and storage</p>}
                        {index === 2 && <p className="text-gray-600">Space-saving design for small kitchens</p>}
                        {index === 3 && <p className="text-gray-600">Perfect for all your storage needs</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* 规格信息卡片 - 最后一张图片显示 */}
                {index === product.images.length - 1 && (
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2" />
                      Product Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium">{key}:</span> {value}
                        </div>
                      ))}
                      <div>
                        <span className="font-medium">Set Includes:</span> 4 sizes
                      </div>
                      <div>
                        <span className="font-medium">Safety:</span> BPA-free
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 行动召唤区域 */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full shadow-lg transform transition hover:scale-105 cursor-pointer">
              Add to Cart - ${product.price.toFixed(2)}
            </Button>
            <p className="mt-4 text-gray-500 text-sm">30-day money back guarantee • Free shipping on orders over $35</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
