import {withAuth} from "next-auth/middleware"
import {NextRequest, NextResponse} from "next/server";

const addCustomHeaders = (request: NextRequest): NextResponse => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export default withAuth(
    addCustomHeaders,
    {
        callbacks: {
            authorized: ({token}): boolean => {
                return token != null;
            },
        },
        pages: {
            signIn: '/login',
        },
    },
)

export const config = {
    matcher: ['/my/:path*'],
};