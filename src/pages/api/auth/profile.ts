import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET": {
			try {
				console.log(req.cookies);
				const data = await fetch(
					`${process.env.NEXT_PUBLIC_API_BASE_URL}profile`,
					{
						method: "GET",
						mode: "cors",
						cache: "no-cache",
						credentials: "include",
					},
				).then((response) => {
					return response.json();
				});
				console.log(data);
				return res.status(200).json(data);
			} catch (error) {
				console.error(error);
				return res.status(401).end();
			}
		}

		default: {
			res.setHeader("Allow", "GET");
			return res.status(405).end();
		}
	}
};
