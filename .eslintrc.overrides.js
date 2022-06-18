module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "github/no-then": "off",
    "import/no-unresolved": ["warn", { ignore: [/^vscode$/u.source] }],
    "promise/prefer-await-to-then": "off"
  }
};
