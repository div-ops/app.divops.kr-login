import { gitHubOAuth } from "@divops/github-oauth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function CallbackApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers);
  console.log(req.cookies);
  if (req.cookies?.["github-oauth"] != null) {
    res.setHeader(
      "debug-github-oauth",
      `github-oauth=${req.cookies?.["github-oauth"]}; Path=/; HttpOnly; Secure; SameSite=None;`
    );
  }

  if (req.cookies?.["referer"] != null) {
    res.setHeader(
      "debug-referer",
      `referer=${req.cookies?.["referer"]}; Path=/; HttpOnly; Secure; SameSite=None;`
    );
  }

  if (req.cookies?.["github-oauth"] != null) {
    res.setHeader(
      "Set-Cookie",
      `github-oauth=${req.cookies?.["github-oauth"]}; Path=/; HttpOnly; Secure; SameSite=None;`
    );
    res.setHeader(
      "Set-Cookie",
      `referer=${req.cookies?.["referer"]}; Path=/; HttpOnly; Secure; SameSite=None;`
    );
  }

  return await gitHubOAuth.callback(req, res);
}
