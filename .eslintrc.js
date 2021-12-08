module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint-config-react-app",
    "airbnb-base",
    "prettier",
  ],
  plugins: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
