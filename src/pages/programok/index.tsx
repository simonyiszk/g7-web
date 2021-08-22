import clsx from "clsx";
import type { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import type { EventPreviewType } from "@/@types/ApiBaseTypes";
import type { EventsRouteResponse } from "@/@types/ApiResponses";
import { EventPreview } from "@/components/event/EventPreview";
import { Layout } from "@/components/Layout";

type Days = "Vasárnap" | "Hétfő" | "Kedd" | "Szerda" | "Csütörtök" | "Péntek";

export async function getServerSideProps() {
	const rawEvents: EventsRouteResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}events`)
	).json();

	const events: { [key in Days]: EventPreviewType[] } = {
		Vasárnap: [],
		Hétfő: [],
		Kedd: [],
		Szerda: [],
		Csütörtök: [],
		Péntek: [],
	};

	// TODO: check what happens when a day is empty

	rawEvents.allEvents.forEach((event) => {
		const startDay = new Date(event.timestampStart * 1000).toLocaleDateString(
			"hu-HU",
			{ weekday: "long" },
		);
		// @ts-expect-error: locale days should match
		events[startDay.charAt(0).toUpperCase() + startDay.slice(1)].push(event);
	});

	return {
		props: {
			events,
		},
	};
}

export default function ProgramokPage({
	events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	return (
		<Layout className="pt-8" title="Programok">
			<section className="container px-4 lg:px-32 xl:px-48 2xl:px-64 mx-auto mb-8">
				<h2 className="mb-6 text-4xl font-bold">Programok</h2>
				<div className="flex sticky top-24 lg:top-28 xl:top-28 z-10 justify-center mx-auto rounded-2xl bg-blur-7 w-fit">
					{Object.keys(events).map((day, index) => {
						const dayUrl = day
							.toLowerCase()
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "");
						return (
							<Link key={dayUrl} href={`#${dayUrl}`} scroll={false} shallow>
								<a
									className={clsx(
										"flex justify-center items-center w-12 h-12 text-xl text-white",
										index === 0 && "rounded-l-2xl",
										index === Object.keys(events).length - 1 && "rounded-r-2xl",
										router.asPath === `/programok#${dayUrl}` &&
											"text-black bg-white",
									)}
								>
									{day.charAt(0)}
									{(index === 3 || index === 4) && day.charAt(1)}
								</a>
							</Link>
						);
					})}
				</div>
				<div className={clsx("grid grid-cols-1 gap-4")}>
					{Object.keys(events).map((day) => {
						const dayUrl = day
							.toLowerCase()
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "");
						return (
							<React.Fragment key={day}>
								<h3 id={dayUrl} className="mt-4 text-2xl">
									{day}
								</h3>
								{events[day as Days].map((event) => {
									return <EventPreview key={event.url} {...event} />;
								})}
							</React.Fragment>
						);
					})}
				</div>
			</section>
		</Layout>
	);
}
