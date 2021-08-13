export function fetcher(url: string) {
	return fetch(url).then((res) => res.json());
}

export function cdnImageLoader({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) {
	console.log(`${process.env.CDN_BASE_URL}${src}`);
	return `${process.env.CDN_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
}
