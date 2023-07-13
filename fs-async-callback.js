const fs = require("fs");
const path = require("path");
console.log('start')
fs.readFile(path.join("forPath", "test.txt"), "utf-8", (err, res) => {
  if (err) return;
  console.log(res);
  fs.writeFile(
    path.join("forPath", "test2.txt"),
    res,
    { flag: "a" },
    (err, res) => {
      console.log("succesfully write");
    }
  );
});
console.log('Done this task')