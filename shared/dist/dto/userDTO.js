"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const UserDTO = (user) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
        id: user.id,
        email: user.email,
        firstName: (_a = user.firstName) !== null && _a !== void 0 ? _a : null,
        lastName: (_b = user.lastName) !== null && _b !== void 0 ? _b : null,
        gender: (_c = user.gender) !== null && _c !== void 0 ? _c : null,
        phoneNumber: (_d = user.phoneNumber) !== null && _d !== void 0 ? _d : null,
        role: user.role,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        guestRating: (_e = user.guestRating) !== null && _e !== void 0 ? _e : null,
        hostRating: (_f = user.hostRating) !== null && _f !== void 0 ? _f : null,
        summary: (_g = user.summary) !== null && _g !== void 0 ? _g : null,
        profileImg: (_h = user.profileImg) !== null && _h !== void 0 ? _h : null,
        requestForDelete: (_j = user.requestForDelete) !== null && _j !== void 0 ? _j : false,
        isSuperHost: (_k = user.isSuperHost) !== null && _k !== void 0 ? _k : false,
    };
};
exports.UserDTO = UserDTO;
