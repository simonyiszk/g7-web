import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";
import { useBool, useLocalStorage } from "@/utils/hooks";

import { Toggle } from "../toggle/Toggle";
import styles from "./Navbar.module.scss";

export function Navbar() {
	const [navbarOpen, navbarOpenHandlers] = useBool(false);
	const [currentScrollY, setCurrentScrollY] = React.useState(0);
	const [hide, hideHandlers] = useBool(false);
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

	React.useEffect(() => {
		// TODO: This re-renders the navbar every time the scroll position changes.
		const controlNavbar = () => {
			const currentScrollTop = window.scrollY;

			if (currentScrollTop > currentScrollY) {
				if (!hide) hideHandlers.setTrue();
				if (navbarOpen) navbarOpenHandlers.setFalse();
			} else if (hide) hideHandlers.setFalse();

			setCurrentScrollY(currentScrollTop);
		};

		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentScrollY]);

	React.useEffect(() => {
		if (darkMode) {
			document.querySelector("html")?.classList.add("dark");
		} else {
			document.querySelector("html")?.classList.remove("dark");
		}
		return () => {};
	}, [darkMode]);

	return (
		<header
			className={clsx(
				styles.navbar,
				"flex fixed z-40 flex-wrap justify-between items-center -mb-px w-full text-white bg-accent-dark",
				hide ? styles.hide : "top-0",
			)}
			id="header"
		>
			<div className="flex relative z-40 flex-wrap justify-between items-center py-2 px-4 mx-auto w-full bg-accent-dark">
				<div className="flex lg:block relative lg:static z-50 justify-between lg:justify-start w-full lg:w-auto bg-accent-dark">
					<Link href="/">
						<a className="text-2xl lg:text-4xl font-bold no-underline">
							G7 2021
						</a>
					</Link>
					<div className="flex lg:hidden gap-2 items-center">
						<Toggle
							id="darkModeToggle1"
							checked={darkMode}
							onChange={(e) => {
								// @ts-expect-error: Property 'checked' exists on type 'Toggle'
								setDarkMode(e.target.checked);
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
						"lg:flex fixed lg:relative lg:top-0 right-0 z-30 flex-grow items-center w-full lg:w-auto bg-accent-dark transition-all transform-gpu",
						navbarOpen ? "top-[52px]" : "top-[-208px]",
					)}
				>
					<ul className="flex flex-col lg:flex-row lg:ml-auto w-full lg:w-auto list-none lowercase">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="py-1 pl-2 lg:pl-0 w-full">
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
					<div className="hidden lg:block p-2 pl-8">
						<Toggle
							id="darkModeToggle2"
							checked={darkMode}
							onChange={(e) => {
								// @ts-expect-error: Property 'checked' exists on type 'Toggle'
								setDarkMode(e.target.checked);
							}}
						/>
					</div>
				</nav>
			</div>
		</header>
	);
}
