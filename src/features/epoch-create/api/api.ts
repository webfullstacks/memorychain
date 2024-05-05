import apiClient from "@/shared/api";
import { ApiResponse, EpochInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getEpochsList = async () => {
    const url = `/gateway/epoch/create`;

    // var data = {
    //     "title": "Award 1",
    //     "description": "Award 1 description"
    // }

    // var data = {
    //     "email": "asdf__11",
    //     "password": "asdf__11",
    //     "system": "DESKTOP"
    // }

    // {
    //     "email": "asdf__11",
    //     "password": "asdf__11"
    // }

    try {
        const response: AxiosResponse<ApiResponse<{ epochs: EpochInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

const createEpoch = async ({ file, title, description }: { file?: File; title: string; description: string }) => {
    const url = `/gateway/epoch/create`;

    try {
        const formData = new FormData();
        formData.append("iconFile", file ?? new Blob());
        formData.append(
            "request",
            new Blob([JSON.stringify({ title: title, description: description })], {
                type: "application/json",
            }),
        );

        const response = await apiClient.post(url, formData);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const epochsApi = { getEpochsList, createEpoch };
