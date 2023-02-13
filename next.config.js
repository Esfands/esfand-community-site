/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  headers: [
    { key: "Access-Control-Allow-Origin", value: "https://esfans.net"},
  ]
}

module.exports = nextConfig
