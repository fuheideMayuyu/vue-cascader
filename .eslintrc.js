module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: false,
  },
  rules: {
    'no-console': 'off',
  }
};
