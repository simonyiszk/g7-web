import clsx from "clsx";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

import type { EventType } from "@/@types/ApiBaseTypes";

export type ProgramPreviewProps = EventType;

export function ProgramPreview({
	title,
	previewDescription,
	place,
	heldDay,
	heldInterval,
	heldTimestamp,
	category,
	url,
}: ProgramPreviewProps) {
	const startDate = new Date(heldTimestamp);
	return (
		<Link href={`/programok/${encodeURIComponent(url)}`}>
			<a>
				<article className="flex gap-2 justify-between text-white">
					<div className="md:p-4 py-3 px-4 md:w-full bg-accent-dark rounded-2xl">
						<div className="flex gap-2 justify-between mb-2 text-xs text-warmGray-400">
							<div>
								<span
									className={clsx(
										"float-left mr-1 w-3 h-3 rounded-full",
										category === "Tankör" && "bg-blue-500",
										category === "Gólyakörte" && "bg-green-500",
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
						className="flex justify-center items-center md:p-4 py-3 px-4 text-center bg-accent-dark rounded-2xl"
						style={{ minWidth: "8ch" }}
					>
						<div>
							<p className="pb-2 leading-tight md:whitespace-nowrap">{`${
								startDate.getMonth() + 1
							}.${startDate.getDate()} ${startDate.toLocaleDateString("hu-HU", {
								weekday: "long",
							})}`}</p>
							<p className="font-semibold">{`${startDate.getHours()}:${startDate.getMinutes()}`}</p>
							<p className="font-semibold leading-3">-</p>
							{/* TODO: fix dates */}
							<p className="font-semibold">{`${startDate.getHours()}:${startDate.getMinutes()}`}</p>
						</div>
					</div>
				</article>
			</a>
		</Link>
	);
}
