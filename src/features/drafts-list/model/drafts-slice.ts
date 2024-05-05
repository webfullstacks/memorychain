import { DraftInterface } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DraftsStateInterface {
    drafts: DraftInterface[];
}
const initialState: DraftsStateInterface = {
    drafts: [],
};

const draftsSlice = createSlice({
    name: "drafts",
    initialState: initialState,
    reducers: {
        setDrafts: (state, action: PayloadAction<DraftInterface[]>) => {
            state.drafts = action.payload;
        },
    },
});

export const draftsActions = draftsSlice.actions;
export default draftsSlice.reducer;
