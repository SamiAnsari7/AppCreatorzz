import type {NextConfig} from 'next';

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

export default nextConfig;
