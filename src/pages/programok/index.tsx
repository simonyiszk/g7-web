import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { ParsedUrlQuery } from "querystring";

import type {
	EventsRouteResponse,
	NewsRouteResponse,
} from "@/@types/ApiResponses";
import { EventsSection } from "@/components/event/EventsSection";
import { Layout } from "@/components/Layout";
import { NewsSection } from "@/components/news/NewsSection";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawEvents: EventsRouteResponse = await (
		await fetch(`${process.env.API_BASE_URL}/events`)
	).json();

	return {
		props: {
			rawEvents,
		},
	};
}

export default function ProgramokPage({
	rawEvents,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	console.log(rawEvents.allEvents);
	return (
		<Layout className="pt-4" title="Programok">
			<EventsSection isDouble programPreviews={rawEvents.allEvents} />
		</Layout>
	);
}
