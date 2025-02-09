import type {Metadata, Viewport} from "next";
import "../globals.css";
import AppWrapperClientComponent from "@/app/_component/common/appWrapperComponent";
import localFont from "next/font/local";
import {ReactNode} from "react";

const pretendard = localFont({
    src: "../../public/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
});

export const metadata: Metadata = {
    title: "Nukki",
    description: "Nukki - Mobile Web App"
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayoutComponent({children}: Readonly<{children: ReactNode}>) {
    return (
        <html
            lang="en"
            className={`${pretendard.variable}`}
        >
            <AppWrapperClientComponent>
                <body
                    className={`${pretendard.className} max-w-[430px] scrollbar_hidden`}
                >
                    {children}
                </body>
            </AppWrapperClientComponent>
        </html>
    );
}