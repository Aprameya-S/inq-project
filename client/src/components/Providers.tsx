"use client"
import React from 'react'
import { ThemeProvider } from "next-themes"
// import {}
import { AuthProvider } from "../context/AuthContext"
const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>

    <ThemeProvider
      attribute="class"
      defaultTheme='system'
      enableSystem
      >
      {children}
    </ThemeProvider>
      </AuthProvider>
  )
}

export default Providers