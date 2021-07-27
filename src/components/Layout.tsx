import Head from "next/head";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";

export function Layout({
	children,
	...restProps
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://vitals.vercel-insights.com" />
				<link rel="preconnect" href="https://www.google-analytics.com" />
				<title>G7</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="G7" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Destiny Launcher" />
				<meta name="twitter:description" content="G7" />
				<meta
					name="twitter:image"
					content="https://g7.sch.bme.hu/preview.png"
				/>
				<meta name="thumbnail" content="https://g7.sch.bme.hu/preview.png" />
				<meta property="og:image" content="https://g7.sch.bme.hu/preview.png" />
				<meta property="og:title" content="Destiny Launcher" />
				<meta property="og:description" content="G7" />
				<meta property="og:url" content="https://g7.sch.bme.hu/" />
				<meta property="og:type" content="website" />
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-touch-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-touch-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/favicon-512x512.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/favicon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#161627" />
				<meta name="apple-mobile-web-app-title" content="Destiny Launcher" />
				<meta name="application-name" content="Destiny Launcher" />
				<meta name="msapplication-TileColor" content="#161627" />
				<meta name="theme-color" content="#161627" />
				<meta name="color-sheme" content="dark light" />

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="format-detection" content="telephone=yes" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon-100x100.png" />
			</Head>

			<Navbar />

			<div className="flex flex-col justify-between pt-[72px] min-h-screen">
				<main {...restProps}>{children}</main>

				<Footer />
			</div>
		</>
	);
}
