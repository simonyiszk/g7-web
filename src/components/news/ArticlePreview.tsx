import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Linkify from "react-linkify";

import type { NewsArticle } from "@/@types/ApiBaseTypes";
import { cdnImageLoader } from "@/utils/utils";

import styles from "./ArticlePreview.module.scss";

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
				"md:p-4 py-3 px-4 text-white rounded-2xl bg-blur-7",
				highlighted && styles.highlighted,
			)}
		>
			<h4 className="mb-2 text-xl font-medium">{title}</h4>
			<p
				className={clsx("mb-2 text-warmGray-200", styles.content)}
				style={{ wordBreak: "break-word" }}
			>
				<Linkify>{brief}</Linkify>
			</p>
			{imageUrl && imageUrl !== "" && (
				<div
					className={clsx(
						"relative my-4 w-full h-auto max-h-96 rounded-2xl",
						styles.imageContainer,
					)}
				>
					<Image
						src={imageUrl as any}
						className="!w-full !h-auto rounded-2xl"
						loader={cdnImageLoader}
						alt="A hír képen"
						objectFit="contain"
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
