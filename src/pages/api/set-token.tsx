import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export default async function SetToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: ["https://www.creco.services", "http://localhost:3000"],
    optionsSuccessStatus: 200,
  });

  const code = req.body?.code;

  const decoded = decodeURIComponent(code);
  const [, token] = decoded.split(" ");

  res.setHeader("Set-Cookie", `token=${token}; Path=/;`);

  return res.json({ status: true });
}
