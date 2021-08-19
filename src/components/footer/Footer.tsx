import clsx from "clsx";
import Image from "next/image";
import React from "react";

import kirdevpng from "@/assets/images/kirdev.png";
import schpng from "@/assets/images/sch.png";
import schdesignpng from "@/assets/images/schdesign.png";
import ssslpng from "@/assets/images/sssl.png";
import vikpng from "@/assets/images/vik.png";

import * as styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer
			className={clsx(styles.footer, "p-4 w-full text-white bg-accent-dark")}
		>
			<div className="container grid grid-cols-1 justify-center content-center mx-auto text-center">
				<div className="flex flex-wrap flex-auto justify-center content-center items-center mx-auto w-full">
					<a href="https://sssl.sch.bme.hu/" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-16">
							<Image src={ssslpng} alt="SSSL logó" placeholder="blur" />
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
							/>
						</div>
					</a>
				</div>
				<div className="mx-auto mt-4 text-xs text-gray-400 w-fit">
					{"</>"} with ♥ by{" "}
					<a
						className="hover:underline"
						href="https://github.com/simonyiszk/g7-web-backend"
						target="_blank"
						rel="noreferrer"
					>
						kir-dev
					</a>
					{" & "}
					<a
						className="hover:underline"
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
