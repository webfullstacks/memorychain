import { TokenService } from "@/shared/lib";
import { UserRole } from "@/shared/types";
import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
    userRole: UserRole;
    loginUser: (role: UserRole) => void;
    logoutUser: () => void;
    isAuth: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userRole, setUserRole] = useState<UserRole>(UserRole.undefined);

    const loginUser = (role: UserRole) => {
        setUserRole(role);
    };

    const logoutUser = () => {
        // Perform logout logic
        setUserRole(UserRole.undefined);
    };

    const isAuth = () => {
        const token = TokenService.getToken();

        return !!token;
    };

    return <AuthContext.Provider value={{ userRole, loginUser, logoutUser, isAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};
