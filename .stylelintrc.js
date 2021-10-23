module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/dollar-variable-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
  },
};
