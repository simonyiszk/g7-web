import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { ParsedUrlQuery } from "querystring";

import type { NewsRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { NewsSection } from "@/components/news/NewsSection";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawNews: NewsRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}news`)
	).json();

	return {
		props: {
			rawNews,
		},
	};
}

export default function HirekPage({
	rawNews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout className="pt-4" title="Hírek">
			<NewsSection isDouble articles={rawNews.news} />
		</Layout>
	);
}
