import clsx from "clsx";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import getConfig from "next/config";
import Image from "next/image";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import Linkify from "react-linkify";
import useSWR from "swr";

import type { EventResponse } from "@/@types/ApiResponses";
import { Layout } from "@/components/Layout";
import { cdnImageLoader, fetcher } from "@/utils/utils";

import styles from "./Event.module.scss";

export async function getServerSideProps<
	Q extends ParsedUrlQuery = ParsedUrlQuery,
>(context: GetServerSidePropsContext<Q>) {
	const eventResponse: EventResponse = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}events/${context.query.url}`,
		)
	).json();

	return {
		props: {
			eventResponse,
		},
	};
}

export default function EventPage({
	eventResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { publicRuntimeConfig } = getConfig();
	const router = useRouter();
	const { data } = useSWR<EventResponse>(
		`${publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL}events/${router.query.url}`,
		fetcher,
		{ initialData: eventResponse },
	);

	// console.log(data, error);

	if (!data || !data.event) {
		return (
			<Layout
				title={
					eventResponse?.event.ogTitle && eventResponse.event.ogTitle !== ""
						? eventResponse.event.ogTitle
						: eventResponse?.event.title ?? "Töltés..."
				}
				description={eventResponse?.event.ogDescription}
				image={eventResponse?.event.ogImage}
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
			title={
				data.event.ogTitle && data.event.ogTitle !== ""
					? data.event.ogTitle
					: data.event.title
			}
			description={data.event.ogDescription}
			image={data.event.ogImage}
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto"
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
			<p
				className={(clsx("mb-2"), styles.content)}
				style={{ wordBreak: "break-word" }}
			>
				<Linkify>{data.event.description}</Linkify>
			</p>

			{data.event.fullImageUrl && data.event.fullImageUrl !== "" && (
				<div
					className={clsx(
						"relative my-4 w-full h-auto max-h-96 rounded-2xl",
						styles.imageContainer,
					)}
				>
					<Image
						src={data.event.fullImageUrl as never}
						loader={cdnImageLoader}
						className="!w-full !h-auto rounded-2xl"
						alt="A feladathoz kép"
						objectFit="contain"
						layout="fill"
					/>
				</div>
			)}
		</Layout>
	);
}
