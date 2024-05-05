import { authSlice } from "@/features/auth-modal";
import { draftsSlice } from "@/features/drafts-list";
import { userSlice } from "@/features/header";
import { countriesSlice } from "@/shared/stores/countries";
import { epochsSlice } from "@/shared/stores/epochs";
import { heroesSlice } from "@/shared/stores/heroes";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
    userSlice: userSlice,
    heroesSlice: heroesSlice,
    countriesSlice: countriesSlice,
    epochsSlice: epochsSlice,
    authSlice: authSlice,
    draftsSlice: draftsSlice,
});

export type RootStateInterface = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: combinedReducer,
});
