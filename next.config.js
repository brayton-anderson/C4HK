/** @type {import('next').NextConfig} */
// const Flutterwave = require('flutterwave-react-v3');
// const flwPM = new Flutterwave(process.env.NEXT_PUBLIC_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRET_KEY);

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
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
    // webpack: (config) => {
    //   config.resolve = {
    //     ...config.resolve,
    //     fallback: {
    //       "fs": false,
    //       "path": false,
    //       "os": false,
    //     }
    //   }
    //   return config
    // },
  }
}

