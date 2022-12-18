import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { encodeToken, decodeToken } from "../../utils/auth";

export default async function UserTokenAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token`,
    headers: {
      accept: "application/json",
    },
    data: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: req.body.code,
    },
  });

  const { access_token: accessToken } = data;

  res.setHeader("Authorization", `Bearer ${encodeToken(accessToken)}`);

  return res.json({
    status: decodeToken(encodeToken(accessToken)) === accessToken,
  });
}
