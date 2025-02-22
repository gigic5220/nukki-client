import {ReactNode} from "react";
import CommonLayoutComponent from "@/app/_component/common/commonLayoutComponent";

export default function LayoutComponent({children}: Readonly<{children: ReactNode}>) {
    return (
        <CommonLayoutComponent
            isShowBottomNavigation={false}
        >
            {children}
        </CommonLayoutComponent>
    );
}