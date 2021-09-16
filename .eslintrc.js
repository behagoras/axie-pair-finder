module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
