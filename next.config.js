// @ts-ignore
const withVideos = require("next-videos");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = withVideos();
