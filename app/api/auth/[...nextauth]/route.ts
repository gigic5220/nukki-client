import NextAuth, {Account, Session, User} from "next-auth"
import KakaoProvider from "next-auth/providers/kakao";
import {JWT} from "next-auth/jwt";
import type { NextAuthOptions } from "next-auth"
import {ApiResponse, TokenInfoWithMember} from "@/app/_type/common";
const getRefreshedAccessToken = async (refreshToken: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}` + '/auth/token/refresh',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    refreshToken: refreshToken
                }
            )
        }
    )
    const jsonResponse = await response.json()
    if (jsonResponse.statusCode !== 200) {
        throw new Error(jsonResponse.message)
    }
    return jsonResponse;
}
export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!
        })
    ],
    session: {
        maxAge: 24 * 60 * 60, // 24 hours in seconds
    },
    callbacks: {
        async jwt({ user, account, token }: { user?: User; account?: Account | null; token: JWT }) {
            if (!!user?.email && !!account?.provider) {
                let socialAccount = '';
                if (account.provider === 'kakao') {
                    socialAccount = user.email;
                }
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        socialAccount: socialAccount,
                        provider: account.provider
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const { data: tokenInfoWithMember } = await response.json() as ApiResponse<TokenInfoWithMember>
                token.accessToken = tokenInfoWithMember.accessToken;
                token.refreshToken = tokenInfoWithMember.refreshToken;
                token.accessTokenExpires = tokenInfoWithMember.accessTokenExpires;
                token.member = tokenInfoWithMember.member;
            }
            if (new Date().getTime() > token.accessTokenExpires) {
                try {
                    const response = await getRefreshedAccessToken(token.refreshToken)
                    if (response?.data?.accessToken != null) token.accessToken = response.data.accessToken
                } catch (e) {
                    throw new Error(`Redirecting to sign out. Failed refresh token. ${e}`);
                }
            }
            return token;
        },
        async session({session , token} : {session: Session, token: JWT}) {
            session.member = token.member;
            session.accessToken = token.accessToken;
            session.accessTokenExpires = token.accessTokenExpires;
            session.refreshToken = token.refreshToken;
            return session;
        }
    }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }