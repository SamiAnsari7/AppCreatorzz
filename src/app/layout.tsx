import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from "@/components/ui/toaster";

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: 'Rural Scholar - Learn Anywhere',
  description: 'Offline-first mobile learning app for rural students, built with Next.js.',
  manifest: '/manifest.json', // Link to the web app manifest file
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#239d88' }, // HSL(170, 55%, 40%) --primary
    { media: '(prefers-color-scheme: dark)', color: '#2aa38c' },  // HSL(170, 55%, 50%) dark --primary
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default', // You can use 'black-translucent' for a more immersive feel
    title: 'Rural Scholar',
    // startupImage: [ // Optional: Define startup images for different Apple devices
    //   { url: '/icons/apple-splash-2048x2732.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
    // ],
  },
  // formatDetection: { // Optional: Disable auto-detection of phone numbers
  //   telephone: false,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        {/* Other meta tags like 'apple-mobile-web-app-title' are handled by metadata.appleWebApp */}
        {/* Service worker registration and manifest link are typically handled by next-pwa and Next.js metadata */}
      </head>
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px: 8 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
