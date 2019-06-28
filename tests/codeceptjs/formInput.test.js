const cp = require('child_process')
const pwd = cp.execSync('pwd', { encoding: 'utf8' })

Feature('Comment Form');

Scenario('Add a comment', (I) => {
  I.amOnPage(`file://${pwd}/pages/detail-page.html`);
  I.fillField('Name', 'Mimi')
  I.fillField('Message', 'IAmVeryUnique')
  I.click('Post your comment')
  I.see('Mimi said:', '.comment')
  I.see('IAmVeryUnique', '.comment')
});
