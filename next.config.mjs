const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: false,
  output: 'standalone'
};

export default nextConfig;
