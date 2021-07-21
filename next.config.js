const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
	reactStrictMode: true,
	future: {
		strictPostcssConfiguration: true,
	},
};

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
