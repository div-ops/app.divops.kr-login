import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CLIENT_ID = "0a82fd2fc4d4d7e7162d";

const Callback: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const code = router.query.code;

    if (code == null || Array.isArray(code)) {
      alert("잘못된 접근인데, 어떻게 오셨어요? 다시 접근해보세용!");
      setTimeout(() => {
        window.history.back();
      }, 3000);
      return;
    }

    (async () => {
      const response = await fetch("/login/api/user-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
        }),
      });

      const data = response.json();

      console.log({ data });
    })();
  }, [router]);

  return <></>;
};

export default Callback;
