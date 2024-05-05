import apiClient from "@/shared/api";
import { ApiResponse, CountryInterface } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getCountriesList = async () => {
    const url = `/gateway/country/list`;

    try {
        const response: AxiosResponse<ApiResponse<{ countries: CountryInterface[] }>> = await apiClient.post(url);

        return response.data.data;
    } catch (error) {
        throw new Error(`${url} ErrorRequest: ${error}`);
    }
};

export const countryApi = { getCountriesList };
