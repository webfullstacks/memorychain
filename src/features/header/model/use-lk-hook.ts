import { useAuth } from "@/app/providers/auth-provider";
import { authActions } from "@/features/auth-modal";
import { routes } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { useEffect } from "react";

import userApi from "../api";
import { userActions } from "./user-slice";

const useLkHook = () => {
    const dispath = useAppDispatch();

    const { isAuth } = useAuth();
    const { user } = useAppSelector((state) => state.userSlice);

    // Здесь запрашиваю информацию по юзеру
    // Запрашиваю только в том случае, если этих данных в памяти нет
    useEffect(() => {
        if (isAuth() && !user) {
            userApi
                .getMe()
                .then((res) => {
                    dispath(userActions.setUser(res.userDto));
                    return;
                })
                .catch((err) => {
                    console.error(err);
                    return;
                });
        }
    }, [dispath, isAuth, user]);

    const handleLogin = () => {
        dispath(authActions.openAuthModal({ targetPath: "/" + routes.lk }));
    };

    return { handleLogin, user };
};

export default useLkHook;
