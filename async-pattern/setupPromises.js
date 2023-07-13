const fs = require("fs");
const path = require("path");
let data1 = "";
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
// callbacking of promises
readFile("./forPath/data.txt")
  .then((data) => {
    data1 = data;
    // callback to add data just for asynchronous and blocking
    writeFile("./forPath/data2.txt",data1)
      .then((res) => console.log("data has been added"))
      .catch((rej) => {
        console.log(rej);
      });
  })
  .catch((err) => console.log(err));
//   this means that data has not added in data3.txt because when readfile function is not executed then there is not any data from readfile function due to asynchronous way and it undergoes to event loop
// writeFile("./forPath/data3.txt", data1)
//   .then((res) => console.log("data has been added"))
//   .catch((rej) => {
//     console.log(rej);
//   });
