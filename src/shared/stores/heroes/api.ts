import apiClient from "@/shared/api";
import { ApiResponse, HeroInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getHeroesList = async ({
    birthDate,
    countryId,
    deathDate,
    epochId,
    name,
    title,
    pageNum,
    pageSize,
}: {
    birthDate?: string | null;
    countryId?: string | null;
    deathDate?: string | null;
    epochId?: string | null;
    name?: string | null;
    title?: string | null;
    pageNum?: number;
    pageSize?: number;
}) => {
    const url = `/gateway/hero/list`;

    try {
        const response: AxiosResponse<ApiResponse<{ heroes: HeroInterface[] }>> = await apiClient.post(url, {
            birthDate: birthDate ?? undefined,
            countryId: countryId ?? undefined,
            deathDate: deathDate ?? undefined,
            epochId: epochId ?? undefined,
            name: name ?? undefined,
            title: title ?? undefined,
            pageNum,
            pageSize,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const heroesApi = { getHeroesList };
