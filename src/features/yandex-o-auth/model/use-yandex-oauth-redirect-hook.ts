import { useAuth } from "@/app/providers/auth-provider";
import { routes } from "@/shared/config";
import { TokenService, UserRoleService } from "@/shared/lib";
import { UserRole } from "@/shared/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { yandexOAuthLogin, yandexOAuthSignup } from "../api";
import { RedirectMethod } from "./redirect-methods";

const useYandexOAuthRedirectHook = () => {
    const [_, setError] = useState<string | null>(null);

    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const loginProcess = async ({ token, role }: { token: string; role: UserRole }) => {
        TokenService.setToken({ token: token });
        UserRoleService.setUserRoleToLocalStorage({ role: role });
        loginUser(role);

        navigate("/" + routes.lk);
    };

    useEffect(() => {
        const accessTokenRegex = /access_token=([^&]+)/;
        const isMatch = window.location.href.match(accessTokenRegex);

        if (isMatch) {
            const accessToken = isMatch[1];

            if (accessToken) {
                if (window.location.href.includes(`?method=${RedirectMethod.login}`)) {
                    yandexOAuthLogin({ yandexUserToken: accessToken })
                        .then((res) => loginProcess({ token: res.token, role: res.role }))
                        .catch((err) => {
                            setError("Пожалуйста, сначала зарегистрируйтесь");
                            console.error(err);
                        });
                }

                if (window.location.href.includes(`?method=${RedirectMethod.signup}`)) {
                    yandexOAuthSignup({ yandexUserToken: accessToken })
                        .then((res) => loginProcess({ token: res.token, role: res.role }))
                        .catch((err) => {
                            setError("У вас уже есть аккаунт");
                            console.error(err);
                        });
                }
            }
        }

        return () => {};
    }, []);

    return {};
};

export default useYandexOAuthRedirectHook;
