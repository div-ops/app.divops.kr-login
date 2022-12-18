import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CLIENT_ID = "0a82fd2fc4d4d7e7162d";

const TestLogin: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const referrer = router.query.referrer;

    if (referrer == null || Array.isArray(referrer)) {
      alert("잘못된 접근인데, 어떻게 오셨어요? 다시 접근해보세용!");
      setTimeout(() => {
        window.history.back();
      }, 3000);
      return;
    }

    localStorage.setItem("referrer", referrer);

    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  }, [router]);

  return <></>;
};

export default TestLogin;
