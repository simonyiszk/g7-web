import { useRouter } from "next/router";
import useSWR from "swr";

import type { EventType } from "@/@types/ApiBaseTypes";
import { Layout } from "@/components/Layout";
import { fetcher } from "@/utils/utils";

export default function EventPage() {
	const router = useRouter();
	const { url } = router.query;
	const { data, error, mutate } = useSWR<{ event: EventType }>(
		`${process.env.API_BASE_URL}/events/${url}`,
		fetcher,
	);

	console.log(data, error);

	if (!data) {
		return <Layout title="Töltés...">Töltés...</Layout>;
	}

	return <Layout title={data?.event.title ?? ""}>{data.event.title}</Layout>;
}
