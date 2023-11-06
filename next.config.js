const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/page-a',
        destination: '/page-b',
      },
    ];
  },
};

module.exports = nextConfig;
