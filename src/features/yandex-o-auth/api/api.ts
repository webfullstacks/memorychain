import apiClient from "@/shared/api";
import { ApiResponse, UserRole } from "@/shared/types";
import { AxiosResponse } from "axios";

export const yandexOAuthLogin = async ({ yandexUserToken }: { yandexUserToken: string }) => {
    const url = `/gateway/user/login-yandex?yandexUserToken=${yandexUserToken}`;

    try {
        const response: AxiosResponse<ApiResponse<{ token: string; role: UserRole }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const yandexOAuthSignup = async ({ yandexUserToken }: { yandexUserToken: string }) => {
    const url = `/gateway/user/signup-yandex?yandexUserToken=${yandexUserToken}`;

    try {
        const response: AxiosResponse<ApiResponse<{ token: string; role: UserRole }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};
