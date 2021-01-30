const { morph } = require("../../index.js");

const main = async () => {
  const { modules, clean } = await morph("examples/vanilla/tools.js.coffee");
  console.log(modules.math.root(16));
  console.log(modules.square(5));

  clean();
};

main();
