"use client";

import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {QueryClientProvider} from "@tanstack/react-query";
import getQueryClient from "@/app/getQueryClient";

type AppWrapperClientComponentProps = {
    children: ReactNode
}

const AppWrapperClientComponent = ({children}: AppWrapperClientComponentProps) => {
    const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>
        <SessionProvider>
            {children}
        </SessionProvider>
    </QueryClientProvider>
}

export default AppWrapperClientComponent;