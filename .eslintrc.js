module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "error",
  },
};
