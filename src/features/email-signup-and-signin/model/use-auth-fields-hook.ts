import { useAuth } from "@/app/providers/auth-provider";
import { routes } from "@/shared/config";
import { TokenService, UserRoleService } from "@/shared/lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import authApi from "../api";

const useAuthFieldsHook = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [validationCode, setValidationCode] = useState<string>("");

    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const handleSendValidationCode = () => {
        authApi.signinEmail({ email, password }).then((res) => {
            TokenService.setToken({ token: res.token });
            UserRoleService.setUserRoleToLocalStorage({ role: res.role });
            loginUser(res.role);

            navigate("/" + routes.lk);
        });
    };

    return { email, setEmail, password, setPassword, validationCode, setValidationCode, handleSendValidationCode };
};

export default useAuthFieldsHook;
