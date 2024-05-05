import apiClient from "@/shared/api";
import { ApiResponse, UserRole } from "@/shared/types";
import { AxiosResponse } from "axios";

export const signupEmail = async ({ email, password }: { email: string; password: string }) => {
    const url = `/gateway/user/signup-email`;

    try {
        const response: AxiosResponse = await apiClient.post(url, { email, password });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const signinEmail = async ({ email, password }: { email: string; password: string }) => {
    const url = `/gateway/user/login-email`;

    try {
        const response: AxiosResponse<ApiResponse<{ token: string; role: UserRole }>> = await apiClient.post(url, {
            email,
            password,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const authApi = { signupEmail, signinEmail };
