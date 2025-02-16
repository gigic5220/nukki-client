import {useState} from "react";
import {QueryOptions} from "@/app/_queries";
import {GetNukkiImageListParams} from "@/app/_queries/queryFunction/nukkiImage";
import {useNukkiImageListQuery} from "@/app/_queries/hooks/nukkiImage";

type useNukkiImageListViewModelProps = {
    initialGetNukkiImageListParams: GetNukkiImageListParams,
    queryOptions?: QueryOptions
}

const useNukkiImageListViewModel = ({initialGetNukkiImageListParams, queryOptions}:  useNukkiImageListViewModelProps) => {
    const [getNukkiImageListParams, setGetNukkiImageListParams] = useState<GetNukkiImageListParams>(initialGetNukkiImageListParams);

    const onChangeGetNukkiImageListParams = (updatedGetNukkiImageListParams: GetNukkiImageListParams) => {
        setGetNukkiImageListParams(updatedGetNukkiImageListParams);
    }

    const {
        data,
        isFetching
    } = useNukkiImageListQuery(
        getNukkiImageListParams,
        {
            isKeepPreviousData: true,
            isRetry: false,
            staleTime: queryOptions?.staleTime
        }
    );

    return {
        nukkiImageList: data?.content,
        isLoadingNukkiImageList: isFetching,
        getNukkiImageListParams,
        onChangeGetNukkiImageListParams,
        totalCounts: data?.totalElements,
        totalPageCounts: data?.totalPages,
        currentPageNumber: data?.number
    }
}

export default useNukkiImageListViewModel;