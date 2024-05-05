import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { useEffect } from "react";

import { countryApi } from "./api";
import { countriesActions } from "./country-slice";

const useGetCountriesHook = () => {
    const dispatch = useAppDispatch();

    const { countries } = useAppSelector((state) => state.countriesSlice);

    useEffect(() => {
        if (!countries.length) {
            countryApi.getCountriesList().then((res) => {
                dispatch(countriesActions.setCountries(res.countries));
            });
        }
    }, [countries.length, dispatch]);

    return { countries };
};

export default useGetCountriesHook;
