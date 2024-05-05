import { routes } from "@/shared/config";
import { useGetEpochsListHook } from "@/shared/stores/epochs";
import { HeroSearchParams } from "@/shared/types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardInterface } from "../types";

const useGetEpochCardsListHook = () => {
    const navigate = useNavigate();

    const [epochCardsList, setEpochCardsList] = useState<CardInterface[]>([]);

    const { epochs } = useGetEpochsListHook();

    useMemo(() => {
        const cardsList: CardInterface[] = epochs.map((epochItem) => {
            return {
                epochId: epochItem.id,
                cardName: "Герои",
                cardTitle: epochItem.title,
                cardLink: epochItem.id,
                cardImageUrl: epochItem.iconId,
            };
        });

        setEpochCardsList(cardsList);
    }, [epochs]);

    const handleClickOnEpoch = (epochId: string | undefined) => {
        if (epochId) {
            navigate(`${routes.heroes}?${HeroSearchParams.epochId}=${epochId}`);
        }
    };

    return { epochCardsList, handleClickOnEpoch };
};

export default useGetEpochCardsListHook;
