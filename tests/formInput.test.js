const cp = require('child_process')


describe('form input is displayed in comment', () => {
  beforeAll(async() => {
    const pwd = cp.execSync('pwd', { encoding: 'utf8' })
    await page.goto(`file://${pwd}/pages/detail-page.html`, { waitUntil: "networkidle2" });
  })

  it('has been reassigned', async() => {
    const initialComments = await page.$$('.comment')
    await page.click("#name");
    await page.type("#name", 'Mimi');
    await page.click("#msg");
    await page.type("#msg", 'IAmVeryUnique')
    await page.click('button')
    const newComments = await page.$$('.comment')

    const result = initialComments.length < newComments.length

    expect(result).toBe(true)
  })
})
