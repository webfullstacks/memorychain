import { useState } from "react";

import draftApi from "../api";

const useCreateDraftHook = () => {
    const [birthDate, setBirthDate] = useState<string>("");
    const [countryId, setCountryId] = useState<string>("");
    const [deathDate, setDeathDate] = useState<string>("");
    const [epochId, setEpochId] = useState<string>("");
    const [heroDescription, setHeroDescription] = useState<string>("");
    const [heroName, setHeroName] = useState<string>("");
    const [heroTitle, setHeroTitle] = useState<string>("");

    const onCreateDraft = () => {
        draftApi.createDraft({ birthDate, countryId, deathDate, epochId, heroDescription, heroTitle, heroName });
    };

    return {
        birthDate,
        countryId,
        deathDate,
        epochId,
        heroDescription,
        heroTitle,
        heroName,
        onCreateDraft,
        setBirthDate,
        setCountryId,
        setDeathDate,
        setEpochId,
        setHeroDescription,
        setHeroName,
        setHeroTitle,
    };
};

export default useCreateDraftHook;
