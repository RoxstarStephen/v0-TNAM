import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TNAM - Sell Your Car Online in Tamil Nadu | Instant Valuation',
  description: 'Get an instant, transparent car valuation with doorstep inspection. Sell your car to TNAM and receive bank settlement within hours. Zero hassle, zero liability.',
  generator: 'v0.app',
  applicationName: 'TNAM - Tamil Nadu Auto-Mart',
  keywords: ['sell car', 'car valuation', 'instant quote', 'Tamil Nadu', 'doorstep inspection', 'car selling'],
  authors: [{ name: 'TNAM' }],
  openGraph: {
    type: 'website',
    url: 'https://tnam.app',
    title: 'TNAM - Sell Your Car Online in Tamil Nadu | Instant Valuation',
    description: 'Get an instant, transparent car valuation with doorstep inspection. Sell your car to TNAM and receive bank settlement within hours.',
    siteName: 'TNAM',
    images: [
      {
        url: 'https://tnam.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TNAM - Sell Your Car',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNAM - Sell Your Car Online in Tamil Nadu',
    description: 'Instant car valuation with doorstep inspection and bank settlement.',
    images: ['https://tnam.app/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
