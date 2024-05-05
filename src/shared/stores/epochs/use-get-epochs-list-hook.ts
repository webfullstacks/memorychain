import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { useEffect } from "react";

import { epochsApi } from "./api";
import { epochsActions } from "./epochs-slice";

const useGetEpochsListHook = () => {
    const dispatch = useAppDispatch();

    const { epochs } = useAppSelector((state) => state.epochsSlice);

    useEffect(() => {
        // Запрашиваю список эпох только в том случе, если он не сохранен
        // Если прямо сейчас на бэк добавят новое значение - оно не отрисуется
        if (!epochs.length) {
            epochsApi.getEpochsList().then((res) => {
                dispatch(epochsActions.setEpochsList(res.epochs));
            });
        }
    }, [dispatch, epochs.length]);

    return { epochs };
};

export default useGetEpochsListHook;
