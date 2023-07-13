const fs = require("fs");
const path = require("path");
const readFile = (path) => {
  return new Promise((resolve, rej) => {
    fs.readFile(path, "utf-8", (err, res) => {
      if (err) return rej(err);
      else resolve(res);
    });
  });
};
const writeFile = (path, data) => {
  return new Promise((resolve, rej) => {
    fs.writeFile(path, data, (err, res) => {
      if (err) return rej(err);
      resolve(res);
    });
  });
};

let start = async () => {
  try {
    let first = await readFile("./forPath/data.txt")
    await writeFile("./forPath/data4.txt", first)
  } catch (error) {
    console.log(error)
  }
};

start()