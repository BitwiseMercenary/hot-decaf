const fs = require("fs");
const nodepath = require("path");
const through = require("through2");
const coffee = require("coffeescript");

const morph = async (path) => {
  const { dir, base } = nodepath.parse(path);

  const output = `${dir}/${base}.coffeemorph.js`;

  fs.createReadStream(path)
    .pipe(through({ objectMode: true, allowHalfOpen: false },
      (buffer, enc, cb) => {
        let data;
        const str = buffer.toString("utf8");

        const options = {
          bare: false,
          coffee,
          header: false,
          sourceMap: false,
          sourceRoot: false
        };
        try {
          data = options.coffee.compile(str, options);
        } catch (err) {
          console.log({ err });
        }
        buffer = Buffer.from(data);
        cb(null, buffer);
      }
    ))
    .pipe(fs.createWriteStream(output));

  const modules = await import(`./${output}`);
  const clean = () => fs.unlink(output, (err) => {
    if (err) {
      console.error(err);
    }
    // file removed
  });

  return { modules, clean };
};

module.exports = {
  morph
};
