import { ProgramPreview } from "./ProgramPreview";

export function Programmes() {
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-medium">Programok</h2>
			<div className="flex flex-col gap-4">
				<ProgramPreview />
				<ProgramPreview provider="Gólyakörte" />
				<ProgramPreview />
			</div>
		</section>
	);
}
