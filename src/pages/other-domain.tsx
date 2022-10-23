import { GetServerSideProps } from "next";

// const DOMAIN = "http://localhost:3000";

const DOMAIN = "https://app.divops.kr";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { referer } = context.req?.headers || {};

  console.log("in /other-domain", "context.req?.headers", referer);

  if (referer == null) {
    return {
      props: {
        message: `[500] context.req.headers.host is ${context.req.headers?.referer}`,
      },
    };
  }

  return {
    redirect: {
      destination: `${DOMAIN}/login?referer=${referer}`,
      permanent: false,
    },
  };
};

export default function IndexPage({ message }: { message: string }) {
  return <>{message}</>;
}

function getReferer(host?: string) {
  if (host == null || host.trim() === "") {
    return null;
  }

  switch (host) {
    case "localhost:3000": {
      return `http://${host}`;
    }
    default: {
      return `https://${host}`;
    }
  }
}
