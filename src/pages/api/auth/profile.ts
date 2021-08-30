import type { NextApiRequest, NextApiResponse } from "next";

import type { ProfileRouteResponse } from "@/@types/ApiResponses";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET": {
			if (!req.cookies.accessToken || req.cookies.accessToken === "") {
				throw new Error("Not logged in");
			}
			const data: ProfileRouteResponse = await fetch(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}profile/${req.cookies.accessToken}`,
			).then((response) => {
				return response.json();
			});
			// console.log(data);

			if (!data || !data.loggedin) {
				throw new Error("Not logged in");
			}

			return res.status(200).json(data);
		}

		default: {
			res.setHeader("Allow", "GET");
			return res.status(405).end();
		}
	}
};
