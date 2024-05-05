import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthStateInterface {
    isShowAuthModal: boolean;
    targetPath: string | null;
}
const initialState: AuthStateInterface = {
    isShowAuthModal: false,
    targetPath: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        openAuthModal: (state, action: PayloadAction<{ targetPath: string }>) => {
            state.isShowAuthModal = true;
            state.targetPath = action.payload.targetPath;
        },
        closeAuthModal: (state) => {
            state.isShowAuthModal = false;
            state.targetPath = null;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
