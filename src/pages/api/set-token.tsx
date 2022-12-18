import type { NextApiRequest, NextApiResponse } from "next";

export default async function SetToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.body?.code;

  const decoded = decodeURIComponent(code);
  const [, token] = decoded.split(" ");

  res.setHeader("Set-Cookie", `token=${token}; Path=/;`);

  return res.json({ status: true });
}
