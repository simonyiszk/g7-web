export function Skeleton() {
	return (
		<div className="flex space-x-4 animate-pulse">
			<div className="flex-1 py-1 space-y-4">
				<div className="w-2/4 sm:w-1/3 h-10 bg-accent-dark dark:bg-warmGray-200 rounded" />
				<div className="space-y-2">
					<div className="w-1/4 h-8 bg-accent-dark dark:bg-warmGray-200 rounded" />
					<div className="h-4 bg-accent-dark dark:bg-warmGray-200 rounded" />
					<div className="w-5/6 h-4 bg-accent-dark dark:bg-warmGray-200 rounded" />
				</div>
			</div>
		</div>
	);
}
