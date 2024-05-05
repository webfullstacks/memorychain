export interface ApiResponse<T extends object> {
    data: T;
    error?: string;
    status: number;
    timestamp: string;
}
