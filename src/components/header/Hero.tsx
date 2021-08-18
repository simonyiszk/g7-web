import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export function Hero() {
	return (
		<section className="flex flex-col justify-center items-center my-4 mb-8 w-full min-h-[calc(100vh-72px)] text-center">
			<h2 className="text-3xl">BME-VIK</h2>
			<h1 className="my-4 text-5xl">Gólyahét 2021</h1>
			<h3 className="text-2xl">08.30. - 09.03.</h3>
			<div className="flex justify-evenly mx-auto mt-12 w-full lg:w-1/3">
				<a
					href="https://www.instagram.com/bme_vik_golyahet/"
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram className="w-16 h-auto hover:text-orange-600" />
				</a>
				<a
					href="https://www.facebook.com/bmevikgolyahet"
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookSquare className="w-16 h-auto hover:text-orange-600" />
				</a>
			</div>
		</section>
	);
}
