import { ApiResponse } from ".";

export enum UserRole {
    undefined = "undefined",
    user = "USER",
    admin = "ADMIN",
}

export enum UserStatus {
    ACTIVE = "ACTIVE",
}

export interface LoginYandexResponseType extends ApiResponse<{ token: string; role: UserRole }> {}

export interface User {
    avatarId?: string;
    email: string;
    language: string;
    phone?: string;
    role: UserRole;
    status: UserStatus;
    system: string;
    userId: string;
}
