import {ReactNode} from "react";
import HeaderComponent from "@/app/_component/layout/headerComponent";
import BottomNavigationComponent from "@/app/_component/layout/bottomNavigationComponent";

export default function CommonLayoutComponent({children}: Readonly<{children: ReactNode}>) {
    return (
        <>
            <HeaderComponent/>
                {children}
            <BottomNavigationComponent/>
        </>
    );
}