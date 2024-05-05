import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // config.headers.set("x-api-key", "Key MjUxMzg4MGFjZGY4NTJjNmE0MWQ5YWYw");
    config.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(JSON.stringify(error));
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
