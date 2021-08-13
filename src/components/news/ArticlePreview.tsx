import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import type { NewsArticle } from "@/@types/ApiBaseTypes";
import { cdnImageLoader } from "@/utils/utils";

export type ArticlePreviewProps = NewsArticle;

export function ArticlePreview({
	title,
	brief,
	timestamp,
	imageUrl,
	highlighted,
}: ArticlePreviewProps) {
	const date = new Date(timestamp * 1000);
	return (
		// <Link
		// 	href={{
		// 		pathname: "/hirek/[slug]",
		// 		query: { slug },
		// 	}}
		// >
		// 	<a>
		<article
			className={clsx(
				"md:p-4 py-3 px-4 text-white bg-accent-dark rounded-2xl",
				highlighted && "border-2 border-yellow-500",
			)}
		>
			<h4 className="mb-2 text-xl font-medium line-clamp-2">{title}</h4>
			<p className="mb-2 text-justify text-warmGray-200 line-clamp-6">
				{brief}
			</p>
			{imageUrl && imageUrl !== "" && (
				<div className="relative min-h-[156px]">
					<Image
						src={imageUrl as any}
						loader={cdnImageLoader}
						alt="A hír képen"
						layout="fill"
					/>
				</div>
			)}
			<p className="text-right text-warmGray-400">
				{`Utoljára módosítva: ${date.toLocaleDateString("hu-HU", {
					month: "short",
					day: "2-digit",
				})} ${date.toLocaleTimeString("hu-HU", {
					timeStyle: "short",
				})}`}
			</p>
		</article>
		// 	</a>
		// </Link>
	);
}
