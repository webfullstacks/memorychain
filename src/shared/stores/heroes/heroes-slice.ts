import { HeroInterface } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HeroesStateInterface {
    heroes: HeroInterface[];
}
const initialState: HeroesStateInterface = {
    heroes: [],
};

const heroesSlice = createSlice({
    name: "heroes",
    initialState: initialState,
    reducers: {
        setHeroes: (state, action: PayloadAction<HeroInterface[]>) => {
            state.heroes = action.payload;
        },
    },
});

export const heroesActions = heroesSlice.actions;
export default heroesSlice.reducer;
