const esModules = ["chalk"];
const esModulesTop = esModules.join("|");
const esModulesInPnpm = esModules.map((e) => `.pnpm/${e}`).join("|");

module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    `node_modules/(?!${esModulesTop}|${esModulesInPnpm})`, // 这里必须要给node_modules下的esm和pnpm下的都配置上
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
};
