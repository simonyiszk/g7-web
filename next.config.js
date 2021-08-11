const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fontsource/noto-sans"]);

const nextConfig = {
	reactStrictMode: true,
	future: {
		strictPostcssConfiguration: true,
	},
	env: {
		API_BASE_URL: process.env.API_BASE_URL || "http://127.0.0.1:8080/api",
	},
};

module.exports = withPlugins(
	[withTM, withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
