module.exports = {
  // preset: "ts-jest", // 使用 ts-jest 进行 TypeScript 支持
  testEnvironment: "node", // 测试环境
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // 忽略的路径
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest", // 使用 babel-jest 转译 .ts 和 .tsx 文件
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
};
