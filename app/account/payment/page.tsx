"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Plus, Edit, Trash2, CreditCard, Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useUser, type PaymentMethod } from "@/lib/user-context"
import { useAuth } from "@/lib/auth-context"

export default function PaymentPage() {
  const { paymentMethods, addPaymentMethod, updatePaymentMethod, deletePaymentMethod, setDefaultPaymentMethod } = useUser()
  const { isLoggedIn } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [editingMethod, setEditingMethod] = useState<PaymentMethod | null>(null)
  const [formData, setFormData] = useState({
    type: 'credit_card' as PaymentMethod['type'],
    name: '',
    details: '',
    isDefault: false
  })

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">Please sign in to manage your payment methods</p>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const paymentTypeOptions = [
    { value: 'cod', label: 'Cash on Delivery', icon: '💰' },
    { value: 'credit_card', label: 'Credit Card', icon: '💳' },
    { value: 'paypal', label: 'PayPal', icon: '🅿️' },
  ]

  const getPaymentIcon = (type: PaymentMethod['type']) => {
    const option = paymentTypeOptions.find(opt => opt.value === type)
    return option?.icon || '💳'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingMethod) {
      updatePaymentMethod(editingMethod.id, formData)
    } else {
      addPaymentMethod(formData)
    }
    
    setShowForm(false)
    setEditingMethod(null)
    setFormData({
      type: 'credit_card',
      name: '',
      details: '',
      isDefault: false
    })
  }

  const handleEdit = (method: PaymentMethod) => {
    setEditingMethod(method)
    setFormData({
      type: method.type,
      name: method.name,
      details: method.details,
      isDefault: method.isDefault
    })
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this payment method?')) {
      deletePaymentMethod(id)
    }
  }

  const handleSetDefault = (id: string) => {
    setDefaultPaymentMethod(id)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" asChild>
              <Link href="/account">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Account
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Payment Methods</h1>
              <p className="text-muted-foreground">Manage your payment options</p>
            </div>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
          </div>

          {/* Security Notice */}
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">Secure Payment Processing</p>
                  <p className="text-xs text-green-600">
                    Your payment information is encrypted and securely stored. We never store your full card details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add/Edit Form */}
          {showForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{editingMethod ? 'Edit Payment Method' : 'Add New Payment Method'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payment Type</label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <span className="mr-2">{getPaymentIcon(formData.type)}</span>
                          {paymentTypeOptions.find(opt => opt.value === formData.type)?.label}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {paymentTypeOptions.map((option) => (
                          <DropdownMenuItem
                            key={option.value}
                            onClick={() => setFormData({...formData, type: option.value as PaymentMethod['type']})}
                          >
                            <span className="mr-2">{option.icon}</span>
                            {option.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Display Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g., My Visa Card"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {formData.type === 'credit_card' ? 'Card Details' : 
                       formData.type === 'cod' ? 'Description' : 'Account Details'}
                    </label>
                    <Input
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      placeholder={
                        formData.type === 'credit_card' ? '**** **** **** 1234' :
                        formData.type === 'cod' ? 'Pay when you receive your order' :
                        'Enter account details'
                      }
                      required
                    />
                    {formData.type === 'credit_card' && (
                      <p className="text-xs text-muted-foreground">
                        Only the last 4 digits will be stored for identification
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, isDefault: !formData.isDefault})}
                      className={`flex h-4 w-4 items-center justify-center rounded border ${
                        formData.isDefault
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-muted-foreground"
                      }`}
                    >
                      {formData.isDefault && <Check className="h-3 w-3" />}
                    </button>
                    <label className="text-sm text-muted-foreground">
                      Set as default payment method
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit">
                      {editingMethod ? 'Update Payment Method' : 'Add Payment Method'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowForm(false)
                        setEditingMethod(null)
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Payment Methods List */}
          <div className="grid gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold">{method.name}</span>
                        {method.isDefault && (
                          <Badge variant="outline" className="text-xs">
                            Default
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{getPaymentIcon(method.type)}</span>
                        <span className="text-sm text-muted-foreground">
                          {paymentTypeOptions.find(opt => opt.value === method.type)?.label}
                        </span>
                      </div>
                      <p className="text-sm">{method.details}</p>
                    </div>
                    <div className="flex gap-2">
                      {!method.isDefault && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSetDefault(method.id)}
                        >
                          Set Default
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(method)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(method.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {paymentMethods.length === 0 && (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                  <CreditCard className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">No payment methods yet</h3>
              <p className="text-muted-foreground mb-6">
                Add your first payment method to get started
              </p>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
