import { EpochInterface } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EpochsStateInterface {
    epochs: EpochInterface[];
}
const initialState: EpochsStateInterface = {
    epochs: [],
};

const epochsSlice = createSlice({
    name: "epochs",
    initialState: initialState,
    reducers: {
        setEpochsList: (state, action: PayloadAction<EpochInterface[]>) => {
            state.epochs = action.payload;
        },
    },
});

export const epochsActions = epochsSlice.actions;
export default epochsSlice.reducer;
