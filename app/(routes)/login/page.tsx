'use client';

import useLogin from "@/app/_hooks/useLogin";
import LogoTextComponent from "@/app/_component/common/logoTextComponent";
import Image from "next/image";

export default function LoginPage() {

    const { initKakaoLogin } = useLogin();

    const handleClickKakaoLoginButton = async () => {
        initKakaoLogin();
    };

    return (
        <div
            className={`flex flex-col items-center justify-between py-20 px-[24px] h-screen`}
        >
            <div
                className={`flex flex-col items-center justify-center`}
            >
                <LogoTextComponent
                    fontSize={72}
                />
                <h1>로그인</h1>
            </div>
            <div
                className={`shadow-md cursor-pointer`}
                onClick={handleClickKakaoLoginButton}
            >
                <Image
                    src={'/kakao_login_button.png'}
                    alt={'카카오 로그인 이미지'}
                    width={300}
                    height={45}
                    loading={'eager'}
                />
            </div>
        </div>
    );
}