CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Set up of permissions
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM public;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO etna_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO etna_admin_plus;

-- Table logement types
CREATE TABLE "logement_types" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "logement_types" ("name") VALUES ('house'), ('appart'), ('loft'), ('castle'), ('room');

-- Table users roles
CREATE TABLE "roles" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "roles" ("name") VALUES ('admin'), ('host'), ('guest');

-- Table messages status
CREATE TABLE "message_status" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "message_status" ("name") VALUES ('unread'), ('read'), ('delivered');

-- Table reservation status
CREATE TABLE "reservation_status" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
INSERT INTO "reservation_status" ("name") VALUES ('pending'), ('accepted'), ('rejected'), ('canceled');

-- Table payment method
CREATE TABLE "payment_methods" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(30) UNIQUE NOT NULL
);
INSERT INTO "payment_methods" ("name") VALUES ('paypal'), ('stripe'), ('credit_card');

-- Table users
CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) UNIQUE NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    "email_verified_at" BOOLEAN DEFAULT false,
    "first_name" VARCHAR(35),
    "last_name" VARCHAR(35),
    "gender" VARCHAR(10) NOT NULL,
    "phone_number" VARCHAR(15) CHECK (phone_number ~* '^\+?\d{7,15}$'),
    "token" VARCHAR(255),
    "role_id" INT NOT NULL REFERENCES "roles" ("id") DEFAULT 3,
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now(),
    "rating" INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    "description" TEXT DEFAULT NULL,
    "profile_img" TEXT DEFAULT NULL,
    "password" VARCHAR(255) NOT NULL
);

CREATE POLICY "users_access_policy"
ON "users"
USING (
    current_setting('app.current_role') = 'admin'
    OR current_setting('app.current_role') = 'admin-plus'
    OR id = current_setting('app.current_user')::UUID
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Table logements
CREATE TABLE "logements" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "logement_type_id" INT NOT NULL REFERENCES "logement_types" ("id"),
    "total_occupancy" INTEGER NOT NULL CHECK (total_occupancy > 0),
    "total_bedrooms" INTEGER DEFAULT 0 CHECK (total_bedrooms >= 0),
    "total_bathrooms" INTEGER DEFAULT 0 CHECK (total_bathrooms >= 0),
    "summary" TEXT,
    "address" VARCHAR(255) NOT NULL,
    "has_tv" BOOLEAN DEFAULT false,
    "has_kitchen" BOOLEAN DEFAULT false,
    "has_air_cond" BOOLEAN DEFAULT false,
    "has_internet" BOOLEAN DEFAULT false,
    "price_by_night" INTEGER NOT NULL CHECK (price_by_night > 0),
    "published_at" TIMESTAMP DEFAULT now(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id"),
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now()
);

-- Table des wishlists
CREATE TABLE "wishlists" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL REFERENCES "users" ("id"),
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    UNIQUE ("user_id", "name")
);

-- Table des réservations
CREATE TABLE "reservations" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL REFERENCES "users" ("id"),
    "promotion_id" UUID DEFAULT NULL REFERENCES "promotions" ("id"),
    "logement_id" UUID NOT NULL REFERENCES "logements" ("id"),
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "total" INTEGER NOT NULL CHECK (total > 0),
    "status" VARCHAR(20) DEFAULT 'pending',
    "payment_method" VARCHAR(20) NOT NULL REFERENCES "payment_methods" ("name"),
    "created_at" TIMESTAMP DEFAULT now(),
    "updated_at" TIMESTAMP DEFAULT now(),
    CONSTRAINT chk_dates CHECK (start_date < end_date)
);

-- Table review
CREATE TABLE "reviews" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL REFERENCES "users" ("id"),
    "reservation_id" UUID NOT NULL REFERENCES "reservations" ("id"),
    "rating" INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    "comment" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    UNIQUE ("user_id", "reservation_id")
);

-- Table des cartes de crédit
CREATE TABLE "credit_card" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "owner_id" UUID NOT NULL REFERENCES "users" ("id"),
    "full_name" VARCHAR(255) NOT NULL,
    "card_number" BYTEA NOT NULL CHECK (octet_length(card_number) = 16),
    "cvc" BYTEA NOT NULL CHECK (octet_length(cvc) = 3),
    "exp_at" TIMESTAMP NOT NULL CHECK (exp_at > now())
);

-- Table credit_card security policy
CREATE POLICY "reviews_politique"
ON "credit_card"
USING ("owner_id" = current_setting('app.current_user')::UUID);

ALTER TABLE "credit_card" ENABLE ROW LEVEL SECURITY;

-- Table des notifications utilisateur
CREATE TABLE "user_notifications" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL REFERENCES "users" ("id"),
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP DEFAULT now(),
    "read_at" TIMESTAMP DEFAULT NULL
);

-- Table user_notifications security policy

CREATE POLICY "user_notifications_politique"
ON "user_notifications"
USING (user_id = current_setting('app.current_user')::UUID);

ALTER TABLE "user_notifications" ENABLE ROW LEVEL SECURITY;

-- Table des promotions
CREATE TABLE "promotions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "code" VARCHAR(20) NOT NULL UNIQUE,
    "discount_percentage" INTEGER NOT NULL CHECK (discount_percentage > 0 AND discount_percentage <= 100),
    "start_date" TIMESTAMP DEFAULT now(),
    "end_date" TIMESTAMP DEFAULT NULL,
    CONSTRAINT chk_promotion_dates CHECK (end_date IS NULL OR end_date > start_date)
);

-- Table des messages
CREATE TABLE "messages" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "sender_id" UUID NOT NULL REFERENCES "users" ("id"),
    "receiver_id" UUID NOT NULL REFERENCES "users" ("id"),
    "reservation_id" UUID DEFAULT NULL REFERENCES "reservations" ("id"),
    "message" TEXT,
    "status" VARCHAR(20) NOT NULL REFERENCES "message_status" ("name"),
    "sent_at" TIMESTAMP DEFAULT now(),
    "read_at" TIMESTAMP DEFAULT NULL
);
CREATE POLICY "messages_sender_policy"
ON "messages"
USING ("sender_id" = current_setting('app.current_user')::UUID);

CREATE POLICY "messages_receiver_policy"
ON "messages"
USING ("receiver_id" = current_setting('app.current_user')::UUID);

ALTER TABLE "messages" ENABLE ROW LEVEL SECURITY;

-- Index pour optimiser les recherches
CREATE INDEX idx_users_email ON "users" ("email");
CREATE INDEX idx_logements_address ON "logements" ("address");
CREATE INDEX idx_reservations_dates ON "reservations" ("start_date", "end_date");
