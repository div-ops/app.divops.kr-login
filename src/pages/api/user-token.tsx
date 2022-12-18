import type { NextApiRequest, NextApiResponse } from "next";

export default async function UserTokenAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);

  return res.json(req.query);
}
