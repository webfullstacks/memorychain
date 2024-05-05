import { CountryInterface } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CountriesStateInterface {
    countries: CountryInterface[];
}
const initialState: CountriesStateInterface = {
    countries: [],
};

const countriesSlice = createSlice({
    name: "countries",
    initialState: initialState,
    reducers: {
        setCountries: (state, action: PayloadAction<CountryInterface[]>) => {
            state.countries = action.payload;
        },
    },
});

export const countriesActions = countriesSlice.actions;
export default countriesSlice.reducer;
