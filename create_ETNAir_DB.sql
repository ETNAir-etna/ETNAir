
-- Needed extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

ALTER DATABASE my_database SET app.current_user TO 'etnair_public_user';


-- Create role for database access
DO $$
BEGIN

    REVOKE ALL ON ALL TABLES IN SCHEMA public FROM "etnair_public_user";

    -- Create 'Etnair_Public_User' role if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'etnair_public_user') THEN
        CREATE ROLE "etnair_public_user" LOGIN PASSWORD 'pwd';
        GRANT SELECT ON ALL TABLES IN SCHEMA public TO "etnair_public_user";
        REVOKE SELECT ON TABLE "messages", "notifications", "roles", "reservation_types" FROM "etnair_public_user";
    END IF;

    -- Create 'Etnair_User' role if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'etnair_user') THEN
        CREATE ROLE "etnair_user" LOGIN PASSWORD 'pwd' INHERIT;
        GRANT SELECT ON ALL TABLES IN SCHEMA public TO "etnair_user";
        GRANT UPDATE ON TABLE "users", "reservations", "addresses", "reviews", "accommodations", "promotions", "wishlists", "accommodation_equipments", "user_notifications" TO "etnair_user";
        GRANT INSERT ON TABLE "messages", "user_notifications" TO "etnair_user";
        GRANT INSERT, DELETE ON TABLE "reservations", "reviews", "accommodations", "accommodations_images", "wishlists", "promotions", "credit_card", "addresses", "accommodation_equipments" TO "etnair_user";
    END IF;

    -- Create 'Etnair_Admin_Data_Manager' role if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'etnair_admin_data_manager') THEN
        CREATE ROLE "etnair_admin_data_manager" LOGIN PASSWORD 'pwd';
        GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO "etnair_admin_data_manager";
        REVOKE ALTER, DROP ON ALL TABLES IN SCHEMA public FROM "etnair_admin_data_manager";
        REVOKE ALTER, DROP ON SCHEMA public FROM "etnair_admin_data_manager";
    END IF;

    -- Create 'Etnair_Super_Admin' role if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'etnair_super_admin') THEN
        CREATE ROLE "etnair_super_admin" LOGIN PASSWORD 'pwd' INHERIT SUPERUSER;
    END IF;

END $$;


-- TABLE --> roles
CREATE TABLE "roles" (
    "id" SERIAL AUTO_INCREMENT PRIMARY KEY,
    "role_name" VARCHAR(50) NOT NULL UNIQUE,
    "description" TEXT NULL
);
INSERT INTO roles (role_name, description) VALUES
('etnair_public_user', 'Can view accommodations and user profiles (read-only)'),
('etnair_user', 'Can add or modify their own data'),
('etnair_admin_data_manager', 'Can manage user data but not database structure'),
('etnair_super_admin', 'Full access to everything, including database structure');

-- TABLE --> accommodation types
CREATE TABLE "accommodation_types" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "accommodation_types" ("name") VALUES ('house'), ('flat'), ('loft'), ('castle'), ('room');

-- TABLE --> users roles
CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "status" ("name") VALUES
('host', 'User providing accommodations'),
('guest', 'User booking accommodations');

-- TABLE --> messages status
CREATE TABLE "messages_notifications_status" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "messages_notifications_status" ("name") VALUES ('unread'), ('read'), ("unsend");

-- TABLE --> reservation status
CREATE TABLE "reservation_status" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "reservation_status" ("name") VALUES ('waiting for validation'), ('accepted'), ('refused'), ('canceled');

-- TABLE --> payment method
CREATE TABLE "payment_methods" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(30) UNIQUE NOT NULL
);
INSERT INTO "payment_methods" ("name") VALUES ('paypal'), ('stripe'), ('credit card'), ('american express');

-- TABLE --> genders
CREATE TABLE "genders" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(10) UNIQUE NOT NULL
);
INSERT INTO "genders" ("name") VALUES ('man'), ('woman'), ('other'), ('prefered not to say');

-- TABLE --> reservation_types
CREATE TABLE "reservation_types" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE
);

-- Insertion des types de réservation
INSERT INTO "reservation_types" (id, name) VALUES 
('reservation'),
('maintenance'), 
('blocked_by_host');

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
    "updated_at" TIMESTAMP DEFAULT now() ON UPDATE now(),
    "request_for_delete" BOOLEAN DEFAULT false,
    "deleted_at" TIMESTAMP DEFAULT NULL,
    "rating" INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    "summary" TEXT DEFAULT NULL,
    "profile_img" VARCHAR(2083) DEFAULT NULL,
    "password" BYTEA NOT NULL,
    INDEX ("email"),
    INDEX ("phone_number"),
    INDEX ("status_id"),
    INDEX ("role_id"),
    INDEX ("created_at"),
    INDEX ("rating"),
    index ("deleted_at"),
    INDEX ("request_for_delete")
);

-- TABLE --> adresses
CREATE TABLE "addresses" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "accommodation_id" UUID NOT NULL REFERENCES "accommodations" ("id") ON DELETE CASCADE,
    "room_number" INT DEFAULT NULL,
    "unit_number" INT NOT NULL,
    "floor_number" INT DEFAULT NULL,
    "street_number" INT NOT NULL,
    "street_name" VARCHAR(255) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "zip" VARCHAR(10) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "latitude" DOUBLE PRECISION DEFAULT NULL,
    "longitude" DOUBLE PRECISION DEFAULT NULL,
    "is_shared" BOOLEAN DEFAULT false,
    UNIQUE ("street_number", "street_name", "city", "zip", "country", "unit_number", "floor_number", "room_number"),
    INDEX ("city"),
    INDEX ("country")
);

