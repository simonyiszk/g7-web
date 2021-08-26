export async function fetcher(url: string) {
	const asd = fetch(url).then((res) => res.json());
	const wasd = await fetch(url);
	const qwe = await wasd.json();
	console.log(qwe);
	return asd;
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
	return `${process.env.NEXT_PUBLIC_CDN_BASE_URL}${src}?w=${width}&q=${
		quality || 75
	}`;
}

export const ConditionalWrapper = ({
	condition,
	wrapper,
	children,
}: {
	condition: boolean;
	wrapper: (children: JSX.Element) => JSX.Element;
	children: JSX.Element;
}) => (condition ? wrapper(children) : children);
