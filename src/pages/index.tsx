import clsx from "clsx";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { ParsedUrlQuery } from "querystring";

import type {
	EventsRouteResponse,
	NewsRouteResponse,
} from "@/@types/ApiResponses";
import { BucketListContainer } from "@/components/bucketList/BucketListContainer";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { NewsSection } from "@/components/news/NewsSection";
import { Programmes } from "@/components/program/Programmes";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawNews: NewsRouteResponse = await (
		await fetch(`http://${process.env.API_BASE_URL}/news`)
	).json();
	const rawEvents: EventsRouteResponse = await (
		await fetch(`http://${process.env.API_BASE_URL}/events`)
	).json();

	return {
		props: {
			rawNews,
			rawEvents,
		},
	};
}

export default function HomePage({
	rawNews,
	rawEvents,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	console.log(rawNews.news);
	return (
		<Layout title="Főoldal">
			<section className="my-4 mb-8 text-center">
				<h2 className="text-3xl">BME-VIK</h2>
				<h1 className="my-4 text-5xl">Gólyahét 2021</h1>
				<h3 className="text-2xl">09.01. - 09.05.</h3>
			</section>
			<div className="container grid grid-cols-1 xl:grid-cols-[2fr,minmax(320px,1fr)] mx-auto">
				<div>
					<NewsSection title="Friss hírek" articles={rawNews.news} />
					<Programmes
						title="Közelgő programok"
						programPreviews={rawEvents.eventsToday}
					/>
				</div>
				<div className="">
					<div className="sticky top-4 mb-8">
						<Leaderboard
							data={[
								{ name: "I04", points: 1200 },
								{ name: "I07", points: 1150 },
								{ name: "I02", points: 128 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
							]}
						/>
					</div>
				</div>
			</div>
			<BucketListContainer />
		</Layout>
	);
}
