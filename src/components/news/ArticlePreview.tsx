export type ArticleProps = {
	title?: string;
	content?: string;
	lastModified?: string;
};

export function ArticlePreview({
	title = "Hír cím",
	content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem scelerisque mattis enim enim ipsum eu congue. Et tellus massa cras id. Faucibus mauris, mauris sed leo massa amet. Non fringilla sapien, pellentesque diam.",
	lastModified = "2021.09.07 18:32",
}: ArticleProps) {
	return (
		<article className="md:p-4 py-3 px-4 text-white bg-black rounded-2xl">
			<h4 className="mb-2 text-xl font-medium line-clamp-2">{title}</h4>
			<p className="mb-2 text-justify text-warmGray-200 line-clamp-6">
				{content}
			</p>
			<p className="text-right text-warmGray-400">
				Utoljára módosítva: {lastModified}
			</p>
		</article>
	);
}
