export type Review = {
    createdBy?: string | null
    fullName : string
    profileImg: string
    reviewType: string
    reservationId?: string | null
    propertyId? : string | null
    content  : string
    rating: number
    publishedAt: Date
    updatedAt  : Date
    guestId: String
    HostId: String
}