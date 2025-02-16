import { ApiResponse } from "@/app/_type/common";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const API_ROUTES = {
    NUKKI_IMAGE: "/nukki-image",
}

export const API_VERSION = '/api/v1'

const API_HOST = process.env.NEXT_PUBLIC_SERVER_HOST;

const HEADERS = {
    "Content-Type": "application/json",
};

/**
 * 공통 API 요청 함수
 * @param {string} method - HTTP 메서드 (GET, POST, PUT, DELETE)
 * @param {string} path - API 경로
 * @param {object} [options] - 요청 옵션 (params, body, headers)
 * @returns {Promise<ApiResponse<T>>} - 서버 응답 Promise
 */
const request = async <Result, Params>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    options: {
        params?: Params;
        body?: Params | FormData;
        headers?: Record<string, string>
    } = {}
): Promise<ApiResponse<Result>> => {

    const { params = {}, body, headers = {} } = options;

    let accessToken: string | undefined;

    if (typeof window !== "undefined") {
        const session = await getSession();
        accessToken = session?.accessToken;
    } else {
        const session = await getServerSession(authOptions);
        accessToken = session?.accessToken;
    }

    const url = `${API_HOST}${API_VERSION}${path}${!!params ? `?${getQueryString(params)}` : ""}`;

    // FormData 여부 체크
    const isFormData = body instanceof FormData;

    try {
        const response = await fetch(url, {
            method,
            headers: {
                ...(isFormData ? {} : HEADERS),
                ...headers,
                ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
                ...(isFormData ? {} : { "Content-Type": "application/json" })
            },
            body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
        });

        return handleResponse<Result>(response);
    } catch (error) {
        console.error(`${method} Request Error:`, error);
        throw error;
    }
};

export const api = {
    get: <Result, Params>(path: string, params?: Params, headers?: Record<string, string>) =>
        request<Result, Params>("GET", path, { params, headers }),

    post: <Result, Params>(path: string, body: Params | FormData, headers?: Record<string, string>) =>
        request<Result, Params>("POST", path, { body, headers }),

    put: <Result, Params>(path: string, body: Params | FormData, headers?: Record<string, string>) =>
        request<Result, Params>("PUT", path, { body, headers }),

    delete: <Result, Params>(path: string, headers?: Record<string, string>) =>
        request<Result, Params>("DELETE", path, { headers }),
};

/**
 * 공통 응답 처리 함수
 * @param {Response} response - fetch API 응답 객체
 * @returns {Promise<ApiResponse<T>>} - JSON 또는 오류 반환
 */
const handleResponse = async <Result>(response: Response): Promise<ApiResponse<Result>> => {
    if (response.ok) {
        return (await response.json()) as ApiResponse<Result>;
    } else {
        const error = await response.json();
        throw new Error(error.message || "API Error");
    }
};

/**
 * 쿼리 파라미터 객체를 쿼리 문자열로 변환
 * @param {Record<string, any>} params - 쿼리 파라미터 객체
 * @returns {string} - URLSearchParams 문자열
 */
const getQueryString = (params: Record<string, string | string[] | boolean | number | null>) => {
    return new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
            if (Array.isArray(value)) {
                acc[key] = value.join(",");
            } else if (value !== null && value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {} as Record<string, string>)
    ).toString();
};
