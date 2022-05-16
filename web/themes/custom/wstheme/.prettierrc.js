const base = require('@storybook/linter-config/prettier.config');

module.exports = {
  ...base,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' },
    },
  ],
};
