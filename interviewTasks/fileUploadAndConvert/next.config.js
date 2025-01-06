const nextConfig = {
  basePath: '/',
  swcMinify: true,
  reactStrictMode: true, // Enable React Strict Mode
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_NW18ENV: process.env.NW18ENV ? process.env.NW18ENV : process.env.NEXT_PUBLIC_NW18ENV,
  },
  images: {
    domains: [
      'images.moneycontrol.com',
      'via.placeholder.com',
      'stat2.moneycontrol.com',
      'sb.scorecardresearch.com',
      'www.moneycontrol.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.moneycontrol.com',
      },
      {
        protocol: 'https',
        hostname: 'moneycontrol.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'stgwww.moneycontrol.com',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/portfolio-score-insight/health-check',
        destination: '/api/health-check',
      },
    ];
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
