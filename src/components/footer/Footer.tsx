import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import schdesignsvg from "@/assets/images/fullWhite.svg";
import kirdevsvg from "@/assets/images/kirdev.svg";
import schsvg from "@/assets/images/sch.svg";
import ssslpng from "@/assets/images/sssl.png";
import viksvg from "@/assets/images/vik.svg";

import * as styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={clsx(styles.footer, "p-8 w-full text-white bg-black")}>
			<div className="container flex flex-col justify-center content-center mx-auto text-center">
				<div className="flex flex-col items-center pb-4 mx-auto w-full lg:w-1/3">
					<a href="https://sssl.sch.bme.hu/" target="_blank" rel="noreferrer">
						<div className="relative pb-4 md:pb-0 w-40">
							<Image src={ssslpng} alt="SSSL logó" placeholder="blur" />
						</div>
					</a>
				</div>
				<div className="flex justify-evenly pb-4 mx-auto w-full lg:w-1/3">
					<a href="https://www.instagram.com/schdesign.hu/">
						<FaInstagram className="w-10 h-auto hover:text-orange-600" />
					</a>
					<a href="https://www.facebook.com/schonherzdesignstudio/">
						<FaFacebookSquare className="w-10 h-auto hover:text-orange-600" />
					</a>
				</div>
				<div className="flex flex-col md:flex-row justify-evenly items-center pb-4 mx-auto md:w-2/3">
					<a href="https://sch.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative pb-4 md:pb-0 w-40 h-24 md:h-24">
							<Image
								src={schsvg}
								alt="Schönherz Zoltán Kollégium logó"
								layout="fill"
							/>
						</div>
					</a>
					<a
						href="https://kir-dev.sch.bme.hu/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="relative pb-4 md:pb-0 w-40 h-24 md:h-24">
							<Image src={kirdevsvg} alt="Kir-Dev logó" layout="fill" />
						</div>
					</a>
					<a href="https://schdesign.hu" target="_blank" rel="noreferrer">
						<div className="relative pb-4 md:pb-0 md:-mb-6 w-56 h-32 md:h-24">
							<Image src={schdesignsvg} alt="schdesign logó" layout="fill" />
						</div>
					</a>
					<a href="https://vik.bme.hu" target="_blank" rel="noreferrer">
						<div className="relative pb-4 md:pb-0 w-40 h-40 md:h-24">
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
					href="https://sssl.sch.bme.hu/"
					target="_blank"
					rel="noreferrer"
				>
					© SSSL {new Date().getFullYear()}
				</a>
			</div>
		</footer>
	);
}
