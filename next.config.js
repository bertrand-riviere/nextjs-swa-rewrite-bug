const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/edit/:id',
        destination: '/edit?id=:id',
      },
      {
        source: '/page-a',
        destination: '/page-b',
      },
    ];
  },
};

module.exports = nextConfig;
