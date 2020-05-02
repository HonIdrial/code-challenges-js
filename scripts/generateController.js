const name = process.argv[3];

if (!name) {
  console.info(
`Usage: npm run generate controller NAME

Description: creates a controller, router, rules and test files:
src
  NAME
    NAME.controller.js
    NAME.router.js
    NAME.rules.js
test
  unit
    NAME.test.js`
  );

      return;
    }

console.info(`    create  controller ${name}`);

const fs = require('fs');
const folder = `./src/${name}`;

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
  console.info(`    route   ${folder}`);
}

console.info(`    invoke  ${folder}`);
_createFile(folder, `${name}.controller.js`);
_createFile(folder, `${name}.router.js`);
_createFile(folder, `${name}.rules.js`);

console.info('    invoke  ./test/unit');
_createFile(`./test/unit`, `${name}.test.js`);

function _createFile(folder, name) {
  console.info(`    create      ${name}`);

  if (!fs.existsSync(`${folder}/${name}`)) {
    fs.writeFile(`${folder}/${name}`, '', function (err) {
        if (err) { throw err; }
      });
  }
}
