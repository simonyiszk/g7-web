const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const aspectRatio = require("@tailwindcss/aspect-ratio");
const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,tsx,css,scss,mdx}"],
	darkMode: "class",
	theme: {
		colors,
		fontFamily: {
			NotoSans: [
				'"Noto Sans"',
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				'"Segoe UI"',
				"Roboto",
			],
		},
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
		},
	},
	plugins: [aspectRatio, lineClamp],
};
