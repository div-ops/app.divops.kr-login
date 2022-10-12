import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onClick = async () => {
    try {
      const { data } = await axios("api/user");
      console.log(data);
    } catch (error: unknown) {
      if ((error as { message: string }).message.includes("401")) {
        router.push("./");
      }
    }
  };
  return (
    <div>
      <Head>
        <title>Hello world!</title>
      </Head>

      <main>
        <h1>hello world!</h1>
        <a href="./">로그인</a>
        <a href="api/user">테스트</a>
        <button onClick={onClick}>API test</button>
      </main>
    </div>
  );
};

export default Home;
