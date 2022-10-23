import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Set-Cookie",
    `referer=https://app.divops.kr/login/test; Path=/; HttpOnly; Secure; SameSite=None;`
  );

  return {
    redirect: {
      destination: "http://localhost:3000/login",
      permanent: false,
    },
  };
};

export default function IndexPage() {
  return <></>;
}
