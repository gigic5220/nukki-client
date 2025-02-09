"use client";

import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {QueryClientProvider} from "@tanstack/react-query";
import getQueryClient from "@/app/getQueryClient";

type AppWrapperComponentProps = {
    children: ReactNode
}

const AppWrapperComponent = ({children}: AppWrapperComponentProps) => {
    const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>
        <SessionProvider>
            {children}
        </SessionProvider>
    </QueryClientProvider>
}

export default AppWrapperComponent;