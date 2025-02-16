import "next-auth/jwt";
import {Member} from "@/app/_type/model/member";
declare module "next-auth" {
    interface User {
        data: {
            accessToken: string;
            refreshToken: string;
            accessTokenExpires: number;
            member: Member;
        };
    }
    interface Session {
        accessToken?: string;
        accessTokenExpires: number;
        refreshToken?: string;
        member: Member;
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        accessTokenExpires: number;
        member: Member;
        error?: string;
    }
}