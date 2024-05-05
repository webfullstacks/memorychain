class TokenService {
    private _localStorageKey = "token";

    public setToken = ({ token }: { token: string }) => {
        localStorage.setItem(this._localStorageKey, token);
    };

    public getToken = () => {
        return localStorage.getItem(this._localStorageKey);
    };

    public deleteToken = () => {
        localStorage.setItem(this._localStorageKey, "");
    };
}

export default new TokenService();
