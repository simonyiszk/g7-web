import type {
	AchievementCategory,
	AchievementEntry,
	EventPreviewType,
	EventType,
	LeaderboardEntry,
	NewsArticle,
	UserPreview,
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
	achievements: AchievementEntry[];
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
	achievements: AchievementEntry[];
};

/**
 * /achievements/[category]/[id]
 */
export type AchievementRouteResponse = AchievementEntry;

/**
 * /profile
 */
export type ProfileRouteResponse = {
	group: {
		coverImageUrl: string;
		lastLatitude: string;
		lastLongitude: string;
		lastTimeLocationChanged: number;
		lastTimeUpdatedUser: string;
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
	user: {
		fullName: string;
		g7id: string;
		groupName: string;
		guild: string;
		major: string;
		neptun: string;
	};
	warningMessage: string;
};
