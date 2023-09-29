"use client"

import React, { useState } from "react"

export const LocalesContext = React.createContext()

export default function LocalesContextProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <LocalesContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        selectedCurrency,
        setSelectedCurrency,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </LocalesContext.Provider>
  )
}
