export interface ErrorDetails {
    errorType : string
    message: string
    status: number
};

export interface Result {
    action: string
    data?: Object | null
    deletedCount?: number
    error?: ErrorDetails
    message?: string;
    redirect?: boolean
    status?: number
    success: boolean
    url?: string
};