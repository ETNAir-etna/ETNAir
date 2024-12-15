export interface Result {
    action?: string
    data?: Object | null
    success: boolean
    url?: string
    message?: string;
    redirect?: boolean
    status?: number
}