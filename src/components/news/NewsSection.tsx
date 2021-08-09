import clsx from "clsx";

import type { ArticlePreviewProps } from "./ArticlePreview";
import { ArticlePreview } from "./ArticlePreview";

export type NewsSectionProps = {
	articles: ArticlePreviewProps[];
	title?: string;
	isDouble?: boolean;
	lastX?: number;
};

export function NewsSection({
	articles,
	isDouble,
	lastX,
	title = "Hírek",
}: NewsSectionProps) {
	const articlesToRender = lastX ? articles?.slice(0, lastX) : articles;
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">{title}</h2>
			<div
				className={clsx("grid grid-cols-1 gap-4", isDouble && "xl:grid-cols-2")}
			>
				{articlesToRender?.map((article) => {
					return <ArticlePreview key={article.title} {...article} />;
				})}
			</div>
		</section>
	);
}
