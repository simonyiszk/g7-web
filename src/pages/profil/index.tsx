import useSWR from "swr";

import { Layout } from "@/components/Layout";
import { useUser } from "@/utils/hooks";
import { fetcher } from "@/utils/utils";

export default function ProfilePage() {
	const { data } = useUser();
	console.log(data);
	if (!data) return <Layout title="Profil">Loading...</Layout>;
	return <Layout title="Profil">asd</Layout>;
}
