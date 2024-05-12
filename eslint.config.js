import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import parserVue from 'vue-eslint-parser';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  prettierConfig,
  prettierRecommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        NodeJS: false,
        defineProps: false,
        defineEmits: false,
        defineExpose: false,
        defineOptions: false,
        defineSlots: false,
        withDefaults: false,
        ElMessage: false,
        ElMessageBox: false,
        ElNotification: false,
        ElLoading: false,
      },
      parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'no-return-assign': 'off',
      'no-param-reassign': 'off',
      'no-await-in-loop': 'error',
      'no-use-before-define': 'off',
      'no-underscore-dangle': 'off',
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
        },
      ],
      'vue/object-curly-newline': 'error',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'default-case': 'off',
      'spaced-comment': 'off',
      'require-await': 'error',
      'consistent-return': 'off',
      'prettier/prettier': 'error',
      'object-curly-newline': 'off',
      'prefer-promise-reject-errors': 'off',
    },
    ignores: [
      'node_modules',
      'dist',
      'build',
      'package.json',
      '**/*.md',
      ' **/*.svg',
      '**/*.ejs',
      '**/*.html',
    ],
  },
);
