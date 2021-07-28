import { ArticlePreview } from "./ArticlePreview";

export function NewsSection() {
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">Hírek</h2>
			<div className="flex flex-col gap-4">
				<ArticlePreview />
				<ArticlePreview />
				<ArticlePreview />
			</div>
		</section>
	);
}
