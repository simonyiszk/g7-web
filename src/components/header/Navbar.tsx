import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

import logo from "@/assets/images/logo.png";
import navbarContent from "@/data/navbar.json";
import { useBool, useLocalStorage, useScrollDirection } from "@/utils/hooks";

import { Toggle } from "../toggle/Toggle";
import styles from "./Navbar.module.scss";

export function Navbar() {
	const [navbarOpen, navbarOpenHandlers] = useBool(false);
	const [hide, hideHandlers] = useBool(false);
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
	const scrollDir = useScrollDirection("up", 52);

	React.useEffect(() => {
		if (scrollDir === "up") {
			hideHandlers.setFalse();
		} else {
			hideHandlers.setTrue();
			navbarOpenHandlers.setFalse();
		}
		return () => {};
	}, [hideHandlers, navbarOpenHandlers, scrollDir]);

	React.useEffect(() => {
		if (darkMode) {
			document.querySelector("html")?.classList.add("dark");
		} else {
			document.querySelector("html")?.classList.remove("dark");
		}
		return () => {};
	}, [darkMode]);

	return (
		<>
			<Head>
				<meta name="color-scheme" content={darkMode ? "dark light" : "light"} />
			</Head>

			<header
				className={clsx(
					styles.navbar,
					"flex fixed z-40 flex-wrap justify-between items-center -mb-px w-full text-white bg-accent-dark",
					hide ? "top-[-74px]" : "top-0",
				)}
				id="header"
			>
				<div className="flex relative z-40 flex-wrap justify-between items-center py-2 px-4 mx-auto w-full bg-accent-dark">
					<div className="flex lg:block relative lg:static z-50 justify-between lg:justify-start items-center w-full lg:w-auto bg-accent-dark">
						<Link href="/">
							<a className="text-2xl lg:text-4xl font-bold no-underline h-fit">
								<div className="flex flex-row items-center">
									<div className="flex relative items-center mr-2 lg:mr-4 w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12">
										<Image src={logo} layout="fill" />
									</div>
									G7 2021
								</div>
							</a>
						</Link>
						<div className="flex lg:hidden gap-2 items-center">
							<Toggle
								id="darkModeToggle1"
								defaultChecked={darkMode}
								onClick={(e) => {
									setDarkMode(e.currentTarget.checked);
								}}
							/>
							<button
								className="block lg:hidden py-2 px-3 text-xl leading-none rounded cursor-pointer outline-none focus:outline-none"
								type="button"
								onClick={() => navbarOpenHandlers.toggle()}
							>
								<FaBars />
							</button>
						</div>
					</div>

					<nav
						className={clsx(
							"lg:flex fixed lg:relative lg:top-0 right-0 z-30 flex-grow items-center w-full lg:w-auto lowercase bg-accent-dark transition-all transform-gpu",
							navbarOpen ? "top-[52px]" : "top-[-208px]",
						)}
					>
						<ul className="flex z-30 flex-col lg:flex-row lg:ml-auto w-full lg:w-auto list-none">
							{navbarContent.links.map(({ href, label }, i) => (
								<li key={`${href}`} className="z-30 py-1 pl-2 lg:pl-0 w-full">
									{href.startsWith("/") ? (
										<Link href={href}>
											<a
												className={clsx(
													"inline-block py-2 px-4 lg:px-5 w-max text-xl xl:text-2xl font-medium",
													i === 0 && "lg:pl-0",
													i === navbarContent.links.length - 1 && "lg:pr-0",
												)}
											>
												{label}
											</a>
										</Link>
									) : (
										<a
											href={href}
											className={clsx(
												"inline-block py-2 px-4 lg:px-5 w-full text-xl xl:text-2xl font-medium",
												i === 0 && "lg:pl-0",
												i === navbarContent.links.length - 1 && "lg:pr-0",
											)}
											target="_blank"
											rel="noreferrer"
										>
											{label}
										</a>
									)}
								</li>
							))}
						</ul>
						<div className="hidden lg:flex items-center p-2 pl-8">
							<Toggle
								id="darkModeToggle2"
								defaultChecked={darkMode}
								onClick={(e) => {
									setDarkMode(e.currentTarget.checked);
								}}
							/>
						</div>
					</nav>
				</div>
			</header>
			{/* <div
				className={clsx(
					styles.navbar,
					"flex fixed z-10 justify-center p-1 w-full dark:text-white bg-yellow-400 dark:bg-yellow-600",
					hide ? "top-0" : "top-[52px] lg:top-[68px] xl:top-[72px]",
				)}
			>
				<h2 className="text-center">
					Very long warning that only fits into multiple lines on smaller
					screens like phones
				</h2>
			</div> */}
		</>
	);
}
