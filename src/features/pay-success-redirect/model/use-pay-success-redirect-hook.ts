import { routes } from "@/shared/config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePaySuccessRedirectHook = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${routes.lk}`);
    }, []);

    return {};
};

export default usePaySuccessRedirectHook;
