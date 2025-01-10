import { RootState } from "./store";
import { User } from "@etnair-etna/shared";

export const selectUser = (state: RootState): User | null => state.user.user;
