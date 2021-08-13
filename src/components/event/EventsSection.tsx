import clsx from "clsx";

import type { EventPreviewProps } from "./EventPreview";
import { EventPreview } from "./EventPreview";
import styles from "./EventsSection.module.scss";

export type EventsSectionProps = {
	programPreviews: EventPreviewProps[];
	isDouble?: boolean;
	showExpired?: boolean;
	title?: string;
};

export function EventsSection({
	programPreviews,
	isDouble,
	showExpired,
	title = "Programok",
}: EventsSectionProps) {
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">{title}</h2>
			<div
				className={clsx(
					styles.masonryGrid,
					"grid grid-cols-1 gap-4",
					isDouble && "lg:grid-cols-2",
				)}
			>
				{programPreviews.map((event) => {
					return <EventPreview key={event.url} {...event} />;
				})}
			</div>
		</section>
	);
}
