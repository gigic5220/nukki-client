import {ReactNode} from "react";
import HeaderComponent from "@/app/_component/layout/headerComponent";
import BottomNavigationComponent from "@/app/_component/layout/bottomNavigationComponent";

export default function CommonLayoutComponent({children}: Readonly<{children: ReactNode}>) {
    return (
        <div
            className={'grid grid-rows-[60px_1fr_60px] h-screen overflow-hidden'}
        >
            <HeaderComponent/>
            <div
                className={'overflow-y-auto flex-1 overscroll-x-none'}
            >
                {children}
            </div>
            <BottomNavigationComponent/>
        </div>
    );
}