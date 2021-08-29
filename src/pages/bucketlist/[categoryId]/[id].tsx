import clsx from "clsx";
import { parse } from "cookie";
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
import { Skeleton } from "@/components/skeleton/Skeleton";
import { fetcher, getAccessToken } from "@/utils/utils";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawAchievement: AchievementRouteResponse = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}achievement/${context.req.cookies.accessToken}/submit/${context.query.id}`,
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
	const { data } = useSWR<AchievementRouteResponse>(
		`${
			publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL
		}achievement/${getAccessToken()}/submit/${router.query.id}`,
		fetcher,
		{ initialData: rawAchievement },
	);

	if (!data) {
		return (
			<Layout
				title={rawAchievement?.achievement?.title ?? "Töltés..."}
				className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto"
			>
				<Skeleton />
			</Layout>
		);
	}

	console.log(data);

	return (
		<Layout
			title={data.achievement.title}
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto"
		>
			<h1 className="mb-4 text-4xl font-bold">
				{data.achievement.title} - {data.achievement.id}
			</h1>
			<h2 className="mb-2 text-xl">
				Állapot:{" "}
				{`${
					(data.status === "ACCEPTED" && "Elfogadva") ||
					(data.status === "REJECTED" && "Elutasítva") ||
					(data.status === "SUBMITTED" && "Feldolgozás alatt") ||
					(data.status === "NOT_SUBMITTED" && "Leadásra vár") ||
					(data.status === "NOT_LOGGED_IN" && "Nem vagy belépve")
				}`}{" "}
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
					hour: "2-digit",
					minute: "2-digit",
				})}
			</h2>
			<p className="mt-2">{data.achievement.description}</p>
		</Layout>
	);
}
