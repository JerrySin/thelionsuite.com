/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/videos',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/places-to-fly',
        destination: '/location',
        permanent: true,
      },
      {
        source: '/place-to-stay-in-chetwynd',
        destination: '/location',
        permanent: true,
      },
      {
        source: '/chetwynd-accommodations',
        destination: '/location',
        permanent: true,
      },
      {
        source: '/Users/Account/LogOn',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
