import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Token UI',
  description: 'Component library for Design System Documentation',
  openGraph: {
    title: 'Token UI',
    description: 'Component library for Design System Documentation',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Token UI',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans text-foreground antialiased`}
      >
        <RootProvider>
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}
