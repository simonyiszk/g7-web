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
