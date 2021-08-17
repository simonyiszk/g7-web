import clsx from "clsx";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
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

	return {
		props: {
			data,
		},
	};
}

export default function HomePage({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	console.log(data.upcomingEvents);
	return (
		<Layout title="Főoldal">
			<Hero />
			<div className="container mx-auto">
				{/* <div> */}
				<NewsSection title="Friss hírek" articles={data.news} />
				<EventsSection
					title="Közelgő programok"
					programPreviews={data.upcomingEvents}
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
