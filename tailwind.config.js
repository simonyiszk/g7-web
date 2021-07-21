const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,tsx,css,scss,mdx}"],
	darkMode: "class",
	theme: {
		colors,
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
		},
	},
	plugins: [aspectRatio],
};
