import Head from "next/head";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";

export type LayoutProps = {
	title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Layout({ children, title, ...restProps }: LayoutProps) {
	const pageTitle = `G7 | ${title}`;
	const description = "G7";
	const url = "https://g7.sch.bme.hu/";
	const preview = `${url}preview.png`;
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />
				<meta name="thumbnail" content={preview} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={preview} />

				<meta property="og:image" content={preview} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={url} />
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
				<meta name="apple-mobile-web-app-title" content="G7" />
				<meta name="application-name" content="G7" />
				<meta name="msapplication-TileColor" content="#161627" />
				<meta name="theme-color" content="#161627" />

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="format-detection" content="telephone=yes" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon-100x100.png" />
			</Head>

			<Navbar />

			<div className="flex flex-col justify-between pt-[128px] lg:pt-[104px] min-h-screen">
				<main {...restProps}>{children}</main>

				<Footer />
			</div>
		</>
	);
}
