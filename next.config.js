const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fontsource/noto-sans"]);

const nextConfig = {
	images: {
		domains: ["g7.sch.bme.hu"],
	},
	env: {
		NEXT_PUBLIC_BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
		NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
		NEXT_PUBLIC_CDN_BASE_URL: process.env.NEXT_PUBLIC_CDN_BASE_URL,
	},
	reactStrictMode: true,
	future: {
		strictPostcssConfiguration: true,
	},
};

module.exports = withPlugins(
	[withTM, withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
