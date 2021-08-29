import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET": {
			const accessToken = req.query.accessToken as string;
			if (!accessToken) {
				return res.status(400).end();
			}

			res.setHeader("Set-Cookie", [
				serialize("accessToken", accessToken, {
					maxAge: 3600,
					// secure: true,
					path: "/",
					sameSite: true,
					// httpOnly: true,
				}),
				serialize("g7LoggedIn", "1", {
					maxAge: 3600,
					// secure: true,
					path: "/",
					sameSite: true,
				}),
			]);

			return res.redirect("/profil");
		}

		default: {
			res.setHeader("Allow", "GET");
			return res.status(405).end();
		}
	}
};
