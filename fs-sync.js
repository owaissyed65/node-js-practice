const fs = require("fs");
const path = require("path");
console.log('start')

let data = fs.readFileSync(path.join("forPath", "test.txt"),'utf-8')
console.log(data)
fs.writeFileSync(path.join("forPath", "fs-sync.txt"),data)
console.log('DOne this task')