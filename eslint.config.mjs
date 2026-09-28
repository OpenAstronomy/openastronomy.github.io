import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
  { ignores: ["html/", ".astro/"] },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
];
