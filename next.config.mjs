/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://10.60.46.28:5000/:path*'
      }
    ]
  }
}

export default nextConfig
