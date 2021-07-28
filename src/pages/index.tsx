import { BucketListContainer } from "@/components/bucketList/BucketListContainer";
import { Layout } from "@/components/Layout";
import { NewsSection } from "@/components/news/News";
import { Programmes } from "@/components/program/Programmes";

export default function Index() {
	return (
		<Layout>
			<section className="my-4 mb-8 text-center">
				<h2 className="text-3xl">BME-VIK</h2>
				<h1 className="my-4 text-5xl">Gólyahét 2021</h1>
				<h3 className="text-2xl">09.01. - 09.05.</h3>
			</section>
			<NewsSection />
			<Programmes />
			<BucketListContainer />
		</Layout>
	);
}
