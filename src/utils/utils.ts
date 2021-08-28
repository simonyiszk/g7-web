import axios from "axios";

export async function fetcher(url: string) {
	console.log(document.cookie);
	const res = fetch(url, {
		credentials: "include",
		headers: {
			Cookie: document.cookie,
		},
	}).then((response) => {
		if (response.status === 200) {
			return response.json();
		}
		throw new Error(`error with status ${response.status}`);
	});
	// const data = axios.get(url).then((res) => res.data);
	return res;
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
