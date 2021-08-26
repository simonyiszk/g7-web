import type {
	AchievementEntry,
	EventPreviewType,
	EventType,
	LeaderboardEntry,
	NewsArticle,
	UserPreview,
} from "./ApiBaseTypes";

/**
 * /api/news
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
 * /api/events
 */
export type EventsRouteResponse = {
	allEvents: EventPreviewType[];
	eventsToday: EventPreviewType[];
	userPreview: UserPreview;
	warningMessage: string;
};

/**
 * /api/events/[url]
 */
export type EventResponse = {
	event: EventType;
	warningMessage: string;
};

/**
 * /api/home
 */
export type HomeRouteResponse = {
	achievements: AchievementEntry[];
	upcomingEvents: EventPreviewType[];
	leaderBoard: LeaderboardEntry[];
	leaderBoardVisible: boolean;
	news: NewsArticle[];
};

/**
 * /api/achievements
 */
export type AchievementsRouteResponse = {
	achievements: AchievementEntry[];
	groupScore: number;
	highlighted: AchievementEntry[];
	leaderBoard: LeaderboardEntry[];
	leaderBoardFrozen: boolean;
	leaderBoardVisible: boolean;
	warningMessage: string;
};

/**
 * /api/profile
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
