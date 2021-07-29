import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import "@/styles.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<Component {...pageProps} />
		</React.StrictMode>
	);
}
