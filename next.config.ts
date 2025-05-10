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
      { // Added to support the problematic URL, though it's better to use configured placeholders
        protocol: 'https',
        hostname: 'imgs.search.brave.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
