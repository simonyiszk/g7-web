import type {
	AchievementCategory,
	AchievementStatus,
	AchievementSubmissionResult,
	AchievementType,
	EventPreviewType,
	EventType,
	LeaderboardEntry,
	NewsArticle,
	UserPreview,
	UserRole,
} from "./ApiBaseTypes";

/**
 * /news
 */
export type NewsRouteResponse = {
	interval: string;
	news: NewsArticle[];
	startsAt: number;
	title: string;
	userPreview: UserPreview;
	warningMessage: string;
};

/**
 * /events
 */
export type EventsRouteResponse = {
	allEvents: EventPreviewType[];
	eventsToday: EventPreviewType[];
	userPreview: UserPreview;
	warningMessage: string;
};

/**
 * /events/[url]
 */
export type EventResponse = {
	event: EventType;
	warningMessage: string;
};

/**
 * /home
 */
export type HomeRouteResponse = {
	achievements: {
		achievement: AchievementType;
		status: AchievementStatus;
		comment: string;
	}[];
	upcomingEvents: EventPreviewType[];
	leaderBoard: LeaderboardEntry[];
	leaderBoardVisible: boolean;
	news: NewsArticle[];
};

/**
 * /achievements
 */
export type AchievementsRouteResponse = {
	categories: AchievementCategory[];
	leaderBoard: LeaderboardEntry[];
	leaderBoardFrozen: boolean;
	leaderBoardVisible: boolean;
};

/**
 * /achievements/[category]
 */
export type AchievementCategoryRouteResponse = {
	groupScore: number;
	categoryName: string;
	achievements: {
		achievement: AchievementType;
		status: AchievementStatus;
		comment: string;
	}[];
};

/**
 * /achievements/[category]/[id]
 */
export type AchievementRouteResponse = {
	achievement: AchievementType;
	submission: AchievementSubmissionResult;
	status: AchievementStatus;
};

/**
 * /profile
 */
export type ProfileRouteResponse = {
	debts: [
		{
			payed: boolean;
			price: number;
			product: string;
			representativeName: string;
			sellerName: string;
			shipped: boolean;
		},
	];
	group: {
		coverImageUrl: string;
		major: string;
		name: string;
		staffs: [
			{
				facebookUrl: string;
				mobilePhone: string;
				name: string;
			},
		];
	};
	locations: [
		{
			accuracy: number;
			latitude: number;
			logitude: number;
			name: string;
			timestamp: number;
		},
	];
	loggedin: boolean;
	user: {
		fullName: string;
		g7id: string;
		groupName: string;
		guild: string;
		major: string;
		neptun: string;
		role: UserRole;
	};
};
