// first read file of event loop
const fs = require("fs");
const path = require("path");
console.log('Start')
fs.readFile(
  path.join(__dirname, "forPath", "data.txt"),
  "utf-8",
  (err, res) => {
    console.log('in the read file')
    if (err) return;
    fs.writeFile(
      path.join(__dirname, "notes", "event-loop.txt"),
      res,
      (err, res) => {
        if(err) throw new Error(err)
        console.log('in the write file')
      }
    );
  }
);
console.log('task is completed')
