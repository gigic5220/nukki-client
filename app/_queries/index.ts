import {mergeQueryKeys} from "@lukemorales/query-key-factory";
import nukkiImage from "@/app/_queries/nukkiImage";


export type QueryOptions = {
    isEnabled?: boolean
    isRetry?: boolean,
    isKeepPreviousData?: boolean,
    staleTime?: number
}

export type MutationOptions<RESULT> = {
    onSuccessAction?: (data: RESULT) => void
}

export const queries = mergeQueryKeys(nukkiImage);