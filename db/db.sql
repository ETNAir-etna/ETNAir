
-- Needed extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Enum
CREATE TYPE role_enum AS ENUM ( 'etnair_public_user', 'etnair_user', 'etnair_admin_data_manager', 'etnair_super_admin');
CREATE TYPE accommodation_type_enum AS ENUM ( 'house', 'flat', 'loft', 'castle', 'room' );
CREATE TYPE status_enum AS ENUM ( 'host', 'guest' );
CREATE TYPE messages_notifications_status_enum AS ENUM ( 'unread', 'read', 'unsend' );
CREATE TYPE reservation_status_enum AS ENUM ( 'waiting for validation', 'accepted', 'refused', 'canceled' );
CREATE TYPE payment_method_enum AS ENUM ( 'paypal', 'stripe', 'credit card', 'american express' );
CREATE TYPE gender_enum AS ENUM ( 'man', 'woman', 'other', 'prefered not to say' );
CREATE TYPE reservation_type_enum AS ENUM ( 'reservation', 'maintenance', 'blocked by host' );

-- TABLE --> users
CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) UNIQUE NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    "email_verified_at" BOOLEAN DEFAULT false,
    "first_name" VARCHAR(35),
    "last_name" VARCHAR(35),
    "gender" INT DEFAULT NULL REFERENCES "genders" ("id"),
    "phone_number" VARCHAR(15) CHECK (phone_number ~* '^\+?\d{7,15}$'),
    "role_id" INT NOT NULL REFERENCES "roles" ("id"),
    "status_id" INT NOT NULL REFERENCES "status" ("id"),
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now(),
    "request_for_delete" BOOLEAN DEFAULT false,
    "deleted_at" TIMESTAMP DEFAULT NULL,
    "rating" INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    "summary" TEXT DEFAULT NULL,
    "profile_img" VARCHAR(2083) DEFAULT NULL,
    "password" BYTEA NOT NULL
);
-- INDEXES --> users
CREATE INDEX index_email ON "users" ("email");
CREATE INDEX index_phone_number ON "users" ("phone_number");
CREATE INDEX index_status_id ON "users" ("status_id");
CREATE INDEX index_role_id ON "users" ("role_id");
CREATE INDEX index_created_at ON "users" ("created_at");
CREATE INDEX index_rating ON "users" ("rating");
CREATE INDEX index_deleted_at ON "users" ("deleted_at");
CREATE INDEX index_request_for_delete ON "users" ("request_for_delete");

-- TABLE --> rentals
CREATE TABLE "rentals" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "title" VARCHAR(255) NOT NULL, 
    "accommodation_type_id" INT NOT NULL REFERENCES "accommodation_types" ("id"),
    "total_occupancy" INTEGER NOT NULL CHECK (total_occupancy > 0),
    "total_bedrooms" INTEGER DEFAULT 0 CHECK (total_bedrooms >= 0),
    "total_bathrooms" INTEGER DEFAULT 0 CHECK (total_bathrooms >= 0),
    "summary" TEXT,
    "area" INTEGER DEFAULT NULL CHECK ("area" > 0 AND "area" < 1500),
    "price_per_night" INTEGER NOT NULL CHECK ("price_per_night" > 0),
    "main_img_url" VARCHAR(2083) NOT NULL,
    "published_at" TIMESTAMP DEFAULT now(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id"),
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now(),
    "room_number" INT DEFAULT NULL,
    "floor_number" INT DEFAULT NULL,
    "unit_number" INT DEFAULT NULL,
    "street_number" INT NOT NULL,
    "street_name" VARCHAR(100) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "zip" VARCHAR(10) NOT NULL,
    "country" VARCHAR(50) NOT NULL,
    "latitude" DOUBLE PRECISION DEFAULT NULL,
    "longitude" DOUBLE PRECISION DEFAULT NULL,
    UNIQUE ("street_number", "street_name", "city", "zip", "country", "unit_number", "floor_number", "room_number")
);
-- INDEXES --> rentals
CREATE INDEX "index_rental_area" ON "rentals" ("area");
CREATE INDEX "index_rental_owner_id" ON "rentals" ("owner_id");
CREATE INDEX "index_rental_price_per_night" ON "rentals" ("price_per_night");
CREATE INDEX "index_rental_number_accommodation_type_id" ON "rentals" ("accommodation_type_id");
CREATE INDEX "index_addresses_city" ON "rentals" ("city");
CREATE INDEX "index_addresses_country" ON "rentals" ("country");

-- TABLE --> rental_images
CREATE TABLE "rental_images" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "accommodation_id" UUID NOT NULL REFERENCES "rentals" ("id") ON DELETE CASCADE,
    "url" VARCHAR(2083) NOT NULL,
    "created_at" TIMESTAMP DEFAULT now()
);
-- INDEXES --> rental_images
CREATE INDEX "index_rental_img_accommodation_id" ON "rental_images" ("accommodation_id");

-- TABLE --> wishlists
CREATE TABLE "wishlists" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id")  ON DELETE CASCADE,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    UNIQUE ("owner_id", "name")
);
-- INDEXES --> wishlists
CREATE INDEX "index_wishlist_owner" ON "wishlists" ("owner_id");

-- TABLE --> reviews
CREATE TABLE "reviews" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "review_type" VARCHAR(20) NOT NULL CHECK (review_type IN ('accommodation', 'guest')),
    "fullname" VARCHAR(100) NOT NULL,
    "user_id" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
    "reservation_id" UUID NOT NULL REFERENCES "reservations" ("id"),
    "rating" INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    "comment" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT now()
);
-- INDEXES --> reviews
CREATE INDEX index_reviews_type ON "reviews" ("review_type");
CREATE INDEX index_reviews_rating ON "reviews" ("rating");
CREATE INDEX index_reviews_user_id ON "reviews" ("user_id");
CREATE INDEX index_reviews_reservations_id ON "reviews" ("reservation_id");

