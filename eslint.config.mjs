import js from "@eslint/js";
import astroPlugin from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";
import globals from "globals";

const tsPlugins = { "@typescript-eslint": tsPlugin };
const tsRules = tsPlugin.configs.recommended.rules;

export default [
  { ignores: ["html/**", "node_modules/**", ".astro/**", ".history/**"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    plugins: tsPlugins,
    rules: tsRules,
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      globals: {
        Astro: "readonly",
        Fragment: "readonly",
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { ...tsPlugins, astro: astroPlugin },
    rules: { ...tsRules, ...astroPlugin.configs.recommended.rules },
  },
  prettier,
];
