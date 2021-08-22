import clsx from "clsx";
import Image from "next/image";
import React from "react";

import kirdevpng from "@/assets/images/kirdev.png";
import schpng from "@/assets/images/sch.png";
import schdesignpng from "@/assets/images/schdesign.png";
import ssslpng from "@/assets/images/sssl.png";
import vikpng from "@/assets/images/vik.png";
import { Fountain } from "@/utils/fountain";

import * as styles from "./Footer.module.scss";

export function Footer() {
	const loveRef = React.useRef<HTMLSpanElement>(null);
	const [clicks, setClicks] = React.useState(0);
	React.useEffect(() => {
		if (clicks > 4 && loveRef.current) {
			setClicks(0);
			const f = new Fountain(
				loveRef.current.getBoundingClientRect().left,
				loveRef.current.getBoundingClientRect().top,
				loveRef.current,
				777,
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
				<div className="flex flex-wrap flex-auto justify-center content-center items-center mx-auto w-full">
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
						title="meow"
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
