const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fontsource/noto-sans"]);

const backendBaseUrl = process.env.BACKEND_BASE_URL ?? "http://127.0.0.1:8080/";

const nextConfig = {
	images: {
		domains: ["g7.sch.bme.hu"],
	},
	env: {
		BACKEND_BASE_URL: backendBaseUrl,
		API_BASE_URL: process.env.API_BASE_URL
			? `${process.env.API_BASE_URL}`
			: `${backendBaseUrl}api/`,
		CDN_BASE_URL: process.env.CDN_BASE_URL
			? `${process.env.CDN_BASE_URL}`
			: `${backendBaseUrl}cdn/`,
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
