const generators = ['c', 'controller'];
const generator = process.argv[2];

if (!generator || !generators.includes(generator)) {
  console.info(
`Usage: npm run generate GENERATOR [args]

Please choose from the generators below:
    ${generators.join('\n    ')}`
  );

  return;
}

switch (generator) {
  case ('c'):
  case ('controller'):
    require('./generateController');
    break;
};
