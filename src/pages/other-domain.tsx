import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.headers);
  return {
    redirect: {
      destination:
        "http://localhost:3000/login?referer=https://app.divops.kr/login/test",
      permanent: false,
    },
  };
};

export default function IndexPage() {
  return <></>;
}
