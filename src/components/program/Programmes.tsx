import clsx from "clsx";

import type { ProgramPreviewProps } from "./ProgramPreview";
import { ProgramPreview } from "./ProgramPreview";

export type ProgrammesProps = {
	programPreviews: ProgramPreviewProps[];
	isDouble?: boolean;
	showExpired?: boolean;
	title?: string;
};

export function Programmes({
	programPreviews,
	isDouble,
	showExpired,
	title = "Programok",
}: ProgrammesProps) {
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">{title}</h2>
			<div className={clsx("flex flex-col gap-4")}>
				{programPreviews.map((event) => {
					return <ProgramPreview key={event.url} {...event} />;
				})}
			</div>
		</section>
	);
}
