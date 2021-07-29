import clsx from "clsx";

import styles from "./Toggle.module.scss";

export function Toggle({
	id,
	checked,
	onClick,
	className,
	...restProps
}: React.HTMLProps<HTMLInputElement> & { id: string }) {
	return (
		<div className="inline-block relative mr-2 w-10 align-middle transition-all duration-500 transform-gpu select-none">
			<input
				type="checkbox"
				name="toggle"
				id={id}
				className={clsx(
					"block absolute w-6 h-6 bg-white rounded-full border-4 transition-all duration-500 transform-gpu appearance-none cursor-pointer",
					styles.toggleCheckbox,
					className,
				)}
				checked={checked}
				onClick={onClick}
				{...restProps}
			/>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label
				htmlFor={id}
				className={clsx(
					"block overflow-hidden h-6 bg-gray-300 rounded-full transition-all duration-500 transform-gpu cursor-pointer",
					styles.toggleLabel,
				)}
			/>
		</div>
	);
}
