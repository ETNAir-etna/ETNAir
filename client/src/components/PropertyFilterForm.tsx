import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    SelectChangeEvent,
    FormControl,
} from "@mui/material";
import { PropertyFilter } from "@etnair-etna/shared";

enum PropertyType {
    APARTMENT = "APARTMENT",
    HOUSE = "HOUSE",
    VILLA = "VILLA",
    BUNGALOW = "BUNGALOW",
    CONDO = "CONDO",
    LOFT = "LOFT",
    ROOM = "ROOM",
    STUDIO = "STUDIO",
}


const PropertyFilterForm = ({ onSubmit }: { onSubmit: (filters: PropertyFilter) => void }) => {
    const [filters, setFilters] = useState<PropertyFilter>({
        country: "",
        city: "",
        propertyType: "",
        roomNumber: undefined,
        occupancyMax: undefined,
        totalBedrooms: undefined,
        equipments: undefined,
        publishedAt: "",
        pricePerNight: "",
        numberByPage: 16,
        page: 1
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name: string; value: string | number }> | SelectChangeEvent) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(filters);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,
                p: 2,
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                "& > *": {
                    flex: "1 1 auto",
                    minWidth: "150px",
                },
                "@media (max-width: 600px)": {
                    flexDirection: "column",
                    "& > *": {
                        flex: "1 1 100%",
                        minWidth: "100%",
                    },
                    "& .MuiFormControl-root": {
                        width: "auto",
                    },
                },
            }}
        >
            {/* Country */}
            <TextField
                name="country"
                label="Country"
                value={filters.country}
                onChange={handleChange}
                size="small"
                variant="outlined"
            />

            {/* City */}
            <TextField
                name="city"
                label="City"
                value={filters.city}
                onChange={handleChange}
                size="small"
                variant="outlined"
            />

            {/* Occupancy Max */}
            <TextField
                name="occupancyMax"
                label="Occupancy Max"
                type="number"
                value={filters.occupancyMax}
                onChange={handleChange}
                size="small"
                variant="outlined"
            />

            {/* Property Type */}
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="property-type-select-label">Property Type</InputLabel>
                <Select
                    labelId="property-type-select-label"
                    id="property-type-select"
                    value={filters.propertyType || ""}
                    onChange={(e) => handleChange(e)}
                    name="propertyType"
                    autoWidth
                    label="Property Type"
                >
                    {Object.values(PropertyType).map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Price Per Night */}
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="price-per-night-label">Price Per Night</InputLabel>
                <Select
                    labelId="price-per-night-label"
                    id="price-per-night"
                    value={filters.pricePerNight}
                    onChange={handleChange}
                    name="pricePerNight"
                    autoWidth
                    label="Price Per Night"
                >
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </FormControl>

            {/* Submit Button */}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                    alignSelf: "center",
                }}
            >
                Search
            </Button>
        </Box>
    );
};

export default PropertyFilterForm;
