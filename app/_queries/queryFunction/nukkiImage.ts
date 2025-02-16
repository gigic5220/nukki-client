import {ListResponse, CommonListParams} from "@/app/_type/common";
import {api, API_ROUTES} from "@/app/api";
import {NukkiImage} from "@/app/_type/model/nukkiImage";

export interface GetNukkiImageListParams extends CommonListParams {
    appType: string
    expireType: string[]
}

export const getList = async (params: CommonListParams): Promise<ListResponse<NukkiImage[]>> => {
    const { data } = await api.get<ListResponse<NukkiImage[]>, CommonListParams>(API_ROUTES.NUKKI_IMAGE, params);
    return data;
};

export const get = async (id: string): Promise<NukkiImage> => {
    const { data } = await api.get<NukkiImage, string>(`${API_ROUTES.NUKKI_IMAGE}/${id}`);

    return data;
};

export const post = async (formData: FormData): Promise<NukkiImage> => {
    const { data } = await api.post<NukkiImage, FormData>(API_ROUTES.NUKKI_IMAGE, formData);
    return data;
};

/*
export const put = async (dto: UpdateNukkiImageDto): Promise<NukkiImage> => {
    const { data } = await api.put<NukkiImage, UpdateNukkiImageDto>('/API_ROUTES.NUKKI_IMAGE', dto);
    return data;
};

export const deleteNukkiImage = async (id: string): Promise<NukkiImage> => {
    const { data } = await api.delete<NukkiImage, UpdateNukkiImageDto>(`/API_ROUTES.NUKKI_IMAGE/${id}`);
    return data;
};*/
