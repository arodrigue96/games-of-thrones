import { type JestConfigWithTsJest, createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  ...defaultPreset,
};

export default jestConfig;
