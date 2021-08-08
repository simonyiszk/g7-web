import clsx from "clsx";

import type { ProgramPreviewProps } from "./ProgramPreview";
import { ProgramPreview } from "./ProgramPreview";

export type ProgrammesProps = {
	programPreviews?: ProgramPreviewProps[];
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
	const dailyPrograms = programPreviews?.filter((entry) => {
		return (
			// @ts-expect-error: TODO: fix later
			entry.endDate.getTime() >= Date.now() &&
			// @ts-expect-error: TODO: fix later
			entry.startDate.getMonth() >= new Date().getMonth() &&
			// @ts-expect-error: TODO: fix later
			entry.startDate.getDate() >= new Date().getDate()
		);
	});
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">{title}</h2>
			<div className={clsx("flex flex-col gap-4")}>
				<ProgramPreview />
				<ProgramPreview provider="Gólyakörte" />
				<ProgramPreview />
				<ProgramPreview />
				<ProgramPreview />
			</div>
		</section>
	);
}
