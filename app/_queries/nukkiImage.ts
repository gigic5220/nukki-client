import { createQueryKeys } from "@lukemorales/query-key-factory";
import {get, GetNukkiImageListParams, getList} from "@/app/_queries/queryFunction/nukkiImage";

const nukkiImage = createQueryKeys('nukkiImage', {
    list: (params: GetNukkiImageListParams) => {
        return {
            queryKey: [JSON.stringify(params)],
            queryFn: () => getList(params)
        };
    },
    detail: (id: string) => {
        return {
            queryKey: [id],
            queryFn: () => get(id)
        };
    }
});

export default nukkiImage;