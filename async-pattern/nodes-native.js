let utils = require('util')
const fs = require("fs");
const readFilePromise = utils.promisify(fs.readFile)
const writeFilePromise = utils.promisify(fs.writeFile)
let start = async () => {
    try {
      let first = await readFilePromise("./forPath/test.txt",'utf-8')
      let second = await readFilePromise("./forPath/test2.txt",'utf-8')
      let data = {
        first,
        second
      }
      await writeFilePromise('./forPath/nodes-native-option.txt',JSON.stringify(data));
    } catch (error) {
      console.log(error)
    }
  };
  
  start()