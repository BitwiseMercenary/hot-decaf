export const splitPathAndFile = (path) => {
  const directories = path.split("/");

  const file = directories[directories.length - 1];
  directories[directories.length - 1] = undefined;

  return { file, dir: directories.join("/") };
};
