module.exports = {
  overrides: [
    {
      files: "./src/extension.ts",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      )
    }
  ]
};
