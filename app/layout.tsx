import type { Metadata, Viewport } from 'next';
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://floradale.vercel.app'),
  title: 'Lompoc Valley Agricultural Estate | Santa Barbara County',
  description: '406.7-acre premier agricultural estate in Santa Barbara County with multiple configuration options from $4.8M to $15.6M. Turnkey operations, comprehensive infrastructure, and proven income potential.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'Lompoc Valley Agricultural Estate',
    description: '406.7-acre premier agricultural estate in Santa Barbara County. Multiple configuration options from $4.8M to $15.6M. Turnkey operations with proven income potential.',
    url: 'https://floradale.vercel.app',
    siteName: 'Floradale Properties',
    images: [
      {
        url: 'https://floradale.vercel.app/FloradaleReduced.jpg',
        secureUrl: 'https://floradale.vercel.app/FloradaleReduced.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Aerial view of Lompoc Valley Agricultural Estate showing 406.7 acres of prime farmland',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lompoc Valley Agricultural Estate',
    description: '406.7-acre premier agricultural estate in Santa Barbara County. Multiple configurations from $4.8M to $15.6M.',
    images: ['https://floradale.vercel.app/FloradaleReduced.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#1a2e1f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
