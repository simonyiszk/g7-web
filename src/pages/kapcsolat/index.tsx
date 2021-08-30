import { Layout } from "@/components/Layout";

export default function ContactPage() {
	return (
		<Layout
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 mx-auto mt-8"
			title="Kapcsolat"
		>
			<section className="text-center">
				<h1 className="mb-12 text-4xl font-bold">Kapcsolat</h1>
				<h2 className="mb-2 text-3xl">Az esemény főrendezői:</h2>
				<h3 className="text-2xl">Harmat Dominik</h3>
				<h3 className="mb-10 text-2xl">Vass Viktor</h3>
				<h4 className="mb-8 text-xl">
					Ha bármilyen kérdésetek felmerül a programtervvel vagy az eseménnyel
					kapcsolatban, akkor a{" "}
					<a
						href="mailto:golyahet2021@sch.bme.hu"
						className="hover:text-orange-600 dark:hover:text-orange-400 underline"
						rel="noreferrer"
					>
						golyahet2021@sch.bme.hu
					</a>{" "}
					e-mail címen tudtok tájékozódni.
				</h4>
				<h5 className="mb-8 text-lg">
					A 2021-es villanykaros gólyák facebook csoportját ezen a linken
					keresztül éritek el:{" "}
					<a
						href="https://www.facebook.com/groups/bmevik2021"
						className="hover:text-orange-600 dark:hover:text-orange-400 underline break-words"
						target="_blank"
						rel="noreferrer"
					>
						https://www.facebook.com/groups/bmevik2021
					</a>
				</h5>
				<h5 className="mb-8 text-lg">
					A Gólyahét hivatalos facebook eseménye:{" "}
					<a
						href="https://fb.me/e/2s9LTj315"
						className="hover:text-orange-600 dark:hover:text-orange-400 underline break-words"
						target="_blank"
						rel="noreferrer"
					>
						https://fb.me/e/2s9LTj315
					</a>
				</h5>
			</section>
		</Layout>
	);
}
