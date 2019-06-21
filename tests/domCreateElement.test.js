const fs = require('fs');
const js = fs.readFileSync('./pages/detail-page.js', 'utf8')

describe('find elements', function () {
  it('`createElement()` is being called', function () {
    expect(js.includes('document.createElement(')).toBe(true);
  });
});
