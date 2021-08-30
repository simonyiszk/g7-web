import clsx from "clsx";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";

import type { AchievementsRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { getAccessToken } from "@/utils/utils";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawAchievements: AchievementsRouteResponse = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}achievement/${context.req.cookies.accessToken}`,
	).then((res) => res.json());

	return {
		props: {
			data: rawAchievements,
		},
	};
}

export default function BucketListPage({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	if (!getAccessToken() || getAccessToken() === "") {
		if (typeof window !== "undefined" && router) router.push("/api/auth/login");
	}
	return (
		<Layout title="BucketList" className="container px-4 pt-8 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">BucketList</h2>
			<Leaderboard
				data={data.leaderBoard}
				isHidden={!data.leaderBoardVisible}
			/>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8">
				{data.categories.map((category) => {
					return (
						<div key={category.name} className="p-2">
							{/* <div className="relative mb-2 w-full h-2 bg-warmGray-500 rounded-full">
								<div
									className={clsx("absolute top-0 left-0 h-2 bg-green-500")}
									style={{
										width: `${Math.ceil(
											(category.approved / category.sum) * 100,
										)}%`,
									}}
								/>
							</div> */}
							<Link
								href={{
									pathname: "/bucketlist/[categoryId]",
									query: { categoryId: category.categoryId },
								}}
							>
								<a className="block p-4 w-full text-center rounded-2xl h-fit bg-blur-7">
									<h3>{category.name}</h3>
								</a>
							</Link>
						</div>
					);
				})}
			</section>
		</Layout>
	);
}
