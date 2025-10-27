/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static export/Netlify deployment
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;

