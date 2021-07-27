import { Layout } from "@/components/Layout";

export default function ErrorPage() {
	return (
		<Layout>
			<div className="py-20">
				<h1 className="mb-4 text-5xl text-center">404: Not Found</h1>
				<p className="text-2xl text-center">
					Ez az oldal sajnos nem található... 😔
				</p>
			</div>
		</Layout>
	);
}
