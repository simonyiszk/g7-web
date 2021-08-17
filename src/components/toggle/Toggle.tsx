import clsx from "clsx";

import styles from "./Toggle.module.scss";

export function Toggle({
	id,
	checked,
	onClick,
	...restProps
}: React.HTMLProps<HTMLInputElement> & { id: string }) {
	return (
		<div className={clsx(styles.switch)}>
			<input
				type="checkbox"
				name="toggle"
				id={id}
				checked={checked}
				onClick={onClick}
				{...restProps}
			/>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label htmlFor={id} className={clsx(styles.slider)} />
		</div>
	);
}
