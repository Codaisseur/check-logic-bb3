const cp = require('child_process')
const pwd = cp.execSync('pwd', { encoding: 'utf8' })

Feature('NoAnonymousComments.js');

Scenario('A comment without name is not displayed', (I) => {
  I.amOnPage(`file://${pwd}/pages/detail-page.html`);
  I.fillField('Message', 'IAmVeryUnique')
  I.click('Post your comment')
  I.dontSee('IAmVeryUnique', '.comment')
});
