module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
};
