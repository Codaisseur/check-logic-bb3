const cp = require('child_process')
const pwd = cp.execSync('pwd', { encoding: 'utf8' })

Feature('NoEmptyComments.js');

Scenario('An empty comment is not displayed', (I) => {
  I.amOnPage(`file://${pwd}/pages/detail-page.html`);
  I.fillField('Name', 'MyUniqueName')
  I.click('Post your comment')
  I.amAcceptingPopups()
  I.acceptPopup()
  I.dontSee('MyUniqueName', '.comment')
});
