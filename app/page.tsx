'use client';

import {signIn} from "next-auth/react";

export default function Home() {

  const testKakaoLogin = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
      <div>
        <button onClick={testKakaoLogin}>카카오 로그인 테스트</button>
      </div>
  );
}