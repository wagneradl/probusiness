/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/probusiness',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig