export type UserRole = "GUEST" | "BASIC" | "STAFF" | "ADMIN" | "SUPERUSER";

export type UserPreview = {
	loggedIn: boolean;
	fullName?: string;
	groupName?: string;
	role?: UserRole;
};

export type NewsArticle = {
	title: string;
	brief: string;
	timestamp: number;
	imageUrl: string;
	highlighted: boolean;
};

export type EventType = {
	category: string;
	heldDay: string;
	heldInterval: string;
	heldTimestamp: number;
	place: string;
	previewDescription: string;
	previewImageUrl: string;
	title: string;
	url: string;
};

export type LeaderboardEntry = {
	name: string;
	score: number;
};

export type AchievementStatus =
	| "NOT_SUBMITTED"
	| "SUBMITTED"
	| "ACCEPTED"
	| "REJECTED"
	| "NOT_LOGGED_IN";

export type AchievementEntry = {
	achievement: {
		availableTo: number;
		category: string;
		id: number;
		maxScore: number;
		title: string;
		type: "IMAGE" | "TEXT";
	};
	status: AchievementStatus;
};
