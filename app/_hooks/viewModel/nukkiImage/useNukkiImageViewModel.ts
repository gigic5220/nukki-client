import {useNukkiImageQuery} from "@/app/_queries/hooks/nukkiImage";

const useNukkiImageViewModel = (id: string | undefined) => {

    const { data } = useNukkiImageQuery(
        id ?? '',
        {
            isEnabled: !!id,
            isKeepPreviousData: true,
            isRetry: false
        }
    );

    return {
        nukkiImage: data
    }
}

export default useNukkiImageViewModel;