/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["jbx.mypinata.cloud"] },
};

module.exports = nextConfig;
