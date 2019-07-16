module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  rules: {
    "no-unused-vars": "error",
    "react/sort-comp": [1],
    "max-len": ["error", 140, 2, {ignoreComments: true, "ignoreUrls": true}],
    "linebreak-style": ["error", "unix"],
    "prop-types": [2],
    "indent": ["error", 2],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "quotes": ["error", "single"]
  },
};
