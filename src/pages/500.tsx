import { Layout } from "@/components/Layout";

export default function ServerErrorPage() {
	return (
		<Layout title="500: Internal Server Error">
			<div className="py-20">
				<h1 className="mb-4 text-5xl text-center">
					500: Internal Server Error
				</h1>
				<p className="text-2xl text-center">Valami hiba történt... 😔</p>
			</div>
		</Layout>
	);
}
