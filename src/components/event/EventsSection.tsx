import clsx from "clsx";

import type { EventPreviewProps } from "./EventPreview";
import { EventPreview } from "./EventPreview";
import styles from "./EventsSection.module.scss";

export type EventsSectionProps = {
	programPreviews: EventPreviewProps[];
	showExpired?: boolean;
	title?: string;
};

export function EventsSection({
	programPreviews,
	showExpired,
	title = "Programok",
}: EventsSectionProps) {
	return (
		<section className="container px-4 lg:px-32 xl:px-48 2xl:px-64 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">{title}</h2>
			<div className={clsx("grid grid-cols-1 gap-4")}>
				{programPreviews.map((event) => {
					return <EventPreview key={event.url} {...event} />;
				})}
			</div>
		</section>
	);
}
