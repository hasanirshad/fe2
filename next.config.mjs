/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',           // When users visit the root
        destination: '/home',  // Redirect them to /Home
        permanent: true,       // Set to true for a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
