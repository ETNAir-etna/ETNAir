"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewDTO = void 0;
const ReviewDTO = (review) => {
    var _a, _b, _c, _d;
    return {
        id: review.id,
        createdBy: (_a = review.createdBy) !== null && _a !== void 0 ? _a : null,
        fullName: review.fullName,
        profileImg: review.profileImg,
        reviewType: review.reviewType,
        reservationId: (_b = review.reservationId) !== null && _b !== void 0 ? _b : null,
        propertyId: (_c = review.propertyId) !== null && _c !== void 0 ? _c : null,
        content: review.content,
        rating: review.rating,
        publishedAt: review.publishedAt,
        updatedAt: review.updatedAt,
        directedTo: (_d = review.directedTo) !== null && _d !== void 0 ? _d : null,
    };
};
exports.ReviewDTO = ReviewDTO;
