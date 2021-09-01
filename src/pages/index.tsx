import clsx from "clsx";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import type { ParsedUrlQuery } from "querystring";

import type { HomeRouteResponse } from "@/@types/ApiResponses";
import { BucketListContainer } from "@/components/bucketList/BucketListContainer";
import { EventsSection } from "@/components/event/EventsSection";
import { Hero } from "@/components/header/Hero";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { NewsSection } from "@/components/news/NewsSection";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const data: HomeRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}home`)
	).json();

	const mdxSource = await Promise.all(
		data.news.map((v) => {
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
	for (let index = 0; index < data.news.length; index++) {
		newNews.push({ ...data.news[index], mdx: mdxSource[index] });
	}

	const extendedData = {
		...data,
		news: newNews,
	};

	return {
		props: {
			extendedData,
		},
	};
}

export default function HomePage({
	extendedData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout title="Főoldal">
			<Hero />
			<div className="container mx-auto">
				{/* <div> */}
				<NewsSection title="Friss hírek" articles={extendedData.news} />
				<EventsSection
					title="Közelgő programok"
					programPreviews={extendedData.upcomingEvents}
				/>
				{/* </div> */}
				{/* <div className="">
					<div className="sticky top-4 mb-8">
						<Leaderboard data={data.leaderBoard} />
					</div>
				</div> */}
			</div>
			{/* <BucketListContainer /> */}
		</Layout>
	);
}
