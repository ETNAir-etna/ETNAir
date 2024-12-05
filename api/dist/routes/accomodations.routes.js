"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accomodation_controller_1 = require("../controllers/accomodation.controller");
const router = (0, express_1.Router)();
router.get('/', accomodation_controller_1.AccommodationController.getAllAccommodations);
router.get('/:id', accomodation_controller_1.AccommodationController.getAccommodationById);
router.get('/create', accomodation_controller_1.AccommodationController.createAccommodation);
exports.default = router;
