import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import useSWR from "swr";

import type { AchievementCategoryRouteResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { fetcher } from "@/utils/utils";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const rawCategory: AchievementCategoryRouteResponse = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}achievements/${context.query.category}`,
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
	const { data, error, mutate } = useSWR<AchievementCategoryRouteResponse>(
		`${publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL}achievements/${router.query.category}`,
		fetcher,
		{ initialData: rawCategory },
	);

	if (!data) {
		return (
			<Layout
				title={rawCategory.categoryName ?? "Töltés..."}
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
			title=""
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto"
		>
			<section>
				<h3>Kiemelt feladatok</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
					{data.highlighted.map((entry) => (
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
