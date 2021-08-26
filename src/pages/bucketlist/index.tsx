import type { InferGetServerSidePropsType } from "next";

import type { AchievementsRouteResponse } from "@/@types/ApiResponses";
import { BucketListItemPreview } from "@/components/bucketList/BucketListItemPreview";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";

export async function getServerSideProps() {
	const rawAchievements: AchievementsRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}achievements`)
	).json();

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
		<Layout
			title="BucketList"
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 mx-auto mb-8"
		>
			<h2 className="mb-6 text-4xl font-bold">BucketList</h2>
			<Leaderboard
				data={data.leaderBoard}
				isHidden={!data.leaderBoardVisible}
			/>
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
			<section>
				<h3>Összes feladat</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
