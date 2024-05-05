import { UserRole } from "@/shared/types";

class UserRoleService {
    private _localStorageKey = "user-role";

    public setUserRoleToLocalStorage = ({ role }: { role: UserRole }) => {
        localStorage.setItem(this._localStorageKey, role);
    };

    public getUserRoleFromLocalStorage = () => {
        return localStorage.getItem(this._localStorageKey) as UserRole | null;
    };

    public deleteUserRoleFromLocalStorage = () => {
        localStorage.setItem(this._localStorageKey, "");
    };
}

export default new UserRoleService();
