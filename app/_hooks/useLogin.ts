import {signIn} from "next-auth/react";

export default function useLogin() {

    const initKakaoLogin = () => {
        signIn("kakao", {
            redirect: true,
            callbackUrl: "/",
        });
    }

    return {
        initKakaoLogin,
    }

}