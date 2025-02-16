import {keepPreviousData, useMutation, useQuery} from "@tanstack/react-query";
import {MutationOptions, queries, QueryOptions} from "@/app/_queries";
import {GetNukkiImageListParams, post} from "@/app/_queries/queryFunction/nukkiImage";
import {NukkiImage} from "@/app/_type/model/nukkiImage";

export const useNukkiImageListQuery = (getNukkiImageListParams: GetNukkiImageListParams, queryOptions: QueryOptions) => {
    const {
        isEnabled,
        isRetry = false,
        isKeepPreviousData,
        staleTime
    } = queryOptions;
    return useQuery({
        ...queries.nukkiImage.list(getNukkiImageListParams),
        enabled: isEnabled,
        retry: isRetry,
        placeholderData: isKeepPreviousData ? keepPreviousData : undefined,
        staleTime: staleTime
    });
};

export const useNukkiImageQuery = (id: string, queryOptions: QueryOptions) => {

    const {
        isEnabled,
        isRetry = false,
        isKeepPreviousData,
        staleTime
    } = queryOptions;

    return useQuery({
        ...queries.nukkiImage.detail(id),
        enabled: isEnabled,
        retry: isRetry,
        placeholderData: isKeepPreviousData ? keepPreviousData : undefined,
        staleTime: staleTime
    });
};

export const usePostNukkiImageMutation = (mutationOptions?: MutationOptions<NukkiImage>) => {
    return useMutation({
        mutationFn: (formData: FormData) => {
            return post(formData);
        },
        onSuccess: (data: NukkiImage) => {
            mutationOptions?.onSuccessAction?.(data);
        }
    })
}

/*
export const usePutNukkiImageMutation = (mutationOptions?: MutationOptions<NukkiImage>) => {
    return useMutation({
        mutationFn: (dto: UpdateNukkiImageDto) => put(dto),
        onSuccess: (data: NukkiImage) => {
            mutationOptions?.onSuccessAction?.(data);
        }
    })
}

export const useDeleteNukkiImageMutation = (mutationOptions?: MutationOptions<NukkiImage>) => {
    return useMutation({
        mutationFn: (id: string) => deleteNukkiImage(id),
        onSuccess: (data: NukkiImage) => {
            mutationOptions?.onSuccessAction?.(data);
        }
    })
}
*/
