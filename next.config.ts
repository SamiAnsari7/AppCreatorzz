import type {NextConfig} from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public', // Destination directory for service worker files
  register: true, // Auto-register service worker
  skipWaiting: true, // Install new service worker on activate, skipping the waiting phase
  cacheOnNavigation: true, // Cache pages navigated to by the user
  aggressiveFrontEndNavCaching: true, // Aggressively cache assets needed for frontend navigation
  reloadOnOnline: true, // Reload page when app comes back online
  // disable: process.env.NODE_ENV === 'development', // Optional: disable PWA in dev mode
  // fallbacks: { // Optional: define fallbacks for offline mode
  //   document: '/offline', // if you create an /offline page
  // },
});

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.w3schools.com', // For placeholder media
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.w3.org', // For placeholder PDF
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgs.search.brave.com',
        port: '',
        pathname: '/**',
      },
      { // Allows images from any HTTPS source.
        // Be cautious with this in production environments if URL sources are not trusted.
        // Consider more specific patterns or an image upload/proxy service for better security.
        protocol: 'https',
        hostname: '**', // This is a wildcard for any hostname
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default withPWA(nextConfig);
