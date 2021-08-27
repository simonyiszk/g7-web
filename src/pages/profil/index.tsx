import Image from "next/image";
import useSWR from "swr";

import kirdev from "@/assets/images/kirdev.png";
import { Layout } from "@/components/Layout";
import { useUser } from "@/utils/hooks";
import { fetcher } from "@/utils/utils";

export default function ProfilePage() {
	const { data } = useUser();
	console.log("data: ", data);
	if (!data) return <Layout title="Profil">Loading...</Layout>;

	const color = "Fekete";
	const neptun = "ABC123";
	const debt = 1000;
	const group = "I04";

	return (
		<Layout
			title="Profil"
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto mb-8"
		>
			<h2 className="mb-6 text-4xl font-bold">Profilom</h2>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
				<div className="relative w-64 h-64">
					<Image src={kirdev} layout="fill" />
				</div>
				<div className="flex flex-col justify-center items-center font-bold">
					<p className="text-xl">Neptun kódom: {neptun}</p>
					<p className="mb-1 text-xl font-bold">Gárda: {color}</p>
				</div>
				<div className="w-full h-fit">
					<div className="py-2 lg:py-4 px-3 lg:px-4 mb-2 w-full text-white rounded-2xl bg-blur-7 h-fit">
						<div className="flex justify-between pb-2">
							<p>G7 tartozásom</p>
							<p>{debt} JMF</p>
						</div>
						<div className="py-3">
							<p>Megvásárolt merch, kaja: </p>
						</div>
						<div className="flex justify-between pb-2 mb-2 border-b-[1px] border-warmGray-500 dark:border-warmGray-700">
							<p>póló</p>
							<p className="text-warmGray-400 line-through">2000 JMF</p>
						</div>
						<div className="flex justify-between pb-2 mb-2 border-b-[1px] border-warmGray-500 dark:border-warmGray-700">
							<p>repohár</p>
							<p>1000 JMF</p>
						</div>
						<div className="flex justify-between">
							<p>ebéd</p>
							<p className="text-warmGray-400 line-through">250 JMF</p>
						</div>
					</div>
					<p className="px-3 lg:px-4 italic dark:text-warmGray-400">
						A tartozás akkor teljesített, hogyha a megvásárolt termék árát
						odaadod az egyik tankörseniorodnak, aki ezt adminisztrálja.
					</p>
				</div>
				<div className="py-2 lg:py-4 px-3 lg:px-4 mb-2 w-full text-white rounded-2xl bg-blur-7 h-fit">
					<p className="pb-2 text-xl font-bold">Tanköröm: {group}</p>
					<p className="py-3">Tankörseniorok:</p>
					<div className="flex flex-col pl-3">
						<div className="flex justify-between">
							<div>
								<div className="pb-2">
									<p className="pb-1">Tankör Senior</p>
									<a className="block pb-1 hover:underline" href="fb.me/asd">
										fb.me/Tankor.Senior
									</a>
									<a className="block hover:underline" href="tel:+36208084469">
										+36 20 808 4469
									</a>
								</div>
								<div>
									<p className="pb-1">Tankör Senior</p>
									<a className="block pb-1 hover:underline" href="fb.me/asd">
										fb.me/Tankor.Senior
									</a>
									<a className="block hover:underline" href="tel:+36208084469">
										+36 20 808 4469
									</a>
								</div>
							</div>
							<div className="self-center py-2 px-3 bg-green-600 rounded-xl h-fit">
								Térkép
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
