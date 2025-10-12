"use client"

import React, { createContext, useContext, useState, useCallback, useEffect } from "react"
import { products } from "./products"

export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  items: OrderItem[]
  totalAmount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: {
    name: string
    phone: string
    address: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  paymentMethod: {
    type: string
    name: string
    details: string
  }
  orderDate: string
  trackingNumber?: string
}

interface OrderContextType {
  orders: Order[]
  addOrder: (order: Omit<Order, 'id' | 'orderNumber' | 'orderDate'>) => Order
  updateOrderStatus: (orderId: string, status: Order['status']) => void
  getOrdersByUser: (userId: string) => Order[]
  getOrderById: (orderId: string) => Order | undefined
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('codpal-orders')
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders))
      } catch (error) {
        console.error('Error loading orders:', error)
      }
    }
  }, [])

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem('codpal-orders', JSON.stringify(orders))
  }, [orders])

  const generateOrderNumber = useCallback(() => {
    // Use a more predictable method for SSR compatibility
    const timestamp = new Date().getTime().toString().slice(-6)
    const random = Math.random().toString(36).substring(2, 5).toUpperCase()
    return `ORD-${timestamp}-${random}`
  }, [])

  const addOrder = useCallback((orderData: Omit<Order, 'id' | 'orderNumber' | 'orderDate'>) => {
    const now = new Date()
    const newOrder: Order = {
      ...orderData,
      id: `order_${now.getTime()}_${Math.random().toString(36).substring(2, 9)}`,
      orderNumber: generateOrderNumber(),
      orderDate: now.toISOString(),
      status: 'pending'
    }

    setOrders(prevOrders => [newOrder, ...prevOrders])
    return newOrder
  }, [generateOrderNumber])

  const updateOrderStatus = useCallback((orderId: string, status: Order['status']) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    )
  }, [])

  const getOrdersByUser = useCallback((userId: string) => {
    return orders.filter(order => order.userId === userId)
  }, [orders])

  const getOrderById = useCallback((orderId: string) => {
    return orders.find(order => order.id === orderId)
  }, [orders])

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        getOrdersByUser,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrderProvider")
  }
  return context
}
