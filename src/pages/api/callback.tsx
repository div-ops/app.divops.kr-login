import { createGitHubOAuth } from "@divops/github-oauth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function CallbackApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gitHubOAuth = await createGitHubOAuth({ name: "app-divops-kr" });
  console.log(req.headers);
  console.log(req.cookies);

  const referer = req.cookies?.referer;

  console.log(
    "in https://app.divops.kr/callback",
    "req.cookies?.referer",
    referer
  );

  if (req.cookies?.["github-oauth"] != null) {
    res.setHeader(
      "debug-github-oauth",
      `github-oauth=${req.cookies?.["github-oauth"]}; Path=/;`
    );
  }

  if (req.cookies?.["referer"] != null) {
    res.setHeader("debug-referer", `referer=${referer}; Path=/; `);
  }

  if (req.cookies?.["github-oauth"] != null) {
    res.setHeader(
      "Set-Cookie",
      `github-oauth=${req.cookies?.["github-oauth"]}; Path=/;`
    );
    res.setHeader("Set-Cookie", `referer=${referer}; Path=/;`);
  }

  return await gitHubOAuth.callback(req, res);
}
