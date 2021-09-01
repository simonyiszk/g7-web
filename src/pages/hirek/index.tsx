import type { InferGetServerSidePropsType } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import type { NewsRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { NewsSection } from "@/components/news/NewsSection";

export async function getServerSideProps() {
	const rawNews: NewsRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}news`)
	).json();

	const mdxSource = await Promise.all(
		rawNews.news.map((v) => {
			return serialize(v.brief);
		}),
	);
	const newNews: {
		mdx: MDXRemoteSerializeResult<{ [key: string]: unknown }>;
		title: string;
		brief: string;
		timestamp: number;
		imageUrl: string;
		highlighted: boolean;
	}[] = [];

	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < rawNews.news.length; index++) {
		newNews.push({ ...rawNews.news[index], mdx: mdxSource[index] });
	}

	const extendedData = {
		...rawNews,
		news: newNews,
	};

	return {
		props: {
			extendedData,
		},
	};
}

export default function NewsPage({
	extendedData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout className="pt-4" title="Hírek">
			<NewsSection articles={extendedData.news} />
		</Layout>
	);
}
