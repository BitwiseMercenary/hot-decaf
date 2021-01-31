const { brew } = require("../../index.js");

const main = async () => {
  const { modules, clean } = await brew("examples/react/ReactCoffeescript.js.coffee");
  console.log({ modules });

  clean();
};

main();
