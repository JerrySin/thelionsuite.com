import type { Metadata, Viewport } from 'next'
import { Oswald, Lato } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { HotelJsonLd, LocalBusinessJsonLd } from '@/components/json-ld'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const controwell = localFont({
  src: '../public/fonts/ControwellScript-Regular.ttf.woff',
  variable: '--font-controwell',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thelionsuite.com'),
  title: {
    default: 'The Lion Inn & Suites | Premium Hotel in Chetwynd, BC',
    template: '%s | The Lion Inn & Suites',
  },
  description: 'Experience comfort and elegance at The Lion Inn & Suites in Chetwynd, British Columbia. 19 contemporary suites with full kitchenettes, modern amenities, and exceptional hospitality at the gateway to the Peace River Country.',
  keywords: [
    'hotel Chetwynd',
    'Chetwynd accommodations',
    'The Lion Inn & Suites',
    'BC hotels',
    'Peace River Country lodging',
    'extended stay Chetwynd',
    'kitchenette suites BC',
    'business travel Chetwynd',
    'Rocky Mountains hotel',
  ],
  authors: [{ name: 'The Lion Inn & Suites' }],
  creator: 'The Lion Inn & Suites',
  publisher: 'The Lion Inn & Suites',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://thelionsuite.com',
    siteName: 'The Lion Inn & Suites',
    title: 'The Lion Inn & Suites | Premium Hotel in Chetwynd, BC',
    description: 'Experience comfort and elegance at The Lion Inn & Suites. 19 contemporary suites with full kitchenettes in the heart of Chetwynd, British Columbia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Lion Inn & Suites - Premium Hotel in Chetwynd, BC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lion Inn & Suites | Premium Hotel in Chetwynd, BC',
    description: 'Experience comfort and elegance at The Lion Inn & Suites. 19 contemporary suites with full kitchenettes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://thelionsuite.com',
  },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#59412f' },
    { media: '(prefers-color-scheme: dark)', color: '#3d1f0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable} ${controwell.variable}`}>
      <head>
        <link rel="canonical" href="https://thelionsuite.com" />
      </head>
      <body className="antialiased min-h-screen">
        <HotelJsonLd />
        <LocalBusinessJsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
