-- CreateIndex
CREATE INDEX "Property_ownerId_idx" ON "Property"("ownerId");

-- CreateIndex
CREATE INDEX "Property_city_idx" ON "Property"("city");

-- CreateIndex
CREATE INDEX "Property_country_idx" ON "Property"("country");

-- CreateIndex
CREATE INDEX "Property_equipments_idx" ON "Property"("equipments");

-- CreateIndex
CREATE INDEX "Property_totalBedrooms_idx" ON "Property"("totalBedrooms");

-- CreateIndex
CREATE INDEX "Property_propertyType_idx" ON "Property"("propertyType");

-- CreateIndex
CREATE INDEX "Property_occupancyMax_idx" ON "Property"("occupancyMax");
