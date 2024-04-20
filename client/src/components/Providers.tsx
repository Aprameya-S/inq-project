"use client"
import React from 'react'
import { ThemeProvider } from "next-themes"
// import {}

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme='system'
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers