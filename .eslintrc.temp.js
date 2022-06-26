// eslint-disable-next-line @skylib/no-restricted-syntax -- Wait for @skylib/eslint-plugin update
module.exports = {
  rules: { "import/no-unresolved": ["warn", { ignore: [/^vscode$/u.source] }] }
};