-- TABLE --> accommodations
CREATE TABLE "accommodations" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "title" VARCHAR(255) NOT NULL, 
    "accommodation_type_id" INT NOT NULL REFERENCES "accommodation_types" ("id"),
    "total_occupancy" INTEGER NOT NULL CHECK (total_occupancy > 0),
    "total_bedrooms" INTEGER DEFAULT 0 CHECK (total_bedrooms >= 0),
    "total_bathrooms" INTEGER DEFAULT 0 CHECK (total_bathrooms >= 0),
    "summary" TEXT,
    "area" INTEGER DEFAULT NULL CHECK ("area" > 0 AND "area" < 1500),
    "address_id" UUID NOT NULL REFERENCES "addresses" ("id")  ON DELETE CASCADE,
    "price_per_night" INTEGER NOT NULL CHECK ("price_per_night" > 0),
    "main_img_url" VARCHAR(2083) NOT NULL,
    "published_at" TIMESTAMP DEFAULT now(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id"),
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now() ON UPDATE now(),
    INDEX ("area"),
    INDEX ("owner_id"),
    INDEX ("price_per_night"),
    INDEX ("accommodation_type_id")
);

-- TABLE --> equipments
CREATE TABLE "equipments" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL UNIQUE,
    "icon_url" VARCHAR(2083) DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now() ON UPDATE now()
);

-- TABLE --> accommodation_equipments
CREATE TABLE "accommodation_equipments" (
    "accommodation_id" UUID NOT NULL REFERENCES "accommodations" ("id") ON DELETE CASCADE,
    "equipment_id" INT NOT NULL REFERENCES "equipments" ("id") ON DELETE CASCADE,
    PRIMARY KEY ("accommodation_id", "equipment_id")
);

-- TABLE --> accommodations_images
CREATE TABLE "accommodations_images" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "accommodation_id" UUID NOT NULL REFERENCES "accommodations" ("id") ON DELETE CASCADE,
    "url" VARCHAR(2083) NOT NULL,
    "created_at" TIMESTAMP DEFAULT now()
    INDEX ("accommodation_id")
)

-- TABLE --> wishlists
CREATE TABLE "wishlists" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id")  ON DELETE CASCADE,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    UNIQUE ("owner_id", "name"),
    INDEX ("owner_id")
);

-- TABLE --> promotions
CREATE TABLE "promotions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "code" VARCHAR(20) NOT NULL UNIQUE,
    "discount_percentage" INTEGER NOT NULL CHECK (discount_percentage > 0 AND discount_percentage <= 100),
    "start_date" TIMESTAMP DEFAULT now(),
    "end_date" TIMESTAMP DEFAULT NULL,
    CONSTRAINT chk_promotion_dates CHECK (end_date IS NULL OR end_date > start_date),
    INDEX ("start_date", "end_date"),
);

-- TABLE --> credit cards
CREATE TABLE "credit_card" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
    "fullname" VARCHAR(100) NOT NULL,
    "card_number" BYTEA NOT NULL CHECK (octet_length(card_number) = 16),
    "cvc" BYTEA NOT NULL CHECK (octet_length(cvc) = 3),
    "exp_at" TIMESTAMP NOT NULL CHECK (exp_at > now()),
    "billing_address_id" UUID NOT NULL REFERENCES "addresses" ("id")
);

-- TABLE --> user notifications
CREATE TABLE "user_notifications" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    "status" VARCHAR(20) NOT NULL DEFAULT 0 REFERENCES "messages_notifications_status" ("id"),
    INDEX ("user_id"),
    INDEX("status")
);

-- TABLE --> reservations
CREATE TABLE "reservations" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE RESTRICT,
    "promotion_id" UUID DEFAULT NULL REFERENCES "promotions" ("id"),
    "accommodation_id" UUID NOT NULL REFERENCES "accommodations" ("id") ON DELETE RESTRICT,
    "reservation_type" INT NOT NULL DEFAULT 1 REFERENCES "reservation_types" ("id"),
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "total" INTEGER DEFAULT NULL CHECK (total >= 0),
    "status" INT DEFAULT 1 REFERENCES "reservation_status" ("id"),
    "payment_method" INT DEFAULT NULL REFERENCES "payment_methods" ("id"),
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now() ON UPDATE now(),
    CONSTRAINT chk_dates CHECK (start_date < end_date),
    INDEX ("accommodation_id"),
    INDEX ("status"),
    INDEX ("start_date", "end_date"),
    INDEX ("accommodation_id", "start_date", "end_date")
);

-- TABLE --> reviews
CREATE TABLE "reviews" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "review_type" VARCHAR(20) NOT NULL CHECK (review_type IN ('accommodation', 'guest')),
    "fullname" VARCHAR(100) NOT NULL,
    "user_id" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
    "reservation_id" UUID NOT NULL REFERENCES "reservations" ("id"),
    "rating" INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    "comment" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    INDEX ("review_type"),
    INDEX ("rating"),
    INDEX ("user_id"),
    INDEX ("reservation_id")
);

-- TABLE --> messages
CREATE TABLE "messages" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "sender_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE SET NULL,
    "receiver_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE SET NULL,
    "reservation_id" UUID DEFAULT NULL REFERENCES "reservations" ("id"),
    "message" TEXT,
    "status" VARCHAR(20) NOT NULL DEFAULT 0 REFERENCES "messages_notifications_status" ("id"),
    "sent_at" TIMESTAMP DEFAULT now(),
    "read_at" TIMESTAMP DEFAULT NULL?
    INDEX ("sender_id", "receiver_id", "reservation_id")
);