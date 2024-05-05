import styles from "./yandex-auth-button.module.scss";

interface YandexAuthButtonProps {
    children: JSX.Element;
    onClick?: () => void;
    disabled?: boolean;
}

const YandexAuthButton = ({ children, onClick, disabled = false }: YandexAuthButtonProps) => {
    return (
        <button className={styles.yandexAuthButton} onClick={onClick} disabled={disabled} role="button">
            {children}
        </button>
    );
};

export default YandexAuthButton;
