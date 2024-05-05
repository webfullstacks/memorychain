import { User } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserStateInterface {
    user: User | undefined;
}
const initialState: UserStateInterface = {
    user: undefined,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = undefined;
        },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
