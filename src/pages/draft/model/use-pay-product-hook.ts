import { useState } from "react";

import draftApi from "../api";

const usePayProductHook = () => {
    const [heroId, setHeroId] = useState<string>("");
    const [productId, setProductId] = useState<string>("");

    const handleGetProductsList = () => {
        draftApi.getProductsList().then((res) => console.log(res));
    };

    const createOrder = () => {
        draftApi.createOrder({ heroId, productId, deliveryAddress: "г.Таганрог, ул.Чехова, 213" });
    };

    return { handleGetProductsList, createOrder, heroId, setHeroId, productId, setProductId };
};

export default usePayProductHook;
