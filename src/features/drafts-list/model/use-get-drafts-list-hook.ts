import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { useEffect } from "react";

import draftsApi from "../api";
import { draftsActions } from "./drafts-slice";

const useGetDraftsListHook = () => {
    const dispatch = useAppDispatch();

    const { user } = useAppSelector((state) => state.userSlice);
    const { heroes } = useAppSelector((state) => state.heroesSlice);

    useEffect(() => {
        if (user) {
            draftsApi.getDraftsList({ userId: user.userId }).then((res) => {
                dispatch(draftsActions.setDrafts(res.heroDraftDto));
            });
        }
    }, [dispatch, user]);

    return { heroes };
};

export default useGetDraftsListHook;
