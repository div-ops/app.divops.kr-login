import { GetServerSideProps } from "next";

const DOMAIN = "https://app.divops.kr";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const referer = getReferer(context.req.headers.host);

  if (referer == null) {
    return {
      props: {
        message: `[500] context.req.headers.host is ${context.req.headers.host}`,
      },
    };
  }

  return {
    redirect: {
      destination: `${DOMAIN}/login?referer=${referer}/login/test`,
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
