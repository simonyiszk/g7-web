import clsx from "clsx";
import Image from "next/image";
import React from "react";

import kirdevsvg from "@/assets/images/kirdev.svg";
import schsvg from "@/assets/images/sch.svg";
import schdesignsvg from "@/assets/images/schdesign.svg";
import ssslpng from "@/assets/images/sssl.png";
import viksvg from "@/assets/images/vik.svg";

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
								src={schsvg}
								alt="Schönherz Zoltán Kollégium logó"
								layout="fill"
							/>
						</div>
					</a>
					<a href="https://kir-dev.sch.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative w-20 h-20">
							<Image src={kirdevsvg} alt="Kir-Dev logó" layout="fill" />
						</div>
					</a>
					<a href="https://schdesign.hu" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-24 h-20">
							<Image src={schdesignsvg} alt="schdesign logó" layout="fill" />
						</div>
					</a>
					<a href="https://vik.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative m-4 w-16 h-16">
							<Image
								src={viksvg}
								alt="BME Villamosmérnöki és Infromatikai kar logó"
								layout="fill"
							/>
						</div>
					</a>
				</div>
				<a
					className="block mx-auto mt-4 text-xs text-gray-400 hover:underline w-fit"
					href="https://github.com/simonyiszk/g7-web-frontend"
					target="_blank"
					rel="noreferrer"
				>
					{"</>"} with ♥ by kir-dev & schdesign, © SSSL 2021
				</a>
			</div>
		</footer>
	);
}
