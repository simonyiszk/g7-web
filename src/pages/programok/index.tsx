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
import { Layout } from "@/components/Layout";
import { NewsSection } from "@/components/news/NewsSection";
import { Programmes } from "@/components/program/Programmes";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawEvents: EventsRouteResponse = await (
		await fetch(`http://${process.env.API_BASE_URL}/events`)
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
		<Layout className="pt-4" title="Programok">
			<Programmes isDouble programPreviews={rawEvents.allEvents} />
		</Layout>
	);
}
