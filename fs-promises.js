const fs = require("fs");
const path = require("path");
console.log('start')
let data = fs.promises
  .readFile(path.join("forPath", "test.txt"), "utf-8")
  .then((e) => {
    data = e;
    console.log(data)
    fs.promises
      .writeFile(
        path.join("forPath", "test2.txt"),
        data,{flag:'a'}
      )
      .then((e) => {
        console.log("created successfully");
      });
  });
console.log('Done this task')