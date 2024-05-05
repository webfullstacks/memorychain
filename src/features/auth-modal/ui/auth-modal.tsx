import Checkbox from "@/shared/ui/checkbox";
import { ModalBackIcon, ModalCloseIcon, YandexAuthIcon } from "@/shared/ui/icons";

import styles from "./auth-modal.module.scss";

import { useAuthModalHook, useShowAuthModalhook } from "../model";
import YandexAuthButton from "./yandex-auth-button";
import ThreeWhiteImage from "/images/main/poster/tree.png";

const AuthModal = () => {
    const { handleYandexLogin, handleYandexSignup } = useAuthModalHook();

    const {
        isShowAuthModal,
        isSignup,
        authModalRef,
        closeModal,
        isCheckedUseragreement,
        isCheckedPrivacy,
        toggleUseragreements,
        togglePrivacy,
        handleLogin,
        toggleIsSigning,
    } = useShowAuthModalhook({ handleYandexLogin, handleYandexSignup });

    if (!isShowAuthModal) {
        return <div />;
    }

    return (
        <div className={styles.authModalOverlay}>
            <div className={styles.authModal} ref={authModalRef}>
                <div className={styles.left}>
                    <div className={styles.backButton} onClick={closeModal}>
                        <ModalBackIcon />
                        Вернуться
                    </div>
                    <div className={styles.createAccountTitle}>
                        {isSignup ? "Создать учетную запись" : "Добро пожаловать"}
                    </div>
                    <div className={styles.createAccountLink}>
                        {isSignup ? "У вас уже есть учетная запись? " : "Войдите в аккаунт либо "}
                        <span className={styles.createAccountLinkInAccount} onClick={toggleIsSigning}>
                            {isSignup ? "Войдите в свой аккаунт" : "зарегистрируйтесь"}
                        </span>
                    </div>
                    <div>
                        <Checkbox
                            checked={isCheckedUseragreement}
                            onChange={toggleUseragreements}
                            label={"Принимаю пользовательское соглашения"}
                        />
                        <Checkbox
                            checked={isCheckedPrivacy}
                            onChange={togglePrivacy}
                            label={"Принимаю соглашение о персональных данных"}
                        />
                    </div>
                    <div className={styles.yandexAuthButtonContainer}>
                        <YandexAuthButton onClick={handleLogin} disabled={!isCheckedUseragreement || !isCheckedPrivacy}>
                            <div className={styles.yandexAuthButtonBody}>
                                <YandexAuthIcon />
                                <span>Войти с Yandex ID</span>
                            </div>
                        </YandexAuthButton>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.closeModalButton} onClick={closeModal}>
                        <ModalCloseIcon />
                    </div>
                    <img className={styles.rightImage} src={ThreeWhiteImage} />
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
