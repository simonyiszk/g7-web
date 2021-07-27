import clsx from "clsx";
import React from "react";

import * as styles from "./Hero.module.scss";

export function Hero() {
	return (
		<header className="w-full bg-blueGray-900">
			<div className="container px-4 mx-auto">
				<h2 className="mb-4 text-2xl font-medium text-white">
					Az schdesign a Simonyi Károly&nbsp;Szakkollégium{" "}
					<span className="text-primary">kreatív</span>&nbsp;alkotóműhelye.
				</h2>
			</div>
			<div className="overflow-hidden relative w-full" id="hero-container">
				<h1
					className={clsx(
						styles.textHero,
						"md:pt-32 xl:pt-64 pl-4 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-48 cursor-default select-none font-schdesign",
					)}
				>
					schdesign
				</h1>
			</div>
		</header>
	);
}
