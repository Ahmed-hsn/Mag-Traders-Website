import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MAG Traders | Premium Printing & Branding Solutions in Pakistan',
  description:
    'MAG Traders offers premium printing and branding solutions including business cards, banners, packaging, signage, stationery, and graphic design across Pakistan. Get a quote today.',
  keywords: [
    'printing services Pakistan',
    'branding solutions Lahore',
    'business card printing',
    'banner printing Pakistan',
    'custom packaging printing',
    'offset printing Pakistan',
    'digital printing services',
    'corporate stationery printing',
    'signage printing Pakistan',
    'MAG Traders',
    'promotional merchandise printing',
    'graphic design Pakistan',
    'bulk printing services',
    'printing company Pakistan',
  ].join(', '),
  openGraph: {
    title: 'MAG Traders | Premium Printing & Branding Solutions',
    description:
      'Your trusted partner for premium printing, branding, and design services across Pakistan.',
    type: 'website',
    locale: 'en_PK',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
