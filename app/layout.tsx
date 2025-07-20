import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranshu Jha - Cybersecurity Instructor | Sarvodaya Security",
  description:
    "Learn ethical hacking and cybersecurity from eJPT certified instructor Pranshu Jha. Weekend batches available with hands-on training and real-world practice.",
  keywords: "ethical hacking, cybersecurity, eJPT, penetration testing, linux, cybersecurity training",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
