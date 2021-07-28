import clsx from "clsx";

import styles from "./BucketListContainer.module.scss";
import { BucketListItemPreview } from "./BucketListItemPreview";

export function BucketListContainer() {
	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">Bucket list</h2>
			<div className={clsx(styles.container, "grid gap-4")}>
				<BucketListItemPreview status="Elfogadva" />
				<BucketListItemPreview status="Elutasítva" />
				<BucketListItemPreview status="Feldolgozás alatt" timeLeft="2 nap" />
				<BucketListItemPreview status="Beadásra vár" />
			</div>
		</section>
	);
}
