const fs = require("fs");
for (let index = 0; index < 1000; index++) {
    fs.writeFileSync('./forPath/big.txt',`hello world ${index}\n`,{flag:'a'})
}

