import type { GetServerSidePropsContext } from "next";
import type { ParsedUrlQuery } from "querystring";

import type { EventResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const eventResponse: EventResponse = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}achievements/${context.query.id}`,
		)
	).json();

	return {
		props: {
			eventResponse,
		},
	};
}

export default function AchievementPage() {
	return (
		<Layout title="">
			<h1>Achievement Page</h1>
		</Layout>
	);
}
