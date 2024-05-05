import { routes } from "@/shared/config";
import { UserRoleService } from "@/shared/lib";
import { UserRole } from "@/shared/types";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../providers/auth-provider";

interface PrivateRouterProps {
    roles?: UserRole[];
}

const PrivateRoute = ({ roles = [...Object.values(UserRole)] }: PrivateRouterProps) => {
    // const { isAuth } = useAuth();

    // const userRole = UserRoleService.getUserRoleFromLocalStorage();

    // switch (isAuth()) {
    //     // неавторизован
    //     case false:
    //         return <Navigate to={"/" + routes.yandexOAuthRedirectUri} replace />;

    //     // авторизован
    //     case true:
    //         if (userRole && roles.includes(userRole)) {
    //             return <Outlet />;
    //         } else {
    //             return <Navigate to={routes.lk} replace />;
    //         }
    // }

    return <Outlet />;
};

export default PrivateRoute;
