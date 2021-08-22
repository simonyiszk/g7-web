import type { InferGetServerSidePropsType } from "next";

import type { NewsRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { NewsSection } from "@/components/news/NewsSection";

export async function getServerSideProps() {
	const rawNews: NewsRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}news`)
	).json();

	return {
		props: {
			rawNews,
		},
	};
}

export default function NewsPage({
	rawNews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout className="pt-4" title="Hírek">
			<NewsSection articles={rawNews.news} />
		</Layout>
	);
}
