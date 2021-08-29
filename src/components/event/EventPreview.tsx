import clsx from "clsx";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

import type { EventPreviewType } from "@/@types/ApiBaseTypes";
import { ConditionalWrapper } from "@/utils/utils";

export type EventPreviewProps = EventPreviewType;

export function EventPreview({
	title,
	previewDescription,
	place,
	timestampEnd,
	timestampStart,
	category,
	url,
}: EventPreviewProps) {
	const startDate = new Date(timestampStart * 1000);
	const endDate = new Date(timestampEnd * 1000);
	return (
		<ConditionalWrapper
			condition={!!previewDescription && previewDescription !== ""}
			wrapper={(children) => (
				<Link
					href={{
						pathname: "/programok/[url]",
						query: { url },
					}}
				>
					<a className="block h-fit">{children}</a>
				</Link>
			)}
		>
			<article className="flex justify-between text-white">
				<div
					className="md:p-4 py-3 px-4 mr-2 w-full rounded-2xl bg-blur-7"
					// style={{ boxShadow: "rgb(0 0 0 / 80%) 0px 4px 9px 0px" }}
				>
					<div className="flex justify-between mb-2 text-xs text-warmGray-400">
						<div className="">
							<span
								className={clsx(
									"float-left mr-1 w-3 h-3 bg-green-500 rounded-full",
									category.toLowerCase() === "egyetemi" && "bg-rose-600",
									category.toLowerCase() === "külső" && "bg-orange-500",
									category.toLowerCase() === "schönherz" && "bg-blue-500",
								)}
							/>
							<h5 className="float-right capitalize">
								{category.toLowerCase()}
							</h5>
						</div>
						{place && place !== "" && (
							<div>
								<h6 className="inline-block float-left mr-1">{place}</h6>
								<span className="float-right">
									<FaMapMarkerAlt className="w-3 h-3 text-warmGray-200" />
								</span>
							</div>
						)}
					</div>
					<h4
						className={clsx(
							"mx-0 mb-2 text-xl font-medium line-clamp-3 md:line-clamp-2",
							(!previewDescription || previewDescription === "") &&
								"text-center",
						)}
					>
						{title}
					</h4>
					<p className="mb-2 text-warmGray-200 line-clamp-5">
						{previewDescription}
					</p>
				</div>
				<div
					className="flex justify-center items-center py-3 px-4 min-w-[100px] text-center rounded-2xl bg-blur-7"
					// style={{ boxShadow: "rgb(0 0 0 / 80%) 0px 4px 9px 0px" }}
				>
					<div>
						{previewDescription && previewDescription !== "" && (
							<>
								<p className="leading-tight md:whitespace-nowrap">
									{startDate.toLocaleDateString("hu-HU", {
										month: "numeric",
										day: "2-digit",
									})}
								</p>
								<p className="pb-2 leading-tight md:whitespace-nowrap">
									{startDate.toLocaleDateString("hu-HU", {
										weekday: "long",
									})}
								</p>
							</>
						)}
						<p className="font-semibold">
							{startDate.toLocaleTimeString("hu-HU", { timeStyle: "short" })}
						</p>
						<p className="font-semibold leading-3">-</p>
						<p className="font-semibold">
							{endDate.toLocaleTimeString("hu-HU", { timeStyle: "short" })}
						</p>
					</div>
				</div>
			</article>
		</ConditionalWrapper>
	);
}
