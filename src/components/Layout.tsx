import Head from "next/head";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";

export type LayoutProps = {
	title: string;
	description?: string;
	image?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Layout({
	children,
	title,
	description,
	image,
	...restProps
}: LayoutProps) {
	const pageTitle = `G7 | ${title}`;
	const defaultDescription =
		description && description !== "" ? description : "G7";
	const url = "https://g7.sch.bme.hu/";
	const preview = image && image !== "" ? image : `${url}preview.png`;
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={defaultDescription} />
				<meta name="thumbnail" content={preview} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={defaultDescription} />
				<meta name="twitter:image" content={preview} />

				<meta property="og:image" content={preview} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={defaultDescription} />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
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
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d7752f" />
				<meta name="msapplication-TileColor" content="#d7752f" />
				<meta name="theme-color" content="#d7752f" />

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="format-detection" content="telephone=yes" />
			</Head>

			<Navbar />

			<div className="flex flex-col justify-between pt-[128px] lg:pt-[104px] min-h-screen">
				<div id="bg" />

				<main {...restProps}>{children}</main>

				<Footer />
			</div>
		</>
	);
}
