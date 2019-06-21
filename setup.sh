#!/bin/bash
yarn init -y; 
yarn add jest html5-validator stylelint puppeteer jest-puppeteer; 
touch .stylelintIgnore;
touch jest.config.js;
echo 'check_logic\npackage.json\nyarn-error.log' >> .stylelintIgnore;
echo 'module.exports = {preset: "jest-puppeteer"}' >> jest.config.js;

