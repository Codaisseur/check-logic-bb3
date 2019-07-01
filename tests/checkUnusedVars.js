const cp = require('child_process');

cp.exec(`yarn eslint --rule '"no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]' index.js pages/detail-page.js`, (stdout, stderr) => {
  console.log(stderr)
})
