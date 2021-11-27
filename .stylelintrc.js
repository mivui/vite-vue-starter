module.exports = {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
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
