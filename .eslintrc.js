module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['node_module', 'build', 'dist'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'spaced-comment': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'vue/require-default-prop': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  //reference https://github.com/benmosher/eslint-plugin-import/issues/1615#issuecomment-577500405
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.json'],
    'import/resolver': {
      typescript: {},
    },
  },
};
