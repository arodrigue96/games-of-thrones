import { type JestConfigWithTsJest, createDefaultPreset } from "ts-jest";
const defaultPreset = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  ...defaultPreset,
};

export default jestConfig;
