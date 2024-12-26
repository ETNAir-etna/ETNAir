import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    verbose: true,
    transform: {
        "^.+\\.ts?$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    globals: {
        NODE_ENV: "test",
    },
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.ts$": "$1",
    },
    roots: ["../../__tests__"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
