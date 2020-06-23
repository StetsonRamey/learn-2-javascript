module.exports = {
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "preact",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "max-len": [
      "warn",
      {
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  plugins: ["prettier", "react", "import", "jsx-a11y", "react-hooks"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
