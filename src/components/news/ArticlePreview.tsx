import Link from "next/link";

import type { NewsArticle } from "@/@types/ApiBaseTypes";

export type ArticlePreviewProps = NewsArticle;

export function ArticlePreview({
	title,
	brief,
	timestamp,
	imageUrl,
	highlighted,
}: ArticlePreviewProps) {
	return (
		// <Link
		// 	href={{
		// 		pathname: "/hirek/[slug]",
		// 		query: { slug },
		// 	}}
		// >
		// 	<a>
		<article className="md:p-4 py-3 px-4 text-white bg-accent-dark rounded-2xl">
			<h4 className="mb-2 text-xl font-medium line-clamp-2">{title}</h4>
			<p className="mb-2 text-justify text-warmGray-200 line-clamp-6">
				{brief}
			</p>
			<p className="text-right text-warmGray-400">
				Utoljára módosítva: {new Date(timestamp).toLocaleString()}
			</p>
		</article>
		// 	</a>
		// </Link>
	);
}
