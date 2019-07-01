const cp = require('child_process')
const fs = require('fs');
const pwd = cp.execSync('pwd', { encoding: 'utf8' })
const path = pwd.replace('\n', '')
const js = fs.readFileSync('./pages/detail-page.html', 'utf8')

const pageExists = fs.existsSync(`${path}/pages/detail-page.js`)
if (pageExists && js.includes('<script src="detail-page.js"')){
  console.log('Well Done!')
  process.exit(0)
}

console.log('I can\'t find `./pages/detail-page.js` or the text `<script src="detail-page.js`')
process.exit(1)
