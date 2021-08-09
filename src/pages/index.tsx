import clsx from "clsx";

import { BucketListContainer } from "@/components/bucketList/BucketListContainer";
import { Layout } from "@/components/Layout";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { NewsSection } from "@/components/news/News";
import { Programmes } from "@/components/program/Programmes";

export default function HomePage() {
	return (
		<Layout title="Főoldal">
			<section className="my-4 mb-8 text-center">
				<h2 className="text-3xl">BME-VIK</h2>
				<h1 className="my-4 text-5xl">Gólyahét 2021</h1>
				<h3 className="text-2xl">09.01. - 09.05.</h3>
			</section>
			<div className="container grid grid-cols-1 xl:grid-cols-[2fr,minmax(320px,1fr)] mx-auto">
				<div>
					<NewsSection title="Friss hírek" />
					<Programmes title="Közelgő programok" />
				</div>
				<div className="">
					<div className="sticky top-4 mb-8">
						<Leaderboard
							data={[
								{ name: "I04", points: 1200 },
								{ name: "I07", points: 1150 },
								{ name: "I02", points: 128 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
								{ name: "I03", points: 205 },
							]}
						/>
					</div>
				</div>
			</div>
			<BucketListContainer />
		</Layout>
	);
}
