import clsx from "clsx";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

import type { EventPreviewType } from "@/@types/ApiBaseTypes";

export type EventPreviewProps = EventPreviewType;

export function EventPreview({
	title,
	previewDescription,
	place,
	timestampEnd,
	timestampStart,
	previewImageUrl,
	category,
	url,
}: EventPreviewProps) {
	console.log();
	const startDate = new Date(timestampStart * 1000);
	const endDate = new Date(timestampEnd * 1000);
	return (
		<Link
			href={{
				pathname: "/programok/[url]",
				query: { url },
			}}
		>
			<a className="block h-fit">
				<article className="flex justify-between text-white">
					<div className="md:p-4 py-3 px-4 mr-2 md:w-full bg-accent-dark rounded-2xl">
						<div className="flex justify-between mb-2 text-xs text-warmGray-400">
							<div className="pr-2">
								<span
									className={clsx(
										"float-left mr-2 w-3 h-3 bg-green-500 rounded-full",
										category === "Tankör" && "bg-blue-500",
										category === "G7" && "bg-orange-500",
									)}
								/>
								<h5 className="float-right">{category}</h5>
							</div>
							<div>
								<h6 className="inline-block float-left mr-1">{place}</h6>
								<span className="float-right">
									<FaMapMarkerAlt className="w-3 h-3 text-warmGray-200" />
								</span>
							</div>
						</div>
						<h4 className="mx-0 mb-2 text-xl font-medium line-clamp-2">
							{title}
						</h4>
						<p className="mb-2 text-justify text-warmGray-200 line-clamp-5">
							{previewDescription}
						</p>
					</div>
					<div
						className="flex justify-center items-center py-3 px-4 text-center bg-accent-dark rounded-2xl"
						style={{ minWidth: "100px" }}
					>
						<div>
							<p className="leading-tight md:whitespace-nowrap">{`${
								startDate.getMonth() + 1
							}.${startDate.getDate()}`}</p>
							<p className="pb-2 leading-tight md:whitespace-nowrap">{`${startDate.toLocaleDateString(
								"hu-HU",
								{
									weekday: "long",
								},
							)}`}</p>
							<p className="font-semibold">{`${startDate.getHours()}:${startDate.getMinutes()}`}</p>
							<p className="font-semibold leading-3">-</p>
							<p className="font-semibold">{`${
								endDate.getHours() + 1
							}:${endDate.getMinutes()}`}</p>
						</div>
					</div>
				</article>
			</a>
		</Link>
	);
}
