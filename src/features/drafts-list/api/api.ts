import apiClient from "@/shared/api";
import { ApiResponse, DraftInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getDraftsList = async ({ userId }: { userId: string }) => {
    const url = `/gateway/hero/draft/list?userId=${userId}`;

    try {
        const response: AxiosResponse<ApiResponse<{ heroDraftDto: DraftInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const draftsApi = { getDraftsList };
