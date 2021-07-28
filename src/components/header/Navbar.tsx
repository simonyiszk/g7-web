import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

import styles from "./Navbar.module.scss";

export function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const [currentScrollY, setCurrentScrollY] = React.useState(0);
	const [hide, setHide] = React.useState(false);

	React.useEffect(() => {
		// TODO: This re-renders the navbar every time the scroll position changes.
		const controlNavbar = () => {
			const currentScrollTop = window.scrollY;

			if (currentScrollTop > currentScrollY) {
				if (!hide) setHide(true);
				if (navbarOpen) setNavbarOpen(false);
			} else if (hide) setHide(false);

			setCurrentScrollY(currentScrollTop);
		};

		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentScrollY]);

	return (
		<header
			className={clsx(
				styles.navbar,
				"flex fixed z-40 flex-wrap justify-between items-center -mb-px w-full text-white bg-black",
				hide ? styles.hide : "top-0",
			)}
			id="header"
		>
			<div className="flex relative flex-wrap justify-between items-center py-2 px-4 mx-auto w-full ">
				<div className="flex lg:block relative lg:static z-50 justify-between lg:justify-start w-full lg:w-auto bg-black">
					<Link href="/">
						<a className="text-2xl lg:text-4xl font-bold no-underline">
							G7 2021
						</a>
					</Link>
					<button
						className="block lg:hidden py-2 px-3 text-xl leading-none rounded border border-solid cursor-pointer outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"lg:flex fixed lg:relative lg:top-0 right-0 z-30 flex-grow items-center w-full lg:w-auto bg-black transition-all transform-gpu",
						navbarOpen ? "top-[54px]" : "top-[-208px]",
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
				</nav>
			</div>
		</header>
	);
}
