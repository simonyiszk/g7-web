import clsx from "clsx";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { ParsedUrlQuery } from "querystring";

import type {
	EventsRouteResponse,
	HomeRouteResponse,
	NewsRouteResponse,
} from "@/@types/ApiResponses";
import { BucketListContainer } from "@/components/bucketList/BucketListContainer";
import { EventsSection } from "@/components/event/EventsSection";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { NewsSection } from "@/components/news/NewsSection";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	console.log("gssp ", process.env.NEXT_PUBLIC_BACKEND_BASE_URL);
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
	return (
		<Layout title="Főoldal">
			<section className="my-4 mb-8 text-center">
				<h2 className="text-3xl">BME-VIK</h2>
				<h1 className="my-4 text-5xl">Gólyahét 2021</h1>
				<h3 className="text-2xl">09.01. - 09.05.</h3>
			</section>
			<div className="container grid grid-cols-1 xl:grid-cols-[2fr,minmax(320px,1fr)] mx-auto">
				<div>
					<NewsSection title="Friss hírek" articles={data.news} />
					<EventsSection
						title="Közelgő programok"
						programPreviews={data.eventsToday}
					/>
				</div>
				<div className="">
					<div className="sticky top-4 mb-8">
						<Leaderboard data={data.leaderBoard} />
					</div>
				</div>
			</div>
			<BucketListContainer />
		</Layout>
	);
}
