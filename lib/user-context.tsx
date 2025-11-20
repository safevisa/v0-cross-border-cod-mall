"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

export interface Address {
  id: string
  name: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}

export interface PaymentMethod {
  id: string
  type: 'cod' | 'credit_card' | 'paypal'
  name: string
  details: string
  isDefault: boolean
}

interface UserContextType {
  addresses: Address[]
  paymentMethods: PaymentMethod[]
  addAddress: (address: Omit<Address, 'id'>) => void
  updateAddress: (id: string, address: Partial<Address>) => void
  deleteAddress: (id: string) => void
  setDefaultAddress: (id: string) => void
  addPaymentMethod: (method: Omit<PaymentMethod, 'id'>) => void
  updatePaymentMethod: (id: string, method: Partial<PaymentMethod>) => void
  deletePaymentMethod: (id: string) => void
  setDefaultPaymentMethod: (id: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'your name',
      phone: 'your phone number',
      address: 'your address',
      city: 'your city',
      state: 'your state',
      postalCode: 'your postal code',
      country: 'your country',
      isDefault: true
    }
  ])

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'cod',
      name: 'Cash on Delivery',
      details: 'Pay when you receive your order',
      isDefault: true
    }
  ])

  const addAddress = useCallback((address: Omit<Address, 'id'>) => {
    const newAddress: Address = {
      ...address,
      id: new Date().getTime().toString()
    }
    setAddresses(prev => [...prev, newAddress])
  }, [])

  const updateAddress = useCallback((id: string, address: Partial<Address>) => {
    setAddresses(prev => prev.map(addr => 
      addr.id === id ? { ...addr, ...address } : addr
    ))
  }, [])

  const deleteAddress = useCallback((id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id))
  }, [])

  const setDefaultAddress = useCallback((id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })))
  }, [])

  const addPaymentMethod = useCallback((method: Omit<PaymentMethod, 'id'>) => {
    const newMethod: PaymentMethod = {
      ...method,
      id: new Date().getTime().toString()
    }
    setPaymentMethods(prev => [...prev, newMethod])
  }, [])

  const updatePaymentMethod = useCallback((id: string, method: Partial<PaymentMethod>) => {
    setPaymentMethods(prev => prev.map(m => 
      m.id === id ? { ...m, ...method } : m
    ))
  }, [])

  const deletePaymentMethod = useCallback((id: string) => {
    setPaymentMethods(prev => prev.filter(m => m.id !== id))
  }, [])

  const setDefaultPaymentMethod = useCallback((id: string) => {
    setPaymentMethods(prev => prev.map(m => ({
      ...m,
      isDefault: m.id === id
    })))
  }, [])

  return (
    <UserContext.Provider
      value={{
        addresses,
        paymentMethods,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        addPaymentMethod,
        updatePaymentMethod,
        deletePaymentMethod,
        setDefaultPaymentMethod,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
