import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },

  webpack(config) {
    // Exclude svg from the default file loader
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test instanceof RegExp && rule.test.test('.svg')
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader for svg files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // You can add SVGR options here if needed
            // e.g. icon: true, svgoConfig: {...}
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
