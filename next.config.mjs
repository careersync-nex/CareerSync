/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Existing ESLint setup is flat-config (eslintrc-less); keep `next lint`
    // from blocking builds until it's wired into eslint.config.js in a
    // later phase.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
