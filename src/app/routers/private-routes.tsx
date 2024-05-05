import { UserRole } from "@/shared/types";
import { Outlet } from "react-router-dom";

interface PrivateRouterProps {
    roles?: UserRole[];
}

const PrivateRoute = ({ roles = [...Object.values(UserRole)] }: PrivateRouterProps) => {
    console.log(roles);

    return <Outlet />;
};

export default PrivateRoute;
