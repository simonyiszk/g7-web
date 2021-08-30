import clsx from "clsx";
import getConfig from "next/config";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

import kirdev from "@/assets/images/kirdev.png";
import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { useUser } from "@/utils/hooks";
import { cdnImageLoader, fetcher } from "@/utils/utils";

export default function ProfilePage() {
	const { publicRuntimeConfig } = getConfig();
	const router = useRouter();
	const { data, error } = useUser();
	console.log("error: ", error);
	console.log("data: ", data);
	if (error) {
		router.push("/api/auth/login");
		return (
			<Layout
				title="Profil"
				className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto mb-8"
			>
				<Skeleton />
			</Layout>
		);
	}
	if (!data)
		return (
			<Layout
				title="Profil"
				className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto mb-8"
			>
				<Skeleton />
			</Layout>
		);

	return (
		<Layout
			title="Profil"
			className="container px-4 lg:px-32 xl:px-48 2xl:px-64 pt-8 mx-auto mb-8"
		>
			<h2 className="mb-6 text-4xl font-bold">Profilom</h2>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
				<div className="relative w-64 h-64">
					<Image
						src={`profiles/${data.user.g7id}.png`}
						className="!w-full !h-auto rounded-2xl"
						loader={cdnImageLoader}
						layout="fill"
					/>
				</div>
				<div className="flex flex-col justify-center items-center font-bold">
					<p className="text-xl">Neptun kódom: {data.user.neptun}</p>
					<p className="mb-1 text-xl font-bold">
						Gárda:{" "}
						{(data.user.guild === "WHITE" && "Fehér") ||
							(data.user.guild === "BLACK" && "Fekete") ||
							(data.user.guild === "RED" && "Piros") ||
							(data.user.guild === "YELLOW" && "Sárga") ||
							(data.user.guild === "BLUE" && "Kék") ||
							data.user.guild}
					</p>
					{(data.user.role === "STAFF" ||
						data.user.role === "ADMIN" ||
						data.user.role === "SUPERUSER") && (
						<a
							// eslint-disable-next-line tailwindcss/no-custom-classname
							className="block p-3 py-2 mt-2 rounded-2xl bg-blur-7 hover:brightness-75"
							href={`${publicRuntimeConfig.NEXT_PUBLIC_BACKEND_BASE_URL}entrypoint`}
						>
							Admin felület
						</a>
					)}
				</div>
				<div className="w-full h-fit">
					<div className="py-2 lg:py-4 px-3 lg:px-4 mb-2 w-full text-white rounded-2xl bg-blur-7 h-fit">
						<div className="flex justify-between pb-2">
							<p>G7 tartozásom</p>
							<p>
								{data.debts?.length > 0
									? data.debts.reduce((prev, curr) => {
											if (curr.payed) return prev;
											return { ...prev, price: prev.price + curr.price };
									  }).price
									: 0}{" "}
								JMF
							</p>
						</div>
						<div className="py-3">
							<p>Megvásárolt merch, kaja: </p>
						</div>
						{data.debts?.map((debt, i) => {
							return (
								<div
									// eslint-disable-next-line react/no-array-index-key
									key={debt.product + i}
									className={clsx(
										"flex justify-between",
										i < data.debts.length - 1 &&
											"pb-2 mb-2 border-b-[1px] border-warmGray-500 dark:border-warmGray-700",
									)}
								>
									<p>{debt.product}</p>
									<p
										className={clsx(
											debt.payed === true && "text-warmGray-400 line-through",
										)}
									>
										{debt.price} JMF
									</p>
								</div>
							);
						})}

						{
							// @ts-expect-error: length definitely not only 1
							data.debts?.length === 0 && (
								<div className={clsx("flex justify-end")}>
									<p>Még nem vettél semmit</p>
								</div>
							)
						}
					</div>
					<p className="px-3 lg:px-4 italic dark:text-warmGray-400">
						A tartozás akkor teljesített, hogyha a megvásárolt termék árát
						odaadod az egyik tankörseniorodnak, aki ezt adminisztrálta.
					</p>
				</div>
				<div className="py-2 lg:py-4 px-3 lg:px-4 mb-2 w-full text-white rounded-2xl bg-blur-7 h-fit">
					<p className="pb-2 text-xl font-bold">Tanköröm: {data.group?.name}</p>
					<p className="py-3">Tankörseniorok:</p>
					<div className="flex flex-col pl-3">
						<div>
							{data.group.staffs.map((staff) => (
								<div className="pb-2">
									<p className="pb-1">{staff.name}</p>
									<a
										className="block pb-1 hover:underline"
										href={staff.facebookUrl}
									>
										{staff.facebookUrl}
									</a>
									<a
										className="block hover:underline"
										href={`tel:${staff.mobilePhone}`}
									>
										{staff.mobilePhone}
									</a>
								</div>
							))}
						</div>
						{data.locations?.length > 0 && (
							<a
								className="block self-center py-2 px-3 mt-2 bg-green-600 rounded-xl h-fit w-fit"
								href={`https://www.google.com/maps/search/?api=1&query=${data.locations[0].latitude}%2C${data.locations[0].logitude}`}
								target="_blank"
								rel="noreferrer"
							>
								Tankör megjelenítése a térképen
							</a>
						)}
					</div>
				</div>
			</section>
		</Layout>
	);
}
