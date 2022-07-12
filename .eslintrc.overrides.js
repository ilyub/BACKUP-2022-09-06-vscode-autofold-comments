module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc.allow-promises"),
    require.resolve("@skylib/config/src/eslintrc.allow-promises-floating"),
    require.resolve("@skylib/config/src/eslintrc.skip-only-export-check")
  ]
};
