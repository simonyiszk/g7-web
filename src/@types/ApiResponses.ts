import type { EventType, NewsArticle, UserPreview } from "./ApiBaseTypes";

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
	allEvents: EventType[];
	eventsToday: EventType[];
	userPreview: UserPreview;
	warningMessage: string;
};

/**
 * /api/home
 */
export type HomeRouteResponse = {
	leaderboardVisible: boolean;
};
