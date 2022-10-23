import { gitHubOAuth } from "@divops/github-oauth";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return gitHubOAuth.redirectToGitHubAuthPage(context.req, context.res);
  // context.res.setHeader(
  //   "Set-Cookie",
  //   `referer=http://localhost:3000/login/test; Path=/; HttpOnly; Secure; SameSite=None;`
  // );

  // return {
  //   redirect: {
  //     destination: "https://app.divops.kr/login",
  //     permanent: false,
  //   },
  // };
};

export default function IndexPage() {
  return <></>;
}
