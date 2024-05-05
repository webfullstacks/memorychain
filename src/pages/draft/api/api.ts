import apiClient from "@/shared/api";
import { ApiResponse, DraftInterface, ProductInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const createDraft = async ({
    birthDate,
    countryId,
    deathDate,
    epochId,
    heroDescription,
    heroTitle,
    heroName,
}: {
    birthDate: string;
    countryId: string;
    deathDate: string;
    epochId: string;
    heroDescription: string;
    heroTitle: string;
    heroName: string;
}) => {
    const url = `/gateway/hero/draft/create`;

    try {
        const response: AxiosResponse<ApiResponse<DraftInterface>> = await apiClient.post(url, {
            birthDate,
            countryId,
            deathDate,
            epochId,
            heroDescription,
            heroTitle,
            heroName,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const getProductsList = async () => {
    const url = `/gateway/product/list`;

    try {
        const response: AxiosResponse<ApiResponse<{ products: ProductInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const createOrder = async ({
    deliveryAddress,
    heroId,
    productId,
}: {
    deliveryAddress: string;
    heroId: string;
    productId: string;
}) => {
    const url = `/gateway/order/create`;

    try {
        const response: AxiosResponse<ApiResponse<{ products: ProductInterface[] }>> = await apiClient.post(url, {
            deliveryAddress,
            heroId,
            productId,
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const draftApi = { createDraft, getProductsList, createOrder };
