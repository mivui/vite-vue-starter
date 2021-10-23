module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'unit-allowed-list': ['em', 'rem', 's'],
      },
    },
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
