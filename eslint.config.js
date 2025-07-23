// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const prettierPlugin = require("eslint-plugin-prettier");
const angularPlugin = require("@angular-eslint/eslint-plugin");
const angularTemplatePlugin = require("@angular-eslint/eslint-plugin-template");
const tsParser = require("@typescript-eslint/parser");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    ignores: ["index.html"],
    plugins: {
      prettier: prettierPlugin,
      "@angular-eslint": angularPlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.stylistic.rules,
      ...angularPlugin.configs.recommended.rules, // Angular TS rules

      "prettier/prettier": [
        "error",
        {
          bracketSpacing: true,
          singleQuote: true,
          semi: true,
          printWidth: 100,
          trailingComma: "es5",
        },
      ],

      "object-curly-spacing": ["error", "always"],
      "@angular-eslint/directive-selector": [
        "error",
        {type: "attribute", prefix: "app", style: "camelCase"},
      ],
      "@angular-eslint/component-selector": [
        "error",
        {type: "element", prefix: "app", style: "kebab-case"},
      ],
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplatePlugin,
    },
    rules: {
      ...angularTemplatePlugin.configs.recommended.rules,
      ...angularTemplatePlugin.configs.accessibility.rules,
    },
  }
);
