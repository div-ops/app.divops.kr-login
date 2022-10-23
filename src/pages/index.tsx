import { gitHubOAuth } from "@divops/github-oauth";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { referer } = context.query || {};

  console.log(
    "in https://app.divops.kr/login",
    "context.query?.referer",
    referer
  );

  context.res.setHeader(
    "Set-Cookie",
    `referer=${referer}; Path=/; HttpOnly; Secure; SameSite=None;`
  );

  return gitHubOAuth.redirectToGitHubAuthPage(context.req, context.res);
};

export default function IndexPage() {
  return <></>;
}
