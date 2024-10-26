import { type JestConfigWithTsJest, createDefaultPreset } from "ts-jest";
const defaultPreset = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  ...defaultPreset,
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default jestConfig;
