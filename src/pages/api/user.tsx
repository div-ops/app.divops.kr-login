import { createGitHubOAuth } from "@divops/github-oauth";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function UserApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gitHubOAuth = await createGitHubOAuth({ name: "app-divops-kr" });
  const githubOauth = await gitHubOAuth.findGitHubToken(req);

  if (!githubOauth) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { data } = await axios("https://api.github.com/user", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${githubOauth}`,
      },
    });

    return res.json({ data });
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
