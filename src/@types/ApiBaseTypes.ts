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

export type EventPreviewType = {
	category: string;
	timestampEnd: number;
	timestampStart: number;
	place: string;
	previewDescription: string;
	previewImageUrl: string;
	title: string;
	url: string;
};

export type EventType = {
	category: string;
	description: string;
	extraButtonTitle: string;
	extraButtonUrl: string;
	fullImageUrl: string;
	ogDescription: string;
	ogImage: string;
	ogTitle: string;
	place: string;
	timestampEnd: number;
	timestampStart: number;
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

export type AchievementStatusTranslated =
	| "Beadásra vár"
	| "Feldolgozás alatt"
	| "Elfogadva"
	| "Elutasítva"
	| "Nincs belépve";

export type AchievementType = {
	availableTo: number;
	category: string;
	id: number;
	maxScore: number;
	title: string;
	type: "IMAGE" | "TEXT";
};

export type AchievementEntry = {
	achievement: AchievementType;
	status: AchievementStatus;
};
