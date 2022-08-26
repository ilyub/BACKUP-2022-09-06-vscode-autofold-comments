module.exports = {
  ignorePatterns: ["out/**"],
  extends: [
    "./node_modules/@skylib/config/eslint",
    "./node_modules/@skylib/config/eslint/special-locations",
    "./.eslintrc.overrides",
    "./.eslintrc.rule-overrides",
    "./.eslintrc.temp"
  ]
};
