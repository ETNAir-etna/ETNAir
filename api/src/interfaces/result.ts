export interface ErrorDetails {
    errorType : string
    message: string
    status: number
};

export interface Result {
<<<<<<< HEAD
=======
    key?: boolean
    token?: string
>>>>>>> 723295e17a2e8f2c7a97e19a54ffab2e53ff3332
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