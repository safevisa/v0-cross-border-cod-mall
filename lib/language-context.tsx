"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface Language {
  code: string
  name: string
  flag: string
  currency: string
}

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  languages: Language[]
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸", currency: "USD" },
  { code: "sg", name: "Singapore", flag: "🇸🇬", currency: "SGD" },
  { code: "ph", name: "Philippines", flag: "🇵🇭", currency: "PHP" },
  { code: "ae", name: "UAE", flag: "🇦🇪", currency: "AED" },
  { code: "br", name: "Brazil", flag: "🇧🇷", currency: "BRL" },
]

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language from localStorage on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage')
      if (savedLanguage) {
        try {
          const parsedLanguage = JSON.parse(savedLanguage)
          const language = languages.find(lang => lang.code === parsedLanguage.code)
          if (language) {
            setCurrentLanguage(language)
          }
        } catch (error) {
          console.error('Error parsing saved language:', error)
        }
      }
    }
    setIsInitialized(true)
  }, [])

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', JSON.stringify(language))
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
