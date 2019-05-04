module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['standard', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 0 : 2
  }
}
