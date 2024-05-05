import { routes } from "@/shared/config";

import RedirectMethod from "../types";

const useAuthModalHook = () => {
    const handleYandexLogin = () => {
        const origin = window.location.origin;

        const clientId = import.meta.env.VITE_APP_YANDEX_CLIENT_ID;
        const redirectUri = origin + "/" + routes.yandexOAuthRedirectUri;

        window.location.href = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}?method=${RedirectMethod.login}`;
    };

    const handleYandexSignup = () => {
        const origin = window.location.origin;

        const clientId = import.meta.env.VITE_APP_YANDEX_CLIENT_ID;
        const redirectUri = origin + "/" + routes.yandexOAuthRedirectUri;

        window.location.href = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}?method=${RedirectMethod.signup}`;
    };

    return { handleYandexLogin, handleYandexSignup };
};

export default useAuthModalHook;
