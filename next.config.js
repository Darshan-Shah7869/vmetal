// @ts-ignore

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "api.vmetalsolutions.com",
      },
    ],
    domains: ["api.vmetalsolutions.com"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};
