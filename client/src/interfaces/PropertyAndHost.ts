import { Property, User } from "@etnair-etna/shared";

export interface PropertyAndHost extends Property {
    host: User
}