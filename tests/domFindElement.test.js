const fs = require('fs');
const js = fs.readFileSync('./pages/detail-page.js', 'utf8')

describe('find elements', function () {
  it('`getElementById()` or `querySelector()` is being called', function () {
    const jsIncludesFindMethods = js.includes('document.getElementById(') || js.includes('document.querySelector');
    expect(jsIncludesFindMethods).toBe(true);
  });
});
