import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Verifica se há uma preferência salva no localStorage
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      return savedLanguage
    }
    // Se não há preferência salva, usa português como padrão
    return 'pt'
  })

  useEffect(() => {
    // Salva a preferência no localStorage
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
