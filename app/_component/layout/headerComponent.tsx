"use client";

import LogoTextComponent from "@/app/_component/common/logoTextComponent";

export default function HeaderComponent() {
    return <div
        className={'h-[60px]'}
    >
        <div
            className={'grid grid-cols-[150px_1fr_200px] fixed top-0 w-full h-[60px] items-center px-[24px]'}
        >
            <div>
                <LogoTextComponent/>
            </div>
        </div>
    </div>

}