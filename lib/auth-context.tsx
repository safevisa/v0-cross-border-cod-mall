"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    try {
      // 模拟登录API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 简单的验证逻辑（实际项目中应该调用真实API）
      if (email && password.length >= 6) {
        const newUser: User = {
          id: "1",
          email,
          name: email.split("@")[0],
          avatar: "/placeholder-user.jpg"
        }
        setUser(newUser)
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (email: string, password: string, name: string): Promise<boolean> => {
    setLoading(true)
    try {
      // 模拟注册API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 简单的验证逻辑（实际项目中应该调用真实API）
      if (email && password.length >= 6 && name) {
        const newUser: User = {
          id: "1",
          email,
          name,
          avatar: "/placeholder-user.jpg"
        }
        setUser(newUser)
        return true
      }
      return false
    } catch (error) {
      console.error("Registration error:", error)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
