import { parse } from "cookie";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import useSWR from "swr";

import type { AchievementCategoryRouteResponse } from "@/@types/ApiResponses";
import { BucketListItemPreview } from "@/components/bucketList/BucketListItemPreview";
import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { fetcher, getAccessToken } from "@/utils/utils";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawCategory: AchievementCategoryRouteResponse = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}achievement/${context.req.cookies.accessToken}/category/${context.query.categoryId}`,
		)
	).json();

	return {
		props: {
			rawCategory,
		},
	};
}

export default function AchievementCategoryPage({
	rawCategory,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { publicRuntimeConfig } = getConfig();
	const router = useRouter();
	if (!getAccessToken() || getAccessToken() === "") {
		if (typeof window !== "undefined" && router) router.push("/api/auth/login");
	}
	const { data } = useSWR<AchievementCategoryRouteResponse>(
		`${
			publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL
		}achievement/${getAccessToken()}/category/${router.query.categoryId}`,
		fetcher,
		{ initialData: rawCategory },
	);

	if (!data || typeof document === "undefined") {
		return (
			<Layout
				title={rawCategory.categoryName ?? "Töltés..."}
				className="container px-4 pt-8 mx-auto"
			>
				<Skeleton />
			</Layout>
		);
	}

	return (
		<Layout
			title={`Bucketlist | ${data.categoryName}`}
			className="container px-4 pt-8 mx-auto"
		>
			<section>
				<h3 className="mb-6 text-4xl font-bold">{data.categoryName}</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-8">
					{data.achievements.map((entry) => (
						<BucketListItemPreview
							key={entry.achievement.id}
							status={entry.status}
							{...entry.achievement}
						/>
					))}
				</div>
			</section>
		</Layout>
	);
}
