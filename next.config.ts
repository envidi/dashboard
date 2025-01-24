import type { NextConfig } from 'next';

import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.ts',
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n,
};

export default nextConfig;
