import clsx from "clsx";
import Image from "next/image";
import React from "react";

import ak from "@/assets/images/ak.png";
import kirdevpng from "@/assets/images/kirdev.png";
import lustamacska from "@/assets/images/lustamacska.png";
import schpng from "@/assets/images/sch.png";
import schdesignpng from "@/assets/images/schdesign.png";
import snapsoft from "@/assets/images/snapsoft.png";
import ssslpng from "@/assets/images/sssl.png";
import vikpng from "@/assets/images/vik.png";
import vikhk from "@/assets/images/vikhk.png";
import vodafone from "@/assets/images/vodafonewhite.png";
import { Fountain } from "@/utils/fountain";

import * as styles from "./Footer.module.scss";

export function Footer() {
	const loveRef = React.useRef<HTMLSpanElement>(null);
	const [clicks, setClicks] = React.useState(0);
	React.useEffect(() => {
		if (clicks % 2 === 1 && loveRef.current) {
			const f = new Fountain(
				loveRef.current.getBoundingClientRect().left,
				loveRef.current.getBoundingClientRect().top,
				loveRef.current,
				777,
			);
		}
		if (clicks === 5) {
			window.open("https://i.imgur.com/OucAB1l.png", "_blank");
		}
		if (clicks === 15) {
			window.open(
				"https://i.pinimg.com/originals/8e/6c/83/8e6c83e94bd52d56c302907806c8ecde.png",
				"_blank",
			);
		}
		return () => {};
	}, [clicks]);
	return (
		<footer
			className={clsx(
				styles.footer,
				"overflow-hidden p-4 w-full text-white bg-accent-dark",
			)}
		>
			<div className="container grid grid-cols-1 justify-center content-center mx-auto text-center">
				<div className="flex flex-wrap flex-auto justify-center content-center items-center mx-auto w-full ">
					<a
						href="https://vodafone.hu/karrier"
						target="_blank"
						rel="noreferrer"
					>
						<div className="relative m-4 w-20 h-24 !filter-none">
							<Image
								src={vodafone}
								alt="Vodafone logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a href="https://snapsoft.hu" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-24 h-20 !filter-none">
							<Image
								src={snapsoft}
								alt="Snapsoft logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a
						href="https://www.facebook.com/LustamacskaPub/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="relative m-4 w-20 h-24 !filter-none">
							<Image
								src={lustamacska}
								alt="Lustamacska pub logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a
						href="https://www.facebook.com/annakriszabc1/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="relative m-4 w-20 h-24 !filter-none">
							<Image
								src={ak}
								alt="Anna Krisz ABC logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>

					<div className="lg:block mx-8 mb-2 lg:mb-0 w-[80%] lg:w-0 lg:h-[80%] lg:border-r-2 border-b-2 lg:border-b-0 border-white" />

					<a href="https://sssl.sch.bme.hu/" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-16 h-20">
							<Image
								src={ssslpng}
								alt="SSSL logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>

					<a href="https://schdesign.hu" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-24 h-20">
							<Image
								src={schdesignpng}
								alt="schdesign logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a href="https://kir-dev.sch.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative w-20 h-16">
							<Image
								src={kirdevpng}
								alt="Kir-Dev logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a href="https://sch.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-24 h-16">
							<Image
								src={schpng}
								alt="Schönherz Zoltán Kollégium logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a href="https://vik.hk" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-16 h-16">
							<Image
								src={vikhk}
								alt="VIK HK logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
					<a href="https://vik.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-16 h-16">
							<Image
								src={vikpng}
								alt="BME Villamosmérnöki és Infromatikai kar logó"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
								placeholder="blur"
							/>
						</div>
					</a>
				</div>
				<div className="mx-auto mt-4 text-xs text-gray-400 w-fit">
					<code className="font-bold">{"</>"}</code> with{" "}
					{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
					<span
						className="overflow-visible hover:text-red-500 hover:cursor-pointer select-none"
						title="honk"
						ref={loveRef}
						onClick={() => setClicks(clicks + 1)}
					>
						❤
					</span>{" "}
					by{" "}
					<a
						className="hover:text-orange-400 hover:underline"
						href="https://github.com/simonyiszk/g7-web-backend"
						target="_blank"
						rel="noreferrer"
					>
						kir-dev
					</a>
					{" & "}
					<a
						className="hover:text-[#f8485e] hover:underline"
						href="https://github.com/simonyiszk/g7-web-frontend"
						target="_blank"
						rel="noreferrer"
					>
						schdesign
					</a>
					, © SSSL 2021
				</div>
			</div>
		</footer>
	);
}
