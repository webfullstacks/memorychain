import { useAuth } from "@/app/providers/auth-provider";
import { useAppDispatch, useAppSelector, useOutsideClick } from "@/shared/lib";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authActions } from "./auth-slice";

const useShowAuthModalhook = ({
    handleYandexLogin,
    handleYandexSignup,
}: {
    handleYandexLogin: () => void;
    handleYandexSignup: () => void;
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isSignup, setIsSignup] = useState<boolean>(false);

    const [isCheckedUseragreement, setIsCheckedUseragreement] = useState<boolean>(false);
    const [isCheckedPrivacy, setIsCheckedPrivacy] = useState<boolean>(false);

    const { isShowAuthModal, targetPath } = useAppSelector((state) => state.authSlice);

    const { isAuth } = useAuth();

    const authModalRef = useOutsideClick(() => {
        dispatch(authActions.closeAuthModal());
    });

    useEffect(() => {
        if (isShowAuthModal && targetPath && isAuth()) {
            navigate(targetPath);
            closeModal();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, isShowAuthModal, navigate, targetPath]);

    const handleLogin = () => {
        if (isSignup) {
            handleYandexSignup();
        } else {
            handleYandexLogin();
        }

        closeModal();
    };

    const closeModal = () => {
        dispatch(authActions.closeAuthModal());
    };

    const toggleUseragreements = () => {
        setIsCheckedUseragreement((e) => !e);
    };

    const togglePrivacy = () => {
        setIsCheckedPrivacy((e) => !e);
    };

    const toggleIsSigning = () => {
        setIsSignup((e) => !e);
    };

    return {
        isShowAuthModal,
        isSignup,
        authModalRef,
        handleLogin,
        closeModal,
        isCheckedUseragreement,
        isCheckedPrivacy,
        toggleUseragreements,
        togglePrivacy,
        toggleIsSigning,
    };
};

export default useShowAuthModalhook;
