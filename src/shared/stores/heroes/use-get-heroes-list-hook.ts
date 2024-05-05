import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { HeroSearchParams } from "@/shared/types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { heroesActions } from ".";
import { heroesApi } from "./api";

const useGetHeroesListHook = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const birthDate = searchParams.get(HeroSearchParams.birthDate);
    const countryId = searchParams.get(HeroSearchParams.countryId);
    const deathDate = searchParams.get(HeroSearchParams.deathDate);
    const epochId = searchParams.get(HeroSearchParams.epochId);
    const name = searchParams.get(HeroSearchParams.name);
    const title = searchParams.get(HeroSearchParams.title);

    const { heroes } = useAppSelector((state) => state.heroesSlice);

    useEffect(() => {
        heroesApi.getHeroesList({ birthDate, countryId, deathDate, epochId, name, title }).then((res) => {
            dispatch(heroesActions.setHeroes(res.heroes));
        });
    }, [birthDate, countryId, deathDate, dispatch, epochId, name, title]);

    return { heroes };
};

export default useGetHeroesListHook;
