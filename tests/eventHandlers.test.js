const cp = require('child_process')
describe('Google', () => {
  beforeAll(async() => {
    const pwd = cp.execSync('pwd', { encoding: 'utf8' })
    await page.goto(`file://${pwd}/pages/detail-page.html`, { waitUntil: "networkidle2" });
  })

  it('has been reassigned', async() => {
    const form = page.$('form')
    expect(2).toBe(1)
  })
})
