import { useState } from "react";

const useAddPhotoFileHook = () => {
    const [heroId, setHeroId] = useState<string>("");

    return { heroId, setHeroId };
};

export default useAddPhotoFileHook;
