import getConfig from "next/config";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

import type { EventType } from "@/@types/ApiBaseTypes";
import { Layout } from "@/components/Layout";
import { cdnImageLoader, fetcher } from "@/utils/utils";

export default function EventPage() {
	const { publicRuntimeConfig } = getConfig();
	const router = useRouter();
	const { url } = router.query;
	function getUrl(p: string) {
		return `${
			process.env.NEXT_PUBLIC_API_BASE_URL ??
			publicRuntimeConfig?.NEXT_PUBLIC_API_BASE_URL ??
			"errnoenv"
		}events/${p}`;
	}
	const { data, error, mutate } = useSWR<{ event: EventType }>(
		getUrl(url as string),
		fetcher,
	);

	console.log(data, error);

	if (!data) {
		return <Layout title="Töltés...">Töltés...</Layout>;
	}

	return (
		<Layout
			title={data.event.title}
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 mx-auto"
		>
			<h1 className="mb-2 text-4xl font-bold">{data.event.title}</h1>
			<h2 className="mb-1 text-xl">
				Időpont:{" "}
				{new Date(data.event.timestampStart * 1000).toLocaleDateString(
					"hu-HU",
					{ month: "short", day: "2-digit" },
				)}{" "}
				{new Date(data.event.timestampStart * 1000).toLocaleTimeString(
					"hu-HU",
					{ timeStyle: "short" },
				)}
				{" - "}
				{new Date(data.event.timestampEnd * 1000).toLocaleTimeString("hu-HU", {
					timeStyle: "short",
				})}
			</h2>
			{data.event.place && data.event.place !== "" && (
				<h3 className="mb-4 text-xl">Helyszín: {data.event.place}</h3>
			)}
			<p className="mb-2">{data.event.description}</p>

			{data.event.fullImageUrl && data.event.fullImageUrl !== "" && (
				<Image
					src={data.event.fullImageUrl as any}
					loader={cdnImageLoader}
					alt="A feladathoz kép"
					layout="responsive"
				/>
			)}
		</Layout>
	);
}
