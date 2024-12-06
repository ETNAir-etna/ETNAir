export interface Review {
    createdBy?: string
    fullName : string
    profileImg: string
    reviewType: string
    reservationId?: string
    propertyId? : string
    content  : string
    rating: number
    publishedAt: Date
    updatedAt  : Date
    guestId: String
    HostId: String
}