import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
	FaCheckCircle,
	FaExclamationCircle,
	FaQuestionCircle,
	FaTimesCircle,
} from "react-icons/fa";

export type BucketListItemPreviewProps = {
	number?: number;
	title?: string;
	status?: "Elfogadva" | "Elutasítva" | "Feldolgozás alatt" | "Beadásra vár";
	timeLeft?: string;
};

export function BucketListItemPreview({
	number = 69,
	title = "Feladat név",
	status = "Elfogadva",
	timeLeft = "12:34",
}: BucketListItemPreviewProps) {
	return (
		<Link href={`/bucketlist/${number}`}>
			<a>
				<figure className="flex gap-4 justify-between items-center py-3 px-4 text-white bg-black rounded-2xl">
					<div>
						<h4 className="text-xl line-clamp-1">{`#${number} - ${title}`}</h4>
						<p className="text-sm text-warmGray-400">
							<span
								className={clsx(
									"whitespace-nowrap",
									status === "Elfogadva" && "text-green-600",
									status === "Elutasítva" && "text-red-600",
									status === "Feldolgozás alatt" && "text-blue-600",
									status === "Beadásra vár" && "text-yellow-600",
								)}
							>{`${status}`}</span>{" "}
							-{" "}
							<span className="whitespace-nowrap">{`Hátralévő idő: ${timeLeft}`}</span>
						</p>
					</div>
					<div className="">
						{status === "Elfogadva" && (
							<FaCheckCircle className="w-12 h-12 text-green-500" />
						)}
						{status === "Elutasítva" && (
							<FaTimesCircle className="w-12 h-12 text-red-500" />
						)}
						{status === "Feldolgozás alatt" && (
							<FaQuestionCircle className="w-12 h-12 text-blue-500" />
						)}
						{status === "Beadásra vár" && (
							<FaExclamationCircle className="w-12 h-12 text-yellow-500" />
						)}
					</div>
				</figure>
			</a>
		</Link>
	);
}
