import getConfig from "next/config";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

import type { ProfileRouteResponse } from "@/@types/ApiResponses";

import { fetcher } from "./utils";

export function useUser() {
	const { publicRuntimeConfig } = getConfig();
	console.log(publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL);
	return useSWR<ProfileRouteResponse>(
		`${publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL}profile`,
		fetcher,
		{
			onError: (err) => {
				console.log(err);
				// window.location.assign(
				// 	`${publicRuntimeConfig.NEXT_PUBLIC_BACKEND_BASE_URL}login`,
				// );
			},
		},
	);
}

// https://gist.github.com/kyleshevlin/08a2deb904b79077e46966567ccabf06
export function useBool(initialState = false): [
	boolean,
	{
		setTrue: () => void;
		setFalse: () => void;
		toggle: () => void;
		reset: () => void;
	},
] {
	const [state, setState] = useState(initialState);

	// Instead of individual React.useCallbacks gathered into an object
	// Let's memoize the whole object. Then, we can destructure the
	// methods we need in our consuming component.
	const handlers = useMemo(
		() => ({
			setTrue: () => {
				setState(true);
			},
			setFalse: () => {
				setState(false);
			},
			toggle: () => {
				setState((s) => !s);
			},
			reset: () => {
				setState(initialState);
			},
		}),
		[initialState],
	);

	return [state, handlers];
}

export function useLocalStorage<T>(key: string, initialValue: T) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (typeof window === "undefined") {
			console.warn(`No window yet in ${key} useLocalStorage init`);
			return initialValue;
		}
		try {
			console.log(`init ${key}`);
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.error(error);
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T | ((val: T) => T)) => {
		if (typeof window === "undefined") {
			console.warn(`No window yet in ${key} useLocalStorage set`);
			return;
		}
		try {
			console.log(`save ${key}`);
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.error(error);
		}
	};
	return [storedValue, setValue] as const;
}

// https://gist.github.com/reecelucas/cd110ece696cca8468db895281fa28cb
export function useScrollDirection(
	initialDirection: "up" | "down" = "up",
	thresholdPixels = 0,
) {
	const [scrollDir, setScrollDir] = useState(initialDirection);

	useEffect(() => {
		const threshold = thresholdPixels || 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				// We haven't exceeded the threshold
				ticking = false;
				return;
			}

			setScrollDir(scrollY > lastScrollY ? "down" : "up");
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [initialDirection, thresholdPixels]);

	return scrollDir;
}
