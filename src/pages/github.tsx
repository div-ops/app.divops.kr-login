import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { referer } = context.req.cookies;

  if (referer != null) {
    return {
      redirect: {
        destination: referer,
        permanent: false,
      },
    };
  } else {
    return { props: {} };
  }
};

export default function IndexPage() {
  return <></>;
}
