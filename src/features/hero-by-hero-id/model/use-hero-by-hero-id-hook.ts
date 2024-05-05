import { useGetEpochsListHook } from "@/shared/stores/epochs";
import { HeroInterface } from "@/shared/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import heroApi from "../api";

const useHeroByHeroIdHook = () => {
    const [hero, setHero] = useState<HeroInterface | null>(null);
    const [epochName, setEpochName] = useState<string>("");

    const { heroId } = useParams();

    const { epochs } = useGetEpochsListHook();

    useEffect(() => {
        if (heroId) {
            heroApi.getHeroById({ heroId }).then((res) => {
                setHero(res.heroDto);
            });
        }
    }, [heroId]);

    useEffect(() => {
        if (epochs.length && hero) {
            const findEpoch = epochs.find((item) => item.id === hero.epochId);

            if (findEpoch) {
                setEpochName(findEpoch.title);
            }
        }
    }, [epochs, hero]);

    return { hero, epochName };
};

export default useHeroByHeroIdHook;
