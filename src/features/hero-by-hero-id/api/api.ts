import apiClient from "@/shared/api";
import { ApiResponse, HeroInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getHeroById = async ({ heroId }: { heroId: string }) => {
    const url = `/gateway/hero/get?heroId=${heroId}`;

    try {
        const response: AxiosResponse<ApiResponse<{ heroDto: HeroInterface }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const heroApi = { getHeroById };
