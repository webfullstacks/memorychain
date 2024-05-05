import Fallback from "@/shared/ui/fallback";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";

import { AuthProvider } from "./auth-provider";
import store from "./store-provider";

interface IProviders {
    /** Content that will be wrapped by providers. */
    readonly children: JSX.Element;
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        <ErrorBoundary FallbackComponent={Fallback}>
            <AuthProvider>
                <Provider store={store}>{children}</Provider>
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default Providers;
