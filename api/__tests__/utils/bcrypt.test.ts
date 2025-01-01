import { hashPassword, comparePassword } from "../../src/utils/hashPassword.util";
import { describe, expect, it } from "@jest/globals";

describe("hashPassword", () => {
    it("should hash the password using bcrypt with the correct salt", async () => {
        const password = "test-1111";

        const hashedPassword = await hashPassword(password);

        expect(hashedPassword).not.toBe(password);

        const isMatch = await comparePassword(password, hashedPassword);

        expect(isMatch).toBe(true);

        
    });
});