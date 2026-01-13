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
  distDir: 'dist',
  reactStrictMode: false,
  output: 'standalone'
};

export default nextConfig;
