import apiClient from "@/shared/api";
import { ApiResponse, User } from "@/shared/types";
import { AxiosResponse } from "axios";

const getMe = async () => {
    const url = `/gateway/user/me`;

    try {
        const response: AxiosResponse<ApiResponse<{ userDto: User }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const userApi = { getMe };
