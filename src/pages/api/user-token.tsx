import type { NextApiRequest, NextApiResponse } from "next";
import { createGitHubOAuth } from "@divops/github-oauth";

export default async function UserTokenAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gitHubOAuth = await createGitHubOAuth({ name: "app-divops-kr" });

  const authorization = await gitHubOAuth.loginOauthAccessToken(req.body.code);

  res.setHeader("Authorization", `Bearer ${authorization}`);

  return res.json({ status: true });
}
