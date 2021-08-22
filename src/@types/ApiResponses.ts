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
