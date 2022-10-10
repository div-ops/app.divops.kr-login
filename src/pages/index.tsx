import { gitHubOAuth } from "@divops/github-oauth";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return gitHubOAuth.redirectToGitHubAuthPage(context.req, context.res);
};

export default () => {
  return <></>;
};
