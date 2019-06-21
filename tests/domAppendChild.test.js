const fs = require('fs');
const js = fs.readFileSync('./pages/detail-page.js', 'utf8')

describe('find elements', function () {
  it('`appendChild()` is being called', function () {
    expect(js.includes('appendChild(')).toBe(true);
  });
});
