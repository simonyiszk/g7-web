import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import useSWR from "swr";

import type { AchievementRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { fetcher } from "@/utils/utils";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawAchievement: AchievementRouteResponse = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}achievements/${context.query.category}/${context.query.id}`,
		)
	).json();

	return {
		props: {
			rawAchievement,
		},
	};
}

export default function AchievementPage({
	rawAchievement,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { publicRuntimeConfig } = getConfig();
	const router = useRouter();
	const { data, error, mutate } = useSWR<AchievementRouteResponse>(
		`${publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL}achievements/${router.query.category}/${router.query.id}`,
		fetcher,
		{ initialData: rawAchievement },
	);

	if (!data) {
		return (
			<Layout
				title={rawAchievement.achievement.title ?? "Töltés..."}
				className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto"
			>
				<div className="flex space-x-4 animate-pulse">
					<div className="flex-1 py-1 space-y-4">
						<div className="w-2/4 sm:w-1/3 h-10 bg-accent-dark dark:bg-warmGray-200 rounded" />
						<div className="space-y-2">
							<div className="w-1/4 h-8 bg-accent-dark dark:bg-warmGray-200 rounded" />
							<div className="h-4 bg-accent-dark dark:bg-warmGray-200 rounded" />
							<div className="w-5/6 h-4 bg-accent-dark dark:bg-warmGray-200 rounded" />
						</div>
					</div>
				</div>
			</Layout>
		);
	}

	return (
		<Layout
			title={data.achievement.title}
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto"
		>
			<h1 className="mb-4 text-4xl font-bold">
				{data.achievement.title} - {data.achievement.id}
			</h1>
			<h2 className="mb-2 text-xl">
				Állapot: {data.status}{" "}
				<span
					className={clsx(
						"w-2 h-2 rounded-full",
						data.status === "ACCEPTED" && "bg-green-600",
						data.status === "REJECTED" && "bg-red-600",
						data.status === "SUBMITTED" && "bg-blue-600",
						data.status === "NOT_SUBMITTED" && "bg-yellow-600",
						data.status === "NOT_LOGGED_IN" && "bg-purple-600",
					)}
				/>
			</h2>
			<h2 className="mb-2 text-xl">
				Hátralévő idő:{" "}
				{new Date(
					data.achievement.availableTo * 1000 - Date.now(),
				).toLocaleTimeString("hu-HU", { timeStyle: "short" })}
			</h2>
			<h2 className="mb-2 text-xl">
				Beadás határideje:{" "}
				{new Date(data.achievement.availableTo * 1000).toLocaleString("hu-HU", {
					month: "2-digit",
					day: "2-digit",
					timeStyle: "short",
				})}
			</h2>
			<p className="mt-2">{data.achievement.title}</p>
		</Layout>
	);
}
