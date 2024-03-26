import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
        },
      },
    ],
  },

  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/test/styleMock.js",
    "^@/(.*)$": ["<rootDir>/src/$1"],
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/models/**",
    "!src/app/banner/**",
    "!src/app/brands/**",
    "!**/__tests__/**",
    "!**/*.test.{ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 45,
      lines: 50,
    },
  },
};

export default config;
