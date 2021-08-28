module.exports = {

  env: {
    es6: true,
    node: true,
  },

  extends: ['prettier'],
  plugins: ['prettier'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    'class-methods-use-this': 'off', // deactivate a rule that says that every method of a class needs the word this
    'no-param-reassign': 'off', // deactivate a rule that says that it's not allowed to recive a parameter and change it
    'jsx-quotes': ['error', 'prefer-single'],
  },
};
