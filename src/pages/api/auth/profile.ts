import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET": {
			try {
				console.log(req.cookies, `JSESSIONID=${req.cookies.JSESSIONID};`);

				const data = await fetch(
					`${process.env.NEXT_PUBLIC_API_BASE_URL}profile`,
					{
						headers: {
							cookie: `JSESSIONID=F042895EAD2ABF32466392ED62A9E29A;`,
						},
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
