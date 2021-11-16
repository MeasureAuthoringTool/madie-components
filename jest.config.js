module.exports = {
  roots: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg|woff)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.(css)$": "identity-obj-proxy",
    "system-font-css": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
