import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import xoTypeScript from "eslint-config-xo-typescript";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...xoTypeScript,
  {
    rules: {
      "@stylistic/quotes": "off",
      "@stylistic/indent": "off",
      "@stylistic/object-curly-spacing": "off",
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/function-paren-newline": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/operator-linebreak": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    },
  },
];
