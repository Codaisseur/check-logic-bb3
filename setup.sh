yarn init -y; 
yarn add jest html5-validator stylelint puppeteer jest-puppeteer eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node; 
touch .stylelintIgnore; 
touch .stylelintrc.json;
touch .eslintrc;
touch .eslintignore;
touch jest.config.js;
echo 'check_logic\npackage.json\nyarn-error.log' >> .stylelintIgnore;
echo '{ "rules": {"at-rule-no-unknown": true, "at-rule-semicolon-newline-after": "always", "block-no-empty": true, "block-opening-brace-newline-after": "always", "color-no-invalid-hex": true, "comment-no-empty": true, "declaration-block-no-duplicate-properties": true, "declaration-block-no-shorthand-property-overrides": true, "font-family-no-duplicate-names": true, "font-family-no-missing-generic-family-keyword": true, "no-duplicate-selectors": true, "no-empty-source": true, "no-extra-semicolons": true, "color-no-invalid-hex": true } }' >> .stylelintrc.json
echo '{"extends": "standard"}' >> .eslintrc
echo '/check_logic/' >> .eslintignore
echo 'module.exports = {preset: "jest-puppeteer"}' >> jest.config.js;
