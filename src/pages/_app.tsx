import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import "@/styles.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<Head>
				<meta
					name="color-scheme"
					content="normal" // TODO: Set to "dark" or "light" based on theme
				/>
			</Head>

			<Component {...pageProps} />
		</React.StrictMode>
	);
}
