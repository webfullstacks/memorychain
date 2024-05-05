import apiClient from "@/shared/api";
import { ApiResponse, EpochInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getEpochsList = async () => {
    const url = `/gateway/epoch/list`;

    try {
        const response: AxiosResponse<ApiResponse<{ epochs: EpochInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const epochsApi = { getEpochsList };
