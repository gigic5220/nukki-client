import {Member} from "@/app/_type/model/member";

export type CommonCssProps = {
    className?: string
    width?: number
    height?: number
    fontSize?: number
}

export type TailwindCssProperty = {
    [key: number]: string
}

export type ApiResponse<T> = {
    data: T
    message: string
    statusCode: number
    success: boolean
}

export type ListResponse<T> = {
    content: T,
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: Pageable
    size: number
    sort: Sort
    totalElements: number
    totalPages: number
}

type Pageable = {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: Sort
    unpaged: boolean
}

type Sort = {
    empty: boolean
    sorted: boolean
    unsorted: boolean
}

export type TokenInfoWithMember = {
    accessToken: string
    accessTokenExpires: number
    refreshToken: string
    member: Member
}

export interface CommonListParams {
    page: number
    pageSize: number
    sort?: string
}

