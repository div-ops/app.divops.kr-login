import { gitHubOAuth } from "@divops/github-oauth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function CallbackApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await gitHubOAuth.callback(req, res);
}
