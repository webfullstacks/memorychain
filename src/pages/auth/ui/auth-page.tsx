import EmailSignupAndSignin from "@/features/email-signup-and-signin";
import YandexOAuthFeature from "@/features/yandex-o-auth";

const AuthPage = () => {
    return (
        <div>
            Auth page
            <EmailSignupAndSignin />
            <YandexOAuthFeature />
        </div>
    );
};

export default AuthPage;
