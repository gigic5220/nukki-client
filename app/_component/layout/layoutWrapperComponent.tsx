"use client";

import {ReactNode} from "react";
import BottomNavigationComponent from "@/app/_component/layout/bottomNavigationComponent";
import HeaderComponent from "@/app/_component/layout/headerComponent";

type LayoutWrapperComponentProps = {
    children: ReactNode
}

export default function LayoutWrapperComponent({children}: LayoutWrapperComponentProps) {
    return <div>
        <HeaderComponent/>
            {children}
        <BottomNavigationComponent/>
    </div>
}