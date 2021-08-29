import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import type { ParsedUrlQuery } from "querystring";

import type { AchievementsRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	console.log(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}achievement/${context.req.cookies.accessToken}`,
	);
	const rawAchievements: AchievementsRouteResponse = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}achievement/${context.req.cookies.accessToken}`,
	)
		.then((res) => res.json())
		.catch((err: unknown) => console.log(err));

	return {
		props: {
			data: rawAchievements,
		},
	};
}

export default function BucketListPage({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout title="BucketList" className="container px-4 pt-8 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">BucketList</h2>
			<Leaderboard
				data={data.leaderBoard}
				isHidden={!data.leaderBoardVisible}
			/>
			<section className="grid auto-cols-fr">
				{data.categories.map((category) => {
					return (
						<Link
							href={{
								pathname: "/bucketlist/[categoryId]",
								query: { categoryId: category.categoryId },
							}}
						>
							<a className="block p-4 w-full rounded-2xl h-fit bg-blur-7">
								<h3>{category.name}</h3>
							</a>
						</Link>
					);
				})}
			</section>
		</Layout>
	);
}
