import {ReactNode} from "react";
import HeaderComponent from "@/app/_component/layout/headerComponent";
import BottomNavigationComponent from "@/app/_component/layout/bottomNavigationComponent";

type CommonLayoutComponentProps = {
    children: ReactNode,
    isShowBottomNavigation?: boolean
}

export default function CommonLayoutComponent({children, isShowBottomNavigation}: CommonLayoutComponentProps) {
    return (
        <div
            className={`grid ${isShowBottomNavigation ? 'grid-rows-[60px_1fr_60px]' : 'grid-rows-[60px_1fr]'} h-screen overflow-hidden`}
        >
            <HeaderComponent/>
            <div
                className={'overflow-y-auto flex-1 overscroll-x-none'}
            >
                {children}
            </div>
            {
                isShowBottomNavigation && <BottomNavigationComponent/>
            }
        </div>
    );
}