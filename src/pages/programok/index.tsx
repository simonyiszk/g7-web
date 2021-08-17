import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { ParsedUrlQuery } from "querystring";

import type { EventsRouteResponse } from "@/@types/ApiResponses";
import { EventsSection } from "@/components/event/EventsSection";
import { Layout } from "@/components/Layout";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawEvents: EventsRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}events`)
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
	return (
		<Layout className="pt-8" title="Programok">
			<EventsSection programPreviews={rawEvents.allEvents} />
		</Layout>
	);
}
