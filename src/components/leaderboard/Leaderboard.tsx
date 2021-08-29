import clsx from "clsx";

import type { LeaderboardEntry } from "@/@types/ApiBaseTypes";
import { useBool } from "@/utils/hooks";

export type LeaderboardProps = {
	data: LeaderboardEntry[];
	isHidden?: boolean;
	topX?: number;
};

export function Leaderboard({
	data,
	topX = 6,
	isHidden = false,
}: LeaderboardProps) {
	const [isExpanded, expandedHandlers] = useBool(false);
	data.sort((a, b) => b.score - a.score);
	const slicedData = isExpanded ? data : data.slice(0, topX);

	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">Leaderboard</h2>
			<div className="flex flex-col py-4 w-full text-warmGray-200 bg-accent-dark rounded-2xl">
				{(isHidden || !data || data.length === 0) && (
					<h4 className="px-3">A leaderboard jelenleg nem elérhető.</h4>
				)}
				{!isHidden &&
					data &&
					slicedData.map((entry, i) => {
						return (
							<div
								key={entry.name}
								className={clsx(
									"flex justify-between py-2 px-3",
									i % 2 === 0 && "bg-gray-800",
								)}
							>
								<p>
									{i + 1}. {entry.name}
								</p>
								<p className="text-right">{entry.score}</p>
							</div>
						);
					})}
				{!isHidden && !isExpanded && data && data.length !== 0 && (
					<button type="button" onClick={() => expandedHandlers.setTrue()}>
						<div className="py-2 px-3 italic text-center text-warmGray-50 underline bg-gray-800">
							Teljes leaderboard
						</div>
					</button>
				)}
			</div>
		</section>
	);
}
