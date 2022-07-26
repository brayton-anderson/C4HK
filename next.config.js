/** @type {import('next').NextConfig} */
// const Flutterwave = require('flutterwave-react-v3');
// const flwPM = new Flutterwave(process.env.NEXT_PUBLIC_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRET_KEY);
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
      NEXT_PUBLIC_SECRET_KEY:
      process.env.NEXT_PUBLIC_SECRET_KEY,
      NEXT_PUBLIC_ENCRYPTION_KEY:
      process.env.NEXT_PUBLIC_ENCRYPTION_KEY,
  },
  swcMinify: true,
 // experimental: {
    // images: {
    //   optimized: true,
    //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 600, 780, 1080],
    // },
  //},
}

module.exports = nextConfig
