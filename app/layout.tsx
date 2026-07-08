import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/SmoothScroll'
import type { Metadata, Viewport } from 'next'
import { Archivo_Black, Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: 'CraftedSnippets Co. — Websites That Mean Business',
  description:
    'CraftedSnippets Co. crafts clean, modern, mobile-first websites that help local businesses grow online. Craftsites that actually convert.',
  generator: 'v0.app',
  openGraph: {
    title: 'CraftedSnippets Co.',
    description: 'Craftsites that actually convert. Premium websites for local businesses.',
    type: 'website',
    images: [{ url: '/logo.png', width: 1024, height: 1024, alt: 'CraftedSnippets Co. starburst logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CraftedSnippets Co.',
    description: 'Craftsites that actually convert.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#513827',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${archivo.variable} ${grotesk.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="antialiased font-body">
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
