export interface ErrorDetails {
    errorType : string
    message: string
    status: number
    details?: string
};

export interface Result {
    key?: boolean
    token?: string
    action: string
    data?: object | null
    deletedCount?: number
    error?: ErrorDetails
    message?: string;
    redirect?: boolean
    status?: number
    success: boolean
    url?: string
};