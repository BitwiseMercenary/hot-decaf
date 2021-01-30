const { morph } = require("../../index.js");

const main = async () => {
  const { modules, clean } = await morph("examples/react/ReactCoffeescript.js.coffee");
  console.log({ modules });

  clean();
};

main();
