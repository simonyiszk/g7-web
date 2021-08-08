import clsx from "clsx";

import { useBool } from "@/utils/hooks";

export type LeaderboardProps = {
	data: { name: string; points: number }[];
	topX?: number;
};

export function Leaderboard({ data, topX = 6 }: LeaderboardProps) {
	const [isExpanded, expandedHandlers] = useBool(false);
	data.sort((a, b) => b.points - a.points);
	const slicedData = isExpanded ? data : data.slice(0, topX);

	return (
		<section className="container px-4 mx-auto mb-8">
			<h2 className="mb-6 text-4xl font-bold">Leaderboard</h2>
			<div className="flex flex-col py-4 w-full bg-accent-dark rounded-2xl">
				{slicedData.map((entry, i) => {
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
							<p className="text-right">{entry.points}</p>
						</div>
					);
				})}
				{!isExpanded && (
					<button type="button" onClick={() => expandedHandlers.setTrue()}>
						<div className="py-2 px-3 italic text-center underline bg-gray-800">
							Teljes leaderboard
						</div>
					</button>
				)}
			</div>
		</section>
	);
}
