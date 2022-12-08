module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'function-paren-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'eol-last': 'off',
    indent: 'off',
    quotes: 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
