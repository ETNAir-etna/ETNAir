import { body } from "express-validator";

export const propertyValidations = [
  body("ownerId")
    .trim()
    .notEmpty()
    .withMessage("Owner ID is required.")
    .isUUID()
    .withMessage("Owner ID must be a valid UUID."),

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters."),

  body("description")
    .trim()
    .isLength({ max: 1200 })
    .withMessage("Description must be at most 500 characters."),

  body("propertyType")
    .trim()
    .notEmpty()
    .withMessage("Property type is required.")
    .isIn([
      "APARTMENT",
      "HOUSE",
      "VILLA",
      "STUDIO",
      "BUNGALOW",
      "CONDO",
      "LOFT",
      "ROOM",
    ])
    .withMessage("Invalid property type."),

  body("occupancyMax")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Occupancy max must be a positive integer."),

  body("totalBedrooms")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Total bedrooms must be zero or greater."),

  body("totalBathrooms")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Total bathrooms must be zero or greater."),

  body("area")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Area must be a positive number."),

  body("pricePerNight")
    .trim()
    .notEmpty()
    .withMessage("Price per night is required.")
    .isFloat({ min: 0 })
    .withMessage("Price per night must be a positive number."),

  body("mainImgUrl")
    .trim()
    .notEmpty()
    .withMessage("Main image URL is required.")
    .isURL()
    .withMessage("Main image URL must be a valid URL."),

  body("roomNumber")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Room number must be zero or greater."),

  body("floorNumber")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Floor number must be zero or greater."),

  body("unitNumber")
    .optional()
    .trim()
    .isAlphanumeric()
    .withMessage("Unit number must contain only letters and numbers."),

  body("streetNumber")
    .trim()
    .notEmpty()
    .withMessage("Street number is required.")
    .isInt({ min: 1 })
    .withMessage("Street number must be a positive integer."),

  body("city")
    .trim()
    .notEmpty()
    .withMessage("City is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("City must be between 2 and 50 characters."),

  body("zip")
    .optional()
    .trim()
    .isPostalCode("any")
    .withMessage("Invalid ZIP code."),

  body("country")
    .trim()
    .notEmpty()
    .withMessage("Country is required.")
    .isLength({ min: 2, max: 50 })
    .withMessage("Country must be between 2 and 50 characters."),

  body("latitude").optional(),

  body("longitude").optional(),

  body("equipments")
    .optional()
    .custom((value) =>
      value.every(
        (item: string) => typeof item === "string" && item.trim().length > 0
      )
    )
    .withMessage("Equipments must be non-empty."),

  body("pictures")
    .optional()
    .isArray()
    .withMessage("Pictures must be an array.")
    .custom((value) =>
      value.every((url: string) => /^https?:\/\/.+\..+$/.test(url))
    )
    .withMessage("Pictures must be valid URLs."),
];
